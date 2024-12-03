import React, { useState } from 'react';

function BettingInterface() {
    const [betAmount, setBetAmount] = useState(10);

    const handleBetClick = () => {
        // Handle bet logic here, e.g., send bet amount to server
        console.log('Bet placed for:', betAmount);
    };

    const handleAmountChange = (value) => {
        setBetAmount(value);
    };

    return (
        <div className="bg-black text-white">
            <div className="flex justify-center items-center">
                <button className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded">Bet</button>
                <button className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded ml-4">Auto</button>
            </div>
            <div className='flex'>
                <div>

                    <div className="flex justify-center items-center mt-4">
                        <button onClick={() => handleAmountChange(betAmount - 10)} className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded">-</button>
                        <input type="number" value={betAmount} onChange={(e) => handleAmountChange(parseInt(e.target.value))} className="bg-gray-800 border border-gray-700 px-4 py-2 rounded text-center w-24" />
                        <button onClick={() => handleAmountChange(betAmount + 10)} className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded">+</button>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <button onClick={() => handleAmountChange(100)} className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded">100.00</button>
                        <button onClick={() => handleAmountChange(200)} className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded">200.00</button>
                        <button onClick={() => handleAmountChange(500)} className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded">500.00</button>
                        <button onClick={() => handleAmountChange(1000)} className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded">1,000.00</button>
                    </div>
                </div>
            <div>
                <button onClick={handleBetClick} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-4">
                    BET
                    <br />
                    {betAmount}.00 INR
                </button>
            </div>
            </div>
        </div>
    );
}

export default BettingInterface;