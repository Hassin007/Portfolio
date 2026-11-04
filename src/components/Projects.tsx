import { useState } from "react";
import { 
  Github, 
  ExternalLink, 
  Cpu, 
  Award, 
  Terminal, 
  ChevronRight, 
  ChevronLeft,
  ArrowRight,
  Workflow,
  Network,
  Brain,
  Database
} from "lucide-react";
import { Project } from "../types";
import ProjectDrawer from "./ProjectDrawer";
import { motion, AnimatePresence } from "motion/react";

const projectsData: Project[] = [
  {
    id: "bitcoin-pred",
    title: "Bitcoin Market Direction Prediction",
    slug: "bitcoin-market-prediction",
    watermark: "01",
    isFeatured: true,
    description: "Built a multi-class Bitcoin (BTC) directional trading model achieving +30.1% return per fold and a Sharpe ratio of 0.58 across walk-forward backtests.",
    longDescription: "Developed a sophisticated algorithmic pipeline to forecast short-to-medium term directional changes in Bitcoin markets. By ensembling gradient-boosted trees and deep sequence architectures, the system captures non-linear pricing regularities while mitigating risk through threshold-optimized strategy mapping.",
    challenges: "Financial time-series data suffers from severe non-stationarity, leading standard architectures to fit noise easily. To solve this, multi-fold walk-forward validation (ranging 2018–2026) was designed alongside Bayesian hyperparameter tuning dynamically guided by the Sharpe ratio to enforce stability.",
    architecture: `
+------------------+     +------------------+     +--------------------+
|  BTC Market Data | --> | Feature Pipeline | --> | Optuna Optimizer   |
| (OHLCV & Vol)    |     | (Technical Inds) |     | (Bayesian Tuning)  |
+------------------+     +------------------+     +---------+----------+
                                                            |
+------------------+     +------------------+               |
| Walk-Forward     | <-- | LGBM & LSTM      | <-------------+
| Folds Check (1-5)|     | Ensemble Model   |
+------------------+     +------------------+
         |
         v
+------------------+     +------------------+
| Trading Strategy | --> | Out-of-sample    |
| (Threshold opt)  |     | Return (+30.1%)  |
+------------------+     +------------------+
`,
    tech: ["LightGBM", "LSTM", "Optuna", "scikit-learn", "Python", "pandas", "NumPy"],
    metrics: [
      { label: "Avg Return", value: "+30.1%" },
      { label: "Sharpe Ratio", value: "0.58" },
      { label: "Max Drawdown", value: "17.8%" },
      { label: "Profitable Folds", value: "4/5" },
    ],
    githubUrl: "https://github.com/Hassin007",
  },
  {
    id: "agentic-rag",
    title: "Agentic RAG with MCP Integration",
    slug: "agentic-rag-mcp",
    watermark: "02",
    isFeatured: true,
    description: "Architected a Retrieval-Augmented Generation system with a custom MCP server enabling stateful graph-based document querying.",
    longDescription: "Designed an Advanced RAG system integrated with the Model Context Protocol (MCP). The model employs agentic architectures to dynamically orchestrate documents sessions, multi-step queries routing, and real-time structured ingestion pipelines.",
    challenges: "Handling messy document inputs and state integrity across lengthy reasoning steps often bottlenecks typical LLM architectures. This was resolved by modeling agent workflows as a robust stateful graph in LangGraph, implementing error isolation, and wrapping custom micro-services over FastMCP nodes.",
    architecture: `
+------------------+     +------------------+     +--------------------+
| Document Ingest  | --> | Custom FastMCP   | --> | Vector Database   |
| (PDFs/MD/TXT)   |     | Server (Python)  |     | (Metadata Indexed) |
+------------------+     +------------------+     +--------------------+
                                                           ^
+------------------+     +------------------+              |
| User Query       | --> | LangGraph Stateful| ------------+
| (NL Interface)   |     | Agent Controller |
+------------------+     +------------------+
                                   | (Tool Routed Search)
                                   v
                         +------------------+     +--------------------+
                         | Context Injector | -->| Dynamic Response   |
                         | (Prompt/History)  | | Generator (LLM)    |
                         +------------------+     +--------------------+
`,
    tech: ["Python", "FastMCP", "LangChain", "LangGraph", "ImageKit", "JSON"],
    metrics: [
      { label: "Query Speed", value: "< 1.2s" },
      { label: "Doc Context", value: "100k Token" },
      { label: "Graph Nodes", value: "14 Nodes" },
      { label: "Precision", value: "94.2%" },
    ],
    githubUrl: "https://github.com/Hassin007",
  },
  {
    id: "teamsync",
    title: "TeamSync Collaboration WebApp",
    slug: "teamsync-collaboration",
    watermark: "03",
    isFeatured: false,
    description: "Real-time team collaboration hub featuring multi-tenant workspaces, typing indicators, active presence, state synchronization, and secure CDN media pipelines.",
    longDescription: "A full-scale collaborative workspace application empowering professional groups to spin up dedicated rooms, stream live notifications, manage shared document trees, and maintain real-time chats styled with secure role constraints.",
    challenges: "Synchronizing system states among hundreds of active connections without deadlocks or packet loss. Solved by mapping a highly reliable Socket.IO architecture backed by state tracking in MongoDB and custom client-side Zustand stores.",
    architecture: `
+------------------+     +------------------+
| Client-Side App  | --> | State Sync       |
| (React / Zustand)|     | (SocketIO Events)|
+------------------+     +---------+--------+
         |                         |
         v                         v
+------------------+     +------------------+
| Content Pipeline | --> | Express Server   | <--> [MongoDB Cluster]
| (ImageKit CDN)   |     | (JWT/OTP Auth)   |
+------------------+     +------------------+
`,
    tech: ["Node.js", "Express.js", "MongoDB", "React", "Socket.IO", "JWT", "Zustand", "ImageKit"],
    metrics: [
      { label: "Ping Latency", value: "< 40ms" },
      { label: "Active Pool", value: "500+ Peers" },
      { label: "CDN Load", value: "0.4s Ingest" },
      { label: "Sync Freq", value: "60hz Click" },
    ],
    githubUrl: "https://github.com/Hassin007",
  },
  {
    id: "classconnect",
    title: "ClassConnect Academics Hub",
    slug: "classconnect-education",
    watermark: "04",
    isFeatured: false,
    description: "Comprehensive virtual classroom system enabling streamlined teacher assignment uploads, discussion threads, and grading dashboards.",
    longDescription: "An academic cooperation portal designed to centralize announcement streams, dynamic calendar events, document tracking dashboards, and student assignment submissions wrapped in an authenticated multi-role platform.",
    challenges: "Building a fluid workflow for concurrent grading and file submissions under highly safe verification boundaries. Addressed by designing safe API structures in Express, utilizing strict database schemas on MongoDB, and designing a modular responsive client interface.",
    architecture: `
+------------------+     +------------------+
| Teacher Portal   | --> | Class Management |
| (Post / Grade)   |     | (Api Announcements)|
+------------------+     +---------+--------+
                                    |
+------------------+               v
| Student Portal   | <----> [ Express API /  ]
| (Submissions)    |        | MongoDB Engine ]
+------------------+
`,
    tech: ["Node.js", "Express.js", "MongoDB", "React", "CSS"],
    metrics: [
      { label: "Load Time", value: "0.8s Total" },
      { label: "Auth Keys", value: "Bcrypt JWT" },
      { label: "Query Rate", value: "2.5k / min" },
      { label: "DB Payload", value: "< 2MB size" },
    ],
    githubUrl: "https://github.com/Hassin007",
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const activeProject = projectsData[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % projectsData.length);
  };

  const handleCardClick = (idx: number) => {
    if (idx === activeIndex) return;
    setActiveIndex(idx);
  };

  const getCircularDistance = (idx: number) => {
    const len = projectsData.length;
    let diff = idx - activeIndex;
    while (diff < -len / 2) diff += len;
    while (diff > len / 2) diff -= len;
    return diff;
  };

  const getCardStyleClasses = (index: number) => {
    const diff = getCircularDistance(index);
    const baseClasses = "absolute top-4 h-[220px] sm:h-[240px] w-[80vw] max-w-[285px] xs:max-w-[325px] sm:max-w-[390px] md:max-w-[430px] lg:max-w-[460px] rounded-xl border p-5 sm:p-6 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] select-none flex flex-col justify-between group";
    
    if (diff === 0) {
      return `${baseClasses} left-1/2 -translate-x-1/2 bg-[#141416] border-[#C48452] shadow-[0_12px_45px_rgba(196,132,82,0.15)] scale-[1.02] opacity-100 z-20 cursor-default`;
    }
    
    if (diff === 1) {
      return `${baseClasses} left-[calc(50%+165px)] xs:left-[calc(50%+195px)] sm:left-[calc(50%+260px)] md:left-[calc(50%+340px)] lg:left-[calc(50%+390px)] -translate-x-1/2 bg-[#141416]/40 border-[#3F3F46]/35 scale-85 opacity-30 blur-[2px] z-10 cursor-pointer hover:opacity-50`;
    }
    
    if (diff === -1) {
      return `${baseClasses} left-[calc(50%-165px)] xs:left-[calc(50%-195px)] sm:left-[calc(50%-260px)] md:left-[calc(50%-340px)] lg:left-[calc(50%-390px)] -translate-x-1/2 bg-[#141416]/40 border-[#3F3F46]/35 scale-85 opacity-30 blur-[2px] z-10 cursor-pointer hover:opacity-50`;
    }
    
    return `${baseClasses} left-1/2 -translate-x-1/2 bg-[#141416]/10 border-transparent scale-75 opacity-0 blur-[6px] z-0 pointer-events-none`;
  };

  const getProjectIcon = (id: string) => {
    switch (id) {
      case "bitcoin-pred":
        return Network;
      case "agentic-rag":
        return Brain;
      case "teamsync":
        return Workflow;
      case "classconnect":
        return Database;
      default:
        return Cpu;
    }
  };

  return (
    <section
      id="projects"
      className="relative bg-[#0B0B0C] w-full min-h-screen py-24 px-6 lg:px-16 xl:px-24 border-t border-[#3F3F46]/30 overflow-hidden"
    >
      {/* Background Arc Overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(196,132,82,0.04),transparent_50%)] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto mb-16 text-center md:text-left">
        <div className="flex items-center gap-3 mb-2 justify-center md:justify-start">
          <Terminal size={14} className="text-[#C48452]" />
          <p className="font-mono text-xs uppercase tracking-widest text-[#C48452]">
            // 04 SYSTEM INTEGRATION SHOWCASES
          </p>
        </div>
        <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#F5F5F4] tracking-tight uppercase">
          Engineering <span className="text-[#C48452]">Showcases</span>_
        </h2>
        <div className="w-[80px] h-1.5 bg-[#C48452] mt-4 rounded-sm mx-auto md:mx-0" />
      </div>

      {/* HORIZONTAL PROJECT CAROUSEL NAVIGATOR */}
      <div className="relative w-full max-w-7xl mx-auto h-[260px] sm:h-[280px] mb-8 flex items-center justify-center overflow-visible select-none">
        
        {/* Navigation Floating Buttons */}
        <button 
          onClick={handlePrev} 
          className="absolute left-0 xs:left-2 sm:left-4 md:left-8 z-30 p-2.5 bg-[#141416]/80 text-[#A1A1AA] hover:text-[#C48452] hover:bg-[#1C1C1F] border border-neutral-800 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300"
          aria-label="Previous Project"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Carousel Tracks */}
        <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
          {projectsData.map((project, idx) => {
            const isCenter = idx === activeIndex;
            const ProjectIcon = getProjectIcon(project.id);

            return (
              <div
                key={project.id}
                onClick={() => handleCardClick(idx)}
                className={getCardStyleClasses(idx)}
              >
                {/* Visual watermark identifier */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ProjectIcon size={14} className="text-[#C48452]/80 group-hover:text-[#C48452] transition-colors" />
                    <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-500 group-hover:text-[#C48452]/70 transition-colors">
                      SYS NODE // {project.watermark}
                    </span>
                  </div>

                  {project.isFeatured && (
                    <span className="bg-[#C48452]/10 border border-[#C48452]/40 text-[#C48452] text-[8px] font-mono font-bold rounded px-1.5 py-0.5 tracking-wider uppercase flex items-center gap-1">
                      <Award size={8} /> Featured
                    </span>
                  )}
                </div>

                {/* Central details */}
                <div className="my-2">
                  <h3 className="font-display font-extrabold text-[#F5F5F4] text-lg sm:text-xl md:text-2xl tracking-tight leading-snug relative inline-block group-hover:text-[#F1C9A5] transition-colors">
                    {project.title}
                    {/* Subtle animated underline */}
                    {isCenter && (
                      <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C48452] transition-all duration-500 group-hover:w-full" />
                    )}
                  </h3>
                  <p className="font-sans text-xs text-[#A1A1AA] mt-2 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech chips stack */}
                <div className="flex items-center justify-between pt-3 border-t border-[#3F3F46]/20">
                  <div className="flex flex-wrap gap-1">
                    {project.tech.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="py-0.5 px-1.5 bg-[#1C1C1F] border border-[#3F3F46]/20 text-[9px] font-mono text-neutral-400 rounded"
                      >
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="py-0.5 px-1.5 bg-[#1C1C1F] border border-[#3F3F46]/20 text-[9px] font-mono text-[#C48452] rounded">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  <span className="text-[10px] font-mono text-neutral-600 group-hover:text-[#C48452] transition-colors flex items-center gap-0.5">
                    View <ChevronRight size={10} />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <button 
          onClick={handleNext} 
          className="absolute right-0 xs:right-2 sm:right-4 md:right-8 z-30 p-2.5 bg-[#141416]/80 text-[#A1A1AA] hover:text-[#C48452] hover:bg-[#1C1C1F] border border-neutral-800 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300"
          aria-label="Next Project"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* CINEMATIC SYSTEM ANCHORED ARCHITECTURE DETAIL PANEL */}
      <div className="relative z-10 w-full max-w-7xl mx-auto mt-6 md:mt-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="border border-[#C48452]/25 md:border-[#C48452]/35 rounded-2xl bg-[#0F0F11]/90 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-md p-6 sm:p-8 xl:p-10 relative overflow-hidden"
          >
            {/* Ambient inner soft light */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#C48452]/3 rounded-full blur-[80px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
              
              {/* SPECIFICATION COLUMN (Left Column, span 5) */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  {/* Category and watermark spec */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-mono text-[9px] text-[#C48452] uppercase tracking-widest block font-bold">
                      // SYSTEM DESIGN SCHEMATIC NODE: {activeProject.watermark}
                    </span>
                  </div>

                  <h3 className="font-display font-black text-2xl sm:text-3xl text-[#F5F5F4] tracking-tight uppercase mb-4">
                    {activeProject.title}
                  </h3>

                  {/* Core Long narrative */}
                  <p className="font-sans text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-xl mb-6">
                    {activeProject.longDescription}
                  </p>

                  {/* Integrated elegant challenges detail container */}
                  <div className="p-5 rounded-xl border border-neutral-800/80 bg-[#070708]/60 space-y-2 mb-6">
                    <div className="flex items-center gap-1.5">
                      <Cpu size={12} className="text-[#C48452]" />
                      <span className="font-mono text-[9px] text-[#F1C9A5] uppercase tracking-wider block font-bold">
                        SYSTEM HURDLE & MITIGATION
                      </span>
                    </div>
                    <p className="text-[11px] sm:text-xs text-neutral-400 leading-relaxed font-sans">
                      {activeProject.challenges}
                    </p>
                  </div>
                </div>

                {/* Integrated Tech stack list chips */}
                <div>
                  <div className="mb-6">
                    <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest block mb-2 text-left font-bold">
                      // TECH SPECIFICATIONS
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {activeProject.tech.map((term) => (
                        <span
                          key={term}
                          className="py-1 px-2 bg-[#1C1C1F]/60 border border-neutral-800/60 text-[10px] text-neutral-300 font-mono rounded"
                        >
                          {term}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Operational buttons */}
                  <div className="flex flex-row items-center gap-3 pt-6 border-t border-neutral-800/60">
                    <a
                      href={activeProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 border border-neutral-800 hover:border-[#C48452]/50 bg-[#141416]/50 hover:bg-[#141416] text-[11px] font-mono text-[#A1A1AA] hover:text-[#C48452] rounded-xl transition-all duration-300 shadow-md transform active:scale-95"
                    >
                      <Github size={13} />
                      <span>source_code</span>
                    </a>
                    
                    <button
                      onClick={() => setSelectedProject(activeProject)}
                      className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#C48452] hover:bg-[#E2A46E] text-[11px] font-mono text-[#0B0B0C] font-extrabold rounded-xl transition-all duration-300 shadow-md transform active:scale-95"
                    >
                      <ArrowRight size={13} />
                      <span>compile_specs</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* ARCHITECTURE SCHEMA VISUALIZER + PERFORMANCE TELEMETRY COLUMN (Right Column, span 7) */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                
                {/* Diagram wrapper border frame */}
                <div className="relative w-full aspect-[500/275] bg-[#070708]/90 border border-neutral-800/80 rounded-2xl p-4 flex flex-col justify-center items-center overflow-hidden">
                  <div className="absolute top-3 left-4 flex items-center gap-1.5">
                    <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest font-bold">
                      Interactive Pipeline Blueprint
                    </span>
                  </div>

                  {/* Grid Circuit Tracer canvas backgound inside */}
                  <div className="absolute inset-0 pointer-events-none opacity-[0.25] select-none">
                    <svg width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <pattern id="circ-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                          <circle cx="2" cy="2" r="1" fill="rgba(196,132,82,0.15)" />
                          <line x1="2" y1="2" x2="40" y2="2" stroke="rgba(196,132,82,0.03)" strokeWidth="0.8" />
                          <line x1="2" y1="2" x2="2" y2="40" stroke="rgba(196,132,82,0.03)" strokeWidth="0.8" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#circ-pattern)" />
                    </svg>
                  </div>

                  {/* Interactive graphics dynamically updated */}
                  {activeProject.id === "bitcoin-pred" && (
                    <svg width="100%" height="100%" viewBox="0 0 500 240" fill="none" className="z-10 w-full h-full max-h-[220px]">
                      <g id="grid-traces" stroke="rgba(196,132,82,0.12)" strokeWidth="1.2" strokeDasharray="3 3">
                        <line x1="120" y1="120" x2="200" y2="60" />
                        <line x1="120" y1="120" x2="200" y2="180" />
                        <line x1="200" y1="60" x2="300" y2="60" />
                        <line x1="200" y1="180" x2="300" y2="180" />
                        <line x1="300" y1="60" x2="380" y2="120" />
                        <line x1="300" y1="180" x2="380" y2="120" />
                      </g>

                      <path id="btc-path-upper" d="M 50 120 L 120 120 L 200 60 L 300 60 L 380 120 L 450 120" fill="none" stroke="rgba(196,132,82,0.2)" strokeWidth="1.5" />
                      <path id="btc-path-lower" d="M 50 120 L 120 120 L 200 180 L 300 180 L 380 120 L 450 120" fill="none" stroke="rgba(196,132,82,0.2)" strokeWidth="1.5" />

                      <circle r="3.5" fill="#FFFFFF" className="brightness-150 shadow-2xl">
                        <animateMotion dur="4s" repeatCount="indefinite" path="M 50 120 L 120 120 L 200 60 L 300 60 L 380 120 L 450 120" />
                      </circle>
                      <circle r="2.5" fill="#C48452">
                        <animateMotion dur="4.2s" begin="1.2s" repeatCount="indefinite" path="M 50 120 L 120 120 L 200 180 L 300 180 L 380 120 L 450 120" />
                      </circle>
                      <circle r="3" fill="#C48452">
                        <animateMotion dur="5.5s" begin="2.5s" repeatCount="indefinite" path="M 50 120 L 120 120 L 200 60 L 300 60 L 380 120 L 450 120" />
                      </circle>

                      <g id="blueprint-modules">
                        <rect x="25" y="95" width="70" height="50" rx="6" fill="#141416" stroke="#C48452" strokeWidth="1.2" />
                        <text x="60" y="118" fill="#F1C9A5" fontSize="8" fontFamily="'JetBrains Mono', monospace" textAnchor="middle" fontWeight="bold">INPUT_FEED</text>
                        <text x="60" y="132" fill="#A1A1AA" fontSize="7" fontFamily="'JetBrains Mono', monospace" textAnchor="middle">BTC OHLCV</text>

                        <rect x="110" y="10" width="80" height="40" rx="6" fill="#141416" stroke="#3F3F46" strokeWidth="1.2" />
                        <text x="150" y="29" fill="#F5F5F4" fontSize="8" fontFamily="'JetBrains Mono', monospace" textAnchor="middle" fontWeight="bold">TUNER_BAYES</text>
                        <text x="150" y="39" fill="#A1A1AA" fontSize="7" fontFamily="'JetBrains Mono', monospace" textAnchor="middle">Optuna</text>

                        <rect x="210" y="95" width="80" height="50" rx="6" fill="#141416" stroke="#C48452" strokeWidth="1.2" />
                        <text x="250" y="118" fill="#F1C9A5" fontSize="8" fontFamily="'JetBrains Mono', monospace" textAnchor="middle" fontWeight="bold">ENSEMBLE_CORE</text>
                        <text x="250" y="132" fill="#A1A1AA" fontSize="7" fontFamily="'JetBrains Mono', monospace" textAnchor="middle">LGBM + LSTM</text>

                        <rect x="310" y="190" width="80" height="40" rx="6" fill="#141416" stroke="#3F3F46" strokeWidth="1.2" />
                        <text x="350" y="209" fill="#F5F5F4" fontSize="8" fontFamily="'JetBrains Mono', monospace" textAnchor="middle" fontWeight="bold">STRATEGY_RUN</text>
                        <text x="350" y="219" fill="#A1A1AA" fontSize="7" fontFamily="'JetBrains Mono', monospace" textAnchor="middle">Threshold Opt</text>

                        <rect x="400" y="95" width="75" height="50" rx="6" fill="#141416" stroke="#C48452" strokeWidth="1.4" />
                        <text x="437" y="118" fill="#F1C9A5" fontSize="8" fontFamily="'JetBrains Mono', monospace" textAnchor="middle" fontWeight="bold">RESULTS_OUT</text>
                        <text x="437" y="132" fill="#10B981" fontSize="7" fontFamily="'JetBrains Mono', monospace" textAnchor="middle" fontWeight="bold">+30.1% / FOLD</text>
                      </g>
                    </svg>
                  )}

                  {activeProject.id === "agentic-rag" && (
                    <svg width="100%" height="100%" viewBox="0 0 500 240" fill="none" className="z-10 w-full h-full max-h-[220px]">
                      <path id="rag-path-line" d="M 40 120 L 120 120 L 190 60 L 260 60 L 330 120 L 260 180 L 190 180 L 120 120 L 190 60 L 330 120 L 460 120" fill="none" stroke="rgba(196,132,82,0.2)" strokeWidth="1.5" />

                      <circle r="3.5" fill="#FFFFFF" className="brightness-150">
                        <animateMotion dur="5s" repeatCount="indefinite" path="M 40 120 L 120 120 L 190 60 L 260 60 L 330 120 L 260 180 L 190 180 L 120 120 L 190 60 L 330 120 L 460 120" />
                      </circle>
                      <circle r="2.5" fill="#C48452">
                        <animateMotion dur="4.2s" begin="1.8s" repeatCount="indefinite" path="M 120 120 L 190 60 L 330 120 L 260 180 L 190 180 L 120 120" />
                      </circle>

                      <g id="rag-modules">
                        <rect x="25" y="95" width="70" height="50" rx="6" fill="#141416" stroke="#3F3F46" strokeWidth="1.2" />
                        <text x="60" y="118" fill="#F5F5F4" fontSize="8" fontFamily="'JetBrains Mono', monospace" textAnchor="middle" fontWeight="bold">PDF_SOURCE</text>
                        <text x="60" y="132" fill="#A1A1AA" fontSize="7" fontFamily="'JetBrains Mono', monospace" textAnchor="middle">Ingest Pipe</text>

                        <rect x="135" y="10" width="80" height="40" rx="6" fill="#141416" stroke="#C48452" strokeWidth="1.2" />
                        <text x="175" y="29" fill="#F1C9A5" fontSize="8" fontFamily="'JetBrains Mono', monospace" textAnchor="middle" fontWeight="bold">FAST_MCP_API</text>
                        <text x="175" y="39" fill="#A1A1AA" fontSize="7" fontFamily="'JetBrains Mono', monospace" textAnchor="middle">Server Module</text>

                        <rect x="250" y="10" width="80" height="40" rx="6" fill="#141416" stroke="#3F3F46" strokeWidth="1.2" />
                        <text x="290" y="29" fill="#F5F5F4" fontSize="8" fontFamily="'JetBrains Mono', monospace" textAnchor="middle" fontWeight="bold">QDRANT_INDEX</text>
                        <text x="290" y="39" fill="#A1A1AA" fontSize="7" fontFamily="'JetBrains Mono', monospace" textAnchor="middle">Vector Db</text>

                        <rect x="170" y="190" width="90" height="40" rx="6" fill="#141416" stroke="#C48452" strokeWidth="1.2" />
                        <text x="215" y="209" fill="#F1C9A5" fontSize="8" fontFamily="'JetBrains Mono', monospace" textAnchor="middle" fontWeight="bold">LANGGRAPH_CORE</text>
                        <text x="215" y="219" fill="#A1A1AA" fontSize="7" fontFamily="'JetBrains Mono', monospace" textAnchor="middle">State Graph</text>

                        <rect x="310" y="95" width="70" height="50" rx="6" fill="#141416" stroke="#3F3F46" strokeWidth="1.2" />
                        <text x="345" y="118" fill="#F5F5F4" fontSize="8" fontFamily="'JetBrains Mono', monospace" textAnchor="middle" fontWeight="bold">LLM_REASON</text>
                        <text x="345" y="132" fill="#A1A1AA" fontSize="7" fontFamily="'JetBrains Mono', monospace" textAnchor="middle">Inject Context</text>

                        <rect x="405" y="95" width="70" height="50" rx="6" fill="#141416" stroke="#C48452" strokeWidth="1.4" />
                        <text x="440" y="118" fill="#F1C9A5" fontSize="8" fontFamily="'JetBrains Mono', monospace" textAnchor="middle" fontWeight="bold">OUTPUT_CHAT</text>
                        <text x="440" y="132" fill="#10B981" fontSize="7" fontFamily="'JetBrains Mono', monospace" textAnchor="middle" fontWeight="bold">Stream NL</text>
                      </g>
                    </svg>
                  )}

                  {activeProject.id === "teamsync" && (
                    <svg width="100%" height="100%" viewBox="0 0 500 240" fill="none" className="z-10 w-full h-full max-h-[220px]">
                      <path id="teamsync-loop" d="M 40 120 L 130 120 L 210 60 L 290 60 L 370 120 L 460 120 L 370 120 L 290 180 L 210 180 L 130 120" fill="none" stroke="rgba(196,132,82,0.2)" strokeWidth="1.5" />

                      <circle r="3" fill="#FFFFFF" className="brightness-150">
                        <animateMotion dur="3.5s" repeatCount="indefinite" path="M 40 120 L 130 120 L 210 60 L 290 60 L 370 120 L 460 120" />
                      </circle>
                      <circle r="2.5" fill="#C48452">
                        <animateMotion dur="4.5s" begin="1s" repeatCount="indefinite" path="M 460 120 L 370 120 L 290 180 L 210 180 L 130 120 L 210 60 L 290 60 L 370 120" />
                      </circle>

                      <g id="teamsync-modules">
                        <rect x="25" y="95" width="75" height="50" rx="6" fill="#141416" stroke="#C48452" strokeWidth="1.2" />
                        <text x="62" y="118" fill="#F1C9A5" fontSize="8" fontFamily="'JetBrains Mono', monospace" textAnchor="middle" fontWeight="bold">FE_CLIENT</text>
                        <text x="62" y="132" fill="#A1A1AA" fontSize="7" fontFamily="'JetBrains Mono', monospace" textAnchor="middle">React Zustand</text>

                        <rect x="135" y="10" width="85" height="40" rx="6" fill="#141416" stroke="#3F3F46" strokeWidth="1.2" />
                        <text x="177" y="29" fill="#F5F5F4" fontSize="8" fontFamily="'JetBrains Mono', monospace" textAnchor="middle" fontWeight="bold">WEBSOCKET_GATE</text>
                        <text x="177" y="39" fill="#A1A1AA" fontSize="7" fontFamily="'JetBrains Mono', monospace" textAnchor="middle">Socket.IO</text>

                        <rect x="245" y="10" width="80" height="40" rx="6" fill="#141416" stroke="#C48452" strokeWidth="1.2" />
                        <text x="285" y="29" fill="#F1C9A5" fontSize="8" fontFamily="'JetBrains Mono', monospace" textAnchor="middle" fontWeight="bold">EXPRESS_CORE</text>
                        <text x="285" y="39" fill="#A1A1AA" fontSize="7" fontFamily="'JetBrains Mono', monospace" textAnchor="middle">API Server</text>

                        <rect x="195" y="190" width="90" height="40" rx="6" fill="#141416" stroke="#3F3F46" strokeWidth="1.2" />
                        <text x="240" y="209" fill="#F5F5F4" fontSize="8" fontFamily="'JetBrains Mono', monospace" textAnchor="middle" fontWeight="bold">MONGODB_ATLAS</text>
                        <text x="240" y="219" fill="#A1A1AA" fontSize="7" fontFamily="'JetBrains Mono', monospace" textAnchor="middle">Database State</text>

                        <rect x="340" y="95" width="80" height="50" rx="6" fill="#141416" stroke="#C48452" strokeWidth="1.2" />
                        <text x="380" y="118" fill="#F1C9A5" fontSize="8" fontFamily="'JetBrains Mono', monospace" textAnchor="middle" fontWeight="bold">IMAGEKIT_CDN</text>
                        <text x="380" y="132" fill="#A1A1AA" fontSize="7" fontFamily="'JetBrains Mono', monospace" textAnchor="middle">Media Pipe</text>

                        <rect x="430" y="105" width="45" height="30" rx="4" fill="#141416" stroke="#3F3F46" strokeWidth="1.2" />
                        <text x="452" y="123" fill="#A1A1AA" fontSize="8" fontFamily="'JetBrains Mono', monospace" textAnchor="middle">ROOMS</text>
                      </g>
                    </svg>
                  )}

                  {activeProject.id === "classconnect" && (
                    <svg width="100%" height="100%" viewBox="0 0 500 240" fill="none" className="z-10 w-full h-full max-h-[220px]">
                      <path id="cc-straight-path" d="M 50 120 L 160 120 L 270 120 L 380 120 L 450 120" fill="none" stroke="rgba(196,132,82,0.2)" strokeWidth="1.5" />
                      <path id="cc-loop-up" d="M 160 120 C 160 60, 270 60, 270 120" fill="none" stroke="rgba(196,132,82,0.12)" strokeWidth="1.2" />
                      <path id="cc-loop-down" d="M 270 120 C 270 180, 380 180, 380 120" fill="none" stroke="rgba(196,132,82,0.12)" strokeWidth="1.2" />

                      <circle r="3" fill="#FFFFFF">
                        <animateMotion dur="3s" repeatCount="indefinite" path="M 50 120 L 160 120 C 160 60, 270 60, 270 120 L 380 120 L 450 120" />
                      </circle>
                      <circle r="2.5" fill="#C48452">
                        <animateMotion dur="4s" begin="1s" repeatCount="indefinite" path="M 50 120 L 160 120 L 270 120 C 270 180, 380 180, 380 120 L 450 120" />
                      </circle>

                      <g id="cc-modules">
                        <rect x="25" y="95" width="75" height="50" rx="6" fill="#141416" stroke="#C48452" strokeWidth="1.2" />
                        <text x="62" y="118" fill="#F1C9A5" fontSize="8" fontFamily="'JetBrains Mono', monospace" textAnchor="middle" fontWeight="bold">PORTAL_UI</text>
                        <text x="62" y="132" fill="#A1A1AA" fontSize="7" fontFamily="'JetBrains Mono', monospace" textAnchor="middle">React client</text>

                        <rect x="135" y="95" width="75" height="50" rx="6" fill="#141416" stroke="#3F3F46" strokeWidth="1.2" />
                        <text x="172" y="118" fill="#F5F5F4" fontSize="8" fontFamily="'JetBrains Mono', monospace" textAnchor="middle" fontWeight="bold">BCRYPT_AUTH</text>
                        <text x="172" y="132" fill="#A1A1AA" fontSize="7" fontFamily="'JetBrains Mono', monospace" textAnchor="middle">JWT Verification</text>

                        <rect x="245" y="95" width="80" height="50" rx="6" fill="#141416" stroke="#C48452" strokeWidth="1.2" />
                        <text x="285" y="118" fill="#F1C9A5" fontSize="8" fontFamily="'JetBrains Mono', monospace" textAnchor="middle" fontWeight="bold">EXPRESS_ROUTER</text>
                        <text x="285" y="132" fill="#A1A1AA" fontSize="7" fontFamily="'JetBrains Mono', monospace" textAnchor="middle">Payload Parser</text>

                        <rect x="355" y="95" width="75" height="50" rx="6" fill="#141416" stroke="#3F3F46" strokeWidth="1.2" />
                        <text x="392" y="118" fill="#F5F5F4" fontSize="8" fontFamily="'JetBrains Mono', monospace" textAnchor="middle" fontWeight="bold">MONGO_ENGINE</text>
                        <text x="392" y="132" fill="#A1A1AA" fontSize="7" fontFamily="'JetBrains Mono', monospace" textAnchor="middle">Acad Schema</text>

                        <circle cx="460" cy="120" r="10" fill="#141416" stroke="#C48452" strokeWidth="1.2" />
                        <text x="460" y="123" fill="#C48452" fontSize="9" fontFamily="'JetBrains Mono', monospace" textAnchor="middle" fontWeight="bold">DB</text>
                      </g>
                    </svg>
                  )}
                </div>

                {/* Performance telemetry Counters */}
                {activeProject.metrics && (
                  <div>
                    <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest block mb-2 text-left font-bold">
                      // PERFORMANCE TELEMETRY COUNTERS
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#070708]/60 border border-neutral-800/80 rounded-xl p-4">
                      {activeProject.metrics.map((metric, mIdx) => (
                        <div key={mIdx} className="flex flex-col text-left">
                          <span className="font-mono text-[9px] uppercase text-neutral-500 tracking-wider mb-0.5 font-bold">
                            {metric.label}
                          </span>
                          <span className="font-display font-extrabold text-sm sm:text-base text-[#F1C9A5]">
                            {metric.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
              </div>

            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Full Spec Overlay Drawer/Modal */}
      <ProjectDrawer
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
