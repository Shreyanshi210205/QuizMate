"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ emailOrUsername, password }),
    });

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem("quizzy_token", data.token);
      localStorage.setItem("quizzy_user", JSON.stringify(data.user));

      if (data.user.role === "teacher") router.push("/teacher/dashboard");
      else router.push("/student/dashboard");
    } else {
      alert("❌ " + (data.message || "Invalid credentials"));
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* LEFT UI */}
      <div className="relative hidden lg:flex w-1/2 items-center justify-center bg-[linear-gradient(90deg,#241236_0%,#000000_45%,#4a1f12_100%)] overflow-hidden">
        <Image src="/ceil.svg" alt="Ceiling Grid" fill className="ceiling-grid-img" priority />
        <Image src="/floor.svg" alt="Floor Grid" fill className="floor-grid-img" priority />
        <h1 className="relative z-10 text-6xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Quizzy</h1>
      </div>

      {/* RIGHT FORM */}
      <div className="flex w-full lg:w-1/2 items-center justify-center bg-white text-black">
        <div className="w-full max-w-md p-8">
          <h2 className="text-2xl font-bold text-black mb-6">Welcome back</h2>

          <form className="space-y-4" onSubmit={handleLogin}>
            <input
              value={emailOrUsername}
              onChange={(e) => setEmailOrUsername(e.target.value)}
              placeholder="Email or Username"
              className="w-full border rounded-lg px-3 py-2 text-black placeholder-gray-500"
            />

            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              className="w-full border rounded-lg px-3 py-2 text-black placeholder-gray-500"
            />

            <button
              className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700"
            >
              Sign In
            </button>
          </form>

          <p className="text-center text-gray-600 text-sm mt-4">
            Don’t have an account?{" "}
            <Link href="/auth/register" className="text-purple-600 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
