"use client"

import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Text, Float } from "@react-three/drei"

function SkillSphere({ skill, position, color }: { skill: string; position: [number, number, number]; color: string }) {
  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh position={position}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.2} />
        <Text
          position={[0, 0, 0.6]}
          fontSize={0.2}
          color="white"
          anchorX="center"
          anchorY="middle"
          font="/fonts/Geist_Bold.json"
        >
          {skill}
        </Text>
      </mesh>
    </Float>
  )
}

export default function SkillsVisualization() {
  const skills = [
    { name: "RISC-V", position: [-3, 2, 0], color: "#00AAFF" },
    { name: "ARM", position: [3, -1, 2], color: "#00CCFF" },
    { name: "FPGA", position: [-2, -2, -1], color: "#00DDFF" },
    { name: "PyTorch", position: [2, 1, -2], color: "#00EEFF" },
    { name: "TensorFlow", position: [-1, 3, 1], color: "#00FFAA" },
    { name: "CUDA", position: [1, -3, -2], color: "#00DDAA" },
    { name: "Verilog", position: [-4, 0, -3], color: "#00CCAA" },
    { name: "SystemVerilog", position: [4, -2, 1], color: "#00BBAA" },
    { name: "Python", position: [0, 4, 2], color: "#00AAAA" },
    { name: "C++", position: [2, -4, 0], color: "#0099AA" },
  ]

  return (
    <Canvas>
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        {skills.map((skill, index) => (
          <SkillSphere key={index} skill={skill.name} position={skill.position} color={skill.color} />
        ))}
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} makeDefault />
      </Suspense>
    </Canvas>
  )
}
