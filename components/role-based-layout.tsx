"use client"

import { type ReactNode, useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Sidebar } from "@/components/sidebar"
import type { UserRole } from "@/lib/types"

interface RoleBasedLayoutProps {
  children: ReactNode
  userRole?: UserRole
}

export default function RoleBasedLayout({ children, userRole = "member" }: RoleBasedLayoutProps) {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  // Paths that should not show the sidebar
  const excludePaths = ["/", "/camera", "/nhat-tao", "/events", "/article", "/profile"]
  const shouldShowSidebar =
    (pathname.startsWith("/admin") && userRole === "admin") ||
    (pathname.startsWith("/bod") && (userRole === "bod" || userRole === "admin")) ||
    pathname.startsWith("/library")

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  if (!shouldShowSidebar) {
    return <>{children}</>
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar userRole={userRole} />
      <div className="flex-1 overflow-auto">{children}</div>
    </div>
  )
}
