"use client"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"
import dynamic from "next/dynamic"

// Dynamically import the 3D scene with no SSR
const Scene3D = dynamic(() => import("./hero-3d-scene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="animate-pulse text-cyan-400">Loading 3D scene...</div>
    </div>
  ),
})

export default function Hero() {
  const isMobile = useMobile()

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        {/* Only render the 3D scene on client-side */}
        <Scene3D />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
        <div className="text-center p-4 backdrop-blur-sm bg-black/30 rounded-lg">
          <h1 className="text-5xl font-bold mb-2 text-cyan-400">Jane Doe</h1>
          <h2 className="text-2xl mb-6">Computer Engineer</h2>
          <p className="max-w-md mx-auto text-gray-300">
            Specializing in computer architecture and artificial intelligence
          </p>
          <Button className="mt-8 bg-cyan-600 hover:bg-cyan-700 pointer-events-auto">View My Work</Button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-8 w-8 text-cyan-400" />
      </div>
    </section>
  )
}
