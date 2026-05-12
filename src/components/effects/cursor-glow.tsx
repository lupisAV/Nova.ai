"use client"

import { useEffect, useState } from "react"

function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!visible) setVisible(true)
    }

    const handleMouseLeave = () => setVisible(false)
    const handleMouseEnter = () => setVisible(true)

    window.addEventListener("mousemove", handleMouseMove)
    document.documentElement.addEventListener("mouseleave", handleMouseLeave)
    document.documentElement.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave)
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter)
    }
  }, [visible])

  if (typeof navigator !== "undefined" && "maxTouchPoints" in navigator && navigator.maxTouchPoints > 0) {
    return null
  }

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999] transition-opacity duration-300"
      style={{ opacity: visible ? 1 : 0 }}
      aria-hidden="true"
    >
      <div
        className="absolute h-[600px] w-[600px] rounded-full bg-gradient-to-r from-violet-500/[0.03] to-cyan-500/[0.03] blur-3xl"
        style={{
          left: position.x - 300,
          top: position.y - 300,
        }}
      />
    </div>
  )
}

export { CursorGlow }
