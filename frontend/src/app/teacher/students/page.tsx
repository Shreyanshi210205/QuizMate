"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Filter, MoreHorizontal, UserPlus } from "lucide-react";
import Image from "next/image";

export default function StudentsPage() {
  const [selectedClass, setSelectedClass] = useState("All Students");

  const students = [
    {
      id: 1,
      name: "Alex Johnson",
      class: "10A",
      quizzes: 12,
      avgScore: "85%",
      lastActive: "2 hours ago",
      avatar: "/assets/frame80.png",
    },
    {
      id: 2,
      name: "Emma Wilson",
      class: "10A",
      quizzes: 10,
      avgScore: "88%",
      lastActive: "1 hour ago",
      avatar: "/assets/frame80.png",
    },
    {
      id: 3,
      name: "Michael Cohen",
      class: "10B",
      quizzes: 8,
      avgScore: "91%",
      lastActive: "3 hours ago",
      avatar: "/assets/frame80.png",
    },
    {
      id: 4,
      name: "Sophia Garcia",
      class: "10A",
      quizzes: 9,
      avgScore: "92%",
      lastActive: "4 hours ago",
      avatar: "/assets/frame80.png",
    },
  ];

  return (
    <div className="flex min-h-screen bg-black text-white">
     

      <main className="flex-1 px-10 py-8">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold">Students</h1>
            <p className="text-gray-400 text-sm">
              Manage your students and track their progress
            </p>
          </div>

          <Button className="bg-purple-600 hover:bg-purple-700 text-white flex items-center gap-2 text-sm">
            <UserPlus className="w-4 h-4" />
            Invite Students
          </Button>
        </div>

        {/* Directory Section */}
        <section className="bg-gradient-to-b from-[#111111] to-[#0a0a0a] rounded-2xl p-6">
          <div className="flex justify-between items-center mb-5">
            <div>
              <h2 className="text-lg font-semibold">Student Directory</h2>
              <p className="text-gray-400 text-sm">
                View and manage all your students
              </p>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex gap-2 bg-black/30 border border-white/10 rounded-lg p-1">
                {["All Students", "10A", "10B"].map((cls) => (
                  <button
                    key={cls}
                    onClick={() => setSelectedClass(cls)}
                    className={`px-3 py-1 text-sm rounded-md transition ${
                      selectedClass === cls
                        ? "bg-purple-600 text-white"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {cls}
                  </button>
                ))}
              </div>

              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Search students..."
                  className="bg-black/30 border border-white/10 rounded-md px-3 py-2 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:border-purple-500"
                />
                <Button className="bg-black/30 border border-white/10 hover:bg-white/10 text-sm flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  Name
                  <ChevronDown className="w-3 h-3" />
                </Button>
              </div>
            </div>
          </div>

          {/* Students Table */}
          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-gray-400 text-left border-b border-white/10">
                  <th className="py-3 px-4 font-medium">Name</th>
                  <th className="py-3 px-4 font-medium">Class</th>
                  <th className="py-3 px-4 font-medium">Quizzes Taken</th>
                  <th className="py-3 px-4 font-medium">Average Score</th>
                  <th className="py-3 px-4 font-medium">Last Active</th>
                  <th className="py-3 px-4"></th>
                </tr>
              </thead>
              <tbody>
                {students
                  .filter(
                    (s) =>
                      selectedClass === "All Students" ||
                      s.class === selectedClass
                  )
                  .map((s) => (
                    <tr
                      key={s.id}
                      className="border-t border-white/5 text-gray-300 hover:bg-white/5 transition"
                    >
                      <td className="py-3 px-4 flex items-center gap-3">
                        <Image
                          src={s.avatar}
                          alt={s.name}
                          className="w-8 h-8 rounded-full object-cover"
                          width={32}
                          height={32}
                        />
                        <span>{s.name}</span>
                      </td>
                      <td className="py-3 px-4">{s.class}</td>
                      <td className="py-3 px-4">{s.quizzes}</td>
                      <td className="py-3 px-4">{s.avgScore}</td>
                      <td className="py-3 px-4">{s.lastActive}</td>
                      <td className="py-3 px-4 text-right">
                        <MoreHorizontal className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}
