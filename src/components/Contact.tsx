import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircle, Clock, CheckCircle2, ExternalLink, ArrowRight } from "lucide-react";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const whatsappNumber = "01065592701";
  const whatsappMessage = encodeURIComponent("أنا محتاج أعرف تفاصيل وأسعار المنصات");
  const whatsappLink = `https://wa.me/20${whatsappNumber}?text=${whatsappMessage}`;
  const facebookLink = "https://www.facebook.com/share/1BPiMZyg7Z/?mibextid=wwXIfr";

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

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* WhatsApp Contact */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 hover:bg-emerald-500/10 transition-all duration-300 group"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 flex items-center justify-center">
                <svg className="w-7 h-7 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">تواصل عبر واتساب</h3>
                <p className="text-emerald-400 text-sm font-medium">{whatsappNumber}</p>
              </div>
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed mb-6 arabic-text">
              أرسل لي رسالة مباشرة على واتساب للاستفسار عن تفاصيل المنصات والأسعار. سأرد عليك في أقرب وقت.
            </p>
            
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-colors shadow-lg shadow-emerald-500/20"
            >
              <MessageCircle size={20} />
              <span className="arabic-text">إرسال رسالة واتساب</span>
              <ArrowRight size={16} className="rotate-[-45deg]" />
            </motion.a>
          </motion.div>

          {/* Facebook Contact */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 rounded-2xl border border-blue-500/20 bg-blue-500/5 hover:bg-blue-500/10 transition-all duration-300 group"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center">
                <svg className="w-7 h-7 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">صفحة الفيسبوك</h3>
                <p className="text-blue-400 text-sm font-medium">Ashraf Elsayad</p>
              </div>
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed mb-6 arabic-text">
              تابع صفحتي على فيسبوك لمشاهدة أحدث الأعمال والمشاريع. يمكنك أيضاً التواصل معي عن طريق رسائل الصفحة.
            </p>
            
            <motion.a
              href={facebookLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-colors shadow-lg shadow-blue-500/20"
            >
              <ExternalLink size={18} />
              <span className="arabic-text">زيارة صفحة الفيسبوك</span>
              <ArrowRight size={16} />
            </motion.a>
          </motion.div>
        </div>
        
        {/* Quick Info */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex flex-wrap justify-center gap-6"
        >
          <div className="flex items-center gap-3 px-5 py-3 rounded-full border border-white/[0.06] bg-white/[0.02]">
            <Clock size={16} className="text-cyan-400" />
            <span className="text-sm text-gray-400 arabic-text">وقت الرد: أقل من 24 ساعة</span>
          </div>
          <div className="flex items-center gap-3 px-5 py-3 rounded-full border border-white/[0.06] bg-white/[0.02]">
            <CheckCircle2 size={16} className="text-emerald-400" />
            <span className="text-sm text-gray-400 arabic-text">متاح للعمل الحر والمشاريع الخاصة</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
