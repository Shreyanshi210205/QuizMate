export default function LeaderboardSidebar() {
  const leaders = [
    { name: 'Alice', score: 97 },
    { name: 'Bob', score: 93 },
    { name: 'Eve', score: 89 },
  ];
  return (
    <aside className="min-w-[220px] bg-white rounded-2xl shadow-lg p-6">
      <h2 className="font-bold text-primary mb-4">Leaderboard</h2>
      <ul>
        {leaders.map((l, idx) => (
          <li key={idx} className="flex justify-between mb-2">
            <span className="font-semibold">{l.name}</span>
            <span className="text-accent">{l.score}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
