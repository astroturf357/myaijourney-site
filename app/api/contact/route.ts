import { NextRequest, NextResponse } from 'next/server';
const BREVO_URL = 'https://api.brevo.com/v3/smtp/email';
export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();
    if (!name || !email || !subject || !message) return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    const apiKey = process.env.BREVO_API_KEY || '';
    const headers = { 'api-key': apiKey, 'Content-Type': 'application/json' };
    const res = await fetch(BREVO_URL, { method: 'POST', headers, body: JSON.stringify({ sender: { name: 'MyAIJourney', email: 'support@myaijourney.org' }, to: [{ email: 'cowboyjim357@gmail.com', name: 'Jim Harrell' }], subject: `[Contact] ${subject}`, htmlContent: `<p><b>From:</b> ${name} &lt;${email}&gt;</p><p><b>Subject:</b> ${subject}</p><p>${message}</p>` }) });
    if (!res.ok) return NextResponse.json({ error: 'Failed to send.' }, { status: 500 });
    return NextResponse.json({ message: 'Message sent! Check your inbox for a confirmation.' });
  } catch { return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 }); }
}
