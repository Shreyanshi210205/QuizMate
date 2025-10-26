"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronDown, Filter, MoreHorizontal, UserPlus } from "lucide-react";

export default function StudentsPage() {
  const [activeClass, setActiveClass] = useState("All Students");

  const students = [
    {
      name: "Alex Johnson",
      class: "10A",
      quizzes: 12,
      score: "85%",
      lastActive: "2 hours ago",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      name: "Alex Johnson",
      class: "10A",
      quizzes: 12,
      score: "85%",
      lastActive: "2 hours ago",
      avatar: "https://randomuser.me/api/portraits/women/70.jpg",
    },
    {
      name: "Alex Johnson",
      class: "10A",
      quizzes: 12,
      score: "85%",
      lastActive: "2 hours ago",
      avatar: "https://randomuser.me/api/portraits/women/71.jpg",
    },
    {
      name: "Alex Johnson",
      class: "10A",
      quizzes: 12,
      score: "85%",
      lastActive: "2 hours ago",
      avatar: "https://randomuser.me/api/portraits/women/72.jpg",
    },
  ];

  const classTabs = ["All Students", "10A", "10B"];

  return (
    <div className="flex flex-col gap-6 w-full bg-[linear-gradient(90deg,#241236_0%,#000000_45%,#4a1f12_100%)] p-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-white">Students</h1>
          <p className="text-sm text-gray-400">
            Manage your students and track their progress
          </p>
        </div>
        <Button className="bg-purple-600 hover:bg-purple-700 text-sm flex items-center gap-2">
          <UserPlus size={16} />
          Invite Students
        </Button>
      </div>

      {/* Student Directory Card */}
      <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-lg font-semibold text-white">Student Directory</h2>
            <p className="text-sm text-gray-400">
              View and manage all your students
            </p>
          </div>
        </div>

        {/* Tabs + Search */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="flex bg-neutral-800 rounded-lg p-1">
            {classTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveClass(tab)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                  activeClass === tab
                    ? "bg-purple-600 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Input
              placeholder="Search students..."
              className="bg-neutral-800 border-neutral-700 text-sm text-white w-48"
            />
            <Button
              variant="outline"
              className="bg-neutral-800 border-neutral-700 text-gray-300 hover:bg-neutral-700 text-sm flex items-center gap-2"
            >
              <Filter size={16} />
              Name
              <ChevronDown size={14} />
            </Button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-hidden rounded-lg border border-neutral-800">
          <table className="w-full text-sm text-left text-gray-300">
            <thead className="bg-neutral-800 text-gray-400 text-xs uppercase">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Class
                </th>
                <th scope="col" className="px-6 py-3">
                  Quizzes Taken
                </th>
                <th scope="col" className="px-6 py-3">
                  Average Score
                </th>
                <th scope="col" className="px-6 py-3">
                  Last Active
                </th>
                <th scope="col" className="px-6 py-3 text-right">
                  {/* Empty header for actions */}
                </th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, idx) => (
                <tr
                  key={idx}
                  className="border-t border-neutral-800 hover:bg-neutral-800/50 transition"
                >
                  <td className="px-6 py-4 flex items-center gap-3">
                    <img
                      src={student.avatar}
                      alt={student.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="font-medium text-white">
                      {student.name}
                    </span>
                  </td>
                  <td className="px-6 py-4">{student.class}</td>
                  <td className="px-6 py-4">{student.quizzes}</td>
                  <td className="px-6 py-4">{student.score}</td>
                  <td className="px-6 py-4">{student.lastActive}</td>
                  <td className="px-6 py-4 text-right">
                    <button className="hover:text-white text-gray-400">
                      <MoreHorizontal size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
