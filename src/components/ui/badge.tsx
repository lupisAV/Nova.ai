import { cn } from "@/lib/cn"
import type { ReactNode } from "react"

interface BadgeProps {
  children: ReactNode
  className?: string
}

function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-white/80",
        className
      )}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-500" />
      </span>
      {children}
    </span>
  )
}

export { Badge }
