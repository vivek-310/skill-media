import React from "react";
import AviatorGame from "../components/AviatorGame";
import BetHistory from "../components/BetHistory";
import { Trophy } from 'lucide-react';


const  LandingPage= () => {

    return (
        <div className="min-h-screen bg-purple-950 text-white">
            {/* Header */}
            <header className="bg-purple-950 flex justify-between items-center border-b-[1px] border-purple-700">
                <div className="text-lg font-bold">Battery Bet</div>
                
                <div className="flex space-x-4">
                    <button className="bg-yellow-500 text-black px-4 py-2 rounded">Log In</button>
                    <button className="bg-red-600 px-4 py-2 rounded">Join Now</button>
                </div>
            </header>

            {/* Main Content */}
            <div className="flex flex-col items-center justify-center p-3 rounded-lg">
            <div className="flex flex-col justify-between bg-purple-900">

                <div className="flex flex-row justify-between p-2">

                    <div className="text-xl font-bold">Aviator(Demo)</div>
                    <div className="flex gap-2">
                        <button className="bg-blue-800 rounded-lg p-2 flex flex-row gap-1">
                            <Trophy className=" p-0 w-5 h-5" />
                            Tournament</button>
                        <button className="bg-yellow-500 rounded-lg p-2">Play for Money</button>
                    </div>
                </div>
                <div className="flex flex-row gap-2">
                    <div>
                        <BetHistory />
                    </div>
                    <div>
                        <AviatorGame />
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
