"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { NAV_LINKS } from "@/lib/data"
import { cn } from "@/lib/cn"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-white/[0.04]"
            : "bg-transparent"
        )}
      >
        <Container>
          <nav className="flex h-16 items-center justify-between lg:h-18">
            <a href="#" className="flex items-center gap-2.5 font-semibold text-white">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 shadow-lg shadow-violet-500/20">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg tracking-tight">
                Nova<span className="text-white/40">AI</span>
              </span>
            </a>

            <div className="hidden items-center gap-1 lg:flex">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative px-3 py-2 text-sm text-white/50 transition-colors duration-200 hover:text-white group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-violet-400 to-indigo-400 transition-all duration-300 group-hover:w-3/4" />
                </a>
              ))}
            </div>

            <div className="hidden items-center gap-3 lg:flex">
              <Button variant="ghost" size="sm">
                Sign in
              </Button>
              <Button size="sm">
                Get Started
                <span className="ml-1 opacity-70">→</span>
              </Button>
            </div>

            <button
              className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg text-white/70 hover:text-white lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </nav>
        </Container>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex h-full flex-col items-center justify-center gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-medium text-white/50 transition-colors hover:text-white"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="flex flex-col gap-4 mt-6"
              >
                <Button variant="ghost" size="lg">
                  Sign in
                </Button>
                <Button size="lg">
                  Get Started
                  <span className="ml-1 opacity-70">→</span>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
