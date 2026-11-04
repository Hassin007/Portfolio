import { useState, useEffect } from "react";
import Loader from "./components/Loader";
import NameReveal from "./components/NameReveal";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import AcademicFoundations from "./components/AcademicFoundations";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    // Scroll progress bar calculations
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Sync active nav links on scroll using IntersectionObserver
  useEffect(() => {
    if (loading || reveal) return;

    const sections = ["hero", "about", "experience", "academic-foundations", "projects", "skills", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -45% 0px", // focus target inside visual window
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, [loading, reveal]);

  if (loading) {
    return <Loader onComplete={() => { setLoading(false); setReveal(true); }} />;
  }

  if (reveal) {
    return <NameReveal onComplete={() => setReveal(false)} />;
  }

  return (
    <div 
      className="relative min-h-screen bg-[#0B0B0C] text-[#F5F5F4] overflow-x-clip selection:bg-[#C48452]/20 selection:text-[#F1C9A5]"
    >
      {/* 3px Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-[3px] bg-[#C48452] z-50 transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={scrollProgress}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      {/* Structured Portfolio components */}
      <Navbar activeSection={activeSection} />
      
      <main>
        <Hero />
        <About />
        <Experience />
        <AcademicFoundations />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
