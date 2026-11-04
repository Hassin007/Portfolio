import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  activeSection: string;
}

const navLinks = [
  { name: "Home", id: "hero" },
  { name: "About", id: "about" },
  { name: "Experience", id: "experience" },
  { name: "Academic", id: "academic-foundations" },
  { name: "Projects", id: "projects" },
  { name: "Skills", id: "skills" },
  { name: "Contact", id: "contact" },
];

export default function Navbar({ activeSection }: NavbarProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      // Snapping perfectly with no horizontal top navbar obstruction
      const offset = 40; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Find the index of the active section to determine which dots have been visited
  const activeIndex = navLinks.findIndex((link) => link.id === activeSection);
  const resolvedActiveIndex = activeIndex === -1 ? 0 : activeIndex;

  return (
    <>
      {/* ========================================================================= */}
      {/* 1. DESKTOP FLOATING BRANDING & CTA (md and up)                             */}
      {/* ========================================================================= */}
      <div className="hidden md:block">
        {/* Floating Brand Logo - Top-Left */}
        <div className="fixed top-8 left-8 lg:left-12 z-50">
          <a
            href="#hero"
            onClick={(e) => handleSmoothScroll(e, "hero")}
            className="flex items-center gap-2.5 text-2xl font-display font-medium text-[#F5F5F4] tracking-tight group hover:opacity-90 transition-opacity"
          >
            {/* Elegant Golden brand shape */}
            <svg
              className="w-7 h-7 text-[#C48452] transition-transform duration-300 transform group-hover:scale-105"
              viewBox="0 0 100 100"
              fill="currentColor"
            >
              <path d="M25 15 C 25 10, 75 10, 75 35 C 75 60, 25 75, 25 85 C 50 85, 75 85, 75 85 L 75 65 C 75 65, 45 65, 45 45 C 45 25, 75 25, 25 25 Z" />
              <circle cx="50" cy="50" r="10" className="text-[#0B0B0C] fill-current" />
            </svg>
            <span className="font-extrabold uppercase text-lg tracking-wider text-[#F5F5F4] relative">
              Hassin<span className="text-[#C48452]">.</span>
            </span>
          </a>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* 2. MOBILE FLOATING GLASS CAPSULE (below md)                                */}
      {/* ========================================================================= */}
      <div className="md:hidden fixed top-4 left-4 right-4 z-50">
        <div 
          className={`h-14 rounded-full border border-[#3F3F46]/30 px-5 flex items-center justify-between transition-all duration-300 ${
            isScrolled 
              ? "bg-[#0B0B0C]/85 backdrop-blur-md shadow-2xl scale-[0.98]" 
              : "bg-[#0B0B0C]/40 backdrop-blur-sm shadow-lg"
          }`}
        >
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleSmoothScroll(e, "hero")}
            className="flex items-center gap-2 text-lg font-display font-bold text-[#F5F5F4] tracking-tight"
          >
            <svg
              className="w-5 h-5 text-[#C48452]"
              viewBox="0 0 100 100"
              fill="currentColor"
            >
              <path d="M25 15 C 25 10, 75 10, 75 35 C 75 60, 25 75, 25 85 C 50 85, 75 85, 75 85 L 75 65 C 75 65, 45 65, 45 45 C 45 25, 75 25, 25 25 Z" />
            </svg>
            <span>Hassin<span className="text-[#C48452]">.</span></span>
          </a>

          {/* Hamburger trigger */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="p-1.5 rounded-full hover:bg-white/5 text-[#F5F5F4]"
            aria-label="Open Mobile Menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. VERTICAL SECTION RAIL - FIXED ON THE LEFT (md and up)                 */}
      {/* ========================================================================= */}
      <div 
        id="vertical-navigation-rail-container"
        className="hidden md:flex fixed left-0 top-1/2 -translate-y-1/2 z-50 h-[70vh] w-32 flex-col items-center justify-center group/rail cursor-default"
      >
        <div className="flex flex-col items-center select-none opacity-0 pointer-events-none group-hover/rail:opacity-100 group-hover/rail:pointer-events-auto transition-all duration-300 pl-8">
          {navLinks.map((link, idx) => {
            const currentLinkIndex = idx;
            // Visited logic: Solid dot '•' if <= activeIndex, hollow circle '○' if upcoming
            const isVisitedState = currentLinkIndex <= resolvedActiveIndex;
            const isActive = activeSection === link.id;
            const isLast = idx === navLinks.length - 1;
            const isExpanded = isActive || hoveredId === link.id;

            return (
              <React.Fragment key={link.id}>
                {/* Node Item */}
                <div 
                  className="relative flex flex-col items-center"
                  onMouseEnter={() => setHoveredId(link.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleSmoothScroll(e, link.id)}
                    className="flex items-center cursor-pointer py-1 group"
                  >
                    {/* Circle Bullet representation */}
                    <div className="w-8 h-8 flex items-center justify-center relative">
                      {isVisitedState ? (
                        // Filled Circle '•'
                        <span 
                          className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                            isActive 
                              ? "bg-[#C48452] scale-125 shadow-[0_0_12px_rgba(196,132,82,0.8)]" 
                              : "bg-[#A1A1AA] opacity-80 group-hover:opacity-100 group-hover:bg-[#C48452] group-hover:scale-110"
                          }`} 
                        />
                      ) : (
                        // Hollow Circle '○'
                        <span 
                          className={`w-2.5 h-2.5 rounded-full border-2 transition-all duration-300 bg-[#0B0B0C] ${
                            isActive
                              ? "border-[#C48452] scale-125 shadow-[0_0_12px_rgba(196,132,82,0.8)]"
                              : "border-[#3F3F46] group-hover:border-[#C48452] group-hover:scale-110"
                          }`} 
                        />
                      )}
                    </div>

                    {/* Connector Line and Text Label */}
                    <div 
                      className={`flex items-center overflow-hidden transition-all duration-300 ease-out origin-left ml-1 ${
                        isExpanded ? "max-w-[200px] opacity-100" : "max-w-0 opacity-0 pointer-events-none"
                      }`}
                    >
                      {/* Horizontal connecting line: ──── */}
                      <span className={`h-[1px] w-6 shrink-0 inline-block transition-colors duration-300 ${
                        isActive ? "bg-[#C48452]" : "bg-[#3F3F46]/80"
                      }`} />
                      
                      {/* Horizontal label */}
                      <span className={`font-mono text-[11px] uppercase tracking-widest font-bold whitespace-nowrap pl-2.5 transition-colors duration-200 ${
                        isActive ? "text-[#C48452]" : "text-[#A1A1AA] hover:text-[#F5F5F4]"
                      }`}>
                        {link.name}
                      </span>
                    </div>
                  </a>
                </div>

                {/* Vertical Pipe Section: | */}
                {!isLast && (
                  <div className="w-[1px] h-8 flex flex-col justify-between py-1 my-0.5 pointer-events-none">
                    {/* Path highlights up to active coordinate */}
                    <div 
                      className={`w-[1px] h-full mx-auto transition-all duration-300 ${
                        currentLinkIndex < resolvedActiveIndex
                          ? "bg-[#C48452]/50" 
                          : "bg-[#3F3F46]/30"
                      }`} 
                    />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 4. FULL-SCREEN MOBILE OVERLAY MENU                                          */}
      {/* ========================================================================= */}
      <div
        id="mobile-menu-overlay"
        className={`fixed inset-0 w-full h-full bg-[#0B0B0C] z-50 flex flex-col justify-center px-12 transition-all duration-500 ease-in-out ${
          mobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
        }`}
      >
        {/* Floating Top Header in Overlay to close easily */}
        <div className="absolute top-4 left-4 right-4 h-14 flex items-center justify-between px-5">
          <span className="font-display font-extrabold text-[#F5F5F4] uppercase text-lg tracking-wider">
            Navigate<span className="text-[#C48452]">.</span>
          </span>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-1.5 rounded-full hover:bg-white/5 text-[#F5F5F4] hover:text-[#C48452] transition-colors"
            aria-label="Close Mobile Menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Vertical full-screen links */}
        <div className="flex flex-col space-y-7 text-left">
          {navLinks.map((link, idx) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleSmoothScroll(e, link.id)}
                className={`text-2xl font-display font-bold tracking-wide transition-colors duration-300 flex items-center ${
                  isActive ? "text-[#C48452]" : "text-[#A1A1AA]"
                }`}
                style={{
                  transitionDelay: mobileMenuOpen ? `${idx * 60}ms` : "0ms",
                  transform: mobileMenuOpen ? "translateX(0)" : "translateX(35px)",
                  opacity: mobileMenuOpen ? 1 : 0,
                  transitionProperty: "transform, opacity, color",
                }}
              >
                <span className="font-mono text-[#C48452] text-xs mr-4">0{idx + 1}.</span>
                {link.name}
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}
