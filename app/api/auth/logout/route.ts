import { NextResponse } from "next/server";

export async function POST() {
  const res = NextResponse.json({ success: true });
  res.cookies.set("session_token", "", {
    httpOnly: true,
    path: "/",
    expires: new Date(0),
  });
  return res;
}
