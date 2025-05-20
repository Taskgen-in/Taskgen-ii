// /app/api/tasks/[id]/route.ts

import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(
  _: Request,
  { params }: { params: { id: string } }
) {
  try {
    const [rows] = await db.query("SELECT * FROM tasks WHERE id = ?", [params.id]);

    if (!rows || rows.length === 0) {
      return NextResponse.json({ error: "Task not found" }, { status: 404 });
    }

    return NextResponse.json(rows[0]);
  } catch (err) {
    console.error("Error fetching task details:", err);
    return NextResponse.json({ error: "Failed to load task" }, { status: 500 });
  }
}
