import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // Get the origin dynamically (works for both dev and prod)
  const origin = new URL(request.url).origin;
  const response = NextResponse.redirect(origin + "/login");
  response.cookies.set({
    name: "user_id",
    value: "",
    path: "/",
    expires: new Date(0),
  });
  return response;
}
