import { useState, useMemo } from "react";
import { 
  Github, 
  Cpu, 
  Award, 
  Terminal, 
  ChevronRight, 
  ChevronLeft,
  ArrowRight,
  Workflow,
  Network,
  Brain,
  Database,
  CloudRain,
  ShieldAlert,
  Briefcase
} from "lucide-react";
import { Project } from "../types";
import ProjectDrawer from "./ProjectDrawer";
import { motion, AnimatePresence } from "motion/react";

export const projectsData: Project[] = [
  {
    id: "terraflux",
    title: "TerraFlux — Geospatial Weather System",
    slug: "terraflux-geospatial-weather",
    category: "AI",
    watermark: "01",
    isFeatured: true,
    description: "Agent-driven workflow converting natural-language weather queries into structured geospatial requests, regional climate analytics, and layer-based maps.",
    longDescription: "Built an agent-driven workflow that converts natural-language weather questions into structured geospatial requests, connecting location resolution, weather-data processing, and interactive map generation. Implemented hierarchical administrative-boundary resolution from country to district, with ordered source fallbacks and escalation to a broader parent region when a precise boundary cannot be resolved. Developed a climate analysis workflow that processes historical weather data into regional statistics and interactive, layer-based maps, with support for regional comparisons and forecast retrieval.",
    challenges: "Resolving ambiguous regional geographical queries and aligning multi-scale boundary coordinates without query failure. Solved through hierarchical administrative-boundary resolution with ordered source fallbacks and escalation to a broader parent region when a precise boundary cannot be resolved.",
    architecture: `
+-----------------------+     +------------------------+     +-----------------------+
| Natural Language Query| --> | LangGraph Agent Flow   | --> | Boundary Resolution   |
| ("Weather in Sindh")  |     | (Intent & Resolution)  |     | (Country -> District) |
+-----------------------+     +------------------------+     +-----------+-----------+
                                                                         |
+-----------------------+     +------------------------+                 v
| Layer-based Map Output|<--  | GeoPandas & Shapely    | <---------------+
| (Regional Stats/Viz)  |     | (Climate Analysis Pipe)|
+-----------------------+     +------------------------+
`,
    tech: ["LangGraph", "LangChain", "GeoPandas", "Shapely", "Python"],
    metrics: [
      { label: "Boundary Resolv", value: "District Level" },
      { label: "Query Flow", value: "Multi-Step" },
      { label: "Workflow Engine", value: "LangGraph" },
      { label: "Layer Output", value: "Interactive Maps" },
    ],
    githubUrl: "https://github.com/Hassin007/TerraFlux-Backend",
  },
  {
    id: "gitsense",
    title: "GitSense — Autonomous GitHub Code Review",
    slug: "gitsense-autonomous-code-review",
    category: "AI",
    watermark: "02",
    isFeatured: true,
    description: "Real-time AI code reviewer monitoring commits & PRs, evaluating security vulnerabilities, breaking changes, and generating automated code fixes.",
    longDescription: "Automated code reviews by checking every GitHub commit and pull request as it happens, flagging security risks, breaking changes, and bugs without manual effort. Designed an automated fix generator that explains detected problems in plain English and provides ready-to-copy code solutions, cutting down manual debugging time. Ran several specialized checks in parallel, covering security, reliability, code quality, and breaking changes, then combined them into one overall risk score while filtering out unreliable AI-generated findings.",
    challenges: "Running multiple specialized checks concurrently without hallucinated alerts. Addressed by running parallel inspection workers across security, reliability, and code quality, aggregating them into a unified risk score, and filtering unreliable findings.",
    architecture: `
+-----------------------+     +------------------------+     +-----------------------+
| GitHub Commit / PR    | --> | FastAPI Webhook Hub    | --> | Parallel Checks Graph |
| (Webhook Trigger)     |     | (Redis Queue / State)  |     | (Security, Bugs, QoL) |
+-----------------------+     +------------------------+     +-----------+-----------+
                                                                         |
+-----------------------+     +------------------------+                 v
| PR Comment / Code Fix |<--  | Risk Score Aggregator  | <---------------+
| (Verified Solutions)  |     | & Automated Fix Engine |
+-----------------------+     +------------------------+
`,
    tech: ["Python", "FastAPI", "LangGraph", "Redis", "PostgreSQL", "Langfuse", "Docker"],
    metrics: [
      { label: "Review Mode", value: "Real-time PR" },
      { label: "Parallel Checks", value: "4 Scanners" },
      { label: "Fix Output", value: "Ready Code Fix" },
      { label: "Telemetry", value: "Langfuse + Redis" },
    ],
    githubUrl: "https://github.com/Hassin007/GitSense-AI",
  },
  {
    id: "bitcoin-pred",
    title: "Bitcoin Market Direction Prediction",
    slug: "bitcoin-market-prediction",
    category: "ML",
    watermark: "03",
    isFeatured: true,
    description: "Algorithmic directional model earning average +30.1% return and reducing maximum drawdown from 52.2% to 17.8% across out-of-sample data.",
    longDescription: "Trained a model to predict Bitcoin's next market move and tested it on unseen future data, earning an average +30.1% return and cutting the worst loss from 52.2% to 17.8% versus buy-and-hold. Optimized results by automatically tuning model settings and adjusting trade signal thresholds, turning a profit in 4 of 5 test periods with a peak return of +95.8%. Discovered that how outcomes were labeled mattered more than model choice, and adjusting that threshold cut prediction error nearly in half.",
    challenges: "Extreme non-stationarity and financial noise. Solved through threshold-based target label engineering, walk-forward validation across 5 folds, and Bayesian hyperparameter tuning dynamically guided by the Sharpe ratio.",
    architecture: `
+-----------------------+     +------------------------+     +-----------------------+
| BTC OHLCV & Features  | --> | Optuna Hyperparameter  | --> | LGBM + LSTM Ensemble  |
| (Stationary Labeled)  |     | (Bayesian Optimization)|     | (Walk-Forward Folds)  |
+-----------------------+     +------------------------+     +-----------+-----------+
                                                                         |
+-----------------------+     +------------------------+                 v
| Out-of-sample Alpha   |<--  | Trade Signal Mapping   | <---------------+
| (+30.1% Avg Return)   |     | (Dynamic Thresholds)   |
+-----------------------+     +------------------------+
`,
    tech: ["LightGBM", "LSTM", "Optuna", "scikit-learn", "Python", "pandas", "NumPy"],
    metrics: [
      { label: "Avg Return", value: "+30.1%" },
      { label: "Max Drawdown", value: "17.8%" },
      { label: "Profitable Folds", value: "4/5" },
      { label: "Peak Return", value: "+95.8%" },
    ],
    githubUrl: "https://github.com/Hassin007/BTC-Signal-Prediction",
  },
  {
    id: "agentic-rag",
    title: "Agentic RAG — Military Doctrine Assistant",
    slug: "agentic-rag-military-doctrine",
    category: "AI",
    watermark: "04",
    isFeatured: true,
    description: "Tactical chat assistant answering questions across doctrine manuals using AI agent reasoning, hybrid vector search, and passage verification.",
    longDescription: "Built a chat assistant that answers tactical questions by searching military doctrine manuals with an AI agent and citing the exact source. Designed the agent's multi-step reasoning and document indexing so new manuals load in the background without one failure stopping the system. Combined keyword and meaning-based search to improve retrieval accuracy, and added a review step that checks retrieved passages before generating an answer.",
    challenges: "Document indexing failures interrupting the server and imprecise semantic matches on tactical terminology. Resolved by combining hybrid keyword and vector retrieval with an automated passage review step and resilient background ingestion.",
    architecture: `
+-----------------------+     +------------------------+     +-----------------------+
| Doctrine Manual Ingest| --> | FastMCP Server Pipe    | --> | Hybrid Index (Keyword |
| (Background Indexing) |     | (Error Isolation)      |     | + Dense Embedding)    |
+-----------------------+     +------------------------+     +-----------+-----------+
                                                                         |
+-----------------------+     +------------------------+                 v
| Verified Answer & Cite|<--  | Passage Review Node    | <---------------+
| (Tactical Assistant)  |     | & LangGraph Reasoner   |
+-----------------------+     +------------------------+
`,
    tech: ["Python", "FastMCP", "LangChain", "LangGraph", "ImageKit"],
    metrics: [
      { label: "Query Speed", value: "< 1.2s" },
      { label: "Retrieval", value: "Hybrid Vector" },
      { label: "Framework", value: "FastMCP + Graph" },
      { label: "Citation", value: "Exact Source" },
    ],
    githubUrl: "https://github.com/Hassin007/Agentic-RAG",
  },
  {
    id: "teamsync",
    title: "TeamSync — Real-Time Team Workspace",
    slug: "teamsync-collaboration",
    category: "Full-stack",
    watermark: "05",
    isFeatured: true,
    description: "Real-time team collaboration platform with separate workspaces, role-based access, live chat, typing indicators, threads, and OTP auth.",
    longDescription: "Constructed a real-time team collaboration platform with separate workspaces, role-based access, live chat with typing indicators, online status and threads, and secure login with email OTP verification. Introduced a file management system with folder hierarchy, multi-user assignment, and cloud-based file delivery, alongside an admin dashboard with analytics for user, workspace, and content moderation. Structured the backend with clear separation between authentication, workspace, messaging, and file logic, and documented REST endpoints for easy integration.",
    challenges: "Synchronizing system states among hundreds of active connections without deadlocks or packet loss. Solved by mapping a highly reliable Socket.IO architecture backed by state tracking in MongoDB and custom client-side Zustand stores.",
    architecture: `
+-----------------------+     +------------------------+     +-----------------------+
| React + Zustand Client| <-> | Socket.IO WebSocket    | <-> | Express.js REST API   |
| (Threads, Active Pres)|     | (Rooms & Presence)     |     | (Modular Services)    |
+-----------------------+     +------------------------+     +-----------+-----------+
                                                                         |
+-----------------------+     +------------------------+                 v
| ImageKit CDN Storage  |<--  | Admin Analytics Dash   | <---> [MongoDB Database]
| (File Hierarchy)      |     | & Moderation Engine    |
+-----------------------+     +------------------------+
`,
    tech: ["Node.js", "Express.js", "MongoDB", "React", "Socket.IO", "ImageKit", "JWT", "Zustand"],
    metrics: [
      { label: "Ping Latency", value: "< 40ms" },
      { label: "Auth Flow", value: "Email OTP + JWT" },
      { label: "Media Pipeline", value: "ImageKit CDN" },
      { label: "Workspace", value: "Multi-tenant" },
    ],
    githubUrl: "https://github.com/Hassin007/TeamColabApp",
  },
  {
    id: "classconnect",
    title: "ClassConnect — Digital Classroom Tool",
    slug: "classconnect-education",
    category: "Full-stack",
    watermark: "06",
    isFeatured: false,
    description: "Virtual classroom platform where teachers create classrooms and post assignments, and students join to view updates and submit work.",
    longDescription: "Contributed to a virtual classroom platform where teachers create classrooms and post assignments and announcements, and students join classes to view updates and stay organized. Helped deliver assignment submissions, comment discussions on posts and student work, and secure sign-up and login for both teachers and students. Kept the backend and database structure organized and easy to extend as new classroom features are added.",
    challenges: "Structuring dynamic role-based access (teachers vs students) with safe submission tracking. Solved by designing relational models in MySQL with Django ORM, and cleanly organizing views and submission pipelines.",
    architecture: `
+-----------------------+     +------------------------+     +-----------------------+
| Teacher / Student UI  | --> | Django Auth & Views    | --> | Relational MySQL DB   |
| (Tailwind Responsive) |     | (Role Validation)      |     | (Users, Classes, Posts|
+-----------------------+     +------------------------+     +-----------+-----------+
                                                                         |
+-----------------------+     +------------------------+                 v
| Assignment Submissions|<--  | Class Workflow Router  | <---------------+
| & Comments Thread     |     | (Grading & Updates)    |
+-----------------------+     +------------------------+
`,
    tech: ["Python", "Django", "Tailwind CSS", "MySQL"],
    metrics: [
      { label: "Backend", value: "Django Python" },
      { label: "Database", value: "MySQL" },
      { label: "Role System", value: "Teacher & Student" },
      { label: "Features", value: "Posts & Submissions" },
    ],
    githubUrl: "https://github.com/Hassin007/ClassConnect",
  },
  {
    id: "salaryscout",
    title: "SalaryScout — Multi-Source Job Discovery",
    slug: "salaryscout-job-discovery",
    category: "Full-stack",
    watermark: "07",
    isFeatured: false,
    description: "Full-stack job finder aggregating multiple external APIs with real-time salary estimation, dynamic filtering, and direct 1-step applications.",
    longDescription: "Assembled a full-stack job finder application integrating multiple external APIs for real-time job listings and salary estimation, with dynamic filtering by experience level, location type, and company. Crafted a single, easy-to-browse job feed that brings listings together in one place and gives every posting a direct application link, so users can apply in one step. Refined a clean, mobile-friendly layout so users can search and compare jobs comfortably on any device.",
    challenges: "Aggregating multiple third-party API response schemas into a unified, normalized listing format without latency spikes. Solved with asynchronous request normalization, client-side caching, and dynamic filter indices.",
    architecture: `
+-----------------------+     +------------------------+     +-----------------------+
| Job Search Query      | --> | React Feed Engine      | --> | Multi-API Ingestion   |
| (Experience/Location) |     | (Axios Clients)        |     | (Normalized Schemas)  |
+-----------------------+     +------------------------+     +-----------+-----------+
                                                                         |
+-----------------------+     +------------------------+                 v
| 1-Step Direct Apply   |<--  | Dynamic Filter Index   | <---------------+
| & Salary Estimate View|     | & shadcn/ui Interface  |
+-----------------------+     +------------------------+
`,
    tech: ["JavaScript", "React", "Vite", "Tailwind CSS", "shadcn/ui", "Radix UI", "Axios", "React Router", "Framer Motion"],
    metrics: [
      { label: "Aggregation", value: "Multi-API Feed" },
      { label: "Apply Flow", value: "1-Step Direct" },
      { label: "UI Toolkit", value: "shadcn + Framer" },
      { label: "Filters", value: "Level, Loc, Co." },
    ],
    githubUrl: "https://github.com/Hassin007/SalaryScout",
  }
];

