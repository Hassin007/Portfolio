import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";

export default function Footer() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer id="footer" className="bg-[#0B0B0C] pt-24 pb-20 px-4 sm:px-6 lg:px-12 relative overflow-hidden z-10 w-full">
      
      {/* Cinematic Frame Container */}
      <div className="max-w-5xl mx-auto relative">
        
        {/* MASSIVE BACKGROUND WATERMARK - HASSIN */}
        <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-0 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.012 }}
            viewport={{ once: true }}
            transition={{ duration: 2.2, ease: "easeOut" }}
            className="font-display font-black text-[14vw] sm:text-[13vw] tracking-[0.25em] text-[#C48452] uppercase leading-none select-none text-center"
          >
            HASSIN
          </motion.div>
        </div>

        {/* ENGINEERING BORDER FRAME WITH ANGLED TOP CORNERS & WARM AMBER GLOW EFFECT */}
        <div className="absolute inset-0 pointer-events-none select-none z-0">
          <svg
            className="w-full h-full stroke-zinc-800/40"
            viewBox="0 0 1000 360"
            preserveAspectRatio="none"
            fill="none"
          >
            {/* Base complete engineering frame */}
            <path
              d="M 0 360 Q 0 360 0 32 L 32 0 L 968 0 L 1000 32 L 1000 360"
              strokeWidth="1.2"
              fill="none"
            />

            {/* Glowing Emissive Overlay on Top & Angled Borders */}
            <g>
              {/* Wide ambient glow */}
              <path
                d="M 0 45 L 0 32 L 32 0 L 968 0 L 1000 32 L 1000 45"
                stroke="#C48452"
                strokeWidth="5"
                strokeOpacity="0.22"
                strokeLinecap="round"
                className="blur-[3px]"
              />
              {/* Core glow bloom */}
              <path
                d="M 0 45 L 0 32 L 32 0 L 968 0 L 1000 32 L 1000 45"
                stroke="#C48452"
                strokeWidth="2.5"
                strokeOpacity="0.45"
                strokeLinecap="round"
                className="blur-[1px]"
              />
              {/* Hot filament primary core line */}
              <path
                d="M 0 45 L 0 32 L 32 0 L 968 0 L 1000 32 L 1000 45"
                stroke="#E2A46E"
                strokeWidth="1.2"
                strokeOpacity="0.9"
                strokeLinecap="round"
              />
            </g>
          </svg>
        </div>

        {/* MAIN FOREGROUND CONTENT */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="relative z-10 px-6 sm:px-12 py-16 sm:py-20 flex flex-col items-center justify-center text-center"
        >
          {/* Designed & Built by */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 0.45, y: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-zinc-400 mb-2.5"
          >
            Designed & Built by
          </motion.p>

          {/* Muhammad Hassin Saghir */}
          <motion.h3
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-[#F5F5F4]"
          >
            <a
              href="#hero"
              onClick={(e) => handleSmoothScroll(e, "hero")}
              className="hover:text-[#C48452] transition-colors duration-300 select-none cursor-pointer"
            >
              Muhammad Hassin Saghir
            </a>
          </motion.h3>

          {/* Computer Systems Engineering Student */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 0.9, y: 0 },
            }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-[10px] sm:text-xs text-[#C48452] tracking-widest mt-4 font-medium uppercase"
          >
            Computer Systems Engineering Student
          </motion.p>

          {/* Links Row */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center gap-6 sm:gap-8 mt-12 flex-wrap"
          >
            <a
              id="footer-github-link"
              href="https://github.com/Hassin007"
              target="_blank"
              rel="noopener noreferrer"
              className="group font-mono text-[10px] sm:text-xs text-[#A1A1AA] hover:text-[#C48452] tracking-widest uppercase transition-all duration-300 flex items-center gap-2 border border-transparent hover:border-[#C48452]/20 px-3 py-1.5 rounded"
            >
              <Github size={12} className="group-hover:scale-110 transition-transform duration-300" />
              <span>GitHub</span>
            </a>
            
            <a
              id="footer-linkedin-link"
              href="https://linkedin.com/in/hsn9"
              target="_blank"
              rel="noopener noreferrer"
              className="group font-mono text-[10px] sm:text-xs text-[#A1A1AA] hover:text-[#C48452] tracking-widest uppercase transition-all duration-300 flex items-center gap-2 border border-transparent hover:border-[#C48452]/20 px-3 py-1.5 rounded"
            >
              <Linkedin size={12} className="group-hover:scale-110 transition-transform duration-300" />
              <span>LinkedIn</span>
            </a>

            <a
              id="footer-email-link"
              href="mailto:hassinsaghir6@gmail.com"
              className="group font-mono text-[10px] sm:text-xs text-[#A1A1AA] hover:text-[#C48452] tracking-widest uppercase transition-all duration-300 flex items-center gap-2 border border-transparent hover:border-[#C48452]/20 px-3 py-1.5 rounded"
            >
              <Mail size={12} className="group-hover:scale-110 transition-transform duration-300" />
              <span>Email</span>
            </a>
          </motion.div>

        </motion.div>

        {/* OPTIONAL MINI TERMINAL CLOSING MESSAGE - Bottom Right */}
        <div className="absolute bottom-4 right-6 font-mono text-[9px] sm:text-[10px] text-[#A1A1AA]/35 tracking-wider select-none">
          &gt; session_completed_
        </div>

        {/* Engineering Code Metadata - Bottom Left */}
        <div className="absolute bottom-4 left-6 font-mono text-[8px] sm:text-[9px] text-[#A1A1AA]/20 tracking-widest uppercase select-none hidden sm:block">
          SYS.LOC.0x{Math.floor(Math.random() * 9000 + 1000).toString(16).toUpperCase()} // END_FILE
        </div>

      </div>
    </footer>
  );
}

