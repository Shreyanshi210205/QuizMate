export default function FeaturedQuizzes() {
  const quizzes = [
    { name: 'Popular Quiz', description: 'Top quizzes trending now.' },
    { name: 'Trivia Sprint', description: 'Quick-fire trivia challenge.' },
    { name: 'Weekly Challenge', description: 'Compete and win weekly.' },
  ];
  return (
    <div className="flex gap-6 my-6">
      {quizzes.map((quiz, idx) => (
        <div key={idx} className="rounded-2xl bg-white shadow-lg p-6 w-1/3">
          <h3 className="text-xl font-bold text-primary">{quiz.name}</h3>
          <p className="mt-2 text-gray-700">{quiz.description}</p>
          <button className="mt-4 bg-accent text-primary px-4 py-2 rounded-lg font-semibold">Try Now</button>
        </div>
      ))}
    </div>
  );
}
