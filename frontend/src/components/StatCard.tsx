"use client";
import React from "react";

export default function StatCard({ title, value, delta, icon, iconColor }: { title: string; value: string; delta?: string; icon?: React.ReactNode; iconColor?: string; }) {
  return (
    <div className="card-bg rounded-xl p-5 min-w-[220px]">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm text-gray-300">{title}</div>
          <div className="text-3xl font-semibold mt-2">{value}</div>
        </div>

        <div className="flex flex-col items-end">
          {delta ? <span className={`${delta.startsWith('-') ? 'text-rose-400' : 'text-green-400'} text-sm`}>{delta}</span> : <span className="h-4" />}
          <div className="mt-3 w-10 h-10 rounded-full flex items-center justify-center text-white" style={{ background: iconColor ?? 'transparent' }}>
            {icon ?? <span className="text-xl">▣</span>}
          </div>
        </div>
      </div>
    </div>
  );
}
