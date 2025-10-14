"use client";
import React from "react";
import { useParams } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";

export default function QuizDetailsPage() {
  const { id } = useParams();

  // 🧠 Mock dynamic quiz data
  const quiz = {
    id,
    title: "Introduction to Biology",
    description: "Basic concepts of biology for beginners",
    stats: {
      completions: 28,
      avgTime: "12:45",
      avgScore: "78.5%",
      topScore: "95%",
    },
    recent: [
      { student: "Alex Johnson", score: "85%", time: "15:24", ago: "2 hours ago" },
      { student: "Emma Wilson", score: "92%", time: "18:24", ago: "2 hours ago" },
      { student: "Michael Cohen", score: "92%", time: "18:24", ago: "2 hours ago" },
      { student: "Sophia Garcia", score: "92%", time: "18:24", ago: "2 hours ago" },
    ],
    performance: [
      { question: "What is the basic unit of life?", percent: 92 },
      { question: "Which organelle is responsible for...?", percent: 92 },
      { question: "What is the process of cell division...?", percent: 92 },
      { question: "Which of the following is NOT a...?", percent: 92 },
      { question: "What is the main function of mitochondria?", percent: 92 },
    ],
  };

  return (
    <div className="flex min-h-screen  bg-[linear-gradient(90deg,#241236_0%,#000000_45%,#4a1f12_100%)] text-white">

      <main className="flex-1 px-10 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold">{quiz.title}</h1>
            <p className="text-gray-400 text-sm">{quiz.description}</p>
          </div>

          <div className="flex gap-2">
            <Button className="bg-white/10 hover:bg-white/20 text-sm">Edit</Button>
            <Button className="bg-white/10 hover:bg-white/20 text-sm">Share</Button>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white text-sm">
              Preview
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <StatCard label="Total Completions" value={quiz.stats.completions} icon="📘" />
          <StatCard label="Completion Time" value={quiz.stats.avgTime} icon="🕒" />
          <StatCard label="Average Score" value={quiz.stats.avgScore} icon="👥" />
          <StatCard label="Top Score" value={quiz.stats.topScore} icon="📊" />
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {/* Recent Completions */}
          <div className="col-span-2 bg-[#111111] rounded-xl p-5">
            <div className="flex justify-between items-center mb-3">
              <h2 className="font-semibold text-lg">Recent Completions</h2>
              <Button className="bg-white/10 hover:bg-white/20 text-sm">
                View All Results
              </Button>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Students who recently completed this quiz
            </p>

            <table className="w-full text-sm">
              <thead>
                <tr className="text-gray-400 text-left border-b border-white/10">
                  <th className="pb-2">Student</th>
                  <th>Score</th>
                  <th>Time Spent</th>
                  <th>Completed</th>
                </tr>
              </thead>
              <tbody>
                {quiz.recent.map((r, i) => (
                  <tr key={i} className="border-b border-white/5 text-gray-300">
                    <td className="py-2">{r.student}</td>
                    <td>{r.score}</td>
                    <td>{r.time}</td>
                    <td>{r.ago}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Question Performance */}
          <div className="bg-[#111111] rounded-xl p-5">
            <h2 className="font-semibold text-lg mb-2">Question Performance</h2>
            <p className="text-gray-400 text-sm mb-4">
              How students performed on each question
            </p>

            <ul className="space-y-3 text-sm">
              {quiz.performance.map((q, i) => (
                <li key={i}>
                  <div className="flex justify-between">
                    <span>{i + 1}. {q.question}</span>
                    <span className="text-gray-400">{q.percent}%</span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full mt-1">
                    <div
                      className="h-2 bg-purple-600 rounded-full"
                      style={{ width: `${q.percent}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Share Box */}
        <div className="bg-[#111111] rounded-xl p-5 flex justify-between items-center">
          <div>
            <h3 className="font-semibold">Share This Quiz</h3>
            <p className="text-gray-400 text-sm">
              Share this quiz with students or colleagues
            </p>
          </div>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white text-sm">
            Share Quiz
          </Button>
        </div>
      </main>
    </div>
  );
}

// small stat card
function StatCard({
  label,
  value,
  icon,
}: {
  label: string;
  value: string | number;
  icon: string;
}) {
  return (
    <div className="bg-[#111111] rounded-xl p-4">
      <div className="text-gray-400 text-sm mb-1">{label}</div>
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold">{value}</div>
        <div className="text-gray-400 text-xl">{icon}</div>
      </div>
    </div>
  );
}
