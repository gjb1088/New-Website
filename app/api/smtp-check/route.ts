export const runtime = 'edge';
import { NextResponse } from 'next/server';
import { getGraphToken } from '@/lib/getGraphToken';

export async function POST() {
  try {
    const { accessToken, expiresIn } = await getGraphToken();
    return NextResponse.json({ ok: true, expiresIn });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
