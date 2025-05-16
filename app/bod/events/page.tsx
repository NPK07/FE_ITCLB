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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  MoreHorizontal,
  Search,
  PlusCircle,
  Filter,
  Calendar,
  Edit,
  Trash2,
  Eye,
  CheckCircle,
  XCircle,
} from "lucide-react"

// Dữ liệu mẫu
const events = [
  {
    id: "1",
    title: "Workshop: Lập trình Web với React và Next.js",
    category: "Workshop",
    date: "15/05/2025",
    location: "Phòng 2A01, Cơ sở 1",
    status: "upcoming",
    attendees: 45,
    maxAttendees: 60,
  },
  {
    id: "2",
    title: "Seminar: Trí tuệ nhân tạo và ứng dụng trong cuộc sống",
    category: "Seminar",
    date: "20/05/2025",
    location: "Hội trường A, Cơ sở 2",
    status: "upcoming",
    attendees: 120,
    maxAttendees: 200,
  },
  {
    id: "3",
    title: "Cuộc thi: Hackathon VLU 2025",
    category: "Competition",
    date: "25/05/2025 - 26/05/2025",
    location: "Khu vực sáng tạo, Thư viện",
    status: "upcoming",
    attendees: 75,
    maxAttendees: 100,
  },
  {
    id: "4",
    title: "Tech Talk: Blockchain và tương lai của tài chính",
    category: "Tech Talk",
    date: "05/06/2025",
    location: "Phòng hội thảo, Tòa nhà B",
    status: "upcoming",
    attendees: 35,
    maxAttendees: 80,
  },
  {
    id: "5",
    title: "Workshop: Thiết kế UX/UI cho ứng dụng di động",
    category: "Workshop",
    date: "10/06/2025",
    location: "Phòng Lab Design, Cơ sở 3",
    status: "upcoming",
    attendees: 28,
    maxAttendees: 40,
  },
  {
    id: "6",
    title: "Networking: Gặp gỡ doanh nghiệp công nghệ",
    category: "Networking",
    date: "15/06/2025",
    location: "Sảnh chính, Cơ sở 1",
    status: "upcoming",
    attendees: 60,
    maxAttendees: 100,
  },
  {
    id: "7",
    title: "Workshop: Git và GitHub cho người mới bắt đầu",
    category: "Workshop",
    date: "01/04/2025",
    location: "Phòng Lab 3, Cơ sở 2",
    status: "past",
    attendees: 35,
    maxAttendees: 40,
  },
  {
    id: "8",
    title: "Seminar: Bảo mật thông tin trong thời đại số",
    category: "Seminar",
    date: "15/03/2025",
    location: "Hội trường B, Cơ sở 1",
    status: "past",
    attendees: 85,
    maxAttendees: 100,
  },
]

export default function EventsManagementPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedStatus, setSelectedStatus] = useState("all")

  const filteredEvents = events.filter(
    (event) =>
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedStatus === "all" || event.status === selectedStatus),
  )

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Quản lý sự kiện</h1>
        <p className="text-gray-500">Quản lý tất cả sự kiện của CLB IT VLU</p>
      </div>

      <Tabs defaultValue="list">
        <TabsList className="mb-6 grid w-full grid-cols-2">
          <TabsTrigger value="list">Danh sách sự kiện</TabsTrigger>
          <TabsTrigger value="calendar">Lịch sự kiện</TabsTrigger>
        </TabsList>

        <TabsContent value="list">
          <Card>
            <CardHeader>
              <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
                <div>
                  <CardTitle>Danh sách sự kiện</CardTitle>
                  <CardDescription>Tổng cộng {events.length} sự kiện</CardDescription>
                </div>
                <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                    <Input
                      type="search"
                      placeholder="Tìm kiếm sự kiện..."
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
                      <DropdownMenuItem onClick={() => setSelectedStatus("all")}>Tất cả</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setSelectedStatus("upcoming")}>Sắp diễn ra</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setSelectedStatus("ongoing")}>Đang diễn ra</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setSelectedStatus("past")}>Đã kết thúc</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setSelectedStatus("cancelled")}>Đã hủy</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <Button>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Tạo sự kiện mới
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Tên sự kiện</TableHead>
                    <TableHead>Thể loại</TableHead>
                    <TableHead>Ngày</TableHead>
                    <TableHead>Địa điểm</TableHead>
                    <TableHead>Trạng thái</TableHead>
                    <TableHead>Người tham dự</TableHead>
                    <TableHead className="text-right">Thao tác</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredEvents.map((event) => (
                    <TableRow key={event.id}>
                      <TableCell className="font-medium">{event.title}</TableCell>
                      <TableCell>{event.category}</TableCell>
                      <TableCell>{event.date}</TableCell>
                      <TableCell>{event.location}</TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={
                            event.status === "upcoming"
                              ? "bg-green-50 text-green-700"
                              : event.status === "ongoing"
                                ? "bg-blue-50 text-blue-700"
                                : event.status === "past"
                                  ? "bg-gray-50 text-gray-700"
                                  : "bg-red-50 text-red-700"
                          }
                        >
                          {event.status === "upcoming"
                            ? "Sắp diễn ra"
                            : event.status === "ongoing"
                              ? "Đang diễn ra"
                              : event.status === "past"
                                ? "Đã kết thúc"
                                : "Đã hủy"}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <span>
                            {event.attendees}/{event.maxAttendees}
                          </span>
                          <div className="ml-2 h-1.5 w-16 overflow-hidden rounded-full bg-gray-200">
                            <div
                              className="h-full rounded-full bg-blue-600"
                              style={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Eye className="mr-2 h-4 w-4" />
                              Xem chi tiết
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Edit className="mr-2 h-4 w-4" />
                              Chỉnh sửa
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            {event.status === "upcoming" && (
                              <DropdownMenuItem>
                                <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                                Bắt đầu sự kiện
                              </DropdownMenuItem>
                            )}
                            {event.status === "ongoing" && (
                              <DropdownMenuItem>
                                <CheckCircle className="mr-2 h-4 w-4 text-blue-600" />
                                Kết thúc sự kiện
                              </DropdownMenuItem>
                            )}
                            <DropdownMenuItem className="text-red-600">
                              <XCircle className="mr-2 h-4 w-4" />
                              Hủy sự kiện
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
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
        </TabsContent>

        <TabsContent value="calendar">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-center">
                <Calendar className="h-16 w-16 text-gray-300" />
                <p className="ml-4 text-gray-500">Chức năng xem lịch sự kiện đang được phát triển.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
