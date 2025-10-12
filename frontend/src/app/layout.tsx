import "@/app/globals.css";
import { ReactNode } from "react";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Quizzy - Learn, Quiz, Earn Rewards",
  description: "Join the ultimate quiz platform for students and teachers.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={cn("bg-black text-white", inter.className)}>
        {children}
      </body>
    </html>
  );
}
