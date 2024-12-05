import React from "react";
import AviatorGame from "../components/AviatorGame";
import BetHistory from "../components/BetHistory";
import { Trophy, ChevronRight, Star, Users, Shield } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-customDark to-blue-900 text-white">
      {/* Header */}
      <header className="bg-indigo-900 bg-opacity-90 backdrop-blur-md fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-4 px-6 border-b border-blue-700">
        <div className="text-2xl font-bold text-yellow-300">Battery Bet</div>
        
        <div className="flex space-x-4">
          <button className="bg-teal-500 text-black px-6 py-2 rounded-full font-semibold hover:bg-teal-400 transition duration-300">Log In</button>
          <button className="bg-red-600 px-6 py-2 rounded-full font-semibold hover:bg-red-500 transition duration-300 animate-bounce">Join Now</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-yellow-300">
          Welcome to Battery Bet
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300">
          Experience the thrill of betting like never before!
        </p>
        <button className="bg-green-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-400 transition duration-300 animate-pulse">
          Start Betting Now
        </button>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-indigo-800 rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row justify-between p-6 bg-indigo-700">
            <div className="text-2xl font-bold mb-4 md:mb-0">Aviator (Demo)</div>
            <div className="flex gap-4">
              <button className="bg-blue-600 rounded-lg px-4 py-2 flex items-center gap-2 hover:bg-blue-500 transition duration-300">
                <Trophy className="w-5 h-5" />
                Tournament
              </button>
              <button className="bg-yellow-500 text-black rounded-lg px-4 py-2 font-semibold hover:bg-yellow-400 transition duration-300">
                Play for Money
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 p-6">
            <div className="md:w-1/3">
              <BetHistory />
            </div>
            <div className="md:w-2/3">
              <AviatorGame />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-12 px-6 bg-indigo-900">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-yellow-300">
            Why Choose Battery Bet?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Star className="w-8 h-8 text-yellow-300" />}
              title="Best Odds"
              description="We offer the most competitive odds in the market."
            />
            <FeatureCard
              icon={<Users className="w-8 h-8 text-teal-300" />}
              title="Active Community"
              description="Join thousands of active bettors and share strategies."
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8 text-green-400" />}
              title="Secure Platform"
              description="Your funds and data are protected with state-of-the-art security."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-900 text-gray-300 py-8 px-6 border-t border-blue-700">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-lg font-bold mb-4 md:mb-0">Battery Bet &copy; 2023</div>
          <nav className="flex gap-6">
            <a href="#" className="hover:text-yellow-300 transition duration-300">About Us</a>
            <a href="#" className="hover:text-yellow-300 transition duration-300">Terms of Service</a>
            <a href="#" className="hover:text-yellow-300 transition duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-yellow-300 transition duration-300">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-indigo-800 rounded-lg p-6 text-center hover:bg-indigo-700 transition duration-300">
    <div className="mb-4 flex justify-center">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

export default LandingPage;
