import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const adminSession = request.cookies.get("admin_session")?.value;

  const isAdminPath = request.nextUrl.pathname.startsWith("/admin");

  if (isAdminPath && !adminSession && request.nextUrl.pathname !== "/admin/login") {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  return NextResponse.next();
}

// Apply middleware only to /admin routes
export const config = {
  matcher: ["/admin/:path*"],
};
