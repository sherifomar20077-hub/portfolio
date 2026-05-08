import { useRef } from "react";
import { ExternalLink, Users, Brain, Shield, Zap, BarChart3, MessageSquare, Trophy, BookOpen, CheckCircle2, ArrowUpRight, Layers, Server, Database } from "lucide-react";
import { motion, useInView } from "framer-motion";

const systemModules = [
  {
    icon: Users,
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
    border: "border-cyan-400/20",
    hoverBorder: "group-hover:border-cyan-400/40",
    title: "3-Tier RBAC Engine",
    desc: "Admin / Instructor / Student role separation with isolated route guards, middleware-enforced permission matrices, and per-role dashboard contexts.",
    metric: "3 Roles"
  },
  {
    icon: Brain,
    color: "text-violet-400",
    bg: "bg-violet-400/10",
    border: "border-violet-400/20",
    hoverBorder: "group-hover:border-violet-400/40",
    title: "Gemini AI Assistant",
    desc: "Multimodal AI assistant supporting document upload, contextual inference, LaTeX-rendered mathematical output, and session-persisted conversation memory.",
    metric: "Gemini 1.5"
  },
  {
    icon: BarChart3,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/20",
    hoverBorder: "group-hover:border-emerald-400/40",
    title: "Analytics & Telemetry",
    desc: "Real-time admin analytics dashboard with RPC-aggregated PostgreSQL summaries, Web Vitals instrumentation (CLS, FID, LCP, FCP, TTFB).",
    metric: "5 Metrics"
  },
  {
    icon: Trophy,
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    border: "border-yellow-400/20",
    hoverBorder: "group-hover:border-yellow-400/40",
    title: "Gamification Engine",
    desc: "Digital badge system, achievement tracking, and progressive learning milestones driving engagement through behavioral reward mechanics.",
    metric: "∞ Badges"
  },
  {
    icon: MessageSquare,
    color: "text-pink-400",
    bg: "bg-pink-400/10",
    border: "border-pink-400/20",
    hoverBorder: "group-hover:border-pink-400/40",
    title: "Real-time Messaging",
    desc: "Individual and group chat infrastructure built on Supabase Realtime with 10 events/second subscription rate, participant management, and AI-powered summarization.",
    metric: "10 eps"
  },
  {
    icon: BookOpen,
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    border: "border-orange-400/20",
    hoverBorder: "group-hover:border-orange-400/40",
    title: "Adaptive Quiz System",
    desc: "Dynamic quiz engine with AI-generated explanations, attempt history tracking, weak-point identification, and Gemini-powered performance analysis.",
    metric: "AI-Powered"
  },
  {
    icon: Shield,
    color: "text-teal-400",
    bg: "bg-teal-400/10",
    border: "border-teal-400/20",
    hoverBorder: "group-hover:border-teal-400/40",
    title: "PKCE Auth Pipeline",
    desc: "Supabase PKCE OAuth flow with Google SSO, custom password reset token system (cryptographically secure random generation), and persistent session management.",
    metric: "PKCE"
  },
  {
    icon: Zap,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/20",
    hoverBorder: "group-hover:border-blue-400/40",
    title: "PWA + Performance",
    desc: "Progressive Web App manifest with service worker registration, vendor bundle splitting (react/supabase/ui chunks), modulepreload hints, and DNS prefetch optimization.",
    metric: "43 Chunks"
  },
];

const stackItems = [
  { category: "Frontend", icon: Layers, color: "text-cyan-400", items: ["Next.js (App Router)", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "LaTeX Renderer"] },
  { category: "Backend", icon: Server, color: "text-violet-400", items: ["Supabase Platform", "PostgreSQL (RLS)", "Edge Functions", "Supabase Realtime", "Custom RPC Layer"] },
  { category: "AI Layer", icon: Brain, color: "text-pink-400", items: ["Google Gemini API", "Multimodal Processing", "Document Analysis", "Session Memory", "Structured Output"] },
  { category: "Auth & Security", icon: Shield, color: "text-emerald-400", items: ["PKCE OAuth Flow", "Google SSO", "Custom Reset Tokens", "Row-Level Security", "Admin Middleware"] },
  { category: "Infrastructure", icon: Database, color: "text-orange-400", items: ["Vercel Edge Network", "CDN Asset Delivery", "PWA Manifest", "Web Vitals Monitoring", "Bundle Splitting"] },
];

const engineeringHighlights = [
  "Multi-vendor bundle splitting across react, supabase, and ui chunk namespaces for optimized TTI",
  "Admin status verification with dual-path check (admins table + profiles.role) and 5-second race-condition timeout guard",
  "Cryptographically secure password reset tokens using Web Crypto API with 24-hour TTL and single-use enforcement",
  "Supabase Realtime subscription layer configured at 10 events/second with participant-scoped message delivery",
  "AI chat sessions persisted to assistant_messages table with response_time_ms telemetry and model attribution",
  "Dynamic glossary system with RPC-backed search, student history tracking, favorites, and inline annotations",
  "Lazy-loaded route architecture with 43 code-split chunks for sub-second route transitions",
  "Core Web Vitals PerformanceObserver instrumentation reporting CLS, FID, LCP, FCP, and TTFB to analytics pipeline",
];

