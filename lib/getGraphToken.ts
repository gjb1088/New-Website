export type GraphToken = { accessToken: string; expiresIn: number };

export async function getGraphToken(): Promise<GraphToken> {
  const tenant   = process.env.AZURE_TENANT_ID!;
  const clientId = process.env.AZURE_CLIENT_ID!;
  const secret   = process.env.AZURE_CLIENT_SECRET!;
  const scope    = process.env.GRAPH_SCOPE!;

  const params = new URLSearchParams({
    client_id:     clientId,
    client_secret: secret,
    scope:         scope,
    grant_type:    'client_credentials',
  });

  const res = await fetch(
    `https://login.microsoftonline.com/${tenant}/oauth2/v2.0/token`,
    {
      method:  'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body:    params.toString(),
    }
  );

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Token endpoint error ${res.status}: ${text}`);
  }

  const json = await res.json() as { access_token: string; expires_in: number };

  return {
    accessToken: json.access_token,
    expiresIn:   json.expires_in,
  };
}
