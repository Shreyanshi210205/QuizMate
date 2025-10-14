"use client";
export default function EventCard({ title, when, participants, badge }: { title: string; when: string; participants: number; badge?: string; }) {
  return (
    <div className="card-bg rounded-lg p-4 flex items-center justify-between">
      <div>
        <div className="text-sm text-gray-300">{title}</div>
        <div className="text-xs text-gray-400 mt-2 flex gap-4 items-center">
          <span className="flex items-center gap-2 text-gray-200">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.2" />
              <path d="M12 7v6l4 2" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {when}
          </span>
          <span className="flex items-center gap-2 text-gray-200">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="12" cy="7" r="4" stroke="white" strokeWidth="1.2" />
            </svg>
            {participants} participants
          </span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        {badge === "Live" ? (
          <span className="text-white px-3 py-1 rounded-md text-sm" style={{ backgroundColor: '#7C3AED' }}>View Live</span>
        ) : (
          <span className="bg-white/6 px-3 py-1 rounded-md text-sm">Manage</span>
        )}
      </div>
    </div>
  );
}