// Architecture Flow Component
function ArchitectureFlow() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const layers = [
    { label: "Client / PWA", sublabel: "React SPA — Lazy Routes — Web Vitals", color: "from-cyan-500 to-blue-500", icon: Layers },
    { label: "Edge Network", sublabel: "CDN + Asset Delivery + Middleware", color: "from-blue-500 to-indigo-500", icon: Server },
    { label: "PKCE Auth", sublabel: "OAuth — Google SSO — Token Rotation", color: "from-violet-500 to-purple-500", icon: Shield },
    { label: "RBAC Layer", sublabel: "Admin / Instructor / Student", color: "from-purple-500 to-pink-500", icon: Users },
    { label: "AI Orchestration", sublabel: "Gemini API — Session Memory", color: "from-pink-500 to-rose-500", icon: Brain },
    { label: "Supabase Backend", sublabel: "PostgREST — Edge Functions — Realtime", color: "from-orange-500 to-amber-500", icon: Database },
    { label: "PostgreSQL + RLS", sublabel: "Normalized Schema — Row-Level Security", color: "from-emerald-500 to-teal-500", icon: CheckCircle2 },
  ];

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="mb-20 p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.1] bg-white/[0.03] mb-4">
            <span className="text-xs font-medium text-gray-500 tracking-widest uppercase">System Architecture</span>
          </div>
          <h3 className="text-lg font-semibold text-white">7-Layer Infrastructure Stack</h3>
        </div>
        
        <div className="flex flex-col items-center gap-2">
          {layers.map((layer, i) => {
            const Icon = layer.icon;
            return (
              <motion.div
                key={layer.label}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-xl"
              >
                <div className={`flex items-center gap-4 p-4 rounded-xl border border-white/[0.06] bg-gradient-to-r ${layer.color} bg-opacity-5`}>
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${layer.color} flex items-center justify-center flex-shrink-0`}>
                    <Icon size={18} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-white">{layer.label}</div>
                    <div className="text-xs text-gray-500">{layer.sublabel}</div>
                  </div>
                  <div className="text-xs text-gray-600 mono">L{i + 1}</div>
                </div>
                
                {i < layers.length - 1 && (
                  <div className="flex justify-center py-1">
                    <motion.div 
                      initial={{ height: 0 }}
                      animate={isInView ? { height: 16 } : {}}
                      transition={{ delay: i * 0.1 + 0.05, duration: 0.3 }}
                      className="w-px bg-gradient-to-b from-white/20 to-white/5"
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

export default function FeaturedProject() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="project" ref={sectionRef} className="py-32 bg-[#050505] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-500/[0.03] rounded-full blur-[180px]" />
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-violet-500/[0.02] rounded-full blur-[150px]" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
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
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span className="text-xs font-medium text-cyan-400 tracking-widest uppercase">Flagship Production System</span>
          </div>
          
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-5">
                Al-Nazer Intelligent{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
                  Learning Platform
                </span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                A production-deployed, AI-augmented educational SaaS system with multi-role orchestration,
                real-time data pipelines, gamified learning mechanics, and a Gemini-powered intelligent
                tutoring assistant — built on a Supabase/PostgreSQL backend with PKCE-secured auth flows.
              </p>
            </div>
            
            <motion.a
              href="https://elnazer.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-shrink-0 group flex items-center gap-3 px-6 py-3.5 bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-shadow"
            >
              <span>View Live System</span>
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.a>
          </div>
        </motion.div>

        {/* Project metadata bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-16"
        >
          {[
            { label: "Platform Type", value: "Multi-tenant SaaS" },
            { label: "AI Model", value: "Google Gemini 1.5" },
            { label: "Auth Protocol", value: "PKCE + OAuth 2.0" },
            { label: "Deployment", value: "Vercel Edge Network" },
          ].map((m, i) => (
            <motion.div 
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.05 }}
              className="p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.1] transition-colors"
            >
              <div className="text-xs text-gray-600 uppercase tracking-widest mb-2">{m.label}</div>
              <div className="text-sm font-semibold text-white">{m.value}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Architecture Flow */}
        <ArchitectureFlow />

        {/* System modules grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-semibold text-white">System Modules & Subsystems</h3>
            <div className="text-xs text-gray-600 mono">8 INTEGRATED COMPONENTS</div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {systemModules.map((mod, i) => {
              const Icon = mod.icon;
              return (
                <motion.div
                  key={mod.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.05 }}
                  className={`group p-5 rounded-2xl border ${mod.border} ${mod.bg} ${mod.hoverBorder} hover:bg-white/[0.03] transition-all duration-300 cursor-default`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-2 rounded-lg ${mod.bg}`}>
                      <Icon size={20} className={mod.color} />
                    </div>
                    <span className="text-[10px] font-medium text-gray-600 mono">{mod.metric}</span>
                  </div>
                  <h4 className="text-white font-semibold text-sm mb-2 group-hover:text-cyan-400 transition-colors">{mod.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{mod.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Technical stack breakdown */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-xl font-semibold text-white mb-8">Technical Stack Architecture</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {stackItems.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div 
                  key={s.category}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.7 + i * 0.05 }}
                  className="p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.03] transition-colors"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Icon size={14} className={s.color} />
                    <div className={`text-xs font-semibold ${s.color} uppercase tracking-widest`}>{s.category}</div>
                  </div>
                  <ul className="space-y-2">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <div className={`w-1 h-1 rounded-full ${s.color.replace('text-', 'bg-')} mt-1.5 flex-shrink-0 opacity-60`} />
                        <span className="text-gray-400 text-xs leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Engineering highlights */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="p-8 rounded-2xl border border-violet-500/15 bg-violet-500/[0.03] relative overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-violet-500/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white">Key Engineering Highlights</h3>
              <div className="text-xs text-gray-600 mono">8 PRODUCTION INNOVATIONS</div>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {engineeringHighlights.map((h, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.9 + i * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-7 h-7 rounded-lg bg-violet-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-[10px] font-bold text-violet-400 mono">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{h}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm text-gray-400">System Status:</span>
              <span className="text-sm font-medium text-emerald-400">Live Production</span>
            </div>
            <div className="w-px h-4 bg-white/10" />
            <a 
              href="https://elnazer.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1"
            >
              elnazer.vercel.app
              <ExternalLink size={12} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
