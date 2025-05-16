"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Camera, Upload } from "lucide-react"

export default function PersonalDetails() {
  const [userData, setUserData] = useState({
    displayName: "Nguyễn Phương Khoa",
    username: "nguyen-phuong-khoa",
    email: "example@email.com",
    bio: "Người dùng Tinhte.vn",
    location: "Hồ Chí Minh",
    website: "https://example.com",
    birthday: "1990-01-01",
    gender: "male",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setUserData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setUserData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Giả lập API call
    console.log("Đã cập nhật thông tin:", userData)
    alert("Thông tin cá nhân đã được cập nhật!")
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Thông tin cá nhân</h1>
        <p className="text-sm text-gray-500">Cập nhật thông tin cá nhân của bạn</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Ảnh đại diện</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <div className="relative mb-4">
                <Avatar className="h-32 w-32">
                  <AvatarImage src="/placeholder.svg?height=128&width=128" alt="Avatar" />
                  <AvatarFallback>NK</AvatarFallback>
                </Avatar>
                <Button size="icon" className="absolute bottom-0 right-0 h-8 w-8 rounded-full">
                  <Camera className="h-4 w-4" />
                </Button>
              </div>
              <div className="space-y-2 text-center">
                <h3 className="font-medium">{userData.displayName}</h3>
                <p className="text-sm text-gray-500">@{userData.username}</p>
              </div>
              <div className="mt-4 w-full">
                <Button variant="outline" className="w-full" size="sm">
                  <Upload className="mr-2 h-4 w-4" />
                  Tải ảnh lên
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-lg">Ảnh bìa</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative aspect-[3/1] w-full overflow-hidden rounded-md bg-gray-100">
                <img src="/placeholder.svg?height=150&width=450" alt="Cover" className="h-full w-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity hover:opacity-100">
                  <Button variant="secondary" size="sm">
                    <Camera className="mr-2 h-4 w-4" />
                    Thay đổi ảnh bìa
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2">
          <Tabs defaultValue="personal" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="personal" className="text-sm">
                Thông tin cá nhân
              </TabsTrigger>
              <TabsTrigger value="account" className="text-sm">
                Tài khoản
              </TabsTrigger>
              <TabsTrigger value="privacy" className="text-sm">
                Quyền riêng tư
              </TabsTrigger>
            </TabsList>

            <TabsContent value="personal">
              <Card>
                <CardHeader>
                  <CardTitle>Thông tin cá nhân</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="displayName">Tên hiển thị</Label>
                        <Input
                          id="displayName"
                          name="displayName"
                          value={userData.displayName}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="username">Tên người dùng</Label>
                        <Input id="username" name="username" value={userData.username} onChange={handleChange} />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="bio">Giới thiệu</Label>
                      <Textarea id="bio" name="bio" value={userData.bio} onChange={handleChange} rows={3} />
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="location">Địa điểm</Label>
                        <Input id="location" name="location" value={userData.location} onChange={handleChange} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="website">Website</Label>
                        <Input id="website" name="website" value={userData.website} onChange={handleChange} />
                      </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="birthday">Ngày sinh</Label>
                        <Input
                          id="birthday"
                          name="birthday"
                          type="date"
                          value={userData.birthday}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="gender">Giới tính</Label>
                        <Select value={userData.gender} onValueChange={(value) => handleSelectChange("gender", value)}>
                          <SelectTrigger id="gender">
                            <SelectValue placeholder="Chọn giới tính" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="male">Nam</SelectItem>
                            <SelectItem value="female">Nữ</SelectItem>
                            <SelectItem value="other">Khác</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="flex justify-end space-x-2">
                      <Button variant="outline">Hủy</Button>
                      <Button type="submit" className="bg-[#00B0F4] hover:bg-[#00A0E4]">
                        Lưu thay đổi
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="account">
              <Card>
                <CardHeader>
                  <CardTitle>Thông tin tài khoản</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" value={userData.email} onChange={handleChange} />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="current-password">Mật khẩu hiện tại</Label>
                      <Input id="current-password" type="password" placeholder="••••••••" />
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="new-password">Mật khẩu mới</Label>
                        <Input id="new-password" type="password" placeholder="••••••••" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirm-password">Xác nhận mật khẩu</Label>
                        <Input id="confirm-password" type="password" placeholder="••••••••" />
                      </div>
                    </div>

                    <div className="flex justify-end space-x-2">
                      <Button variant="outline">Hủy</Button>
                      <Button className="bg-[#00B0F4] hover:bg-[#00A0E4]">Cập nhật mật khẩu</Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="privacy">
              <Card>
                <CardHeader>
                  <CardTitle>Cài đặt quyền riêng tư</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Ai có thể xem trang cá nhân của bạn</Label>
                      <Select defaultValue="public">
                        <SelectTrigger>
                          <SelectValue placeholder="Chọn quyền riêng tư" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="public">Tất cả mọi người</SelectItem>
                          <SelectItem value="followers">Chỉ người theo dõi</SelectItem>
                          <SelectItem value="private">Chỉ mình tôi</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Ai có thể bình luận bài viết của bạn</Label>
                      <Select defaultValue="public">
                        <SelectTrigger>
                          <SelectValue placeholder="Chọn quyền riêng tư" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="public">Tất cả mọi người</SelectItem>
                          <SelectItem value="followers">Chỉ người theo dõi</SelectItem>
                          <SelectItem value="private">Chỉ mình tôi</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Ai có thể nhắn tin cho bạn</Label>
                      <Select defaultValue="followers">
                        <SelectTrigger>
                          <SelectValue placeholder="Chọn quyền riêng tư" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="public">Tất cả mọi người</SelectItem>
                          <SelectItem value="followers">Chỉ người theo dõi</SelectItem>
                          <SelectItem value="private">Không ai cả</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex justify-end space-x-2">
                      <Button variant="outline">Hủy</Button>
                      <Button className="bg-[#00B0F4] hover:bg-[#00A0E4]">Lưu thay đổi</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
