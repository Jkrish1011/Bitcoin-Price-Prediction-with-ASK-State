'use client'

import React from 'react'
import LandingPageBackground from './components/LandingPageBackground'
import {NavBar} from './components/NavBar'
import LandingPage from './components/LandingPage'

const page = () => {
  return (
        <div className="relative min-h-screen w-full overflow-hidden">
          {/* Background */}
          <div className="fixed inset-0 -z-10">
            <LandingPageBackground />
          </div>
          
          {/* Content */}
          <div className="relative z-10">
            <NavBar />
            <LandingPage />
          </div>
        </div>
  )
}

export default page