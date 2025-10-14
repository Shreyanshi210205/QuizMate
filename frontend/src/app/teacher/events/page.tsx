"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { EventCard } from "./components/EventCard"
import { eventsData } from "./data"
import { Filter, Plus } from "lucide-react"
import Sidebar from "@/components/Sidebar"

export default function EventsPage() {
  const [search, setSearch] = useState("")

  type EventItem = {
    id: number | string
    title: string
    description?: string
    status?: string
    questions?: number
    duration?: string
    completions?: number
    created?: string
  }

  const filteredEvents: EventItem[] = eventsData.filter((event: EventItem) =>
    event.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:block">
      </div>

      <div className="flex-1 flex flex-col gap-6 p-8 text-white">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold">Quiz Events</h2>
          <p className="text-sm text-muted-foreground">
            Schedule and manage quiz sessions for your students
          </p>
        </div>

        <Button className="bg-purple-600 hover:bg-purple-700">
          <Plus className="mr-2 h-4 w-4" /> Schedule Event
        </Button>
      </div>

      {/* Event Calendar Section */}
      <div className="rounded-2xl bg-[#111015] p-6 shadow-lg border border-[#222]">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-medium">Event Calendar</h3>
            <p className="text-sm text-muted-foreground">
              View and manage your scheduled quiz events
            </p>
          </div>

          <div className="flex gap-2">
            <Input
              placeholder="Search events..."
              className="bg-[#1a191d] border-none text-sm"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button variant="outline" className="border-[#2a2a2a] text-sm">
              <Filter className="h-4 w-4 mr-1" /> All Quizzes
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="bg-[#1a191d] p-1 rounded-lg w-fit">
            <TabsTrigger value="all">All Events</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6 flex flex-col gap-4">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
    </div>
  )
}
