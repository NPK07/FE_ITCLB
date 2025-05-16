"use client"

import type React from "react"

import Link from "next/link"
import {
  Search,
  Mail,
  Bell,
  User,
  Settings,
  Bookmark,
  FileText,
  BellIcon,
  Lock,
  MoreHorizontal,
  Sun,
  Moon,
  MessageSquare,
  LogOut,
  Menu,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { usePathname, useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"
import { useTheme } from "next-themes"

export default function Header() {
  const pathname = usePathname()
  const router = useRouter()
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [isMounted, setIsMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // Handle search submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  // Handle theme toggle
  useEffect(() => {
    setIsMounted(true)
  }, [])

  const mainNavItems = [
    { href: "/", label: "DIỄN ĐÀN" },
    { href: "/events", label: "SỰ KIỆN" },
    { href: "/projects", label: "DỰ ÁN" },
    { href: "/library", label: "THƯ VIỆN" },
    { href: "/about", label: "GIỚI THIỆU" },
  ]

  const secondaryNavItems = [
    { href: "#android", label: "Android", icon: "★" },
    { href: "#ios", label: "iOS", icon: "★" },
    { href: "#webdev", label: "Web Dev", icon: "★" },
    { href: "#ai", label: "AI", icon: "★" },
    { href: "/events/upcoming", label: "Sự kiện sắp tới", icon: "📅" },
  ]

  return (
    <header className="w-full bg-[#1a2634] text-white">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-6">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/vltc-logo.png" alt="VLTC Logo" width={32} height={32} className="rounded-full" />
              <span className="font-bold text-lg">Văn Lang Tech Club</span>
            </Link>
            <nav className="hidden md:flex space-x-6">
              {mainNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-white/80",
                    pathname === item.href ? "text-white" : "text-white/60",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <form onSubmit={handleSearch} className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-white/50" />
              <Input
                type="search"
                placeholder="Tìm kiếm..."
                className="w-full rounded-md border-none bg-white/10 pl-8 text-sm text-white placeholder:text-white/50 focus-visible:ring-1 focus-visible:ring-white/30"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
            {isLoggedIn ? (
              <div className="flex items-center space-x-2">
                <Link href="/editorv2/create/new">
                  <Button className="bg-blue-600 hover:bg-blue-700 rounded-full hidden sm:flex">
                    Viết Bài Chia Sẻ
                  </Button>
                </Link>
                <Link href="/messages">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white/70 hover:text-white hover:bg-white/10 relative"
                  >
                    <Mail className="h-5 w-5" />
                    <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px]">
                      3
                    </span>
                  </Button>
                </Link>
                <Link href="/notifications">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white/70 hover:text-white hover:bg-white/10 relative"
                  >
                    <Bell className="h-5 w-5" />
                    <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px]">
                      5
                    </span>
                  </Button>
                </Link>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@user" />
                        <AvatarFallback>U</AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end" forceMount>
                    <DropdownMenuGroup>
                      <DropdownMenuItem onClick={() => router.push("/profile/me")}>
                        <User className="mr-2 h-4 w-4" />
                        <span>Trang cá nhân</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => router.push("/account/personal-details")}>
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Thông tin cá nhân</span>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem onClick={() => router.push("/bookmarks")}>
                        <Bookmark className="mr-2 h-4 w-4" />
                        <span>Bookmark</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => router.push("/my-draft")}>
                        <FileText className="mr-2 h-4 w-4" />
                        <span>Bài viết nháp</span>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem onClick={() => router.push("/settings/notifications")}>
                        <BellIcon className="mr-2 h-4 w-4" />
                        <span>Tùy chọn thông báo</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => router.push("/settings/password")}>
                        <Lock className="mr-2 h-4 w-4" />
                        <span>Thay đổi mật khẩu</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => router.push("/settings")}>
                        <MoreHorizontal className="mr-2 h-4 w-4" />
                        <span>Cài đặt khác</span>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    {isMounted && (
                      <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
                        <DropdownMenuRadioItem value="light">
                          <Sun className="mr-2 h-4 w-4" />
                          <span>Giao diện sáng</span>
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="dark">
                          <Moon className="mr-2 h-4 w-4" />
                          <span>Giao diện tối</span>
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="system">
                          <span className="mr-2">💻</span>
                          <span>Theo hệ thống</span>
                        </DropdownMenuRadioItem>
                      </DropdownMenuRadioGroup>
                    )}
                    <DropdownMenuItem onClick={() => router.push("/feedback")}>
                      <MessageSquare className="mr-2 h-4 w-4" />
                      <span>Góp ý</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => setIsLoggedIn(false)}>
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Đăng xuất</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-white md:hidden">
                      <Menu className="h-5 w-5" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                    <nav className="flex flex-col space-y-4 mt-6">
                      {mainNavItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="text-base font-medium py-2 hover:text-blue-600"
                        >
                          {item.label}
                        </Link>
                      ))}
                      <Link href="/editorv2/create/new" className="text-base font-medium py-2 text-blue-600">
                        Viết Bài Chia Sẻ
                      </Link>
                    </nav>
                  </SheetContent>
                </Sheet>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Button
                  onClick={() => setIsLoggedIn(true)}
                  variant="outline"
                  className="bg-transparent text-white border-white/20 hover:bg-white/10 hover:text-white"
                >
                  ĐĂNG NHẬP
                </Button>
                <Link href="/register">
                  <Button className="bg-blue-600 hover:bg-blue-700">ĐĂNG KÝ</Button>
                </Link>
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-white md:hidden">
                      <Menu className="h-5 w-5" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                    <nav className="flex flex-col space-y-4 mt-6">
                      {mainNavItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="text-base font-medium py-2 hover:text-blue-600"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </nav>
                  </SheetContent>
                </Sheet>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 bg-[#1a2634]/90">
        <div className="container mx-auto px-4">
          <div className="flex h-10 items-center space-x-4 overflow-x-auto">
            {secondaryNavItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="flex items-center text-xs text-white/70 hover:text-white whitespace-nowrap"
              >
                <span className="mr-1">{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
