import type React from "react"
import type { Metadata } from "next"
import RoleBasedLayout from "@/components/role-based-layout"

export const metadata: Metadata = {
  title: "Thư viện - CLB IT VLU",
  description: "Thư viện tài liệu CLB IT VLU",
}

export default function LibraryLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <RoleBasedLayout userRole="member">{children}</RoleBasedLayout>
}
