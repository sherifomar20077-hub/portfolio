import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-8 right-8 z-50 w-11 h-11 rounded-full bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center text-white shadow-xl shadow-cyan-500/20 hover:scale-110 transition-transform duration-200"
      aria-label="Scroll to top"
    >
      <ArrowUp size={18} />
    </button>
  );
}
