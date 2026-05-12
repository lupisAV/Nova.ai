import type { ReactNode } from "react"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import type { Metadata } from "next"
import { CursorGlow } from "@/components/effects/cursor-glow"
import "@/app/globals.css"

export const metadata: Metadata = {
  title: "Nova AI — The AI Automation Platform for Modern Teams",
  description:
    "Nova AI is the intelligent automation platform that helps modern teams ship faster, automate workflows, and collaborate in real-time. Powered by cutting-edge artificial intelligence.",
  keywords: [
    "AI automation",
    "workflow automation",
    "AI platform",
    "productivity",
    "AI assistant",
    "SaaS",
  ],
  openGraph: {
    title: "Nova AI — The AI Automation Platform for Modern Teams",
    description:
      "Ship faster with AI. Automate workflows, get intelligent insights, and collaborate in real-time.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nova AI — The AI Automation Platform",
    description:
      "Ship faster with AI. Automate workflows, get intelligent insights, and collaborate in real-time.",
  },
  robots: "index, follow",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}>
      <body className="bg-background text-white font-sans selection:bg-violet-500/30">
        <CursorGlow />
        {children}
      </body>
    </html>
  )
}
