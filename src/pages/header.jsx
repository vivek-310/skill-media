import React from "react";
import BettingInterface from "../components/BettingInterface";

const BettingGameInterface = () => {
    return (
        <div className="min-h-screen bg-purple-950 text-white">
            {/* Header */}
            <header className="bg-purple-950 flex justify-between items-center border-b-[1px] border-purple-700">
                <div className="text-lg font-bold">Battery Bet</div>
                <nav className="flex space-x-6 text-white">
                    <div className="hover:bg-purple-800 inline-block">
                        <a href="#cricket">CRICKET</a>
                    </div>
                    <div className="hover:bg-purple-800">
                        <a href="#casino" >SPORT</a>
                    </div>
                    <div className="hover:bg-purple-800">
                        <a href="#live" >LIVE EVENTS</a>
                    </div>
                    <div className="hover:bg-purple-800">
                        <a href="#promo" >CASINO</a>
                    </div>
                    <div className="hover:bg-purple-800">
                        <a href="#promo" >LIVE CASINO</a>
                    </div>
                    <div className="hover:bg-purple-800">
                        <a href="#promo" >STATISTICS</a>
                    </div>
                    <div className="hover:bg-purple-800">
                        <a href="#promo" >RESULTS</a>
                    </div>
                    <div className="hover:bg-purple-800">
                        <a href="#promo" >APPS</a>
                    </div>
                </nav>
                <div className="flex space-x-4">
                    <button className="bg-yellow-500 text-black px-4 py-2 rounded">Log In</button>
                    <button className="bg-red-600 px-4 py-2 rounded">Join Now</button>
                </div>
            </header>

            {/* Main Content */}
            <div className="flex flex-col lg:flex-row">
                {/* Sidebar */}
                <aside className="bg-purple-950 p-4 lg:w-1/4">
                    <h2 className="text-lg font-bold mb-4">Recommended Games</h2>
                    <ul className="space-y-2">
                        <li className="bg-purple-700 p-2 rounded hover:bg-purple-600">Aviator</li>
                        <li className="bg-purple-700 p-2 rounded hover:bg-purple-600">JetX</li>
                        <li className="bg-purple-700 p-2 rounded hover:bg-purple-600">Burning Wins</li>
                        <li className="bg-purple-700 p-2 rounded hover:bg-purple-600">Stock Market</li>
                    </ul>
                </aside>

                {/* Main Game Display */}
                <main className="flex-1 bg-purple-950 p-4">
                    {/* Game Title */}
                    <div className="flex justify-between items-center">
                        <h1 className="text-xl font-bold">Aviator (Demo)</h1>
                        <button className="bg-yellow-500 px-4 py-2 rounded text-black">How to Play?</button>
                    </div>

                    {/* Chart */}
                    <div className="bg-purple-700 mt-4 p-4 rounded h-64 flex items-center justify-center">
                        <span className="text-3xl font-bold">4.41x</span>
                    </div>

                    {/* Betting Section */}
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <BettingInterface/>
                        <div className="bg-gray-700 p-4 rounded">
                            <h2 className="font-bold mb-2">Auto Bet</h2>
                            <div className="flex space-x-2">
                                <button className="bg-yellow-500 px-4 py-2 rounded text-black">500 INR</button>
                                <button className="bg-yellow-500 px-4 py-2 rounded text-black">1000 INR</button>
                            </div>
                            <button className="bg-green-500 w-full mt-2 px-4 py-2 rounded">Auto Bet</button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default BettingGameInterface;
