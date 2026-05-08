import { Code2, Layers, Shield, Zap, Brain, Database } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const pillars = [
  {
    icon: Brain,
    color: "from-cyan-400 to-blue-500",
    glow: "shadow-cyan-500/20",
    borderColor: "border-cyan-500/20",
    title: "AI Systems Integration",
    desc: "Designing and embedding production AI inference pipelines directly into application workflow layers — from prompt orchestration to structured output parsing and response hydration.",
    metrics: ["Gemini API", "Multimodal Processing", "Session Memory"]
  },
  {
    icon: Layers,
    color: "from-violet-400 to-purple-600",
    glow: "shadow-violet-500/20",
    borderColor: "border-violet-500/20",
    title: "Scalable SaaS Architecture",
    desc: "Engineering multi-tenant platforms with role-enforced access boundaries, isolated data contexts, and horizontally scalable backend infrastructure built for real-world load.",
    metrics: ["Multi-tenant", "RBAC", "Edge Functions"]
  },
  {
    icon: Shield,
    color: "from-emerald-400 to-teal-600",
    glow: "shadow-emerald-500/20",
    borderColor: "border-emerald-500/20",
    title: "Secure Backend Systems",
    desc: "Implementing PKCE auth flows, Row-Level Security policies, Edge Function middleware, and cryptographically secure session management across distributed system layers.",
    metrics: ["PKCE OAuth", "RLS", "Token Rotation"]
  },
  {
    icon: Database,
    color: "from-orange-400 to-rose-500",
    glow: "shadow-orange-500/20",
    borderColor: "border-orange-500/20",
    title: "Intelligent Data Modeling",
    desc: "Architecting PostgreSQL schemas with normalized relational structures, efficient indexing strategies, RPC function layers, and real-time subscription pipelines for live UI state.",
    metrics: ["PostgreSQL", "RPC Layer", "Realtime"]
  },
  {
    icon: Code2,
    color: "from-pink-400 to-red-500",
    glow: "shadow-pink-500/20",
    borderColor: "border-pink-500/20",
    title: "Full Stack Engineering",
    desc: "Building end-to-end product systems: from performant Next.js frontend architecture with lazy-loaded code splitting to event-driven backend APIs with optimistic UI patterns.",
    metrics: ["Next.js", "TypeScript", "Lazy Loading"]
  },
  {
    icon: Zap,
    color: "from-yellow-400 to-orange-500",
    glow: "shadow-yellow-500/20",
    borderColor: "border-yellow-500/20",
    title: "Performance Engineering",
    desc: "Instrumenting Core Web Vitals monitoring, implementing strategic asset preloading, DNS prefetching, vendor bundle splitting, and lazy-route hydration for sub-second TTI.",
    metrics: ["Web Vitals", "Bundle Splitting", "CDN"]
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

function PillarCard({ pillar, index }: { pillar: typeof pillars[0]; index: number }) {
  const Icon = pillar.icon;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={itemVariants}
      transition={{ delay: index * 0.1 }}
      className="group relative p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-500"
    >
      {/* Gradient border on hover */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
      
      {/* Icon */}
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-5 shadow-lg ${pillar.glow} group-hover:scale-110 transition-transform duration-300`}>
        <Icon size={22} className="text-white" />
      </div>
      
      {/* Title */}
      <h3 className="text-white font-semibold text-lg mb-3 group-hover:text-cyan-400 transition-colors duration-300">
        {pillar.title}
      </h3>
      
      {/* Description */}
      <p className="text-gray-500 text-sm leading-relaxed mb-4">
        {pillar.desc}
      </p>
      
      {/* Metrics */}
      <div className="flex flex-wrap gap-2">
        {pillar.metrics.map((metric) => (
          <span 
            key={metric}
            className={`px-2 py-1 text-[10px] font-medium rounded-md bg-white/[0.03] text-gray-500 border border-white/[0.04] group-hover:border-${pillar.borderColor.split('-')[1]}-500/20 transition-colors`}
          >
            {metric}
          </span>
        ))}
      </div>
      
      {/* Corner decoration */}
      <div className="absolute top-4 right-4 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
          <path 
            d="M16 4V8M16 24V28M4 16H8M24 16H28" 
            stroke="currentColor" 
            strokeWidth="1" 
            className={`text-${pillar.color.split('-')[1]}-400/30`}
          />
        </svg>
      </div>
    </motion.div>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={sectionRef} className="py-32 bg-[#060606] relative overflow-hidden">
      {/* Architectural Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid lines */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: '100% 80px'
          }}
        />
        
        {/* Radial glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-500/[0.03] rounded-full blur-[200px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/[0.02] rounded-full blur-[150px]" />
        
        {/* Data flow lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dataFlow" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="1.5" fill="rgba(34, 211, 238, 0.5)" />
              <path d="M50 50 L50 20 M50 50 L80 50" stroke="rgba(34, 211, 238, 0.2)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dataFlow)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/20 bg-violet-500/5 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
            <span className="text-xs font-medium text-violet-400 tracking-widest uppercase">Systems Architecture</span>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left: Headline */}
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
                Building Systems That{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-400 to-purple-400">
                  Think, Scale & Secure
                </span>
              </h2>
              
              {/* Architectural decorative element */}
              <div className="flex items-center gap-4 mt-8">
                <div className="w-24 h-px bg-gradient-to-r from-violet-500/50 to-transparent" />
                <div className="text-xs text-gray-600 mono tracking-widest">ENGINEERING EXCELLENCE</div>
              </div>
            </div>
            
            {/* Right: Description */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a Computer Science engineer specializing in the intersection of{" "}
                <span className="text-white font-medium">AI-integrated systems</span>,{" "}
                <span className="text-white font-medium">secure backend architectures</span>, and{" "}
                <span className="text-white font-medium">scalable full-stack product engineering</span>.
              </p>
              
              <p className="text-gray-400 leading-relaxed">
                My work is defined by an obsession with production-grade quality: systems that enforce
                strict role boundaries, integrate intelligent inference layers, and maintain
                high-throughput performance under real-world conditions. I don't just ship features —
                I architect platforms.
              </p>
              
              <p className="text-gray-400 leading-relaxed">
                My flagship deployment, the Al-Nazer English Platform, demonstrates multi-role SaaS
                orchestration, Gemini AI assistant integration, gamification engines, real-time
                messaging pipelines, and automated performance telemetry.
              </p>

              {/* Availability badge */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center gap-3 pt-4"
              >
                <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-emerald-500/20 bg-emerald-500/5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                  </span>
                  <span className="text-sm font-medium text-emerald-400">Available for premium engineering contracts</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Pillars grid */}
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {pillars.map((pillar, i) => (
            <PillarCard key={pillar.title} pillar={pillar} index={i} />
          ))}
        </motion.div>
        
        {/* Bottom decorative element */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center mt-16"
        >
          <div className="flex items-center gap-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
            <div className="flex items-center gap-2 text-xs text-gray-600 mono tracking-widest">
              <span className="w-2 h-2 rounded-full bg-cyan-400/50" />
              <span>6 CORE COMPETENCIES</span>
              <span className="w-2 h-2 rounded-full bg-violet-400/50" />
            </div>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
