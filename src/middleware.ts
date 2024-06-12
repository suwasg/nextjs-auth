import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// Logic Part
export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname
    
    const isPublicPath = path === '/login' || path === '/signup'

    const token = request.cookies.get("token")?.value || ""

    if (isPublicPath && token){
        return NextResponse.redirect(new URL('/', request.nextUrl));
    };

    if (!isPublicPath && !token){
        return NextResponse.redirect(new URL('/login', request.nextUrl));
    };
}
 
// Matching Part
export const config = {
  matcher: [
    '/',
    '/profile/:path*',
    '/login', 
    '/signup',
  ],
}