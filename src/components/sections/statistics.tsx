"use client"

import { useRef } from "react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { motion, useSpring, useTransform, useMotionValue } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { STATISTICS } from "@/lib/data"

function AnimatedStat({
  value,
  label,
  prefix = "",
  suffix = "",
}: {
  value: string
  label: string
  prefix?: string
  suffix?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    stiffness: 80,
    damping: 30,
  })
  const displayValue = useTransform(springValue, (v) => Math.floor(v))

  const { ref: sectionRef, isInView } = useScrollReveal(0.3)

  if (isInView && motionValue.get() === 0) {
    const numeric = parseFloat(value)
    const target = isNaN(numeric) ? 0 : numeric
    motionValue.set(target)
  }

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center text-center"
    >
      <div className="flex items-baseline gap-1">
        {prefix && <span className="text-3xl font-light text-white/30">{prefix}</span>}
        <motion.span className="text-5xl font-bold text-gradient bg-gradient-to-r from-white to-white/70 sm:text-6xl lg:text-7xl">
          {displayValue}
        </motion.span>
        {suffix && <span className="text-3xl font-light text-white/30">{suffix}</span>}
      </div>
      <p className="mt-3 text-sm text-white/30 sm:text-base">{label}</p>
    </motion.div>
  )
}

export function Statistics() {
  return (
    <Section className="py-24 lg:py-32">
      <Container>
        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-4">
          {STATISTICS.map((stat) => (
            <AnimatedStat key={stat.label} {...stat} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
