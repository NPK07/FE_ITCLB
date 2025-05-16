"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Bold, Italic, Link, List, ListOrdered, ImageIcon, Video, Code, Quote, Undo, Redo } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function CreatePost({ params }: { params: { id: string } }) {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [category, setCategory] = useState("")
  const [isPreview, setIsPreview] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Giả lập API call
    console.log({ title, content, category })
    alert("Bài viết đã được lưu!")
  }

  const handleSaveDraft = async () => {
    // Giả lập API call lưu nháp
    console.log("Lưu nháp:", { title, content, category })
    alert("Bài viết đã được lưu vào nháp!")
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Tạo bài viết mới</h1>
        <p className="text-sm text-gray-500">ID: {params.id}</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid gap-6">
          <div>
            <Input
              placeholder="Tiêu đề bài viết"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="text-xl font-medium"
            />
          </div>

          <div>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Chọn chuyên mục" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tech">Công nghệ</SelectItem>
                <SelectItem value="review">Đánh giá</SelectItem>
                <SelectItem value="tips">Thủ thuật</SelectItem>
                <SelectItem value="news">Tin tức</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Tabs defaultValue="editor" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="editor" onClick={() => setIsPreview(false)} className="text-sm">
                Soạn thảo
              </TabsTrigger>
              <TabsTrigger value="preview" onClick={() => setIsPreview(true)} className="text-sm">
                Xem trước
              </TabsTrigger>
            </TabsList>
            <TabsContent value="editor">
              <Card>
                <CardContent className="p-4">
                  <div className="mb-4 flex flex-wrap gap-2 border-b pb-3">
                    <Button type="button" variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Bold className="h-4 w-4" />
                    </Button>
                    <Button type="button" variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Italic className="h-4 w-4" />
                    </Button>
                    <Button type="button" variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Link className="h-4 w-4" />
                    </Button>
                    <Button type="button" variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <List className="h-4 w-4" />
                    </Button>
                    <Button type="button" variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <ListOrdered className="h-4 w-4" />
                    </Button>
                    <Button type="button" variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <ImageIcon className="h-4 w-4" />
                    </Button>
                    <Button type="button" variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Video className="h-4 w-4" />
                    </Button>
                    <Button type="button" variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Code className="h-4 w-4" />
                    </Button>
                    <Button type="button" variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Quote className="h-4 w-4" />
                    </Button>
                    <div className="ml-auto flex items-center space-x-1">
                      <Button type="button" variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Undo className="h-4 w-4" />
                      </Button>
                      <Button type="button" variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Redo className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <Textarea
                    placeholder="Nội dung bài viết..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="min-h-[400px] resize-y"
                  />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="preview">
              <Card>
                <CardContent className="p-6">
                  {title ? (
                    <h1 className="mb-4 text-2xl font-bold">{title}</h1>
                  ) : (
                    <p className="mb-4 text-gray-400">[Chưa có tiêu đề bài viết]</p>
                  )}
                  {content ? (
                    <div className="prose max-w-none">
                      {content.split("\n").map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-400">[Chưa có nội dung bài viết]</p>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Switch id="auto-save" />
              <Label htmlFor="auto-save">Tự động lưu nháp</Label>
            </div>

            <div className="flex items-center space-x-2">
              <Switch id="comments" defaultChecked />
              <Label htmlFor="comments">Cho phép bình luận</Label>
            </div>
          </div>

          <div className="flex space-x-4">
            <Button type="submit" className="bg-[#00B0F4] hover:bg-[#00A0E4]">
              Đăng bài
            </Button>
            <Button type="button" variant="outline" onClick={handleSaveDraft} className="border-gray-300">
              Lưu nháp
            </Button>
            <Button type="button" variant="ghost" className="ml-auto text-gray-500">
              Hủy
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}
