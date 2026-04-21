export const runtime = 'edge';
import { NextResponse } from 'next/server';
import { getGraphToken } from '@/lib/getGraphToken';

const MAX_LEN = { name: 120, email: 254, company: 200, message: 4000 };

export async function POST(req: Request) {
  if (!req.headers.get('content-type')?.includes('application/json')) {
    return NextResponse.json({ error: 'Invalid content type' }, { status: 415 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const name    = typeof body.name    === 'string' ? body.name.slice(0, MAX_LEN.name)    : '';
  const email   = typeof body.email   === 'string' ? body.email.slice(0, MAX_LEN.email)   : '';
  const company = typeof body.company === 'string' ? body.company.slice(0, MAX_LEN.company) : '';
  const message = typeof body.message === 'string' ? body.message.slice(0, MAX_LEN.message) : '';
  const time    = typeof body.time    === 'string' ? body.time.slice(0, 100)    : '';
  const timeISO = typeof body.timeISO === 'string' ? body.timeISO.slice(0, 50) : '';

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
  }

  let accessToken: string;
  try {
    ({ accessToken } = await getGraphToken());
  } catch {
    return NextResponse.json({ error: 'Mail service unavailable' }, { status: 503 });
  }

  const dateLines = time ? `\nPreferred Time: ${time}\nPreferred Time (ISO): ${timeISO}` : '';

  const mailPayload = {
    message: {
      subject: `New message from ${name}${company ? ` (${company})` : ''}`,
      body: {
        contentType: 'Text',
        content: `From: ${name}\nEmail: ${email}${company ? `\nCompany: ${company}` : ''}${dateLines}\n\n${message}`,
      },
      toRecipients: [
        { emailAddress: { address: process.env.CONTACT_RECIPIENT! } },
      ],
    },
    saveToSentItems: false,
  };

  const res = await fetch(
    `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(process.env.SMTP_USER!)}/sendMail`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(mailPayload),
    }
  );

  if (!res.ok) {
    const text = await res.text();
    return NextResponse.json({ error: text }, { status: res.status });
  }

  return NextResponse.json({ success: true });
}
