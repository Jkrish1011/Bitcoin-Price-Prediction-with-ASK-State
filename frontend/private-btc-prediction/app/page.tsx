'use client'

import React from 'react'
import LandingPageBackground from './components/LandingPageBackground'
import {NavBar} from './components/NavBar'
import LandingPage from './components/LandingPage'

const page = () => {
  return (
    <div className="relative min-h-screen w-full">
      {/* Background - Fixed and full viewport */}
      <LandingPageBackground />
      
      {/* Content - Relative container for the rest of the page */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-grow">
          <LandingPage />
        </main>
      </div>
    </div>
  )
}

export default page