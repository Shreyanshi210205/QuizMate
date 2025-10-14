"use client"

import { Button } from "@/components/ui/button"
import { MoreVertical, Clock, Users, FileQuestion } from "lucide-react"
import { cn } from "@/lib/utils"

export function EventCard({ event }) {
  const statusColor = {
    active: "bg-green-600/20 text-green-400",
    upcoming: "bg-blue-600/20 text-blue-400",
    completed: "bg-gray-600/20 text-gray-400",
  }

  return (
    <div className="flex justify-between items-center bg-[#1a191d] rounded-xl p-5 border border-[#2a2a2a]">
      <div className="flex items-start gap-4">
        <div className="bg-purple-600/20 p-3 rounded-full">
          <FileQuestion className="text-purple-400" />
        </div>
        <div>
          <h4 className="font-semibold text-base">
            {event.title}{" "}
            <span
              className={cn(
                "text-xs px-2 py-0.5 rounded-full ml-2 capitalize",
                statusColor[event.status]
              )}
            >
              {event.status}
            </span>
          </h4>
          <p className="text-sm text-muted-foreground">
            {event.description}
          </p>

          <div className="flex gap-4 mt-2 text-xs text-gray-400">
            <span className="flex items-center gap-1">
              <FileQuestion className="w-3 h-3" /> {event.questions} questions
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" /> {event.duration}
            </span>
            <span className="flex items-center gap-1">
              <Users className="w-3 h-3" /> {event.completions} completions
            </span>
            <span>{event.created}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        {event.status === "active" ? (
          <Button className="bg-purple-600 hover:bg-purple-700">View Live</Button>
        ) : (
          <Button variant="outline" className="border-[#2a2a2a]">
            Manage
          </Button>
        )}
        <Button variant="ghost" size="icon" className="text-gray-400">
          <MoreVertical className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}
