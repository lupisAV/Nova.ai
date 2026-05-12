import {
  Workflow,
  Zap,
  BarChart3,
  Bot,
  LineChart,
  Users,
  Slack,
  Github,
  Figma,
  Database,
  Cloud,
  Globe,
  Mail,
  MessageSquare,
  FileText,
  Calendar,
  CheckCircle,
  type LucideIcon,
} from "lucide-react"

export const NAV_LINKS = [
  { label: "Product", href: "#features" },
  { label: "Solutions", href: "#bento" },
  { label: "Pricing", href: "#pricing" },
  { label: "Docs", href: "#faq" },
  { label: "Blog", href: "#" },
]

export const FEATURES = [
  {
    icon: Workflow,
    title: "AI Workflows",
    description:
      "Build intelligent automation workflows that adapt in real-time. No code required — just describe what you need.",
  },
  {
    icon: Zap,
    title: "Task Automation",
    description:
      "Eliminate repetitive work. Nova learns your patterns and automates the boring stuff so you can focus on what matters.",
  },
  {
    icon: BarChart3,
    title: "Smart Dashboards",
    description:
      "Real-time analytics that think for you. Spot trends, anomalies, and opportunities before they happen.",
  },
  {
    icon: Bot,
    title: "AI Assistant",
    description:
      "Your personal AI copilot. Summarize meetings, draft emails, analyze documents — all in natural language.",
  },
  {
    icon: LineChart,
    title: "Predictive Analytics",
    description:
      "Stop guessing. Nova's models predict churn, forecast revenue, and surface insights you'd never find manually.",
  },
  {
    icon: Users,
    title: "Real-time Collaboration",
    description:
      "Work together with your team and AI simultaneously. Every change syncs instantly across all devices.",
  },
]

export const BENTO_CARDS = [
  {
    title: "Ship faster with AI",
    description: "From idea to production in hours, not weeks.",
    size: "tall",
    gradient: "from-violet-600/20 to-indigo-600/20",
  },
  {
    title: "10x Productivity",
    description: "Teams using Nova ship features 10x faster than traditional workflows.",
    size: "wide",
    gradient: "from-cyan-600/20 to-blue-600/20",
    stat: "10x",
    statLabel: "faster delivery",
  },
  {
    title: "Enterprise Security",
    description: "SOC 2 Type II, GDPR compliant, end-to-end encrypted.",
    size: "small",
    gradient: "from-emerald-600/20 to-teal-600/20",
  },
  {
    title: "99.99% Uptime",
    description: "Built on infrastructure that never sleeps. Your workflows keep running.",
    size: "small",
    gradient: "from-amber-600/20 to-orange-600/20",
  },
  {
    title: "Real-time Sync",
    description: "All your data, always in sync. Across any device, anywhere in the world.",
    size: "tall",
    gradient: "from-fuchsia-600/20 to-pink-600/20",
  },
]

export const STATISTICS = [
  { value: "99.9%", label: "Uptime SLA", suffix: "" },
  { value: "10", label: "Faster Delivery", suffix: "x" },
  { value: "500", label: "Teams Building", suffix: "K+" },
  { value: "5", label: "Response Time", suffix: "ms", prefix: "<" },
]

export const INTEGRATIONS: { name: string; icon: LucideIcon }[] = [
  { name: "Slack", icon: Slack },
  { name: "GitHub", icon: Github },
  { name: "Figma", icon: Figma },
  { name: "PostgreSQL", icon: Database },
  { name: "AWS", icon: Cloud },
  { name: "Webhook", icon: Globe },
  { name: "Gmail", icon: Mail },
  { name: "Teams", icon: MessageSquare },
  { name: "Notion", icon: FileText },
  { name: "Calendar", icon: Calendar },
  { name: "Jira", icon: CheckCircle },
  { name: "Linear", icon: CheckCircle },
  { name: "Vercel", icon: Globe },
  { name: "Supabase", icon: Database },
  { name: "Stripe", icon: CheckCircle },
  { name: "Resend", icon: Mail },
]

