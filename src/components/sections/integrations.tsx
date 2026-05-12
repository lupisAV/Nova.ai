"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Section, SectionHeader } from "@/components/ui/section"
import { INTEGRATIONS } from "@/lib/data"

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.03 } },
}

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3 },
  },
}

export function Integrations() {
  const { ref, isInView } = useScrollReveal()

  return (
    <Section id="integrations">
      <Container>
        <SectionHeader
          badge="Integrations"
          title="Works with your entire stack"
          description="Nova seamlessly connects with the tools your team already uses and loves."
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={stagger}
          className="mt-20 grid grid-cols-4 gap-3 sm:grid-cols-6 lg:grid-cols-8"
        >
          {INTEGRATIONS.map((integration) => (
            <motion.div
              key={integration.name}
              variants={item}
              className="group flex flex-col items-center gap-2 rounded-xl border border-white/[0.03] bg-white/[0.005] p-4 transition-all duration-300 hover:border-white/[0.10] hover:bg-white/[0.02]"
            >
              <integration.icon className="h-5 w-5 text-white/20 transition-colors duration-300 group-hover:text-white/50" />
              <span className="text-[10px] text-white/20 transition-colors duration-300 group-hover:text-white/35">
                {integration.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <a
            href="#"
            className="text-sm text-white/25 transition-colors hover:text-white/50"
          >
            + 100 more integrations available →
          </a>
        </motion.p>
      </Container>
    </Section>
  )
}
