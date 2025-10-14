"use client";
export default function EventCard({ title, when, participants, badge }: { title: string; when: string; participants: number; badge?: string; }) {
  return (
    <div className="card-bg rounded-lg p-4 flex items-center justify-between">
      <div>
        <div className="text-sm text-gray-300">{title}</div>
        <div className="text-xs text-gray-400 mt-2 flex gap-4">
          <span>🕒 {when}</span>
          <span>👥 {participants} participants</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        {badge === "Live" ? (
          <span className="bg-purple-600 text-white px-3 py-1 rounded-md text-sm">View Live</span>
        ) : (
          <span className="bg-white/6 px-3 py-1 rounded-md text-sm">Manage</span>
        )}
      </div>
    </div>
  );
}
