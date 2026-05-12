"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { BackgroundGlow } from "@/components/effects/background-glow"

export function CTAFinal() {
  const { ref, isInView } = useScrollReveal()

  return (
    <section id="cta" className="relative py-32 lg:py-40 overflow-hidden">
      <BackgroundGlow />

      <Container className="relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/20 to-indigo-500/20 ring-1 ring-white/[0.06]">
            <Sparkles className="h-6 w-6 text-white/60" />
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Ready to{" "}
            <span className="text-gradient bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-400">
              transform
            </span>{" "}
            your workflow?
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/35 sm:text-xl">
            Join thousands of engineering teams already shipping faster with Nova AI.
            Start your free trial today — no credit card required.
          </p>

          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row">
            <Button size="lg">
              Start building free
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="secondary" size="lg">
              Talk to sales
            </Button>
          </div>

          <p className="mt-6 text-sm text-white/20">
            Free 14-day trial · No credit card required · Cancel anytime
          </p>
        </motion.div>
      </Container>
    </section>
  )
}
