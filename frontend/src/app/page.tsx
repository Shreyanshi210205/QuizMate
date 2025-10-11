import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedQuizzes from '@/components/FeaturedQuizzes';
import LeaderboardSidebar from '@/components/LeaderboardSidebar';
import SubscriptionBanner from '@/components/SubscriptionBanner';
import CategoryChips from '@/components/CategoryChips';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex flex-row gap-8 px-8 py-10">
        <section className="w-full">
          <Hero />
          <FeaturedQuizzes />
          <SubscriptionBanner />
          <CategoryChips />
        </section>
        <LeaderboardSidebar />
      </main>
      <Footer />
    </div>
  );
}
