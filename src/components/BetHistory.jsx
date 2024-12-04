'use client'
import { useState } from 'react'
import { History } from 'lucide-react'
export default function BetHistory() {
  const [activeTab, setActiveTab] = useState('all')
  return (
    <div className="relative w-full bg-gray-900 text-white min-h-screen">
      {/* Tabs */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-800">
        <div className="flex gap-4">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 text-sm rounded-md transition-colors ${
              activeTab === 'all'
                ? 'bg-gray-800 text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            All Bets
          </button>
          <button
            onClick={() => setActiveTab('my')}
            className={`px-4 py-2 text-sm rounded-md transition-colors ${
              activeTab === 'my'
                ? 'bg-gray-800 text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            My Bets
          </button>
          <button
            onClick={() => setActiveTab('top')}
            className={`px-4 py-2 text-sm rounded-md transition-colors ${
              activeTab === 'top'
                ? 'bg-gray-800 text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Top
          </button>
        </div>
        <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-white">
          <History className="w-4 h-4" />
          Previous hand
        </button>
      </div>
      {/* Table Header */}
      <div className="grid grid-cols-4 px-4 py-2 text-sm text-gray-400 border-b border-gray-800">
        <div>User</div>
        <div className="text-right">Bet INR</div>
        <div className="text-center">X</div>
        <div className="text-right">Cash out INR</div>
      </div>
      {/* Table Content */}
      <div className="overflow-y-auto">
        <h1>hello</h1>
        {/* Add your bet history items here */}
      </div>
      {/* Footer */}
      <div className=" absolute bottom-0 flex w-full items-center justify-between px-4 py-2 text-xs text-gray-400 border-t border-gray-800">
        <div className="flex items-center gap-2">
          <span>This game is</span>
          <div className="flex items-center gap-1 text-green-500">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            Provably Fair
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span>Powered by</span>
          <span className="font-bold">SPRIBE</span>
        </div>
      </div>
    </div>
  )
}