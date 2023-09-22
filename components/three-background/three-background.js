'use client'

import * as THREE from 'three'
import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { Canvas } from "@react-three/fiber"
import { useLoader } from "@react-three/fiber"
import { Environment, CameraControls } from "@react-three/drei"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"
import { Suspense } from "react"

const { DEG2RAD } = THREE.MathUtils

const Model = () => {
  const gltf = useLoader(GLTFLoader, "/golf.glb")

  return (
    <mesh>
      <primitive object={gltf.scene} scale={1.2} position={[0, -1.8, 0]} />
    </mesh>
  );
};

const MainScene = () => {
  const pathname = usePathname()
  const cameraControlsRef = useRef()
  
  useEffect(() => {
    switch(pathname) {
      case '/golf': 
        cameraControlsRef.current?.setLookAt(0, -0.2, -2, -1, -1, 2, true)
      break
      case '/yahtzee':
        cameraControlsRef.current?.setLookAt(0, -0.4, 0, 0, 1, 2, true)
      break
      case '/about':
        cameraControlsRef.current?.setLookAt(1, -0.4, 2, -1, 1, 2, true)
      break
      default:
        cameraControlsRef.current?.setLookAt(0, -0.4, -3, 0, 0, 0, true)
      break
    }
  }, [pathname])

  return (
    <>
      <Model />
      <Environment preset="park" background blur={0.5} />
      <CameraControls ref={cameraControlsRef} />
    </>
  )
}

export default function ThreeBackground() {
  return (
    <div className="fixed z-0 top-0 left-0 w-full h-full bg-blue-100">
      <Canvas camera={{ position: [0, 20, -4], fov: 60 }}>
        <Suspense fallback={null}>
          <MainScene />
        </Suspense>
      </Canvas>
    </div>
  );
}
