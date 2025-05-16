import Image from "next/image"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, MessageSquare, Settings, User, Users } from "lucide-react"

export default function ProfilePage({
  params,
}: {
  params: { username: string }
}) {
  // Giả lập dữ liệu người dùng
  const user = {
    id: "3006405",
    username: params.username,
    displayName: "Nguyễn Phương Khoa",
    avatar: "/placeholder.svg?height=150&width=150",
    coverImage: "/placeholder.svg?height=300&width=1200",
    bio: "Người dùng Tinhte.vn",
    location: "Hồ Chí Minh",
    joinDate: "Tham gia từ 12/2015",
    following: 120,
    followers: 350,
    posts: 48,
    likes: 256,
  }

  return (
    <div>
      {/* Cover Image */}
      <div className="relative h-48 w-full bg-gray-200 md:h-64">
        <Image src={user.coverImage || "/placeholder.svg"} alt="Cover" fill className="object-cover" />
      </div>

      <div className="container mx-auto px-4">
        {/* Profile Header */}
        <div className="relative -mt-16 mb-6 flex flex-col items-center md:flex-row md:items-end md:space-x-6">
          <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-white bg-white">
            <Image src={user.avatar || "/placeholder.svg"} alt={user.displayName} fill className="object-cover" />
          </div>
          <div className="mt-4 flex flex-1 flex-col items-center text-center md:items-start md:text-left">
            <h1 className="text-2xl font-bold">{user.displayName}</h1>
            <p className="text-sm text-gray-500">@{user.username}</p>
            <div className="mt-2 flex items-center space-x-4 text-sm">
              <div className="flex items-center">
                <MapPin className="mr-1 h-4 w-4 text-gray-500" />
                <span>{user.location}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="mr-1 h-4 w-4 text-gray-500" />
                <span>{user.joinDate}</span>
              </div>
            </div>
          </div>
          <div className="mt-4 flex space-x-2 md:mt-0">
            <Button variant="outline" size="sm">
              <MessageSquare className="mr-2 h-4 w-4" />
              Nhắn tin
            </Button>
            <Link href="/account/personal-details">
              <Button variant="outline" size="sm">
                <Settings className="mr-2 h-4 w-4" />
                Chỉnh sửa
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-4">
          <Card>
            <CardContent className="flex flex-col items-center justify-center p-4">
              <span className="text-2xl font-bold">{user.posts}</span>
              <span className="text-sm text-gray-500">Bài viết</span>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center justify-center p-4">
              <span className="text-2xl font-bold">{user.likes}</span>
              <span className="text-sm text-gray-500">Lượt thích</span>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center justify-center p-4">
              <span className="text-2xl font-bold">{user.following}</span>
              <span className="text-sm text-gray-500">Đang theo dõi</span>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center justify-center p-4">
              <span className="text-2xl font-bold">{user.followers}</span>
              <span className="text-sm text-gray-500">Người theo dõi</span>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="posts" className="mb-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="posts" className="text-sm">
              Bài viết
            </TabsTrigger>
            <TabsTrigger value="media" className="text-sm">
              Hình ảnh
            </TabsTrigger>
            <TabsTrigger value="likes" className="text-sm">
              Đã thích
            </TabsTrigger>
            <TabsTrigger value="about" className="text-sm">
              Giới thiệu
            </TabsTrigger>
          </TabsList>
          <TabsContent value="posts" className="mt-6">
            <div className="space-y-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Card key={i}>
                  <CardContent className="p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Image
                          src={user.avatar || "/placeholder.svg"}
                          alt={user.displayName}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                        <div>
                          <p className="font-medium">{user.displayName}</p>
                          <p className="text-xs text-gray-500">
                            {new Date(Date.now() - i * 86400000).toLocaleDateString("vi-VN")}
                          </p>
                        </div>
                      </div>
                      <Badge variant="outline">Công nghệ</Badge>
                    </div>
                    <h3 className="mb-2 text-lg font-medium">
                      {
                        [
                          "Đánh giá iPhone 16 Pro Max sau 1 tháng sử dụng",
                          "Trải nghiệm macOS 15 với các tính năng AI mới",
                          "So sánh camera giữa Galaxy S24 Ultra và iPhone 16 Pro",
                          "Tổng hợp các tính năng hay trên iOS 18",
                          "Đánh giá tai nghe Sony WH-1000XM5",
                        ][i]
                      }
                    </h3>
                    <p className="mb-4 text-gray-600 line-clamp-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                    </p>
                    {i % 2 === 0 && (
                      <div className="mb-4">
                        <Image
                          src={`/placeholder.svg?height=200&width=600`}
                          alt="Post image"
                          width={600}
                          height={200}
                          className="rounded-lg object-cover"
                        />
                      </div>
                    )}
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-4">
                        <span>👍 {24 + i * 3} thích</span>
                        <span>💬 {12 + i} bình luận</span>
                      </div>
                      <span>{1200 + i * 100} lượt xem</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="media" className="mt-6">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src={`/placeholder.svg?height=300&width=300`}
                    alt={`Media ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="likes" className="mt-6">
            <div className="space-y-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <Card key={i}>
                  <CardContent className="p-4">
                    <div className="mb-2 flex items-center space-x-2">
                      <Image
                        src={`/placeholder.svg?height=40&width=40`}
                        alt="User avatar"
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div>
                        <p className="font-medium">{["Anh Tú", "ducluanbg", "huynhduy9988"][i]}</p>
                        <p className="text-xs text-gray-500">
                          {new Date(Date.now() - i * 86400000).toLocaleDateString("vi-VN")}
                        </p>
                      </div>
                    </div>
                    <h3 className="mb-2 text-lg font-medium">
                      {
                        [
                          "Apple sẽ ra mắt MacBook Pro M4 vào tháng 10",
                          "So sánh hiệu năng giữa Snapdragon 8 Gen 3 và A18 Pro",
                          "Đánh giá iPad Pro M4 sau 2 tuần sử dụng",
                        ][i]
                      }
                    </h3>
                    <p className="text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="about" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="mb-2 text-lg font-medium">Giới thiệu</h3>
                    <p>{user.bio}</p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-medium">Thông tin</h3>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <MapPin className="mr-2 h-5 w-5 text-gray-500" />
                        <span>Sống tại {user.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="mr-2 h-5 w-5 text-gray-500" />
                        <span>{user.joinDate}</span>
                      </div>
                      <div className="flex items-center">
                        <User className="mr-2 h-5 w-5 text-gray-500" />
                        <span>ID: {user.id}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="mr-2 h-5 w-5 text-gray-500" />
                        <span>
                          Đang theo dõi {user.following} người dùng và có {user.followers} người theo dõi
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-medium">Huy hiệu</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-blue-500 hover:bg-blue-600">Thành viên VIP</Badge>
                      <Badge className="bg-green-500 hover:bg-green-600">Cống hiến</Badge>
                      <Badge className="bg-purple-500 hover:bg-purple-600">Reviewer</Badge>
                      <Badge className="bg-amber-500 hover:bg-amber-600">5 năm</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
