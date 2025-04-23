"use client"
import { motion } from "framer-motion"
import dynamic from "next/dynamic"

// Dynamically import the 3D skills visualization with no SSR
const SkillsVisualization = dynamic(() => import("./skills-visualization"), {
  ssr: false,
  loading: () => (
    <div className="h-[500px] w-full flex items-center justify-center bg-gray-800 rounded-lg">
      <div className="animate-pulse text-cyan-400">Loading skills visualization...</div>
    </div>
  ),
})

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-cyan-400">Technical Skills</h2>
          <div className="h-1 w-20 bg-cyan-600 mx-auto mb-8"></div>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            My expertise spans hardware design, computer architecture, and machine learning technologies.
          </p>
        </motion.div>

        <div className="h-[500px] w-full">
          <SkillsVisualization />
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">Computer Architecture</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-cyan-400 mr-2"></div>
                Processor Design (RISC-V, ARM, x86)
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-cyan-400 mr-2"></div>
                Hardware Description Languages (Verilog, VHDL)
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-cyan-400 mr-2"></div>
                FPGA Development and Prototyping
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-cyan-400 mr-2"></div>
                Memory Hierarchy Optimization
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-cyan-400 mr-2"></div>
                System-on-Chip (SoC) Design
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">AI/ML Technologies</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-cyan-400 mr-2"></div>
                Deep Learning Frameworks (PyTorch, TensorFlow)
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-cyan-400 mr-2"></div>
                Neural Network Architecture Design
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-cyan-400 mr-2"></div>
                GPU Acceleration (CUDA, OpenCL)
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-cyan-400 mr-2"></div>
                Machine Learning Model Optimization
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-cyan-400 mr-2"></div>
                AI Hardware Accelerators
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
