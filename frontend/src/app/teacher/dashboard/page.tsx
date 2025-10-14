import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import StatCard from "@/components/StatCard";
import EventCard from "@/components/EventCard";
import TopStudents from "@/components/TopStudents";
import RecentQuizzes from "@/components/RecentQuizzes";

const stats = [
  { title: "Total Quizzes", value: "2,543", delta: "+12.5%" },
  { title: "Active Events", value: "2,543", delta: "+12.5%" },
  { title: "Students", value: "2,543", delta: "+12.5%" },
  { title: "Avg. Completion", value: "2,543", delta: "-12.5%" },
];

const events = [
  { id: "e1", title: "Science Mid-term Quiz", when: "Today, 2:30 PM", participants: 32, badge: "Live" },
  { id: "e2", title: "Mathematics Weekly Test", when: "Tomorrow, 10:00 AM", participants: 28 },
  { id: "e3", title: "History Final Exam", when: "May 20, 9:00 AM", participants: 45 },
];

const students = [
  { id: "s1", name: "Alex John", subject: "Science", score: 950, avatar: "/assets/frame79.png" },
  { id: "s2", name: "Emma Watson", subject: "Mathematics", score: 920, avatar: "/assets/frame80.png" },
  { id: "s3", name: "Michael Clark", subject: "Physics", score: 980, avatar: "/assets/frame81.png" },
  { id: "s4", name: "Sophia Green", subject: "English", score: 890, avatar: "/assets/frame82.png" },
  { id: "s5", name: "Lucia Wilde", subject: "Science", score: 870, avatar: "/assets/frame79.png" },
];

const quizzes = [
  { id: "q1", title: "Introduction to Biology", questions: 15, completions: 28, completionRate: 75 },
  { id: "q2", title: "Introduction to Biology", questions: 15, completions: 28, completionRate: 40 },
  { id: "q3", title: "Introduction to Biology", questions: 15, completions: 28, completionRate: 90 },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      <div className="flex-1">
        <Topbar />
        <main className="p-8 max-w-[1200px] mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Dashboard <span className="text-gradient-hero">Quizzy</span></h1>
            <p className="text-sm text-gray-400 mt-1">Welcome back, Sarah! Here's what's happening with your quizzes</p>
          </div>

          <div className="flex gap-4 mb-8 flex-wrap">
            {stats.map((s, idx) => (
              <StatCard key={idx} title={s.title} value={s.value} delta={s.delta} />
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="lg:col-span-2 card-bg rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Recent Events</h3>

              <div className="space-y-4">
                {events.map(e => (
                  <EventCard key={e.id} title={e.title} when={e.when} participants={e.participants} badge={e.badge} />
                ))}
              </div>
            </div>

            <div>
              <TopStudents students={students} />
            </div>
          </div>

          <div className="card-bg rounded-lg p-6">
            <RecentQuizzes quizzes={quizzes} />
          </div>
        </main>
      </div>
    </div>
  );
}
