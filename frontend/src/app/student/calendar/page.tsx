"use client"
import React, { useMemo, useState } from 'react'
import StudentSidebar from '@/components/StudentSidebar'
import Topbar from '@/components/Topbar'
import EventCard from '@/components/EventCard'

const sampleEvents = [
  { id: 'e1', title: 'Data Structures Mid-Term', date: '2024-03-25', badge: 'quiz' },
  { id: 'e2', title: 'DBMS Quiz 2', date: '2024-03-28', badge: 'quiz' },
]

function useMonthMatrix(date: Date) {
  return useMemo(() => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const first = new Date(year, month, 1)
    const last = new Date(year, month + 1, 0)
    const firstWeekday = first.getDay() // 0..6 (Sun..Sat)
    const days = last.getDate()

    const weeks: (number | null)[][] = []
    let week: (number | null)[] = new Array(7).fill(null)
    let day = 1
    // fill first week
    for (let i = firstWeekday; i < 7; i++) {
      week[i] = day++
    }
    weeks.push(week)

    while (day <= days) {
      week = new Array(7).fill(null)
      for (let i = 0; i < 7 && day <= days; i++) {
        week[i] = day++
      }
      weeks.push(week)
    }

    return { weeks, year, month }
  }, [date])
}

export default function StudentCalendarPage() {
  const [current, setCurrent] = useState(() => new Date())
  const { weeks, year, month } = useMonthMatrix(current)
  const monthName = current.toLocaleString(undefined, { month: 'long' })
  const today = new Date()

  function prevMonth() {
    const d = new Date(current.getFullYear(), current.getMonth() - 1, 1)
    setCurrent(d)
  }
  function nextMonth() {
    const d = new Date(current.getFullYear(), current.getMonth() + 1, 1)
    setCurrent(d)
  }

  return (
    <div className="min-h-screen flex bg-[linear-gradient(90deg,#241236_0%,#000000_45%,#4a1f12_100%)]">
     
      <div className="flex-1">
        <Topbar />
        <main className="p-8 max-w-[1200px] mx-auto">
          <div className="mb-6">
            <h1 className="text-3xl font-bold">Calendar</h1>
            <p className="text-sm text-gray-400 mt-1">View your upcoming quizzes and deadlines</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="card-bg rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold">Quiz Schedule</h3>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={prevMonth} className="px-3 py-1 rounded bg-white/3">◀</button>
                  <div className="text-sm font-medium">{monthName} {year}</div>
                  <button onClick={nextMonth} className="px-3 py-1 rounded bg-white/3">▶</button>
                </div>
              </div>

              <div className="mt-2 bg-transparent border border-white/6 rounded-lg p-4">
                <div className="grid grid-cols-7 gap-2 text-xs text-gray-400 mb-3">
                  <div className="text-center">Su</div>
                  <div className="text-center">Mo</div>
                  <div className="text-center">Tu</div>
                  <div className="text-center">We</div>
                  <div className="text-center">Th</div>
                  <div className="text-center">Fr</div>
                  <div className="text-center">Sa</div>
                </div>

                <div className="grid grid-cols-7 gap-2">
                  {weeks.map((week, wi) => (
                    <React.Fragment key={wi}>
                      {week.map((d, di) => {
                        const isToday = d === today.getDate() && month === today.getMonth() && year === today.getFullYear()
                        return (
                          <div key={di} className="h-10 flex items-center justify-center">
                            {d ? (
                              <div className={`w-8 h-8 rounded ${isToday ? 'bg-[#7C3AED] text-white' : 'text-gray-200' } flex items-center justify-center`}>{d}</div>
                            ) : (
                              <div className="w-8 h-8" />
                            )}
                          </div>
                        )
                      })}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            <div className="card-bg rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Upcoming Events</h3>
              <div className="space-y-4">
                {sampleEvents.map(e => (
                  <div key={e.id} className="bg-[#1a1a1a] rounded-md p-4 border border-white/6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-medium">{e.title}</div>
                        <div className="text-xs text-gray-400 mt-1">{e.date}</div>
                      </div>
                      <div className="text-xs px-2 py-1 rounded-full bg-[#2a1a3a] text-[#d1c0ff]">{e.badge}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
