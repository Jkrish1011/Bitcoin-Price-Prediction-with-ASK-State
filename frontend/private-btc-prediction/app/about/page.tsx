import React from 'react';
import { Orbitron } from 'next/font/google';
import LandingPageBackground from '../components/LandingPageBackground';
import {NavBar} from '../components/NavBar';
import ScrambledText from '../components/(reactbits)/ScrambledText';

const orbitron = Orbitron({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-orbitron',
});

const AboutPage = () => {
  return (
    <>
    <div className="relative min-h-screen w-full overflow-hidden">
          {/* Background */}
          <div className="fixed inset-0 -z-10">
            <LandingPageBackground />
          </div>
          
          {/* Content */}
          <div className="relative z-10">
            <NavBar />
            <div className={`${orbitron.variable} font-sans min-h-screen flex items-center justify-center px-4 sm:px-8 lg:px-10`}>
                <div className="max-w-8xl mx-auto text-center">
                    <h1 className="font-mono text-6xl md:text-8xl font-bold text-white mb-8 leading-tight tracking-tighter">
                    ABOUT THE PROJECT
                    </h1>
                    
                    <div className="text-xl text-gray-300 space-y-6 text-left max-w-3xl mx-auto font-mono tracking-wide">
                    <ScrambledText
                        className="text-xl md:text-2xl text-gray-300 font-mono tracking-wide"
                        radius={50}
                        duration={1.2}
                        speed={0.5}
                        scrambleChars=":."
                    >
                    The "Private Prediction Oracle with ASK State Tracking" dApp enables users to place private bets on future events using Discreet Log Contracts (DLCs) on Bitcoin's testnet.
                    </ScrambledText>
                    <ScrambledText
                        className="text-xl md:text-2xl text-gray-300 font-mono tracking-wide"
                        radius={50}
                        duration={1.2}
                        speed={0.5}
                        scrambleChars=":."
                    >
                        DLCs provide conditional payments based on oracle outcomes, hidden via Taproot for privacy. An outsourced Anonymous Outsourced Statekeeping (ASK) module runs server-side to anonymously track bet histories and states.
                    </ScrambledText>
                    <ScrambledText
                        className="text-xl md:text-2xl text-gray-300 font-mono tracking-wide"
                        radius={50}
                        duration={1.2}
                        speed={0.5}
                        scrambleChars=":."
                    >
                        This project bridges Bitcoin's UTXO model with advanced cryptography, enabling private, secure predictions with complete anonymity.
                    </ScrambledText>
                    </div>
                </div>
            </div>
          </div>
        </div>
    </>
    
  );
};

export default AboutPage;