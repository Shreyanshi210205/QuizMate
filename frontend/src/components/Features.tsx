import { Card, CardContent } from "@/components/ui/card";

const features = [
  { title: "Personalized Learning", desc: "Adaptive quizzes that match your knowledge level." },
  { title: "Reward System", desc: "Earn badges, points, and rewards for achievements." },
  { title: "Teacher Dashboard", desc: "Tools for educators to create and manage quizzes." },
  { title: "Progress Tracking", desc: "Track your learning journey and quiz performance." },
  { title: "Competitive Leaderboards", desc: "Compete with peers and climb ranks." },
  { title: "Mobile Friendly", desc: "Access quizzes anywhere, anytime." },
];

export default function Features() {
  return (
    <section className="py-24 bg-black text-center">
      <h2 className="text-4xl font-bold mb-4">
        Why <span className="text-pink-500">Quizzy</span>?
      </h2>
      <p className="text-gray-400 mb-12">
        Discover features that make learning fun and rewarding
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-8 max-w-6xl mx-auto">
        {features.map((f, i) => (
          <Card key={i} className="bg-zinc-900 border border-gray-700">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm">{f.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
