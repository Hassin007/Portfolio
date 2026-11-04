import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface NameRevealProps {
  onComplete: () => void;
}

export default function NameReveal({ onComplete }: NameRevealProps) {
  const [step, setStep] = useState<"init" | "reveal" | "settled" | "exit">("init");

  const lines = [
    "Computer Systems Engineering Student",
    "Full-Stack Development",
    "Machine Learning",
    "Agentic AI"
  ];

  useEffect(() => {
    // 1. Initial micro-delay for clean transition from the workspace build loader
    const tInit = setTimeout(() => {
      setStep("reveal");
    }, 400);

    // 2. Name is fully revealed (duration 2.2s + 0.5s delay = 2.7s) -> transition to "settled"
    const tSettled = setTimeout(() => {
      setStep("settled");
    }, 3200);

    // 3. Keep settled state to read the description, then exit gracefully
    const tExit = setTimeout(() => {
      setStep("exit");
    }, 6200);

    // 4. Trigger the ultimate completion callback
    const tComplete = setTimeout(() => {
      onComplete();
    }, 7200);

    return () => {
      clearTimeout(tInit);
      clearTimeout(tSettled);
      clearTimeout(tExit);
      clearTimeout(tComplete);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 min-h-screen w-full bg-[#0B0B0C] text-[#F5F5F4] flex flex-col items-center justify-center z-50 overflow-hidden font-sans antialiased select-none">
      
      {/* Subtle ambient system glow in background - ultra low opacity */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C48452]/2 rounded-full blur-[120px] pointer-events-none" />

      <AnimatePresence mode="wait">
        {step !== "exit" && (
          <motion.div
            key="reveal-content"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, filter: "blur(4px)" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-4xl px-8 flex flex-col items-center text-center relative z-10"
          >
            {/* Horizontal Line tracking and construction mask container */}
            <div className="relative inline-block py-2">
              
              {/* Overlapping Absolute Sweep Line */}
              <motion.div
                initial={{ left: "0%", opacity: 0 }}
                animate={
                  step === "reveal" || step === "settled"
                    ? {
                        left: ["0%", "0%", "100%", "100%"],
                        opacity: [0, 1, 1, 0],
                      }
                    : { opacity: 0 }
                }
                transition={{
                  times: [0, 0.08, 0.92, 1],
                  duration: 2.2,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.4,
                }}
                className="absolute top-0 bottom-0 w-[1.5px] bg-gradient-to-b from-transparent via-[#C48452] to-transparent z-20 pointer-events-none"
              />

              {/* Underlying Base Layer - Super faint placeholder/shadow to construct onto */}
              <div className="font-display font-black text-5xl sm:text-7xl md:text-8xl text-neutral-900/40 tracking-tighter uppercase select-none leading-none">
                Hassin Saghir<span className="text-neutral-900/40">.</span>
              </div>

              {/* Reveal Layer with ClipPath animated identically to Sweep Line */}
              <motion.div
                initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
                animate={
                  step === "reveal" || step === "settled"
                    ? { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }
                    : { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }
                }
                transition={{
                  duration: 2.2,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.4,
                }}
                className="absolute inset-0 font-display font-black text-5xl sm:text-7xl md:text-8xl text-[#F5F5F4] tracking-tighter uppercase select-none leading-none z-10"
              >
                Hassin Saghir<span className="text-[#C48452]">.</span>

                {/* Subtle highlight sweep passing across the letters once after reveal */}
                <motion.div
                  initial={{ backgroundPosition: "-200% 0" }}
                  animate={
                    step === "settled"
                      ? { backgroundPosition: "200% 0" }
                      : { backgroundPosition: "-200% 0" }
                  }
                  transition={{
                    duration: 2.0,
                    ease: [0.25, 1, 0.5, 1],
                    delay: 0.2,
                  }}
                  className="absolute inset-0 pointer-events-none mix-blend-overlay bg-gradient-to-r from-transparent via-white/10 to-transparent bg-[length:200%_100%] z-15"
                />
              </motion.div>
            </div>

            {/* Secondary Supporting Text - Staggered lines fade */}
            <div className="mt-8 flex flex-col sm:flex-row items-center sm:justify-center gap-3 sm:gap-6 min-h-[24px]">
              {lines.map((line, index) => {
                const shouldAnimate = step === "settled";

                return (
                  <motion.div
                    key={line}
                    initial={{ opacity: 0, y: 12 }}
                    animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                    transition={{
                      duration: 0.8,
                      ease: [0.16, 1, 0.3, 1],
                      delay: 0.4 + index * 0.22,
                    }}
                    className="flex items-center gap-3 font-mono text-[10px] sm:text-xs text-neutral-500 uppercase tracking-widest"
                  >
                    {index > 0 && (
                      <span className="hidden sm:inline text-[#C48452]/40 font-light select-none">
                        //
                      </span>
                    )}
                    <span className="hover:text-[#F1C9A5] transition-colors duration-300">
                      {line}
                    </span>
                  </motion.div>
                );
              })}
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
