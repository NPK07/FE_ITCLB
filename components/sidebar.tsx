"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  LayoutDashboard,
  Users,
  Settings,
  Calendar,
  FileText,
  BookOpen,
  BarChart,
  Shield,
  UserCog,
  Bell,
  MessageSquare,
  FolderArchive,
  BookMarked,
  GraduationCap,
  Award,
  FileCode,
  Database,
} from "lucide-react"
import type { UserRole } from "@/lib/types"

interface SidebarProps {
  userRole: UserRole
}

export function Sidebar({ userRole }: SidebarProps) {
  const pathname = usePathname()

  const adminRoutes = [
    {
      title: "Quản trị hệ thống",
      routes: [
        {
          label: "Dashboard",
          icon: LayoutDashboard,
          href: "/admin",
          active: pathname === "/admin",
        },
        {
          label: "Quản lý người dùng",
          icon: Users,
          href: "/admin/users",
          active: pathname === "/admin/users",
        },
        {
          label: "Cài đặt hệ thống",
          icon: Settings,
          href: "/admin/settings",
          active: pathname === "/admin/settings",
        },
        {
          label: "Phân quyền",
          icon: Shield,
          href: "/admin/permissions",
          active: pathname === "/admin/permissions",
        },
        {
          label: "Logs hệ thống",
          icon: Database,
          href: "/admin/logs",
          active: pathname === "/admin/logs",
        },
      ],
    },
    {
      title: "Thư viện",
      routes: [
        {
          label: "Quản lý thư viện",
          icon: BookOpen,
          href: "/library/admin",
          active: pathname === "/library/admin",
        },
        {
          label: "Thống kê",
          icon: BarChart,
          href: "/library/stats",
          active: pathname === "/library/stats",
        },
      ],
    },
  ]

  const bodRoutes = [
    {
      title: "Ban Điều Hành",
      routes: [
        {
          label: "Dashboard",
          icon: LayoutDashboard,
          href: "/bod",
          active: pathname === "/bod",
        },
        {
          label: "Quản lý thành viên",
          icon: UserCog,
          href: "/bod/members",
          active: pathname === "/bod/members",
        },
        {
          label: "Quản lý sự kiện",
          icon: Calendar,
          href: "/bod/events",
          active: pathname === "/bod/events",
        },
        {
          label: "Quản lý bài viết",
          icon: FileText,
          href: "/bod/posts",
          active: pathname === "/bod/posts",
        },
        {
          label: "Thông báo",
          icon: Bell,
          href: "/bod/notifications",
          active: pathname === "/bod/notifications",
        },
        {
          label: "Thảo luận nội bộ",
          icon: MessageSquare,
          href: "/bod/discussions",
          active: pathname === "/bod/discussions",
        },
      ],
    },
    {
      title: "Hoạt động CLB",
      routes: [
        {
          label: "Dự án",
          icon: FileCode,
          href: "/bod/projects",
          active: pathname === "/bod/projects",
        },
        {
          label: "Khóa học",
          icon: GraduationCap,
          href: "/bod/courses",
          active: pathname === "/bod/courses",
        },
        {
          label: "Thành tích",
          icon: Award,
          href: "/bod/achievements",
          active: pathname === "/bod/achievements",
        },
      ],
    },
  ]

  const libraryRoutes = [
    {
      title: "Thư viện",
      routes: [
        {
          label: "Tài liệu",
          icon: BookMarked,
          href: "/library",
          active: pathname === "/library",
        },
        {
          label: "Lưu trữ",
          icon: FolderArchive,
          href: "/library/archive",
          active: pathname === "/library/archive",
        },
      ],
    },
  ]

  let routes = []

  if (userRole === "admin") {
    routes = [...adminRoutes, ...bodRoutes]
  } else if (userRole === "bod") {
    routes = [...bodRoutes, ...libraryRoutes]
  } else {
    routes = [...libraryRoutes]
  }

  return (
    <div className="flex h-screen w-64 flex-col border-r bg-white">
      <div className="p-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <img src="/vltc-logo.png" alt="VLTC Logo" className="h-6 w-6 rounded-full" />
          <span>Văn Lang Tech Club</span>
        </Link>
      </div>
      <ScrollArea className="flex-1 px-3">
        <div className="space-y-6 py-3">
          {routes.map((section, i) => (
            <div key={i} className="space-y-2">
              <h3 className="px-4 text-xs font-semibold uppercase tracking-wider text-gray-500">{section.title}</h3>
              <div className="space-y-1">
                {section.routes.map((route, j) => (
                  <Button
                    key={j}
                    variant="ghost"
                    asChild
                    className={cn(
                      "w-full justify-start",
                      route.active
                        ? "bg-gray-100 font-medium text-black"
                        : "font-normal text-gray-500 hover:text-black",
                    )}
                  >
                    <Link href={route.href}>
                      <route.icon className="mr-2 h-4 w-4" />
                      {route.label}
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
      <div className="border-t p-4">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <div className="h-2 w-2 rounded-full bg-green-500"></div>
          <span>{userRole === "admin" ? "System Admin" : userRole === "bod" ? "Ban Điều Hành" : "Thành viên"}</span>
        </div>
      </div>
    </div>
  )
}
