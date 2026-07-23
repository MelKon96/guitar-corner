// import createMiddleware from "next-intl/middleware";
// import { routing } from "./i18n/routing";

// export default createMiddleware(routing);

// export const config = {
//   matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
import { NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/en", "https://guitar-corner-frontend.onrender.com"));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
