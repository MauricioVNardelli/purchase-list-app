import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {  
  const cookie = request.cookies.get('purchase-list-app.token');
  const token = cookie?.value;  

  if (!token && !request.nextUrl.pathname.startsWith('/login'))
    return NextResponse.redirect(new URL('/login', request.url))

  if (token && !request.nextUrl.pathname.startsWith('/system'))
    return NextResponse.redirect(new URL('/system/dashboard', request.url))
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}