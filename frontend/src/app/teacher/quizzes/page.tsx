"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Link from "next/link";

interface Quiz {
  id: number;
  title: string;
  description: string;
  status: "Published" | "Draft";
  questions: number;
  duration: string;
  completions: number;
}

const quizzesData: Quiz[] = [
  {
    id: 1,
    title: "Introduction to Biology",
    description: "Basic concepts of biology for beginners",
    status: "Published",
    questions: 15,
    duration: "20 min",
    completions: 32,
  },
  {
    id: 2,
    title: "Advanced Mathematics",
    description: "Complex problems and advanced topics",
    status: "Published",
    questions: 15,
    duration: "20 min",
    completions: 32,
  },
  {
    id: 3,
    title: "Chemistry Fundamentals",
    description: "Basic concepts of chemistry for beginners",
    status: "Draft",
    questions: 15,
    duration: "20 min",
    completions: 32,
  },
];

export default function QuizzesPage() {
  const [filter, setFilter] = useState<"All" | "Published" | "Drafts">("All");

  const filteredQuizzes =
    filter === "All"
      ? quizzesData
      : quizzesData.filter((quiz) =>
          filter === "Published"
            ? quiz.status === "Published"
            : quiz.status === "Draft"
        );

  return (
    <div className="flex min-h-screen bg-[linear-gradient(90deg,#241236_0%,#000000_45%,#4a1f12_100%)] text-white">

      <main className="flex-1 px-10 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold mb-1">Quizzes</h1>
            <p className="text-sm text-gray-400">
              Create, manage and analyze your quizzes
            </p>
          </div>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-md px-4 py-2">
            + Create New Quiz
          </Button>
        </div>

        <div className="bg-[#111111] rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-4">Quiz Library</h2>

          <div className="flex justify-between items-center mb-4">
            <div className="flex space-x-2">
              {["All", "Published", "Drafts"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setFilter(tab as any)}
                  className={`px-4 py-1.5 rounded-md text-sm ${
                    filter === tab
                      ? "bg-white/10 text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Search quizzes..."
                className="bg-transparent border border-white/10 rounded-md px-3 py-1.5 text-sm text-gray-300 placeholder-gray-500"
              />
              <select className="bg-transparent border border-white/10 rounded-md px-3 py-1.5 text-sm text-gray-300">
                <option value="">All Categories</option>
              </select>
            </div>
          </div>

          <div className="space-y-3">
            {filteredQuizzes.map((quiz) => (
              <div
                key={quiz.id}
                className="flex justify-between items-center bg-white/5 rounded-lg p-4 hover:bg-white/10 transition"
              >
                <div>
                  <h3 className="font-semibold text-base flex items-center gap-2">
                    {quiz.title}
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${
                        quiz.status === "Published"
                          ? "bg-green-600/30 text-green-400"
                          : "bg-yellow-600/30 text-yellow-400"
                      }`}
                    >
                      {quiz.status}
                    </span>
                  </h3>
                  <p className="text-sm text-gray-400">{quiz.description}</p>
                  <div className="flex gap-4 text-xs text-gray-500 mt-2">
                    <span>{quiz.questions} questions</span>
                    <span>• {quiz.duration}</span>
                    <span>• {quiz.completions} completions</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Link href={`/teacher/quizzes/${quiz.id}`}>
                    <Button className="bg-white/10 hover:bg-white/20 text-sm">
                      View
                    </Button>
                  </Link>
                  <button className="p-2 text-gray-400 hover:text-white">
                    ⋮
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