export const TESTIMONIALS = [
  {
    name: "Erik Thompson",
    role: "CTO at Vercel",
    quote:
      "Nova has completely transformed how our engineering team operates. We've reduced our deployment cycle from 2 weeks to 2 days. The AI-powered insights are genuinely game-changing.",
    avatar: "SC",
  },
  {
    name: "Andrew Lee",
    role: "VP Engineering at Stripe",
    quote:
      "The automation capabilities are unlike anything I've seen. Nova handles our complex workflows effortlessly, and the real-time collaboration features keep our distributed team perfectly synchronized.",
    avatar: "MR",
  },
  {
    name: "Emily Chen",
    role: "Head of Product at Linear",
    quote:
      "We evaluated 12 platforms before choosing Nova. The combination of powerful AI, elegant UX, and enterprise-grade security made it an obvious choice. Our team productivity doubled in the first month.",
    avatar: "EN",
  },
]

export const PRICING_PLANS = [
  {
    name: "Starter",
    description: "Perfect for small teams getting started with AI automation.",
    monthlyPrice: 29,
    yearlyPrice: 24,
    features: [
      "Up to 10 team members",
      "50 AI workflows / month",
      "Basic analytics",
      "Email support",
      "API access",
      "5 integrations",
    ],
    cta: "Start Free Trial",
    highlighted: false,
  },
  {
    name: "Pro",
    description: "For growing teams that need advanced AI capabilities.",
    monthlyPrice: 79,
    yearlyPrice: 64,
    features: [
      "Up to 50 team members",
      "Unlimited AI workflows",
      "Advanced analytics & insights",
      "Priority support",
      "Full API access",
      "Unlimited integrations",
      "Custom AI models",
      "SSO & SAML",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "For large organizations with custom requirements.",
    monthlyPrice: null,
    yearlyPrice: null,
    features: [
      "Unlimited team members",
      "Unlimited everything",
      "Custom AI model training",
      "Dedicated support engineer",
      "On-premise deployment",
      "Custom integrations",
      "Advanced security controls",
      "99.99% SLA guarantee",
      "Audit logs & compliance",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
]

export const FAQ_ITEMS = [
  {
    question: "What makes Nova different from other AI platforms?",
    answer:
      "Nova combines state-of-the-art AI models with an intuitive, no-code workflow builder. Unlike traditional automation tools, Nova learns from your team's patterns and proactively suggests optimizations. Our real-time collaboration features and enterprise-grade security make it the only platform that scales from startup to Fortune 500.",
  },
  {
    question: "How does the pricing work?",
    answer:
      "We offer transparent, usage-based pricing with three tiers to fit your needs. The Starter plan is great for small teams, Pro unlocks unlimited workflows and advanced features, and Enterprise provides custom solutions for large organizations. All plans include a 14-day free trial with no credit card required.",
  },
  {
    question: "Is my data secure with Nova?",
    answer:
      "Absolutely. Nova is SOC 2 Type II certified, GDPR compliant, and employs end-to-end encryption for all data — both in transit and at rest. We use isolated environments for each customer, and you maintain full ownership of your data at all times. Enterprise customers can opt for on-premise deployment.",
  },
  {
    question: "Can I integrate Nova with my existing tools?",
    answer:
      "Yes. Nova integrates with over 100 tools including Slack, GitHub, Jira, Figma, Notion, and more. Our API allows for custom integrations, and our webhook system enables real-time data flow between Nova and any service that supports HTTP callbacks.",
  },
  {
    question: "Do I need coding experience to use Nova?",
    answer:
      "Not at all. Nova's visual workflow builder uses natural language processing to understand your requirements. Simply describe what you want to automate in plain English, and Nova builds the workflow for you. For developers, we offer a powerful API and SDK for custom implementations.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "All plans include email support with a guaranteed response time. Pro customers receive priority support with a 2-hour response SLA. Enterprise customers get a dedicated support engineer, custom onboarding, and 24/7 phone support. Our documentation is comprehensive and constantly updated.",
  },
]

export const FOOTER_LINKS = {
  Product: [
    "Workflows",
    "Automation",
    "Analytics",
    "AI Assistant",
    "Integrations",
    "Pricing",
  ],
  Resources: [
    "Documentation",
    "API Reference",
    "Guides",
    "Blog",
    "Community",
    "Changelog",
  ],
  Company: ["About", "Careers", "Contact", "Partners", "Press", "Brand"],
  Legal: [
    "Privacy Policy",
    "Terms of Service",
    "Cookie Policy",
    "Security",
    "GDPR",
    "SLA",
  ],
}
