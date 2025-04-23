'use client'

import dynamic from 'next/dynamic'

// Lazy-load the 3D scene on client only
const Hero3DScene = dynamic(() => import('./hero-3d-scene'), { ssr: false })

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* 3D background scene */}
      <Hero3DScene />

      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
        <div className="text-center p-4 backdrop-blur-sm bg-black/30 rounded-lg">
          <h1 className="text-5xl font-bold mb-2 text-cyan-400">Jane Doe</h1>
          <h2 className="text-2xl mb-6">Computer Engineer</h2>
          <p className="max-w-md mx-auto text-gray-300">
            Specializing in computer architecture and artificial intelligence
          </p>
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 mt-8 bg-cyan-600 hover:bg-cyan-700 pointer-events-auto">
            View My Work
          </button>
        </div>
      </div>
    </section>
  )
}
