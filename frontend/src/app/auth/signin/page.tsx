"use client";
import Link from "next/link";
import Image from "next/image";


export default function LoginPage() {
  return (
    <div className="flex min-h-screen">
      {/* Left side – same grid and logo */}
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

      {/* Right side – login form */}
      <div className="flex w-full lg:w-1/2 items-center justify-center bg-white">
        <div className="w-full max-w-md p-8">
          <h2 className="text-2xl text-black font-bold mb-2">Welcome back</h2>
          <p className="text-gray-500 mb-6">
            Enter your credentials to access your account
          </p>

          <div className="flex gap-4 mb-4">
            <button className="flex-1 border border-gray-300 rounded-lg py-2 flex items-center justify-center gap-2">
              <Image src='/assets/google.png' alt="Google Logo" width={40} height={40} className="w-5 h-5" />
              <span className="text-gray-500">Google</span>
            </button>
            <button className="flex-1 border border-gray-300 rounded-lg py-2 flex items-center justify-center gap-2">
              <Image src='/assets/facebook.png' alt="Facebook Logo" width={40} height={40} className="w-5 h-5" />
              <span className="text-gray-500">Facebook</span>
            </button>
          </div>

          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300" />
            <span className="px-3 text-gray-500 text-sm">OR</span>
            <div className="flex-grow border-t border-gray-300" />
          </div>

          <form className="space-y-4">
            <input
              placeholder="Username"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none text-gray-400 placeholder:text-gray-400"
            />
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
            <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 ">
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
