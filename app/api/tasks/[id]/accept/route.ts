import { db } from "@/lib/db";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    // Parse task_id from the URL
    // nextUrl.pathname will be /api/tasks/2/accept
    const urlParts = req.nextUrl.pathname.split("/");
    const idFromPath = urlParts[urlParts.indexOf("tasks") + 1];
    const task_id = parseInt(idFromPath);

    // Await headers in Edge runtime
    const headerList = await headers(); // <- FIXED
    const cookieHeader = headerList.get("cookie") || "";
    const match = cookieHeader.match(/user_id=([^;]+)/);
    const user_id = match?.[1];

    if (!user_id || !task_id || isNaN(task_id)) {
      console.log("→ task_id:", task_id);
      console.log("→ user_id from cookies:", user_id);
      return NextResponse.json({ error: "Missing user or task" }, { status: 400 });
    }

    // Rest of your DB logic...
    const [existing]: any = await db.query(
      "SELECT * FROM user_tasks WHERE user_id = ? AND task_id = ?",
      [user_id, task_id]
    );

    if (Array.isArray(existing) && existing.length > 0) {
      return NextResponse.json({ message: "Already assigned" });
    }

    const [taskRows]: any = await db.query(
      `SELECT t.max_participants, COUNT(ut.user_id) AS assigned
       FROM tasks t
       LEFT JOIN user_tasks ut ON ut.task_id = t.id
       WHERE t.id = ?
       GROUP BY t.id`,
      [task_id]
    );

    const task = taskRows[0];
    if (!task || task.assigned >= task.max_participants) {
      return NextResponse.json({ error: "Task is full" }, { status: 403 });
    }

    await db.query(
      "INSERT INTO user_tasks (user_id, task_id) VALUES (?, ?)",
      [user_id, task_id]
    );

    return NextResponse.json({ success: true, message: "Task accepted" });
  } catch (error) {
    console.error("Accept Task Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
