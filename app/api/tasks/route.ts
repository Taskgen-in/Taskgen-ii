import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { db } from "@/lib/db";

// GET /api/tasks?type=available|inprogress|completed
export async function GET(req: NextRequest) {
  const headerList = await headers();
  const cookieHeader = headerList.get("cookie") || "";
  const match = cookieHeader.match(/user_id=([^;]+)/);
  const user_id = match?.[1];

  if (!user_id) return NextResponse.json({ error: "Not authenticated" }, { status: 401 });

  const type = req.nextUrl.searchParams.get("type");
  let tasks: any[] = [];

  if (type === "available") {
    // Tasks NOT yet accepted by this user, with assigned count
    [tasks] = await db.query(`
      SELECT t.*,
        (SELECT COUNT(*) FROM user_tasks ut WHERE ut.task_id = t.id) AS assigned
      FROM tasks t
      WHERE t.id NOT IN (
        SELECT task_id FROM user_tasks WHERE user_id = ?
      )
    `, [user_id]);
    console.log("Available tasks:", tasks);

  } else if (type === "inprogress") {
    // Tasks accepted by user and status is in_progress
    [tasks] = await db.query(`
      SELECT t.*,
        (SELECT COUNT(*) FROM user_tasks ut WHERE ut.task_id = t.id) AS assigned
      FROM tasks t
      JOIN user_tasks ut ON ut.task_id = t.id
      WHERE ut.user_id = ? AND ut.status = 'in_progress'
    `, [user_id]);
    console.log("In progress tasks:", tasks);

  } else if (type === "completed") {
    // Tasks accepted by user and status is completed
    [tasks] = await db.query(`
      SELECT t.*,
        (SELECT COUNT(*) FROM user_tasks ut WHERE ut.task_id = t.id) AS assigned
      FROM tasks t
      JOIN user_tasks ut ON ut.task_id = t.id
      WHERE ut.user_id = ? AND ut.status = 'completed'
    `, [user_id]);
    console.log("Completed tasks:", tasks);

  } else {
    // Fallback: return all tasks (should not be used by UI)
    [tasks] = await db.query("SELECT * FROM tasks");
  }

  return NextResponse.json(tasks);
}
