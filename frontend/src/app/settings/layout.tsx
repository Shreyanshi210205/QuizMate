import React from "react";

export default function StudentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="px-6 py-8 max-w-6xl mx-auto text-zinc-100">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Students</h1>
        <p className="text-sm text-zinc-400">
          Manage, view, and organize your students.
        </p>
      </div>
      {children}
    </section>
  );
}
