import React, { useState } from "react";
import { motion } from "motion/react";
import { Code2, Cpu, Brain, Check, Terminal } from "lucide-react";

interface Course {
  name: string;
}

interface Domain {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  courses: Course[];
  // Renders custom visual elements relative to the card's theme
  renderVisual: () => React.ReactNode;
}

export default function AcademicFoundations() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const domains: Domain[] = [
    {
      id: "software-engineering",
      title: "Software Engineering",
      description: "Designing scalable software systems, building maintainable applications, and understanding how software evolves from idea to production.",
      icon: Code2,
      courses: [
        { name: "Data Structures & Algorithms" },
        { name: "Object-Oriented Programming" },
        { name: "Database Management Systems" },
        { name: "Software Engineering" },
        { name: "Operating Systems" },
      ],
      renderVisual: () => (
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none select-none transition-opacity duration-700"
          style={{ opacity: hoveredIndex === 0 ? 0.16 : 0.06 }}
          viewBox="0 0 100 100"
          fill="none"
        >
          {/* Dependency graphs / Architectural lines */}
          <path d="M10,20 L30,20 L50,45 L90,45" stroke="#C48452" strokeWidth="0.5" strokeDasharray="3,1" />
          <path d="M30,20 L40,65 L80,65" stroke="#C48452" strokeWidth="0.5" />
          <path d="M50,45 L65,80" stroke="#C48452" strokeWidth="0.5" strokeDasharray="1,2" />
          <circle cx="10" cy="20" r="1.5" fill="#C48452" />
          <circle cx="30" cy="20" r="1.5" fill="#C48452" />
          <circle cx="50" cy="45" r="1.5" fill="#C48452" />
          <circle cx="90" cy="45" r="1.5" fill="#C48452" />
          <circle cx="40" cy="65" r="1.5" fill="#C48452" />
          <circle cx="80" cy="65" r="1.5" fill="#C48452" />
          <circle cx="65" cy="80" r="1.5" fill="#C48452" />

          {/* Minimal code/system module layers */}
          <rect x="75" y="15" width="15" height="10" rx="1.5" stroke="#C48452" strokeWidth="0.5" />
          <rect x="75" y="32" width="15" height="10" rx="1.5" stroke="#C48452" strokeWidth="0.5" />
          <path d="M82.5,25 L82.5,32" stroke="#C48452" strokeWidth="0.5" />
        </svg>
      ),
    },
    {
      id: "computer-systems",
      title: "Computer Systems",
      description: "Understanding how hardware, software, and networks interact to create efficient and reliable computing systems.",
      icon: Cpu,
      courses: [
        { name: "Computer Architecture" },
        { name: "Computer Communication Networks" },
        { name: "Digital Logic Design" },
        { name: "Microprocessor Based System Design" },
        { name: "Signals & Systems" },
      ],
      renderVisual: () => (
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none select-none transition-opacity duration-700"
          style={{ opacity: hoveredIndex === 1 ? 0.16 : 0.06 }}
          viewBox="0 0 100 100"
          fill="none"
        >
          {/* Circuit Trace Board / Network Paths */}
          <rect x="35" y="35" width="30" height="30" rx="2" stroke="#C48452" strokeWidth="0.75" />
          <line x1="50" y1="5" x2="50" y2="35" stroke="#C48452" strokeWidth="0.5" />
          <line x1="5" y1="50" x2="35" y2="50" stroke="#C48452" strokeWidth="0.5" />
          <line x1="50" y1="65" x2="50" y2="95" stroke="#C48452" strokeWidth="0.5" />
          <line x1="65" y1="50" x2="95" y2="50" stroke="#C48452" strokeWidth="0.5" />
          
          <circle cx="50" cy="20" r="1" fill="#C48452" />
          <circle cx="20" cy="50" r="1" fill="#C48452" />
          <circle cx="50" cy="80" r="1" fill="#C48452" />
          <circle cx="80" cy="50" r="1" fill="#C48452" />

          {/* Isometric microchip nodes */}
          <path d="M42,42 L58,42 L58,58 L42,58 Z" stroke="#C48452" strokeWidth="0.5" />
          <path d="M45,45 L55,45 L55,55 L45,55 Z" stroke="#C48452" strokeWidth="0.25" />
        </svg>
      ),
    },
    {
      id: "artificial-intelligence",
      title: "Artificial Intelligence",
      description: "Developing intelligent systems through mathematical modeling, machine learning, optimization, and computational reasoning.",
      icon: Brain,
      courses: [
        { name: "Artificial Intelligence" },
        { name: "Machine Learning" },
        { name: "Probability & Statistics" },
        { name: "Linear Algebra" },
        { name: "Numerical Methods" },
      ],
      renderVisual: () => (
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none select-none transition-opacity duration-700"
          style={{ opacity: hoveredIndex === 2 ? 0.16 : 0.06 }}
          viewBox="0 0 100 100"
          fill="none"
        >
          {/* Mathematical Mesh / Mathematical Vector Fields */}
          <path d="M5,50 Q25,20 50,50 T95,50" stroke="#C48452" strokeWidth="0.5" />
          <path d="M5,40 Q25,60 50,30 T95,40" stroke="#C48452" strokeWidth="0.25" strokeDasharray="2,3" />
          <path d="M5,60 Q25,30 50,70 T95,60" stroke="#C48452" strokeWidth="0.25" />
          
          {/* Scatter points / Neural decision boundary indicators */}
          <circle cx="35" cy="40" r="1" fill="#C48452" />
          <circle cx="45" cy="48" r="1" fill="#C48452" />
          <circle cx="52" cy="58" r="1" fill="#C48452" />
          <circle cx="68" cy="35" r="1.5" fill="#E2A46E" />
          <circle cx="75" cy="48" r="1" fill="#C48452" />
          <circle cx="28" cy="62" r="1.5" fill="#E2A46E" />
        </svg>
      ),
    },
  ];

  return (
    <section id="academic-foundations" className="py-24 bg-[#0B0B0C] border-b border-neutral-900 overflow-hidden relative">
      {/* Visual background ambient layout accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C48452]/2 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-3 font-mono text-xs text-neutral-500 uppercase tracking-widest select-none"
          >
            <span>// 03 academic foundations</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-[#F5F5F4] uppercase tracking-tighter mb-4"
          >
            Knowledge Behind The Build
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl text-[#A1A1AA] text-sm md:text-base leading-relaxed"
          >
            A collection of the core concepts, systems, and disciplines that shape how I approach software engineering, artificial intelligence, and computer systems.
          </motion.p>
        </div>

        {/* 3 Columns Responsive Dashboard Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 min-h-[460px]">
          {domains.map((domain, index) => {
            const IconComponent = domain.icon;
            
            return (
              <motion.div
                key={domain.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative rounded-xl border border-neutral-800/80 hover:border-[#C48452]/50 bg-[#161618] p-8 flex flex-col justify-between overflow-hidden transition-all duration-500 ease-out hover:-translate-y-1.5 shadow-[0_4px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_12px_40px_rgba(196,132,82,0.06)]"
              >
                {/* SVG Visualizations mapped relative to domain */}
                {domain.renderVisual()}

                {/* Card Header and Metadata */}
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-neutral-900/80 rounded-lg border border-neutral-800/50 group-hover:border-[#C48452]/30 text-neutral-400 group-hover:text-[#C48452] transition-colors duration-500">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-[10px] text-neutral-600 group-hover:text-[#C48452]/50 transition-colors duration-500">
                      CORE // 0{index + 1}
                    </span>
                  </div>

                  <h3 className="font-display text-xl md:text-2xl font-bold uppercase tracking-tight text-[#F5F5F4] relative inline-block mb-3">
                    {domain.title}
                    {/* Subtle animated underline */}
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C48452] transition-all duration-500 group-hover:w-full" />
                  </h3>

                  <p className="text-[#A1A1AA] text-xs md:text-sm leading-relaxed mb-6">
                    {domain.description}
                  </p>
                </div>

                {/* Hover Reveal: Smoothly Fading Real-World Structured Coursework */}
                <div className="mt-4 pt-6 border-t border-neutral-900 transition-colors duration-500 group-hover:border-[#C48452]/10">
                  <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-3 flex items-center justify-between">
                    <span>Coursework Foundations</span>
                    <Terminal className="h-2.5 w-2.5 text-[#C48452]" />
                  </div>
                  
                  <ul className="space-y-2">
                    {domain.courses.map((course, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2.5 text-xs text-neutral-400 font-mono transition-all duration-300 transform"
                        style={{
                          opacity: hoveredIndex === index ? 1 : 0.5,
                          transform: hoveredIndex === index ? "translateX(0)" : "translateX(-4px)",
                          transitionDelay: `${idx * 40}ms`,
                        }}
                      >
                        <Check className="h-3 w-3 text-[#C48452] shrink-0" />
                        <span>{course.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
