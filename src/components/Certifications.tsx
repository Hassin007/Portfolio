import { useState, useEffect } from "react";
import { Award, ExternalLink, X, CheckCircle2, ShieldCheck, ZoomIn } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { certificationsData } from "../data/certifications";
import { Certification } from "../types";

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  // Close lightbox on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedCert(null);
    };
    if (selectedCert) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCert]);

  return (
    <section
      id="certifications"
      className="py-24 px-6 lg:px-16 xl:px-24 bg-[#0B0B0C] relative overflow-hidden border-t border-[#3F3F46]/30"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 right-[-10%] w-[500px] h-[500px] bg-[#C48452]/3 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-[#C48452] uppercase tracking-widest">
              // 03. CREDENTIALS & CERTIFICATIONS
            </span>
            <span className="h-[1px] w-12 bg-[#C48452]/30" />
          </div>
          <h2 className="font-sans font-bold text-4xl sm:text-5xl lg:text-6xl text-[#F5F5F4] tracking-tight leading-none uppercase">
            VERIFIED EXPERTISE<span className="text-[#C48452]">.</span>
          </h2>
          <p className="font-mono text-xs text-[#A1A1AA] mt-3 max-w-xl">
            Industry-recognized credentials in agentic architectures, stateful reasoning graphs, and LLM orchestration.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
          {certificationsData.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-[#141416] border border-neutral-800/80 rounded-2xl overflow-hidden hover:border-[#C48452]/50 transition-all duration-400 group hover:shadow-[0_16px_40px_rgba(196,132,82,0.08)] flex flex-col justify-between"
            >
              {/* Thumbnail Area with Click-to-Zoom */}
              <div
                onClick={() => setSelectedCert(cert)}
                className="relative aspect-[16/10] bg-[#0E0E10] border-b border-neutral-800/80 p-6 flex flex-col justify-between cursor-pointer overflow-hidden group/thumb"
              >
                {/* Visual Certificate Frame Styling */}
                <div className="absolute inset-3 border border-[#C48452]/20 rounded-xl pointer-events-none transition-colors group-hover/thumb:border-[#C48452]/40" />
                <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#C48452]/5 rounded-full blur-2xl group-hover/thumb:bg-[#C48452]/10 transition-colors" />

                {/* Top Badge & Issuer */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#18181B] border border-neutral-700 flex items-center justify-center font-bold text-xs tracking-wider text-[#F1C9A5]">
                      IBM
                    </div>
                    <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-wider">
                      {cert.issuer} Verified
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#C48452]/10 border border-[#C48452]/30 text-[10px] font-mono text-[#F1C9A5]">
                    <ShieldCheck size={11} className="text-[#C48452]" />
                    Official Credential
                  </span>
                </div>

                {/* Center Title in Thumbnail */}
                <div className="relative z-10 my-auto text-left py-4">
                  <div className="text-[10px] font-mono text-[#C48452] uppercase tracking-widest mb-1.5">
                    Professional Certificate
                  </div>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-[#F5F5F4] leading-snug group-hover/thumb:text-[#F1C9A5] transition-colors">
                    {cert.title}
                  </h3>
                </div>

                {/* Bottom Thumbnail Bar */}
                <div className="relative z-10 flex items-center justify-between pt-3 border-t border-neutral-800/60 font-mono text-[10px] text-neutral-400">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 size={12} className="text-[#C48452]" />
                    {cert.issueDate}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[#C48452] group-hover/thumb:underline">
                    <ZoomIn size={12} />
                    View Preview
                  </span>
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-[#0B0B0C]/40 opacity-0 group-hover/thumb:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <div className="px-3.5 py-1.5 rounded-full bg-[#18181B]/90 border border-[#C48452]/50 text-xs font-mono text-[#F1C9A5] flex items-center gap-1.5 shadow-xl">
                    <ZoomIn size={13} />
                    Click to Enlarge
                  </div>
                </div>
              </div>

              {/* Card Meta & Actions */}
              <div className="p-6 flex flex-col justify-between flex-1 gap-5">
                <div>
                  <div className="font-mono text-[9px] uppercase tracking-widest text-neutral-500 mb-2 font-bold">
                    // KEY COMPETENCIES
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills?.map((skill) => (
                      <span
                        key={skill}
                        className="py-0.5 px-2 bg-[#1C1C1F] border border-neutral-800 text-[10px] text-neutral-300 font-mono rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-neutral-800/60">
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="flex-1 py-2.5 px-4 bg-[#1C1C1F] hover:bg-[#252529] border border-neutral-800 hover:border-[#C48452]/40 rounded-xl text-xs font-mono text-neutral-300 hover:text-[#F5F5F4] transition-colors flex items-center justify-center gap-1.5"
                  >
                    <ZoomIn size={13} />
                    Certificate View
                  </button>

                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-4 bg-[#C48452] hover:bg-[#E2A46E] text-[#0B0B0C] font-mono text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-md"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-zoom-out"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
              className="relative w-full max-w-3xl bg-[#141416] border border-[#C48452]/40 rounded-2xl p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-neutral-800 mb-6">
                <div>
                  <span className="inline-flex items-center gap-1.5 py-0.5 px-2.5 mb-2 bg-[#C48452]/10 border border-[#C48452]/30 text-[10px] font-mono font-semibold text-[#C48452] rounded-full uppercase tracking-wider">
                    <Award size={11} /> {selectedCert.issuer} Credential
                  </span>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-[#F5F5F4] leading-snug">
                    {selectedCert.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2.5 bg-[#1C1C1F] hover:bg-[#C48452] border border-neutral-800 text-neutral-400 hover:text-[#0B0B0C] rounded-full transition-colors shrink-0"
                  aria-label="Close Lightbox"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Certificate Detailed Preview Canvas */}
              <div className="relative aspect-[16/10] w-full rounded-xl bg-[#09090A] border-2 border-[#C48452]/30 p-8 sm:p-12 flex flex-col justify-between shadow-inner overflow-hidden mb-6">
                {/* Decorative border framing */}
                <div className="absolute inset-3 border border-neutral-800 rounded-lg pointer-events-none" />
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#C48452]/5 rounded-full blur-3xl pointer-events-none" />

                {/* Certificate Watermark Header */}
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="px-3 py-1 rounded bg-[#18181B] border border-neutral-700 font-mono font-black text-sm tracking-wider text-[#F1C9A5]">
                      IBM
                    </div>
                    <div>
                      <div className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest">
                        Issued by International Business Machines
                      </div>
                      <div className="font-mono text-[9px] text-[#C48452]">Authorized Course Certificate</div>
                    </div>
                  </div>
                  <div className="hidden sm:flex items-center gap-1 text-[10px] font-mono text-[#10B981] bg-[#10B981]/10 px-2.5 py-1 rounded-full border border-[#10B981]/20">
                    <CheckCircle2 size={11} /> Verified Online
                  </div>
                </div>

                {/* Central Certificate Body */}
                <div className="my-auto text-center py-6 relative z-10">
                  <p className="font-mono text-xs text-neutral-400 uppercase tracking-wider mb-2">
                    This certifies that
                  </p>
                  <h4 className="font-display font-black text-2xl sm:text-3xl text-[#F5F5F4] tracking-tight uppercase mb-3">
                    Muhammad Hassin Saghir
                  </h4>
                  <p className="font-mono text-xs text-neutral-400 max-w-lg mx-auto mb-4">
                    has successfully completed the online credential curriculum:
                  </p>
                  <div className="inline-block px-5 py-2 rounded-xl bg-[#141416] border border-[#C48452]/30 shadow-md">
                    <p className="font-sans font-bold text-sm sm:text-base text-[#F1C9A5]">
                      {selectedCert.title}
                    </p>
                  </div>
                </div>

                {/* Bottom Signature & Verification Info */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-neutral-800/80 font-mono text-[10px] text-neutral-400 relative z-10">
                  <div>
                    <span className="text-neutral-500 uppercase tracking-wider block">Verification Status</span>
                    <span className="text-[#C48452] font-semibold">{selectedCert.issueDate}</span>
                  </div>
                  <div className="text-center sm:text-right">
                    <span className="text-neutral-500 uppercase tracking-wider block">Platform</span>
                    <span className="text-neutral-300">Coursera Verified Records</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons in Modal */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <div className="flex flex-wrap gap-1.5">
                  {selectedCert.skills?.map((skill) => (
                    <span
                      key={skill}
                      className="py-1 px-2.5 bg-[#1C1C1F] border border-neutral-800 text-[11px] text-neutral-300 font-mono rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="py-2.5 px-4 bg-[#1C1C1F] hover:bg-[#252529] border border-neutral-800 text-xs font-mono text-neutral-300 rounded-xl transition-colors w-full sm:w-auto"
                  >
                    Close
                  </button>
                  <a
                    href={selectedCert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-5 bg-[#C48452] hover:bg-[#E2A46E] text-[#0B0B0C] font-mono text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg w-full sm:w-auto"
                  >
                    <span>Open on Coursera</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
