"use client";

import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-10 py-4 bg-black/20 backdrop-blur-md">
      <div className="text-2xl font-bold">
        <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
          Quizzy
        </span>
      </div>

      <div className="hidden md:flex gap-8 text-sm text-gray-300">
        <a href="#">Quiz</a>
        <a href="#">Weekly Quiz</a>
        <a href="#">Rewards</a>
        <a href="#">About</a>
      </div>

      <div className="flex gap-3">
        <Button
          variant="ghost"
          className="bg-white text-black hover:bg-gray-100 border-transparent"
        >
          Sign In
        </Button>
        <Button className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white hover:opacity-95">
          Register
        </Button>
      </div>
    </nav>
  );
}
