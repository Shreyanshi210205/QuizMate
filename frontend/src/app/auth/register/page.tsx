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
          <h2 className="text-2xl font-bold mb-2 text-black">Create Account</h2>
          <p className="text-gray-500 mb-6">
            Choose your account type and start your journey with us
          </p>

          <div className="flex gap-3 mb-6">
            <button
              onClick={() => setRole("student")}
              className={`flex-1 border rounded-lg p-3 flex items-start gap-3 ${
                role === "student" ? "bg-purple-100 border-purple-400" : "border-gray-200"
              }`}
            >
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/0">
                {/* student icon - black */}
                <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 12a4 4 0 100-8 4 4 0 000 8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 20a8 8 0 0116 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <span className="font-medium">Student</span>
                <p className="text-sm text-gray-600">Take quizzes and track your progress</p>
              </div>
            </button>

            <button
              onClick={() => setRole("teacher")}
              className={`flex-1 border rounded-lg p-3 flex items-start gap-3 ${
                role === "teacher" ? "bg-purple-100 border-purple-400" : "border-gray-200"
              }`}
            >
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/0">
                {/* teacher icon - black */}
                <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 7h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 11a4 4 0 108 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 3v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <span className="font-medium">Teacher</span>
                <p className="text-sm text-gray-600">Create quizzes and manage students</p>
              </div>
            </button>
          </div>

          <div className="flex gap-4 mb-4">
            <button className="flex-1 border rounded-lg py-2 flex items-center justify-center gap-2">
              {/* Google icon */}
              <svg className="w-5 h-5" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path fill="#EA4335" d="M24 11.5c3.3 0 6.1 1.2 8.3 3.1l6.2-6.1C34.9 5 29.9 3 24 3 14.9 3 7.2 8.6 4 16.6l7.5 5.8C12.9 17 17.9 11.5 24 11.5z"/>
                <path fill="#34A853" d="M46 24c0-1.6-.1-3.1-.4-4.6H24v8.7h12.6c-.5 2.8-2.1 5.1-4.5 6.7l7 5.4C43.9 36.6 46 30.6 46 24z"/>
                <path fill="#4A90E2" d="M11.5 28.4A14.6 14.6 0 0110 24c0-1.3.2-2.6.5-3.8l-7.5-5.8C2.4 16.8 1 20.2 1 24c0 3.8 1.4 7.2 3.9 9.8l6.6-5.4z"/>
              </svg>
              <span>Google</span>
            </button>
            <button className="flex-1 border rounded-lg py-2 flex items-center justify-center gap-2">
              {/* Facebook icon */}
              <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" d="M22 12a10 10 0 10-11.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-3.9 3.7-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12H19l-.5 3h-2.5v7A10 10 0 0022 12z"/>
              </svg>
              <span>Facebook</span>
            </button>
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
                className="w-1/2 border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none text-black placeholder:text-gray-400"
              />
              <input
                placeholder="Username"
                className="w-1/2 border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none text-black placeholder:text-gray-400"
              />
            </div>
            <input
              placeholder="Email"
              type="email"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none text-black placeholder:text-gray-400"
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
