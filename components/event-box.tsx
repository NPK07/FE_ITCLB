import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface Event {
  id: string
  title: string
  date: string
  time: string
  location: string
  image: string
  category: string
  status: "upcoming" | "ongoing" | "past"
}

interface EventBoxProps {
  events: Event[]
}

export default function EventBox({ events }: EventBoxProps) {
  return (
    <Card className="border shadow-sm">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-bold">Sự kiện sắp diễn ra</CardTitle>
          <Link href="/events" className="text-sm text-blue-600 hover:underline dark:text-blue-400">
            Xem tất cả
          </Link>
        </div>
        <CardDescription>Các sự kiện của Văn Lang Tech Club</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {events.map((event) => (
          <Link href={`/events/${event.id}`} key={event.id}>
            <div className="flex space-x-4 rounded-lg p-2 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800">
              <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md">
                <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                <Badge
                  className={cn(
                    "absolute bottom-1 right-1 text-xs",
                    event.status === "upcoming" && "bg-green-500 hover:bg-green-600",
                    event.status === "ongoing" && "bg-blue-500 hover:bg-blue-600",
                    event.status === "past" && "bg-gray-500 hover:bg-gray-600",
                  )}
                >
                  {event.status === "upcoming" && "Sắp diễn ra"}
                  {event.status === "ongoing" && "Đang diễn ra"}
                  {event.status === "past" && "Đã kết thúc"}
                </Badge>
              </div>
              <div className="flex-1">
                <h3 className="font-medium line-clamp-2">{event.title}</h3>
                <div className="mt-2 space-y-1 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center">
                    <Calendar className="mr-1 h-3.5 w-3.5" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-1 h-3.5 w-3.5" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-1 h-3.5 w-3.5" />
                    <span className="line-clamp-1">{event.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
        <div className="pt-2">
          <Link href="/events/register">
            <Button variant="outline" className="w-full">
              Đăng ký tham gia sự kiện
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

// Helper function for conditional class names
function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}
