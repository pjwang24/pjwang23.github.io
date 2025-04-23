'use client'

import { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  }

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center p-4">
            <h2 className="text-2xl font-bold text-red-400 mb-2">Something went wrong</h2>
            <p className="text-gray-300">The 3D scene failed to load. Please refresh the page.</p>
            <button
              className="mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md transition-colors duration-200"
              onClick={() => this.setState({ hasError: false })}
            >
              Try Again
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
} 