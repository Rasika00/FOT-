import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { DegreeProgram } from "../types";
import * as Icons from "lucide-react";

interface DegreeSectionProps {
  program: DegreeProgram;
  isActive: boolean;
}

// ----------------------------------------------------
// DYNAMIC INTERACTIVE PARTICLES CANVAS FOR BICT
// ----------------------------------------------------
function InteractiveBictCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, hover: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || canvas.offsetWidth || 500);
    let height = (canvas.height = canvas.parentElement?.clientHeight || canvas.offsetHeight || 500);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || canvas.offsetWidth || 500;
      height = canvas.height = canvas.parentElement?.clientHeight || canvas.offsetHeight || 500;
    };
    window.addEventListener("resize", handleResize);

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      char: string;
      isBinary: boolean;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.45;
        this.vy = (Math.random() - 0.5) * 0.45;
        this.size = Math.random() * 8 + 7;
        this.char = Math.random() > 0.5 ? "1" : "0";
        this.isBinary = Math.random() > 0.65;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        if (mouseRef.current.hover) {
          const dx = this.x - mouseRef.current.x;
          const dy = this.y - mouseRef.current.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 130) {
            const force = (130 - dist) / 130;
            this.x += (dx / dist) * force * 1.8;
            this.y += (dy / dist) * force * 1.8;
          }
        }
      }

      draw() {
        if (!ctx) return;
        if (this.isBinary) {
          ctx.font = `500 ${this.size}px var(--font-mono)`;
          ctx.fillStyle = "rgba(56, 189, 248, 0.65)";
          ctx.fillText(this.char, this.x, this.y);
        } else {
          ctx.beginPath();
          ctx.arc(this.x, this.y, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(34, 211, 238, 0.85)";
          ctx.fill();
        }
      }
    }

    const particles: Particle[] = Array.from({ length: 75 }, () => new Particle());

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connections
      ctx.strokeStyle = "rgba(56, 189, 248, 0.18)";
      ctx.lineWidth = 0.9;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dist = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
          if (dist < 95) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        hover: true,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current.hover = false;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (canvas) {
        canvas.removeEventListener("mousemove", handleMouseMove);
        canvas.removeEventListener("mouseleave", handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-auto opacity-80 z-0" />;
}

// Map of dynamic Lucide icons
const getIconElement = (name: string, className = "w-5 h-5") => {
  const IconComponent = (Icons as any)[name] || Icons.HelpCircle;
  return <IconComponent className={className} />;
};

export function DegreeSection({ program, isActive }: DegreeSectionProps) {
  const [activeTab, setActiveTab] = useState<"pillars" | "curriculum" | "careers" | "aesthetic">("pillars");
  const [activeSemesterTab, setActiveSemesterTab] = useState<string>("Year 1");

  // Style mapper for individual degree identities
  const colorMap: { [key: string]: { border: string; bgBtn: string; text: string; bgBadge: string; glow: string } } = {
    emerald: {
      border: "border-emerald-500/30 group-hover:border-emerald-500/60",
      bgBtn: "bg-emerald-550 text-slate-950 bg-emerald-400 hover:bg-emerald-300",
      text: "text-emerald-400",
      bgBadge: "bg-emerald-950/40 border-emerald-500/30 text-emerald-400",
      glow: "shadow-neon-green",
    },
    amber: {
      border: "border-amber-500/30 group-hover:border-amber-500/60",
      bgBtn: "bg-amber-550 text-slate-950 bg-amber-400 hover:bg-amber-300",
      text: "text-amber-400",
      bgBadge: "bg-amber-950/40 border-amber-500/30 text-amber-400",
      glow: "shadow-neon-amber",
    },
    cyan: {
      border: "border-cyan-500/30 group-hover:border-cyan-500/60",
      bgBtn: "bg-cyan-550 text-slate-950 bg-cyan-400 hover:bg-cyan-300",
      text: "text-cyan-400",
      bgBadge: "bg-cyan-950/40 border-cyan-500/30 text-cyan-400",
      glow: "shadow-neon-cyan",
    },
    purple: {
      border: "border-purple-500/30 group-hover:border-purple-500/60",
      bgBtn: "bg-purple-550 text-slate-950 bg-purple-400 hover:bg-purple-300",
      text: "text-purple-400",
      bgBadge: "bg-purple-950/40 border-purple-500/30 text-purple-400",
      glow: "shadow-neon-purple",
    },
    sky: {
      border: "border-sky-500/30 group-hover:border-sky-500/60",
      bgBtn: "bg-sky-550 text-slate-950 bg-sky-400 hover:bg-sky-300",
      text: "text-sky-400",
      bgBadge: "bg-sky-950/40 border-sky-500/30 text-sky-450",
      glow: "shadow-neon-blue",
    },
  };

  const scheme = colorMap[program.accentClass] || colorMap.cyan;



  return (
    <div className="w-full h-full relative flex items-center justify-center px-4 md:px-12 lg:px-24">
      {/* Background large lettering decor */}
      <div className="absolute left-6 bottom-4 md:left-12 md:bottom-8 font-display font-black text-[9vw] select-none text-white/15 pointer-events-none tracking-tighter">
        {program.bgLettering}
      </div>

      {/* Cyber Grid */}
      <div className="absolute inset-0 bg-cyber-grid pointer-events-none opacity-20" />


      {/* Primary Container Grid */}
      <div className="max-w-7xl mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center h-full max-h-[90dvh] overflow-y-auto lg:overflow-visible no-scrollbar pt-12 pb-16 lg:pt-0 lg:pb-0">
        
        {/* Left Column: Core Info & Details */}
        <div className="lg:col-span-6 text-left flex flex-col justify-center space-y-4 md:space-y-6">
          
          {/* Header Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase border ${scheme.bgBadge}`}>
              {program.code}
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-mono font-bold tracking-wider uppercase bg-white/10 backdrop-blur-sm border border-slate-800 text-slate-200">
              SLQF LEVEL {program.slqfLevel}
            </span>
          </div>

          {/* Master Degree Title */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold tracking-tight text-white leading-tight">
              {program.title}
            </h2>
            <p className={`text-base sm:text-lg md:text-xl italic font-semibold mt-1.5 ${scheme.text} drop-shadow-md`}>
              "{program.tagline}"
            </p>
          </div>

          <p className="text-sm sm:text-base text-white font-sans leading-relaxed max-w-xl font-medium drop-shadow-md">
            {program.description}
          </p>

          {/* Core Info Specs Panel */}
          <div className="grid grid-cols-2 gap-4 max-w-md p-4 bg-black/40 backdrop-blur-lg border border-white/10 rounded-xl">
            <div>
              <span className="block text-[10px] font-mono uppercase tracking-widest text-[#22d3ee]/60">Duration</span>
              <span className="font-display font-bold text-xs sm:text-sm text-white">{program.duration}</span>
            </div>
            <div>
              <span className="block text-[10px] font-mono uppercase tracking-widest text-[#22d3ee]/60">Hosting Department</span>
              <span className="font-display font-bold text-xs sm:text-sm text-white">{program.department.replace("Department of", "Dept. of")}</span>
            </div>
          </div>

          {/* Strategic Laboratories */}
          <div className="space-y-2">
            <h4 className="font-mono text-xs uppercase tracking-widest text-slate-300">Core Academic Facilities:</h4>
            <div className="flex flex-wrap gap-2">
              {program.labs.map((lab) => (
                <span
                  key={lab}
                  className="px-2.5 py-1 text-[11px] font-sans font-medium text-slate-200 bg-black/20 backdrop-blur-md border border-white/20 rounded-lg shadow-sm hover:border-[#22d3ee]/40 hover:text-white transition-all duration-300"
                >
                  {lab}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Custom Interactive Dashboard Terminal */}
        <div className="lg:col-span-6 flex flex-col h-[52vh] min-h-[380px] w-full max-w-xl mx-auto">
          
          {/* Terminal Tabs Navigator */}
          <div className="flex border border-b-0 border-white/20 bg-black/30 backdrop-blur-md rounded-t-xl overflow-hidden p-1 gap-1">
            <button
              onClick={() => setActiveTab("pillars")}
              className={`flex-1 py-2 text-center text-[11px] sm:text-xs font-display font-bold tracking-wider uppercase transition-all rounded-md cursor-pointer ${
                activeTab === "pillars"
                  ? `${scheme.text} bg-black/20 backdrop-blur-md border border-white/20`
                  : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
              }`}
            >
              Core Pillars
            </button>
            <button
              onClick={() => setActiveTab("curriculum")}
              className={`flex-1 py-2 text-center text-[11px] sm:text-xs font-display font-bold tracking-wider uppercase transition-all rounded-md cursor-pointer ${
                activeTab === "curriculum"
                  ? `${scheme.text} bg-black/20 backdrop-blur-md border border-white/20`
                  : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
              }`}
            >
              Curriculum Browser
            </button>
            <button
              onClick={() => setActiveTab("careers")}
              className={`flex-1 py-2 text-center text-[11px] sm:text-xs font-display font-bold tracking-wider uppercase transition-all rounded-md cursor-pointer ${
                activeTab === "careers"
                  ? `${scheme.text} bg-black/20 backdrop-blur-md border border-white/20`
                  : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
              }`}
            >
              Graduate Futures
            </button>
          </div>

          {/* Interactive Screen Display */}
          <div className={`flex-1 p-5 sm:p-6 bg-black/40 backdrop-blur-lg border border-white/20 rounded-b-xl backdrop-blur-md relative overflow-y-auto no-scrollbar transition-shadow duration-500`}>
            
            <AnimatePresence mode="wait">
              {/* Tab 1: Core Pillars */}
              {activeTab === "pillars" && (
                <motion.div
                  key="pillars"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="space-y-4 h-full flex flex-col justify-center"
                >
                  <p className="text-xs font-mono uppercase tracking-widest text-slate-200">Major Study Streams & Objectives</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {program.corePillars.map((pillar) => (
                      <div
                        key={pillar.title}
                        className="p-3 bg-black/30 backdrop-blur-md border border-white/10 hover:border-cyan-500/30 rounded-lg flex gap-3 text-left transition-all duration-300 group"
                      >
                        <div className={`p-1.5 h-fit rounded bg-black/20 backdrop-blur-md ${scheme.text}`}>
                          {getIconElement(pillar.icon)}
                        </div>
                        <div className="space-y-0.5">
                          <h5 className="font-display font-bold text-xs sm:text-sm text-white group-hover:text-cyan-400 transition-colors">
                            {pillar.title}
                          </h5>
                          <p className="text-xs leading-relaxed text-slate-200 font-medium group-hover:text-white transition-colors">
                            {pillar.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Tab 2: Curriculum roadmap */}
              {activeTab === "curriculum" && (
                <motion.div
                  key="curriculum"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="space-y-4 h-full flex flex-col"
                >
                  {/* Semester Stage selectors */}
                  <div className="flex bg-black/20 backdrop-blur-md p-0.5 rounded-lg border border-white/10">
                    {Object.keys(program.curriculumSemesters).map((sem) => (
                      <button
                        key={sem}
                        onClick={() => setActiveSemesterTab(sem)}
                        className={`flex-1 py-1 text-[10px] font-mono uppercase tracking-wider rounded-md cursor-pointer ${
                          activeSemesterTab === sem
                            ? `${scheme.text} bg-black/30 backdrop-blur-md border border-white/20`
                            : "text-slate-400 text-slate-400 hover:text-slate-200"
                        }`}
                      >
                        {sem.replace("Year ", "Yr ")}
                      </button>
                    ))}
                  </div>

                  <div className="flex-1 space-y-2 text-left">
                    <p className="text-[10px] font-mono uppercase tracking-widest text-[#22d3ee]/60 flex items-center gap-1">
                      <Icons.BookOpen className="w-3 h-3" />
                      Sample Syllabus Courses for {activeSemesterTab}:
                    </p>
                    <div className="space-y-1.5">
                      {program.curriculumSemesters[activeSemesterTab]?.map((subject, index) => (
                        <div
                          key={`${subject.code}-${index}`}
                          className="px-3 py-1.5 bg-white/5 backdrop-blur-sm hover:bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 rounded-md flex items-center justify-between text-xs font-sans text-slate-200 transition-colors gap-2"
                        >
                          <div className="flex items-center gap-3 truncate">
                            <span className="font-mono text-[10px] text-[#22d3ee]/70 shrink-0">{subject.code}</span>
                            <span className="font-medium truncate" title={subject.title}>{subject.title}</span>
                          </div>
                          <div className="flex items-center gap-1.5 shrink-0">
                            <span className="text-[9px] font-mono text-slate-400 bg-black/20 px-1 py-0.5 rounded border border-white/5">{subject.credits} CR</span>
                            <span className={`text-[9px] font-mono uppercase tracking-widest px-1 py-0.5 rounded border ${
                              subject.status.startsWith('C') ? 'text-emerald-300 bg-emerald-950/30 border-emerald-500/20' : 
                              subject.status.startsWith('O') ? 'text-amber-300 bg-amber-950/30 border-amber-500/20' : 
                              'text-slate-300 bg-slate-900/50 border-white/10'
                            }`}>
                              {subject.status.startsWith('C') ? 'CORE' : subject.status.startsWith('O') ? 'OPTIONAL' : subject.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Tab 3: Career paths & Placements */}
              {activeTab === "careers" && (
                <motion.div
                  key="careers"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="space-y-4 h-full flex flex-col justify-center"
                >
                  <p className="text-xs font-mono uppercase tracking-widest text-slate-200 text-left">Industrial Placement Targets & Academic Prospects</p>
                  <div className="relative border-l border-white/10 ml-3 space-y-4">
                    {program.careerPaths.map((career, i) => (
                      <div key={career} className="relative pl-6 text-left group">
                        {/* Bullet indicators */}
                        <div className={`absolute left-0 top-1.5 -translate-x-1/2 w-2 h-2 rounded-full border border-[#050505] cursor-pointer ${
                          i === 0 ? "bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.5)]" :
                          i === 1 ? "bg-blue-400" :
                          i === 2 ? "bg-indigo-400" : "bg-purple-400"
                        }`} />
                        <div className="space-y-0.5">
                          <h5 className="font-display font-semibold text-xs sm:text-sm text-white group-hover:text-cyan-400 transition-colors">
                            {career}
                          </h5>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </div>
  );
}
