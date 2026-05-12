import type { LucideIcon } from "lucide-react"

export interface NavLink {
  label: string
  href: string
}

export interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

export interface BentoCard {
  title: string
  description: string
  size: "tall" | "wide" | "small"
  gradient: string
  stat?: string
  statLabel?: string
}

export interface Statistic {
  value: string
  label: string
  suffix: string
  prefix?: string
}

export interface Testimonial {
  name: string
  role: string
  quote: string
  avatar: string
}

export interface PricingPlan {
  name: string
  description: string
  monthlyPrice: number | null
  yearlyPrice: number | null
  features: string[]
  cta: string
  highlighted: boolean
}

export interface FAQItem {
  question: string
  answer: string
}
