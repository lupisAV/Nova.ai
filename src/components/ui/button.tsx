import { cn } from "@/lib/cn"
import { type ButtonHTMLAttributes, forwardRef } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline"
  size?: "sm" | "md" | "lg"
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-300 cursor-pointer whitespace-nowrap",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          "disabled:pointer-events-none disabled:opacity-50",
          {
            primary:
              "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/20 hover:shadow-violet-500/40 hover:shadow-xl hover:from-violet-500 hover:to-indigo-500 active:scale-[0.98]",
            secondary:
              "bg-white/[0.04] text-white backdrop-blur-sm border border-white/[0.06] hover:bg-white/[0.08] hover:border-white/[0.12] active:scale-[0.98]",
            ghost:
              "text-white/70 hover:text-white hover:bg-white/[0.04] active:scale-[0.98]",
            outline:
              "border border-white/[0.08] text-white hover:bg-white/[0.04] hover:border-white/[0.16] active:scale-[0.98]",
          }[variant],
          {
            sm: "h-9 px-4 text-sm",
            md: "h-11 px-6 text-sm",
            lg: "h-13 px-8 text-base",
          }[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = "Button"

export { Button }
export type { ButtonProps }
