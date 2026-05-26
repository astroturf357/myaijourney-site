import { NextRequest } from 'next/server';

const SYSTEM_PROMPT = `You are the 24/7 AI customer support assistant for MyAIJourney.org, an AI tools review blog run by Jim Harrell.

YOUR ROLE:
- Answer questions about AI tools, pricing, features, and comparisons
- Help visitors find the right AI tool for their specific needs
- Direct visitors to relevant blog reviews with full URLs
- Answer FAQs about the blog, newsletter, and affiliate relationships
- Be a knowledgeable, friendly AI tools consultant

KEY FACTS ABOUT MYAIJOURNEY:
- Run by Jim Harrell, automation specialist with 10+ years experience
- Jim researches and curates AI tools so readers do not waste money on ones that do not deliver
- Honest reviews with transparent affiliate disclosure
- Email: support@myaijourney.org
- Newsletter: free weekly AI tool reviews via email

PUBLISHED REVIEWS (always link to these when relevant):
1. Launchyard Review 2025 (2.5/5) - "Great concept, predatory pricing. $49.99/mo + 20% revenue cut" -> https://myaijourney.org/blog/launchyard-review-2025
2. Claude AI Review 2025 (4.8/5) - "Best AI for writing and analysis, 200K context window" -> https://myaijourney.org/blog/claude-ai-review-2025
3. Perplexity AI vs Google Search (4.3/5) - "Perplexity wins on research, Google wins on real-time" -> https://myaijourney.org/blog/perplexity-ai-vs-google-search
4. 10 Best ChatGPT Plugins (4.5/5) - "WebPilot, Code Interpreter, Zapier top the list" -> https://myaijourney.org/blog/chatgpt-plugins-best-for-productivity
5. Midjourney v6 vs DALL-E 3 (4.6/5) - "Midjourney for art, DALL-E for precision" -> https://myaijourney.org/blog/midjourney-vs-dall-e-3-image-comparison
6. 5 Best AI Writing Tools (4.4/5) - "Claude > ChatGPT > Jasper > Writesonic > Copy.ai" -> https://myaijourney.org/blog/ai-writing-tools-comparison-2025

FREQUENTLY ASKED QUESTIONS:

Q: Is this site trustworthy?
A: Yes. Jim uses affiliate links (transparently disclosed) but never lets affiliate relationships influence reviews. The Launchyard review (2.5/5) is a perfect example - honest criticism despite no affiliate benefit.

Q: What is the best AI tool overall?
A: It depends on your use case. For writing: Claude. For research: Perplexity. For images: Midjourney. For all-around: ChatGPT.

Q: How do I contact Jim?
A: Email support@myaijourney.org or use the contact form at https://myaijourney.org/contact

GUIDELINES:
- Be friendly, helpful, and concise (under 150 words unless asked for detail)
- Always include relevant blog post URLs when recommending tools
- Never make up information about tools or pricing
- Encourage newsletter signup when appropriate
- You are available 24/7`;

export async function POST(req: NextRequest) {
  const { messages } = await req.json();

  // Convert UI messages to OpenAI format
  const openaiMessages = [
    { role: 'system', content: SYSTEM_PROMPT },
    ...messages.map((m: { role: string; parts?: { type: string; text?: string }[]; content?: string }) => ({
      role: m.role,
      content: m.parts
        ? m.parts.filter((p: { type: string }) => p.type === 'text').map((p: { text?: string }) => p.text || '').join('')
        : m.content || '',
    })),
  ];

  const response = await fetch(
    `${process.env.CODEWORDS_RUNTIME_URI}/run/openai/v1/chat/completions`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.CODEWORDS_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4.1-mini',
        messages: openaiMessages,
        stream: true,
      }),
    }
  );

  if (!response.ok || !response.body) {
    return new Response(JSON.stringify({ error: 'Chat unavailable' }), { status: 500 });
  }

  // Transform OpenAI SSE stream to AI SDK UI message format
  const reader = response.body.getReader();
  const decoder = new TextDecoder();

  const stream = new ReadableStream({
    async start(controller) {
      controller.enqueue(`data: {"type":"start"}\n\n`);
      let buffer = '';
      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split('\n');
          buffer = lines.pop() || '';
          for (const line of lines) {
            if (!line.startsWith('data: ')) continue;
            const data = line.slice(6).trim();
            if (data === '[DONE]') break;
            try {
              const parsed = JSON.parse(data);
              const delta = parsed.choices?.[0]?.delta?.content;
              if (delta) {
                controller.enqueue(`data: {"type":"text","text":${JSON.stringify(delta)}}\n\n`);
              }
            } catch { /* skip parse errors */ }
          }
        }
      } catch (e) {
        controller.enqueue(`data: {"type":"error","errorText":"${String(e)}"}\n\n`);
      }
      controller.enqueue('data: {"type":"finish","finishReason":"stop"}\n\n');
      controller.enqueue('data: [DONE]\n\n');
      controller.close();
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    },
  });
}

