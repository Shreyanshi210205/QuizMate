export type EventStatus = "active" | "upcoming" | "completed"

export type Event = {
  id: string
  title: string
  status: EventStatus
  description: string
  questions: number
  duration: string
  completions: number
  created: string
}
