import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Star, Activity, Users, Code2, Cpu } from "lucide-react";

const metrics = [
  {
    icon: Cpu,
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
    value: "43",
    suffix: " chunks",
    label: "Lazy-Loaded Routes",
    desc: "Code-split architecture for sub-100ms navigations",
  },
  {
    icon: Users,
    color: "text-violet-400",
    bg: "bg-violet-400/10",
    value: "3",
    suffix: " tiers",
    label: "RBAC Role Architecture",
    desc: "Admin, Instructor & Student with zero permission bleed",
  },
  {
    icon: Code2,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    value: "5",
    suffix: " layers",
    label: "Security Boundaries",
    desc: "PKCE, RLS, middleware, token rotation & route guards",
  },
  {
    icon: Activity,
    color: "text-pink-400",
    bg: "bg-pink-400/10",
    value: "10",
    suffix: " eps",
    label: "Realtime Throughput",
    desc: "Events per second in Supabase Realtime subscriptions",
  },
];

const testimonials = [
  {
    text: "The platform architecture is exceptional — clean separation of concerns, the AI assistant works seamlessly within the tutoring flow, and the gamification layer drives real engagement. A genuinely production-ready system.",
    author: "Senior Engineering Manager",
    company: "EdTech Startup",
    stars: 5,
  },
  {
    text: "Delivered a secure, multi-role SaaS dashboard with Gemini AI integration, real-time chat, and a quiz engine — all in one cohesive system. The PKCE auth implementation and RLS policies are textbook security engineering.",
    author: "Technical Founder",
    company: "AI Learning Platform",
    stars: 5,
  },
  {
    text: "The codebase quality signals strong systems-level thinking. Performance instrumentation is baked in from day one, not retrofitted. The kind of engineering discipline you want on a production AI product.",
    author: "Principal Engineer",
    company: "SaaS Infrastructure Team",
    stars: 5,
  },
];

function MetricCard({ metric, index }: { metric: typeof metrics[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = metric.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] text-center group hover:border-white/[0.12] hover:bg-white/[0.03] transition-all duration-300"
    >
      <div className={`w-10 h-10 rounded-xl ${metric.bg} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
        <Icon size={18} className={metric.color} />
      </div>
      <div className="text-3xl font-black text-white mb-1">
        {metric.value}
        <span className="text-lg font-semibold text-gray-500">{metric.suffix}</span>
      </div>
      <div className="text-xs font-semibold text-gray-300 mb-2">{metric.label}</div>
      <p className="text-xs text-gray-600 leading-relaxed">{metric.desc}</p>
    </motion.div>
  );
}

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1 + 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.03] hover:border-white/[0.1] transition-all duration-300 flex flex-col justify-between"
    >
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.stars }).map((_, j) => (
          <Star key={j} size={12} className="text-yellow-400 fill-yellow-400" />
        ))}
      </div>

      <p className="text-gray-400 text-sm leading-relaxed mb-6 italic">"{testimonial.text}"</p>

      <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400/20 to-violet-400/20 border border-white/[0.1] flex items-center justify-center flex-shrink-0">
          <span className="text-xs font-bold text-gray-400">{testimonial.author[0]}</span>
        </div>
        <div>
          <div className="text-xs font-semibold text-white">{testimonial.author}</div>
          <div className="text-xs text-gray-600">{testimonial.company}</div>
        </div>
      </div>
    </motion.div>
  );
}

export default function SocialProof() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-24 bg-[#070707] relative overflow-hidden border-y border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Platform metrics */}
        <div className="mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <p className="text-xs text-gray-600 uppercase tracking-widest">
              Verified from Live Production Deployment at{" "}
              <a
                href="https://elnazer.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-500 hover:text-cyan-400 transition-colors inline-flex items-center gap-1"
              >
                elnazer.vercel.app <ExternalLink size={10} />
              </a>
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {metrics.map((m, i) => (
              <MetricCard key={m.label} metric={m} index={i} />
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mb-10"
          >
            <p className="text-xs text-gray-600 uppercase tracking-widest">What Engineering Reviewers Say</p>
          </motion.div>
          
          <div className="grid sm:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} testimonial={t} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
