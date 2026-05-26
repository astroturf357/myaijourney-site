'use client';

import { useState, useRef, useEffect } from 'react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  text: string;
}

const t = {
  en: {
    title: 'MyAIJourney Assistant',
    online: 'Online • 24/7 AI Help',
    typing: 'Typing...',
    howHelp: 'How can I help?',
    askSub: 'Ask me about AI tools, get recommendations, or find the right tool for your needs.',
    placeholder: 'Ask about AI tools...',
    error: 'Sorry, I could not respond right now. Please try again.',
    questions: ['Which AI assistant is best for writing?', 'Compare ChatGPT vs Claude', 'Best AI image generator in 2025?'],
  },
  es: {
    title: 'Asistente MyAIJourney',
    online: 'En línea • Ayuda IA 24/7',
    typing: 'Escribiendo...',
    howHelp: '¿Cómo puedo ayudarte?',
    askSub: 'Pregúntame sobre herramientas de IA, obtén recomendaciones o encuentra la herramienta adecuada.',
    placeholder: 'Pregunta sobre herramientas IA...',
    error: 'Lo siento, no pude responder en este momento. Inténtalo de nuevo.',
    questions: ['¿Cuál es el mejor asistente IA para escribir?', 'Compara ChatGPT vs Claude', '¿Mejor generador de imágenes IA en 2025?'],
  },
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const isSpanish = typeof window !== 'undefined' && window.location.pathname.startsWith('/es');
  const lang = isSpanish ? t.es : t.en;

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus();
  }, [open]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;
    const langHint = isSpanish ? ' [RESPOND IN SPANISH]' : '';
    const userMsg: Message = { id: Date.now().toString(), role: 'user', text };
    const assistantMsg: Message = { id: (Date.now() + 1).toString(), role: 'assistant', text: '' };
    setMessages((prev) => [...prev, userMsg, assistantMsg]);
    setIsLoading(true);
    setInput('');

    try {
      const allMessages = [...messages, userMsg].map((m) => ({
        id: m.id,
        role: m.role,
        parts: [{ type: 'text', text: m.text + (m === userMsg ? langHint : '') }],
      }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: allMessages }),
      });

      if (!res.ok || !res.body) throw new Error('Chat failed');

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';
      let fullText = '';

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
            if (parsed.type === 'text' && parsed.text) {
              fullText += parsed.text;
              setMessages((prev) => {
                const updated = [...prev];
                updated[updated.length - 1] = { ...updated[updated.length - 1], text: fullText };
                return updated;
              });
            }
          } catch { /* skip */ }
        }
      }
    } catch {
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = { ...updated[updated.length - 1], text: lang.error };
        return updated;
      });
    }
    setIsLoading(false);
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close chat' : 'Open chat assistant'}
        style={{ position: 'fixed', bottom: '28px', right: '28px', width: '56px', height: '56px', borderRadius: '50%', background: 'linear-gradient(135deg, #2563EB 0%, #1d4ed8 100%)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 20px rgba(37,99,235,0.4)', zIndex: 9999, transition: 'transform 0.2s' }}
        onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.08)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12" /></svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
        )}
      </button>

      {open && (
        <div style={{ position: 'fixed', bottom: '96px', right: '28px', width: '380px', maxWidth: 'calc(100vw - 48px)', height: '520px', maxHeight: 'calc(100vh - 120px)', background: '#ffffff', borderRadius: '16px', boxShadow: '0 10px 40px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', overflow: 'hidden', zIndex: 9998, animation: 'chatSlideUp 0.25s ease' }}>
          <div style={{ background: 'linear-gradient(135deg, #2563EB 0%, #1d4ed8 100%)', padding: '18px 20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>
            </div>
            <div>
              <p style={{ color: '#ffffff', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.95rem', margin: 0 }}>{lang.title}</p>
              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.75rem', margin: 0 }}>{isLoading ? lang.typing : lang.online}</p>
            </div>
          </div>

          <div style={{ flex: 1, overflowY: 'auto', padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px', background: '#f8fafc' }}>
            {messages.length === 0 && (
              <div style={{ textAlign: 'center', padding: '32px 16px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(37,99,235,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
                </div>
                <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, color: '#1E293B', fontSize: '0.95rem', marginBottom: '8px' }}>{lang.howHelp}</p>
                <p style={{ color: '#64748B', fontSize: '0.85rem', lineHeight: 1.5 }}>{lang.askSub}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '16px' }}>
                  {lang.questions.map((q) => (
                    <button key={q} onClick={() => sendMessage(q)} style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '10px 14px', fontSize: '0.82rem', color: '#2563EB', cursor: 'pointer', textAlign: 'left', fontFamily: 'var(--font-body)', transition: 'all 0.15s' }}
                      onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#2563EB'; e.currentTarget.style.background = 'rgba(37,99,235,0.04)'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.background = '#ffffff'; }}>
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((m) => (
              <div key={m.id} style={{ display: 'flex', justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start' }}>
                <div style={{ maxWidth: '85%', padding: '10px 14px', borderRadius: m.role === 'user' ? '12px 12px 2px 12px' : '12px 12px 12px 2px', background: m.role === 'user' ? '#2563EB' : '#ffffff', color: m.role === 'user' ? '#ffffff' : '#1E293B', fontSize: '0.88rem', lineHeight: 1.55, border: m.role === 'user' ? 'none' : '1px solid #e2e8f0', boxShadow: m.role === 'user' ? 'none' : '0 1px 3px rgba(0,0,0,0.04)', fontFamily: 'var(--font-body)', whiteSpace: 'pre-wrap' }}>
                  {m.text || (isLoading && m.role === 'assistant' ? '...' : '')}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={(e) => { e.preventDefault(); sendMessage(input); }} style={{ padding: '12px 16px', borderTop: '1px solid #e2e8f0', display: 'flex', gap: '8px', background: '#ffffff' }}>
            <input ref={inputRef} value={input} onChange={(e) => setInput(e.target.value)} disabled={isLoading} placeholder={lang.placeholder} style={{ flex: 1, padding: '10px 14px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.88rem', fontFamily: 'var(--font-body)', outline: 'none', transition: 'border-color 0.15s', background: '#f8fafc' }}
              onFocus={(e) => { e.target.style.borderColor = '#2563EB'; }}
              onBlur={(e) => { e.target.style.borderColor = '#e2e8f0'; }} />
            <button type="submit" disabled={isLoading || !input.trim()} style={{ width: '40px', height: '40px', borderRadius: '8px', background: input.trim() && !isLoading ? '#2563EB' : '#e2e8f0', border: 'none', cursor: input.trim() && !isLoading ? 'pointer' : 'default', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.15s', flexShrink: 0 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={input.trim() && !isLoading ? 'white' : '#94A3B8'} strokeWidth="2.5" strokeLinecap="round"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
            </button>
          </form>
        </div>
      )}

      <style>{`
        @keyframes chatSlideUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </>
  );
}

