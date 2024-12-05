'use client'

import { useState } from 'react'
import { History } from 'lucide-react'

export default function BetHistory() {
  const [activeTab, setActiveTab] = useState('all')

  const allBets = [
    { user: 'User 1', bet: 500, multiplier: 2.0, cashOut: 1000, image: 'https://via.placeholder.com/40/1abc9c' },
    { user: 'User 2', bet: 300, multiplier: 1.5, cashOut: 450, image: 'https://via.placeholder.com/40/3498db' },
    { user: 'User 3', bet: 100, multiplier: 1.2, cashOut: 120, image: 'https://via.placeholder.com/40/e74c3c' },
    { user: 'User 4', bet: 200, multiplier: 1.7, cashOut: 340, image: 'https://via.placeholder.com/40/f1c40f' },
    { user: 'User 5', bet: 400, multiplier: 2.5, cashOut: 1000, image: 'https://via.placeholder.com/40/8e44ad' },
    { user: 'User 6', bet: 250, multiplier: 1.9, cashOut: 475, image: 'https://via.placeholder.com/40/2ecc71' },
    { user: 'User 7', bet: 800, multiplier: 3.0, cashOut: 2400, image: 'https://via.placeholder.com/40/34495e' },
    { user: 'User 8', bet: 350, multiplier: 1.3, cashOut: 455, image: 'https://via.placeholder.com/40/16a085' },
    { user: 'User 9', bet: 600, multiplier: 2.2, cashOut: 1320, image: 'https://via.placeholder.com/40/27ae60' },
    { user: 'User 5', bet: 400, multiplier: 2.5, cashOut: 1000, image: 'https://via.placeholder.com/40/8e44ad' },
    { user: 'User 6', bet: 250, multiplier: 1.9, cashOut: 475, image: 'https://via.placeholder.com/40/2ecc71' },
    { user: 'User 7', bet: 800, multiplier: 3.0, cashOut: 2400, image: 'https://via.placeholder.com/40/34495e' },
    { user: 'User 8', bet: 350, multiplier: 1.3, cashOut: 455, image: 'https://via.placeholder.com/40/16a085' },
    { user: 'User 9', bet: 600, multiplier: 2.2, cashOut: 1320, image: 'https://via.placeholder.com/40/27ae60' },
    { user: 'User 10', bet: 750, multiplier: 1.7, cashOut: 355, image: 'https://via.placeholder.com/40/34495e' },
    
   
    
  ]

  const myBets = [
    { user: 'You', bet: 100, multiplier: 1.0, cashOut: 100, image: 'https://via.placeholder.com/40/ffffff' },
  ]

  const topBets = [
    { user: 'Top User', bet: 1000, multiplier: 3.0, cashOut: 3000, image: 'https://via.placeholder.com/40/000000' },
  ]

  const getTabData = () => {
    if (activeTab === 'all') return allBets
    if (activeTab === 'my') return myBets
    if (activeTab === 'top') return topBets
    return []
  }

  return (
    <div className="relative w-full bg-gray-900 text-white min-h-[115vh] ">
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-800">
        <div className="flex gap-4">
          {['all', 'my', 'top'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm rounded-md transition-colors ${
                activeTab === tab
                  ? 'bg-gray-800 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {tab === 'all' && 'All Bets'}
              {tab === 'my' && 'My Bets'}
              {tab === 'top' && 'Top'}
            </button>
          ))}
        </div>
        <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-white">
          <History className="w-4 h-4" />
          Previous hand
        </button>
      </div>

      <div className="grid grid-cols-4 px-4 py-2 text-sm text-gray-400 border-b border-gray-800">
        <div>User</div>
        <div className="text-right">Bet INR</div>
        <div className="text-center">X</div>
        <div className="text-right">Cash out INR</div>
      </div>

      <div className="overflow-y-auto max-h-[1000px]">
        <table className="w-full text-sm text-gray-400">
          <tbody>
            {getTabData().map((item, index) => (
              <tr
                key={index}
                className={`border-b border-gray-800 ${
                  index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-900'
                }`}
              >
                <td className="px-4 py-2 flex items-center gap-2">
                  <img src={item.image} alt={item.user} className="w-6 h-6 rounded-full" />
                  {item.user}
                </td>
                <td className="px-4 py-2 text-right">{item.bet}</td>
                <td className="px-4 py-2 text-center">{item.multiplier}</td>
                <td className="px-4 py-2 text-right">{item.cashOut}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="absolute bottom-0 flex w-full items-center justify-between px-4 py-2 text-xs text-gray-400 border-t border-gray-800">
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
