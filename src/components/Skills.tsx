import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "motion/react";
import { Code, Terminal, Cpu, Brain, Layers, Wrench, CheckCircle } from "lucide-react";

interface TechItemType {
  id: string;
  name: string;
  logo: React.ReactNode;
}

export const skillCategories = [
  {
    id: "languages",
    title: "Languages",
    icon: Code,
    skills: ["Python", "SQL", "NoSQL (MongoDB)", "JavaScript", "TypeScript"]
  },
  {
    id: "frameworks",
    title: "Frameworks",
    icon: Layers,
    skills: ["React", "Node.js", "Express", "NextJS", "FastAPI", "Socket.IO", "ShadCN UI", "Framer Motion"]
  },
  {
    id: "ml",
    title: "Machine Learning",
    icon: Cpu,
    skills: ["PyTorch", "TensorFlow", "scikit-learn", "LightGBM", "Optuna", "CNNs", "RNNs", "LSTMs"]
  },
  {
    id: "ai",
    title: "AI & Agents",
    icon: Brain,
    skills: ["LangChain", "LangGraph", "RAG", "Agentic AI", "Model Context Protocol (MCP)", "LLM Integration"]
  },
  {
    id: "libraries",
    title: "Libraries",
    icon: Terminal,
    skills: ["pandas", "NumPy", "Matplotlib", "GeoPandas", "Folium", "Tanstack Query", "Zustand"]
  },
  {
    id: "tools",
    title: "Developer Tools",
    icon: Wrench,
    skills: ["Git", "GitHub Actions", "Docker", "Linux (Ubuntu)", "SonarQube", "Jest", "React Testing Library", "REST APIs"]
  }
];

