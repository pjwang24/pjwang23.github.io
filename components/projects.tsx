"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"

type Project = {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  github: string
  demo?: string
  category: "architecture" | "ai" | "other"
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all")

  const projects: Project[] = [
    {
      id: "project1",
      title: "Custom RISC-V Processor",
      description:
        "Designed and implemented a custom RISC-V processor core with a 5-stage pipeline, branch prediction, and cache hierarchy. Achieved 20% better performance than baseline.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["RISC-V", "Verilog", "Computer Architecture"],
      github: "#",
      category: "architecture",
    },
    {
      id: "project2",
      title: "Neural Network Accelerator",
      description:
        "Developed a specialized hardware accelerator for convolutional neural networks, implemented on FPGA with optimized dataflow for matrix operations.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["FPGA", "AI Acceleration", "Verilog", "PyTorch"],
      github: "#",
      demo: "#",
      category: "architecture",
    },
    {
      id: "project3",
      title: "Transformer Model Optimization",
      description:
        "Optimized transformer-based language models for inference on resource-constrained devices through quantization and pruning techniques.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["PyTorch", "TensorFlow", "Model Optimization", "NLP"],
      github: "#",
      category: "ai",
    },
    {
      id: "project4",
      title: "Distributed Training Framework",
      description:
        "Built a distributed training framework for large-scale deep learning models across multiple GPUs and nodes with efficient communication patterns.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Distributed Systems", "CUDA", "PyTorch", "High-Performance Computing"],
      github: "#",
      demo: "#",
      category: "ai",
    },
    {
      id: "project5",
      title: "Memory Hierarchy Simulator",
      description:
        "Created a detailed cache and memory hierarchy simulator to evaluate different cache policies and memory technologies for modern workloads.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["C++", "Computer Architecture", "Performance Analysis"],
      github: "#",
      category: "architecture",
    },
    {
      id: "project6",
      title: "Reinforcement Learning for Robotics",
      description:
        "Implemented reinforcement learning algorithms for robotic control tasks, with simulation and real-world deployment capabilities.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Reinforcement Learning", "Python", "Robotics", "PyTorch"],
      github: "#",
      category: "ai",
    },
  ]

  const filteredProjects = activeTab === "all" ? projects : projects.filter((project) => project.category === activeTab)

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-cyan-400">Featured Projects</h2>
          <div className="h-1 w-20 bg-cyan-600 mx-auto mb-8"></div>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            A selection of my work in computer architecture and artificial intelligence.
          </p>
        </motion.div>

        <Tabs defaultValue="all" className="mb-12">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
            <TabsTrigger value="all" onClick={() => setActiveTab("all")}>
              All
            </TabsTrigger>
            <TabsTrigger value="architecture" onClick={() => setActiveTab("architecture")}>
              Architecture
            </TabsTrigger>
            <TabsTrigger value="ai" onClick={() => setActiveTab("ai")}>
              AI/ML
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-800 border-cyan-700 overflow-hidden h-full flex flex-col">
                <div className="relative h-48 w-full">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-cyan-400">{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <Badge key={i} variant="secondary" className="bg-cyan-900 text-cyan-100 hover:bg-cyan-800">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-gray-300">{project.description}</CardDescription>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <a href={project.github} className="text-cyan-400 hover:text-cyan-300 flex items-center">
                    <Github className="h-4 w-4 mr-1" />
                    Code
                  </a>
                  {project.demo && (
                    <a href={project.demo} className="text-cyan-400 hover:text-cyan-300 flex items-center">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Demo
                    </a>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
