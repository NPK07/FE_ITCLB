import type React from "react"
import type { Metadata } from "next"
import RoleBasedLayout from "@/components/role-based-layout"

export const metadata: Metadata = {
  title: "Ban Điều Hành - CLB IT VLU",
  description: "Quản lý hoạt động CLB IT VLU",
}

export default function BODLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <RoleBasedLayout userRole="bod">{children}</RoleBasedLayout>
}
