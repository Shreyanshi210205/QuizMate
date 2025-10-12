import { Card, CardContent } from "@/components/ui/card";

const categories = [
  { title: "Science & Tech", desc: "Test your knowledge in science & tech with our challenging quizzes", color: "from-blue-500 to-purple-500", key: 'science' },
  { title: "Mathematics", desc: "Test your knowledge in mathematics with our challenging quizzes", color: "from-green-400 to-yellow-500", key: 'math' },
  { title: "Chemistry", desc: "Test your knowledge in chemistry with our challenging quizzes", color: "from-purple-500 to-pink-500", key: 'chem' },
  { title: "Biology", desc: "Test your knowledge in biology with our challenging quizzes", color: "from-pink-500 to-orange-400", key: 'bio' },
  { title: "General Knowledge", desc: "Test your knowledge in general knowledge with our challenging quizzes", color: "from-blue-400 to-cyan-400", key: 'gk' },
  { title: "Current Affairs", desc: "Test your knowledge in current affairs with our challenging quizzes", color: "from-orange-400 to-red-500", key: 'news' },
];

function IconFor(key: string) {
  switch (key) {
    case 'science':
      return (
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2v20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.9"/>
          <path d="M4 7c4 4 8 4 16 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.9"/>
        </svg>
      );
    case 'math':
      return (
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 3l18 18M21 3L3 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'chem':
      return (
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="8" r="2" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M12 10v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      );
    case 'bio':
      return (
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 12h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M8 6c2 2 4 2 8 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      );
    case 'gk':
      return (
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" stroke="currentColor" strokeWidth="1.2"/>
        </svg>
      );
    case 'news':
      return (
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M7 9h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      );
    default:
      return null;
  }
}

export default function Categories() {
  return (
    <section className="py-24 bg-black text-center">
      <div className="mx-auto mb-6 inline-flex items-center gap-2 bg-gray-800/70 text-white px-3 py-1 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
        <span className="text-sm font-medium">Categories</span>
      </div>

      <h2 className="text-4xl font-bold mb-4">
        <span className="text-white">Explore</span>{' '}
        <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
          Quiz Categories
        </span>
      </h2>
      <p className="text-white mb-12">
        Discover quizzes across various subjects to test and expand your knowledge
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-8 max-w-6xl mx-auto">
        {categories.map((cat, i) => (
          <Card
            key={i}
            className="bg-zinc-900 border border-gray-700 hover:scale-105 transition-transform relative overflow-hidden"
          >
            {/* top colored border */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cat.color}`} />
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r ${cat.color}`}>
                  {IconFor(cat.key)}
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-white font-semibold text-lg mb-2">{cat.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{cat.desc}</p>
                  <a
                    href="#"
                    className={`text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r ${cat.color}`}
                  >
                    Explore Quizzes →
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
