import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skillGroups = [
  {
    category: "Frontend Systems",
    gradient: "from-cyan-500 to-blue-500",
    glow: "shadow-cyan-500/10",
    border: "border-cyan-500/15",
    bg: "bg-cyan-500/5",
    dot: "bg-cyan-400",
    skills: [
      { name: "Next.js (App Router)", level: 95 },
      { name: "React + TypeScript", level: 95 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Framer Motion", level: 80 },
      { name: "PWA Architecture", level: 82 },
      { name: "Code Splitting & Lazy Loading", level: 88 },
      { name: "Web Vitals Instrumentation", level: 85 },
      { name: "RTL / Bilingual UI Systems", level: 78 },
    ],
  },
  {
    category: "Backend Infrastructure",
    gradient: "from-violet-500 to-purple-600",
    glow: "shadow-violet-500/10",
    border: "border-violet-500/15",
    bg: "bg-violet-500/5",
    dot: "bg-violet-400",
    skills: [
      { name: "Supabase Platform", level: 92 },
      { name: "PostgreSQL Schema Design", level: 88 },
      { name: "Row-Level Security (RLS)", level: 90 },
      { name: "Supabase Edge Functions", level: 85 },
      { name: "PostgREST API Layer", level: 88 },
      { name: "Realtime Subscriptions", level: 87 },
      { name: "Custom RPC Functions", level: 86 },
      { name: "JSONB Telemetry Modeling", level: 82 },
    ],
  },
  {
    category: "AI Engineering",
    gradient: "from-pink-500 to-rose-500",
    glow: "shadow-pink-500/10",
    border: "border-pink-500/15",
    bg: "bg-pink-500/5",
    dot: "bg-pink-400",
    skills: [
      { name: "Google Gemini API", level: 88 },
      { name: "Multimodal Inference (Text+PDF+Image)", level: 85 },
      { name: "AI Session Memory Design", level: 82 },
      { name: "Prompt Engineering", level: 84 },
      { name: "Structured Output Parsing", level: 80 },
      { name: "LaTeX Rendering (AI Output)", level: 78 },
      { name: "AI Telemetry & Logging", level: 83 },
      { name: "Response Hydration Patterns", level: 80 },
    ],
  },
  {
    category: "Security Architecture",
    gradient: "from-emerald-500 to-teal-500",
    glow: "shadow-emerald-500/10",
    border: "border-emerald-500/15",
    bg: "bg-emerald-500/5",
    dot: "bg-emerald-400",
    skills: [
      { name: "PKCE OAuth 2.0 Flow", level: 90 },
      { name: "Supabase Auth + Google SSO", level: 92 },
      { name: "Cryptographic Token Generation", level: 85 },
      { name: "Multi-role Access Control (RBAC)", level: 90 },
      { name: "Route Guard Middleware", level: 88 },
      { name: "Session Token Rotation", level: 85 },
      { name: "API Key Security Architecture", level: 83 },
      { name: "Data Isolation Patterns", level: 88 },
    ],
  },
  {
    category: "Performance Optimization",
    gradient: "from-orange-500 to-yellow-500",
    glow: "shadow-orange-500/10",
    border: "border-orange-500/15",
    bg: "bg-orange-500/5",
    dot: "bg-orange-400",
    skills: [
      { name: "Vendor Bundle Splitting", level: 88 },
      { name: "Core Web Vitals Optimization", level: 85 },
      { name: "PerformanceObserver API", level: 87 },
      { name: "DNS Prefetch + Preconnect", level: 84 },
      { name: "Module Preload Strategy", level: 86 },
      { name: "Asset Caching Architecture", level: 83 },
      { name: "Vercel Edge Deployment", level: 87 },
      { name: "Non-blocking Font Loading", level: 90 },
    ],
  },
];

function SkillBar({ skill, color, index }: { skill: { name: string; level: number }; color: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-xs font-medium text-gray-400 group-hover:text-white transition-colors">{skill.name}</span>
        <span className="text-xs text-gray-600 mono">{skill.level}%</span>
      </div>
      <div className="w-full h-1.5 bg-white/[0.03] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{ delay: index * 0.05 + 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
        />
      </div>
    </motion.div>
  );
}

function SkillCard({ group, index }: { group: typeof skillGroups[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`p-6 rounded-2xl border ${group.border} ${group.bg} hover:bg-white/[0.03] hover:border-white/[0.12] transition-all duration-300`}
    >
      {/* Category header */}
      <div className="flex items-center gap-3 mb-6">
        <div className={`w-2 h-8 rounded-full bg-gradient-to-b ${group.gradient}`} />
        <h3 className="text-base font-bold text-white">{group.category}</h3>
        <div className="ml-auto text-[10px] text-gray-600 mono px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06]">
          {group.skills.length} SKILLS
        </div>
      </div>

      {/* Skills list */}
      <div className="space-y-4">
        {group.skills.map((skill, i) => (
          <SkillBar key={skill.name} skill={skill} color={group.gradient} index={i} />
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={sectionRef} className="py-32 bg-[#050505] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-violet-500/[0.03] rounded-full blur-[160px]" />
        <div className="absolute top-1/4 left-0 w-[300px] h-[300px] bg-cyan-500/[0.02] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/5 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
            <span className="text-xs font-medium text-orange-400 tracking-widest uppercase">Technical Expertise</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-5">
            Production-Ready Skills{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-400 to-violet-400">
              Across the Full Stack
            </span>
          </h2>
          
          <p className="text-gray-400 text-lg max-w-2xl">
            Every skill listed is battle-tested in a production deployment — not tutorials, not side projects. Real systems, real constraints.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => (
            <SkillCard key={group.category} group={group} index={i} />
          ))}

          {/* Additional context card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] flex flex-col justify-between hover:bg-white/[0.03] transition-colors"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-8 rounded-full bg-gradient-to-b from-cyan-500 to-blue-500" />
                <h3 className="text-base font-bold text-white">Engineering Philosophy</h3>
              </div>
              
              <div className="space-y-4">
                {[
                  { tag: "Systems-First", desc: "Architecture decisions precede implementation. Every feature is evaluated for scalability impact before a single line is written." },
                  { tag: "Security by Design", desc: "Auth, RLS, and role enforcement are baked into the foundation layer — never retrofitted." },
                  { tag: "Measurable Quality", desc: "Performance is instrumented, not assumed. Web Vitals, latency budgets, and error rates are tracked in production." },
                ].map((item) => (
                  <div key={item.tag} className="border-l-2 border-cyan-500/30 pl-4">
                    <div className="text-xs font-semibold text-cyan-400 mb-1">{item.tag}</div>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-white/[0.06]">
              <div className="text-xs text-gray-600 uppercase tracking-widest mb-3">Also Familiar With</div>
              <div className="flex flex-wrap gap-2">
                {["Prisma ORM", "Redis", "Docker", "GitHub Actions", "REST APIs", "Zustand", "React Query"].map((t) => (
                  <span key={t} className="text-xs text-gray-500 px-2 py-1 bg-white/[0.03] rounded-full border border-white/[0.06] hover:border-white/[0.1] transition-colors">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Bottom decorative element */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center mt-12"
        >
          <div className="flex items-center gap-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />
            <div className="text-xs text-gray-600 mono tracking-widest">5 CATEGORIES • 40+ SKILLS</div>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
