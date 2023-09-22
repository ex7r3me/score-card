'use client'

import * as THREE from 'three'
import { useRef } from 'react'
import { usePathname } from 'next/navigation'
import { Canvas, useThree } from "@react-three/fiber"
import { useLoader } from "@react-three/fiber"
import { Environment, CameraControls } from "@react-three/drei"
import { useControls } from 'leva'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"
import { Suspense } from "react"
import { Vector3 } from 'three'

<<<<<<< Updated upstream
const Model = () => {
  const pathname = usePathname()
  const gltf = useLoader(GLTFLoader, "/golf.glb")
  const model = useRef()
  const homePosition = new Vector3(0, -0.6, 2.3) //[0, -1.4, 1.2]
  const golfPosition = new Vector3(0, -1, -0.8) //[0, -1.4, 1]
=======
const { DEG2RAD } = THREE.MathUtils
>>>>>>> Stashed changes

const Model = () => {
  const gltf = useLoader(GLTFLoader, "/Golf.glb")

  return (
    <mesh>
      <primitive object={gltf.scene} scale={1.2} position={[0, -1.8, 0]} />
    </mesh>
  );
};

const MainScene = () => {
  const pathname = usePathname()

  const cameraControlsRef = useRef()
  const { camera } = useThree()

  switch(pathname) {
    case '/golf':
      console.log(cameraControlsRef.current)
      cameraControlsRef.current?.dolly(1, true)
    break
    case '/yahtzee':
      () => cameraControlsRef.current?.dolly(2, true)
    break
    case '/about':
      () => cameraControlsRef.current?.dolly(3, true)
    break
    default:
      () => cameraControlsRef.current?.dolly(0, true)
    break
  }

  return (
    <>
      <Model />
      <Environment preset="park" background blur={0.5} />
      <CameraControls 
        ref={cameraControlsRef}
        dollySpeed={0.1}
        minDistance={{ value: 0 }}
        enabled={{ enabled: true, label: 'camera controls on'}}
      />
    </>
  )
}

export default function ThreeBackground() {
  return (
    <div className="fixed z-0 top-0 left-0 w-full h-full">
      <Canvas>
        <Suspense fallback={null}>
          <MainScene />
        </Suspense>
      </Canvas>
    </div>
  );
}
