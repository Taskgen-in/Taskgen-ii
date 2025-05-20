"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  is_verified: number;
};

export default function AdminUsersPage() {
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = async () => {
    const res = await fetch("/api/admin/users");
    const data = await res.json();
    setUsers(Array.isArray(data) ? data : []);
    console.log("User response:", data);

  };

  const toggleStatus = async (id: number, is_verified: boolean) => {
    await fetch("/api/admin/users", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, is_verified: !is_verified }),
    });
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">User Validation</h2>
      {users.map(user => (
        <div key={user.id} className="border rounded p-4 mb-4">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Status:</strong> {user.is_verified ? "✅ Verified" : "⏳ Pending"}</p>
          <Button onClick={() => toggleStatus(user.id, !!user.is_verified)}>
            {user.is_verified ? "Mark as Pending" : "Verify User"}
          </Button>
        </div>
      ))}
    </div>
  );
}

