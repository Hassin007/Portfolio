import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

interface MetricItemProps {
  value: number;
  suffix: string;
  label: string;
  key?: string;
}

function MetricItem({ value, suffix, label }: MetricItemProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const itemRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let currentVal = 0;
          const duration = 1200; // ms transition length
          const steps = Math.min(value, 30);
          const stepTime = Math.max(Math.floor(duration / (steps || 1)), 25);
          const increment = Math.ceil(value / steps);

          const interval = setInterval(() => {
            currentVal += increment;
            if (currentVal >= value) {
              setCount(value);
              clearInterval(interval);
            } else {
              setCount(currentVal);
            }
          }, stepTime);
        }
      },
      { threshold: 0.1 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div 
      ref={itemRef} 
      className="flex flex-col items-center md:items-start text-center md:text-left py-4 sm:py-6"
    >
      <div className="font-sans font-semibold text-5xl sm:text-6xl text-[#F1C9A5] tracking-tight leading-none mb-3">
        {count}
        <span className="text-[#C48452] font-mono ml-0.5">{suffix}</span>
      </div>
      <div className="text-[10px] uppercase tracking-widest text-neutral-400 font-mono font-medium max-w-[160px]">
        {label}
      </div>
    </div>
  );
}

export default function About() {
  const narrativeBlocks = [
    {
      label: "HELLO",
      text: (
        <>
          Hello! I am a Final-year{" "}
          <span className="text-white font-medium">Computer Systems Engineering Student</span> at{" "}
          <span className="text-white font-medium border-b border-[#C48452]/50 hover:border-[#C48452] pb-0.5 transition-colors duration-200">
            NED University
          </span>{" "}
          in Karachi. I operate at the convergence of full-stack engineering and custom, agentic AI frameworks.
        </>
      ),
    },
    {
      label: "BUILDING",
      text: (
        <>
          My background centers on creating complex modular applications using the{" "}
          <span className="text-[#F1C9A5] font-medium">MERN Stack</span> and implementing automated
          Agentic workflows with <span className="text-[#F1C9A5] font-medium">LangChain</span> &{" "}
          <span className="text-[#F1C9A5] font-medium">LangGraph</span>.
        </>
      ),
    },
    {
      label: "FOCUS",
      text: (
        <>
          I focus on writing elegant systems—whether it's writing highly secure middleware, real-time client-to-server websockets, or building automated multi-agent routing graphs for advanced PDF querying & analysis.
        </>
      ),
    },
  ];

  const timelineEvents = [
    { year: "2023", desc: "Started Computer Systems Engineering" },
    { year: "2024", desc: "Learnt to Build Full-Stack Applications" },
    { year: "2025", desc: "Explored Machine Learning" },
    { year: "2026", desc: "Building Agentic AI Applications" },
  ];

  const metrics = [
    { value: 2, suffix: "+", label: "Years Programming" },
    { value: 6, suffix: "+", label: "Completed Projects" },
    { value: 1, suffix: "", label: "Industry Internship" },
    { value: 12, suffix: "+", label: "Core Technologies" },
  ];

  return (
    <section
      id="about"
      className="py-24 sm:py-32 px-6 lg:px-16 xl:px-24 bg-[#0B0B0C] relative overflow-hidden border-t border-neutral-900"
    >
      {/* Editorial ambient low-intensity visual light pools */}
      <div className="absolute top-1/4 right-[0%] w-[450px] h-[450px] bg-[#C48452]/2 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-[-10%] w-[500px] h-[500px] bg-[#C48452]/1 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 sm:mb-28 text-left"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-[#C48452] uppercase tracking-widest">// 01. WHO I AM</span>
            <div className="h-[1px] w-8 bg-[#C48452]/30" />
          </div>
          <h2 className="font-sans font-bold text-5xl sm:text-6xl text-[#F5F5F4] tracking-tight leading-none uppercase">
            STORY & VISION<span className="text-[#C48452]">.</span>
          </h2>
        </motion.div>

        {/* NARRATIVE BLOCKS (Asymmetrical Editorial Segment) */}
        <div className="space-y-16 sm:space-y-24 mb-32 sm:mb-40">
          {narrativeBlocks.map((block, index) => (
            <motion.div
              key={block.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: index * 0.15 }}
              className="group"
            >
              {/* Flex divider & Label */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs uppercase tracking-widest text-[#C48452] font-semibold">
                  {block.label}
                </span>
                <div className="flex-1 h-[1px] bg-neutral-800/60 ml-6 group-hover:bg-neutral-800 transition-colors duration-500" />
              </div>
              
              {/* Main statement column with ample typographical weight & size */}
              <p className="text-xl sm:text-2xl md:text-3xl text-neutral-300 leading-relaxed font-sans font-light tracking-wide max-w-4xl">
                {block.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* JOURNEY TIMELINE SEGMENT */}
        <div className="py-16 border-t border-neutral-900 mb-24 sm:mb-32">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest block font-medium">
              // EVOLUTION OF COMPETENCE
            </span>
          </motion.div>

          {/* Timeline track relative container */}
          <div className="relative">
            
            {/* Desktop continuous timeline connector line (md and up) */}
            <div className="hidden md:block absolute top-[22px] left-8 right-8 h-[1px] bg-neutral-800/50 z-0">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 bg-gradient-to-r from-[#C48452]/20 via-[#C48452] to-[#C48452]/20 origin-left"
              />
            </div>

            {/* Mobile continuous timeline connector line (below md) */}
            <div className="md:hidden absolute top-0 bottom-0 left-[21px] w-[1px] bg-neutral-800/50 z-0">
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 bg-gradient-to-b from-[#C48452]/20 via-[#C48452] to-[#C48452]/20 origin-top"
              />
            </div>

            {/* Grid of timeline milestones */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative z-10">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.15 }}
                  className="flex md:flex-col items-start gap-5 md:gap-0"
                >
                  {/* Timeline point indicator */}
                  <div className="flex flex-col items-center justify-center md:items-start md:justify-start">
                    
                    {/* Node Circle */}
                    <div className="w-11 h-11 rounded-full bg-[#0B0B0C] border border-[#C48452]/30 flex items-center justify-center md:mb-5 shadow-lg group hover:border-[#C48452] transition-colors duration-300">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#C48452]" />
                    </div>

                  </div>

                  {/* Text Details with clear vertical rhythm */}
                  <div className="flex-1 md:flex-none">
                    <div className="font-sans font-bold text-xl sm:text-2xl text-white mb-2 leading-none hover:text-[#F1C9A5] transition-colors duration-200">
                      {event.year}
                    </div>
                    <div className="font-mono text-[11px] sm:text-xs text-neutral-400 tracking-wider leading-relaxed">
                      {event.desc}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>

        {/* METRICS STRIP */}
        <div className="border-t border-neutral-900 pt-16 sm:pt-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 text-center md:text-left"
          >
            <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest block font-medium">
              // EXPERIMENTAL METRICS & TELEMETRICS
            </span>
          </motion.div>

          {/* Typography-only responsive metrics grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
            {metrics.map((metric) => (
              <MetricItem
                key={metric.label}
                value={metric.value}
                suffix={metric.suffix}
                label={metric.label}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
