import { NextResponse } from "next/server";
import { pool } from "@/lib/db";
import bcrypt from "bcryptjs";
import { signJWT } from "@/lib/auth"; // Implemented below

export async function POST(req: Request) {
  const { email, password } = await req.json();
  const [rows] = await pool.query("SELECT * FROM users WHERE email=?", [email]);
  if (!rows.length) return NextResponse.json({ error: "User not found" }, { status: 404 });

  const user = rows[0];
  const match = await bcrypt.compare(password, user.password);
  if (!match) return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });

  const jwt = signJWT({ id: user.id, email });
  const res = NextResponse.json({ success: true });
  res.cookies.set("session_token", jwt, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 1 week
    secure: process.env.NODE_ENV === "production"
  });
  return res;
}
