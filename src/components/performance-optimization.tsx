"use client"

import { useEffect } from 'react'

// Performance optimization component
export function PerformanceOptimization() {
  useEffect(() => {
    // Only preload Spline on desktop/high-perf devices
    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    if (!isMobile) {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.href = 'https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode'
      link.as = 'fetch'
      link.crossOrigin = 'anonymous'
      document.head.appendChild(link)
    }

    // Performance observer for monitoring
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime)
          }
          if (entry.entryType === 'first-input') {
            // Type assertion for first-input entry which has processingStart property
            interface FirstInputEntry extends PerformanceEntry {
              processingStart: number;
            }
            const fidEntry = entry as FirstInputEntry
            console.log('FID:', fidEntry.processingStart - entry.startTime)
          }
        }
      })
      
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input'] })
    }

    return () => {
      // Remove Spline preload if present
      const links = document.querySelectorAll('link[rel="preload"][href*="spline.design"]')
      links.forEach(link => link.parentNode?.removeChild(link))
    }
  }, [])

  return null
}
