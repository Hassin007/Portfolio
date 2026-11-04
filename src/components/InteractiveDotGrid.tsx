import { useEffect, useRef } from "react";

export default function InteractiveDotGrid() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    // Grid spacing & design constants
    const GRID_SPACING = 54;
    const DOT_RADIUS = 1.35; // Slightly larger for crisp and legible definition
    const ATTRACTION_RADIUS = 220; // Gently wider magnetic interaction
    
    // Physics coefficients for premium spring motion
    const springStrength = 0.09;
    const friction = 0.86;
    const attractionForce = 0.48; // Max displacement multiplier towards mouse

    // Interactive mouse tracking state
    const mouse = {
      x: -1000,
      y: -1000,
      isHovered: false,
    };

    interface Dot {
      x: number;
      y: number;
      origX: number;
      origY: number;
      vx: number;
      vy: number;
      opacity: number;
    }

    let dots: Dot[] = [];

    // Initialize/Re-initialize the dot grid layout
    const initGrid = (w: number, h: number) => {
      dots = [];
      const cols = Math.ceil(w / GRID_SPACING) + 1;
      const rows = Math.ceil(h / GRID_SPACING) + 1;

      // Center the grid elements aesthetically
      const offsetX = (w - (cols - 1) * GRID_SPACING) / 2;
      const offsetY = (h - (rows - 1) * GRID_SPACING) / 2;

      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          const origX = offsetX + c * GRID_SPACING;
          const origY = offsetY + r * GRID_SPACING;

          // Higher base opacity so the net grid is crisper and lighter as requested
          const opacity = 0.28 + Math.random() * 0.08;

          dots.push({
            x: origX,
            y: origY,
            origX,
            origY,
            vx: 0,
            vy: 0,
            opacity,
          });
        }
      }
    };

    // Keep Canvas sized correctly across responsive viewports
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width || canvas.offsetWidth || window.innerWidth;
      height = rect.height || canvas.offsetHeight || window.innerHeight;

      // Fail-safe check
      if (width === 0) width = 800;
      if (height === 0) height = 600;

      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      
      // Reset transform before scaling to prevent compounded scales
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      initGrid(width, height);
    };

    // Attach premium, non-blocking viewport resize tracking
    resize();
    window.addEventListener("resize", resize);

    // Highly reliable ResizeObserver on parent directory/element to track container layout settlements
    let resizeObserver: ResizeObserver | null = null;
    const parentSection = canvas.parentElement;
    if (parentSection) {
      resizeObserver = new ResizeObserver(() => {
        resize();
      });
      resizeObserver.observe(parentSection);
    }

    // Mouse Tracking Event Handlers
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.isHovered = true;
    };

    const handleMouseEnter = () => {
      mouse.isHovered = true;
    };

    const handleMouseLeave = () => {
      mouse.isHovered = false;
      mouse.x = -1000;
      mouse.y = -1000;
    };

    if (parentSection) {
      parentSection.addEventListener("mousemove", handleMouseMove, { passive: true });
      parentSection.addEventListener("mouseenter", handleMouseEnter, { passive: true });
      parentSection.addEventListener("mouseleave", handleMouseLeave, { passive: true });
    }

    // High performance animation frame
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Loop over dots to apply vectors and physics math
      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];
        let targetX = dot.origX;
        let targetY = dot.origY;
        let closeness = 0;

        // Perform magnetic tracking if mouse is inside
        if (mouse.isHovered) {
          const dx = mouse.x - dot.origX;
          const dy = mouse.y - dot.origY;
          const distSq = dx * dx + dy * dy;

          if (distSq < ATTRACTION_RADIUS * ATTRACTION_RADIUS) {
            const dist = Math.sqrt(distSq);
            // Non-linear falloff for exponential smoothness
            const force = Math.pow(1 - dist / ATTRACTION_RADIUS, 1.5);
            closeness = force;
            
            // Set the magnetic target
            targetX = dot.origX + dx * force * attractionForce;
            targetY = dot.origY + dy * force * attractionForce;
          }
        }

        // Spring feedback loop acceleration calculation
        const ax = (targetX - dot.x) * springStrength;
        const ay = (targetY - dot.y) * springStrength;

        // Hooke's Law integration with friction dampening
        dot.vx = (dot.vx + ax) * friction;
        dot.vy = (dot.vy + ay) * friction;

        dot.x += dot.vx;
        dot.y += dot.vy;

        // Visual opacity vignette near boundaries of the container
        // This stops grid borders from ending abruptly and feels polished.
        const marginX = width * 0.12;
        const marginY = height * 0.12;
        let boundaryAlpha = 1.0;

        if (dot.x < marginX) {
          boundaryAlpha *= dot.x / marginX;
        } else if (dot.x > width - marginX) {
          boundaryAlpha *= (width - dot.x) / marginX;
        }

        if (dot.y < marginY) {
          boundaryAlpha *= dot.y / marginY;
        } else if (dot.y > height - marginY) {
          boundaryAlpha *= (height - dot.y) / marginY;
        }

        // Draw razor-sharp circle points with dynamic hover scale
        ctx.beginPath();
        const renderingRadius = DOT_RADIUS + closeness * 1.6;
        ctx.arc(dot.x, dot.y, renderingRadius, 0, Math.PI * 2);
        
        // Final pixel rendering state
        const adjustedOpacity = Math.min(1.0, dot.opacity + closeness * 0.7);
        const finalAlpha = Math.max(0.01, adjustedOpacity * boundaryAlpha);
        
        if (closeness > 0.05) {
          // Glow effect for dots following the cursor
          ctx.shadowBlur = closeness * 16;
          ctx.shadowColor = `rgba(196, 132, 82, ${closeness * 0.95})`; // elegant golden copper glow
          ctx.fillStyle = `rgba(255, 235, 218, ${finalAlpha})`; // brighter warm white/cream color
        } else {
          // Standard dots without shadowBlur for maximum performance
          ctx.shadowBlur = 0;
          ctx.fillStyle = `rgba(255, 255, 255, ${finalAlpha})`; // beautiful and lighter neutral pure white base
        }
        
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Clear event listeners and frame locks on unmounting
    return () => {
      window.removeEventListener("resize", resize);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
      if (parentSection) {
        parentSection.removeEventListener("mousemove", handleMouseMove);
        parentSection.removeEventListener("mouseenter", handleMouseEnter);
        parentSection.removeEventListener("mouseleave", handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      id="interactive-canvas-dot-grid"
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none select-none z-0"
    />
  );
}
