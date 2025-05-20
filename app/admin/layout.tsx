"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { LayoutDashboard, Users, FileCheck, Plus, LogOut } from "lucide-react";
import AdminLayout from "@/components/admin-layout";

// export default function AdminRootLayout({ children }: { children: React.ReactNode }) {
//   return <AdminLayout>{children}</AdminLayout>;
// }

export default function AdminLayout({ children, title }: { children: ReactNode; title?: string }) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-white border-r shadow-sm p-6 space-y-6">
        <div className="text-2xl font-bold text-blue-600">Admin Panel</div>
        <nav className="space-y-4">
          <NavItem href="/admin" icon={<LayoutDashboard className="w-4 h-4" />}>Dashboard</NavItem>
          <NavItem href="/admin/payments" icon={<FileCheck className="w-4 h-4" />}>Payments</NavItem>
          <NavItem href="/admin/users" icon={<Users className="w-4 h-4" />}>Users</NavItem>
          <NavItem href="/admin/tasks" icon={<LayoutDashboard className="w-4 h-4" />}>Tasks</NavItem>
          <NavItem href="/admin/tasks/new" icon={<Plus className="w-4 h-4" />}>New Task</NavItem>
          <NavItem href="/admin/logout" icon={<LogOut className="w-4 h-4" />}>Logout</NavItem>
        </nav>
      </aside>
      <main className="flex-1 p-8 bg-gray-50">
        {title && <h1 className="text-2xl font-bold mb-6 text-gray-800">{title}</h1>}
        {children}
      </main>
    </div>
  );
}

function NavItem({ href, icon, children }: { href: string; icon: ReactNode; children: ReactNode }) {
  return (
    <Link href={href} className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
      {icon} <span>{children}</span>
    </Link>
  );
}
