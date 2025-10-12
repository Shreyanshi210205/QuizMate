import { Card, CardContent } from "@/components/ui/card";

const features = [
  { title: "Personalized Learning", desc: "Adaptive quizzes that adjust to your knowledge level and learning pace", color: "from-purple-600 to-pink-500", key: 'personal' },
  { title: "Reward System", desc: "Earn points, badges, and real rewards for your achievements", color: "from-red-500 to-rose-400", key: 'reward' },
  { title: "Teacher Dashboard", desc: "Comprehensive tools for educators to create and manage quizzes", color: "from-sky-600 to-blue-500", key: 'teacher' },
  { title: "Progress Tracking", desc: "Track your learning journey and quiz performance", color: "from-green-500 to-emerald-400", key: 'progress' },
  { title: "Competitive Leaderboards", desc: "Compete with peers and climb the ranks in various categories", color: "from-yellow-500 to-orange-400", key: 'leader' },
  { title: "Mobile Friendly", desc: "Access quizzes anytime, anywhere on any device", color: "from-violet-600 to-pink-500", key: 'mobile' },
];

function FeatureIcon({ keyName }: { keyName: string }) {
  switch (keyName) {
    case 'personal':
      return (
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 12a4 4 0 100-8 4 4 0 000 8z" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M4 20a8 8 0 0116 0" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
      );
    case 'reward':
      return (
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2l2 5h5l-4 3 2 5-5-3-5 3 2-5-4-3h5l2-5z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'teacher':
      return (
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 12v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M4 7h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M8 7v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      );
    case 'progress':
      return (
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 12h3v6H3zM10 8h3v10h-3zM17 4h3v14h-3z" fill="currentColor"/>
        </svg>
      );
    case 'leader':
      return (
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 8l2 4h-4l2-4z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 2v2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
      );
    case 'mobile':
      return (
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="7" y="3" width="10" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M11 18h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      );
    default:
      return null;
  }
}

export default function Features() {
  return (
    <section className="py-24 bg-black text-center">
      <div className="mx-auto mb-6 inline-flex items-center gap-2 bg-gray-800/70 text-white px-3 py-1 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.2 6.748a1 1 0 00.95.69h7.096c.969 0 1.371 1.24.588 1.81l-5.74 4.17a1 1 0 00-.364 1.118l2.2 6.749c.3.921-.755 1.688-1.54 1.118L12 20.347l-5.94 4.003c-.784.57-1.84-.197-1.54-1.118l2.2-6.749a1 1 0 00-.364-1.118L1.64 12.175c-.783-.57-.38-1.81.588-1.81h7.096a1 1 0 00.95-.69l2.2-6.748z" />
        </svg>
        <span className="text-sm font-medium">Features</span>
      </div>

      <h2 className="text-4xl font-bold mb-4">
        <span className="text-white">Why</span>{' '}
        <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">Quizzy</span>?
      </h2>
      <p className="text-white mb-12">
        Discover features that make learning fun and rewarding
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-8 max-w-6xl mx-auto">
        {features.map((f, i) => (
          <Card key={i} className="bg-zinc-900 border border-gray-700 hover:scale-105 transition-transform relative overflow-hidden">
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${f.color}`} />
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r ${f.color}`}>
                  <FeatureIcon keyName={f.key} />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-white font-semibold text-lg mb-2">{f.title}</h3>
                  <p className="text-gray-400 text-sm">{f.desc}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
