import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Send, MessageCircle, Clock, CheckCircle2, ExternalLink, ArrowRight } from "lucide-react";

const contactReasons = [
  "AI SaaS Platform Development",
  "Full Stack Engineering Project",
  "AI Feature Integration",
  "Secure Role-Based Platform",
  "Performance Audit",
  "Technical Consultation",
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", budget: "", message: "" });
  const [reason, setReason] = useState("");
  const [submitted, setSubmitted] = useState(false);
  
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry: ${reason || "Project Discussion"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nBudget: ${form.budget}\nService: ${reason}\n\nMessage:\n${form.message}`
    );
    window.open(`mailto:contact@ashrafomar.dev?subject=${subject}&body=${body}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="contact" ref={sectionRef} className="py-32 bg-[#060606] relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/3 w-[600px] h-[400px] bg-cyan-500/[0.04] rounded-full blur-[180px]" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[400px] bg-violet-500/[0.03] rounded-full blur-[180px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span className="text-xs font-medium text-cyan-400 tracking-widest uppercase">Let's Work Together</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-5">
            Ready to Build Something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
              Production-Grade?
            </span>
          </h2>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            If you're building an AI-powered SaaS product, need scalable backend infrastructure,
            or require intelligent workflow systems — let's architect it together.
            I respond to all serious inquiries within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left: info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 space-y-5"
          >
            {/* Availability card */}
            <div className="p-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/5">
              <div className="flex items-center gap-3 mb-4">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400"></span>
                </span>
                <span className="text-emerald-400 font-semibold text-sm">Available for New Projects</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Currently accepting freelance and contract work. Typical project onboarding
                within 1–2 business days of scope agreement.
              </p>
            </div>

            {/* Quick facts */}
            <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
              <h3 className="text-white font-semibold mb-5">Working With Me</h3>
              <div className="space-y-4">
                {[
                  { icon: Clock, label: "Response Time", value: "< 24 hours" },
                  { icon: MessageCircle, label: "Communication", value: "English / Arabic" },
                  { icon: CheckCircle2, label: "Engagement Type", value: "Freelance / Contract" },
                  { icon: Mail, label: "Preferred Contact", value: "Email or direct message" },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div 
                      key={item.label} 
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + i * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center flex-shrink-0">
                        <Icon size={14} className="text-gray-400" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-600">{item.label}</div>
                        <div className="text-sm text-white font-medium">{item.value}</div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Live project link */}
            <motion.a
              href="https://elnazer.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.01 }}
              className="flex items-center justify-between p-5 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all duration-200 group"
            >
              <div>
                <div className="text-xs text-gray-600 mb-1">Live Production System</div>
                <div className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                  Al-Nazer English Platform
                </div>
                <div className="text-xs text-cyan-500/70 mt-0.5">elnazer.vercel.app</div>
              </div>
              <ExternalLink size={16} className="text-cyan-400 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Right: form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center py-16 text-center">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-5"
                >
                  <CheckCircle2 size={30} className="text-emerald-400" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
                <p className="text-gray-400 max-w-sm leading-relaxed">
                  Your email client should have opened. If not, reach out directly —
                  I'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Service selection */}
                <div>
                  <label className="block text-xs text-gray-500 uppercase tracking-widest mb-3">What are you looking to build?</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {contactReasons.map((r) => (
                      <button
                        key={r}
                        type="button"
                        onClick={() => setReason(r)}
                        className={`px-3 py-2.5 rounded-xl text-xs font-medium border transition-all duration-150 text-left ${
                          reason === r
                            ? "border-cyan-500/50 bg-cyan-500/10 text-cyan-400"
                            : "border-white/[0.06] bg-white/[0.02] text-gray-500 hover:border-white/[0.12] hover:text-gray-400"
                        }`}
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-gray-500 uppercase tracking-widest mb-2">Your Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="John Smith"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-gray-600 text-sm focus:outline-none focus:border-cyan-500/40 focus:bg-white/[0.05] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 uppercase tracking-widest mb-2">Email Address</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-gray-600 text-sm focus:outline-none focus:border-cyan-500/40 focus:bg-white/[0.05] transition-all"
                    />
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-xs text-gray-500 uppercase tracking-widest mb-2">Project Budget Range</label>
                  <select
                    value={form.budget}
                    onChange={(e) => setForm({ ...form, budget: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-sm focus:outline-none focus:border-cyan-500/40 transition-all appearance-none text-gray-300 cursor-pointer"
                    style={{ backgroundImage: "none" }}
                  >
                    <option value="" className="bg-[#111]">Select budget range</option>
                    <option value="$400–$800" className="bg-[#111]">$400 – $800</option>
                    <option value="$800–$1,500" className="bg-[#111]">$800 – $1,500</option>
                    <option value="$1,500–$3,000" className="bg-[#111]">$1,500 – $3,000</option>
                    <option value="$3,000–$6,000" className="bg-[#111]">$3,000 – $6,000</option>
                    <option value="$6,000+" className="bg-[#111]">$6,000+</option>
                    <option value="Let's discuss" className="bg-[#111]">Let's discuss</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs text-gray-500 uppercase tracking-widest mb-2">Project Brief</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Describe your project: what you're building, key technical requirements, timeline, and any specific challenges you're facing..."
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-gray-600 text-sm focus:outline-none focus:border-cyan-500/40 focus:bg-white/[0.05] transition-all resize-none"
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="group w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-semibold rounded-xl hover:opacity-95 transition-opacity shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30"
                >
                  <Send size={16} />
                  <span>Send Project Brief</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>

                <p className="text-center text-xs text-gray-600">
                  Your message will open your email client. I respond within 24 hours.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
