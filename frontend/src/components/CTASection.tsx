import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="bg-gradient-to-r from-purple-700 via-pink-500 to-orange-500 py-20 px-8 rounded-3xl mx-8 my-20 max-w-6xl mx-auto text-center text-white">
      <h2 className="text-3xl font-bold mb-4">Ready to Start Your Quiz Journey?</h2>
      <p className="mb-8 text-sm">
        Join thousands of students and teachers. Sign up today and get access to all features.
      </p>
      <div className="flex justify-center gap-4">
        <Button variant="secondary" className="bg-white text-black hover:bg-gray-200">
          Create Account
        </Button>
  <Button className="bg-transparent border border-white text-white hover:bg-white/5">Explore Quizzes</Button>
      </div>
    </section>
  );
}
