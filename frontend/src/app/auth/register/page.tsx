"use client";
import Link from "next/link";
import { useState } from "react";

export default function SignupPage() {
  const [role, setRole] = useState("student");

  return (
    <div className="flex min-h-screen">
      {/* Left side – grid background */}
      <div className="relative hidden lg:flex w-1/2 items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0">
          {/* Inline SVG grid */}
          <svg
            className="absolute inset-0 floor-grid"
            viewBox="0 0 800 800"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="rgba(180, 100, 255, 0.15)"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <h1 className="relative z-10 text-6xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Quizzy
        </h1>
      </div>

      {/* Right side – signup form */}
      <div className="flex w-full lg:w-1/2 items-center justify-center bg-white">
        <div className="w-full max-w-md p-8">
          <h2 className="text-2xl font-bold mb-2">Create Account</h2>
          <p className="text-gray-500 mb-6">
            Choose your account type and start your journey with us
          </p>

          <div className="flex gap-3 mb-6">
            <button
              onClick={() => setRole("student")}
              className={`flex-1 border rounded-lg p-3 ${
                role === "student" ? "bg-purple-100 border-purple-400" : "border-gray-200"
              }`}
            >
              <span className="font-medium">Student</span>
              <p className="text-sm text-gray-600">Take quizzes and track your progress</p>
            </button>

            <button
              onClick={() => setRole("teacher")}
              className={`flex-1 border rounded-lg p-3 ${
                role === "teacher" ? "bg-purple-100 border-purple-400" : "border-gray-200"
              }`}
            >
              <span className="font-medium">Teacher</span>
              <p className="text-sm text-gray-600">Create quizzes and manage students</p>
            </button>
          </div>

          <div className="flex gap-4 mb-4">
            <button className="flex-1 border rounded-lg py-2">Google</button>
            <button className="flex-1 border rounded-lg py-2">Facebook</button>
          </div>

          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300" />
            <span className="px-3 text-gray-500 text-sm">OR</span>
            <div className="flex-grow border-t border-gray-300" />
          </div>

          <form className="space-y-4">
            <div className="flex gap-2">
              <input
                placeholder="Full Name"
                className="w-1/2 border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
              />
              <input
                placeholder="Username"
                className="w-1/2 border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
              />
            </div>
            <input
              placeholder="Email"
              type="email"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
            />
            <input
              placeholder="Password"
              type="password"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
            />
            <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700">
              Sign Up
            </button>
          </form>

          <p className="text-center text-gray-600 text-sm mt-4">
            Already have an account?{" "}
            <Link href="/signin" className="text-purple-600 hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
