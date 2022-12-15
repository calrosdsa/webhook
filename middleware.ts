
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware (request: NextRequest) {
  const response = NextResponse.next()
  response.cookies.set('vercel', 'fast')
  // response.cookies.set({
  //   name: 'vercel',
  //   value: 'fast',
  //   path: '/',
  // })
  // const cookie = response.cookies.get('vercel')
  // console.log(cookie)
  // console.log(request);
  return NextResponse.next()
}