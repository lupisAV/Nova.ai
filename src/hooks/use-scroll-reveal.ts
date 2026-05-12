"use client"

import { useEffect, useRef, useState } from "react"

export function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.unobserve(element)
        }
      },
      { threshold, rootMargin: "-80px" }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [threshold])

  return { ref, isInView }
}
