import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Brain, Layers, Shield, BarChart3, Puzzle, Rocket, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Brain,
    gradient: "from-violet-500 to-purple-600",
    glow: "shadow-violet-500/25",
    border: "hover:border-violet-500/30",
    title: "AI SaaS Platform Development",
    subtitle: "Full-Stack AI Product Engineering",
    price: "From $2,500",
    desc: "End-to-end engineering of AI-powered SaaS products: from architecture design and database modeling through frontend implementation to production deployment. Includes AI inference pipeline integration (Gemini, OpenAI), role-based access control, and instrumented performance monitoring.",
    deliverables: [
      "Multi-role SaaS architecture design",
      "Gemini / OpenAI inference integration",
      "Supabase + PostgreSQL backend",
      "Production deployment on Vercel",
      "Performance instrumentation",
    ],
  },
  {
    icon: Layers,
    gradient: "from-cyan-500 to-blue-600",
    glow: "shadow-cyan-500/25",
    border: "hover:border-cyan-500/30",
    title: "Scalable Full Stack Engineering",
    subtitle: "Next.js + Supabase Product Build",
    price: "From $1,800",
    desc: "Production-grade full-stack engineering using Next.js App Router, Supabase backend, and Tailwind CSS. Includes secure auth flows, relational database design, Edge Function APIs, real-time subscriptions, and code-split frontend architecture optimized for Core Web Vitals.",
    deliverables: [
      "Next.js App Router architecture",
      "PKCE + OAuth authentication",
      "PostgreSQL schema + RLS policies",
      "Supabase Realtime integration",
      "CI/CD pipeline + deployment",
    ],
  },
  {
    icon: BarChart3,
    gradient: "from-emerald-500 to-teal-600",
    glow: "shadow-emerald-500/25",
    border: "hover:border-emerald-500/30",
    title: "Intelligent Dashboard Systems",
    subtitle: "Data-Driven Admin Platforms",
    price: "From $1,200",
    desc: "Designing and building analytics-rich admin dashboards with real-time data aggregation, RPC-backed query layers, role-scoped data visibility, and AI-enhanced reporting. Includes Web Vitals monitoring and event-sourced analytics pipelines.",
    deliverables: [
      "Role-scoped admin/instructor views",
      "Real-time analytics aggregation",
      "AI-enhanced reporting features",
      "Custom RPC function layer",
      "Export and telemetry pipelines",
    ],
  },
  {
    icon: Shield,
    gradient: "from-rose-500 to-pink-600",
    glow: "shadow-rose-500/25",
    border: "hover:border-rose-500/30",
    title: "Secure Role-Based Platforms",
    subtitle: "RBAC Architecture & Auth Systems",
    price: "From $900",
    desc: "Designing and implementing production-secure multi-role platforms: PKCE OAuth flows, Google SSO integration, custom token systems, Row-Level Security policies, middleware-enforced permission matrices, and session management hardening.",
    deliverables: [
      "PKCE OAuth 2.0 implementation",
      "Multi-role RBAC architecture",
      "Row-Level Security policies",
      "Custom token management",
      "Security audit & hardening",
    ],
  },
  {
    icon: Puzzle,
    gradient: "from-orange-500 to-amber-600",
    glow: "shadow-orange-500/25",
    border: "hover:border-orange-500/30",
    title: "AI Feature Integration",
    subtitle: "LLM Integration into Existing Products",
    price: "From $600",
    desc: "Integrating production-grade AI capabilities into existing web platforms: Gemini or OpenAI inference endpoints, document processing pipelines, conversational UI components, session-persistent chat memory, and AI telemetry logging with latency tracking.",
    deliverables: [
      "AI API integration & proxy layer",
      "Multimodal document processing",
      "Conversational UI components",
      "Inference telemetry & logging",
      "Prompt engineering & tuning",
    ],
  },
  {
    icon: Rocket,
    gradient: "from-indigo-500 to-violet-600",
    glow: "shadow-indigo-500/25",
    border: "hover:border-indigo-500/30",
    title: "Performance Engineering Audit",
    subtitle: "Core Web Vitals & Bundle Optimization",
    price: "From $400",
    desc: "Comprehensive performance analysis and optimization: bundle audit and vendor splitting, lazy-load route implementation, Core Web Vitals instrumentation (CLS, LCP, FCP, TTFB), font loading strategy, DNS prefetch/preconnect setup, and cache architecture review.",
    deliverables: [
      "Core Web Vitals audit report",
      "Bundle splitting implementation",
      "Lazy route optimization",
      "Font loading strategy",
      "Performance monitoring setup",
    ],
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`group p-6 lg:p-7 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-300 flex flex-col`}
    >
      {/* Icon & title */}
      <div className="flex items-start justify-between mb-5">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg ${service.glow} group-hover:scale-110 transition-transform duration-300`}>
          <Icon size={22} className="text-white" />
        </div>
        <span className="text-xs font-semibold text-gray-500 bg-white/[0.03] border border-white/[0.06] px-3 py-1.5 rounded-full">
          {service.price}
        </span>
      </div>

      <div className="mb-1">
        <div className="text-xs text-gray-600 uppercase tracking-widest mb-1">{service.subtitle}</div>
        <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors mb-3">
          {service.title}
        </h3>
      </div>

      <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">{service.desc}</p>

      {/* Deliverables */}
      <div className="pt-5 border-t border-white/[0.06]">
        <div className="text-xs text-gray-600 uppercase tracking-widest mb-3">Deliverables</div>
        <ul className="space-y-2">
          {service.deliverables.map((d) => (
            <li key={d} className="flex items-center gap-2 text-xs text-gray-500">
              <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient} flex-shrink-0`} />
              {d}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={sectionRef} className="py-32 bg-[#060606] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-emerald-500/[0.03] rounded-full blur-[180px] -translate-y-1/2" />
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-violet-500/[0.02] rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-pink-500/20 bg-pink-500/5 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-pink-400" />
            <span className="text-xs font-medium text-pink-400 tracking-widest uppercase">Professional Services</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-5">
            What I Build{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-violet-400 to-purple-400">
              For You
            </span>
          </h2>
          
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            Production-grade engineering services for startups, agencies, and established teams that
            need AI-integrated, scalable web systems delivered with senior-level architectural thinking.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc, i) => (
            <ServiceCard key={svc.title} service={svc} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 p-8 rounded-2xl border border-white/[0.06] bg-gradient-to-r from-cyan-500/[0.05] to-violet-500/[0.05] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Need a custom scope?</h3>
            <p className="text-gray-400 text-sm max-w-lg">
              Every project is different. If your system requires a bespoke architecture, multi-phase delivery, or a combination of the services above, let's define the right scope together.
            </p>
          </div>
          <motion.a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group flex-shrink-0 flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-shadow text-sm"
          >
            <span>Discuss Your Project</span>
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
