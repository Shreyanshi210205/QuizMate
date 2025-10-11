import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative rounded-3xl bg-blue-50 shadow-lg p-8 mb-8 min-h-[260px] flex items-stretch overflow-hidden">
      <div className="flex-1 flex flex-col justify-center z-10">
        <h1 className="text-4xl font-bold text-primary mb-4">Quiz of the Day</h1>
        <p className="mb-4 text-gray-700">
          Boost your knowledge every day with new challenges!
        </p>
        <button className="bg-accent text-gray-900 px-6 py-3 rounded-xl font-bold">
          Play Now
        </button>
      </div>
      <div className="relative h-auto w-1/3 min-w-[220px] min-h-[200px]">
        <Image
          src="/assets/hero-illus.png"
          alt="Quiz Illustration"
          fill
          style={{ objectFit: "cover" }}
          className="rounded-2xl"
          priority
        />
      </div>
      <div className="absolute left-8 bottom-4 flex gap-10 text-primary font-semibold opacity-80 z-10">
        <div>Plays: 1529</div>
        <div>Avg Score: 65%</div>
      </div>
    </section>
  );
}
