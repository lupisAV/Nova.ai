import { cn } from "@/lib/cn"

function FloatingOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div
        className={cn(
          "absolute left-[15%] top-[20%] h-64 w-64 rounded-full bg-gradient-to-br from-violet-400/10 to-transparent blur-2xl",
          "animate-float"
        )}
      />
      <div
        className={cn(
          "absolute right-[10%] top-[40%] h-48 w-48 rounded-full bg-gradient-to-bl from-cyan-400/10 to-transparent blur-2xl",
          "animate-float-delayed"
        )}
      />
      <div
        className={cn(
          "absolute bottom-[30%] left-[30%] h-36 w-36 rounded-full bg-gradient-to-tr from-indigo-400/10 to-transparent blur-2xl",
          "animate-float"
        )}
        style={{ animationDelay: "4s" }}
      />
    </div>
  )
}

export { FloatingOrbs }
