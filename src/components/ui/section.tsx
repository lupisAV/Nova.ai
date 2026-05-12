import { cn } from "@/lib/cn"
import type { ReactNode } from "react"

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
}

function Section({ children, className, id }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("relative py-32 lg:py-40", className)}
    >
      {children}
    </section>
  )
}

interface SectionHeaderProps {
  badge?: string
  title: string
  description?: string
  className?: string
}

function SectionHeader({
  badge,
  title,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("mx-auto flex max-w-2xl flex-col items-center text-center", className)}>
      {badge && (
        <div className="mb-6 inline-flex items-center rounded-full border border-white/[0.06] bg-white/[0.02] px-4 py-1.5">
          <span className="text-sm font-medium text-white/60">{badge}</span>
        </div>
      )}
      <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description && (
        <p className="mt-6 text-lg leading-relaxed text-white/50 sm:text-xl">
          {description}
        </p>
      )}
    </div>
  )
}

export { Section, SectionHeader }
