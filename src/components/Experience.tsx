import { useEffect, useRef, useState } from "react";
import { Briefcase, Calendar, MapPin, GraduationCap, Cpu, Code, Server, CheckCircle } from "lucide-react";
import { motion } from "motion/react";

function renderAICardBackground(isHovered: boolean) {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none select-none transition-opacity duration-300"
      style={{ opacity: isHovered ? 0.16 : 0.06 }}
      viewBox="0 0 100 100"
      fill="none"
    >
      <motion.path
        d="M 15 50 L 38 35"
        stroke="#C48452"
        strokeWidth="0.4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: isHovered ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
      <motion.path
        d="M 38 35 L 62 65"
        stroke="#C48452"
        strokeWidth="0.4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: isHovered ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.15 }}
      />
      <motion.path
        d="M 62 65 L 85 50"
        stroke="#C48452"
        strokeWidth="0.4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: isHovered ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
      />
      <motion.path
        d="M 38 35 Q 50 15 62 35"
        stroke="#C48452"
        strokeWidth="0.3"
        strokeDasharray="1,1"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: isHovered ? 1 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
      />

      <motion.circle
        cx="15"
        cy="50"
        r="1"
        fill="#C48452"
        initial={{ scale: 0 }}
        animate={{ scale: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      {isHovered && (
        <motion.circle
          cx="15"
          cy="50"
          r="3"
          stroke="#C48452"
          strokeWidth="0.2"
          initial={{ opacity: 0.1, scale: 0.8 }}
          animate={{ opacity: [0.1, 0.4, 0.1], scale: [1, 2, 1] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        />
      )}

      <motion.circle
        cx="38"
        cy="35"
        r="1"
        fill="#C48452"
        initial={{ scale: 0 }}
        animate={{ scale: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3, delay: 0.15 }}
      />

      <motion.circle
        cx="62"
        cy="65"
        r="1"
        fill="#C48452"
        initial={{ scale: 0 }}
        animate={{ scale: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      />

      <motion.circle
        cx="85"
        cy="50"
        r="1"
        fill="#C48452"
        initial={{ scale: 0 }}
        animate={{ scale: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3, delay: 0.45 }}
      />

      <motion.text
        x="15"
        y="56"
        fill="#C48452"
        fontSize="2.2"
        fontFamily="sans-serif"
        letterSpacing="0.2"
        textAnchor="middle"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.7 : 0 }}
        transition={{ duration: 0.4 }}
      >
        RETRIEVER
      </motion.text>

      <motion.text
        x="38"
        y="29"
        fill="#C48452"
        fontSize="2.2"
        fontFamily="sans-serif"
        letterSpacing="0.2"
        textAnchor="middle"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.7 : 0 }}
        transition={{ duration: 0.4, delay: 0.15 }}
      >
        AGENT
      </motion.text>

      <motion.text
        x="62"
        y="72"
        fill="#C48452"
        fontSize="2.2"
        fontFamily="sans-serif"
        letterSpacing="0.2"
        textAnchor="middle"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.7 : 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        TOOL
      </motion.text>

      <motion.text
        x="85"
        y="56"
        fill="#C48452"
        fontSize="2.2"
        fontFamily="sans-serif"
        letterSpacing="0.2"
        textAnchor="middle"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.7 : 0 }}
        transition={{ duration: 0.4, delay: 0.45 }}
      >
        OUTPUT
      </motion.text>
    </svg>
  );
}

