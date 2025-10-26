import StudentSidebar from "@/components/StudentSidebar";

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-black text-white">
      <StudentSidebar />
      <main className="flex-1 px-10 py-8 overflow-y-auto">{children}</main>
    </div>
  );
}
