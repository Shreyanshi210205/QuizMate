import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
const avatars = [
  "/assets/frame79.png",
  "/assets/frame80.png",
  "/assets/frame81.png",
  "/assets/frame82.png",
];

export default function HeroSection() {
  return (
  <section className="relative flex flex-col items-center justify-center text-center pt-52 pb-40 bg-[linear-gradient(90deg,#241236_0%,#000000_45%,#4a1f12_100%)] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,transparent_70%)]" />
      <div className="z-10 max-w-3xl">
        <p className="inline-block bg-gray-800/70 text-gray-200 text-sm mb-2 px-4 py-1 rounded-full">
          🌟 The ultimate quiz experience
        </p>
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          <span className="text-white">Learn, Quiz,</span>{' '}
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            Earn Rewards
          </span>
        </h1>
        <p className="text-gray-300 mb-8 leading-relaxed">
          Join thousands of students and teachers on the ultimate quiz platform.
          Test your knowledge, compete with peers, and win exciting rewards.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/auth/register">
            <Button className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white hover:opacity-95">Get Started</Button>
          </Link>
        </div>
        <div className="flex items-center justify-center gap-3 mt-6">
          <div className="flex -space-x-3">
            {avatars.map((src, i) => (
              <Image
                key={i}
                src={src}
                alt={`avatar ${i + 1}`}
                width={40}
                height={40}
                className="w-10 h-10 rounded-full border-2 border-gray-800 object-cover"
              />
            ))}
          </div>

          <span className="ml-2 text-lg">
            <span className="text-purple-400 font-semibold">5,000+</span>{' '}
            <span className="text-white">students joined this week</span>
          </span>
        </div>
      </div>
     <div className="absolute inset-0 pointer-events-none overflow-hidden">
  <Image
    src="/ceil.svg"
    alt="Ceiling Grid"
    fill
    className="ceiling-grid"
    priority
  />
  <Image
    src="/floor.svg"
    alt="Floor Grid"
    fill
    className="floor-grid"
    priority
  />
</div>

    </section>
  );
}
