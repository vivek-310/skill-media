import React from "react";
import AviatorGame from "../components/AviatorGame";
import BetHistory from "../components/BetHistory";
import { Trophy, ChevronRight, Star, Users, Shield } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-customDark to-[#1F2937] text-white">
      {/* Header */}
      <header className="bg-black/10 backdrop-blur-md fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-4 px-6 border-b-2 border-white/20 shadow-lg">
        <div className="text-2xl font-bold text-yellow-300">Skills-Media</div>
        
        <div className="flex space-x-4">
          <button className="bg-yellow-500 text-black px-6 py-2 rounded-lg font-semibold hover:bg-[#E69308]  transition duration-300">Log In</button>
          <button className="bg-red-600 px-6 py-2 rounded-lg font-semibold hover:bg-red-500 transition duration-300 ">Join Now</button> {/* animate-bounce */}
        </div>
      </header>

     
      {/* Hero Section */}
      <section className="pt-24 pb-10 px-6 bg-gradient-to-b from-gray-900 to-[#111827] text-center">
  <div className="container mx-auto">
    {/* Title */}
    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-yellow-400 tracking-wide drop-shadow-lg">
      Welcome to Skills-Media
    </h1>
    
    {/* Subtitle */}
    <p className="text-lg md:text-2xl mb-10 text-gray-300 max-w-2xl mx-auto">
      Experience the thrill of betting with unmatched excitement and rewards!
    </p>

    {/* Call-to-Action Button */}
    <button className="bg-green-500  text-gray-900 px-10 py-4 rounded-lg text-lg font-bold shadow-lg hover:scale-105 hover:from-green-400 hover:to-green-300 transition-transform duration-300">  {/* animate-bounce */}
      Start Betting Now
    </button>

    {/* Decorative Elements */}
   
  </div>
</section>


      {/* Main Content */}
      <div className="container mx-auto px-8 py-4">
        <div className="bg-indigo-800 rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row justify-between p-6 bg-orange-500">
            <div className="text-2xl font-bold mb-4 md:mb-0">Aviator (Demo)</div>
            <div className="flex gap-4">
              <button className="bg-blue-800 rounded-lg px-4 py-2 flex items-center gap-2 hover:bg-blue-500 transition duration-300">
                <Trophy className="w-5 h-5" />
                Tournament
              </button>
              <button className="bg-black text-white rounded-lg px-4 py-2 font-semibold hover:bg-white hover:text-black  transition duration-300">
                Play for Money
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-3 p-6 bg-black ">
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
      <section className="py-12 px-6 bg-gray-900">
  <div className="container mx-auto">
    <h2 className="text-3xl font-bold mb-8 text-center text-yellow-400">
      Why Choose Slills-Media ?
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Card 1 */}
      <div className="bg-gray-800 rounded-lg shadow-lg p-6 text-center transition transform hover:scale-105 hover:shadow-xl">
        <div className="flex items-center justify-center mb-4">
          <Star className="w-10 h-10 text-yellow-400" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">Best Odds</h3>
        <p className="text-gray-400">
          We offer the most competitive odds in the market.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-gray-800 rounded-lg shadow-lg p-6 text-center transition transform hover:scale-105 hover:shadow-xl">
        <div className="flex items-center justify-center mb-4">
          <Users className="w-10 h-10 text-teal-400" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">Active Community</h3>
        <p className="text-gray-400">
          Join thousands of active bettors and share strategies.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-gray-800 rounded-lg shadow-lg p-6 text-center transition transform hover:scale-105 hover:shadow-xl">
        <div className="flex items-center justify-center mb-4">
          <Shield className="w-10 h-10 text-green-400" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">Secure Platform</h3>
        <p className="text-gray-400">
          Your funds and data are protected with state-of-the-art security.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="bg-[#FFC107] text-black py-8 px-6 border-t border-blue-700">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-lg font-bold mb-4 md:mb-0">Skills-Media &copy; 2023</div>
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
