export const runtime = 'edge';
import { NextResponse } from 'next/server';
import { getGraphToken } from '@/lib/getGraphToken';

export async function POST(req: Request) {
  const { name, email, company, message, time, timeISO } = await req.json();

  const { accessToken } = await getGraphToken();

  const dateLines = time
    ? `\nPreferred Time: ${time}\nPreferred Time (ISO): ${timeISO}`
    : '';

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
      method:  'POST',
      headers: {
        Authorization:  `Bearer ${accessToken}`,
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
