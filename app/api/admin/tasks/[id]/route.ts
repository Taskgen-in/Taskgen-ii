import { db } from "@/lib/db";
import { NextResponse } from "next/server";

// GET /api/admin/tasks/[id]
export async function GET(_: Request, { params }: { params: { id: string } }) {
  const taskId = params.id;

  try {
    // Fetch task
    const [taskRows]: any = await db.query(
      "SELECT * FROM tasks WHERE id = ?",
      [taskId]
    );

    if (!taskRows.length) {
      return NextResponse.json({ error: "Task not found" }, { status: 404 });
    }

    const task = taskRows[0];

    // Fetch assigned users
    const [userRows]: any = await db.query(
      `SELECT u.id, u.name, u.email, ut.assigned_at
       FROM user_tasks ut
       JOIN users u ON ut.user_id = u.id
       WHERE ut.task_id = ?`,
      [taskId]
    );

    return NextResponse.json({ task, users: userRows });
  } catch (error: any) {
    console.error("Failed to load task detail:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
