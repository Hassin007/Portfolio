import { useEffect } from "react";
import { X, Github, ExternalLink, Cpu, AlertCircle, Layers, Award } from "lucide-react";
import { Project } from "../types";
import { motion, AnimatePresence } from "motion/react";

interface ProjectDrawerProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDrawer({ project, onClose }: ProjectDrawerProps) {
  // Prevent scrolling behind open modal
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [project]);

  // Support pressing escape to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div key="project-modal" className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-zoom-out"
            onClick={onClose}
          />

          {/* Expanded Modal Content */}
          <motion.div
            layoutId={`card-${project.id}`}
            className="relative w-full max-w-4xl bg-[#141416] border border-[#3F3F46]/60 rounded-2xl p-6 md:p-10 shadow-2xl z-10 max-h-[90vh] overflow-y-auto cursor-default flex flex-col"
            style={{
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 50px rgba(196, 132, 82, 0.12)",
            }}
            transition={{ type: "spring", stiffness: 350, damping: 35 }}
          >
            {/* Top decorative element */}
            <motion.div 
              layoutId={`glow-${project.id}`}
              className="absolute top-0 left-0 w-full h-[3px] bg-[#C48452]" 
            />

            {/* Header Block */}
            <div className="flex items-start justify-between gap-6 mb-8 border-b border-[#3F3F46]/30 pb-6">
              <div>
                {project.isFeatured && (
                  <motion.span 
                    layoutId={`badge-${project.id}`}
                    className="inline-flex items-center gap-1.5 py-1 px-3 mb-3 bg-[#C48452]/10 border border-[#C48452]/30 text-[10px] font-mono font-semibold text-[#C48452] rounded-full uppercase tracking-wider"
                  >
                    <Award size={10} /> Selected Project
                  </motion.span>
                )}
                <motion.h3 
                  layoutId={`title-${project.id}`}
                  className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#F5F5F4] tracking-tight uppercase"
                >
                  {project.title}
                </motion.h3>
              </div>
              <button
                onClick={onClose}
                className="p-3 bg-[#1C1C1F] hover:bg-[#C48452] border border-[#3F3F46]/50 hover:border-transparent text-[#A1A1AA] hover:text-[#0B0B0C] rounded-full transition-all duration-300"
                aria-label="Close Details"
              >
                <X size={16} />
              </button>
            </div>

            {/* Content Layout Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left Main details column */}
              <div className="lg:col-span-8 space-y-8">
                
                {/* Overview */}
                <div className="space-y-3">
                  <h4 className="font-display font-bold text-[#F5F5F4] text-sm uppercase tracking-wider flex items-center gap-2">
                    <Layers size={14} className="text-[#C48452]" />
                    Project Narrative
                  </h4>
                  <motion.p 
                    layoutId={`desc-${project.id}`}
                    className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed"
                  >
                    {project.longDescription}
                  </motion.p>
                </div>

                {/* Architectural Hurdles */}
                <div className="space-y-3 p-6 bg-[#1C1C1F]/60 border border-[#3F3F46]/40 rounded-2xl relative overflow-hidden group">
                  <div className="absolute top-0 left-0 h-full w-[3px] bg-[#C48452]" />
                  <h4 className="font-display font-bold text-sm uppercase tracking-wider text-[#F1C9A5] flex items-center gap-2">
                    <AlertCircle size={14} className="text-[#C48452]" />
                    Hurdles & Mitigation
                  </h4>
                  <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                    {project.challenges}
                  </p>
                </div>

                {/* Architecture Schema Visual Block */}
                {project.architecture && (
                  <div className="space-y-3">
                    <h4 className="font-display font-bold text-sm uppercase tracking-wider text-[#F5F5F4] flex items-center gap-2">
                      <Cpu size={14} className="text-[#C48452]" />
                      Internal Schema
                    </h4>
                    <pre className="p-5 bg-[#0B0B0C] border border-[#3F3F46]/40 rounded-xl font-mono text-[10px] sm:text-xs text-[#E2A46E]/95 overflow-x-auto whitespace-pre leading-relaxed tracking-wide shadow-inner">
                      {project.architecture}
                    </pre>
                  </div>
                )}
              </div>

              {/* Right Sidebar Specifications column */}
              <div className="lg:col-span-4 space-y-6">
                
                {/* Core Tech stack pill bucket */}
                <div className="p-6 bg-[#1C1C1F]/40 border border-[#3F3F46]/30 rounded-2xl">
                  <h4 className="font-display font-bold text-xs text-[#F5F5F4] uppercase tracking-widest mb-4">
                    Specifications
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((term) => (
                      <span
                        key={term}
                        className="py-1 px-2.5 bg-[#0B0B0C] border border-[#3F3F46]/55 text-[10px] text-[#C48452] font-mono rounded"
                      >
                        {term}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Secondary KPI block if exists */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="p-6 bg-[#1C1C1F]/40 border border-[#3F3F46]/30 rounded-2xl space-y-4">
                    <h4 className="font-display font-bold text-xs text-[#F5F5F4] uppercase tracking-widest">
                      Key Indicators
                    </h4>
                    <div className="grid grid-cols-1 gap-3">
                      {project.metrics.map((metric, idx) => (
                        <div key={idx} className="flex justify-between items-center border-b border-[#3F3F46]/30 pb-2.5 last:border-none last:pb-0">
                          <span className="text-[11px] text-[#A1A1AA] uppercase tracking-wide font-mono">{metric.label}</span>
                          <span className="text-xs font-semibold font-mono text-[#F1C9A5]">{metric.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Sidebar actions triggering linkages */}
                <div className="flex flex-col gap-3 pt-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-[#C48452] hover:bg-[#E2A46E] text-white font-semibold text-xs uppercase tracking-wider rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <Github size={14} />
                    Explore Repository
                  </a>
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3 border border-[#3F3F46] hover:border-[#C48452] text-[#F5F5F4] hover:bg-[#C48452]/5 font-semibold text-xs uppercase tracking-wider rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
                    >
                      <ExternalLink size={14} />
                      Launch Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
