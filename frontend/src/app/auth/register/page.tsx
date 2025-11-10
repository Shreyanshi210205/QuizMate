"use client";
import Link from "next/link";
import { useState } from "react";
import { FaUserGraduate, FaChalkboardTeacher } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [role, setRole] = useState("student");
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fullName, username, email, password, role }),
    });

    const data = await res.json();

    if (res.ok) {
      alert("✅ Account created! Please log in.");
      router.push("/auth/signin");
    } else {
      alert("❌ " + (data.message || "Something went wrong"));
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* LEFT UI */}
      <div className="relative hidden lg:flex w-1/2 items-center justify-center bg-[linear-gradient(90deg,#241236_0%,#000000_45%,#4a1f12_100%)] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <Image src="/ceil.svg" alt="Ceiling Grid" fill className="ceiling-grid-img" priority />
          <Image src="/floor.svg" alt="Floor Grid" fill className="floor-grid-img" priority />
        </div>
        <h1 className="relative z-10 text-6xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Quizzy</h1>
      </div>

      {/* RIGHT FORM */}
      <div className="flex w-full lg:w-1/2 items-center justify-center bg-white">
        <div className="w-full max-w-md p-8">
          <h2 className="text-2xl font-bold mb-2 text-black">Create Account</h2>
          <p className="text-gray-500 mb-6">Choose your account type and start your journey with us</p>

          <div className="flex gap-3 mb-6">
            <button
              onClick={() => setRole("student")}
              className={`flex-1 border rounded-lg p-4 flex flex-col items-center gap-2 ${role === "student" ? "bg-purple-100 border-purple-400" : "border-gray-200"}`}
            >
              <FaUserGraduate size={40} />
              Student
            </button>
            <button
              onClick={() => setRole("teacher")}
              className={`flex-1 border rounded-lg p-4 flex flex-col items-center gap-2 ${role === "teacher" ? "bg-purple-100 border-purple-400" : "border-gray-200"}`}
            >
              <FaChalkboardTeacher size={40} />
              Teacher
            </button>
          </div>

          <form className="space-y-4" onSubmit={handleSignUp}>
            <div className="flex gap-2">
              <input value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Full Name" className="w-1/2 border rounded-lg px-3 py-2" />
              <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" className="w-1/2 border rounded-lg px-3 py-2" />
            </div>

            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" className="w-full border rounded-lg px-3 py-2" />
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" className="w-full border rounded-lg px-3 py-2" />

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
