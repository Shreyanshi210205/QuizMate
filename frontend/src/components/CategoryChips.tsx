const categories = ['Science', 'History', 'Math', 'Tech', 'Sports', 'Art', 'Literature', 'Languages'];

export default function CategoryChips() {
  return (
    <div className="flex gap-3 overflow-x-auto py-3 my-3">
      {categories.map((cat, idx) => (
        <span key={idx} className="bg-blue-100 rounded-2xl px-4 py-2 text-primary font-semibold cursor-pointer shadow-sm">
          {cat}
        </span>
      ))}
    </div>
  );
}