function renderWebCardBackground(isHovered: boolean) {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none select-none transition-opacity duration-300"
      style={{ opacity: isHovered ? 0.16 : 0.06 }}
      viewBox="0 0 100 100"
      fill="none"
    >
      <motion.path
        d="M 15 35 L 35 45"
        stroke="#C48452"
        strokeWidth="0.4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: isHovered ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
      <motion.path
        d="M 15 65 L 35 55"
        stroke="#C48452"
        strokeWidth="0.4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: isHovered ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.05 }}
      />
      <motion.path
        d="M 35 50 L 60 50"
        stroke="#C48452"
        strokeWidth="0.4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: isHovered ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.18 }}
      />
      <motion.path
        d="M 60 55 L 82 55"
        stroke="#C48452"
        strokeWidth="0.4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: isHovered ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.32 }}
      />
      <motion.path
        d="M 60 45 L 82 45"
        stroke="#C48452"
        strokeWidth="0.4"
        strokeDasharray="1,2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: isHovered ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.35 }}
      />

      <motion.rect
        x="6"
        y="30"
        width="14"
        height="10"
        rx="1"
        stroke="#C48452"
        strokeWidth="0.3"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      <motion.rect
        x="6"
        y="60"
        width="14"
        height="10"
        rx="1"
        stroke="#C48452"
        strokeWidth="0.3"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3, delay: 0.05 }}
      />

      <motion.rect
        x="32"
        y="42"
        width="12"
        height="16"
        rx="1.5"
        stroke="#C48452"
        strokeWidth="0.3"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3, delay: 0.15 }}
      />

      <motion.rect
        x="55"
        y="38"
        width="14"
        height="24"
        rx="1"
        stroke="#C48452"
        strokeWidth="0.3"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      />

      <motion.path
        d="M 82 42 C 82 40, 92 40, 92 42 L 92 58 C 92 60, 82 60, 82 58 Z"
        stroke="#C48452"
        strokeWidth="0.3"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3, delay: 0.45 }}
      />
      <motion.path
        d="M 82 42 C 82 44, 92 44, 92 42"
        stroke="#C48452"
        strokeWidth="0.3"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3, delay: 0.45 }}
      />
      <motion.path
        d="M 82 47 C 82 49, 92 49, 92 47"
        stroke="#C48452"
        strokeWidth="0.3"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      />
      <motion.path
        d="M 82 52 C 82 54, 92 54, 92 52"
        stroke="#C48452"
        strokeWidth="0.3"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3, delay: 0.55 }}
      />

      <motion.text
        x="13"
        y="25"
        fill="#C48452"
        fontSize="2.2"
        fontFamily="sans-serif"
        letterSpacing="0.2"
        textAnchor="middle"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.7 : 0 }}
        transition={{ duration: 0.3 }}
      >
        CLIENT
      </motion.text>

      <motion.text
        x="38"
        y="36"
        fill="#C48452"
        fontSize="2.2"
        fontFamily="sans-serif"
        letterSpacing="0.2"
        textAnchor="middle"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.7 : 0 }}
        transition={{ duration: 0.3, delay: 0.15 }}
      >
        GATEWAY
      </motion.text>

      <motion.text
        x="62"
        y="32"
        fill="#C48452"
        fontSize="2.2"
        fontFamily="sans-serif"
        letterSpacing="0.2"
        textAnchor="middle"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.7 : 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        SERVER
      </motion.text>

      <motion.text
        x="87"
        y="36"
        fill="#C48452"
        fontSize="2.2"
        fontFamily="sans-serif"
        letterSpacing="0.2"
        textAnchor="middle"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.7 : 0 }}
        transition={{ duration: 0.3, delay: 0.45 }}
      >
        DATA
      </motion.text>
    </svg>
  );
}

