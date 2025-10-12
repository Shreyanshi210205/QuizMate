import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Categories from "@/components/Categories";
import Features from "@/components/Features";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <Categories />
      <Features />
      <CTASection />
      <Footer />
    </main>
  );
}
