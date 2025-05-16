import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, FileText, Calendar, Award, GraduationCap, FileCode, BarChart, ArrowUp, ArrowDown } from "lucide-react"

export default function BODDashboard() {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Dashboard Ban Điều Hành</h1>
        <p className="text-gray-500">Quản lý hoạt động CLB IT VLU</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Thành viên</p>
                <h3 className="text-2xl font-bold">156</h3>
              </div>
              <div className="rounded-full bg-blue-100 p-3 text-blue-600">
                <Users className="h-6 w-6" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-xs text-green-600">
              <ArrowUp className="mr-1 h-3 w-3" />
              <span className="font-medium">+8%</span>
              <span className="ml-1">so với kỳ trước</span>
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
              <div className="rounded-full bg-purple-100 p-3 text-purple-600">
                <Calendar className="h-6 w-6" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-xs text-green-600">
              <ArrowUp className="mr-1 h-3 w-3" />
              <span className="font-medium">+15%</span>
              <span className="ml-1">so với kỳ trước</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Dự án</p>
                <h3 className="text-2xl font-bold">12</h3>
              </div>
              <div className="rounded-full bg-amber-100 p-3 text-amber-600">
                <FileCode className="h-6 w-6" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-xs text-red-600">
              <ArrowDown className="mr-1 h-3 w-3" />
              <span className="font-medium">-5%</span>
              <span className="ml-1">so với kỳ trước</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Khóa học</p>
                <h3 className="text-2xl font-bold">8</h3>
              </div>
              <div className="rounded-full bg-green-100 p-3 text-green-600">
                <GraduationCap className="h-6 w-6" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-xs text-green-600">
              <ArrowUp className="mr-1 h-3 w-3" />
              <span className="font-medium">+33%</span>
              <span className="ml-1">so với kỳ trước</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Sự kiện sắp tới</CardTitle>
            <CardDescription>Các sự kiện sắp diễn ra trong 30 ngày tới</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  title: "Workshop: Lập trình Web với React và Next.js",
                  date: "15/05/2025",
                  location: "Phòng 2A01, Cơ sở 1",
                  attendees: 45,
                  maxAttendees: 60,
                },
                {
                  title: "Seminar: Trí tuệ nhân tạo và ứng dụng trong cuộc sống",
                  date: "20/05/2025",
                  location: "Hội trường A, Cơ sở 2",
                  attendees: 120,
                  maxAttendees: 200,
                },
                {
                  title: "Cuộc thi: Hackathon VLU 2025",
                  date: "25/05/2025 - 26/05/2025",
                  location: "Khu vực sáng tạo, Thư viện",
                  attendees: 75,
                  maxAttendees: 100,
                },
                {
                  title: "Tech Talk: Blockchain và tương lai của tài chính",
                  date: "05/06/2025",
                  location: "Phòng hội thảo, Tòa nhà B",
                  attendees: 35,
                  maxAttendees: 80,
                },
              ].map((event, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">{event.title}</h4>
                    <div className="flex flex-wrap text-sm text-gray-500">
                      <span className="mr-3">{event.date}</span>
                      <span>{event.location}</span>
                    </div>
                    <div className="mt-1 flex items-center text-xs">
                      <span className="text-gray-500">
                        {event.attendees}/{event.maxAttendees} người tham dự
                      </span>
                      <div className="ml-2 h-1.5 w-16 overflow-hidden rounded-full bg-gray-200">
                        <div
                          className="h-full rounded-full bg-blue-600"
                          style={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Thành tích gần đây</CardTitle>
            <CardDescription>Các thành tích của CLB trong thời gian gần đây</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  title: "Giải nhất cuộc thi Hackathon 2025",
                  date: "01/04/2025",
                  description: "Đội thi của CLB IT VLU đã giành giải nhất cuộc thi Hackathon 2025 với dự án...",
                },
                {
                  title: "Top 3 CLB xuất sắc nhất trường",
                  date: "15/03/2025",
                  description: "CLB IT VLU được vinh danh là một trong 3 CLB xuất sắc nhất trường năm học 2024-2025.",
                },
                {
                  title: "Chứng nhận đối tác của Microsoft",
                  date: "01/03/2025",
                  description: "CLB IT VLU chính thức trở thành đối tác của Microsoft trong chương trình...",
                },
                {
                  title: "Giải ba cuộc thi An toàn thông tin",
                  date: "15/02/2025",
                  description: "Đội thi của CLB IT VLU đã giành giải ba cuộc thi An toàn thông tin khu vực...",
                },
              ].map((achievement, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100 text-amber-600">
                    <Award className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">{achievement.title}</h4>
                    <p className="text-sm text-gray-500">{achievement.date}</p>
                    <p className="mt-1 text-xs text-gray-500 line-clamp-1">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <Tabs defaultValue="projects">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="projects">Dự án đang thực hiện</TabsTrigger>
            <TabsTrigger value="courses">Khóa học đang diễn ra</TabsTrigger>
            <TabsTrigger value="stats">Thống kê hoạt động</TabsTrigger>
          </TabsList>
          <TabsContent value="projects" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Website CLB IT VLU",
                  description: "Xây dựng website chính thức cho CLB IT VLU với đầy đủ tính năng.",
                  progress: 75,
                  members: 5,
                  dueDate: "30/06/2025",
                  tech: ["React", "Next.js", "Tailwind CSS"],
                },
                {
                  name: "Ứng dụng di động VLU Connect",
                  description: "Ứng dụng kết nối sinh viên Văn Lang với các hoạt động, sự kiện.",
                  progress: 40,
                  members: 4,
                  dueDate: "15/08/2025",
                  tech: ["React Native", "Firebase"],
                },
                {
                  name: "Hệ thống quản lý thư viện",
                  description: "Xây dựng hệ thống quản lý thư viện số cho CLB.",
                  progress: 60,
                  members: 3,
                  dueDate: "01/07/2025",
                  tech: ["Vue.js", "Node.js", "MongoDB"],
                },
              ].map((project, i) => (
                <Card key={i}>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold">{project.name}</h3>
                    <p className="mt-1 text-sm text-gray-500">{project.description}</p>
                    <div className="mt-4">
                      <div className="mb-1 flex items-center justify-between text-sm">
                        <span>Tiến độ</span>
                        <span>{project.progress}%</span>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                        <div
                          className="h-full rounded-full bg-blue-600"
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex -space-x-2">
                        {Array.from({ length: project.members }).map((_, j) => (
                          <div
                            key={j}
                            className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-gray-200 text-xs font-medium"
                          >
                            {String.fromCharCode(65 + j)}
                          </div>
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">Hạn: {project.dueDate}</span>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tech.map((tech, j) => (
                        <span key={j} className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="courses" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Lập trình Web cơ bản",
                  instructor: "Nguyễn Văn A",
                  participants: 25,
                  maxParticipants: 30,
                  progress: 60,
                  schedule: "Thứ 3, 5 (18:00 - 20:00)",
                  location: "Phòng Lab 1, Cơ sở 1",
                },
                {
                  title: "UI/UX Design",
                  instructor: "Trần Thị B",
                  participants: 20,
                  maxParticipants: 25,
                  progress: 40,
                  schedule: "Thứ 4, 6 (18:00 - 20:00)",
                  location: "Phòng Lab Design, Cơ sở 3",
                },
                {
                  title: "Machine Learning cơ bản",
                  instructor: "Lê Văn C",
                  participants: 15,
                  maxParticipants: 20,
                  progress: 30,
                  schedule: "Thứ 7 (9:00 - 12:00)",
                  location: "Phòng Lab 2, Cơ sở 2",
                },
              ].map((course, i) => (
                <Card key={i}>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold">{course.title}</h3>
                    <p className="mt-1 text-sm text-gray-500">Giảng viên: {course.instructor}</p>
                    <div className="mt-4">
                      <div className="mb-1 flex items-center justify-between text-sm">
                        <span>Tiến độ khóa học</span>
                        <span>{course.progress}%</span>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                        <div
                          className="h-full rounded-full bg-green-600"
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="mt-4 space-y-2 text-sm">
                      <div className="flex items-center">
                        <Users className="mr-2 h-4 w-4 text-gray-500" />
                        <span>
                          {course.participants}/{course.maxParticipants} học viên
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="mr-2 h-4 w-4 text-gray-500" />
                        <span>{course.schedule}</span>
                      </div>
                      <div className="flex items-center">
                        <FileText className="mr-2 h-4 w-4 text-gray-500" />
                        <span>{course.location}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="stats" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="text-lg font-bold">Thống kê hoạt động CLB</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500">Học kỳ 2, 2024-2025</span>
                    <BarChart className="h-4 w-4 text-gray-500" />
                  </div>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="mb-4 text-sm font-medium uppercase text-gray-500">Phân bố thành viên theo khoa</h4>
                    <div className="space-y-4">
                      {[
                        { name: "Công nghệ thông tin", value: 65, color: "bg-blue-500" },
                        { name: "Kỹ thuật phần mềm", value: 20, color: "bg-purple-500" },
                        { name: "Khoa học máy tính", value: 10, color: "bg-green-500" },
                        { name: "Khác", value: 5, color: "bg-gray-500" },
                      ].map((item, i) => (
                        <div key={i}>
                          <div className="mb-1 flex items-center justify-between text-sm">
                            <span>{item.name}</span>
                            <span>{item.value}%</span>
                          </div>
                          <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                            <div
                              className={`h-full rounded-full ${item.color}`}
                              style={{ width: `${item.value}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-4 text-sm font-medium uppercase text-gray-500">Phân bố hoạt động</h4>
                    <div className="space-y-4">
                      {[
                        { name: "Sự kiện", value: 40, color: "bg-amber-500" },
                        { name: "Khóa học", value: 25, color: "bg-green-500" },
                        { name: "Dự án", value: 20, color: "bg-blue-500" },
                        { name: "Cuộc thi", value: 15, color: "bg-red-500" },
                      ].map((item, i) => (
                        <div key={i}>
                          <div className="mb-1 flex items-center justify-between text-sm">
                            <span>{item.name}</span>
                            <span>{item.value}%</span>
                          </div>
                          <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                            <div
                              className={`h-full rounded-full ${item.color}`}
                              style={{ width: `${item.value}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
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
