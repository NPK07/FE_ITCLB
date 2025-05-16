"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Search,
  Filter,
  FileText,
  ImageIcon,
  Video,
  FileAudio,
  File,
  Download,
  Eye,
  Bookmark,
  Share2,
} from "lucide-react"
import Image from "next/image"

// Dữ liệu mẫu
const libraryItems = [
  {
    id: "1",
    title: "Giáo trình lập trình Web với React và Next.js",
    description: "Tài liệu hướng dẫn chi tiết về lập trình Web với React và Next.js.",
    category: "Lập trình Web",
    type: "document",
    fileUrl: "#",
    thumbnailUrl: "/placeholder.svg?height=200&width=300",
    uploadedBy: "Nguyễn Văn A",
    uploadedAt: "15/04/2025",
    size: 5.2, // MB
    downloads: 125,
    views: 350,
    tags: ["React", "Next.js", "Web Development"],
    isPublic: true,
    status: "active",
  },
  {
    id: "2",
    title: "Hướng dẫn sử dụng Git và GitHub",
    description: "Tài liệu hướng dẫn cơ bản và nâng cao về Git và GitHub.",
    category: "Công cụ phát triển",
    type: "document",
    fileUrl: "#",
    thumbnailUrl: "/placeholder.svg?height=200&width=300",
    uploadedBy: "Trần Thị B",
    uploadedAt: "10/04/2025",
    size: 3.8, // MB
    downloads: 210,
    views: 420,
    tags: ["Git", "GitHub", "Version Control"],
    isPublic: true,
    status: "active",
  },
  {
    id: "3",
    title: "Bài giảng Machine Learning cơ bản",
    description: "Bài giảng về các khái niệm cơ bản trong Machine Learning.",
    category: "AI & ML",
    type: "document",
    fileUrl: "#",
    thumbnailUrl: "/placeholder.svg?height=200&width=300",
    uploadedBy: "Lê Văn C",
    uploadedAt: "05/04/2025",
    size: 7.5, // MB
    downloads: 98,
    views: 245,
    tags: ["Machine Learning", "AI", "Data Science"],
    isPublic: true,
    status: "active",
  },
  {
    id: "4",
    title: "Video hướng dẫn thiết kế UI/UX",
    description: "Video hướng dẫn chi tiết về thiết kế giao diện người dùng và trải nghiệm người dùng.",
    category: "UI/UX Design",
    type: "video",
    fileUrl: "#",
    thumbnailUrl: "/placeholder.svg?height=200&width=300",
    uploadedBy: "Phạm Thị D",
    uploadedAt: "01/04/2025",
    size: 120.5, // MB
    downloads: 75,
    views: 320,
    tags: ["UI", "UX", "Design", "Figma"],
    isPublic: true,
    status: "active",
  },
  {
    id: "5",
    title: "Tài liệu hướng dẫn lập trình Android",
    description: "Tài liệu hướng dẫn lập trình ứng dụng Android với Kotlin.",
    category: "Mobile Development",
    type: "document",
    fileUrl: "#",
    thumbnailUrl: "/placeholder.svg?height=200&width=300",
    uploadedBy: "Hoàng Văn E",
    uploadedAt: "25/03/2025",
    size: 6.3, // MB
    downloads: 110,
    views: 280,
    tags: ["Android", "Kotlin", "Mobile"],
    isPublic: true,
    status: "active",
  },
  {
    id: "6",
    title: "Hình ảnh biểu đồ kiến trúc hệ thống",
    description: "Bộ sưu tập hình ảnh biểu đồ kiến trúc hệ thống phần mềm.",
    category: "System Design",
    type: "image",
    fileUrl: "#",
    thumbnailUrl: "/placeholder.svg?height=200&width=300",
    uploadedBy: "Ngô Thị F",
    uploadedAt: "20/03/2025",
    size: 15.2, // MB
    downloads: 85,
    views: 190,
    tags: ["System Design", "Architecture", "Diagrams"],
    isPublic: true,
    status: "active",
  },
  {
    id: "7",
    title: "Podcast về xu hướng công nghệ 2025",
    description: "Podcast thảo luận về các xu hướng công nghệ mới nhất năm 2025.",
    category: "Tech Trends",
    type: "audio",
    fileUrl: "#",
    thumbnailUrl: "/placeholder.svg?height=200&width=300",
    uploadedBy: "Đỗ Văn G",
    uploadedAt: "15/03/2025",
    size: 45.8, // MB
    downloads: 65,
    views: 150,
    tags: ["Podcast", "Tech Trends", "Innovation"],
    isPublic: true,
    status: "active",
  },
  {
    id: "8",
    title: "Tài liệu hướng dẫn bảo mật web",
    description: "Tài liệu hướng dẫn về các kỹ thuật bảo mật cho ứng dụng web.",
    category: "Web Security",
    type: "document",
    fileUrl: "#",
    thumbnailUrl: "/placeholder.svg?height=200&width=300",
    uploadedBy: "Vũ Thị H",
    uploadedAt: "10/03/2025",
    size: 4.7, // MB
    downloads: 130,
    views: 310,
    tags: ["Security", "Web", "Cybersecurity"],
    isPublic: true,
    status: "active",
  },
]

