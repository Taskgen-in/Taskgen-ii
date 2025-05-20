import { NextResponse } from "next/server";
import { db } from "@/lib/db";

// GET /api/admin/payments — fetch all payment records
export async function GET() {
  try {
    const [rows]: any = await db.query(
      "SELECT * FROM payment_verifications ORDER BY submitted_at DESC"
    );
    return NextResponse.json(rows);
  } catch (error: any) {
    console.error("GET error:", error);
    return NextResponse.json({ error: "Failed to fetch payments" }, { status: 500 });
  }
}

// PUT /api/admin/payments — update status
export async function PUT(req: Request) {
  try {
    const { id, status } = await req.json();

    if (!["verified", "rejected"].includes(status)) {
      return NextResponse.json({ error: "Invalid status" }, { status: 400 });
    }

    await db.query(
      "UPDATE payment_verifications SET status = ? WHERE id = ?",
      [status, id]
    );

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("PUT error:", error);
    return NextResponse.json({ error: "Failed to update payment" }, { status: 500 });
  }
}
