"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, DollarSign } from "lucide-react";

export default function AdminDashboardTabs() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [payments, setPayments] = useState<any[]>([]);
  const [users, setUsers] = useState<any[]>([]);
  const [tasks, setTasks] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/admin/tasks/overview").then(res => res.json()).then(data => setTasks(data.tasks || []));
    fetch("/api/admin/payments").then(res => res.json()).then(data => setPayments(data.payments || []));
    fetch("/api/admin/users").then(res => res.json()).then(data => setUsers(data.users || []));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

        <Tabs defaultValue="dashboard" onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="bg-white justify-start">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="payments">Payments</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="tasks">Tasks</TabsTrigger>
            <TabsTrigger value="create">Create Task</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <Card>
                <CardHeader><CardTitle className="text-sm font-medium">Total Tasks</CardTitle></CardHeader>
                <CardContent><div className="text-2xl font-bold">{tasks.length}</div><p className="text-xs text-gray-500">Overall count</p></CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle className="text-sm font-medium">In Progress</CardTitle></CardHeader>
                <CardContent><div className="text-2xl font-bold">{tasks.filter(t => t.status === 'in_progress' || t.status === 'progress').length}</div><p className="text-xs text-gray-500">Currently running</p></CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle className="text-sm font-medium">Completed</CardTitle></CardHeader>
                <CardContent><div className="text-2xl font-bold">{tasks.filter(t => t.status === 'completed' || t.status === 'done').length}</div><p className="text-xs text-gray-500">Recently completed</p></CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="payments">
            <Card><CardHeader><CardTitle>Payment Verifications</CardTitle><CardDescription>List of user payment submissions</CardDescription></CardHeader>
              <CardContent>
                {payments.length > 0 ? (
                  <ul className="text-sm text-gray-700 space-y-2">
                    {payments.map((p, i) => (
                      <li key={i}>{p.name} – ₹{p.amount} – UTR: {p.utr_number} – <span className="text-blue-600">{p.status}</span></li>
                    ))}
                  </ul>
                ) : <p className="text-gray-500">No payments submitted yet.</p>}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users">
            <Card><CardHeader><CardTitle>User Management</CardTitle><CardDescription>All registered users</CardDescription></CardHeader>
              <CardContent>
                {users.length > 0 ? (
                  <ul className="text-sm text-gray-700 space-y-2">
                    {users.map((user, i) => (
                      <li key={i}>{user.name} – {user.email} – {user.is_verified ? 'Verified' : 'Not Verified'}</li>
                    ))}
                  </ul>
                ) : <p className="text-gray-500">No users found.</p>}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tasks">
            <Card><CardHeader><CardTitle>Task Overview</CardTitle><CardDescription>Active and archived tasks</CardDescription></CardHeader>
              <CardContent>
                {tasks.length > 0 ? (
                  <ul className="text-sm text-gray-700 space-y-2">
                    {tasks.map((task, i) => (
                      <li key={i}>{task.title} – {task.assigned_user_count || 0} users – {task.status || "unknown"}</li>
                    ))}
                  </ul>
                ) : <p className="text-gray-500">No tasks created yet.</p>}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="create">
            <Card><CardHeader><CardTitle>Create Task</CardTitle><CardDescription>Assign new task to users</CardDescription></CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <input type="text" placeholder="Task Title" className="w-full border rounded px-3 py-2" />
                  <textarea placeholder="Task Description" className="w-full border rounded px-3 py-2"></textarea>
                  <input type="number" placeholder="Payment (₹)" className="w-full border rounded px-3 py-2" />
                  <Button type="submit">Create</Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
