export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-5 bg-primary rounded-b-xl shadow-md">
      <div className="text-2xl font-bold text-white">EduQuiz</div>
      <div className="flex gap-5 items-center">
        <a className="text-white" href="#">Quiz of the Day</a>
        <a className="text-white" href="#">Quizzes</a>
        <a className="text-white" href="#">Games</a>
        <a className="text-white" href="#">Leaderboard</a>
        <input className="rounded px-2 py-1" type="text" placeholder="Search..." />
        <button className="bg-accent text-primary font-bold px-4 py-2 rounded-2xl ml-3">Login</button>
        <button className="bg-white text-primary px-4 py-2 rounded-2xl ml-1 border">Sign Up</button>
      </div>
    </nav>
  );
}
