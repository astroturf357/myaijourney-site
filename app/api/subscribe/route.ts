import { NextRequest, NextResponse } from 'next/server';
const BREVO_URL = 'https://api.brevo.com/v3';
export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    if (!email || !email.includes('@')) return NextResponse.json({ error: 'Valid email required.' }, { status: 400 });
    const apiKey = process.env.BREVO_API_KEY || '';
    const h = { 'api-key': apiKey, 'Content-Type': 'application/json' };
    await fetch(`${BREVO_URL}/contacts`, { method: 'POST', headers: h, body: JSON.stringify({ email, updateEnabled: true }) });
    await fetch(`${BREVO_URL}/smtp/email`, { method: 'POST', headers: h, body: JSON.stringify({ sender: { name: 'Jim at MyAIJourney', email: 'support@myaijourney.org' }, to: [{ email }], subject: 'Welcome to MyAIJourney!', htmlContent: '<p>Thanks for subscribing! Visit <a href="https://myaijourney.org/blog">myaijourney.org/blog</a> for the latest reviews.</p>' }) });
    return NextResponse.json({ message: 'You are subscribed! Check your inbox.' });
  } catch { return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 }); }
}
