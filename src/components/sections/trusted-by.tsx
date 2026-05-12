"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { cn } from "@/lib/cn"

const COMPANIES = [
  "Vercel",
  "Stripe",
  "Linear",
  "Supabase",
  "OpenAI",
  "Anthropic",
  "Replit",
  "Netlify",
  "PlanetScale",
  "Clerk",
  "Resend",
  "Raycast",
  "Notion",
  "Figma",
  "GitHub",
  "Vercel",
  "Stripe",
  "Linear",
  "Supabase",
  "OpenAI",
  "Anthropic",
  "Replit",
  "Netlify",
  "PlanetScale",
  "Clerk",
  "Resend",
  "Raycast",
  "Notion",
  "Figma",
  "GitHub",
]

export function TrustedBy() {
  const { ref, isInView } = useScrollReveal()

  return (
    <Section className="py-20 lg:py-24" id="trusted">
      <Container>
        <motion.p
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center text-sm font-medium text-white/20"
        >
          Trusted by leading technology companies worldwide
        </motion.p>

        <div className="mask-fade-x relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex gap-16 animate-marquee"
          >
            {COMPANIES.map((name, i) => (
              <span
                key={i}
                className="flex-shrink-0 text-lg font-semibold text-white/[0.08] whitespace-nowrap select-none"
              >
                {name}
              </span>
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