type FilterCategory = "ALL" | "AI" | "ML" | "FULLSTACK";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>("ALL");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "ALL") return projectsData;
    if (selectedCategory === "AI") return projectsData.filter((p) => p.category === "AI");
    if (selectedCategory === "ML") return projectsData.filter((p) => p.category === "ML");
    if (selectedCategory === "FULLSTACK") return projectsData.filter((p) => p.category === "Full-stack");
    return projectsData;
  }, [selectedCategory]);

  // Reset active index safely when category changes
  const activeProject = filteredProjects[activeIndex] || filteredProjects[0] || projectsData[0];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const handleCategorySelect = (cat: FilterCategory) => {
    setSelectedCategory(cat);
    setActiveIndex(0);
  };

  const getCircularDistance = (idx: number) => {
    const len = filteredProjects.length;
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
      case "terraflux":
        return CloudRain;
      case "gitsense":
        return ShieldAlert;
      case "bitcoin-pred":
        return Network;
      case "agentic-rag":
        return Brain;
      case "teamsync":
        return Workflow;
      case "classconnect":
        return Database;
      case "salaryscout":
        return Briefcase;
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

      <div className="relative z-10 w-full max-w-7xl mx-auto mb-12 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
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

        {/* Category Tabs: All, AI, ML, Full-Stack */}
        <div className="flex items-center justify-center md:justify-end gap-2 flex-wrap">
          {[
            { id: "ALL", label: "All Projects (7)" },
            { id: "AI", label: "AI Systems (3)" },
            { id: "ML", label: "Machine Learning (1)" },
            { id: "FULLSTACK", label: "Full-Stack (3)" },
          ].map((tab) => {
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleCategorySelect(tab.id as FilterCategory)}
                className={`py-2 px-3.5 rounded-xl font-mono text-xs transition-all duration-300 border ${
                  isActive
                    ? "bg-[#C48452] text-[#0B0B0C] font-bold border-[#C48452] shadow-md"
                    : "bg-[#141416]/80 text-[#A1A1AA] hover:text-[#F5F5F4] border-[#3F3F46]/40 hover:border-[#C48452]/40"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* HORIZONTAL PROJECT CAROUSEL NAVIGATOR */}
      <div className="relative w-full max-w-7xl mx-auto h-[260px] sm:h-[280px] mb-8 flex items-center justify-center overflow-visible select-none">
        {/* Navigation Floating Buttons */}
        {filteredProjects.length > 1 && (
          <button 
            onClick={handlePrev} 
            className="absolute left-0 xs:left-2 sm:left-4 md:left-8 z-30 p-2.5 bg-[#141416]/80 text-[#A1A1AA] hover:text-[#C48452] hover:bg-[#1C1C1F] border border-neutral-800 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300"
            aria-label="Previous Project"
          >
            <ChevronLeft size={20} />
          </button>
        )}

        {/* Carousel Tracks */}
        <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
          {filteredProjects.map((project, idx) => {
            const isCenter = idx === activeIndex;
            const ProjectIcon = getProjectIcon(project.id);

            return (
              <div
                key={project.id}
                onClick={() => setActiveIndex(idx)}
                className={getCardStyleClasses(idx)}
              >
                {/* Visual watermark identifier */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ProjectIcon size={14} className="text-[#C48452]/80 group-hover:text-[#C48452] transition-colors" />
                    <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-500 group-hover:text-[#C48452]/70 transition-colors">
                      {project.category} // {project.watermark}
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

        {filteredProjects.length > 1 && (
          <button 
            onClick={handleNext} 
            className="absolute right-0 xs:right-2 sm:right-4 md:right-8 z-30 p-2.5 bg-[#141416]/80 text-[#A1A1AA] hover:text-[#C48452] hover:bg-[#1C1C1F] border border-neutral-800 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300"
            aria-label="Next Project"
          >
            <ChevronRight size={20} />
          </button>
        )}
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
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-mono text-[9px] text-[#C48452] uppercase tracking-widest block font-bold">
                      // {activeProject.category} SPECIFICATION NODE: {activeProject.watermark}
                    </span>
                    {activeProject.isFeatured && (
                      <span className="py-0.5 px-2 bg-[#C48452]/10 border border-[#C48452]/30 text-[9px] font-mono text-[#F1C9A5] rounded-full uppercase">
                        Featured Project
                      </span>
                    )}
                  </div>

                  <h3 className="font-display font-black text-2xl sm:text-3xl text-[#F5F5F4] tracking-tight uppercase mb-4">
                    {activeProject.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-xl mb-6">
                    {activeProject.longDescription}
                  </p>

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
                <div className="relative w-full aspect-[500/275] bg-[#070708]/90 border border-neutral-800/80 rounded-2xl p-5 flex flex-col justify-center items-center overflow-hidden">
                  <div className="absolute top-3 left-4 flex items-center gap-1.5 z-20">
                    <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest font-bold">
                      Interactive Pipeline Blueprint
                    </span>
                  </div>

                  {/* Grid Circuit Tracer canvas background */}
                  <div className="absolute inset-0 pointer-events-none opacity-[0.2] select-none">
                    <svg width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <pattern id="circ-pattern-proj" width="36" height="36" patternUnits="userSpaceOnUse">
                          <circle cx="2" cy="2" r="1" fill="rgba(196,132,82,0.15)" />
                          <line x1="2" y1="2" x2="36" y2="2" stroke="rgba(196,132,82,0.03)" strokeWidth="0.8" />
                          <line x1="2" y1="2" x2="2" y2="36" stroke="rgba(196,132,82,0.03)" strokeWidth="0.8" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#circ-pattern-proj)" />
                    </svg>
                  </div>

                  {/* ASCII Diagram Visualizer */}
                  <div className="relative z-10 w-full h-full flex items-center justify-center p-2 overflow-x-auto">
                    <pre className="font-mono text-[9px] sm:text-[10px] md:text-[11px] text-[#F1C9A5] leading-relaxed tracking-wider select-none text-center">
                      {activeProject.architecture.trim()}
                    </pre>
                  </div>
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
