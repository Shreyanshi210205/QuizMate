'use client';

import Link from 'next/link';
import { Sparkles, TrendingUp, Award, BarChart3, Trophy, Smartphone, GraduationCap, Atom, Lightbulb, Globe, BookOpen } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

export default function LandingPage() {
  const categories = [
    {
      icon: <Atom className="w-6 h-6" />,
      title: 'Science & Tech',
      description: 'Test your knowledge in science & technology with our comprehensive quizzes',
      quizzes: 45,
      color: 'from-blue-500/20 to-blue-600/20 border-blue-500/30'
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Mathematics',
      description: 'Challenge yourself with math problems and improve your skills',
      quizzes: 38,
      color: 'from-green-500/20 to-green-600/20 border-green-500/30'
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: 'Chemistry',
      description: 'Explore chemical concepts & formulas with our engaging quizzes',
      quizzes: 52,
      color: 'from-purple-500/20 to-purple-600/20 border-purple-500/30'
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Biology',
      description: 'Dive into life sciences & biology with our detailed quizzes',
      quizzes: 41,
      color: 'from-pink-500/20 to-pink-600/20 border-pink-500/30'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'General Knowledge',
      description: 'Expand your horizons with our comprehensive general knowledge tests',
      quizzes: 67,
      color: 'from-blue-400/20 to-blue-500/20 border-blue-400/30'
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Current Affairs',
      description: 'Stay updated with current events & news with our quizzes',
      quizzes: 29,
      color: 'from-cyan-500/20 to-cyan-600/20 border-cyan-500/30'
    }
  ];

  const features = [
    {
      icon: <Sparkles className="w-8 h-8 text-purple-400" />,
      title: 'Personalized Learning',
      description: 'Adaptive quizzes that adjust to your knowledge level and learning pace'
    },
    {
      icon: <Award className="w-8 h-8 text-orange-400" />,
      title: 'Reward System',
      description: 'Earn coins, badges, and rewards for your achievements'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-400" />,
      title: 'Teacher Dashboard',
      description: 'Comprehensive tools for educators to create and manage quizzes'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-400" />,
      title: 'Progress Tracking',
      description: 'Analytics to track your learning progress and identify areas to improve'
    },
    {
      icon: <Trophy className="w-8 h-8 text-yellow-400" />,
      title: 'Competitive Leaderboards',
      description: 'Compete with friends and learners in live leaderboards'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-purple-400" />,
      title: 'Mobile Friendly',
      description: 'Access quizzes anytime, anywhere on any device'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0118]">
      {/* Header */}
      <header className="border-b border-white/10 bg-[#0a0118]/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-purple-500">Quizzy</div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#" className="text-white/80 hover:text-white transition-colors">Quiz</a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">Winning Quiz</a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">Rewards</a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">About</a>
            </nav>
            <div className="flex items-center gap-3">
              <Link href="/signin">
                <Button variant="ghost" className="text-white hover:bg-white/10">
                  Log in
                </Button>
              </Link>
              <Link href="/signup">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a2e_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-white/80">No downloads required</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl mb-6 text-white">
              Learn, Quiz, <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Earn Rewards</span>
            </h1>
            
            <p className="text-lg text-white/60 mb-8 max-w-2xl mx-auto">
              Join thousands of students and teachers on the ultimate quiz platform. Test your knowledge, compete with peers, and win exciting rewards
            </p>
            
            <div className="flex items-center justify-center gap-4 mb-12">
              <Link href="/signup">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8">
                  Get Started
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Explore Quizzes
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-2 text-white/60 text-sm">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 border-2 border-[#0a0118]" />
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 border-2 border-[#0a0118]" />
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-emerald-400 border-2 border-[#0a0118]" />
              </div>
              <span>Join 10,000+ students across the world</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-4">
              <span className="text-sm text-purple-400">📚 Categories</span>
            </div>
            <h2 className="text-4xl mb-4 text-white">
              Explore <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Quiz Categories</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Choose a quiz across several subjects and topics to test and expand your knowledge
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className={`bg-gradient-to-br ${category.color} border backdrop-blur-sm p-6 hover:scale-105 transition-transform cursor-pointer group`}>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors">
                    {category.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white mb-2">{category.title}</h3>
                    <p className="text-sm text-white/60 mb-4">{category.description}</p>
                    <button className="text-sm text-purple-400 hover:text-purple-300 transition-colors">
                      Explore Quizzes →
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-4">
              <span className="text-sm text-purple-400">✨ Features</span>
            </div>
            <h2 className="text-4xl mb-4 text-white">
              Why <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Quizzy</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Discover amazing quizzes tailored to all topics to test and expand your knowledge
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-[#1a1a2e]/50 border-white/10 backdrop-blur-sm p-6 hover:border-purple-500/30 transition-colors">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-white/60">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-purple-500/30 backdrop-blur-sm p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-4xl mb-4 text-white">
                  Ready to Start Your Quiz Journey?
                </h2>
                <p className="text-white/70 mb-6">
                  Join thousands of students and teachers. Sign up today and get access to amazing quizzes and rewards!
                </p>
                <div className="flex gap-4">
                  <Link href="/signup">
                    <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90">
                      Create Account
                    </Button>
                  </Link>
                  <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                    Explore Quizzes
                  </Button>
                </div>
              </div>
              <div className="bg-white/5 rounded-lg p-8 border border-white/10">
                <div className="aspect-square bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center">
                  <Trophy className="w-24 h-24 text-purple-400" />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-purple-500 mb-4">Quizzy</div>
              <p className="text-sm text-white/60">
                The ultimate quiz platform for students and teachers. Join our community and start learning today!
              </p>
            </div>
            
            <div>
              <h4 className="text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white mb-4">For Teachers</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Create Quiz</a></li>
                <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Contact us</a></li>
                <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">FAQ`@apos`s</a></li>
                <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white mb-4">Contact us</h4>
              <ul className="space-y-2">
                <li className="text-sm text-white/60">📧 contact@quizzy.com</li>
                <li className="text-sm text-white/60">📞 +91-9167-5882</li>
                <li className="text-sm text-white/60">📍 24A, MLK Street 20, San Francisco 94103</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/60">Copyright © 2025 Quizzy</p>
            <p className="text-sm text-white/60">
              All Rights Reserved | <a href="#" className="text-purple-400 hover:text-purple-300">User Terms & Conditions</a> | <a href="#" className="text-purple-400 hover:text-purple-300">Privacy Policy</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
