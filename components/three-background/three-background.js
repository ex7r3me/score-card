'use client'

import { useRef } from 'react'
import { usePathname } from 'next/navigation'
import { Canvas, useFrame } from "@react-three/fiber"
import { useLoader } from "@react-three/fiber"
import { Environment, Camera, CameraControls } from "@react-three/drei"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"
import { Suspense } from "react"
import { Vector3 } from 'three'

const Model = () => {
  const pathname = usePathname()
  const gltf = useLoader(GLTFLoader, "/golf.glb")
  const model = useRef()
  const homePosition = new Vector3(0, -0.6, 2.3) //[0, -1.4, 1.2]
  const golfPosition = new Vector3(0, -1, -0.8) //[0, -1.4, 1]

  
  useFrame(({ clock }) => {
    switch(pathname) {
      case '/':
        model.current.position.lerp(homePosition, 0.01)
      break
      case '/golf':
        model.current.position.lerp(golfPosition, 0.01)
      break
      default:
        model.current.position.lerp(homePosition, 0.01)
    }
  });

  return (
    <mesh ref={model}>
      <primitive object={gltf.scene} scale={1.2} position={homePosition.toArray()} rotation={[0, -0.9, 0]} />
    </mesh>
  );
};

export default function ThreeBackground() {

  return (
    <div className="fixed z-0 top-0 left-0 w-full h-full">
      <Canvas>
        <Suspense fallback={null}>
          <Model />
          <Environment preset="park" background rotation={[5, -0.9, 0]} blur={0.5} />
        </Suspense>
      </Canvas>
    </div>
  );
}
