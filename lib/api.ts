// Đây là file giả lập API để kết nối với backend

// Định nghĩa các kiểu dữ liệu
export interface User {
  id: string
  username: string
  displayName: string
  avatar: string
  coverImage?: string
  bio?: string
  location?: string
  joinDate: string
  following: number
  followers: number
  posts: number
  likes: number
}

export interface Post {
  id: string
  title: string
  content: string
  author: User
  category: string
  createdAt: string
  updatedAt: string
  likes: number
  comments: number
  views: number
  status: "published" | "draft"
  image?: string
}

export interface Comment {
  id: string
  content: string
  author: User
  createdAt: string
  likes: number
}

// API functions
export async function getCurrentUser(): Promise<User> {
  // Giả lập API call
  return {
    id: "3006405",
    username: "nguyen-phuong-khoa",
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
}

export async function getUser(username: string): Promise<User> {
  // Giả lập API call
  return {
    id: "3006405",
    username,
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
}

export async function updateUser(userData: Partial<User>): Promise<User> {
  // Giả lập API call
  console.log("Updating user data:", userData)
  return {
    id: "3006405",
    username: userData.username || "nguyen-phuong-khoa",
    displayName: userData.displayName || "Nguyễn Phương Khoa",
    avatar: userData.avatar || "/placeholder.svg?height=150&width=150",
    coverImage: userData.coverImage || "/placeholder.svg?height=300&width=1200",
    bio: userData.bio || "Người dùng Tinhte.vn",
    location: userData.location || "Hồ Chí Minh",
    joinDate: "Tham gia từ 12/2015",
    following: 120,
    followers: 350,
    posts: 48,
    likes: 256,
  }
}

export async function getPosts(page = 1, limit = 10): Promise<Post[]> {
  // Giả lập API call
  const posts: Post[] = []
  const user = await getCurrentUser()

  for (let i = 0; i < limit; i++) {
    posts.push({
      id: `${i + 1}`,
      title: `Bài viết mẫu ${i + 1}`,
      content: "Nội dung bài viết mẫu...",
      author: user,
      category: ["Công nghệ", "Đánh giá", "Thủ thuật", "Tin tức"][i % 4],
      createdAt: new Date(Date.now() - i * 86400000).toISOString(),
      updatedAt: new Date(Date.now() - i * 86400000).toISOString(),
      likes: 10 + i,
      comments: 5 + i,
      views: 100 + i * 10,
      status: "published",
      image: i % 2 === 0 ? `/placeholder.svg?height=200&width=400` : undefined,
    })
  }

  return posts
}

export async function getPost(id: string): Promise<Post> {
  // Giả lập API call
  const user = await getCurrentUser()
  return {
    id,
    title: `Bài viết mẫu ${id}`,
    content: "Nội dung bài viết mẫu...",
    author: user,
    category: ["Công nghệ", "Đánh giá", "Thủ thuật", "Tin tức"][Number.parseInt(id) % 4],
    createdAt: new Date(Date.now() - Number.parseInt(id) * 86400000).toISOString(),
    updatedAt: new Date(Date.now() - Number.parseInt(id) * 86400000).toISOString(),
    likes: 10 + Number.parseInt(id),
    comments: 5 + Number.parseInt(id),
    views: 100 + Number.parseInt(id) * 10,
    status: "published",
    image: Number.parseInt(id) % 2 === 0 ? `/placeholder.svg?height=200&width=400` : undefined,
  }
}

export async function getDrafts(): Promise<Post[]> {
  // Giả lập API call
  const drafts: Post[] = []
  const user = await getCurrentUser()

  for (let i = 0; i < 5; i++) {
    drafts.push({
      id: `${i + 1}`,
      title: [
        "Đánh giá iPhone 16 Pro Max sau 1 tháng sử dụng",
        "So sánh camera giữa Galaxy S24 Ultra và iPhone 16 Pro",
        "Tổng hợp các tính năng hay trên iOS 18",
        "Trải nghiệm macOS 15 với các tính năng AI mới",
        "Đánh giá tai nghe Sony WH-1000XM5",
      ][i],
      content: "Nội dung bài viết nháp...",
      author: user,
      category: ["Đánh giá", "So sánh", "Thủ thuật", "Trải nghiệm", "Đánh giá"][i],
      createdAt: new Date(Date.now() - i * 86400000).toISOString(),
      updatedAt: new Date(Date.now() - i * 86400000).toISOString(),
      likes: 0,
      comments: 0,
      views: 0,
      status: "draft",
    })
  }

  return drafts
}

export async function createPost(postData: Partial<Post>): Promise<Post> {
  // Giả lập API call
  console.log("Creating post:", postData)
  const user = await getCurrentUser()
  return {
    id: Math.floor(Math.random() * 1000).toString(),
    title: postData.title || "Bài viết mới",
    content: postData.content || "",
    author: user,
    category: postData.category || "Chưa phân loại",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    likes: 0,
    comments: 0,
    views: 0,
    status: postData.status || "draft",
    image: postData.image,
  }
}

export async function updatePost(id: string, postData: Partial<Post>): Promise<Post> {
  // Giả lập API call
  console.log("Updating post:", id, postData)
  const post = await getPost(id)
  return {
    ...post,
    ...postData,
    updatedAt: new Date().toISOString(),
  }
}

export async function deletePost(id: string): Promise<boolean> {
  // Giả lập API call
  console.log("Deleting post:", id)
  return true
}

export async function getComments(postId: string, page = 1, limit = 10): Promise<Comment[]> {
  // Giả lập API call
  const comments: Comment[] = []
  const user = await getCurrentUser()

  for (let i = 0; i < limit; i++) {
    comments.push({
      id: `${i + 1}`,
      content: `Bình luận mẫu ${i + 1}`,
      author: {
        ...user,
        id: `user-${i + 1}`,
        username: `user-${i + 1}`,
        displayName: `Người dùng ${i + 1}`,
      },
      createdAt: new Date(Date.now() - i * 3600000).toISOString(),
      likes: i,
    })
  }

  return comments
}
