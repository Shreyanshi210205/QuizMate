"use client";
export default function StatCard({ title, value, delta, icon }: { title: string; value: string; delta?: string; icon?: React.ReactNode; }) {
  return (
    <div className="card-bg rounded-xl p-6 min-w-[220px]">
      <div className="flex items-start justify-between">
        <div>
          <div className="text-sm text-gray-300">{title}</div>
          <div className="text-3xl font-semibold mt-3">{value}</div>
        </div>
        <div className="text-sm">
          {delta ? <span className={`text-sm ${delta.startsWith('-') ? 'text-rose-400' : 'text-green-400'}`}>{delta}</span> : null}
        </div>
      </div>
    </div>
  );
}
