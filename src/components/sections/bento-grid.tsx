"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Section, SectionHeader } from "@/components/ui/section"
import { BENTO_CARDS } from "@/lib/data"

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const bentoCard = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

export function BentoGrid() {
  const { ref, isInView } = useScrollReveal()

  return (
    <Section id="bento">
      <Container>
        <SectionHeader
          badge="Platform"
          title="Built for the modern engineering team"
          description="From code to production, Nova accelerates every step of your workflow."
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={stagger}
          className="mt-20 grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2"
        >
          <motion.div
            variants={bentoCard}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.04] bg-gradient-to-b from-violet-600/10 to-indigo-600/5 p-8 transition-all duration-300 hover:border-white/[0.10] lg:row-span-2"
          >
            <div>
              <h3 className="text-xl font-semibold text-white">{BENTO_CARDS[0].title}</h3>
              <p className="mt-2 text-sm text-white/35">{BENTO_CARDS[0].description}</p>
            </div>
            <CodeSnippet />
          </motion.div>

          <motion.div
            variants={bentoCard}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.04] bg-gradient-to-b from-cyan-600/10 to-blue-600/5 p-8 transition-all duration-300 hover:border-white/[0.10] lg:col-span-3"
          >
            <div>
              <h3 className="text-xl font-semibold text-white">{BENTO_CARDS[1].title}</h3>
              <p className="mt-2 text-sm text-white/35">{BENTO_CARDS[1].description}</p>
            </div>
            <div className="mt-6 flex items-baseline gap-3">
              <span className="text-6xl font-bold text-gradient bg-gradient-to-r from-cyan-400 to-blue-400">
                {BENTO_CARDS[1].stat}
              </span>
              <span className="text-lg text-white/25">{BENTO_CARDS[1].statLabel}</span>
            </div>
          </motion.div>

          <motion.div
            variants={bentoCard}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.04] bg-gradient-to-b from-emerald-600/10 to-teal-600/5 p-8 transition-all duration-300 hover:border-white/[0.10] lg:col-span-2"
          >
            <h3 className="text-lg font-semibold text-white">{BENTO_CARDS[2].title}</h3>
            <p className="mt-2 text-sm text-white/35">{BENTO_CARDS[2].description}</p>
            <SecurityBadges />
          </motion.div>

          <motion.div
            variants={bentoCard}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.04] bg-gradient-to-b from-amber-600/10 to-orange-600/5 p-8 transition-all duration-300 hover:border-white/[0.10] lg:col-span-1"
          >
            <div>
              <h3 className="text-lg font-semibold text-white">{BENTO_CARDS[3].title}</h3>
              <p className="mt-2 text-sm text-white/35">{BENTO_CARDS[3].description}</p>
            </div>
            <div className="mt-4 flex items-center gap-1.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="h-1.5 flex-1 rounded-full bg-amber-500/20"
                >
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-amber-400 to-orange-400"
                    style={{ width: `${i === 5 ? 100 : 100}%` }}
                  />
                </div>
              ))}
              <span className="ml-2 text-xs font-medium text-amber-400">100%</span>
            </div>
          </motion.div>

          <motion.div
            variants={bentoCard}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.04] bg-gradient-to-b from-fuchsia-600/10 to-pink-600/5 p-8 transition-all duration-300 hover:border-white/[0.10] lg:col-span-2"
          >
            <div>
              <h3 className="text-lg font-semibold text-white">{BENTO_CARDS[4].title}</h3>
              <p className="mt-2 text-sm text-white/35">{BENTO_CARDS[4].description}</p>
            </div>
            <SyncAnimation />
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  )
}

function CodeSnippet() {
  return (
    <div className="mt-6 rounded-xl border border-white/[0.04] bg-black/40 p-4 font-mono text-xs leading-relaxed">
      <span className="text-violet-400">import</span>{" "}
      <span className="text-white/60">{"{ Nova }"}</span>{" "}
      <span className="text-violet-400">from</span>{" "}
      <span className="text-cyan-400">&quot;@nova/sdk&quot;</span>
      <br />
      <br />
      <span className="text-white/40">{`// Create an AI workflow in seconds`}</span>
      <br />
      <span className="text-violet-400">const</span>{" "}
      <span className="text-cyan-300">workflow</span>{" "}
      <span className="text-white/60">=</span>{" "}
      <span className="text-amber-300">Nova</span>
      <span className="text-white/60">.create(&#123;</span>
      <br />
      <span className="text-white/60">&nbsp;&nbsp;name: </span>
      <span className="text-emerald-300">&quot;ship-faster&quot;</span>
      <span className="text-white/60">,</span>
      <br />
      <span className="text-white/60">&nbsp;&nbsp;ai: </span>
      <span className="text-violet-300">true</span>
      <br />
      <span className="text-white/60">&#125;);</span>
      <br />
      <br />
      <span className="animate-pulse text-emerald-400">▌</span>
      <span className="text-white/25"> ready</span>
    </div>
  )
}

function SecurityBadges() {
  return (
    <div className="mt-6 flex flex-wrap gap-2">
      {["SOC 2", "GDPR", "HIPAA", "ISO 27001", "E2E Encrypted"].map((badge) => (
        <span
          key={badge}
          className="rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1 text-xs font-medium text-white/40"
        >
          {badge}
        </span>
      ))}
    </div>
  )
}

function SyncAnimation() {
  return (
    <div className="mt-6 flex items-center gap-3">
      <div className="flex -space-x-2">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-8 w-8 rounded-full border-2 border-black bg-gradient-to-br from-fuchsia-400 to-pink-400 shadow-lg"
            style={{ opacity: 0.4 + i * 0.25 }}
          />
        ))}
      </div>
      <div className="h-1 flex-1 rounded-full bg-white/[0.04]">
        <motion.div
          className="h-full w-1/3 rounded-full bg-gradient-to-r from-fuchsia-400 to-pink-400"
          animate={{ x: ["0%", "200%", "0%"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <span className="text-xs font-medium text-fuchsia-400">Live</span>
    </div>
  )
}
