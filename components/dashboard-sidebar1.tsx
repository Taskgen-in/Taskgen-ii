"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { LayoutDashboard, FileText, Calendar, DollarSign, Users, HelpCircle, Menu, X } from "lucide-react"
import Logo from "@/components/logo"

export default function DashboardSidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const routes = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Tasks",
      href: "/tasks",
      icon: FileText,
    },
    {
      name: "Sessions",
      href: "/sessions",
      icon: Calendar,
    },
    {
      name: "Payments",
      href: "/payments",
      icon: DollarSign,
    },
    {
      name: "Community",
      href: "/community",
      icon: Users,
    },
    {
      name: "Help & Support",
      href: "/support",
      icon: HelpCircle,
    },
  ]

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        className="fixed left-4 top-4 z-40 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </Button>

      <div
        className={cn(
          "fixed inset-y-0 left-0 z-30 w-64 transform border-r bg-white shadow-md transition-transform duration-300 ease-in-out lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex h-16 items-center border-b px-6">
          <Logo size="md" />
        </div>
        <div className="space-y-4 py-4">
          <div className="px-3 py-2">
            <div className="space-y-1">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    "flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-all hover:bg-primary/10",
                    pathname === route.href ? "bg-primary/10 text-primary" : "text-gray-600",
                  )}
                >
                  <route.icon className="mr-2 h-4 w-4" />
                  {route.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
