"use client"

import { useState } from "react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Section, SectionHeader } from "@/components/ui/section"
import { PRICING_PLANS } from "@/lib/data"
import { cn } from "@/lib/cn"

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const planCard = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

export function Pricing() {
  const [yearly, setYearly] = useState(false)
  const { ref, isInView } = useScrollReveal()

  return (
    <Section id="pricing">
      <Container>
        <SectionHeader
          badge="Pricing"
          title="Simple, transparent pricing"
          description="No hidden fees. No surprises. Start free and scale as you grow."
        />

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="mt-16 flex items-center justify-center gap-4"
        >
          <span
            className={cn(
              "text-sm transition-colors",
              !yearly ? "text-white/80" : "text-white/30"
            )}
          >
            Monthly
          </span>
          <button
            onClick={() => setYearly(!yearly)}
            className={cn(
              "relative h-7 w-12 rounded-full transition-colors duration-300",
              yearly ? "bg-violet-500/30" : "bg-white/[0.06]"
            )}
            aria-label={`Switch to ${yearly ? "monthly" : "yearly"} billing`}
          >
            <motion.div
              className="absolute top-1 h-5 w-5 rounded-full bg-white shadow-md"
              animate={{ left: yearly ? 26 : 2 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          </button>
          <span
            className={cn(
              "text-sm transition-colors",
              yearly ? "text-white/80" : "text-white/30"
            )}
          >
            Yearly
            <span className="ml-1.5 rounded-full bg-emerald-500/10 px-1.5 py-0.5 text-[10px] font-medium text-emerald-400">
              Save 20%
            </span>
          </span>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={stagger}
          className="mt-16 grid gap-6 lg:grid-cols-3"
        >
          {PRICING_PLANS.map((plan) => (
            <motion.div
              key={plan.name}
              variants={planCard}
              className={cn(
                "relative flex flex-col rounded-2xl border p-8 transition-all duration-300",
                plan.highlighted
                  ? "border-white/[0.15] bg-white/[0.02] shadow-xl shadow-violet-500/5"
                  : "border-white/[0.04] bg-white/[0.005] hover:border-white/[0.08]"
              )}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-4 py-1 text-xs font-medium text-white shadow-lg shadow-violet-500/20">
                  Most popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
                <p className="mt-2 text-sm text-white/35">{plan.description}</p>
              </div>

              <div className="mb-8">
                {plan.monthlyPrice !== null ? (
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm text-white/40">$</span>
                    <span className="text-5xl font-bold text-white">
                      {yearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-sm text-white/30">/mo</span>
                  </div>
                ) : (
                  <div className="text-4xl font-bold text-white">Custom</div>
                )}
              </div>

              <ul className="mb-8 flex flex-col gap-3 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-white/45">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400/60" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.highlighted ? "primary" : "outline"}
                className="w-full"
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
