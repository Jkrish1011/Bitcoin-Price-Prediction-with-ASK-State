import React from 'react';
import { Orbitron } from 'next/font/google';
import ScrambledText from './(reactbits)/ScrambledText';
import TextType from './(reactbits)/TextType';

const orbitron = Orbitron({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-orbitron',
});

const LandingPage = () => {
  return (
    <div className={`${orbitron.variable} font-sans relative min-h-screen flex items-center justify-center px-4 sm:px-8 lg:px-12 z-10 overflow-hidden`}>
      <div className="max-w-7xl mx-auto w-full text-center relative">
        {/* Animated gradient background effect */}
        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-transparent blur-3xl" />
        
        <div className="relative">
          <h1 className="font-mono text-5xl sm:text-7xl md:text-8xl font-bold text-white mb-8 leading-tight tracking-tighter animate-fade-in-up">
            BET ON THE FUTURE,
            {/* <span className="block mt-2 md:mt-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-purple-500 animate-gradient-shift bg-300% animate-duration-8s">
              PRIVATELY
            </span> */}
          </h1>
          <h1 className="font-mono text-5xl sm:text-7xl md:text-8xl font-bold text-white mb-8 leading-tight tracking-tighter animate-fade-in-up">
            <TextType 
                text={["PRIVATELY", "SECURELY", "ANONYMOUSLY"]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
                />
            {/* <span className="block mt-2 md:mt-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-purple-500 animate-gradient-shift bg-300% animate-duration-8s">
              PRIVATELY
            </span> */}
          </h1>
          
          <div className="w-full max-w-3xl mx-auto mb-12">
            <ScrambledText
              className="text-lg sm:text-xl md:text-2xl text-gray-300/90 font-mono tracking-wide leading-relaxed"
              radius={60}
              duration={1.2}
              speed={0.5}
              scrambleChars=":.-"
            >
              Place private, secure predictions on Bitcoin's future using cutting-edge cryptography, with complete anonymity and no middlemen.
            </ScrambledText>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            
            
            <button 
              className="group relative overflow-hidden font-mono bg-transparent hover:bg-white/5 text-cyan-300 font-medium py-4 px-8 rounded-full text-base tracking-wider transition-all duration-300 border border-cyan-500/30 hover:border-cyan-400/50 backdrop-blur-sm"
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>START PREDICTING</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;