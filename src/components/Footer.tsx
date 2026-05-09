import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Terminal, ExternalLink, Heart, MessageCircle } from "lucide-react";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Project", href: "#project" },
  { label: "Case Study", href: "#case-study" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const isInView = useInView(footerRef, { once: true, margin: "-50px" });
  
  const handleNav = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer ref={footerRef} className="bg-[#040404] border-t border-white/[0.06] py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10"
        >
          {/* Brand */}
          <div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group flex items-center gap-2 mb-3"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Terminal size={14} className="text-white" />
              </div>
              <span className="text-white font-semibold">
                Ashraf Omar<span className="text-cyan-400">.</span>
              </span>
            </button>
            <p className="text-gray-600 text-sm max-w-xs leading-relaxed mb-4">
              Full Stack & AI Student. Building production-grade intelligent SaaS platforms.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/2001065592701?text=%D8%A3%D9%86%D8%A7%20%D9%85%D8%AD%D8%AA%D8%A7%D8%AC%20%D8%A3%D8%B9%D8%B1%D9%81%20%D8%AA%D9%81%D8%A7%D8%B5%D9%8A%D9%84%20%D9%88%D8%A3%D8%B3%D8%B9%D8%A7%D8%B1%20%D8%A7%D9%84%D9%85%D9%86%D8%B5%D8%A7%D8%AA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <MessageCircle size={16} />
                <span>01065592701</span>
              </a>
              <span className="text-gray-700">|</span>
              <a
                href="https://www.facebook.com/share/1BPiMZyg7Z/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                Facebook
              </a>
            </div>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <motion.button
                key={link.href}
                onClick={() => handleNav(link.href)}
                whileHover={{ y: -1 }}
                className="text-sm text-gray-600 hover:text-gray-300 transition-colors"
              >
                {link.label}
              </motion.button>
            ))}
          </div>

          {/* Live project */}
          <motion.a
            href="https://elnazer.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors border border-cyan-500/20 hover:border-cyan-500/40 px-4 py-2 rounded-lg"
          >
            <ExternalLink size={14} />
            Live System
          </motion.a>
        </motion.div>

        {/* Divider */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border-t border-white/[0.05] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-gray-700 text-xs">
            © {new Date().getFullYear()} Ashraf Omar. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-6">
              {[
                { label: "Next.js", color: "text-white" },
                { label: "Supabase", color: "text-emerald-600" },
                { label: "Gemini AI", color: "text-blue-600" },
                { label: "Vercel", color: "text-gray-600" },
              ].map((t) => (
                <span key={t.label} className={`text-xs font-medium ${t.color}/60`}>
                  {t.label}
                </span>
              ))}
            </div>
          </div>
          <p className="text-gray-700 text-xs flex items-center gap-1">
            Engineered for production. Built with <Heart size={10} className="text-pink-500 fill-pink-500" />
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
