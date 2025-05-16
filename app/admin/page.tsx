import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, FileText, Calendar, Activity, AlertTriangle, CheckCircle, XCircle, Clock } from "lucide-react"

export default function AdminDashboard() {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Dashboard Quản Trị</h1>
        <p className="text-gray-500">Xem tổng quan và quản lý hệ thống CLB IT VLU</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Tổng người dùng</p>
                <h3 className="text-2xl font-bold">1,248</h3>
              </div>
              <div className="rounded-full bg-blue-100 p-3 text-blue-600">
                <Users className="h-6 w-6" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-xs text-green-600">
              <span className="font-medium">+12%</span>
              <span className="ml-1">so với tháng trước</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Bài viết</p>
                <h3 className="text-2xl font-bold">356</h3>
              </div>
              <div className="rounded-full bg-purple-100 p-3 text-purple-600">
                <FileText className="h-6 w-6" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-xs text-green-600">
              <span className="font-medium">+8%</span>
              <span className="ml-1">so với tháng trước</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Sự kiện</p>
                <h3 className="text-2xl font-bold">24</h3>
              </div>
              <div className="rounded-full bg-amber-100 p-3 text-amber-600">
                <Calendar className="h-6 w-6" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-xs text-green-600">
              <span className="font-medium">+15%</span>
              <span className="ml-1">so với tháng trước</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Hoạt động hệ thống</p>
                <h3 className="text-2xl font-bold">1,892</h3>
              </div>
              <div className="rounded-full bg-green-100 p-3 text-green-600">
                <Activity className="h-6 w-6" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-xs text-green-600">
              <span className="font-medium">+24%</span>
              <span className="ml-1">so với tháng trước</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Trạng thái hệ thống</CardTitle>
            <CardDescription>Tình trạng các dịch vụ trong hệ thống</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                  <span>Website chính</span>
                </div>
                <span className="text-sm text-green-500">Hoạt động</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                  <span>Hệ thống thư viện</span>
                </div>
                <span className="text-sm text-green-500">Hoạt động</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                  <span>Hệ thống đăng ký sự kiện</span>
                </div>
                <span className="text-sm text-green-500">Hoạt động</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <AlertTriangle className="mr-2 h-5 w-5 text-amber-500" />
                  <span>Hệ thống thông báo</span>
                </div>
                <span className="text-sm text-amber-500">Chậm</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <XCircle className="mr-2 h-5 w-5 text-red-500" />
                  <span>API tích hợp bên thứ ba</span>
                </div>
                <span className="text-sm text-red-500">Lỗi</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Logs gần đây</CardTitle>
            <CardDescription>Các hoạt động hệ thống gần đây</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  action: "Đăng nhập thành công",
                  user: "admin@vlu.edu.vn",
                  time: "5 phút trước",
                  status: "success",
                },
                {
                  action: "Cập nhật cài đặt hệ thống",
                  user: "admin@vlu.edu.vn",
                  time: "10 phút trước",
                  status: "success",
                },
                {
                  action: "Thêm người dùng mới",
                  user: "admin@vlu.edu.vn",
                  time: "30 phút trước",
                  status: "success",
                },
                {
                  action: "Đăng nhập thất bại",
                  user: "unknown@example.com",
                  time: "45 phút trước",
                  status: "error",
                },
                {
                  action: "Cảnh báo bảo mật",
                  user: "system",
                  time: "1 giờ trước",
                  status: "warning",
                },
              ].map((log, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{log.action}</p>
                    <p className="text-sm text-gray-500">{log.user}</p>
                  </div>
                  <div className="flex items-center">
                    <span
                      className={`mr-2 h-2 w-2 rounded-full ${
                        log.status === "success"
                          ? "bg-green-500"
                          : log.status === "warning"
                            ? "bg-amber-500"
                            : "bg-red-500"
                      }`}
                    ></span>
                    <span className="text-sm text-gray-500">
                      <Clock className="mr-1 inline-block h-3 w-3" />
                      {log.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <Tabs defaultValue="users">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="users">Người dùng mới</TabsTrigger>
            <TabsTrigger value="posts">Bài viết chờ duyệt</TabsTrigger>
            <TabsTrigger value="issues">Vấn đề cần xử lý</TabsTrigger>
          </TabsList>
          <TabsContent value="users" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                        <div className="ml-4">
                          <p className="font-medium">{`Người dùng ${i + 1}`}</p>
                          <p className="text-sm text-gray-500">{`user${i + 1}@example.com`}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-600">Thành viên mới</span>
                        <span className="text-sm text-gray-500">{`${i + 1} ngày trước`}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="posts" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{`Bài viết chờ duyệt ${i + 1}`}</p>
                        <p className="text-sm text-gray-500">{`Người dùng ${i + 1}`}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="rounded-full bg-amber-100 px-2 py-1 text-xs text-amber-600">Chờ duyệt</span>
                        <span className="text-sm text-gray-500">{`${i + 1} giờ trước`}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="issues" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{`Vấn đề ${i + 1}`}</p>
                        <p className="text-sm text-gray-500">{`Báo cáo bởi: Người dùng ${i + 1}`}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span
                          className={`rounded-full px-2 py-1 text-xs ${
                            i % 3 === 0
                              ? "bg-red-100 text-red-600"
                              : i % 3 === 1
                                ? "bg-amber-100 text-amber-600"
                                : "bg-blue-100 text-blue-600"
                          }`}
                        >
                          {i % 3 === 0 ? "Cao" : i % 3 === 1 ? "Trung bình" : "Thấp"}
                        </span>
                        <span className="text-sm text-gray-500">{`${i + 1} ngày trước`}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
