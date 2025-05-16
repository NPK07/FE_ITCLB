"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal, Search, UserPlus, Filter, Download, Edit, Trash2, Shield, Ban } from "lucide-react"

// Dữ liệu mẫu
const users = [
  {
    id: "1",
    name: "Nguyễn Văn A",
    email: "nguyenvana@vlu.edu.vn",
    role: "admin",
    status: "active",
    joinDate: "12/05/2023",
  },
  {
    id: "2",
    name: "Trần Thị B",
    email: "tranthib@vlu.edu.vn",
    role: "bod",
    status: "active",
    joinDate: "15/06/2023",
  },
  {
    id: "3",
    name: "Lê Văn C",
    email: "levanc@vlu.edu.vn",
    role: "member",
    status: "active",
    joinDate: "20/07/2023",
  },
  {
    id: "4",
    name: "Phạm Thị D",
    email: "phamthid@vlu.edu.vn",
    role: "member",
    status: "inactive",
    joinDate: "05/08/2023",
  },
  {
    id: "5",
    name: "Hoàng Văn E",
    email: "hoangvane@vlu.edu.vn",
    role: "member",
    status: "banned",
    joinDate: "10/09/2023",
  },
  {
    id: "6",
    name: "Ngô Thị F",
    email: "ngothif@vlu.edu.vn",
    role: "member",
    status: "active",
    joinDate: "15/10/2023",
  },
  {
    id: "7",
    name: "Đỗ Văn G",
    email: "dovang@vlu.edu.vn",
    role: "bod",
    status: "active",
    joinDate: "20/11/2023",
  },
  {
    id: "8",
    name: "Vũ Thị H",
    email: "vuthih@vlu.edu.vn",
    role: "member",
    status: "active",
    joinDate: "25/12/2023",
  },
]

export default function UsersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedRole, setSelectedRole] = useState("all")

  const filteredUsers = users.filter(
    (user) =>
      (user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (selectedRole === "all" || user.role === selectedRole),
  )

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Quản lý người dùng</h1>
        <p className="text-gray-500">Quản lý tất cả người dùng trong hệ thống</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
            <div>
              <CardTitle>Danh sách người dùng</CardTitle>
              <CardDescription>Tổng cộng {users.length} người dùng</CardDescription>
            </div>
            <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  type="search"
                  placeholder="Tìm kiếm người dùng..."
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    <Filter className="mr-2 h-4 w-4" />
                    Lọc
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => setSelectedRole("all")}>Tất cả</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelectedRole("admin")}>Admin</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelectedRole("bod")}>Ban Điều Hành</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelectedRole("member")}>Thành viên</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Xuất Excel
              </Button>
              <Button>
                <UserPlus className="mr-2 h-4 w-4" />
                Thêm người dùng
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tên</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Vai trò</TableHead>
                <TableHead>Trạng thái</TableHead>
                <TableHead>Ngày tham gia</TableHead>
                <TableHead className="text-right">Thao tác</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={
                        user.role === "admin"
                          ? "bg-purple-50 text-purple-700"
                          : user.role === "bod"
                            ? "bg-blue-50 text-blue-700"
                            : "bg-gray-50 text-gray-700"
                      }
                    >
                      {user.role === "admin" ? "Admin" : user.role === "bod" ? "Ban Điều Hành" : "Thành viên"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={
                        user.status === "active"
                          ? "bg-green-50 text-green-700"
                          : user.status === "inactive"
                            ? "bg-amber-50 text-amber-700"
                            : "bg-red-50 text-red-700"
                      }
                    >
                      {user.status === "active"
                        ? "Hoạt động"
                        : user.status === "inactive"
                          ? "Không hoạt động"
                          : "Bị cấm"}
                    </Badge>
                  </TableCell>
                  <TableCell>{user.joinDate}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" />
                          Chỉnh sửa
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Shield className="mr-2 h-4 w-4" />
                          Phân quyền
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-amber-600">
                          <Ban className="mr-2 h-4 w-4" />
                          {user.status === "banned" ? "Bỏ cấm" : "Cấm"}
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="mr-2 h-4 w-4" />
                          Xóa
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
