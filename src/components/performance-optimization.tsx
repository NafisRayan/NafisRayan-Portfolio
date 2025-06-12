"use client"

import { useEffect } from 'react'

// Performance optimization component
export function PerformanceOptimization() {
  useEffect(() => {
    // Preload Spline resources
    const link = document.createElement('link')
    link.rel = 'preload'
    link.href = 'https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode'
    link.as = 'fetch'
    link.crossOrigin = 'anonymous'
    document.head.appendChild(link)

    // Performance observer for monitoring
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime)
          }
          if (entry.entryType === 'first-input') {
            const fidEntry = entry as any
            console.log('FID:', fidEntry.processingStart - entry.startTime)
          }
        }
      })
      
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input'] })
    }

    return () => {
      if (link.parentNode) {
        link.parentNode.removeChild(link)
      }
    }
  }, [])

  return null
}
