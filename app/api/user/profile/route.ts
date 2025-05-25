import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyJWT } from "@/lib/auth";
import { pool } from "@/lib/db";

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get("session_token")?.value;

  if (!token) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const payload = verifyJWT(token);
  if (!payload) return NextResponse.json({ error: "Invalid token" }, { status: 401 });

  // Map columns to API keys with alias (NO underscore!)
  const [rows] = await pool.query(
    "SELECT is_verified as emailVerified, mobile_verified, kyc_verified as kycCompleted, payment_setup FROM users WHERE id = ?",
    [payload.id]
  );
  if (!rows.length) return NextResponse.json({ error: "User not found" }, { status: 404 });

  const user = rows[0];
  return NextResponse.json({
    emailVerified: !!user.emailVerified,
    mobileVerified: !!user.mobile_verified,
    kycCompleted: !!user.kycCompleted,
    paymentSetup: !!user.payment_setup
  });
}
