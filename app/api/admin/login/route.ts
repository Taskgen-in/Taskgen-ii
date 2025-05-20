import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const [rows]: any = await db.query("SELECT * FROM admins WHERE email = ?", [email]);
  const admin = rows[0];
  console.log({ rows });


  if (!admin) {
    return NextResponse.json({ success: false, message: "Admin not found" }, { status: 401 });
  }

  const isValid = await bcrypt.compare(password, admin.password_hash);
  if (!isValid) {
    return NextResponse.json({ success: false, message: "Invalid password" }, { status: 401 });
  }

  // Store session cookie manually (simple)
  return NextResponse.json({ success: true }, {
    status: 200,
    headers: {
      "Set-Cookie": `admin_session=${admin.id}; Path=/; HttpOnly; Max-Age=86400`,
    }
  });
}
