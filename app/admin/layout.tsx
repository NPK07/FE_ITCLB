import type React from "react"
import type { Metadata } from "next"
import RoleBasedLayout from "@/components/role-based-layout"

export const metadata: Metadata = {
  title: "Admin Dashboard - CLB IT VLU",
  description: "Quản trị hệ thống CLB IT VLU",
}

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <RoleBasedLayout userRole="admin">{children}</RoleBasedLayout>
}