// Hàm trợ giúp để lấy biểu tượng dựa trên loại tài liệu
const getFileIcon = (type: string) => {
  switch (type) {
    case "document":
      return <FileText className="h-6 w-6 text-blue-500" />
    case "image":
      return <ImageIcon className="h-6 w-6 text-green-500" />
    case "video":
      return <Video className="h-6 w-6 text-red-500" />
    case "audio":
      return <FileAudio className="h-6 w-6 text-purple-500" />
    default:
      return <File className="h-6 w-6 text-gray-500" />
  }
}

export default function LibraryPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedType, setSelectedType] = useState("all")

  const filteredItems = libraryItems.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedCategory === "all" || item.category === selectedCategory) &&
      (selectedType === "all" || item.type === selectedType),
  )

  // Danh sách các danh mục duy nhất
  const categories = Array.from(new Set(libraryItems.map((item) => item.category)))

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Thư viện tài liệu</h1>
        <p className="text-gray-500">Kho tài liệu, hình ảnh, video và tài nguyên của CLB IT VLU</p>
      </div>

      <div className="mb-6 flex flex-col space-y-4 md:flex-row md:items-center md:space-x-4 md:space-y-0">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            type="search"
            placeholder="Tìm kiếm tài liệu..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" className="flex-shrink-0">
            <Filter className="mr-2 h-4 w-4" />
            Lọc nâng cao
          </Button>
          <Button className="flex-shrink-0">Tải lên tài liệu mới</Button>
        </div>
      </div>

      <Tabs defaultValue="all">
        <div className="mb-6 overflow-x-auto">
          <TabsList className="inline-flex w-auto">
            <TabsTrigger value="all" onClick={() => setSelectedType("all")}>
              Tất cả
            </TabsTrigger>
            <TabsTrigger value="document" onClick={() => setSelectedType("document")}>
              <FileText className="mr-2 h-4 w-4" />
              Tài liệu
            </TabsTrigger>
            <TabsTrigger value="image" onClick={() => setSelectedType("image")}>
              <ImageIcon className="mr-2 h-4 w-4" />
              Hình ảnh
            </TabsTrigger>
            <TabsTrigger value="video" onClick={() => setSelectedType("video")}>
              <Video className="mr-2 h-4 w-4" />
              Video
            </TabsTrigger>
            <TabsTrigger value="audio" onClick={() => setSelectedType("audio")}>
              <FileAudio className="mr-2 h-4 w-4" />
              Audio
            </TabsTrigger>
          </TabsList>
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          <Badge
            variant={selectedCategory === "all" ? "default" : "outline"}
            className="cursor-pointer"
            onClick={() => setSelectedCategory("all")}
          >
            Tất cả
          </Badge>
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>

        <TabsContent value="all" className="mt-0">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredItems.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
                  <Image
                    src={item.thumbnailUrl || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                  <div className="absolute right-2 top-2 rounded-full bg-white p-1.5 shadow-sm">
                    {getFileIcon(item.type)}
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="mb-1 font-medium line-clamp-2">{item.title}</h3>
                  <p className="mb-3 text-sm text-gray-500 line-clamp-2">{item.description}</p>
                  <div className="mb-3 flex flex-wrap gap-1">
                    {item.tags.slice(0, 3).map((tag, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {item.tags.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{item.tags.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="mb-3 flex items-center justify-between text-xs text-gray-500">
                    <span>
                      <Download className="mr-1 inline-block h-3 w-3" />
                      {item.downloads}
                    </span>
                    <span>
                      <Eye className="mr-1 inline-block h-3 w-3" />
                      {item.views}
                    </span>
                    <span>{item.size} MB</span>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="default" className="flex-1">
                      <Download className="mr-2 h-4 w-4" />
                      Tải xuống
                    </Button>
                    <Button variant="outline" size="icon">
                      <Bookmark className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <Search className="mb-4 h-12 w-12 text-gray-300" />
              <h3 className="mb-2 text-lg font-medium">Không tìm thấy tài liệu</h3>
              <p className="text-gray-500">
                Không tìm thấy tài liệu phù hợp với tiêu chí tìm kiếm của bạn. Vui lòng thử lại với từ khóa khác.
              </p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="document" className="mt-0">
          {/* Nội dung giống với tab "all" nhưng đã được lọc theo loại tài liệu */}
        </TabsContent>

        <TabsContent value="image" className="mt-0">
          {/* Nội dung giống với tab "all" nhưng đã được lọc theo loại tài liệu */}
        </TabsContent>

        <TabsContent value="video" className="mt-0">
          {/* Nội dung giống với tab "all" nhưng đã được lọc theo loại tài liệu */}
        </TabsContent>

        <TabsContent value="audio" className="mt-0">
          {/* Nội dung giống với tab "all" nhưng đã được lọc theo loại tài liệu */}
        </TabsContent>
      </Tabs>
    </div>
  )
}
