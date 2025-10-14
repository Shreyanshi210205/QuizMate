"use client";

export default function RecentQuizzes({ quizzes }: { quizzes: Array<{id:string,title:string,questions:number,completions:number,completionRate:number}> }) {
  return (
    <div className="card-bg rounded-lg p-6">
      <h3 className="text-lg font-semibold mb-4">Recent Quizzes</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {quizzes.map(q => (
          <div key={q.id} className="bg-transparent border border-white/6 rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div>
                <div className="text-sm font-medium">{q.title}</div>
                <div className="text-xs text-gray-400 mt-2">
                  📘 {q.questions} questions • {q.completions} completions
                </div>
              </div>
              <div className="text-sm text-gray-400">›</div>
            </div>

            <div className="mt-4 text-xs text-gray-400">Completion Rate</div>
            <div className="mt-2 progress-track h-2">
              <div className="progress-fill h-2" style={{ width: `${q.completionRate}%` }} />
            </div>
            <div className="text-xs text-gray-300 mt-2 text-right">{q.completionRate}%</div>
          </div>
        ))}

        <div className="border-2 border-dashed border-white/6 rounded-lg flex items-center justify-center p-6 text-gray-400">
          <div className="text-center">
            <div className="text-2xl">＋</div>
            <div className="mt-2">Create New Quiz</div>
          </div>
        </div>
      </div>
    </div>
  );
}
