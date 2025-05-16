"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Play } from "lucide-react"
import EventBox from "@/components/event-box"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

// Dữ liệu mẫu cho sự kiện
const sampleEvents = [
  {
    id: "1",
    title: "Workshop: Lập trình Web với React và Next.js",
    date: "15/05/2025",
    time: "14:00 - 17:00",
    location: "Phòng 2A01, Cơ sở 1, Đại học Văn Lang",
    image: "/placeholder.svg?height=200&width=200",
    category: "Workshop",
    status: "upcoming" as const,
  },
  {
    id: "2",
    title: "Seminar: Trí tuệ nhân tạo và ứng dụng trong cuộc sống",
    date: "20/05/2025",
    time: "09:00 - 11:30",
    location: "Hội trường A, Cơ sở 2, Đại học Văn Lang",
    image: "/placeholder.svg?height=200&width=200",
    category: "Seminar",
    status: "upcoming" as const,
  },
  {
    id: "3",
    title: "Cuộc thi: Hackathon VLU 2025",
    date: "25/05/2025 - 26/05/2025",
    time: "08:00 - 17:00",
    location: "Khu vực sáng tạo, Thư viện, Đại học Văn Lang",
    image: "/placeholder.svg?height=200&width=200",
    category: "Competition",
    status: "upcoming" as const,
  },
]

// Dữ liệu bài viết từ Facebook của Văn Lang Tech Club
const articles = [
  {
    id: "1",
    title: "VLTC WORKSHOP: REACT NATIVE MOBILE APP DEVELOPMENT",
    excerpt:
      "🔥 VLTC WORKSHOP: REACT NATIVE MOBILE APP DEVELOPMENT 🔥 Bạn đã bao giờ tự hỏi làm thế nào để tạo ra một ứng dụng di động từ con số 0? Bạn muốn học cách phát triển ứng dụng cho cả iOS và Android cùng một lúc?",
    author: "Văn Lang Tech Club",
    image: "/placeholder.svg?height=400&width=800",
    date: "05/05/2025",
  },
  {
    id: "2",
    title: "VLTC WORKSHOP: FIGMA UI/UX DESIGN",
    excerpt:
      "🎨 VLTC WORKSHOP: FIGMA UI/UX DESIGN 🎨 Bạn có đam mê với thiết kế? Bạn muốn học cách tạo ra những giao diện người dùng đẹp mắt và trải nghiệm người dùng tuyệt vời?",
    author: "Văn Lang Tech Club",
    image: "/placeholder.svg?height=120&width=120",
    date: "28/04/2025",
  },
  {
    id: "3",
    title: "VLTC TECH TALK: ARTIFICIAL INTELLIGENCE",
    excerpt:
      "🤖 VLTC TECH TALK: ARTIFICIAL INTELLIGENCE 🤖 Trí tuệ nhân tạo đang thay đổi thế giới như thế nào? Làm sao để bắt đầu với AI và Machine Learning?",
    author: "Văn Lang Tech Club",
    image: "/placeholder.svg?height=120&width=120",
    date: "20/04/2025",
  },
  {
    id: "4",
    title: "VLTC CODING CHALLENGE: ALGORITHM BATTLE",
    excerpt:
      "⚔️ VLTC CODING CHALLENGE: ALGORITHM BATTLE ⚔️ Thử thách kỹ năng giải thuật của bạn trong cuộc thi lập trình hấp dẫn nhất năm!",
    author: "Văn Lang Tech Club",
    image: "/placeholder.svg?height=120&width=120",
    date: "15/04/2025",
  },
  {
    id: "5",
    title: "VLTC HACKATHON 2025: BUILD THE FUTURE",
    excerpt:
      "🚀 VLTC HACKATHON 2025: BUILD THE FUTURE 🚀 48 giờ. Một ý tưởng. Vô số khả năng. Bạn đã sẵn sàng cho thử thách lớn nhất?",
    author: "Văn Lang Tech Club",
    image: "/placeholder.svg?height=120&width=120",
    date: "10/04/2025",
  },
]

// Dữ liệu tin tức nhanh
const quickNews = [
  "VLTC tuyển thành viên mới cho học kỳ Fall 2025",
  "Đội thi VLTC giành giải nhất cuộc thi An toàn thông tin toàn quốc",
  "Workshop JavaScript Advanced sẽ được tổ chức vào tuần tới",
  "VLTC hợp tác với Microsoft tổ chức chuỗi sự kiện Azure Cloud",
  "Dự án ứng dụng VLU Connect của VLTC được đưa vào sử dụng chính thức",
]

// Danh sách các chủ đề
const topics = [
  { href: "/", label: "Home" },
  { href: "/topics/webdev", label: "#webdev" },
  { href: "/topics/reactjs", label: "#reactjs" },
  { href: "/topics/ai", label: "#ai" },
  { href: "/topics/uiux", label: "#uiux" },
  { href: "/topics/hackathon", label: "#hackathon" },
  { href: "/topics/vanlang", label: "#vanlang" },
]

