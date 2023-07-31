import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: Request) {
  return new Response('Hello, Next.js!')
}

export async function POST(req: NextRequest) {
  const body = await req.json()
  const cookies = req.cookies.getAll()
  const headers = req.headers.get('Authorization')

  console.log(body, cookies, headers)

  return new Response('OK', {
    status: 200,
  })
}
