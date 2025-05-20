import { NextResponse } from "next/server";
import { db } from "@/lib/db";

// GET: List all users
export async function GET() {
  try {
    const [rows]: any = await db.query("SELECT * FROM users ORDER BY created_at DESC");
    return NextResponse.json(rows);
  } catch (error: any) {
    console.error("GET error:", error);
    return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
  }
}

// PUT: Toggle user verification
export async function PUT(req: Request) {
  try {
    const { id, is_verified } = await req.json();
    await db.query("UPDATE users SET is_verified = ? WHERE id = ?", [is_verified, id]);
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("PUT error:", error);
    return NextResponse.json({ error: "Failed to update user" }, { status: 500 });
  }
}
