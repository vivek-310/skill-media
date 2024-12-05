'use client'
import { useState } from 'react'
import { History, Lock, HelpCircle, Star, User2 } from 'lucide-react'
import { Switch } from "@/components/ui/switch"
export default function GameMenu() {
  const [settings, setSettings] = useState({
    sound: true,
    music: true,
    animation: true
  })
  return (
    <div className="bg-gray-900 text-white min-h-screen w-[280px]">
      <div className="p-4 border-b border-gray-800">
        <div className="text-green-500 text-right text-xl font-mono mb-4">
          5,000.00 <span className="text-sm">INR</span>
        </div>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
            <User2 className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <div className="text-lg">d***6</div>
          </div>
          <button className="text-xs text-gray-400 hover:text-white flex items-center gap-1">
            <User2 className="w-4 h-4" />
            Change Avatar
          </button>
        </div>
      </div>
      <div className="p-4 space-y-4">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-gray-300">Sound</span>
            </div>
            <Switch
              checked={settings.sound} 
              onCheckedChange={(checked) => setSettings(prev => ({ ...prev, sound: checked }))}
              className="data-[state=checked]:bg-green-500"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-gray-300">Music</span>
            </div>
            <Switch
              checked={settings.music}
              onCheckedChange={(checked) => setSettings(prev => ({ ...prev, music: checked }))}
              className="data-[state=checked]:bg-green-500"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-gray-300">Animation</span>
            </div>
            <Switch
              checked={settings.animation}
              onCheckedChange={(checked) => setSettings(prev => ({ ...prev, animation: checked }))}
              className="data-[state=checked]:bg-green-500"
            />
          </div>
        </div>
        <div className="space-y-2 pt-4">
          <button className="w-full text-left px-2 py-3 text-gray-300 hover:text-white flex items-center gap-3">
            <Star className="w-5 h-5" />
            Free Bets
          </button>
          <button className="w-full text-left px-2 py-3 text-gray-300 hover:text-white flex items-center gap-3">
            <History className="w-5 h-5" />
            My Bet History
          </button>
          <button className="w-full text-left px-2 py-3 text-gray-300 hover:text-white flex items-center gap-3">
            <Lock className="w-5 h-5" />
            Game Limits
          </button>
          <button className="w-full text-left px-2 py-3 text-gray-300 hover:text-white flex items-center gap-3">
            <HelpCircle className="w-5 h-5" />
            How To Play
          </button>
        </div>
      </div>
    </div>
  )
}