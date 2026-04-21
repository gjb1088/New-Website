export const runtime = 'edge';
import { NextResponse } from 'next/server';
import { getGraphToken } from '@/lib/getGraphToken';

const MAX_LEN = { name: 120, email: 254, company: 200, service: 200, description: 4000 };

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

  const name        = typeof body.name        === 'string' ? body.name.slice(0, MAX_LEN.name)              : '';
  const email       = typeof body.email       === 'string' ? body.email.slice(0, MAX_LEN.email)             : '';
  const company     = typeof body.company     === 'string' ? body.company.slice(0, MAX_LEN.company)         : '';
  const service     = typeof body.service     === 'string' ? body.service.slice(0, MAX_LEN.service)         : '';
  const description = typeof body.description === 'string' ? body.description.slice(0, MAX_LEN.description) : '';
  const time        = typeof body.time        === 'string' ? body.time.slice(0, 100)    : '';
  const timeISO     = typeof body.timeISO     === 'string' ? body.timeISO.slice(0, 50) : '';

  if (!name || !email || !company || !service) {
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

  const mailPayload = {
    message: {
      subject: `Consultation Request from ${name}`,
      body: {
        contentType: 'Text',
        content:
          `Full Name: ${name}\n` +
          `Business Email: ${email}\n` +
          `Company / Organization: ${company}\n` +
          `Service Interested In: ${service}\n` +
          `Preferred Time: ${time}\n` +
          `Preferred Time (ISO): ${timeISO}\n\n` +
          `${description}`,
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