export default function Skills() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [spacing, setSpacing] = useState(280);

  // Responsive spacing calculations to perfectly fit mobile and widescreen displays
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSpacing(160);
      } else if (window.innerWidth < 1024) {
        setSpacing(210);
      } else {
        setSpacing(280);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Official verified vector brand marks
  const logos = {
    react: (
      <svg viewBox="-11.5 -10.2317 23 20.4634" className="w-10 h-10 select-none pointer-events-none" fill="none">
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="1.1">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
    nextjs: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 select-none pointer-events-none" fill="none">
        <circle cx="12" cy="12" r="10" fill="#000000" stroke="#3F3F46" strokeWidth="1" />
        <path d="M16 16.5L9.12 7.5H7.5v9h1.5V9.45l6.5 8.55h1V16.5z" fill="#FFFFFF" />
        <path d="M14.5 7.5h1.5v5.5h-1.5z" fill="#FFFFFF" />
      </svg>
    ),
    ts: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 select-none pointer-events-none">
        <rect x="2" y="2" width="20" height="20" rx="1.5" fill="#3178C6" />
        <path d="M10.5 7.5H6v1.5h1.5V17h1.5v-8H10.5V7.5zm3.2 4.6c.4-.2.8-.3 1.1-.3.5 0 .8.2.8.6 0 .4-.3.6-.9.9-.9.4-1.3.9-1.3 1.7H15.4c0-.4.2-.6.7-.8.9-.4 1.4-.9 1.4-1.8 0-1-.8-1.5-1.9-1.5-.5 0-1 .1-1.3.3l.2.9z" fill="#FFFFFF" />
      </svg>
    ),
    js: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 select-none pointer-events-none">
        <rect x="2" y="2" width="20" height="20" rx="1.5" fill="#F7DF1E" />
        <path d="M11 12h1.5v4c0 .8-.4 1.2-1.2 1.2-.5 0-.9-.2-1.1-.4l.6-.7c.1.1.2.2.4.2.2 0 .3-.1.3-.3v-4zm2.7 2.1c.4-.2.8-.3 1.1-.3.5 0 .8.2.8.6 0 .4-.3.6-.9.9-.9.4-1.3.9-1.3 1.7h1.4c0-.4.2-.6.7-.8.9-.4 1.4-.9 1.4-1.8 0-1-.8-1.5-1.9-1.5-.5 0-1 .1-1.3.3l.2.9z" fill="#000000" />
      </svg>
    ),
    node: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 select-none pointer-events-none" fill="none">
        <path d="M12 2L4 6.5v11L12 22l8-4.5v-11L12 2z" fill="#339933" />
        <path d="M12 2v20" stroke="#1D531D" strokeWidth="1.2" />
        <path d="M4 6.5l8 4.5 8-4.5" stroke="#1D531D" strokeWidth="1.2" />
        <path d="M12 11V22M12 11l-8-4.5M12 11l8-4.5" stroke="#F1F1F1" strokeWidth="0.5" opacity="0.4" />
      </svg>
    ),
    express: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 select-none pointer-events-none" fill="none">
        <text x="50%" y="60%" dominantBaseline="middle" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontFamily="Inter, sans-serif" fontWeight="900" letterSpacing="-0.5">ex</text>
        <circle cx="12" cy="12" r="11" stroke="#4B5563" strokeWidth="1.5" strokeDasharray="3 3" />
      </svg>
    ),
    fastapi: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 select-none pointer-events-none" fill="none">
        <rect x="2" y="2" width="20" height="20" rx="4" fill="#05998B" />
        <path d="M12 4L5 13h6l-2 7 9-10h-7l2-6z" fill="#FFFFFF" />
      </svg>
    ),
    mongodb: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 select-none pointer-events-none" fill="none">
        <path d="M12 2s-5 4-5 10c0 4 3 7 5 9 2-2 5-5 5-9 0-6-5-10-5-10z" fill="#13AA52" />
        <path d="M12 2s-3 4-3 9c0 3 2 5.5 3 7 1-1.5 3-4 3-7 0-5-3-9-3-9z" fill="#116140" />
        <path d="M12 2v20" stroke="#FFFFFF" strokeWidth="0.8" opacity="0.45" />
      </svg>
    ),
    python: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 select-none pointer-events-none">
        <path d="M12.002 2c-2.75 0-4.237 1.815-4.237 4.18H7.76c-2.71 0-4.236 1.814-4.236 4.18v3.454c0 2.366 1.526 4.18 4.236 4.18h.61c0-.1.012-.2.012-.3v-1.745c0-2.316 1.637-4.18 4.237-4.18h3.332v-1.127H12v2.254h2.181c1.234 0 2.054-.82 2.054-2.054V6.18C16.235 3.815 14.75 2 12.002 2z" fill="#3776AB" />
        <path d="M11.998 22c2.75 0 4.237-1.815 4.237-4.18h.007c2.71 0 4.236-1.814 4.236-4.18v-3.454c0-2.366-1.526-4.18-4.236-4.18h-.61c0 .1-.012.2-.012.3v1.745c0 2.316-1.637 4.18-4.237 4.18h-3.332v1.127h4.085v-2.254h-2.181c-1.234 0-2.054.82-2.054 2.054v4.636C7.765 20.185 9.25 22 11.998 22z" fill="#FFD343" />
        <circle cx="9.5" cy="5.5" r="0.75" fill="#FFF" />
        <circle cx="14.5" cy="18.5" r="0.75" fill="#FFF" />
      </svg>
    ),
    "scikit-learn": (
      <svg viewBox="0 0 24 24" className="w-10 h-10 select-none pointer-events-none" fill="none">
        <circle cx="7" cy="7" r="3.2" fill="#3499CD" />
        <circle cx="17" cy="9" r="3.7" fill="#F89939" />
        <circle cx="11" cy="17" r="4.2" fill="#3D8E42" stroke="#FFF" strokeWidth="0.5" />
        <path d="M9 9l5 2M15 11l-2 3M11 13H8" stroke="#E2E8F0" strokeWidth="1.2" opacity="0.75" />
      </svg>
    ),
    langchain: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 select-none pointer-events-none" fill="none">
        <rect x="5" y="7" width="9" height="5" rx="1.5" stroke="#00A67E" strokeWidth="2.2" fill="none" transform="rotate(-30 5 7)" />
        <rect x="11" y="11" width="9" height="5" rx="1.5" stroke="#FFA500" strokeWidth="2.2" fill="none" transform="rotate(-30 11 11)" />
      </svg>
    ),
    langgraph: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 select-none pointer-events-none" fill="none">
        <circle cx="12" cy="5" r="3.5" stroke="#FF6F00" strokeWidth="2" fill="#FFEFEA" />
        <circle cx="6" cy="17" r="3.5" stroke="#FF6F00" strokeWidth="2" fill="#FFEFEA" />
        <circle cx="18" cy="17" r="3.5" stroke="#FF6F00" strokeWidth="2" fill="#FFEFEA" />
        <line x1="9.5" y1="8" x2="6.5" y2="13.5" stroke="#FF6F00" strokeWidth="2" />
        <line x1="14.5" y1="8" x2="17.5" y2="13.5" stroke="#FF6F00" strokeWidth="2" />
        <line x1="9.5" y1="17" x2="14.5" y2="17" stroke="#FF6F00" strokeWidth="2" strokeDasharray="2 2" />
      </svg>
    ),
    docker: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 select-none pointer-events-none" fill="currentColor">
        <path d="M13.9 11h-2.1V8.9h2.1V11zm2.7 0h-2.1V8.9h2.1V11zm-5.4-2.7h-2.1v2.1h2.1V8.3zm2.7 0h-2.1v2.1h2.1V8.3zm2.7 0h-2.1v2.1h2.1V8.3zm-8.1 5.4h-2.1v2.1h2.1v-2.1zm2.7 0h-2.1v2.1h2.1v-2.1zm2.7 0h-2.1v2.1h2.1v-2.1zm2.7 0h-2.1v2.1h2.1v-2.1zm-8.1-2.7H5.5v2.1h2.1v-2.1zm8.1-5.4h-2.1v2.1h2.1V5.6zm4 5.4c-.2-.1-.5-.2-.8-.2-.3 0-.6.1-.9.2-.3.1-.5.3-.6.6-.2.4-.2.9-.2 1.3 0 1.9-1.5 3.4-3.4 3.4H3.9v.4c0 3 2.5 5.5 5.5 5.5h6.6c4.1 0 7.4-3.3 7.4-7.4v-.9c0-1.2-.5-2.3-1.4-2.9z" fill="#2496ED" />
      </svg>
    ),
    linux: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 select-none pointer-events-none">
        <path d="M12 2c2.8 0 5 3.3 5 7.5 0 2-.5 3.8-1.5 5.1s-1.8 1.9-2.5 4.3h-2c-.7-2.4-1.5-3-2.5-4.3S7 11.5 7 9.5C7 5.3 9.2 2 12 2z" fill="#1C1B1F" />
        <path d="M12 5.5c1.8 0 3.3 2.3 3.3 5.3 0 1.2-.3 2.4-.9 3.2-.6.8-1.4 1.5-2.4 1.5s-1.8-.7-2.4-1.5c-.6-.8-.9-2-.9-3.2 0-3 1.5-5.3 3.3-5.3zm-1.5 1.7a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" fill="#FFF" />
        <ellipse cx="10" cy="7.2" rx="0.5" ry="0.6" fill="#000" />
        <ellipse cx="13" cy="7.2" rx="0.5" ry="0.6" fill="#000" />
        <path d="M10.5 9c0 0 .5-1 1.5-1s1.5 1 1.5 1-1.5 1-1.5 1z" fill="#FFA500" />
        <path d="M4 14c1.5 1 3 2.5 4.5 3L6.5 18C5 17.5 4 16 4 14zm16 0c-1.5 1-3 2.5-4.5 3l2 1c1.5-.5 2.5-2 2.5-4z" fill="#FFF" />
        <path d="M9 19c-1 0-2 .5-3.5 1.5l.5.5h15l.5-.5c-1.5-1-2.5-1.5-3.5-1.5H9z" fill="#FFA500" />
      </svg>
    ),
    "github-actions": (
      <svg viewBox="0 0 24 24" className="w-10 h-10 select-none pointer-events-none" fill="none">
        <rect x="2" y="2" width="6" height="6" rx="1.5" fill="#2088FF" />
        <rect x="16" y="2" width="6" height="6" rx="1.5" fill="#2088FF" />
        <rect x="9" y="15" width="6" height="6" rx="1.5" fill="#2088FF" />
        <path d="M5 8v4a2 2 0 0 0 2 2h3m9-6v4a2 2 0 0 1-2 2h-3" stroke="#2088FF" strokeWidth="2" fill="none" />
        <path d="M12 14v1" stroke="#2088FF" strokeWidth="2" fill="none" />
      </svg>
    ),
    tanstack: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 select-none pointer-events-none" fill="none">
        <circle cx="12" cy="12" r="11" fill="#FF4154" fillOpacity="0.08" stroke="#FF4154" strokeWidth="1" />
        <path d="M7 12c0-2.8 2.2-5 5-5s5 2.2 5 5-2.2 5-5 5c-1.2 0-2-.5-2.5-1s-.8-1.5-.8-2c0-1.2 1-2.2 2.2-2.2s2.2 1 2.2 2.2c0 .5-.3 1-.3 1.2" stroke="#FF4154" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="10" cy="10" r="1" fill="#FF4154" />
        <circle cx="14" cy="10" r="1" fill="#FF4154" />
      </svg>
    ),
    zustand: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 select-none pointer-events-none" fill="none">
        <circle cx="12" cy="12" r="11" stroke="#854C30" strokeWidth="1.5" fill="#18181B" />
        <path d="M7 10c0-1.5 1-2.5 2.5-2.5h5c1.5 0 2.5 1 2.5 2.5v4c0 1.5-1 2.5-2.5 2.5h-5C8 15.5 7 14.5 7 13v-3z" fill="#CBB295" />
        <ellipse cx="12" cy="11.5" rx="3" ry="2" fill="#854C30" />
        <circle cx="10.5" cy="11" r="0.8" fill="#FFF" />
        <circle cx="13.5" cy="11" r="0.8" fill="#FFF" />
        <path d="M11 13s.5.5 1 .5 1-.5 1-.5" stroke="#4A2F22" strokeWidth="1" />
      </svg>
    ),
    fastmcp: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 select-none pointer-events-none" fill="none">
        <rect x="2" y="2" width="20" height="20" rx="4" fill="#18181B" stroke="#C48452" strokeWidth="1" />
        <path d="M6 8l4 4-4 4M11 16h7" stroke="#C48452" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="16" cy="10" r="1.5" fill="#E2A46E" />
      </svg>
    ),
    postgresql: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 select-none pointer-events-none" fill="none" stroke="none">
        <path d="M12.15 2.01c-1.12.03-2.22.42-3.13 1.13C8.61 3.46 8 4.21 7.59 5.06c-.41.86-.6 1.79-.58 2.74c.03.68.14 1.35.34 2-.51.15-1 .39-1.42.72c-.7.54-1.21 1.28-1.46 2.12c-.2.66-.23 1.35-.14 2.03c.12.87.5 1.68 1.1 2.31c.64.67 1.5 1.11 2.45 1.25l.04-.37c-.77-.11-1.47-.47-1.98-1.02c-.51-.54-.83-1.23-.93-1.97-.08-.55-.05-1.1.11-1.63c.2-.67.61-1.26 1.17-1.69c.35-.28.76-.48 1.2-.59c.28.38.61.72.97.99l.23-.29c-.31-.23-.59-.51-.83-.83c.7-.35 1.48-.54 2.27-.58l.02-.38c-.68.04-1.35.2-1.96.5c-.17-.4-.3-.82-.37-1.24a4.42 4.42 0 0 1-.09-1.27c0-.82.16-1.63.5-2.37c.33-.74.83-1.39 1.46-1.89c.81-.63 1.8-.97 2.81-1c1.24-.04 2.48.33 3.49 1.05C16.81 5.37 17.5 6.42 17.84 7.6c.33 1.17.3 2.41-.1 3.56c-.4 1.15-1.17 2.14-2.18 2.82c-.85.57-1.85.89-2.88.94l-.02.38c1.13-.06 2.23-.41 3.16-1.04c1.1-.75 1.94-1.83 2.37-3.09c.43-1.26.46-2.61.1-3.89c-.37-1.29-1.12-2.44-2.18-3.22c-1.1-.8-2.45-1.2-3.8-1.15H12.15zM11.96 11.23c-.7-.14-1.37.04-1.94.49c-.58.46-.96 1.13-1.07 1.87c-.08.52-.02 1.05.18 1.54c.24.58.64 1.07 1.16 1.4.54.34 1.18.5 1.82.46.72-.05 1.4-.33 1.94-.81l-.24-.29c-.47.41-1.06.65-1.68.7c-.55.04-1.1-.1-1.56-.4s-.79-.74-.99-1.25a2.76 2.76 0 0 1-.16-1.32c.09-.64.42-1.22.92-1.62c.49-.39 1.08-.55 1.69-.43l.08-.37h-.15zm1.53.51c-.69.21-1.28.66-1.67 1.28c-.39.62-.55 1.35-.45 2.07c.07.51.25 1 .53 1.43c.33.5.78.89 1.32 1.12c.56.24 1.18.3 1.79.18s1.17-.43 1.59-.87l-.27-.26c-.36.38-.85.64-1.38.74s-1.08.05-1.56-.16c-.46-.2-.84-.53-1.12-.96c-.24-.37-.39-.79-.45-1.23c-.09-.62.05-1.24.39-1.77c.34-.53.84-.91 1.42-1.09l-.14-.49z" fill="#336791" />
      </svg>
    ),
    pytorch: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 select-none pointer-events-none" fill="none">
        <path d="M12 2a9 9 0 0 0-6.36 15.36L7.05 16A7 7 0 1 1 12 19v2a9 9 0 0 0 0-18zm2 4.5l-1.5 1.5-1.5-1.5L12 5l2 1.5z" fill="#EE4C2C" />
      </svg>
    ),
    tensorflow: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 select-none pointer-events-none" fill="none">
        <path d="M12 2l9 5.2v10.4l-3 1.7v-9.5L12 6.5 6 9.8v9.5L3 17.6V7.2L12 2z" fill="#FF6F00" />
        <path d="M12 8l4.5 2.6v5.2L12 18.4l-4.5-2.6v-5.2L12 8z" fill="#FFA500" />
      </svg>
    )
  };

  const technologies: TechItemType[] = [
    { id: "python", name: "Python", logo: logos.python },
    { id: "ts", name: "TypeScript", logo: logos.ts },
    { id: "js", name: "JavaScript", logo: logos.js },
    { id: "react", name: "React", logo: logos.react },
    { id: "nextjs", name: "Next.js", logo: logos.nextjs },
    { id: "node", name: "Node.js", logo: logos.node },
    { id: "express", name: "Express", logo: logos.express },
    { id: "fastapi", name: "FastAPI", logo: logos.fastapi },
    { id: "mongodb", name: "MongoDB", logo: logos.mongodb },
    { id: "postgresql", name: "SQL & DBs", logo: logos.postgresql },
    { id: "pytorch", name: "PyTorch", logo: logos.pytorch },
    { id: "tensorflow", name: "TensorFlow", logo: logos.tensorflow },
    { id: "scikit-learn", name: "Scikit-Learn", logo: logos["scikit-learn"] },
    { id: "langchain", name: "LangChain", logo: logos.langchain },
    { id: "langgraph", name: "LangGraph", logo: logos.langgraph },
    { id: "fastmcp", name: "Model Context Protocol", logo: logos.fastmcp },
    { id: "docker", name: "Docker", logo: logos.docker },
    { id: "linux", name: "Linux (Ubuntu)", logo: logos.linux },
    { id: "github-actions", name: "GitHub Actions", logo: logos["github-actions"] },
    { id: "tanstack", name: "TanStack Query", logo: logos.tanstack },
    { id: "zustand", name: "Zustand", logo: logos.zustand }
  ];

  // Diagonal translation spacing ratios
  const spacingX = spacing;
  const spacingY = Math.round(spacing * 0.72);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const maxIndex = technologies.length - 1;

  const targetX = useTransform(scrollYProgress, [0, 1], [0, -maxIndex * spacingX]);
  const targetY = useTransform(scrollYProgress, [0, 1], [0, -maxIndex * spacingY]);

  const smoothX = useSpring(targetX, { stiffness: 45, damping: 20, mass: 0.8 });
  const smoothY = useSpring(targetY, { stiffness: 45, damping: 20, mass: 0.8 });

  const points = technologies.map((_, i) => ({
    x: i * spacingX,
    y: i * spacingY
  }));

  let pathD = "";
  if (points.length > 0) {
    pathD = `M ${points[0].x} ${points[0].y}`;
    for (let i = 0; i < points.length - 1; i++) {
      const p0 = points[i];
      const p1 = points[i + 1];
      const offsetDir = i % 2 === 0 ? 1 : -1;
      const amp = spacingX * 0.16 * offsetDir;
      const nx = -0.58 * amp;
      const ny = 0.81 * amp;

      const cp1x = p0.x + (p1.x - p0.x) * 0.28 + nx;
      const cp1y = p0.y + (p1.y - p0.y) * 0.28 + ny;
      const cp2x = p0.x + (p1.x - p0.x) * 0.72 - nx;
      const cp2y = p0.y + (p1.y - p0.y) * 0.72 - ny;

      pathD += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p1.x} ${p1.y}`;
    }
  }

  return (
    <section id="skills" className="bg-[#070708] border-t border-[#3F3F46]/30">
      {/* 1. Kinetic Scroll Viewport */}
      <div ref={containerRef} className="relative h-[360vh]">
        <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden z-20 md:py-12 py-8">
          
          {/* Technical blueprint grid background */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.015] select-none z-0">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="skills-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                  <circle cx="1" cy="1" r="1" fill="#FFFFFF" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#skills-grid)" />
            </svg>
          </div>

          {/* Section Header */}
          <div className="text-center relative z-10 flex flex-col items-center px-6 mt-4 select-none">
            <div className="flex items-center gap-2 mb-2.5 font-mono text-xs text-neutral-500 uppercase tracking-widest">
              <span>// 05. TECHNICAL SKILLS & STACK</span>
            </div>
            <h2 className="font-sans font-extrabold text-3xl sm:text-5xl text-[#F5F5F4] tracking-tight leading-none uppercase">
              ENGINEERING TOOLKIT<span className="text-[#C48452]">.</span>
            </h2>
            <p className="font-mono text-[9px] text-neutral-500 uppercase tracking-[0.25em] mt-3">
              Kinetic timeline of tools, languages, and frameworks
            </p>
          </div>

          {/* Diagonal Canvas Wrapper */}
          <div className="relative flex-1 w-full flex items-center justify-center">
            <div className="absolute inset-0 bg-radial-[circle_at_center,transparent_40%,#070708_95%] z-10 pointer-events-none" />

            <motion.div
              style={{ x: smoothX, y: smoothY }}
              className="absolute flex items-center justify-center w-0 h-0"
            >
              <svg className="absolute overflow-visible pointer-events-none select-none z-0" style={{ left: 0, top: 0 }}>
                <motion.path
                  d={pathD}
                  fill="none"
                  stroke="url(#amber-neutral-gradient)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  opacity="0.09"
                />
                <defs>
                  <linearGradient id="amber-neutral-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#C48452" />
                    <stop offset="50%" stopColor="#81502C" />
                    <stop offset="100%" stopColor="#C48452" />
                  </linearGradient>
                </defs>
              </svg>

              {technologies.map((tech, index) => (
                <TechItem
                  key={tech.id}
                  tech={tech}
                  index={index}
                  spacingX={spacingX}
                  spacingY={spacingY}
                  smoothX={smoothX}
                />
              ))}
            </motion.div>
          </div>

        </div>
      </div>

      {/* 2. Structured Categorized Skills Matrix from cv.md */}
      <div className="py-24 px-6 lg:px-16 xl:px-24 bg-[#0B0B0C] border-t border-neutral-900 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <span className="font-mono text-xs text-[#C48452] uppercase tracking-widest block mb-2 font-bold">
              // COMPLETE TECHNICAL BREAKDOWN
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-[#F5F5F4] uppercase tracking-tight">
              Skill Categories & Proficiencies
            </h3>
            <p className="font-mono text-xs text-neutral-400 mt-2 max-w-xl">
              Accredited engineering capabilities directly structured from resume specifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((cat, idx) => {
              const IconComp = cat.icon;
              return (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-[#141416] border border-neutral-800/80 rounded-2xl p-6 sm:p-7 hover:border-[#C48452]/40 transition-all duration-300 flex flex-col justify-between group hover:shadow-[0_12px_35px_rgba(196,132,82,0.06)]"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="p-2.5 rounded-xl bg-[#1C1C1F] border border-neutral-800 text-[#C48452] group-hover:border-[#C48452]/40 transition-colors">
                        <IconComp size={18} />
                      </div>
                      <span className="font-mono text-[9px] text-neutral-600 group-hover:text-[#C48452]/70 uppercase font-bold tracking-widest">
                        CAT // 0{idx + 1}
                      </span>
                    </div>

                    <h4 className="font-display font-bold text-lg text-[#F5F5F4] mb-4 group-hover:text-[#F1C9A5] transition-colors">
                      {cat.title}
                    </h4>

                    <div className="flex flex-wrap gap-1.5">
                      {cat.skills.map((skill) => (
                        <span
                          key={skill}
                          className="py-1 px-2.5 bg-[#0D0D0F] border border-neutral-800 text-neutral-300 text-xs font-mono rounded hover:border-[#C48452]/30 hover:text-white transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-900 flex items-center justify-between font-mono text-[10px] text-neutral-500">
                    <span>{cat.skills.length} competencies</span>
                    <CheckCircle size={12} className="text-[#C48452]/70" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

interface TechItemProps {
  key?: React.Key;
  tech: TechItemType;
  index: number;
  spacingX: number;
  spacingY: number;
  smoothX: MotionValue<number>;
}

function TechItem({ tech, index, spacingX, spacingY, smoothX }: TechItemProps) {
  const itemPosX = index * spacingX;
  const relativeX = useTransform(smoothX, (currentX) => currentX + itemPosX);

  const scale = useTransform(
    relativeX,
    [-spacingX * 3, -spacingX * 1.5, -spacingX, 0, spacingX, spacingX * 1.5, spacingX * 3],
    [0.55, 0.65, 0.85, 1.35, 0.85, 0.65, 0.55],
    { clamp: true }
  );

  const opacity = useTransform(
    relativeX,
    [-spacingX * 3, -spacingX * 1.5, -spacingX, 0, spacingX, spacingX * 1.5, spacingX * 3],
    [0.0, 0.05, 0.3, 1.0, 0.3, 0.05, 0.0],
    { clamp: true }
  );

  return (
    <motion.div
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        x: index * spacingX,
        y: index * spacingY,
        scale,
        opacity,
        transformOrigin: "center center",
      }}
      className="flex flex-col items-center justify-center select-none -translate-x-1/2 -translate-y-1/2"
    >
      <motion.div
        whileHover={{
          scale: 1.12,
          transition: { type: "spring", stiffness: 400, damping: 20 }
        }}
        className="flex flex-col items-center justify-center gap-4 group cursor-pointer"
      >
        <div className="md:p-6 p-4.5 rounded-2xl bg-[#0B0B0C] border border-neutral-900 group-hover:border-[#C48452]/45 transition-all duration-300 group-hover:shadow-[0_0_25px_rgba(196,132,82,0.16)] flex items-center justify-center md:w-20 md:h-20 w-16 h-16 relative overflow-hidden ring-1 ring-neutral-950">
          <div className="absolute inset-0 bg-gradient-to-br from-[#C48452]/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          <div className="group-hover:scale-105 transition-transform duration-300 flex items-center justify-center z-10">
            {tech.logo}
          </div>
        </div>

        <span className="font-mono text-[8px] sm:text-[10px] font-semibold tracking-widest text-neutral-400 group-hover:text-[#F5F5F4] transition-colors duration-300 uppercase whitespace-nowrap">
          {tech.name}
        </span>
      </motion.div>
    </motion.div>
  );
}
