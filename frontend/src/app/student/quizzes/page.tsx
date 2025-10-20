"use client"
import StudentSidebar from '@/components/StudentSidebar'
import Topbar from '@/components/Topbar'
import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'

const quizzes = [
  { id: 'q1', title: 'Data Structures Mid-Term', subject: 'Computer Science', date: '2024-03-25', duration: '90 min', status: 'upcoming' },
  { id: 'q2', title: 'DBMS Quiz 2', subject: 'Database Management', date: '2024-03-28', duration: '60 min', status: 'upcoming' },
]

export default function StudentQuizzesPage() {
  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:block">
        <StudentSidebar />
      </div>

      <div className="flex-1">
        <Topbar />
        <main className="p-8 max-w-[1200px] mx-auto">
          <div className="mb-6">
            <h1 className="text-3xl font-bold">All Quizzes</h1>
            <p className="text-sm text-gray-400 mt-1">View and manage your quizzes</p>
          </div>

          <div className="space-y-6">
            {quizzes.map(q => (
              <div key={q.id} className="card-bg rounded-lg p-6 relative">
                <div className="absolute right-6 top-6">
                  <span className="text-xs px-3 py-1 rounded-full bg-[#2a1a3a] text-[#d1c0ff]">{q.status}</span>
                </div>

                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-lg font-semibold">{q.title}</div>
                    <div className="text-sm text-gray-400">{q.subject}</div>

                    <div className="flex gap-4 mt-4 text-sm text-gray-300">
                      <div className="flex items-center gap-2"><span className="text-gray-400">📅</span>{q.date}</div>
                      <div className="flex items-center gap-2"><span className="text-gray-400">⏱</span>{q.duration}</div>
                    </div>

                    <div className="mt-4">
                      <button className={buttonVariants({ variant: 'default', className: 'px-4 py-2 bg-[#7C3AED] text-white' })}>View Details</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
