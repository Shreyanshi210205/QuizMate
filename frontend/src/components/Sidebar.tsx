"use client";
import React from "react";
import Link from "next/link";

function IconGrid({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="8" height="8" stroke="currentColor" strokeWidth="1.5" rx="1" />
      <rect x="13" y="3" width="8" height="8" stroke="currentColor" strokeWidth="1.5" rx="1" />
      <rect x="3" y="13" width="8" height="8" stroke="currentColor" strokeWidth="1.5" rx="1" />
      <rect x="13" y="13" width="8" height="8" stroke="currentColor" strokeWidth="1.5" rx="1" />
    </svg>
  );
}

function IconBook({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 1 4 16.5v-11z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconCalendar({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16 3v4M8 3v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconUsers({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function IconSettings({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 15.5A3.5 3.5 0 1 0 12 8.5a3.5 3.5 0 0 0 0 7z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09c.7 0 1.26-.4 1.51-1a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06c.5.5 1.14.77 1.82.33.46-.28 1-.44 1.51-.44H11a2 2 0 0 1 4 0h.09c.51 0 1.05.16 1.51.44.68.44 1.32.17 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06c-.5.5-.77 1.14-.33 1.82.28.46.44 1 .44 1.51V9a2 2 0 0 1 0 4h-.09c-.7 0-1.26.4-1.51 1z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen sticky top-0 px-6 py-6 sidebar-bg">
      <div className="mb-6">
  <h1 className="text-2xl font-extrabold text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(90deg,var(--accent-from),var(--accent-to))' }}>Quizzy</h1>
      </div>

      <div className="mb-4">
        <label className="relative block">
          <span className="sr-only">Search</span>
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </span>
          <input
            className="w-full bg-transparent border border-white/6 rounded-md py-2 pl-10 pr-3 text-sm placeholder:text-gray-500 text-gray-200"
            placeholder="Search"
            type="search"
          />
        </label>
      </div>

      <nav className="space-y-2">
        <NavItem href="/teacher/dashboard" label="Dashboard" icon={<IconGrid />} active />
        <NavItem href="/teacher/quizzes" label="Quizzes" icon={<IconBook />} />
        <NavItem href="/teacher/events" label="Events" icon={<IconCalendar />} />
        <NavItem href="/teacher/students" label="Students" icon={<IconUsers />} />
      </nav>

      <div className="mt-auto pt-6">
        <div className="text-sm text-gray-400 mb-2">Manage</div>
        <NavItem href="/settings" label="Settings" icon={<IconSettings />} />
      </div>
    </aside>
  );
}

function NavItem({ href, label, icon, active = false }: { href: string; label: string; icon: React.ReactNode; active?: boolean; }) {
  const base = 'flex items-center gap-3 px-3 py-2 rounded-lg text-sm';
  const activeCls = 'text-white shadow-sm';
  const inactiveCls = 'text-gray-300 hover:bg-white/5 hover:text-white';

  const activeStyle = active ? { backgroundColor: '#7C3AED' } : undefined;

  return (
    <Link href={href} className={`${base} ${active ? activeCls : inactiveCls}`} style={activeStyle}>
      <span className={`${active ? 'text-white' : 'text-gray-300'}`}>{icon}</span>
      <span>{label}</span>
    </Link>
  );
}
