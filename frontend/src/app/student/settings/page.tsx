"use client"
import React, { useState } from 'react'
import StudentSidebar from '@/components/StudentSidebar'
import Topbar from '@/components/Topbar'
import { buttonVariants } from '@/components/ui/button'

export default function StudentSettingsPage() {
  const [fullName, setFullName] = useState('John Doe')
  const [email, setEmail] = useState('john@example.com')
  const [rollNumber, setRollNumber] = useState('CS2021001')

  const [emailNotifications, setEmailNotifications] = useState(false)
  const [pushNotifications, setPushNotifications] = useState(false)
  const [deadlineReminders, setDeadlineReminders] = useState(false)

  function saveProfile(e: React.FormEvent) {
    e.preventDefault()
    // placeholder: no backend hooked up
    console.log('save', { fullName, email, rollNumber })
    alert('Profile saved (demo)')
  }

  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:block">
        <StudentSidebar />
      </div>

      <div className="flex-1">
        <Topbar />
        <main className="p-8 max-w-[920px] mx-auto space-y-6">
          <div>
            <h1 className="text-3xl font-bold">Settings</h1>
            <p className="text-sm text-gray-400 mt-1">Manage your account and preferences</p>
          </div>

          <form onSubmit={saveProfile} className="card-bg rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-1">Profile Information</h2>
            <p className="text-sm text-gray-400 mb-4">Update your personal details</p>

            <div className="space-y-4">
              <label className="block">
                <div className="text-sm font-medium mb-2">Full Name</div>
                <input value={fullName} onChange={e => setFullName(e.target.value)} className="w-full bg-[#2a2a2a] text-gray-100 rounded-md py-3 px-4 placeholder-gray-400 border border-white/6" placeholder="John Doe" />
              </label>

              <label className="block">
                <div className="text-sm font-medium mb-2">Email</div>
                <input value={email} onChange={e => setEmail(e.target.value)} className="w-full bg-[#2a2a2a] text-gray-100 rounded-md py-3 px-4 placeholder-gray-400 border border-white/6" placeholder="john@example.com" />
              </label>

              <label className="block">
                <div className="text-sm font-medium mb-2">Roll Number</div>
                <input value={rollNumber} onChange={e => setRollNumber(e.target.value)} className="w-full bg-[#2a2a2a] text-gray-100 rounded-md py-3 px-4 placeholder-gray-400 border border-white/6" placeholder="CS2021001" />
              </label>

              <div>
                <button className={buttonVariants({ variant: 'default', className: 'px-4 py-2 bg-[#7C3AED] text-white' })} type="submit">Save Changes</button>
              </div>
            </div>
          </form>

          <section className="card-bg rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-1">Notifications</h2>
            <p className="text-sm text-gray-400 mb-4">Manage your notification preferences</p>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium">Email Notifications</div>
                  <div className="text-xs text-gray-400">Receive quiz updates via email</div>
                </div>
                <label className="inline-flex relative items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" checked={emailNotifications} onChange={e => setEmailNotifications(e.target.checked)} />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:bg-[#7C3AED] transition-colors"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium">Push Notifications</div>
                  <div className="text-xs text-gray-400">Get notified about new quizzes</div>
                </div>
                <label className="inline-flex relative items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" checked={pushNotifications} onChange={e => setPushNotifications(e.target.checked)} />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:bg-[#7C3AED] transition-colors"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium">Deadline Reminders</div>
                  <div className="text-xs text-gray-400">Remind me before quiz deadlines</div>
                </div>
                <label className="inline-flex relative items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" checked={deadlineReminders} onChange={e => setDeadlineReminders(e.target.checked)} />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:bg-[#7C3AED] transition-colors"></div>
                </label>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
