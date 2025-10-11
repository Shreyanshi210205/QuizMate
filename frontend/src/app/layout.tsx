import '@/app/globals.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ weight: ['400', '700'], subsets: ['latin'] });

export const metadata = {
  title: 'EduQuiz',
  description: 'Quiz management app for schools and colleges',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-background text-text`}>
        {children}
      </body>
    </html>
  );
}
