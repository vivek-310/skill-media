'use client'

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Menu, HelpCircle, Volume2, VolumeX,Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';


const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 400;
const PLANE_SIZE = 60;

export default function AviatorGame() {
  const [balance, setBalance] = useState(5000.0);
  const [betAmounts, setBetAmounts] = useState([10.0, 10.0]);
  const [currentMultiplier, setCurrentMultiplier] = useState(1.0);
  const [isGameRunning, setIsGameRunning] = useState(false);
  const [gameHistory, setGameHistory] = useState([]);
  const [activeBets, setActiveBets] = useState([null, null]);
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);
  const [showCrashAnimation, setShowCrashAnimation] = useState(false);


  const [toggleOption, setToggleOption] = useState(false);//toggle in the menu
  const [togglesound,setTogglesound]=useState(false);
  const [toggleanimation,setToggleanimation]=useState(false);


  const canvasRef = useRef(null);
  const planeRef = useRef(null);
  const audioRef = useRef(null);
  const animationRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen((prev) => !prev);
  };
  


  useEffect(() => {
    const planeImage = new Image();
    planeImage.src = '/plane.png';
    planeImage.crossOrigin = 'anonymous';
    planeImage.onload = () => {
      planeRef.current = planeImage;
    };
  }, []);

  const drawPlane = useCallback((ctx, progress, isCrashed = false) => {
    if (!planeRef.current) return;

    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    
    // Draw attractive flight curve
    ctx.beginPath();
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 3;
    ctx.moveTo(0, CANVAS_HEIGHT);
    
    for (let x = 0; x <= progress * CANVAS_WIDTH; x++) {
      const normalizedX = x / CANVAS_WIDTH;
      const y = CANVAS_HEIGHT - (Math.sin(normalizedX * Math.PI) * CANVAS_HEIGHT * 0.8);
      ctx.lineTo(x, y);
    }
    ctx.stroke();

    // Calculate plane position
    const x = progress * CANVAS_WIDTH;
    const y = CANVAS_HEIGHT - (Math.sin(progress * Math.PI) * CANVAS_HEIGHT * 0.8);
    
    ctx.save();
    ctx.translate(x, y);
    
    // Rotate plane based on trajectory
    const angle = isCrashed ? Math.PI / 2 : Math.atan2(
      (Math.sin((progress + 0.01) * Math.PI) - Math.sin(progress * Math.PI)) * CANVAS_HEIGHT * 0.8,
      0.01 * CANVAS_WIDTH
    );
    ctx.rotate(-angle);
    
    ctx.drawImage(
      planeRef.current,
      -PLANE_SIZE / 2,
      -PLANE_SIZE / 2,
      PLANE_SIZE,
      PLANE_SIZE
    );
    
    ctx.restore();
  }, []);

  const startGame = useCallback(() => {
    if (!activeBets.some(bet => bet !== null)) return;

    setIsGameRunning(true);
    setCurrentMultiplier(1.0);
    setShowCrashAnimation(false);

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let progress = 0;
    let crashed = false;

    const animate = (timestamp) => {
      if (!canvas) return;

      progress += 0.005;
      const multiplier = 1 + (Math.sin(progress * Math.PI / 2) * 9); // Max multiplier of 10
      setCurrentMultiplier(parseFloat(multiplier.toFixed(2)));

      // Check for crash
      if (Math.random() < 0.01 || multiplier > 10) {
        crashed = true;
        setIsGameRunning(false);
        setShowCrashAnimation(true);
        setGameHistory(prev => [multiplier, ...prev].slice(0, 10));
        if (isSoundEnabled && audioRef.current) {
          audioRef.current.play();
        }
        drawPlane(ctx, progress, true);
        setActiveBets([null, null]);
        return;
      }

      drawPlane(ctx, progress, crashed);

      if (!crashed) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  }, [drawPlane, isSoundEnabled, activeBets]);

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const handleBetClick = (panelIndex) => {
    if (balance >= betAmounts[panelIndex] && !isGameRunning) {
      setBalance(prev => prev - betAmounts[panelIndex]);
      setActiveBets(prev => {
        const newBets = [...prev];
        newBets[panelIndex] = betAmounts[panelIndex];
        return newBets;
      });
    }
  };

  const handleCashOut = (panelIndex) => {
    if (activeBets[panelIndex] && isGameRunning) {
      const winnings = activeBets[panelIndex] * currentMultiplier;
      setBalance(prev => prev + winnings);
      setActiveBets(prev => {
        const newBets = [...prev];
        newBets[panelIndex] = null;
        return newBets;
      });
    }
  };

  const handleAmountChange = (value, panelIndex) => {
    setBetAmounts(prev => {
      const newAmounts = [...prev];
      newAmounts[panelIndex] = Math.max(0, Math.min(value, balance));
      return newAmounts;
    });
  };



/*  ...........................for understanding the flow........................................*/
const renderBettingPanel = (panelIndex) => {
  const [isAutoBet, setIsAutoBet] = React.useState(false); // State to toggle Auto Bet popup

  return (
    <div className="bg-[#111827] p-6 rounded-lg relative">
      <div className="flex flex-col gap-4">
        {/* Bet and Auto Bet Buttons */}
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <button
              className="bg-[#4caf50] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#45a049] transition-colors"
              onClick={() => setIsAutoBet(false)}
            >
              Bet
            </button>
            <button
              className="bg-[#ffc107] text-black px-4 py-2 rounded-lg font-semibold hover:bg-[#ffca28] transition-colors"
              onClick={() => setIsAutoBet(true)}
            >
              Auto Bet
            </button>
          </div>
        </div>

        {/* Auto Bet Popup */}
        {isAutoBet && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
            <div className="bg-[#232736] p-8 rounded-xl shadow-2xl text-white w-96 relative">
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 bg-red-500 text-white w-8 h-8 flex items-center justify-center rounded-full hover:bg-red-600"
                onClick={() => setIsAutoBet(false)}
              >
                X
              </button>
              <h3 className="text-xl font-bold mb-6">Auto Play Options</h3>
              <div className="flex flex-col gap-5">
                <div>
                  <label className="block text-sm font-semibold mb-2">Number of Rounds:</label>
                  <div className="flex gap-3">
                    {[10, 20, 50, 100].map((rounds) => (
                      <button
                        key={rounds}
                        className="bg-yellow-500 text-black py-2 px-4 rounded-lg hover:bg-yellow-400"
                        onClick={() => console.log(`Rounds set to ${rounds}`)}
                      >
                        {rounds}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Stop if cash decreases by:
                  </label>
                  <input
                    type="number"
                    placeholder="Enter amount"
                    className="w-full bg-[#111827] p-3 rounded-lg text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Stop if cash increases by:
                  </label>
                  <input
                    type="number"
                    placeholder="Enter amount"
                    className="w-full bg-[#111827] p-3 rounded-lg text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Stop if single win exceeds:
                  </label>
                  <input
                    type="number"
                    placeholder="Enter amount"
                    className="w-full bg-[#111827] p-3 rounded-lg text-white"
                  />
                </div>
              </div>
              <div className="flex justify-between items-center mt-8">
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
                  onClick={() => setIsAutoBet(false)}
                >
                  Cancel
                </button>
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                  onClick={() => {
                    console.log('Auto Bet Configured');
                    setIsAutoBet(false);
                  }}
                >
                  Start Auto Bet
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Betting Inputs and Buttons */}

        <div className="flex gap-2">
          <button
            className="w-10 h-10 bg-[#2c3140] rounded-md text-xl font-bold hover:bg-[#3a3f50]"
            onClick={() => handleAmountChange(betAmounts[panelIndex] - 10, panelIndex)}
          >
            -
          </button>
          <input
            type="number"
            value={betAmounts[panelIndex]}
            onChange={(e) => handleAmountChange(parseFloat(e.target.value) || 0, panelIndex)}
            className="flex-1 bg-[#2c3140] text-white rounded-md text-center text-xl p-2"
          />
          <button
            className="w-10 h-10 bg-[#2c3140] rounded-md text-xl font-bold hover:bg-[#3a3f50]"
            onClick={() => handleAmountChange(betAmounts[panelIndex] + 10, panelIndex)}
          >
            +
          </button>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {[100, 200, 500, 1000].map((amount) => (
            <button
              key={amount}
              className="bg-[#2c3140] py-2 rounded-md text-sm hover:bg-[#3a3f50] transition-colors"
              onClick={() => handleAmountChange(amount, panelIndex)}
            >
              {amount.toFixed(2)}
            </button>
          ))}
        </div>

        {activeBets[panelIndex] ? (
          <button
            onClick={() => handleCashOut(panelIndex)}
            className="w-full py-3 bg-[#ffc107] text-black rounded-md text-lg font-bold hover:bg-[#ffca28] transition-colors"
            disabled={!isGameRunning}
          >
            CASH OUT {(activeBets[panelIndex] * currentMultiplier).toFixed(2)} INR
          </button>
        ) : (
          <button
            onClick={() => handleBetClick(panelIndex)}
            className="w-full py-3 bg-[#4caf50] text-white rounded-md text-lg font-bold hover:bg-[#45a049] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isGameRunning}
          >
            {isGameRunning ? 'GAME IN PROGRESS' : `BET ${betAmounts[panelIndex].toFixed(2)} INR`}
          </button>
        )}
      </div>
    </div>
  );
};



  return (
    <div className="max-h-[125vh] overflow-hidden bg-[#1a1d29] text-white font-sans min-h-screen">
      <audio ref={audioRef} src="/crash-sound.mp3" />
      
      <header className="flex items-center justify-between p-4 bg-[#232736]">
      <div className="flex items-center gap-4">
          <div className="text-[#ff4d4d] font-bold text-2xl">Aviator</div>
          <button className="px-3 py-1 text-sm border border-[#3a3f50] rounded-md flex items-center gap-2 hover:bg-[#2c3140]">
            <HelpCircle className="w-4 h-4" />
            How to play?
          </button>
        </div>
        <div className='flex flex-row gap-4'>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsSoundEnabled(!isSoundEnabled)}
            className="text-[#8c91a7] hover:text-white"
          >
            {isSoundEnabled ? <Volume2 className="w-6 h-6" /> : <VolumeX className="w-6 h-6" />}
          </button>
          <div className="text-[#00ff00] font-mono text-xl">
            {balance.toFixed(2)} <span className="text-sm">INR</span>
          </div>
          </div>
        <div className="relative">
          <button
            onClick={handleMenuToggle}
            className="text-[#8c91a7] hover:text-white"
          >
            <Menu className="w-6 h-6" />
          </button>
          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-gray-800 text-white shadow-lg rounded-md py-2 z-10">
              <a
                href="#profile"
                className="block px-4 py-2 hover:bg-gray-900 transition"
              >
                My Profile
              </a>
              <div className="px-4 py-2 flex items-center justify-between">
                <span>Sound</span>
                <button
                  className={`w-10 h-6 flex p-1 items-center rounded-full transition ${
                    toggleOption ? 'bg-green-500' : 'bg-gray-300'
                  }`}
                  onClick={() => setToggleOption(!toggleOption)}
                >
                  <span
                    className={`block w-4 h-4 bg-white rounded-full transition-transform ${
                      toggleOption ? 'translate-x-4' : 'translate-x-0'
                    }`}
                  ></span>
                </button>
              </div>
              <div className="px-4 py-2 flex items-center justify-between">
                <span>Music</span>
                <button
                  className={`w-10 h-6 flex p-1 items-center rounded-full transition ${
                    togglesound ? 'bg-green-500' : 'bg-gray-300'
                  }`}
                  onClick={() => setTogglesound(!togglesound)}
                >
                  <span
                    className={`block w-4 h-4 bg-white rounded-full transition-transform ${
                      togglesound ? 'translate-x-4' : 'translate-x-0'
                    }`}
                  ></span>
                </button>
              </div>
              <a
            href="#settings"
            className="block px-4 py-2  hover:bg-gray-900 transition"
          >
              <div className='flex flex-row gap-2  display-inline-block'>
            <Star className='w-5 h-5 '/>
            Free Bets
          </div>
          </a>
          
          <a
            href="#logout"
            className="block px-4 py-2 hover:bg-gray-900 transition"
          >
            Bet History
          </a>
          <a
            href="#settings"
            className="block px-4 py-2  hover:bg-gray-900 transition"
          >
            Game Limits
          </a>
          <a
            href="#settings"
            className="block px-4 py-2  hover:bg-gray-900 transition"
          >
            How to Play
          </a>

            </div>
          )}
          </div>
        </div>
      </header>

      <main className="p-6">
        <div className="flex gap-2 overflow-x-auto py-2 mb-4">
          {gameHistory.map((multiplier, index) => (
            <div
              key={index}
              className={`font-mono whitespace-nowrap px-2 py-1 rounded ${
                multiplier >= 2 ? 'bg-[#1c7857] text-[#00ff00]' : 'bg-[#78242e] text-[#ff4d4d]'
              }`}
            >
              {multiplier.toFixed(2)}x
            </div>
          ))}
        </div>

        <div className="relative w-full h-[50vh] bg-[#232736] rounded-lg overflow-hidden mb-4">
          <canvas
            ref={canvasRef}
            width={CANVAS_WIDTH}
            height={CANVAS_HEIGHT}
            className="absolute inset-0 w-full h-full"
          />
          <AnimatePresence>
            {showCrashAnimation && (
              <motion.div
                initial={{ scale: 1, opacity: 1 }}
                animate={{ scale: 2, opacity: 0 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center justify-center text-[#ff4d4d] text-6xl font-bold"
              >
                CRASHED AT {currentMultiplier.toFixed(2)}x
              </motion.div>
            )}
          </AnimatePresence>
          <div className="absolute top-4 left-4 text-4xl font-bold">
            {currentMultiplier.toFixed(2)}x
          </div>
        </div>

        {!isGameRunning && activeBets.some(bet => bet !== null) && (
          <button
            onClick={startGame}
            className="w-full py-3 bg-[#4caf50] text-white rounded-md text-lg font-bold hover:bg-[#45a049] transition-colors mb-4"
          >
            START GAME
          </button>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[0, 1].map((index) => renderBettingPanel(index))}
        </div>
      </main>
    </div>
  );
}

