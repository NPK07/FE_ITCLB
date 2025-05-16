export type UserRole = "admin" | "bod" | "member"

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
  role: UserRole
  email: string
  status: "active" | "inactive" | "banned"
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
  status: "published" | "draft" | "pending" | "rejected"
  image?: string
}

export interface Event {
  id: string
  title: string
  description: string
  longDescription?: string
  date: string
  time: string
  location: string
  image: string
  category: string
  status: "upcoming" | "ongoing" | "past" | "cancelled"
  organizer: string
  speakers?: Speaker[]
  attendees: number
  maxAttendees: number
  createdBy: string
  approvedBy?: string
}

export interface Speaker {
  name: string
  title: string
  company: string
  avatar: string
}

export interface LibraryItem {
  id: string
  title: string
  description: string
  category: string
  type: "document" | "image" | "video" | "audio" | "other"
  fileUrl: string
  thumbnailUrl?: string
  uploadedBy: string
  uploadedAt: string
  size: number
  downloads: number
  views: number
  tags: string[]
  isPublic: boolean
  status: "active" | "archived"
}

export interface SystemLog {
  id: string
  action: string
  userId: string
  userRole: UserRole
  timestamp: string
  details: string
  ip: string
  status: "success" | "warning" | "error"
}

export interface Notification {
  id: string
  title: string
  message: string
  type: "info" | "success" | "warning" | "error"
  createdAt: string
  isRead: boolean
  userId: string
  link?: string
}

export interface Project {
  id: string
  name: string
  description: string
  startDate: string
  endDate?: string
  status: "planning" | "active" | "completed" | "cancelled"
  members: string[]
  leaderId: string
  technologies: string[]
  repositoryUrl?: string
  demoUrl?: string
  thumbnailUrl?: string
}

export interface Course {
  id: string
  title: string
  description: string
  instructor: string
  startDate: string
  endDate: string
  location: string
  maxParticipants: number
  participants: string[]
  status: "upcoming" | "ongoing" | "completed" | "cancelled"
  materials: LibraryItem[]
}

export interface Achievement {
  id: string
  title: string
  description: string
  date: string
  type: "competition" | "project" | "recognition" | "other"
  participants: string[]
  image?: string
  link?: string
}
