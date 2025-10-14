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
                <div className="text-xs text-gray-400 mt-2 flex gap-4 items-center">
                  <span className="flex items-center gap-2 text-gray-200">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="4" width="7" height="7" stroke="white" strokeWidth="1.2" rx="1" />
                      <rect x="14" y="4" width="7" height="7" stroke="white" strokeWidth="1.2" rx="1" />
                    </svg>
                    {q.questions} questions
                  </span>
                  <span className="flex items-center gap-2 text-gray-200">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="12" cy="7" r="4" stroke="white" strokeWidth="1.2" />
                    </svg>
                    {q.completions} completions
                  </span>
                </div>
              </div>
              <div className="text-sm text-gray-400">›</div>
            </div>

            <div className="mt-4 text-xs text-gray-400">Completion Rate</div>
            <div className="mt-2 h-2 bg-white/6 rounded-full overflow-hidden">
              <div className="h-2 rounded-full" style={{ width: `${q.completionRate}%`, backgroundColor: '#7C3AED' }} />
            </div>
            <div className="text-xs text-gray-300 mt-2 text-right">{q.completionRate}%</div>
          </div>
        ))}

        <div className="border-2 border-dashed border-white/6 rounded-lg flex items-center justify-center p-6 text-gray-400">
          <div className="text-center">
            <div className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center" style={{ backgroundColor: '#22113d' }}>
              <svg className="w-6 h-6 text-[#7C3AED]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5v14M5 12h14" stroke="#7C3AED" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="text-sm font-medium text-white">Create New Quiz</div>
            <div className="text-xs text-gray-400 mt-2">Add questions, set time limits and more</div>
          </div>
        </div>
      </div>
    </div>
  );
}
