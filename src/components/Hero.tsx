import { useEffect, useRef, useState, useCallback } from "react";
import { ArrowRight, ExternalLink, ChevronDown, Cpu, Shield, Zap, Network } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { useScrollReveal, useSmoothScroll } from "../hooks/useScrollReveal";

const typingPhrases = [
  "AI-Powered SaaS Platforms",
  "Scalable Backend Architectures", 
  "Intelligent Workflow Systems",
  "Production-Grade Web Systems",
  "Secure Role-Enforced Platforms",
];

function TypeWriter() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const phrase = typingPhrases[phraseIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < phrase.length) {
      timeout = setTimeout(() => setDisplayed(phrase.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === phrase.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setPhraseIndex((i) => (i + 1) % typingPhrases.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, phraseIndex]);

  return (
    <span className="gradient-text">
      {displayed}
      <span className="animate-pulse text-cyan-400">|</span>
    </span>
  );
}

const stats = [
  { value: "3-Tier", label: "Role Architecture", icon: Shield },
  { value: "Gemini", label: "AI Integration", icon: Cpu },
  { value: "PKCE", label: "Auth Flow", icon: Network },
  { value: "Edge", label: "Function Runtime", icon: Zap },
];

// Enhanced Particle System with connection nodes
function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas, { passive: true });

    const particles: { 
      x: number; 
      y: number; 
      vx: number; 
      vy: number; 
      size: number; 
      opacity: number;
      pulsePhase: number;
      connections: number;
    }[] = [];

    const particleCount = window.matchMedia("(pointer: coarse)").matches ? 40 : 80;
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.3 + 0.1,
        pulsePhase: Math.random() * Math.PI * 2,
        connections: 0,
      });
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Reset connections count
      particles.forEach(p => p.connections = 0);

      // Draw connections first (behind particles)
      particles.forEach((p, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150 && p.connections < 5 && p2.connections < 5) {
            p.connections++;
            p2.connections++;
            
            const opacity = 0.15 * (1 - dist / 150);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      // Draw particles
      const time = Date.now() * 0.001;
      particles.forEach((p) => {
        // Update position
        p.x += p.vx;
        p.y += p.vy;
        
        // Mouse interaction
        const mdx = mouseRef.current.x - p.x;
        const mdy = mouseRef.current.y - p.y;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mDist < 200) {
          const force = (200 - mDist) / 200 * 0.02;
          p.vx += mdx * force * 0.1;
          p.vy += mdy * force * 0.1;
        }
        
        // Dampening
        p.vx *= 0.99;
        p.vy *= 0.99;
        
        // Boundary bounce
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        
        // Keep in bounds
        p.x = Math.max(0, Math.min(canvas.width, p.x));
        p.y = Math.max(0, Math.min(canvas.height, p.y));

        // Pulsing effect
        const pulseSize = p.size + Math.sin(time * 2 + p.pulsePhase) * 0.3;
        const pulseOpacity = p.opacity + Math.sin(time * 1.5 + p.pulsePhase) * 0.05;

        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.5, pulseSize), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(34, 211, 238, ${Math.max(0.05, pulseOpacity)})`;
        ctx.fill();

        // Glow effect for larger particles
        if (p.size > 1.5) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, pulseSize * 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(34, 211, 238, ${pulseOpacity * 0.3})`;
          ctx.fill();
        }
      });

      animId = requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    canvas.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-70"
    />
  );
}

