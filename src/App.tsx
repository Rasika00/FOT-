/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef, useMemo } from "react";
import { DEGREE_PROGRAMS } from "./data/degrees";
import { FacultyHero } from "./components/FacultyHero";
import { DegreeSection } from "./components/DegreeSection";
import { OverviewSection } from "./components/OverviewSection";
import { HighlightsSection } from "./components/HighlightsSection";
import { LocationSection } from "./components/LocationSection";
import { AnimatedSectionContent } from "./components/AnimatedSectionContent";
import { Compass, GraduationCap, School, Menu, X, ArrowUpRight } from "lucide-react";

export default function App() {
  const [activeSection, setActiveSection] = useState<string>("welcome");
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [scrollTop, setScrollTop] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Set up all navigable sections in our snap flow
  const sections = [
    { id: "welcome", label: "Welcome Unit", short: "Home" },
    ...DEGREE_PROGRAMS.map((program) => ({
      id: program.id,
      label: program.code,
      short: program.code,
    })),
    { id: "highlights", label: "Latest Highlights", short: "Highlights" },
    { id: "academic-overview", label: "Registry Hub", short: "Info Hub" },
    { id: "location", label: "Find Us", short: "Map" },
  ];

  // Track active section using JavaScript Intersection Observer
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const sectionsToObserve = container.querySelectorAll(".snap-section");
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Activate as soon as the section enters the viewport to prevent delay
          if (entry.isIntersecting && entry.intersectionRatio >= 0.1) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: container,
        threshold: [0.1], // Multi-threshold triggers accurate updates
      }
    );

    sectionsToObserve.forEach((sec) => observer.observe(sec));

    return () => {
      sectionsToObserve.forEach((sec) => observer.unobserve(sec));
    };
  }, []);

  // Track overall scroll progress for a sleek top-dock status bar
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    setScrollTop(target.scrollTop);
    const scrollHeight = target.scrollHeight - target.clientHeight;
    if (scrollHeight > 0) {
      const progress = (target.scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);
    }
  };

  // Smooth scroll handler
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset scroll boundaries perfectly to trigger snap alignment
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Helper code to jump to first degree section
  const handleExploreDegrees = () => {
    scrollToSection(DEGREE_PROGRAMS[0].id);
  };

  return (
    <div className="relative w-screen h-screen bg-[#030305] overflow-hidden text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
      
      {/* Global Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#030305]">
        {/* Seamless Image to Video Parallax Layer */}
        <div 
          className="absolute inset-0 w-full h-full transition-opacity duration-300"
          style={{ opacity: Math.max(0, 1 - (scrollTop / (typeof window !== 'undefined' ? window.innerHeight : 1000))) }}
        >
          <img 
            src="/src/assets/urajarata-uni.jpg" 
            className="w-full h-full object-cover mix-blend-screen opacity-60"
            alt="Hero Background"
          />
        </div>
        
        <div 
          className="absolute inset-0 w-full h-full transition-opacity duration-300"
          style={{ opacity: Math.min(1, (scrollTop / (typeof window !== 'undefined' ? window.innerHeight : 1000))) }}
        >
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover mix-blend-screen opacity-70"
            style={{ filter: "saturate(1.2) contrast(1.1)" }}
          >
            <source src="https://res.cloudinary.com/dpdsdpmgg/video/upload/generate_the_video_ugaff3.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Dynamic Dark Vignettes and Orbs */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-[#030305] z-10" />
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-600/20 blur-[120px] rounded-full mix-blend-screen z-10" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 blur-[120px] rounded-full mix-blend-screen z-10" />
        <div className="absolute top-[40%] left-[30%] w-[30%] h-[30%] bg-blue-600/10 blur-[100px] rounded-full mix-blend-screen z-10" />
        <div className="absolute inset-0 bg-cyber-grid opacity-[0.03] mix-blend-overlay z-10" />
      </div>

      {/* 1. Elegant Dark Left-Docked Sidebar for Desktop */}
      <nav 
        aria-label="Elegant Sidebar Navigation" 
        className="w-24 h-screen border-r border-white/10 flex-col items-center py-12 justify-between bg-black/20 backdrop-blur-xl fixed top-0 left-0 z-50 hidden md:flex"
      >
        <div className="flex flex-col items-center gap-1 w-full">
          {/* FOT Brand Box */}
          <div 
            onClick={() => scrollToSection("welcome")}
            className="w-10 h-10 bg-cyan-500 rounded flex items-center justify-center font-display font-black text-black text-xl mb-12 hover:shadow-[0_0_15px_#22d3ee] transition-all duration-300 cursor-pointer"
          >
            R
          </div>
          
          {/* Navigation dots with hover text tooltip */}
          <div className="flex flex-col gap-6">
            {sections.map((sec) => {
              const isSecActive = activeSection === sec.id;
              return (
                <button
                  key={sec.id}
                  onClick={() => scrollToSection(sec.id)}
                  aria-label={`Scroll to ${sec.label}`}
                  className="relative group flex items-center justify-center cursor-pointer p-1"
                >
                  <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    isSecActive 
                      ? "bg-cyan-400 scale-150 shadow-[0_0_8px_#22d3ee]" 
                      : "bg-white/20 group-hover:bg-white/60"
                  }`} />
                  
                  {/* Tooltip */}
                  <span className="absolute left-8 py-1.5 px-3 rounded bg-black/40 backdrop-blur-md border border-white/10 font-mono text-[9px] tracking-widest uppercase text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50">
                    {sec.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
        
        {/* Roated Bottom Text */}
        <div className="rotate-[-90deg] whitespace-nowrap text-[9px] tracking-[0.3em] uppercase text-white/40 font-mono">
          RJT SYSTEMA
        </div>
      </nav>

      {/* 2. Global Floating Header (Styled to match Elegant Dark) */}
      <header className="fixed top-0 md:left-24 right-0 h-20 z-40 px-6 md:px-12 pointer-events-none flex items-center justify-between">
        {/* Abstract blur background mask */}
        <div className="absolute inset-0 bg-black/10 backdrop-blur-md pointer-events-none border-b border-white/5" />

        {/* Branding Badge (Interactive Click returns home) */}
        <div 
          onClick={() => scrollToSection("welcome")}
          className="pointer-events-auto flex items-center gap-3 cursor-pointer group"
        >
          <div className="flex flex-col text-left">
            <span className="font-display font-black text-sm tracking-widest text-[#22d3ee] group-hover:text-white transition-colors">
              FOT // RAJARATA
            </span>
            <span className="font-mono text-[9px] tracking-widest text-white/60 uppercase leading-none">
              Faculty of Technology
            </span>
          </div>
        </div>

        {/* Header Navigation Actions */}
        <div className="pointer-events-auto flex items-center gap-6 text-[10px] uppercase tracking-widest font-mono font-medium text-white/60">
          <span className="hover:text-cyan-400 transition-colors cursor-pointer hidden sm:inline" onClick={() => scrollToSection("welcome")}>Welcome</span>
          <span className="hover:text-cyan-400 transition-colors cursor-pointer hidden md:inline" onClick={() => scrollToSection("bbst-bp")}>BBST</span>
          <span className="hover:text-cyan-400 transition-colors cursor-pointer hidden md:inline" onClick={() => scrollToSection("bet-ee")}>BET</span>
          <span className="hover:text-cyan-400 transition-colors cursor-pointer hidden md:inline" onClick={() => scrollToSection("bict")}>BICT</span>
          <button
            onClick={() => scrollToSection("academic-overview")}
            className="px-4 py-2 bg-white/5 border border-white/10 hover:border-cyan-500/50 rounded font-display font-bold text-[9px] tracking-widest text-white hover:text-cyan-400 transition-all duration-300 flex items-center gap-1 cursor-pointer"
          >
            Admissions <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </header>

      {/* 3. Top-dock Scroll Progress Bar */}
      <div className="fixed top-0 inset-x-0 h-[2px] bg-white/10 z-50 pointer-events-none">
        <div 
          className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 transition-all duration-100 shadow-[0_0_8px_rgba(34,211,238,0.5)]" 
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* 4. Mobile Dot Indicator (Only visible where Left Sidebar is hidden) */}
      <nav aria-label="Mobile dots indicator" className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4 md:hidden">
        {sections.map((sec) => (
          <button
            key={sec.id}
            onClick={() => scrollToSection(sec.id)}
            aria-label={`Scroll to ${sec.label}`}
            className="p-1 focus:outline-none"
          >
            <span className={`block w-2 h-2 rounded-full transition-all duration-300 ${
              activeSection === sec.id 
                ? "bg-cyan-450 bg-cyan-400 scale-125 shadow-[0_0_8px_rgba(34,211,238,0.6)]" 
                : "bg-slate-700"
            }`} />
          </button>
        ))}
      </nav>

      {/* 5. Left-Floating Vertical Accent (High-tech visual decoration, aligned after sidebar) */}
      <div className="fixed left-32 top-1/2 -translate-y-1/2 z-30 pointer-events-none hidden xl:flex flex-col items-center gap-3">
        <div className="w-[1px] h-20 bg-gradient-to-b from-transparent to-white/10" />
        <span className="font-mono text-[8px] tracking-[0.4em] uppercase rotate-90 my-8 text-white/30 whitespace-nowrap h-12 flex items-center justify-center">
          DECORE_AESTHETICISM
        </span>
        <div className="w-[1px] h-20 bg-gradient-to-t from-transparent to-white/10" />
      </div>

      {/* 6. Master CSS-Snap Container Workspace */}
      <div 
        ref={containerRef}
        onScroll={handleScroll}
        className="snap-container no-scrollbar w-full h-full relative z-10"
      >
        {useMemo(() => (
          <>
            {/* Welcome Section */}
            <section id="welcome" className="snap-section md:pl-24">
              <AnimatedSectionContent isActive={activeSection === "welcome"}>
                <FacultyHero 
                  isActive={activeSection === "welcome"} 
                  onExplore={handleExploreDegrees} 
                />
              </AnimatedSectionContent>
            </section>

            {/* Dynamic Degree Sections */}
            {DEGREE_PROGRAMS.map((program) => (
              <section id={program.id} key={program.id} className="snap-section bg-transparent md:pl-24">
                <AnimatedSectionContent isActive={activeSection === program.id}>
                  <DegreeSection 
                    program={program} 
                    isActive={activeSection === program.id} 
                  />
                </AnimatedSectionContent>
              </section>
            ))}

            {/* Global Registry & Overview Info Section */}
            <section id="academic-overview" className="snap-section md:pl-24">
              <AnimatedSectionContent isActive={activeSection === "academic-overview"}>
                <OverviewSection isActive={activeSection === "academic-overview"} />
              </AnimatedSectionContent>
            </section>

            {/* Latest Highlights & Feed Stories Section */}
            <section id="highlights" className="snap-section md:pl-24">
              <AnimatedSectionContent isActive={activeSection === "highlights"}>
                <HighlightsSection />
              </AnimatedSectionContent>
            </section>

            {/* Dedicated Geolocation & Interactive Map Section */}
            <section id="location" className="snap-section md:pl-24">
              <AnimatedSectionContent isActive={activeSection === "location"}>
                <LocationSection />
              </AnimatedSectionContent>
            </section>
          </>
        ), [activeSection])}
      </div>
    </div>
  );
}
