import { Sparkles } from "lucide-react"
import { Container } from "@/components/ui/container"
import { FOOTER_LINKS } from "@/lib/data"

export function Footer() {
  return (
    <footer className="border-t border-white/[0.04] py-20 lg:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <a href="#" className="flex items-center gap-2.5 font-semibold text-white">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 shadow-lg shadow-violet-500/20">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg tracking-tight">
                Nova<span className="text-white/40">AI</span>
              </span>
            </a>
            <p className="text-sm leading-relaxed text-white/40 max-w-xs">
              The intelligent automation platform for modern teams. Ship faster with AI-powered workflows.
            </p>
            <div className="flex gap-4 mt-2">
              {["Twitter", "GitHub", "Discord", "LinkedIn"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-xs text-white/30 transition-colors hover:text-white/60"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category} className="flex flex-col gap-3">
              <h3 className="text-sm font-medium text-white/70">{category}</h3>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/35 transition-colors hover:text-white/60"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-white/[0.04] pt-8 sm:flex-row">
          <p className="text-xs text-white/25">
            &copy; {new Date().getFullYear()} Nova AI. All rights reserved.
          </p>
          <p className="text-xs text-white/20">
            Crafted with precision for the modern web.
          </p>
        </div>
      </Container>
    </footer>
  )
}
