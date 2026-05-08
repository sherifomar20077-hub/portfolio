import { useRef } from "react";
import { AlertTriangle, Cpu, Lock, TrendingUp, GitBranch, Server, Layers, Shield, Zap, Code2, Database, ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";

const phases = [
  {
    icon: AlertTriangle,
    color: "from-red-500 to-orange-500",
    label: "01 — Challenge",
    title: "Unified AI-Driven Educational Infrastructure",
    content: [
      "The client needed a single platform to replace fragmented tooling used by instructors, students, and administrators. Core constraints included: enforcing strict role isolation (admin vs. instructor vs. student workflows must never bleed across contexts), embedding an AI tutoring layer that could process uploaded documents and respond with contextual, LaTeX-rendered educational content, and sustaining a gamified engagement model without degrading performance under concurrent session load.",
      "Additional complexity: the platform required a real-time messaging layer, a quiz engine with AI-powered weak-point analysis, a structured content hierarchy (courses → levels → units → summaries), and a glossary system — all simultaneously supporting Arabic and English content with RTL layout switching.",
    ],
    metrics: ["3 User Roles", "AI-Powered", "Multilingual", "Real-time"]
  },
  {
    icon: GitBranch,
    color: "from-blue-500 to-cyan-500",
    label: "02 — Architecture",
    title: "Decoupled Multi-Layer System Design",
    content: [
      "Chose a strictly decoupled architecture: Next.js on the frontend communicates exclusively through Supabase's PostgREST API layer, with no direct database exposure to the client. Business logic lives in PostgreSQL stored procedures (RPC functions) and Supabase Edge Functions, keeping compute at the infrastructure boundary.",
      "Designed a 3-tier RBAC model enforced at two levels: application-layer route guards (ProtectedRoute component wrapping role-gated pages) and database-layer Row-Level Security policies scoping all read/write operations to authenticated user context. Admin status verification runs a dual-path check — querying both the admins table and profiles.role with a 5-second race-condition timeout — and caches results to localStorage with 3-minute TTL to prevent re-verification latency on route transitions.",
    ],
    metrics: ["PostgREST API", "RPC Layer", "Edge Functions", "3-Tier RBAC"]
  },
  {
    icon: Cpu,
    color: "from-violet-500 to-purple-600",
    label: "03 — AI Orchestration",
    title: "Gemini Inference Pipeline with Session Memory",
    content: [
      "The AI assistant operates as a two-phase pipeline: Phase 1 (Upload) — the user submits a PDF or image document which is base64-encoded client-side and dispatched to a Supabase Edge Function that proxies the multimodal payload to the Gemini API with a structured system prompt enforcing educational response format. Phase 2 (Chat) — subsequent messages carry session context allowing the model to maintain conversational continuity across the tutoring interaction.",
      "All AI interactions are persisted to the assistant_messages table with full telemetry: session_id for grouping, user_message and assistant_response as text columns, response_time_ms for latency tracking, ai_model_used for model attribution, and a JSONB metadata column for extensible future analytics. This creates an auditable inference log usable for fine-tuning feedback loops.",
    ],
    metrics: ["Gemini 1.5", "Multimodal", "Session Memory", "LaTeX Output"]
  },
  {
    icon: Lock,
    color: "from-emerald-500 to-teal-500",
    label: "04 — Security Model",
    title: "Defense-in-Depth Authentication Architecture",
    content: [
      "Implemented PKCE (Proof Key for Code Exchange) flow via Supabase Auth — the most secure OAuth 2.0 variant for public clients — with Google SSO integration and automatic session refresh token rotation. Custom password reset flow generates 32-byte cryptographically random tokens using the Web Crypto API (crypto.getRandomValues), stores them with a 24-hour expiry, and enforces single-use consumption via used_at timestamp.",
      "Row-Level Security policies enforce data isolation at the PostgreSQL layer — no application-level filtering can accidentally expose cross-user data. The Supabase client is initialized with PKCE flowType, persistent session storage, and a custom X-Client-Info header for request attribution. Security-sensitive pages trigger a SecurityWarningPage route for DevTools detection scenarios.",
    ],
    metrics: ["PKCE OAuth", "Google SSO", "Row-Level Security", "Web Crypto"]
  },
  {
    icon: Server,
    color: "from-orange-500 to-yellow-500",
    label: "05 — Performance Engineering",
    title: "Sub-Second Interaction Budget Across All Routes",
    content: [
      "Implemented route-level code splitting across 43 lazy-loaded chunks, vendor bundle isolation (react-vendor, supabase-vendor, ui-vendor), and modulepreload link injection for critical path chunks. Font loading is deferred using media='print' with onload switching — eliminating render-blocking typography assets.",
      "A PerformanceObserver monitoring class instruments all Core Web Vitals in production: CLS via layout-shift entries, FID via first-input processing delta, LCP via largest-contentful-paint observer, FCP via paint observer, and TTFB via navigation timing. Metrics are forwarded to Google Analytics via gtag for longitudinal performance regression tracking. DNS prefetch directives target googleapis.com and gstatic.com, reducing font handshake latency.",
    ],
    metrics: ["43 Chunks", "Web Vitals", "Lazy Loading", "DNS Prefetch"]
  },
  {
    icon: TrendingUp,
    color: "from-pink-500 to-rose-500",
    label: "06 — Engineering Outcomes",
    title: "Production-Grade System Delivering Measurable Results",
    content: [
      "Delivered a production-deployed, multi-tenant SaaS platform supporting concurrent admin, instructor, and student sessions with zero role-boundary violations. The Gemini AI assistant processes multimodal educational content and delivers LaTeX-accurate mathematical explanations within a sub-3-second inference window. Real-time messaging sustains 10 events/second throughput with full participant isolation.",
      "The gamification engine successfully drives measurable session engagement through digital badge progression. The quiz weak-points dashboard provides AI-analyzed performance breakdowns per student, enabling instructors to intervene with precision. The admin analytics pipeline — backed by get_admin_analytics_summary RPC — delivers aggregated system-wide metrics without frontend N+1 query patterns.",
    ],
    metrics: ["Production Live", "< 3s AI Response", "10 eps", "Zero Breaches"]
  },
];

const architectureLayers = [
  { 
    label: "Client / PWA", 
    sublabel: "React SPA — Lazy Routes — Web Vitals", 
    color: "from-cyan-500 to-blue-500",
    icon: Layers
  },
  { 
    label: "Edge Network", 
    sublabel: "CDN + Asset Delivery + Middleware", 
    color: "from-blue-500 to-indigo-500",
    icon: Zap
  },
  { 
    label: "PKCE Auth Boundary", 
    sublabel: "OAuth — Google SSO — Token Rotation", 
    color: "from-violet-500 to-purple-500",
    icon: Shield
  },
  { 
    label: "RBAC Layer", 
    sublabel: "Admin / Instructor / Student — Permission Matrix", 
    color: "from-purple-500 to-pink-500",
    icon: Lock
  },
  { 
    label: "AI Orchestration", 
    sublabel: "Gemini API — Session Memory — LaTeX", 
    color: "from-pink-500 to-rose-500",
    icon: Cpu
  },
  { 
    label: "Supabase Backend", 
    sublabel: "PostgREST — Edge Functions — Realtime", 
    color: "from-orange-500 to-amber-500",
    icon: Server
  },
  { 
    label: "PostgreSQL + RLS", 
    sublabel: "Normalized Schema — Row-Level Security", 
    color: "from-emerald-500 to-teal-500",
    icon: Database
  },
];

function ArchitectureFlow() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="mb-20 p-8 lg:p-10 rounded-2xl border border-white/[0.06] bg-white/[0.02] relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-violet-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.1] bg-white/[0.03] mb-4">
            <span className="text-xs font-medium text-gray-500 tracking-widest uppercase">System Architecture</span>
          </div>
          <h3 className="text-xl font-semibold text-white">End-to-End Data Flow Architecture</h3>
        </div>

        <div className="flex flex-col items-center gap-0 max-w-3xl mx-auto">
          {architectureLayers.map((layer, i) => {
            const Icon = layer.icon;
            return (
              <motion.div
                key={layer.label}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-full"
              >
                <div className={`flex items-center gap-4 p-4 rounded-xl border border-white/[0.06] bg-gradient-to-r ${layer.color} bg-opacity-[0.03] hover:bg-opacity-[0.05] transition-all group cursor-default`}>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${layer.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <Icon size={22} className="text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-white">{layer.label}</span>
                      <span className="text-[10px] text-gray-600 mono px-1.5 py-0.5 rounded bg-white/[0.03]">L{i + 1}</span>
                    </div>
                    <div className="text-xs text-gray-500 mt-0.5">{layer.sublabel}</div>
                  </div>
                  <ArrowRight size={16} className="text-gray-600 group-hover:text-gray-400 transition-colors opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                </div>

                {i < architectureLayers.length - 1 && (
                  <div className="flex justify-center py-1">
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={isInView ? { height: 20, opacity: 1 } : {}}
                      transition={{ delay: i * 0.1 + 0.05, duration: 0.3 }}
                      className="w-px bg-gradient-to-b from-white/20 to-transparent"
                    />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

function PhaseCard({ phase, index }: { phase: typeof phases[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = phase.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group p-6 lg:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.03] hover:border-white/[0.1] transition-all duration-300"
    >
      <div className="flex flex-col lg:flex-row lg:items-start gap-5">
        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${phase.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-105 transition-transform duration-300`}>
          <Icon size={24} className="text-white" />
        </div>
        
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <div className="text-xs font-semibold text-gray-600 uppercase tracking-widest">{phase.label}</div>
          </div>
          
          <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
            {phase.title}
          </h3>
          
          <div className="space-y-3 mb-5">
            {phase.content.map((para, i) => (
              <p key={i} className="text-gray-400 leading-relaxed text-sm lg:text-base">
                {para}
              </p>
            ))}
          </div>
          
          {/* Metrics */}
          <div className="flex flex-wrap gap-2">
            {phase.metrics.map((metric) => (
              <span 
                key={metric}
                className="px-2.5 py-1 text-[10px] font-medium rounded-md bg-white/[0.03] text-gray-500 border border-white/[0.06]"
              >
                {metric}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function CaseStudy() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="case-study" ref={sectionRef} className="py-32 bg-[#060606] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-cyan-500/[0.03] rounded-full blur-[180px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-500/[0.02] rounded-full blur-[150px]" />
        
        {/* Subtle grid */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)`,
            backgroundSize: '100% 100px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-xs font-medium text-emerald-400 tracking-widest uppercase">Deep Technical Analysis</span>
          </div>
          
          <div className="max-w-3xl">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-5">
              Architecting a Production{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400">
                AI-SaaS Platform
              </span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              A comprehensive technical breakdown of engineering decisions spanning authentication,
              AI orchestration, role enforcement, performance instrumentation, and real-time infrastructure.
            </p>
          </div>
        </motion.div>

        {/* Architecture flow diagram */}
        <ArchitectureFlow />

        {/* Case study phases */}
        <div className="space-y-4">
          {phases.map((phase, i) => (
            <PhaseCard key={phase.label} phase={phase} index={i} />
          ))}
        </div>

        {/* Bottom decorative element */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center mt-16"
        >
          <div className="flex items-center gap-6">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
            <div className="text-xs text-gray-600 mono tracking-widest">6 ENGINEERING PHASES</div>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
