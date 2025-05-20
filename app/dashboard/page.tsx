"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Clock, DollarSign } from "lucide-react";
import DashboardSidebar from "@/components/dashboard-sidebar";
import DashboardHeader from "@/components/dashboard-header";

export default function DashboardPage() {
  const [availableTasks, setAvailableTasks] = useState([]);
  const [inProgressTasks, setInProgressTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  // No need for userId in frontend! Backend gets user from cookie/session.

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const [availableRes, inProgressRes, completedRes] = await Promise.all([
      fetch("/api/tasks?type=available"),
      fetch("/api/tasks?type=inprogress"),
      fetch("/api/tasks?type=completed"),
    ]);
    setAvailableTasks(await availableRes.json());
    setInProgressTasks(await inProgressRes.json());
    setCompletedTasks(await completedRes.json());
  };

  const handleAcceptTask = async (taskId) => {
    await fetch(`/api/tasks/${taskId}/accept`, {
      method: "POST",
      headers: { "Content-Type": "application/json" }
    });
    fetchTasks(); // Refresh the task lists
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <DashboardSidebar />
      <div className="flex-1">
        <DashboardHeader />
        <main className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium">Available Balance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₹270</div>
                <p className="text-xs text-gray-500">+₹120 from last task</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium">Tasks Completed</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{completedTasks.length}</div>
                <p className="text-xs text-gray-500">This month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium">Next AI Training</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Saturday</div>
                <p className="text-xs text-gray-500">10:00 AM IST</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="available" className="space-y-4">
            <TabsList>
              <TabsTrigger value="available">
                Available Tasks
                <Badge className="ml-2" variant="outline">{availableTasks.length}</Badge>
              </TabsTrigger>
              <TabsTrigger value="in-progress">
                In Progress
                <Badge className="ml-2 bg-yellow-100 text-yellow-600" variant="outline">{inProgressTasks.length}</Badge>
              </TabsTrigger>
              <TabsTrigger value="completed">
                Completed
                <Badge className="ml-2 bg-green-100 text-green-600" variant="outline">{completedTasks.length}</Badge>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="available" className="space-y-4">
              {availableTasks.length === 0 && <div className="text-center text-gray-400">No available tasks</div>}
              {availableTasks.map((task, i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle>{task.title}</CardTitle>
                    <CardDescription>{task.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 text-blue-600 mr-1" /> ₹{task.payment ?? "—"}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-gray-500 mr-1" /> {task.deadline || "24 hours"}
                      </div>
                    </div>
                    {task.assigned < task.max_participants ? (
                      <Button size="sm" onClick={() => handleAcceptTask(task.id)}>Accept Task</Button>
                    ) : (
                      <Badge variant="outline" className="text-gray-500 border-gray-300">Limit Reached</Badge>
                    )}
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="in-progress">
              {inProgressTasks.length === 0 && <div className="text-center text-gray-400">No in-progress tasks</div>}
              {inProgressTasks.map((task, i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle>{task.title}</CardTitle>
                    <CardDescription>{task.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="completed">
              {completedTasks.length === 0 && <div className="text-center text-gray-400">No completed tasks</div>}
              {completedTasks.map((task, i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle>{task.title}</CardTitle>
                    <CardDescription>{task.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}