function renderEngineeringCardBackground(isHovered: boolean) {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none select-none transition-opacity duration-300"
      style={{ opacity: isHovered ? 0.16 : 0.06 }}
      viewBox="0 0 100 100"
      fill="none"
    >
      <motion.path
        d="M 10 50 L 90 50"
        stroke="#C48452"
        strokeWidth="0.4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: isHovered ? 1 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
      
      <motion.path
        d="M 35 50 Q 45 25 55 50"
        stroke="#C48452"
        strokeWidth="0.3"
        strokeDasharray="1,1"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: isHovered ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
      />

      <motion.path
        d="M 70 50 L 80 32"
        stroke="#C48452"
        strokeWidth="0.3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut", delay: 0.35 }}
      />
      <motion.path
        d="M 80 32 L 90 32"
        stroke="#C48452"
        strokeWidth="0.3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut", delay: 0.45 }}
      />

      <motion.circle
        cx="20"
        cy="50"
        r="1"
        fill="#C48452"
        initial={{ scale: 0 }}
        animate={{ scale: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2, delay: 0.1 }}
      />
      <motion.circle
        cx="45"
        cy="50"
        r="1"
        fill="#C48452"
        initial={{ scale: 0 }}
        animate={{ scale: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2, delay: 0.25 }}
      />
      <motion.circle
        cx="70"
        cy="50"
        r="1"
        fill="#C48452"
        initial={{ scale: 0 }}
        animate={{ scale: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2, delay: 0.4 }}
      />
      <motion.circle
        cx="80"
        cy="32"
        r="1"
        fill="#C48452"
        initial={{ scale: 0 }}
        animate={{ scale: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2, delay: 0.5 }}
      />

      <motion.text
        x="20"
        y="58"
        fill="#C48452"
        fontSize="2.2"
        fontFamily="sans-serif"
        letterSpacing="0.2"
        textAnchor="middle"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.7 : 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        BUILD
      </motion.text>

      <motion.text
        x="45"
        y="58"
        fill="#C48452"
        fontSize="2.2"
        fontFamily="sans-serif"
        letterSpacing="0.2"
        textAnchor="middle"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.7 : 0 }}
        transition={{ duration: 0.3, delay: 0.25 }}
      >
        VERIFY
      </motion.text>

      <motion.text
        x="70"
        y="58"
        fill="#C48452"
        fontSize="2.2"
        fontFamily="sans-serif"
        letterSpacing="0.2"
        textAnchor="middle"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.7 : 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        MERGE
      </motion.text>

      <motion.text
        x="80"
        y="26"
        fill="#C48452"
        fontSize="2.2"
        fontFamily="sans-serif"
        letterSpacing="0.2"
        textAnchor="middle"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.7 : 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        DEPLOY
      </motion.text>
    </svg>
  );
}

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const pillars = [
    {
      title: "AI & Automation",
      desc: "Building AI-powered applications using LangChain and LangGraph, from retrieval systems to multi-step agent workflows that solve practical problems.",
      icon: Cpu,
      footer: "CURRENTLY BUILDING",
    },
    {
      title: "Web Applications",
      desc: "Designing and developing full-stack web applications with secure APIs, real-time communication, authentication systems, and scalable databases.",
      icon: Code,
      footer: "PRACTICAL EXPERIENCE",
    },
    {
      title: "Engineering Practices",
      desc: "Improving software reliability through testing, code quality tools, automation, CI/CD pipelines, and maintainable engineering workflows.",
      icon: Server,
      footer: "ACTIVE FOCUS",
    },
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-24 px-6 lg:px-16 xl:px-24 bg-[#0B0B0C] relative overflow-hidden border-t border-[#3F3F46]/30"
    >
      <div className="absolute top-1/2 left-[-15%] w-[450px] h-[450px] bg-[#C48452]/4 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div 
          className={`mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-[#C48452] uppercase tracking-widest">// 02. EXPERIENCE & FOCUS</span>
            <span className="h-[1px] w-12 bg-[#C48452]/30" />
          </div>
          <h2 className="font-sans font-bold text-5xl sm:text-6xl text-[#F5F5F4] tracking-tight leading-none uppercase">
            WHAT I BUILD<span className="text-[#C48452]">.</span>
          </h2>
        </div>

        {/* Part 1: Core Practice Cards */}
        <div 
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-28 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            const isHovered = hoveredCard === idx;
            
            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                className="relative bg-[#161618] border border-neutral-800/80 rounded-2xl p-10 sm:p-12 transition-all duration-500 ease-[0.16, 1, 0.3, 1] flex flex-col justify-between group overflow-hidden hover:-translate-y-1 hover:scale-[1.015] hover:border-[#C48452]/40 hover:shadow-[0_20px_50px_rgba(196,132,82,0.06)]"
              >
                {/* Visual background engineering diagrams */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
                  {idx === 0 && renderAICardBackground(isHovered)}
                  {idx === 1 && renderWebCardBackground(isHovered)}
                  {idx === 2 && renderEngineeringCardBackground(isHovered)}
                </div>

                {/* Micro accent visual layer inside on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#C48452]/[0.015] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />

                <div className="relative z-10">
                  {/* Subtle, secondary layout for header with icon and ordering numeral */}
                  <div className="flex justify-between items-center mb-8">
                    <div className="text-neutral-500 group-hover:text-[#C48452] transition-colors duration-300">
                      <IconComponent size={20} strokeWidth={1.5} />
                    </div>
                    <span className="font-mono text-[10px] text-neutral-600 tracking-widest uppercase">
                      // 0{idx + 1}
                    </span>
                  </div>

                  {/* Header Title with strong typography hierarchy */}
                  <h3 className="font-sans font-bold text-2xl text-[#F5F5F4] mb-4 tracking-tight group-hover:text-[#F1C9A5] transition-colors duration-300 leading-snug">
                    {pillar.title}
                  </h3>
                  
                  {/* Description allowed to breathe with generous line-height */}
                  <p className="text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300 leading-relaxed font-light">
                    {pillar.desc}
                  </p>
                </div>

                {/* Refined label footer indicating active focus / building status */}
                <div className="mt-12 pt-4 border-t border-neutral-900/60 flex items-center justify-between font-mono text-[10px] tracking-widest uppercase font-semibold text-[#C48452]/80 group-hover:text-[#C48452] transition-colors duration-300 relative z-10">
                  <span>{pillar.footer}</span>
                  <CheckCircle size={12} className="opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 text-[#C48452]" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Part 2: Interactive Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="font-display font-bold text-2xl text-[#F5F5F4] uppercase tracking-wide">
              Engineering Path
            </h3>
            <p className="font-mono text-xs text-[#A1A1AA] mt-1">Journey through academics & commercial fields</p>
          </div>

          <div className="relative border-l-2 border-[#3F3F46] pl-8 space-y-16">
            
            {/* Experience Card 1: 10Pearls */}
            <div 
              className={`relative transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
              }`}
            >
              <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-[#0B0B0C] border-2 border-[#C48452] flex items-center justify-center z-10 shadow-lg">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C48452]" />
              </div>

              <div className="bg-[#141416] border border-[#3F3F46]/50 p-8 rounded-2xl hover:border-[#C48452] transition-colors duration-400">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div>
                    <h4 className="font-display font-bold text-xl text-[#F5F5F4]">
                      10Pearls
                    </h4>
                    <p className="font-mono text-xs text-[#C48452] mt-0.5">Software Engineering Intern</p>
                  </div>
                  <span className="py-1 px-3 bg-[#C48452]/10 border border-[#C48452]/20 text-xs font-mono text-[#C48452] rounded-full self-start">
                    2 Months • 2025
                  </span>
                </div>

                <div className="flex gap-4 text-[#A1A1AA] text-xs font-mono mb-6 pb-4 border-b border-[#3F3F46]/30">
                  <span className="flex items-center gap-1">
                    <MapPin size={12} className="text-[#C48452]" /> Karachi, PK
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={12} className="text-[#C48452]" /> Jun – Aug 
                  </span>
                </div>

                <ul className="space-y-3.5 text-sm text-[#A1A1AA]">
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#C48452] mt-1 shrink-0">❖</span>
                    <span>Built interactive modular user portals using <span className="text-[#F5F5F4]">React.js</span>, streamlining complex state transitions and reactive UI callbacks.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#C48452] mt-1 shrink-0">❖</span>
                    <span>Designed & optimized backend endpoints in <span className="text-[#F5F5F4]">Express.js & Node.js</span>, focusing on robust parameter validation, automated logging, and error wrappers.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#C48452] mt-1 shrink-0">❖</span>
                    <span>Utilized <span className="text-[#F5F5F4]">SonarQube</span> for static code analysis, debugging memory consumption, security risks, and technical debt profiles.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#C48452] mt-1 shrink-0">❖</span>
                    <span>Automated deployment testing runs via CI workflows orchestrated inside <span className="text-[#F5F5F4]">GitHub Actions</span> with Jest environments.</span>
                  </li>
                </ul>

                <div className="flex flex-wrap gap-2 mt-8 pt-4 border-t border-[#3F3F46]/30">
                  {["Node.js", "Express.js", "React.js", "MongoDB", "Jest", "SonarQube", "CI/CD"].map((tech) => (
                    <span
                      key={tech}
                      className="py-1 px-2.5 bg-[#1C1C1F] text-xs text-[#C48452] rounded font-mono border border-[#3F3F46]/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Experience Card 2: NED University */}
            <div 
              className={`relative transition-all duration-1000 delay-500 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
              }`}
            >
              <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-[#0B0B0C] border-2 border-[#C48452] flex items-center justify-center z-10 shadow-lg">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C48452]" />
              </div>

              <div className="bg-[#141416] border border-[#3F3F46]/50 p-8 rounded-2xl hover:border-[#C48452] transition-colors duration-400">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div>
                    <h4 className="font-display font-bold text-xl text-[#F5F5F4]">
                      NED University of Engineering & Technology
                    </h4>
                    <p className="font-mono text-xs text-[#C48452] mt-0.5">Bachelor of Engineering — BE</p>
                  </div>
                  <span className="py-1 px-3 bg-[#F1C9A5]/10 border border-[#F1C9A5]/20 text-xs font-mono text-[#F1C9A5] rounded-full self-start">
                    Oct 2023 – Present
                  </span>
                </div>

                <div className="flex gap-4 text-[#A1A1AA] text-xs font-mono mb-6 pb-4 border-b border-[#3F3F46]/30">
                  <span className="flex items-center gap-1">
                    <MapPin size={12} className="text-[#C48452]" /> Karachi, PK
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={12} className="text-[#C48452]" /> 3rd Year
                  </span>
                </div>

                <p className="text-sm text-[#A1A1AA] leading-relaxed mb-6">
                  Deeply investigating Computer Systems Engineering topics including low-latency system logic design, OOP engineering principles, operating systems micro-kernels, assembler instructions, structured algorithms, database architecture, and digital signal modulation.
                </p>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-[#3F3F46]/30">
                  {["System Architecture", "Algorithms", "Network Protocols", "Micro-systems", "OOP Design"].map((tech) => (
                    <span
                      key={tech}
                      className="py-1 px-2.5 bg-[#1C1C1F] text-xs text-[#A1A1AA] rounded font-mono border border-[#3F3F46]/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
