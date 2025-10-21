"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Student {
  id: number;
  name: string;
  email: string;
  progress: number;
}

export default function StudentsPage() {
  const [search, setSearch] = useState("");
  const [students] = useState<Student[]>([
    { id: 1, name: "Alice Johnson", email: "alice@example.com", progress: 87 },
    { id: 2, name: "Ben Carter", email: "ben@example.com", progress: 72 },
    { id: 3, name: "Chloe Kim", email: "chloe@example.com", progress: 95 },
  ]);

  const filtered = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-6">
      {/* Search + Add Button */}
      <div className="flex justify-between items-center">
        <Input
          placeholder="Search students..."
          className="w-64 bg-zinc-900 border-zinc-700 text-zinc-100"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button className="bg-purple-600 hover:bg-purple-700 text-white">
          + Add Student
        </Button>
      </div>

      {/* Students List */}
      <Card className="bg-zinc-900 border-zinc-800">
        <CardContent className="p-0 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead className="bg-zinc-800 text-zinc-300 text-sm">
              <tr>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Email</th>
                <th className="px-6 py-3">Progress</th>
                <th className="px-6 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((student) => (
                <tr
                  key={student.id}
                  className="border-t border-zinc-800 hover:bg-zinc-800/60 transition"
                >
                  <td className="px-6 py-4">{student.name}</td>
                  <td className="px-6 py-4 text-zinc-400">{student.email}</td>
                  <td className="px-6 py-4">{student.progress}%</td>
                  <td className="px-6 py-4 text-right">
                    <Button
                      variant="secondary"
                      className="bg-zinc-700 hover:bg-zinc-600 text-sm"
                    >
                      View
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