export default function Home() {
  const { toast } = useToast()
  const [email, setEmail] = useState("")

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      toast({
        title: "Đăng ký thành công!",
        description: "Cảm ơn bạn đã đăng ký nhận tin từ Văn Lang Tech Club.",
      })
      setEmail("")
    }
  }

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Trending Topics */}
      <div className="mb-6 flex items-center space-x-4 overflow-x-auto py-2">
        {topics.map((topic, index) => (
          <Link
            key={index}
            href={topic.href}
            className="rounded-full bg-gray-100 px-4 py-1 text-sm font-medium text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
          >
            {topic.label}
          </Link>
        ))}
      </div>

      {/* VLTC Highlights */}
      <div className="mb-8">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">VLTC Highlights</h2>
          <Link href="/highlights" className="text-sm text-blue-600 hover:underline dark:text-blue-400">
            Xem tất cả
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <Link href={`/highlight/${i + 1}`} key={i}>
              <Card className="overflow-hidden hover:shadow-md transition-shadow">
                <CardContent className="relative p-0">
                  <Image
                    src={`/placeholder.svg?height=200&width=200`}
                    alt="Highlight image"
                    width={200}
                    height={200}
                    className="aspect-square object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                    <div className="flex items-center space-x-2">
                      <Avatar className="h-6 w-6 border border-white">
                        <AvatarImage src="/vltc-logo.png" alt="@vltc" />
                        <AvatarFallback>VL</AvatarFallback>
                      </Avatar>
                      <span className="text-xs text-white">Văn Lang Tech Club</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="grid gap-8 md:grid-cols-3">
        {/* Featured Article */}
        <div className="md:col-span-2">
          <Card className="overflow-hidden border-0 shadow-none">
            <CardContent className="p-0">
              <Link href={`/article/${articles[0].id}`}>
                <div className="relative">
                  <Image
                    src={articles[0].image || "/placeholder.svg"}
                    alt="Featured article"
                    width={800}
                    height={400}
                    className="aspect-[16/9] w-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h2 className="mb-2 text-2xl font-bold">{articles[0].title}</h2>
                  <p className="text-gray-700 mb-2 dark:text-gray-300">{articles[0].excerpt}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{articles[0].author}</p>
                </div>
              </Link>
            </CardContent>
          </Card>

          {/* Article Grid */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {articles.slice(1, 4).map((article, i) => (
              <Card key={i} className="overflow-hidden border-0 shadow-none hover:bg-gray-50 dark:hover:bg-gray-800">
                <CardContent className="p-0">
                  <Link href={`/article/${article.id}`} className="flex space-x-4">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt="Article thumbnail"
                      width={120}
                      height={120}
                      className="aspect-square object-cover"
                    />
                    <div className="flex-1 p-2">
                      <h3 className="font-medium line-clamp-2">{article.title}</h3>
                      <p className="text-sm text-gray-700 line-clamp-2 mt-1 dark:text-gray-300">{article.excerpt}</p>
                      <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{article.author}</p>
                    </div>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Link href="/articles">
              <Button variant="outline" className="w-full sm:w-auto">
                Xem tất cả bài viết
              </Button>
            </Link>
          </div>
        </div>

        {/* Sidebar */}
        <div>
          {/* Event Box */}
          <div className="mb-6">
            <EventBox events={sampleEvents} />
          </div>

          <div className="mb-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-bold">Tin mới nhất</h2>
              <Link href="/news" className="text-sm text-blue-600 hover:underline dark:text-blue-400">
                Xem tất cả
              </Link>
            </div>

            <div className="space-y-4">
              <Card className="overflow-hidden">
                <CardContent className="p-4">
                  <Link href="/video/tech-talk-ai">
                    <div className="relative mb-4 rounded-lg overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=200&width=400"
                        alt="Video thumbnail"
                        width={400}
                        height={200}
                        className="aspect-video w-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="rounded-full bg-black/50 p-2">
                          <Play className="h-8 w-8 text-white" />
                        </div>
                      </div>
                    </div>
                    <h3 className="font-medium">VLTC TECH TALK: Tương lai của AI trong phát triển phần mềm</h3>
                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Văn Lang Tech Club</p>
                  </Link>
                </CardContent>
              </Card>

              {quickNews.map((news, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <Badge variant="outline" className="mt-1 flex h-5 w-5 items-center justify-center rounded-full p-0">
                    •
                  </Badge>
                  <div>
                    <Link href={`/news/${i + 1}`} className="font-medium hover:text-blue-600 dark:hover:text-blue-400">
                      {news}
                    </Link>
                    <div className="mt-1 flex items-center">
                      <Image src="/vltc-logo.png" alt="VLTC" width={24} height={24} className="mr-2 rounded" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <Card className="mt-6">
            <CardContent className="p-4">
              <h3 className="font-bold mb-3">Liên hệ</h3>
              <div className="space-y-2 text-sm">
                <p>
                  <span className="font-medium">Email:</span>{" "}
                  <a href="mailto:k.cntt-itclub@vanlanguni.vn" className="hover:text-blue-600 dark:hover:text-blue-400">
                    k.cntt-itclub@vanlanguni.vn
                  </a>
                </p>
                <p>
                  <span className="font-medium">Điện thoại:</span>{" "}
                  <a href="tel:02871099221" className="hover:text-blue-600 dark:hover:text-blue-400">
                    028.7109 9221
                  </a>
                </p>
                <p>
                  <span className="font-medium">Địa chỉ:</span>{" "}
                  <a
                    href="https://maps.google.com/?q=69/68 Đặng Thùy Trâm, Phường 13, Quận Bình Thạnh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    69/68 Đặng Thùy Trâm, Phường 13, Quận Bình Thạnh
                  </a>
                </p>
              </div>
              <div className="mt-4">
                <form onSubmit={handleSubscribe} className="flex flex-col space-y-2">
                  <input
                    type="email"
                    placeholder="Email của bạn"
                    className="rounded-md border border-gray-300 px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-800"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Button type="submit" className="w-full">
                    Đăng ký nhận tin
                  </Button>
                </form>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
