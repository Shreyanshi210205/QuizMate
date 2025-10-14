"use client";
import Image from "next/image";

export default function Topbar() {
  return (
    <div className="flex items-center justify-between px-6 py-6 border-b border-white/6" style={{ background: 'linear-gradient(180deg, rgba(10,10,10,0.6), rgba(5,5,6,0.2))' }}>
      <div className="flex items-center gap-4">
        <div className="relative w-[520px] hidden md:block">
          <input
            className="w-full bg-white/3 placeholder:text-white/60 py-3 px-4 rounded-lg outline-none text-sm"
            placeholder="Search..."
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
  <button className="px-4 py-2 rounded-lg text-sm font-semibold text-white shadow" style={{ backgroundColor: '#7C3AED' }}>+ Create New Quiz</button>
        <div className="w-10 h-10 rounded-full bg-white/6 flex items-center justify-center text-sm">A</div>
      </div>
    </div>
  );
}
