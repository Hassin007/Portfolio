import React, { useEffect, useState } from "react";
import { Github, Linkedin, Mail, ArrowDown, ArrowRight, ExternalLink } from "lucide-react";
import InteractiveDotGrid from "./InteractiveDotGrid";
import Typewriter from "./Typewriter";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleSmoothScrollBySelector = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    e.preventDefault();
    handleSmoothScrollBySelector(id);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-[#0B0B0C] px-6 lg:px-16 xl:px-24 pt-28 pb-16 overflow-hidden"
    >
      {/* Subtle interactive dot-grid background */}
      {mounted && <InteractiveDotGrid />}

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Column: Hero Massive Identity */}
        <div 
          className={`lg:col-span-6 flex flex-col justify-between h-full transition-all duration-1000 delay-100 transform ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Staggered Vertically-split Display Name matching 'Carlos Mendoza' style */}
          <div className="mb-6">
            <h1 className="font-display font-black text-6xl sm:text-7xl md:text-8xl text-[#F5F5F4] leading-[0.9] tracking-tighter uppercase select-none group">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#F5F5F4] via-[#F5F5F4] to-[#F1C9A5]/60">Hassin</span>
              <span className="block text-[#F5F5F4] relative">
                Saghir<span className="text-[#C48452]">.</span>
              </span>
            </h1>
            {/* The bold accent underline block from screenshot 1 */}
            <div className="w-[80px] h-2.5 bg-[#C48452] mt-6 rounded-sm shadow-[0_4px_15px_rgba(196,132,82,0.3)]" />
          </div>

          {/* Interactive Role Segment */}
          <div className="h-8 mb-8">
            <Typewriter
              words={[
                "Muhammad Hassin Saghir",
                "Building Software",
                "Building AI Systems",
                "Training Models",
                "Solving Real Problems",
              ]}
            />
          </div>

          {/* Bottom Row - Minimalist social linkages matching left positioning */}
          <div className="flex items-center space-x-4 mt-auto">
            <a
              id="social-github-hero"
              href="https://github.com/Hassin007"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-3 bg-[#141416]/50 hover:bg-[#1C1C1F] border border-[#3F3F46]/50 hover:border-[#C48452] text-[#A1A1AA] hover:text-[#C48452] rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
            >
              <Github size={18} />
            </a>
            <a
              id="social-linkedin-hero"
              href="https://linkedin.com/in/hsn9"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-3 bg-[#141416]/50 hover:bg-[#1C1C1F] border border-[#3F3F46]/50 hover:border-[#C48452] text-[#A1A1AA] hover:text-[#C48452] rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
            >
              <Linkedin size={18} />
            </a>
            <a
              id="social-email-hero"
              href="mailto:hassinsaghir6@gmail.com"
              aria-label="Email Address"
              className="p-3 bg-[#141416]/50 hover:bg-[#1C1C1F] border border-[#3F3F46]/50 hover:border-[#C48452] text-[#A1A1AA] hover:text-[#C48452] rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Right Column: Developer Portrait + Quick Bio Info Panel */}
        <div 
          className={`lg:col-span-6 grid grid-cols-1 sm:grid-cols-12 gap-8 items-center transition-all duration-1000 delay-300 transform ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* The gorgeous studio developer portrait with subtle gradient frames */}
          <div className="sm:col-span-6 relative group flex justify-center">
            {/* Ambient warm backing shadow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#C48452] to-[#E2A46E] rounded-3xl opacity-20 group-hover:opacity-35 blur-xl transition-opacity duration-700 pointer-events-none" />
            
            {/* Image Frame with offset alignment matching portrait cutout */}
            <div className="relative w-full max-w-[280px] aspect-[3/4] rounded-2xl overflow-hidden border-2 border-[#3F3F46]/80 group-hover:border-[#C48452] transition-colors duration-500 shadow-2xl bg-[#141416]/90">
              <img
                src="https://github.com/Hassin007.png"
                alt="Muhammad Hassin Saghir"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-95 group-hover:opacity-100 transition-all duration-700 scale-[1.03] group-hover:scale-105"
              />
              
              {/* Overlay golden mask highlights */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C]/90 via-transparent to-transparent opacity-80" />
              
              {/* Code/Info visual watermark bottom of image */}
              <div className="absolute bottom-4 left-4 font-mono text-[9px] text-[#A1A1AA]/80 leading-tight">
                <span className="block text-[#C48452] font-semibold">// LATENCY_OK</span>
                <span>SYS_ Karachi, PK</span>
              </div>
            </div>
          </div>

          {/* Right Text Segment: Short Introduction bio */}
          <div className="sm:col-span-6 flex flex-col justify-center text-left space-y-6">
            <div>
              <p className="font-mono text-xs text-[#C48452] tracking-wider uppercase mb-1">
                — Introduction
              </p>
              <h2 className="font-display font-bold text-2xl text-[#F5F5F4] tracking-tight leading-tight">
                Software Developer & AI Enthusiast.
              </h2>
            </div>

            <p className="font-sans text-sm text-[#A1A1AA] leading-relaxed">
              Computer Systems Engineering student at NED University, interested in full-stack development, machine learning, and building intelligent applications that bridge software and AI.
            </p>

            <div className="flex flex-col gap-4 pt-2">
              <a
                href="#about"
                onClick={(e) => handleScrollToSection(e, "about")}
                className="group flex items-center gap-2 font-display text-sm font-semibold text-[#C48452] hover:text-[#E2A46E] transition-colors duration-200"
              >
                <span>My story</span>
                <ArrowRight size={16} className="transform transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>

              {/* Instant Resume triggering matching secondary action */}
              <a
                href="/CV/CV%20Hassin.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-max px-4 py-2 border border-[#3F3F46] hover:border-[#C48452] text-[11px] uppercase tracking-wider font-semibold text-[#A1A1AA] hover:text-[#F5F5F4] rounded transition-all duration-300 inline-flex items-center gap-1.5"
              >
                <span>Print CV Portfolio</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

        </div>

      </div>

      {/* Downward Scroll Indicator */}
      <div 
        className={`absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[#A1A1AA]/50 transition-all duration-1000 delay-1000 ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="font-mono text-[9px] tracking-widest uppercase">Explore Works</span>
        <div className="animate-bounce">
          <ArrowDown size={14} className="text-[#C48452]" />
        </div>
      </div>
    </section>
  );
}
