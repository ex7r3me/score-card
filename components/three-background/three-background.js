'use client'

import { useEffect, useRef, useContext } from 'react'
import { usePathname } from 'next/navigation'
import { Canvas } from "@react-three/fiber"
import { CameraControls, Environment } from "@react-three/drei"
import { Suspense } from "react"
import GolfWorld from '@/components/golf-world/golf-world'
import StreetLight from '@/components/street-light/street-light'
import { ThemeProvider, ThemeContext } from '@/context/theme-context'

const MainScene = () => {
  const pathname = usePathname()
  const cameraControlsRef = useRef()
  const { theme } = useContext(ThemeContext)
  
  useEffect(() => {
    switch(pathname) {
      case '/golf': 
        cameraControlsRef.current?.setLookAt(0, -0.2, -2, -1, -1.3, 4, true)
      break
      case '/yahtzee':
        cameraControlsRef.current?.setLookAt(0, -0.2, 0, 0, 1, 2, true)
      break
      case '/about':
        cameraControlsRef.current?.setLookAt(0, -0.4, 0, 0, 1, 3, true)
      break
      default:
        cameraControlsRef.current?.setLookAt(-1, -0.4, -3, 0, 0, 0, true)
      break
    }
  }, [pathname])

  return (
    <>
      {/* <Environment preset='night' background blur={0.2} /> */}
      <ambientLight visible={true} intensity={theme === 'light' ? 1 : 0.3} />
      <GolfWorld position={[0, -1.8, 0]} />
      <StreetLight on={theme === 'dark'} position={[1.1, -1, 1.1]} scale={0.15} rotation={[0, 2, 0]} />
      <StreetLight on={theme === 'dark'} position={[-1.5, -1, 1.2]} scale={0.15} rotation={[0, -1, 0]} />
      <CameraControls ref={cameraControlsRef} />
    </>
  )
}

export default function ThreeBackground() {
  const { theme } = useContext(ThemeContext)
  const themeClassnames = theme === 'light'
    ? 'bg-gradient-to-b from-sky-400 via-sky-200 to-green-100' 
    : 'bg-gradient-to-b from-black via-stone-700 via-stone-800 to-emerald-950'
  
  return (    
    <div className={'fixed z-0 top-0 left-0 w-full h-full '+themeClassnames}>
      <Canvas camera={{ position: [0, 20, -4], fov: 60 }} shadows>
        <Suspense fallback={null}>
          <MainScene />
        </Suspense>
      </Canvas>
    </div>
  );
}
