import { Card, CardContent } from "@/components/ui/card";

const categories = [
  { title: "Science & Tech", desc: "Test your knowledge in science & tech.", color: "from-blue-500 to-purple-500" },
  { title: "Mathematics", desc: "Challenge yourself in mathematics.", color: "from-green-400 to-yellow-500" },
  { title: "Chemistry", desc: "Explore the world of molecules.", color: "from-purple-500 to-pink-500" },
  { title: "Biology", desc: "Learn more about living things.", color: "from-pink-500 to-orange-400" },
  { title: "General Knowledge", desc: "Test your GK across domains.", color: "from-blue-400 to-cyan-400" },
  { title: "Current Affairs", desc: "Stay updated with world events.", color: "from-orange-400 to-red-500" },
];

export default function Categories() {
  return (
    <section className="py-24 bg-black text-center">
      <h2 className="text-4xl font-bold mb-4">
        Explore <span className="text-gradient">Quiz Categories</span>
      </h2>
      <p className="text-gray-400 mb-12">
        Discover quizzes across various subjects to test and expand your knowledge
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-8 max-w-6xl mx-auto">
        {categories.map((cat, i) => (
          <Card
            key={i}
            className="bg-zinc-900 border border-gray-700 hover:scale-105 transition-transform"
          >
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-2">{cat.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{cat.desc}</p>
              <a
                href="#"
                className={`text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r ${cat.color}`}
              >
                Explore Quizzes →
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
