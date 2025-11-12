"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-10 py-4 bg-black/20 backdrop-blur-md">
      <div className="text-2xl font-bold">
        <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
          QuizMate
        </span>
      </div>

      {/* removed Quiz / Weekly Quiz / Rewards / About as requested */}

      <div className="flex gap-3">
        <Link href='/auth/signin'>
        <Button
          variant="ghost"
          className="bg-white text-black hover:bg-gray-100 border-transparent"
        >
          Sign In
        </Button>
        </Link>
        <Link href='/auth/register'>
        <Button className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white hover:opacity-95">
          Register
        </Button>
        </Link>
      </div>
    </nav>
  );
}
