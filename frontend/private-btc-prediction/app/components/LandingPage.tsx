import React from 'react';
import { Orbitron } from 'next/font/google';

const orbitron = Orbitron({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-orbitron',
});

const LandingPage = () => {
  return (
    <div className={`${orbitron.variable} font-sans relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 z-10`}>
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="font-mono text-6xl md:text-8xl font-bold text-white mb-6 leading-tight tracking-tighter">
          BET ON THE FUTURE, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">PRIVATELY</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto font-mono tracking-wide">
          Place private, secure predictions on Bitcoin's future using cutting-edge cryptography, with complete anonymity and no middlemen.
        </p>
        <div className="mt-10">
          <button className="font-mono bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg tracking-wider transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 border border-cyan-400/20 hover:border-cyan-400/40">
            START PREDICTING
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;