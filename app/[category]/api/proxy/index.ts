// app/api/proxy/route.ts
export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const endpoint = searchParams.get('endpoint');

  const res = await fetch(`http://api:3000/${endpoint}`);
  return new Response(res.body, {
    status: res.status,
    headers: res.headers,
  });
}
