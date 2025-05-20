"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AdminTaskListPage() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      const res = await fetch("/api/admin/tasks");
      const data = await res.json();
      setTasks(Array.isArray(data) ? data : []);
      setLoading(false);
    };
    fetchTasks();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-8 bg-gray-50 min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Admin — Task List</h1>
          <Link href="/admin/tasks/new">
            <Button>Create New Task</Button>
          </Link>
        </div>
      </div>

      <div className="space-y-4">
        {loading ? (
          <div className="text-center text-gray-500">Loading tasks...</div>
        ) : tasks.length === 0 ? (
          <div className="text-center text-gray-400">No tasks available.</div>
        ) : (
          tasks.map((task: any) => (
            <div key={task.id} className="bg-white border rounded-md p-5 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900">{task.title}</h2>
              <p className="text-sm text-gray-600">{task.description}</p>
              <p className="text-sm mt-1 text-gray-500">
                ⏱ {new Date(task.start_time).toLocaleString()} - {new Date(task.end_time).toLocaleString()}
              </p>
              <p className="text-sm text-gray-500">👥 Max Users: {task.max_users}</p>
              <Link
                href={`/admin/tasks/${task.id}`}
                className="text-blue-600 text-sm underline mt-2 inline-block"
              >
                View Assigned Users
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
