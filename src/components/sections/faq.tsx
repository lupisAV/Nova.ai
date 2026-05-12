"use client"

import { useState } from "react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Container } from "@/components/ui/container"
import { Section, SectionHeader } from "@/components/ui/section"
import { FAQ_ITEMS } from "@/lib/data"
import { cn } from "@/lib/cn"

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const { ref, isInView } = useScrollReveal()

  return (
    <Section id="faq">
      <Container>
        <SectionHeader
          badge="FAQ"
          title="Frequently asked questions"
          description="Everything you need to know about Nova AI."
        />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-20 max-w-3xl divide-y divide-white/[0.04]"
        >
          {FAQ_ITEMS.map((item, i) => (
            <div key={i} className="py-1">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-white/80"
              >
                <span
                  className={cn(
                    "text-base font-medium transition-colors",
                    openIndex === i ? "text-white" : "text-white/60"
                  )}
                >
                  {item.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="ml-4 flex-shrink-0"
                >
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 transition-colors",
                      openIndex === i ? "text-white/60" : "text-white/20"
                    )}
                  />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 text-sm leading-relaxed text-white/35">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
