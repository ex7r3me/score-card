/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 public/golf.glb -t 
*/

import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Cube_1: THREE.Mesh
    Cube_2: THREE.Mesh
    Cube_3: THREE.Mesh
    Cube003: THREE.Mesh
    Cube003_1: THREE.Mesh
    Cube005_1: THREE.Mesh
    Cube005_2: THREE.Mesh
    Cube006_1: THREE.Mesh
    Cube006_2: THREE.Mesh
    Cube007_1: THREE.Mesh
    Cube007_2: THREE.Mesh
    Icosphere: THREE.Mesh
    Cube008_1: THREE.Mesh
    Cube008_2: THREE.Mesh
    Cube009_1: THREE.Mesh
    Cube009_2: THREE.Mesh
    Cube010_1: THREE.Mesh
    Cube010_2: THREE.Mesh
    Icosphere001: THREE.Mesh
    Cube011: THREE.Mesh
    Cube011_1: THREE.Mesh
    Cylinder002: THREE.Mesh
    Cylinder002_1: THREE.Mesh
    Icosphere002: THREE.Mesh
    Cube012: THREE.Mesh
    Cube012_1: THREE.Mesh
  }
  materials: {
    Material: THREE.MeshStandardMaterial
    ['Material.001']: THREE.MeshStandardMaterial
    ['Material.007']: THREE.MeshStandardMaterial
    ['Material.002']: THREE.MeshStandardMaterial
    ['Material.003']: THREE.MeshStandardMaterial
    ['Material.004']: THREE.MeshStandardMaterial
    ['Material.005']: THREE.MeshStandardMaterial
    ['Material.006']: THREE.MeshStandardMaterial
    ['Material.008']: THREE.MeshStandardMaterial
    ['Material.009']: THREE.MeshStandardMaterial
  }
}

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

const GolfWorld = (props: JSX.IntrinsicElements['group']) => {
  const { nodes, materials } = useGLTF('/models/golf.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI, 0, -Math.PI]} scale={[-3, -0.313, -3]}>
        <mesh receiveShadow geometry={nodes.Cube_1.geometry} material={materials.Material} />
        <mesh receiveShadow geometry={nodes.Cube_2.geometry} material={materials['Material.001']} />
        <mesh receiveShadow geometry={nodes.Cube_3.geometry} material={materials['Material.007']} />
      </group>
      <group position={[1.033, 0.767, 2.151]} rotation={[0, -0.407, 0]} scale={0.094}>
        <mesh receiveShadow geometry={nodes.Cube003.geometry} material={materials['Material.002']} />
        <mesh receiveShadow geometry={nodes.Cube003_1.geometry} material={materials['Material.003']} />
      </group>
      <group position={[-0.205, 0.748, 2.59]} rotation={[0, -0.893, 0]} scale={0.058}>
        <mesh receiveShadow geometry={nodes.Cube005_1.geometry} material={materials['Material.004']} />
        <mesh receiveShadow geometry={nodes.Cube005_2.geometry} material={materials['Material.005']} />
      </group>
      <group position={[-1.481, 0.9, 0.396]} rotation={[Math.PI, -0.369, Math.PI]} scale={0.059}>
        <mesh receiveShadow geometry={nodes.Cube006_1.geometry} material={materials['Material.002']} />
        <mesh receiveShadow geometry={nodes.Cube006_2.geometry} material={materials['Material.003']} />
      </group>
      <group position={[-1.872, 0.959, -0.073]} rotation={[0, 0.735, 0]} scale={0.065}>
        <mesh receiveShadow geometry={nodes.Cube007_1.geometry} material={materials['Material.004']} />
        <mesh receiveShadow geometry={nodes.Cube007_2.geometry} material={materials['Material.005']} />
      </group>
      <mesh geometry={nodes.Icosphere.geometry} material={materials['Material.006']} position={[-1.782, 0.825, -2.051]} scale={0.285} />
      <group position={[-2.644, 0.823, -2.039]} rotation={[0, -0.378, 0]} scale={0.059}>
        <mesh receiveShadow geometry={nodes.Cube008_1.geometry} material={materials['Material.002']} />
        <mesh receiveShadow geometry={nodes.Cube008_2.geometry} material={materials['Material.003']} />
      </group>
      <group position={[2.197, 0.783, -0.695]} rotation={[-3.013, -1.524, -3.081]} scale={0.065}>
        <mesh receiveShadow geometry={nodes.Cube009_1.geometry} material={materials['Material.004']} />
        <mesh receiveShadow geometry={nodes.Cube009_2.geometry} material={materials['Material.005']} />
      </group>
      <group position={[-0.487, 0.788, -2.783]} rotation={[0, -1.105, 0]} scale={0.059}>
        <mesh receiveShadow geometry={nodes.Cube010_1.geometry} material={materials['Material.002']} />
        <mesh receiveShadow geometry={nodes.Cube010_2.geometry} material={materials['Material.003']} />
      </group>
      <mesh geometry={nodes.Icosphere001.geometry} material={materials['Material.006']} position={[3.116, 0.542, -0.948]} scale={0.285} />
      <group receiveShadow position={[2.333, 0.757, -1.696]} rotation={[-Math.PI, 1.312, -Math.PI]} scale={0.066}>
        <mesh receiveShadow geometry={nodes.Cube011.geometry} material={materials['Material.002']} />
        <mesh receiveShadow geometry={nodes.Cube011_1.geometry} material={materials['Material.003']} />
      </group>
      <group position={[-0.856, 1.158, -0.569]} rotation={[0, 1.503, 0]} scale={[0.009, 0.319, 0.009]}>
        <mesh receiveShadow geometry={nodes.Cylinder002.geometry} material={materials['Material.008']} />
        <mesh receiveShadow geometry={nodes.Cylinder002_1.geometry} material={materials['Material.009']} />
      </group>
      <mesh geometry={nodes.Icosphere002.geometry} material={materials['Material.006']} position={[3.193, 0.525, 1.527]} rotation={[-0.23, -1.138, -0.312]} scale={0.285} />
      <group position={[2.208, 0.814, 2.32]} rotation={[0, 0.735, 0]} scale={0.065}>
        <mesh receiveShadow geometry={nodes.Cube012.geometry} material={materials['Material.004']} />
        <mesh receiveShadow geometry={nodes.Cube012_1.geometry} material={materials['Material.005']} />
      </group>
    </group>
  )
}

export default GolfWorld

useGLTF.preload('/models/golf.glb')
