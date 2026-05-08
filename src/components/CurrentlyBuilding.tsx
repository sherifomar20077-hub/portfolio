import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FlaskConical, Bot, Network, ArrowRight } from "lucide-react";

const concepts = [
  {
    icon: Bot,
    status: "In Design",
    statusColor: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
    gradient: "from-cyan-400 to-blue-500",
    number: "01",
    title: "AI-Powered Diagnostic & Assessment Engine",
    tagline: "Adaptive intelligence layer for educational performance analytics",
    description:
      "A next-generation assessment system that uses Gemini multimodal inference to analyze student responses, identify cognitive weak-point clusters, and generate personalized learning path recommendations. The system orchestrates a pipeline of structured prompt templates → model inference → response parsing → PostgreSQL storage → real-time UI hydration — creating a closed feedback loop between student behavior and adaptive content delivery.",
    architecture: [
      "Gemini-backed response evaluation pipeline",
      "Cognitive cluster analysis with JSONB persistence",
      "Adaptive content recommendation engine",
      "Real-time weakness visualization dashboard",
      "Instructor intervention trigger system",
    ],
    tags: ["Gemini AI", "Adaptive Learning", "PostgreSQL", "Real-time Analytics"],
  },
  {
    icon: Network,
    status: "Prototyping",
    statusColor: "text-violet-400 bg-violet-400/10 border-violet-400/20",
    gradient: "from-violet-400 to-purple-600",
    number: "02",
    title: "Secure Multi-Tenant Automation Platform",
    tagline: "Role-isolated workflow automation with AI decision nodes",
    description:
      "A B2B SaaS platform enabling organizations to build secure, role-isolated automation workflows with embedded AI decision nodes. Each tenant operates in a fully isolated data context enforced at the PostgreSQL RLS layer. Workflows are represented as directed graphs with conditional branching, human-in-the-loop approval gates, and Gemini-powered classification nodes that route process execution based on unstructured input analysis.",
    architecture: [
      "Multi-tenant data isolation via RLS",
      "Visual workflow graph builder (DAG engine)",
      "AI classification nodes with Gemini inference",
      "Human-in-the-loop approval gates",
      "Supabase Edge Function execution runtime",
    ],
    tags: ["Multi-tenant SaaS", "Workflow Automation", "RBAC", "Gemini", "DAG Engine"],
  },
  {
    icon: FlaskConical,
    status: "Research",
    statusColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    gradient: "from-emerald-400 to-teal-600",
    number: "03",
    title: "Intelligent Operational Intelligence Dashboard",
    tagline: "AI-synthesized insights from distributed operational data streams",
    description:
      "An enterprise-grade operational dashboard that aggregates metrics from multiple data sources, runs them through an AI synthesis layer to surface actionable anomalies and trend predictions, and delivers structured insight reports to role-specific stakeholders. The system uses vector similarity search for historical pattern matching, Gemini for natural-language insight generation, and Supabase Realtime for live metric streaming.",
    architecture: [
      "Multi-source data aggregation pipeline",
      "Vector similarity for historical pattern matching",
      "Gemini natural-language insight synthesis",
      "Role-scoped stakeholder reporting layers",
      "Live metric streaming via Supabase Realtime",
    ],
    tags: ["BI Dashboard", "Vector Search", "NLP Insights", "Realtime Streaming", "Enterprise"],
  },
];

function ConceptCard({ concept, index }: { concept: typeof concepts[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = concept.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="group p-6 lg:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12] hover:bg-white/[0.04] transition-all duration-300"
    >
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        {/* Left side */}
        <div className="lg:w-2/5">
          <div className="flex items-start gap-4 mb-5">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${concept.gradient} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-105 transition-transform duration-300`}>
              <Icon size={22} className="text-white" />
            </div>
            <div>
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${concept.statusColor} mb-2`}>
                {concept.status}
              </span>
              <div className="text-4xl font-black text-white/[0.03] leading-none">{concept.number}</div>
            </div>
          </div>

          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
            {concept.title}
          </h3>
          <p className={`text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r ${concept.gradient} mb-4`}>
            {concept.tagline}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {concept.tags.map((tag) => (
              <span key={tag} className="text-xs text-gray-600 bg-white/[0.03] border border-white/[0.06] px-2.5 py-1 rounded-full hover:border-white/[0.1] transition-colors">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right side */}
        <div className="lg:w-3/5 flex flex-col gap-4">
          <p className="text-gray-400 leading-relaxed text-sm">{concept.description}</p>

          {/* Architecture bullets */}
          <div className="p-5 rounded-xl border border-white/[0.06] bg-white/[0.02]">
            <div className="text-xs text-gray-600 uppercase tracking-widest mb-3">Architecture Highlights</div>
            <ul className="space-y-2">
              {concept.architecture.map((item) => (
                <li key={item} className="flex items-center gap-3 text-xs text-gray-400">
                  <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${concept.gradient} flex-shrink-0`} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function CurrentlyBuilding() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="building" ref={sectionRef} className="py-32 bg-[#050505] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[700px] h-[400px] bg-violet-500/[0.03] rounded-full blur-[180px]" />
        <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-teal-500/[0.02] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-teal-500/20 bg-teal-500/5 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400"></span>
            </span>
            <span className="text-xs font-medium text-teal-400 tracking-widest uppercase">Active Development</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-5">
            What's Next on{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400">
              The Engineering Roadmap
            </span>
          </h2>
          
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            Three forward-facing system concepts currently in various stages of design, prototyping,
            and research — each pushing the boundary of what AI-integrated SaaS architecture can deliver.
          </p>
        </motion.div>

        {/* Concepts */}
        <div className="space-y-5">
          {concepts.map((concept, i) => (
            <ConceptCard key={concept.title} concept={concept} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
