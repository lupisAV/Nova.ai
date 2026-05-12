"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Section, SectionHeader } from "@/components/ui/section"
import { FEATURES } from "@/lib/data"

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
}

const card = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

export function Features() {
  const { ref, isInView } = useScrollReveal()

  return (
    <Section id="features">
      <Container>
        <SectionHeader
          badge="Features"
          title="Everything you need to ship faster"
          description="Powerful AI tools designed to eliminate friction and supercharge your team's productivity."
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={stagger}
          className="mt-20 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {FEATURES.map((feature) => (
            <motion.div
              key={feature.title}
              variants={card}
              className="group relative rounded-2xl border border-white/[0.04] bg-white/[0.01] p-8 transition-all duration-300 hover:border-white/[0.10] hover:bg-white/[0.02]"
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/10 to-indigo-500/10 ring-1 ring-white/[0.04] transition-all duration-300 group-hover:from-violet-500/20 group-hover:to-indigo-500/20 group-hover:ring-white/[0.08]">
                <feature.icon className="h-6 w-6 text-white/60 transition-colors duration-300 group-hover:text-white/80" />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-white">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-white/35">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
