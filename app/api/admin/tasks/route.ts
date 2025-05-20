import { db } from "@/lib/db";
import { NextResponse } from "next/server";

// GET /api/admin/tasks - fetch all tasks
export async function GET() {
  try {
    const [rows]: any = await db.query("SELECT * FROM tasks ORDER BY start_time DESC");
    return NextResponse.json(rows);
  } catch (error: any) {
    console.error("Failed to load tasks:", error);
    return NextResponse.json({ error: "Could not fetch tasks" }, { status: 500 });
  }
}
