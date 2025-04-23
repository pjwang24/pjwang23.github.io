"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Cpu, Brain, Code, Server } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-cyan-400">About Me</h2>
          <div className="h-1 w-20 bg-cyan-600 mx-auto mb-8"></div>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            I'm a computer engineer with expertise in computer architecture and machine learning. My work focuses on
            designing efficient computing systems and implementing AI algorithms to solve complex problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-800 border-cyan-700 h-full">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Cpu className="h-8 w-8 text-cyan-400 mr-3" />
                  <h3 className="text-2xl font-bold">Computer Architecture</h3>
                </div>
                <p className="text-gray-300">
                  I specialize in designing and optimizing computer systems, focusing on processor microarchitecture,
                  memory hierarchies, and hardware acceleration for specific workloads. My research aims to push the
                  boundaries of computing performance while maintaining energy efficiency.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-800 border-cyan-700 h-full">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Brain className="h-8 w-8 text-cyan-400 mr-3" />
                  <h3 className="text-2xl font-bold">Artificial Intelligence</h3>
                </div>
                <p className="text-gray-300">
                  My work in AI/ML focuses on developing efficient algorithms and models for various applications. I'm
                  particularly interested in the intersection of hardware and AI, creating specialized systems that can
                  accelerate machine learning workloads and enable new AI capabilities.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-800 border-cyan-700 h-full">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Code className="h-8 w-8 text-cyan-400 mr-3" />
                  <h3 className="text-2xl font-bold">Software Development</h3>
                </div>
                <p className="text-gray-300">
                  I develop software solutions that bridge the gap between hardware and applications. My expertise
                  includes low-level programming, system software, and creating tools that help optimize performance
                  across the computing stack.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-800 border-cyan-700 h-full">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Server className="h-8 w-8 text-cyan-400 mr-3" />
                  <h3 className="text-2xl font-bold">High-Performance Computing</h3>
                </div>
                <p className="text-gray-300">
                  I work on designing and implementing high-performance computing systems that can handle complex
                  computational tasks. This includes parallel computing architectures, distributed systems, and
                  specialized hardware for scientific computing.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