// Architectural Grid Background
function ArchitecturalGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Primary Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34, 211, 238, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 211, 238, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }}
      />
      
      {/* Secondary Grid */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Radial Data Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dataLines" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            <line x1="0" y1="100" x2="200" y2="100" stroke="rgba(34, 211, 238, 0.5)" strokeWidth="0.5" />
            <line x1="100" y1="0" x2="100" y2="200" stroke="rgba(139, 92, 246, 0.5)" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="2" fill="rgba(34, 211, 238, 0.3)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dataLines)" />
      </svg>

      {/* Gradient Overlays */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-[150px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/[0.03] rounded-full blur-[200px]" />
    </div>
  );
}

// Magnetic Button Component
function MagneticButton({ 
  children, 
  onClick, 
  className = "", 
  variant = "primary" 
}: { 
  children: React.ReactNode; 
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { stiffness: 150, damping: 15 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    x.set((e.clientX - centerX) * 0.15);
    y.set((e.clientY - centerY) * 0.15);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const baseStyles = "relative overflow-hidden font-semibold rounded-xl transition-all duration-300 flex items-center gap-2";
  
  const variantStyles = {
    primary: "px-7 py-3.5 bg-gradient-to-r from-cyan-500 to-violet-500 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30",
    secondary: "px-7 py-3.5 bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20",
    outline: "px-7 py-3.5 border border-white/10 text-gray-300 hover:bg-white/5 hover:border-white/20"
  };

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.button>
  );
}

// Animated Stat Counter
function StatCounter({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const Icon = stat.icon;
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
      className="text-center group"
    >
      <div className="flex items-center justify-center gap-2 mb-2">
        <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
          <Icon size={14} className="text-cyan-400" />
        </div>
        <div className="text-2xl font-bold text-white mono tracking-tight">{stat.value}</div>
      </div>
      <div className="text-xs text-gray-500 uppercase tracking-widest">{stat.label}</div>
    </motion.div>
  );
}

// Tech Stack Pill with hover effect
function TechPill({ tech, index }: { tech: string; index: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 + index * 0.05, duration: 0.3 }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="px-3 py-1.5 text-xs font-medium text-gray-400 bg-white/[0.03] border border-white/[0.06] rounded-full hover:border-cyan-500/30 hover:text-cyan-400 transition-colors cursor-default"
    >
      {tech}
    </motion.span>
  );
}

export default function Hero() {
  const scrollToAbout = useSmoothScroll("#about");
  const scrollToProject = useSmoothScroll("#project");
  const scrollToCaseStudy = useSmoothScroll("#case-study");

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#050505]">
      {/* Background Layers */}
      <ArchitecturalGrid />
      <ParticleNetwork />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505]/50 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-12">
        {/* Status Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-sm group cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
            </span>
            <span className="text-xs font-medium text-cyan-400 tracking-widest uppercase">
              Available for Premium Engineering Work
            </span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <div className="text-center max-w-5xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.05] tracking-tight mb-6"
          >
            <span className="block">Engineering</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-200 to-gray-400">
              Intelligent
            </span>
            <span className="block">
              <TypeWriter />
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto mb-10"
          >
            I'm{" "}
            <span className="text-white font-semibold">Ashraf Omar</span> — a{" "}
            <span className="text-cyan-400 font-medium">Full Stack & AI Student</span>{" "}
            learning to architect production-grade, multi-tenant SaaS platforms powered by scalable
            orchestration layers, secure inference pipelines, and role-enforced access boundaries.
          </motion.p>

          {/* CTA Row */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            <MagneticButton onClick={scrollToProject} variant="primary">
              Explore My Work
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </MagneticButton>
            
            <MagneticButton 
              variant="secondary"
              onClick={() => window.open("https://elnazer.vercel.app", "_blank", "noopener,noreferrer")}
            >
              <ExternalLink size={16} />
              See Live System
            </MagneticButton>
            
            <MagneticButton onClick={scrollToCaseStudy} variant="outline">
              View Architecture
            </MagneticButton>
          </motion.div>
        </div>

        {/* Stats Row */}
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 mb-16">
          {stats.map((stat, i) => (
            <StatCounter key={stat.label} stat={stat} index={i} />
          ))}
        </div>

        {/* Tech Stack Pills */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Gemini AI", "Edge Functions", "PKCE Auth", "Real-time DB"].map((tech, i) => (
            <TechPill key={tech} tech={tech} index={i} />
          ))}
        </motion.div>

        {/* Architectural Element */}
        <motion.div 
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex justify-center mb-8"
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-cyan-500/50" />
            <div className="w-2 h-2 rounded-full bg-cyan-400/50" />
            <div className="text-xs text-gray-600 mono tracking-widest">SYSTEM READY</div>
            <div className="w-2 h-2 rounded-full bg-violet-400/50" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-violet-500/50" />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        onClick={scrollToAbout}
        className="relative z-10 mx-auto mb-8 flex flex-col items-center gap-2 text-gray-600 hover:text-cyan-400 transition-colors group"
      >
        <span className="text-xs tracking-widest uppercase group-hover:text-cyan-400 transition-colors">Scroll to Explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} className="text-cyan-400/70" />
        </motion.div>
      </motion.button>
    </section>
  );
}
