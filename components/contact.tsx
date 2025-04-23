"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // This would be connected to a real form submission in a production environment
    console.log("Form submitted:", formData)
    alert("Thanks for your message! This is a demo, so no message was actually sent.")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-cyan-400">Get In Touch</h2>
          <div className="h-1 w-20 bg-cyan-600 mx-auto mb-8"></div>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            Interested in collaborating or have questions about my work? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-800 border-cyan-700">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6 text-cyan-400">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-cyan-400 mr-4" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:contact@example.com" className="text-cyan-400 hover:text-cyan-300">
                        contact@example.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Github className="h-6 w-6 text-cyan-400 mr-4" />
                    <div>
                      <p className="font-medium">GitHub</p>
                      <a href="https://github.com/yourusername" className="text-cyan-400 hover:text-cyan-300">
                        github.com/yourusername
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Linkedin className="h-6 w-6 text-cyan-400 mr-4" />
                    <div>
                      <p className="font-medium">LinkedIn</p>
                      <a href="https://linkedin.com/in/yourusername" className="text-cyan-400 hover:text-cyan-300">
                        linkedin.com/in/yourusername
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Twitter className="h-6 w-6 text-cyan-400 mr-4" />
                    <div>
                      <p className="font-medium">Twitter</p>
                      <a href="https://twitter.com/yourusername" className="text-cyan-400 hover:text-cyan-300">
                        @yourusername
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="bg-gray-800 border-gray-700"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="bg-gray-800 border-gray-700"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  className="bg-gray-800 border-gray-700 min-h-[150px]"
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-700">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
