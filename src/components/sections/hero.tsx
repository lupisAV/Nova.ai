"use client"

import { motion } from "framer-motion"
import { ArrowRight, BarChart3, Bot, Workflow, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Container } from "@/components/ui/container"
import { BackgroundGlow } from "@/components/effects/background-glow"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-32 lg:pt-32 lg:pb-40 overflow-hidden">
      <BackgroundGlow />

      <Container className="relative z-10">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <motion.div custom={0} initial="hidden" animate="visible" variants={fadeUp}>
            <Badge className="mb-8">Introducing Nova AI Platform</Badge>
          </motion.div>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[80px] lg:leading-[1.05]"
          >
            Automate your
            <br />
            <span className="text-gradient bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-400">
              workflow with AI
            </span>
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-white/40 sm:text-xl"
          >
            Nova AI is the intelligent automation platform that helps modern teams ship faster,
            eliminate repetitive tasks, and make smarter decisions — all powered by cutting-edge
            artificial intelligence.
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-12 flex flex-col items-center gap-4 sm:flex-row"
          >
            <Button size="lg">
              Start building free
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="secondary" size="lg">
              Watch demo
              <span className="ml-1 opacity-50 text-xs border border-white/20 rounded-full px-1.5 py-0.5">
                2 min
              </span>
            </Button>
          </motion.div>

          <motion.p
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-6 text-sm text-white/25"
          >
            No credit card required · 14-day free trial
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
          className="mt-20 lg:mt-28"
        >
          <DashboardMockup />
        </motion.div>
      </Container>
    </section>
  )
}

function DashboardMockup() {
  return (
    <div className="mx-auto max-w-5xl">
      <div className="relative rounded-2xl border border-white/[0.06] bg-white/[0.01] backdrop-blur-sm p-[1px] shadow-2xl shadow-black/50">
        <div className="relative rounded-[15px] bg-gradient-to-b from-[#0d0d10] to-[#0a0a0d] overflow-hidden">
          <div className="flex items-center gap-2 border-b border-white/[0.04] px-5 py-3">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-red-500/60" />
              <div className="h-3 w-3 rounded-full bg-amber-500/60" />
              <div className="h-3 w-3 rounded-full bg-emerald-500/60" />
            </div>
            <div className="ml-3 h-4 w-40 rounded-full bg-white/[0.04]" />
          </div>

          <div className="grid gap-4 p-5 md:grid-cols-3">
            <DashboardCard
              title="Active Workflows"
              value="2,847"
              change="+12.4%"
              icon={Workflow}
              accent="violet"
            />
            <DashboardCard
              title="Tasks Automated"
              value="48.2K"
              change="+24.8%"
              icon={Zap}
              accent="cyan"
            />
            <DashboardCard
              title="AI Interactions"
              value="129K"
              change="+8.1%"
              icon={Bot}
              accent="indigo"
            />
          </div>

          <div className="px-5 pb-5">
            <div className="rounded-xl border border-white/[0.04] bg-white/[0.01] p-4">
              <div className="mb-3 flex items-center gap-2">
                <BarChart3 className="h-4 w-4 text-white/30" />
                <span className="text-xs font-medium text-white/40">Performance Overview</span>
              </div>
              <div className="h-28 flex items-end gap-1.5">
                {[65, 45, 78, 52, 90, 48, 85, 55, 72, 60, 88, 70].map((height, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-sm bg-gradient-to-t from-violet-500/30 to-cyan-500/30 transition-all hover:from-violet-500/60 hover:to-cyan-500/60"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
              <div className="mt-3 flex items-center justify-between text-[10px] text-white/20">
                <span>Jan</span>
                <span>Dec</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function DashboardCard({
  title,
  value,
  change,
  icon: Icon,
  accent,
}: {
  title: string
  value: string
  change: string
  icon: React.ComponentType<{ className?: string }>
  accent: string
}) {
  const accentColors: Record<string, string> = {
    violet: "bg-violet-500/10 text-violet-400",
    cyan: "bg-cyan-500/10 text-cyan-400",
    indigo: "bg-indigo-500/10 text-indigo-400",
  }

  return (
    <div className="rounded-xl border border-white/[0.04] bg-white/[0.01] p-4">
      <div className="flex items-center justify-between">
        <span className="text-xs text-white/30">{title}</span>
        <div className={`rounded-lg p-1.5 ${accentColors[accent]}`}>
          <Icon className="h-3.5 w-3.5" />
        </div>
      </div>
      <div className="mt-3 flex items-baseline gap-2">
        <span className="text-xl font-semibold text-white">{value}</span>
        <span className="text-xs font-medium text-emerald-400">{change}</span>
      </div>
    </div>
  )
}
