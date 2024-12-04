'use client' // Ensures this runs client-side for interactive UI elements
import React, { useState } from 'react';
import { Menu, HelpCircle } from 'lucide-react';
export default function AviatorGame() {
  const [balance, setBalance] = useState(5000.0); // Default balance
  const [betAmount, setBetAmount] = useState(10.0); // Default bet amount
  const multipliers = [
    '3.79x', '1.19x', '3.04x', '1.07x', '2.28x', '1.82x', '1.34x', '1.32x', '1.25x', '1.34x', '1.82x', '1.24x', '1.00x',
  ];
  // Handle bet placement (to be securely handled via backend API in production)
  const handleBetClick = async () => {
    try {
      // Example POST request (replace with actual API endpoint)
      const response = await fetch(`$/place-bet`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ betAmount }),
      });
      if (!response.ok) throw new Error('Bet placement failed');
      console.log('Bet placed successfully:', betAmount);
    } catch (error) {
      console.error('Error placing bet:', error.message);
    }
  };
  // Handle input validation for the bet amount
  const handleAmountChange = (value) => {
    setBetAmount(Math.max(0, value)); // Ensure bet amount is non-negative
  };
  return (
    <div className="max-h-screen overflow-hidden">

    <div className="bg-black text-white font-sans">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b border-gray-800">
        <div className="flex items-center gap-4">
          <div className="text-red-500 font-bold text-2xl">Aviator</div>
          <button className="px-3 py-1 text-sm border border-gray-600 rounded-md flex items-center gap-2 hover:bg-gray-800">
            <HelpCircle className="w-4 h-4" />
            How to play?
          </button>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-green-500 font-mono text-xl">
            {balance.toFixed(2)} <span className="text-sm">INR</span>
          </div>
          <button className="text-gray-400 hover:text-white">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>
      {/* Main Section */}
      <main className="p-4">
        {/* Multipliers */}
        <div className="flex gap-2 overflow-x-auto py-2 mb-4">
          {multipliers.map((multiplier, index) => (
            <div
              key={index}
              className={`font-mono whitespace-nowrap ${index % 2 === 0 ? 'text-blue-400' : 'text-purple-500'}`}
            >
              {multiplier}
            </div>
          ))}
        </div>
        {/* Bet Details */}
        <div className="flex justify-between mb-4">
          <div className="text-sm text-gray-400">ALL BETS</div>
          <button className="text-sm text-gray-400 hover:text-white">Previous hand</button>
        </div>
        {/* Game Animation Placeholder */}
        <div className="relative w-full h-[40vh] bg-gray-900 rounded-lg overflow-hidden mb-4">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)]" />
          <div className="absolute left-1/2 bottom-1/4 transform -translate-x-1/2 text-red-500">
            <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22 16.5L12 23L2 16.5V7.5L12 1L22 7.5V16.5Z" />
            </svg>
          </div>
        </div>
        {/* Betting Panels */}
        <div className="grid grid-cols-2 gap-4">
          {[1, 2].map((panel) => (
            <div key={panel} className="bg-gray-900 p-4 rounded-lg">
              {/* Panel Header */}
              <div className="flex justify-between mb-4">
                <button className="text-sm text-gray-400 hover:text-white">Bet</button>
                <button className="text-sm text-gray-400 hover:text-white">Auto</button>
              </div>
              {/* Bet Amount Adjuster */}
              <div className="flex gap-2 mb-4">
                <button
                  className="w-10 h-10 bg-gray-800 rounded-md text-xl font-bold"
                  onClick={() => handleAmountChange(betAmount - 10)}
                >
                  -
                </button>
                <input
                  type="number"
                  value={betAmount}
                  onChange={(e) => handleAmountChange(parseFloat(e.target.value) || 0)}
                  className="flex-1 bg-gray-800 rounded-md text-center text-xl"
                />
                <button
                  className="w-10 h-10 bg-gray-800 rounded-md text-xl font-bold"
                  onClick={() => handleAmountChange(betAmount + 10)}
                >
                  +
                </button>
              </div>
              {/* Quick Bet Amounts */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                {[100, 200, 500, 1000].map((amount) => (
                  <button
                  key={amount}
                  className="bg-gray-800 py-1 rounded-md text-sm"
                  onClick={() => handleAmountChange(amount)}
                  >
                    {amount.toFixed(2)}
                  </button>
                ))}
              </div>
              {/* Bet Button */}
              <button
                onClick={handleBetClick}
                className="w-full py-2 bg-green-600 rounded-md text-lg font-bold hover:bg-green-700"
              >
                BET {betAmount.toFixed(2)} INR
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
    </div>
  );
}
