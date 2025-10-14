import Sidebar from "@/components/Sidebar";

export default function TeacherLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-black text-white">
      <Sidebar />
      <main className="flex-1 px-10 py-8 overflow-y-auto">{children}</main>
    </div>
  );
}
