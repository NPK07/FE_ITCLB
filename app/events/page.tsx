import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Dữ liệu mẫu cho sự kiện
const events = [
  {
    id: "1",
    title: "Workshop: Lập trình Web với React và Next.js",
    description:
      "Học cách xây dựng ứng dụng web hiện đại với React và Next.js. Workshop này sẽ giúp bạn hiểu rõ về các khái niệm cơ bản và nâng cao trong phát triển web.",
    date: "15/05/2025",
    time: "14:00 - 17:00",
    location: "Phòng 2A01, Cơ sở 1, Đại học Văn Lang",
    image: "/placeholder.svg?height=400&width=600",
    category: "Workshop",
    status: "upcoming" as const,
    organizer: "CLB IT VLU",
  },
  {
    id: "2",
    title: "Seminar: Trí tuệ nhân tạo và ứng dụng trong cuộc sống",
    description:
      "Khám phá cách AI đang thay đổi cuộc sống hàng ngày và các ngành công nghiệp. Seminar sẽ có sự tham gia của các chuyên gia hàng đầu trong lĩnh vực AI.",
    date: "20/05/2025",
    time: "09:00 - 11:30",
    location: "Hội trường A, Cơ sở 2, Đại học Văn Lang",
    image: "/placeholder.svg?height=400&width=600",
    category: "Seminar",
    status: "upcoming" as const,
    organizer: "CLB IT VLU",
  },
  {
    id: "3",
    title: "Cuộc thi: Hackathon VLU 2025",
    description:
      "Thử thách bản thân trong cuộc thi lập trình 48 giờ. Các đội sẽ phát triển giải pháp cho các vấn đề thực tế và có cơ hội giành giải thưởng giá trị.",
    date: "25/05/2025 - 26/05/2025",
    time: "08:00 - 17:00",
    location: "Khu vực sáng tạo, Thư viện, Đại học Văn Lang",
    image: "/placeholder.svg?height=400&width=600",
    category: "Competition",
    status: "upcoming" as const,
    organizer: "CLB IT VLU",
  },
  {
    id: "4",
    title: "Tech Talk: Blockchain và tương lai của tài chính",
    description:
      "Tìm hiểu về công nghệ blockchain và cách nó đang định hình lại ngành tài chính. Buổi nói chuyện sẽ bao gồm các ví dụ thực tế và xu hướng mới nhất.",
    date: "05/06/2025",
    time: "15:00 - 17:00",
    location: "Phòng hội thảo, Tòa nhà B, Đại học Văn Lang",
    image: "/placeholder.svg?height=400&width=600",
    category: "Tech Talk",
    status: "upcoming" as const,
    organizer: "CLB IT VLU",
  },
  {
    id: "5",
    title: "Workshop: Thiết kế UX/UI cho ứng dụng di động",
    description:
      "Học cách thiết kế giao diện người dùng hấp dẫn và trải nghiệm người dùng tuyệt vời cho ứng dụng di động. Workshop sẽ bao gồm các bài tập thực hành.",
    date: "10/06/2025",
    time: "13:30 - 16:30",
    location: "Phòng Lab Design, Cơ sở 3, Đại học Văn Lang",
    image: "/placeholder.svg?height=400&width=600",
    category: "Workshop",
    status: "upcoming" as const,
    organizer: "CLB IT VLU",
  },
  {
    id: "6",
    title: "Networking: Gặp gỡ doanh nghiệp công nghệ",
    description:
      "Cơ hội kết nối với các doanh nghiệp công nghệ hàng đầu và tìm hiểu về cơ hội việc làm, thực tập. Sự kiện bao gồm phần giao lưu và phỏng vấn nhanh.",
    date: "15/06/2025",
    time: "09:00 - 12:00",
    location: "Sảnh chính, Cơ sở 1, Đại học Văn Lang",
    image: "/placeholder.svg?height=400&width=600",
    category: "Networking",
    status: "upcoming" as const,
    organizer: "CLB IT VLU",
  },
]

// Helper function for conditional class names
function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}

export default function EventsPage() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Sự kiện</h1>
        <p className="text-gray-500">Khám phá các sự kiện sắp diễn ra của CLB IT VLU</p>
      </div>

      <div className="mb-6">
        <Tabs defaultValue="all" className="w-full">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <TabsList className="mb-4 sm:mb-0">
              <TabsTrigger value="all">Tất cả</TabsTrigger>
              <TabsTrigger value="upcoming">Sắp diễn ra</TabsTrigger>
              <TabsTrigger value="ongoing">Đang diễn ra</TabsTrigger>
              <TabsTrigger value="past">Đã kết thúc</TabsTrigger>
            </TabsList>
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-4 w-4" />
              Lọc sự kiện
            </Button>
          </div>

          <TabsContent value="all" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {events.map((event) => (
                <Link href={`/events/${event.id}`} key={event.id}>
                  <Card className="h-full overflow-hidden hover:shadow-md transition-shadow">
                    <div className="relative h-48">
                      <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                      <Badge
                        className={cn(
                          "absolute top-2 right-2",
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
                    <CardContent className="p-4">
                      <Badge variant="outline" className="mb-2">
                        {event.category}
                      </Badge>
                      <h3 className="mb-2 text-lg font-medium line-clamp-2">{event.title}</h3>
                      <div className="mb-4 space-y-1 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Calendar className="mr-2 h-4 w-4" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="mr-2 h-4 w-4" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="mr-2 h-4 w-4" />
                          <span className="line-clamp-1">{event.location}</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 line-clamp-3">{event.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="upcoming" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {events
                .filter((event) => event.status === "upcoming")
                .map((event) => (
                  <Link href={`/events/${event.id}`} key={event.id}>
                    <Card className="h-full overflow-hidden hover:shadow-md transition-shadow">
                      <div className="relative h-48">
                        <Image
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          fill
                          className="object-cover"
                        />
                        <Badge className="absolute top-2 right-2 bg-green-500 hover:bg-green-600">Sắp diễn ra</Badge>
                      </div>
                      <CardContent className="p-4">
                        <Badge variant="outline" className="mb-2">
                          {event.category}
                        </Badge>
                        <h3 className="mb-2 text-lg font-medium line-clamp-2">{event.title}</h3>
                        <div className="mb-4 space-y-1 text-sm text-gray-500">
                          <div className="flex items-center">
                            <Calendar className="mr-2 h-4 w-4" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="mr-2 h-4 w-4" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="mr-2 h-4 w-4" />
                            <span className="line-clamp-1">{event.location}</span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 line-clamp-3">{event.description}</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="ongoing" className="mt-6">
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="mb-4 rounded-full bg-blue-100 p-3">
                <Calendar className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="mb-2 text-lg font-medium">Không có sự kiện đang diễn ra</h3>
              <p className="text-gray-500">Hiện tại không có sự kiện nào đang diễn ra. Hãy quay lại sau.</p>
            </div>
          </TabsContent>

          <TabsContent value="past" className="mt-6">
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="mb-4 rounded-full bg-gray-100 p-3">
                <Calendar className="h-6 w-6 text-gray-600" />
              </div>
              <h3 className="mb-2 text-lg font-medium">Không có sự kiện đã kết thúc</h3>
              <p className="text-gray-500">Chưa có sự kiện nào đã kết thúc. Hãy quay lại sau.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
