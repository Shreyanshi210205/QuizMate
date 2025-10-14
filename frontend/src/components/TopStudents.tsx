"use client";
import Image from "next/image";

export default function TopStudents({ students }: { students: Array<{ id:string,name:string,subject:string,score:number,avatar:string }> }) {
  return (
    <div className="card-bg rounded-lg p-6">
      <h3 className="text-lg font-semibold mb-4">Top Students</h3>
      <ul className="space-y-4">
        {students.map((s, i) => (
          <li key={s.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <Image src={s.avatar} alt={s.name} width={40} height={40} />
              </div>
              <div>
                <div className="text-sm font-medium">{s.name}</div>
                <div className="text-xs text-gray-400">{s.subject}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-orange-400 font-semibold">{s.score}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
