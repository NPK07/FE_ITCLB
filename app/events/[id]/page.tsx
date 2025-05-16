"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Users, Share2, Bookmark, ArrowLeft } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

// Dữ liệu mẫu cho sự kiện
const events = [
  {
    id: "1",
    title: "Workshop: Lập trình Web với React và Next.js",
    description:
      "Học cách xây dựng ứng dụng web hiện đại với React và Next.js. Workshop này sẽ giúp bạn hiểu rõ về các khái niệm cơ bản và nâng cao trong phát triển web.",
    longDescription: `
      <p>Chào mừng bạn đến với Workshop Lập trình Web với React và Next.js!</p>
      
      <p>Trong workshop này, bạn sẽ học cách xây dựng các ứng dụng web hiện đại, nhanh chóng và có khả năng mở rộng bằng cách sử dụng React và Next.js - hai công nghệ hàng đầu trong phát triển web hiện nay.</p>
      
      <h3>Nội dung workshop:</h3>
      <ul>
        <li>Giới thiệu về React và các khái niệm cơ bản</li>
        <li>Hiểu về Next.js và lợi ích của nó so với React thuần túy</li>
        <li>Xây dựng ứng dụng web đầu tiên với Next.js</li>
        <li>Làm việc với dữ liệu: fetching, caching và revalidation</li>
        <li>Tối ưu hóa hiệu suất và SEO</li>
        <li>Triển khai ứng dụng lên Vercel</li>
      </ul>
      
      <h3>Yêu cầu:</h3>
      <ul>
        <li>Laptop cá nhân</li>
        <li>Kiến thức cơ bản về HTML, CSS và JavaScript</li>
        <li>Node.js đã được cài đặt</li>
      </ul>
      
      <p>Đây là cơ hội tuyệt vời để nâng cao kỹ năng lập trình web của bạn và kết nối với cộng đồng developer tại trường. Hãy đăng ký ngay hôm nay!</p>
    `,
    date: "15/05/2025",
    time: "14:00 - 17:00",
    location: "Phòng 2A01, Cơ sở 1, Đại học Văn Lang",
    image: "/placeholder.svg?height=600&width=1200",
    category: "Workshop",
    status: "upcoming" as const,
    organizer: "Văn Lang Tech Club",
    speakers: [
      {
        name: "Nguyễn Văn A",
        title: "Senior Frontend Developer",
        company: "Tech Company",
        avatar: "/placeholder.svg?height=100&width=100",
      },
      {
        name: "Trần Thị B",
        title: "Next.js Expert",
        company: "Web Agency",
        avatar: "/placeholder.svg?height=100&width=100",
      },
    ],
    attendees: 45,
    maxAttendees: 60,
  },
  {
    id: "2",
    title: "Seminar: Trí tuệ nhân tạo và ứng dụng trong cuộc sống",
    description:
      "Khám phá cách AI đang thay đổi cuộc sống hàng ngày và các ngành công nghiệp. Seminar sẽ có sự tham gia của các chuyên gia hàng đầu trong lĩnh vực AI.",
    longDescription: `
      <p>Chào mừng bạn đến với Seminar Trí tuệ nhân tạo và ứng dụng trong cuộc sống!</p>
      
      <p>Trí tuệ nhân tạo (AI) đang thay đổi cách chúng ta sống, làm việc và tương tác. Trong seminar này, chúng ta sẽ khám phá những tiến bộ mới nhất trong lĩnh vực AI và cách nó đang định hình tương lai của chúng ta.</p>
      
      <h3>Nội dung seminar:</h3>
      <ul>
        <li>Tổng quan về AI và Machine Learning</li>
        <li>Các ứng dụng AI trong đời sống hàng ngày</li>
        <li>AI trong y tế, giáo dục và kinh doanh</li>
        <li>Các mô hình ngôn ngữ lớn (LLMs) và tác động của chúng</li>
        <li>Đạo đức AI và những thách thức</li>
        <li>Tương lai của AI và cơ hội nghề nghiệp</li>
      </ul>
      
      <h3>Diễn giả:</h3>
      <p>Seminar sẽ có sự tham gia của các chuyên gia hàng đầu trong lĩnh vực AI từ các công ty công nghệ và trường đại học.</p>
      
      <p>Đây là cơ hội tuyệt vời để hiểu rõ hơn về một trong những công nghệ quan trọng nhất của thời đại chúng ta. Hãy tham gia cùng chúng tôi!</p>
    `,
    date: "20/05/2025",
    time: "09:00 - 11:30",
    location: "Hội trường A, Cơ sở 2, Đại học Văn Lang",
    image: "/placeholder.svg?height=600&width=1200",
    category: "Seminar",
    status: "upcoming" as const,
    organizer: "Văn Lang Tech Club",
    speakers: [
      {
        name: "TS. Lê Văn C",
        title: "Giảng viên Khoa CNTT",
        company: "Đại học Văn Lang",
        avatar: "/placeholder.svg?height=100&width=100",
      },
      {
        name: "KS. Phạm Thị D",
        title: "AI Research Scientist",
        company: "Tech Corporation",
        avatar: "/placeholder.svg?height=100&width=100",
      },
    ],
    attendees: 120,
    maxAttendees: 200,
  },
]

