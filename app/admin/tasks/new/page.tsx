"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function CreateTaskPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    description: "",
    start_time: "",
    end_time: "",
    max_users: 1,
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await fetch("/api/admin/tasks", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    });
    const result = await res.json();
    if (result.success) {
      setStatus("Task created successfully!");
      setTimeout(() => router.push("/admin/tasks"), 1000);
    } else {
      setStatus("Error: " + result.message);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Create Task</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label>Title</Label>
          <Input required onChange={e => setForm({ ...form, title: e.target.value })} />
        </div>
        <div>
          <Label>Description</Label>
          <Textarea required onChange={e => setForm({ ...form, description: e.target.value })} />
        </div>
        <div>
          <Label>Start Time</Label>
          <Input type="datetime-local" required onChange={e => setForm({ ...form, start_time: e.target.value })} />
        </div>
        <div>
          <Label>End Time</Label>
          <Input type="datetime-local" required onChange={e => setForm({ ...form, end_time: e.target.value })} />
        </div>
        <div>
          <Label>Max Users</Label>
          <Input type="number" min="1" required onChange={e => setForm({ ...form, max_users: Number(e.target.value) })} />
        </div>
        <Button type="submit">Create Task</Button>
        {status && <p className="text-green-600 text-sm">{status}</p>}
      </form>
    </div>
  );
}
