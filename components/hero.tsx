'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { ErrorBoundary } from './error-boundary'

// Lazy-load the 3D scene on client only with loading and error states
const Hero3DScene = dynamic(() => import('./hero-3d-scene'), { 
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
      <div className="animate-pulse text-cyan-400">Loading 3D scene...</div>
    </div>
  ),
})

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* 3D background scene with error boundary */}
      <ErrorBoundary>
        <Suspense fallback={
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="animate-pulse text-cyan-400">Loading 3D scene...</div>
          </div>
        }>
          <Hero3DScene />
        </Suspense>
      </ErrorBoundary>

      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
        <div className="text-center p-4 backdrop-blur-sm bg-black/30 rounded-lg">
          <h1 className="text-5xl font-bold mb-2 text-cyan-400">Jane Doe</h1>
          <h2 className="text-2xl mb-6">Computer Engineer</h2>
          <p className="max-w-md mx-auto text-gray-300">
            Specializing in computer architecture and artificial intelligence
          </p>
          <button 
            className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 mt-8 bg-cyan-600 hover:bg-cyan-700 pointer-events-auto transition-colors duration-200"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
            View My Work
          </button>
        </div>
      </div>
    </section>
  )
}
