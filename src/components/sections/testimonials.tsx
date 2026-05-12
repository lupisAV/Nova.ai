"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Section, SectionHeader } from "@/components/ui/section"
import { TESTIMONIALS } from "@/lib/data"

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const card = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

export function Testimonials() {
  const { ref, isInView } = useScrollReveal()

  return (
    <Section id="testimonials">
      <Container>
        <SectionHeader
          badge="Testimonials"
          title="Loved by engineering teams worldwide"
          description="See why leading technology companies trust Nova to power their workflows."
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={stagger}
          className="mt-20 grid gap-6 lg:grid-cols-3"
        >
          {TESTIMONIALS.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={card}
              className="group relative flex flex-col rounded-2xl border border-white/[0.04] bg-white/[0.01] p-8 transition-all duration-300 hover:border-white/[0.10] hover:bg-white/[0.02]"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-500/20 to-indigo-500/20 text-sm font-medium text-white/60 ring-1 ring-white/[0.06]">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{testimonial.name}</p>
                  <p className="text-xs text-white/30">{testimonial.role}</p>
                </div>
              </div>
              <p className="flex-1 text-sm leading-relaxed text-white/40">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-6 flex text-amber-400/60 text-xs">
                {"★".repeat(5)}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
