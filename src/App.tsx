import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import FeaturedProject from "./components/FeaturedProject";
import CaseStudy from "./components/CaseStudy";
import Skills from "./components/Skills";
import SocialProof from "./components/SocialProof";
import Services from "./components/Services";
import CurrentlyBuilding from "./components/CurrentlyBuilding";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <FeaturedProject />
        <CaseStudy />
        <SocialProof />
        <Skills />
        <Services />
        <CurrentlyBuilding />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
