"use client"

import { useRef, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Text, Environment, Float } from "@react-three/drei"
import type * as THREE from "three"

function CubeModel() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2
    meshRef.current.rotation.y += 0.01
  })

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial
        color="#00AAFF"
        metalness={0.8}
        roughness={0.2}
        emissive="#003366"
        emissiveIntensity={0.5}
      />
    </mesh>
  )
}

function FloatingText() {
  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5} position={[0, -3, 0]}>
      <Text font="/fonts/Geist_Bold.json" fontSize={0.5} color="#ffffff" anchorX="center" anchorY="middle">
        COMPUTER ARCHITECTURE • AI/ML
      </Text>
    </Float>
  )
}

function CircuitLines() {
  return (
    <group position={[0, 0, -5]}>
      {Array.from({ length: 20 }).map((_, i) => (
        <mesh key={i} position={[(Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20, (Math.random() - 0.5) * 10]}>
          <boxGeometry args={[0.05, 0.05, Math.random() * 5 + 1]} />
          <meshStandardMaterial color="#00FFAA" emissive="#00FFAA" emissiveIntensity={0.5} />
        </mesh>
      ))}
    </group>
  )
}

export default function Hero3DScene() {
  return (
    <Canvas className="w-full h-full">
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <CubeModel />
        <FloatingText />
        <CircuitLines />
        <Environment preset="city" />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} makeDefault />
      </Suspense>
    </Canvas>
  )
}