export default function EventDetailPage({ params }: { params: { id: string } }) {
  const { toast } = useToast()
  const [isRegistering, setIsRegistering] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    studentId: "",
  })

  // Tìm sự kiện theo ID
  const event = events.find((e) => e.id === params.id)

  // Xử lý đăng ký tham gia
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()
    setIsRegistering(true)

    // Giả lập API call
    setTimeout(() => {
      toast({
        title: "Đăng ký thành công!",
        description: "Bạn đã đăng ký tham gia sự kiện thành công. Chúng tôi sẽ liên hệ lại với bạn qua email.",
      })
      setIsRegistering(false)
    }, 1500)
  }

  // Xử lý thay đổi form
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Nếu không tìm thấy sự kiện
  if (!event) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold">Sự kiện không tồn tại</h1>
        <p className="mt-4 text-gray-500">Sự kiện bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.</p>
        <Link href="/events">
          <Button className="mt-6">Quay lại trang sự kiện</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-6">
        <Link href="/events" className="inline-flex items-center text-blue-600 hover:underline dark:text-blue-400">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Quay lại danh sách sự kiện
        </Link>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <div className="relative mb-6 aspect-[16/9] w-full overflow-hidden rounded-lg">
            <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
            <div className="absolute top-4 right-4">
              <Badge
                className={cn(
                  event.status === "upcoming" && "bg-green-500 hover:bg-green-600",
                  event.status === "ongoing" && "bg-blue-500 hover:bg-blue-600",
                  event.status === "past" && "bg-gray-500 hover:bg-gray-600",
                )}
              >
                {event.status === "upcoming" && "Sắp diễn ra"}
                {event.status === "ongoing" && "Đang diễn ra"}
                {event.status === "past" && "Đã kết thúc"}
              </Badge>
            </div>
          </div>

          <h1 className="mb-4 text-3xl font-bold">{event.title}</h1>

          <div className="mb-6 flex flex-wrap gap-4">
            <Badge variant="outline" className="text-sm">
              {event.category}
            </Badge>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <Users className="mr-1 h-4 w-4" />
              <span>
                {event.attendees}/{event.maxAttendees} người tham dự
              </span>
            </div>
          </div>

          <div className="mb-8 grid gap-4 md:grid-cols-3">
            <Card>
              <CardContent className="flex items-center p-4">
                <Calendar className="mr-3 h-5 w-5 text-blue-600 dark:text-blue-400" />
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Ngày</p>
                  <p className="font-medium">{event.date}</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center p-4">
                <Clock className="mr-3 h-5 w-5 text-blue-600 dark:text-blue-400" />
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Thời gian</p>
                  <p className="font-medium">{event.time}</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center p-4">
                <MapPin className="mr-3 h-5 w-5 text-blue-600 dark:text-blue-400" />
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Địa điểm</p>
                  <p className="font-medium">{event.location}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mb-8">
            <h2 className="mb-4 text-xl font-bold">Thông tin sự kiện</h2>
            <div
              className="prose max-w-none dark:prose-invert"
              dangerouslySetInnerHTML={{ __html: event.longDescription }}
            />
          </div>

          <div className="mb-8">
            <h2 className="mb-4 text-xl font-bold">Diễn giả</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {event.speakers.map((speaker, index) => (
                <Card key={index}>
                  <CardContent className="flex items-center p-4">
                    <div className="mr-4 h-16 w-16 overflow-hidden rounded-full">
                      <Image
                        src={speaker.avatar || "/placeholder.svg"}
                        alt={speaker.name}
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium">{speaker.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{speaker.title}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{speaker.company}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div>
          <Card className="sticky top-6">
            <CardContent className="p-6">
              <div className="mb-6">
                <h3 className="mb-2 text-lg font-bold">Đăng ký tham gia</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Còn {event.maxAttendees - event.attendees} chỗ trống. Hãy đăng ký ngay!
                </p>
              </div>

              <div className="mb-6">
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span>Số lượng đăng ký</span>
                  <span>
                    {event.attendees}/{event.maxAttendees}
                  </span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                  <div
                    className="h-full rounded-full bg-blue-600"
                    style={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}
                  ></div>
                </div>
              </div>

              <form onSubmit={handleRegister} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Họ và tên
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-md border border-gray-300 p-2 text-sm dark:border-gray-700 dark:bg-gray-800"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-md border border-gray-300 p-2 text-sm dark:border-gray-700 dark:bg-gray-800"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">
                    Số điện thoại
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className="w-full rounded-md border border-gray-300 p-2 text-sm dark:border-gray-700 dark:bg-gray-800"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="studentId" className="block text-sm font-medium mb-1">
                    Mã số sinh viên
                  </label>
                  <input
                    id="studentId"
                    name="studentId"
                    type="text"
                    required
                    className="w-full rounded-md border border-gray-300 p-2 text-sm dark:border-gray-700 dark:bg-gray-800"
                    value={formData.studentId}
                    onChange={handleChange}
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isRegistering}>
                  {isRegistering ? "Đang đăng ký..." : "Đăng ký tham gia"}
                </Button>
              </form>

              <div className="mt-4 flex space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="flex-1"
                  onClick={() => {
                    toast({
                      title: "Đã sao chép!",
                      description: "Đường dẫn sự kiện đã được sao chép vào clipboard.",
                    })
                  }}
                >
                  <Share2 className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="flex-1"
                  onClick={() => {
                    toast({
                      title: "Đã lưu!",
                      description: "Sự kiện đã được lưu vào danh sách yêu thích của bạn.",
                    })
                  }}
                >
                  <Bookmark className="h-4 w-4" />
                </Button>
              </div>

              <div className="mt-6">
                <h3 className="mb-2 text-sm font-medium">Đơn vị tổ chức</h3>
                <div className="flex items-center">
                  <div className="mr-3 h-10 w-10 overflow-hidden rounded-full">
                    <Image src="/vltc-logo.png" alt="VLTC Logo" width={40} height={40} className="object-cover" />
                  </div>
                  <div>
                    <p className="font-medium">{event.organizer}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Đại học Văn Lang</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

// Helper function for conditional class names
function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}
