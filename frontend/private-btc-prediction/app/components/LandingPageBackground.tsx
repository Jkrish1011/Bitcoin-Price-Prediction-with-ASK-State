import React from 'react'

import FaultyTerminal from './(reactbits)/FaultyTerminal'

const LandingPage = () => {
  return (
    <div className='w-full h-screen'>
        <FaultyTerminal
            scale={1.5}
            gridMul={[2, 1]}
            digitSize={1.2}
            timeScale={1}
            pause={false}
            scanlineIntensity={1}
            glitchAmount={1}
            flickerAmount={1}
            noiseAmp={1}
            chromaticAberration={0}
            dither={0}
            curvature={0}
            tint="#fff"
            mouseReact={true}
            mouseStrength={0.5}
            pageLoadAnimation={true}
            brightness={0.2}
        />
    </div>
  )
}

export default LandingPage