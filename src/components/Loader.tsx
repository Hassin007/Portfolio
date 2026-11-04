import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, Settings, FileCode, Check, Terminal, Cpu } from "lucide-react";

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [phase, setPhase] = useState<1 | 2 | 3 | 4>(1);
  const [progress, setProgress] = useState(0);
  const [activeLogIndex, setActiveLogIndex] = useState(0);
  const [codeLinesVisible, setCodeLinesVisible] = useState(0);
  const [typedCode, setTypedCode] = useState<string[]>(["", "", "", "", ""]);
  const [statusMessageVisible, setStatusMessageVisible] = useState(false);

  const logs = [
    "extracting latent patterns ......... [ok]",
    "orchestrating agent workflows ...... [ok]",
    "compiling inference pipelines ...... [ok]",
    "synchronizing system contexts ....... [ok]",
    "deploying intelligent execution ..... [ok]"
  ];

  const codeSnippets = [
    "const agent = new Agent();",
    "const model = train(dataset);",
    "await agent.reason(context);",
    "const prediction = model.predict(input);",
    "execute(prediction);"
  ];

  // Progress and Log Simulation for Phase 1
  useEffect(() => {
    if (phase !== 1) return;

    // Fast progress updates
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        // Slightly random increments for realistic feeling
        const increment = Math.floor(Math.random() * 3) + 2;
        return Math.min(prev + increment, 100);
      });
    }, 60);

    // Logs typing or printing step by step
    const logInterval = setInterval(() => {
      setActiveLogIndex((prev) => {
        if (prev < logs.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 550);

    return () => {
      clearInterval(progressInterval);
      clearInterval(logInterval);
    };
  }, [phase]);

  // Handle phase transitions
  useEffect(() => {
    if (progress === 100) {
      // Allow a brief moment of seeing 100% completed
      const t = setTimeout(() => {
        setPhase(2);
      }, 700);
      return () => clearTimeout(t);
    }
  }, [progress]);

  // Phase 2 to Phase 3 transition
  useEffect(() => {
    if (phase === 2) {
      const t = setTimeout(() => {
        setPhase(3);
      }, 1000); // VS Code fades in, then typeout begins
      return () => clearTimeout(t);
    }
  }, [phase]);

  // Code Typing Simulation for Phase 3
  useEffect(() => {
    if (phase !== 3) return;

    let currentLine = 0;
    let currentChar = 0;
    let text = codeSnippets[currentLine];

    const typeInterval = setInterval(() => {
      if (currentLine >= codeSnippets.length) {
        clearInterval(typeInterval);
        // Fade in status message
        setTimeout(() => {
          setStatusMessageVisible(true);
          setPhase(4);
        }, 800);
        return;
      }

      if (currentChar < text.length) {
        setTypedCode((prev) => {
          const updated = [...prev];
          updated[currentLine] = text.substring(0, currentChar + 1);
          return updated;
        });
        currentChar++;
      } else {
        // Line finish, advance
        currentLine++;
        if (currentLine < codeSnippets.length) {
          currentChar = 0;
          text = codeSnippets[currentLine];
          setCodeLinesVisible(currentLine);
        }
      }
    }, 55); // high typing precision speed

    return () => clearInterval(typeInterval);
  }, [phase]);

  // Final dissolve completion
  useEffect(() => {
    if (phase === 4) {
      const completionTimer = setTimeout(() => {
        onComplete();
      }, 2100); // show systemic ready state and dissolve
      return () => clearTimeout(completionTimer);
    }
  }, [phase, onComplete]);

  return (
    <div id="loader-container" className="fixed inset-0 min-h-screen w-full bg-[#0B0B0C] text-[#F5F5F4] flex flex-col items-center justify-center z-50 overflow-hidden font-mono antialiased">
      
      <AnimatePresence mode="wait">
        
        {/* PHASE 1: SYSTEM INITIALIZATION */}
        {phase === 1 && (
          <motion.div
            key="phase1"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full max-w-xl px-8 flex flex-col text-left"
          >
            {/* Header Identity Status Indicator */}
            <div className="flex items-center gap-2 mb-10 text-neutral-500 text-xs tracking-wider select-none uppercase">
              <span>SYSTEM INITIALIZATION</span>
            </div>

            {/* Technical logs printout */}
            <div className="space-y-4 mb-10 h-44 flex flex-col justify-end">
              {logs.slice(0, activeLogIndex + 1).map((log, idx) => {
                const parts = log.split("[ok]");
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="flex justify-between items-center text-xs md:text-sm text-neutral-400 group"
                  >
                    <span>{parts[0]}</span>
                    <span className="text-[#C48452] font-semibold tracking-widest">[ok]</span>
                  </motion.div>
                );
              })}
            </div>

            {/* Subtle bottom progress bar */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-[10px] text-neutral-500 uppercase tracking-widest font-mono">
                <span>Synchronizing Workspaces</span>
                <span className="text-[#C48452] font-bold">{progress}%</span>
              </div>
              <div className="h-[2px] w-full bg-neutral-900 overflow-hidden rounded">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#C48452] to-[#E2A46E]"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "easeInOut" }}
                />
              </div>
            </div>
          </motion.div>
        )}

        {/* PHASE 2 & 3: AUTHENTIC VS CODE WORKSPACE ACTIVATION & CODE STREAM */}
        {(phase === 2 || phase === 3 || phase === 4) && (
          <motion.div
            key="workspace"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05, filter: "blur(8px)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="w-full max-w-2xl px-6 md:px-0"
          >
            {/* Elegant VS Code / Codespaces window frame */}
            <div className="w-full border border-neutral-800/80 rounded-lg overflow-hidden bg-[#0D0D0E] shadow-[0_12px_40px_rgba(0,0,0,0.6)] flex flex-col">
              
              {/* Window Header */}
              <div className="h-11 bg-[#0A0A0B] border-b border-neutral-900 px-4 flex items-center justify-between select-none">
                {/* Mac window dots */}
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-neutral-800" />
                  <div className="w-3 h-3 rounded-full bg-neutral-800" />
                  <div className="w-3 h-3 rounded-full bg-neutral-800" />
                </div>
                
                {/* Middle workspace label */}
                <span className="text-[10px] text-neutral-500 tracking-widest uppercase flex items-center gap-2">
                  <Play size={10} className="text-[#C48452]" />
                  main.ts — agent-runtime
                </span>

                {/* Right Settings controls */}
                <div className="flex items-center gap-3 text-neutral-600">
                  <span className="text-[9px] tracking-widest font-bold uppercase text-[#C48452]/80 bg-[#C48452]/5 px-1.5 py-0.5 rounded border border-[#C48452]/20">
                    node.js
                  </span>
                  <Settings size={13} className="hover:text-neutral-400 cursor-pointer" />
                </div>
              </div>

              {/* Window Layout (Explorer side gutter + Code active stage) */}
              <div className="flex min-h-[220px]">
                
                 {/* Workspace Files sidebar mock prefix */}
                 <div className="w-10 bg-[#0A0A0B] border-r border-neutral-900 py-3 flex flex-col items-center gap-4 text-neutral-600 select-none">
                   <FileCode size={16} className="text-[#C48452] pointer-events-none" />
                   <Terminal size={15} className="pointer-events-none" />
                 </div>

                 {/* Code Workspace Editor Area */}
                 <div className="flex-1 p-6 relative bg-[#0D0D0E] flex flex-col justify-between">
                   
                   {/* Typed out actual instructions code block */}
                   <div className="space-y-2">
                     {typedCode.map((line, idx) => (
                       <div
                         key={idx}
                         className="flex items-start text-xs md:text-sm font-mono tracking-tight"
                         style={{ opacity: idx <= codeLinesVisible ? 1 : 0.3 }}
                       >
                         {/* Code Line numeric indicators */}
                         <span className="w-6 text-neutral-700 select-none text-right pr-3.5 text-[11px]">
                           {idx + 1}
                         </span>
                         
                         {/* Premium customized syntax highlighter tokenization layout */}
                         <span className="text-left font-medium">
                           {line.startsWith("const ") ? (
                             <>
                               <span className="text-[#C48452]">const</span>{" "}
                               <span className="text-[#E2A46E]">{line.substring(6, line.indexOf(" =") > -1 ? line.indexOf(" =") : line.length)}</span>
                               {line.indexOf(" =") > -1 && (
                                 <>
                                   <span> = </span>
                                   <span className="text-neutral-100">{line.substring(line.indexOf(" =") + 3)}</span>
                                 </>
                               )}
                             </>
                           ) : line.startsWith("await ") ? (
                             <>
                               <span className="text-[#C48452]">await</span>{" "}
                               <span className="text-[#F5F5F4]">{line.substring(6)}</span>
                             </>
                           ) : (
                             line
                           )}

                           {/* Caret Cursor for active typing line */}
                           {idx === codeLinesVisible && phase === 3 && (
                             <span className="inline-block w-[6px] h-[13px] bg-[#C48452] ml-1 animate-ping" />
                           )}
                         </span>
                       </div>
                     ))}
                   </div>

                   {/* Subtle visual workspace state background placeholder */}
                   <div className="absolute top-4 right-5 opacity-[0.03] select-none pointer-events-none">
                     <svg width="120" height="120" viewBox="0 0 100 100" fill="currentColor">
                       <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" fill="none" />
                       <polygon points="50,15 80,75 20,75" stroke="currentColor" strokeWidth="2" fill="none" />
                     </svg>
                   </div>

                 </div>

              </div>
              
              {/* Workspace Terminal Status Footplate */}
              <div className="h-8 bg-[#0A0A0B] border-t border-neutral-900 px-4 flex items-center justify-between text-[9px] text-neutral-500 font-mono select-none">
                <span>workspace: active</span>
                <span>LF  UTF-8  Typescript</span>
              </div>

            </div>

            {/* Seamless Status message fade element */}
            <div className="h-10 mt-6 flex justify-center items-center">
              <AnimatePresence>
                {statusMessageVisible && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 text-[#C48452] font-mono text-xs uppercase tracking-[0.2em] font-semibold"
                  >
                    <Check size={14} className="stroke-[3]" />
                    <span>Workspace Initialized</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </motion.div>
        )}

      </AnimatePresence>

    </div>
  );
}
