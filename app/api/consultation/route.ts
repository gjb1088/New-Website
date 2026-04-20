export const runtime = 'edge';
import { NextResponse } from 'next/server';
import { getGraphToken } from '@/lib/getGraphToken';

export async function POST(req: Request) {
  const { name, email, company, service, description, time, timeISO } = await req.json();

  const { accessToken } = await getGraphToken();

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
