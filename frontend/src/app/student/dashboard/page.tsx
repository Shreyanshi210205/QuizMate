"use client"
import StudentSidebar from '@/components/StudentSidebar'
import Topbar from '@/components/Topbar'
import StatCard from '@/components/StatCard'
import EventCard from '@/components/EventCard'

const stats = [
  { title: 'Upcoming Tests', value: '3', delta: '+1', color: 'linear-gradient(90deg,var(--accent-from),var(--accent-to))' },
  { title: 'Completed Tests', value: '12', delta: '+2', color: 'linear-gradient(90deg,#16a34a,#10b981)' },
  { title: 'Avg. Score', value: '84%', delta: '+0.5%', color: 'linear-gradient(90deg,#2563eb,#60a5fa)' },
  { title: 'Total Points', value: '1,240', delta: '+120', color: 'linear-gradient(90deg,#f97316,#fb923c)' },
]

const upcoming = [
  { id: 'u1', title: 'Biology Quiz', when: 'Oct 20, 10:00 AM' },
  { id: 'u2', title: 'Math Weekly', when: 'Oct 22, 9:00 AM' },
]

const completed = [
  { id: 'c1', title: 'History Test', score: 88, date: 'Oct 10' },
  { id: 'c2', title: 'Chemistry Quiz', score: 79, date: 'Oct 5' },
]

export default function StudentDashboard() {
  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:block">
        <StudentSidebar />
      </div>

      <div className="flex-1">
        <Topbar />
        <main className="p-8 max-w-[1200px] mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Dashboard <span className="text-gradient-hero">Quizzy</span></h1>
            <p className="text-sm text-gray-400 mt-1">Welcome back — here are your tests and progress</p>
          </div>

          <div className="flex gap-4 mb-8 flex-wrap">
            {stats.map((s, idx) => (
              <StatCard key={idx} title={s.title} value={s.value} delta={s.delta} iconColor={s.color} />
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="lg:col-span-2 card-bg rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Upcoming Tests</h3>
              <div className="space-y-4">
                {upcoming.map(e => (
                  <EventCard key={e.id} title={e.title} when={e.when} participants={0} />
                ))}
              </div>
            </div>

            <div className="card-bg rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Completed Tests</h3>
              <ul className="space-y-3">
                {completed.map(c => (
                  <li key={c.id} className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium">{c.title}</div>
                      <div className="text-xs text-gray-400">{c.date}</div>
                    </div>
                    <div className="text-sm font-semibold text-green-400">{c.score}%</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
