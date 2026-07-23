// import createMiddleware from "next-intl/middleware";
// import { routing } from "./i18n/routing";

// export default createMiddleware(routing);

// export const config = {
//   matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
// };

import { NextRequest, NextResponse } from 'next/server';

const locales = ['en', 'es', 'fr'];
const defaultLocale = 'en';

function getLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get('accept-language');
  if (!acceptLanguage) return defaultLocale;

  const preferred = acceptLanguage.split(',')[0].split('-')[0];
  return locales.includes(preferred) ? preferred : defaultLocale;
}

export default function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/') {
    const locale = getLocale(request);
    return NextResponse.redirect(new URL(`/${locale}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/']
};