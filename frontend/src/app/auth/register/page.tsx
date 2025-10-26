"use client";
import Link from "next/link";
import { useState } from "react";
import { FaUserGraduate, FaChalkboardTeacher } from "react-icons/fa";
import Image from "next/image";


export default function SignupPage() {
  const [role, setRole] = useState("student");

  return (
    <div className="flex min-h-screen">
      <div className="relative hidden lg:flex w-1/2 items-center justify-center bg-[linear-gradient(90deg,#241236_0%,#000000_45%,#4a1f12_100%)] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  <Image
                    src="/ceil.svg"
                    alt="Ceiling Grid"
                    fill
                    className="ceiling-grid-img"
                    priority
                  />
                  <Image
                    src="/floor.svg"
                    alt="Floor Grid"
                    fill
                    className="floor-grid-img"
                    priority
                  />
                </div>
        <h1 className="relative z-10 text-6xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          QuizMate
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
    className={`flex-1 border rounded-lg p-4 flex flex-col items-center gap-2 ${
      role === "student" ? "bg-purple-100 border-purple-400" : "border-gray-200"
    }`}
  >
    <FaUserGraduate className="text-black" size={40} />
    <span className="font-medium text-gray-500">Student</span>
    <p className="text-sm text-black text-center">
      Take quizzes and track your progress
    </p>
  </button>

  <button
    onClick={() => setRole("teacher")}
    className={`flex-1 border rounded-lg p-4 flex flex-col items-center gap-2 ${
      role === "teacher" ? "bg-purple-100 border-purple-400" : "border-gray-200"
    }`}
  >
    <FaChalkboardTeacher className="text-black" size={40} />
    <span className="font-medium text-gray-500">Teacher</span>
    <p className="text-sm text-black text-center">
      Create quizzes and manage students
    </p>
  </button>
</div>


          <div className="flex gap-4 mb-4">
            <button className="flex-1 border border-gray-300 rounded-lg py-2 flex items-center justify-center gap-2">
              <Image src='/assets/google.png' alt="Google Logo" width={40} height={40} className="w-5 h-5" />
              <span className="text-gray-500">Google</span>
            </button>
            <button className="flex-1 border border-gray-300 rounded-lg py-2 flex items-center justify-center gap-2">
              <Image src='/assets/facebook.png' alt="Facebook Logo" width={40} height={40} className="w-5 h-5" />
              <span className="text-gray-500 ">Facebook</span>
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
                className="w-1/2 border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none text-gray-400 placeholder:text-gray-400"
              />
              <input
                placeholder="Username"
                className="w-1/2 border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none text-gray-400 placeholder:text-gray-400"
              />
            </div>
            <input
              placeholder="Email"
              type="email"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none text-gray-400 placeholder:text-gray-400"
            />
            <input
              placeholder="Password"
              type="password"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none text-gray-400 placeholder:text-gray-400"
            />
            <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700">
              Sign Up
            </button>
          </form>

          <p className="text-center text-gray-600 text-sm mt-4">
            Already have an account?{" "}
            <Link href="/auth/signin" className="text-purple-600 hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
