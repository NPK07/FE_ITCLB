"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Edit, Eye, MoreHorizontal, Plus, Search, Trash2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"

// Giả lập dữ liệu bài viết nháp
const initialDrafts = [
  {
    id: "1",
    title: "Đánh giá iPhone 16 Pro Max sau 1 tháng sử dụng",
    category: "Đánh giá",
    lastUpdated: "2025-05-12T10:30:00Z",
    status: "draft",
  },
  {
    id: "2",
    title: "So sánh camera giữa Galaxy S24 Ultra và iPhone 16 Pro",
    category: "So sánh",
    lastUpdated: "2025-05-10T14:45:00Z",
    status: "draft",
  },
  {
    id: "3",
    title: "Tổng hợp các tính năng hay trên iOS 18",
    category: "Thủ thuật",
    lastUpdated: "2025-05-08T09:15:00Z",
    status: "draft",
  },
  {
    id: "4",
    title: "Trải nghiệm macOS 15 với các tính năng AI mới",
    category: "Trải nghiệm",
    lastUpdated: "2025-05-05T16:20:00Z",
    status: "draft",
  },
  {
    id: "5",
    title: "Đánh giá tai nghe Sony WH-1000XM5",
    category: "Đánh giá",
    lastUpdated: "2025-05-01T11:10:00Z",
    status: "draft",
  },
]

export default function MyDrafts() {
  const [drafts, setDrafts] = useState(initialDrafts)
  const [searchQuery, setSearchQuery] = useState("")

  const filteredDrafts = drafts.filter((draft) => draft.title.toLowerCase().includes(searchQuery.toLowerCase()))

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("vi-VN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date)
  }

  const handleDelete = (id: string) => {
    if (confirm("Bạn có chắc chắn muốn xóa bài viết nháp này?")) {
      setDrafts(drafts.filter((draft) => draft.id !== id))
    }
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Bài viết nháp</h1>
        <p className="text-sm text-gray-500">Quản lý các bài viết nháp của bạn</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
            <div>
              <CardTitle>Bài viết nháp</CardTitle>
              <CardDescription>Bạn có {drafts.length} bài viết nháp</CardDescription>
            </div>
            <div className="flex space-x-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  type="search"
                  placeholder="Tìm kiếm bài viết..."
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Link href="/editorv2/create/new">
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Tạo mới
                </Button>
              </Link>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50%]">Tiêu đề</TableHead>
                <TableHead>Chuyên mục</TableHead>
                <TableHead>Cập nhật lần cuối</TableHead>
                <TableHead>Trạng thái</TableHead>
                <TableHead className="text-right">Thao tác</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredDrafts.length > 0 ? (
                filteredDrafts.map((draft) => (
                  <TableRow key={draft.id}>
                    <TableCell className="font-medium">{draft.title}</TableCell>
                    <TableCell>{draft.category}</TableCell>
                    <TableCell>{formatDate(draft.lastUpdated)}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-yellow-50 text-yellow-700 hover:bg-yellow-50">
                        Nháp
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <Link href={`/editorv2/create/${draft.id}`}>
                            <DropdownMenuItem>
                              <Edit className="mr-2 h-4 w-4" />
                              Chỉnh sửa
                            </DropdownMenuItem>
                          </Link>
                          <DropdownMenuItem>
                            <Eye className="mr-2 h-4 w-4" />
                            Xem trước
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem
                            onClick={() => handleDelete(draft.id)}
                            className="text-red-600 focus:bg-red-50 focus:text-red-600"
                          >
                            <Trash2 className="mr-2 h-4 w-4" />
                            Xóa
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-6">
                    <div className="flex flex-col items-center justify-center space-y-2">
                      <p className="text-gray-500">Không tìm thấy bài viết nháp nào</p>
                      <Link href="/editorv2/create/new">
                        <Button variant="outline" size="sm">
                          <Plus className="mr-2 h-4 w-4" />
                          Tạo bài viết mới
                        </Button>
                      </Link>
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <p className="text-sm text-gray-500">
            Hiển thị {filteredDrafts.length} / {drafts.length} bài viết
          </p>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" disabled>
              Trước
            </Button>
            <Button variant="outline" size="sm" disabled>
              Tiếp
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
