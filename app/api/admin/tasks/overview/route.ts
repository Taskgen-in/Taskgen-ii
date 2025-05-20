import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const [rows]: any = await db.query(`
      SELECT 
        t.id, 
        t.title,
        COUNT(ut.user_id) AS assigned_user_count
      FROM tasks t
      LEFT JOIN user_tasks ut ON ut.task_id = t.id
      GROUP BY t.id
      ORDER BY t.start_time DESC
    `);

    const formatted = rows.map((t: any) => ({
      id: t.id,
      title: t.title,
      status: "unknown", // fallback value
      assigned_user_count: Number(t.assigned_user_count || 0),
    }));

    return NextResponse.json(formatted);
  } catch (error) {
    console.error("Error loading task overview:", error);
    return NextResponse.json({ error: "Could not load tasks." }, { status: 500 });
  }
}
