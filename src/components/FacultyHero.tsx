import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { FACULTY_STATS } from "../data/degrees";
import { School, ChevronDown, GraduationCap, Compass, Sparkles } from "lucide-react";
import bgImage1 from "../assets/urajarata-uni.jpg";

export interface FacultyHeroProps {
  isActive: boolean;
  onExplore: () => void;
}

export function FacultyHero({ isActive, onExplore }: FacultyHeroProps) {
  return (
    <div className="w-full h-full relative flex items-center justify-center bg-transparent px-6 md:px-12 lg:px-24">
      {/* The background images and masks have been moved to App.tsx to enable a seamless crossfade transition. */}

      {/* Absolute Cyber backdrop elements */}
      <div className="absolute inset-0 bg-cyber-grid pointer-events-none opacity-20 z-10" />
      
      {/* Aesthetic glowing orbits */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px] animate-[pulse-glow_8s_infinite] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px] animate-[pulse-glow_12s_infinite] pointer-events-none" />

      {/* Decorative Top-Left Coordinates of Mihintale, Sri Lanka (Actual coords: 8.3551° N, 80.5011° E) */}
      <div className="absolute top-8 left-8 md:top-12 md:left-12 font-mono text-[10px] tracking-widest text-[#22d3ee]/60 hidden md:block">
        LOC://8.3551_N_80.5011_E // MIHINTALE, LK
      </div>

      <div className="max-w-7xl mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Main Brand Column */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
          {/* Institutional Tag */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-black/40 backdrop-blur-md border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-mono uppercase tracking-wider shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
          >
            <School className="w-3.5 h-3.5 text-cyan-400" />
            <span>Rajarata University of Sri Lanka</span>
          </motion.div>

          {/* Master Headline */}
          <div className="space-y-2">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-white drop-shadow-lg leading-tight"
            >
              FACULTY OF
              <span className="block mt-1 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
                TECHNOLOGY
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-slate-200 drop-shadow-md text-sm sm:text-base md:text-lg font-sans max-w-xl leading-relaxed"
            >
              Nurturing professional technological leaders, innovators, and research engineers for local and global high-tech industries. Anchored in Mihintale, the cradle of Sri Lankan illumination.
            </motion.p>
          </div>

          {/* Core CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4"
          >
            <button
              onClick={onExplore}
              className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-display font-semibold text-sm rounded hover:shadow-[0_0_20px_#22d3ee] transition-all duration-350 flex items-center gap-2 cursor-pointer"
            >
              <Compass className="w-4 h-4" />
              Explore Degree Programs
            </button>
            <a
              href="#academic-overview"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("academic-overview")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 py-3 border border-white/20 hover:border-cyan-500/50 bg-black/30 hover:bg-black/50 text-white font-display font-semibold text-sm rounded transition-all duration-300 flex items-center gap-2 backdrop-blur-md shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
            >
              <GraduationCap className="w-4 h-4 text-cyan-400" />
              Dean's Hub & Contacts
            </a>
          </motion.div>
        </div>

        {/* Dynamic Metric Grid Column */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-4">
          {FACULTY_STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.7, delay: 0.2 + idx * 0.1 }}
              whileHover={{ scale: 1.03, borderColor: "rgba(34, 211, 238, 0.4)" }}
              className="p-5 bg-black/40 border border-white/10 rounded-xl backdrop-blur-lg text-left flex flex-col justify-between h-40 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.4)] relative group overflow-hidden hover:border-cyan-500/50 hover:bg-black/60 hover:shadow-[0_8px_32px_rgba(34,211,238,0.15)]"
            >
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="flex items-center justify-between">
                <span className="font-display font-extrabold text-3xl sm:text-4xl text-cyan-450 text-[#22d3ee] flex items-baseline drop-shadow-md">
                  {stat.value}
                  {stat.suffix && <span className="text-xl text-blue-500 ml-0.5">{stat.suffix}</span>}
                </span>
                <Sparkles className="w-4 h-4 text-cyan-500/20 group-hover:text-cyan-400 transition-colors duration-300" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-xs text-white tracking-wide uppercase mt-2 group-hover:text-cyan-400 transition-colors duration-300 drop-shadow">
                  {stat.label}
                </h3>
                <p className="text-[10px] sm:text-xs text-slate-300 line-clamp-2 mt-1 leading-normal drop-shadow-sm">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Downward Navigation Cue */}
      <div 
        onClick={onExplore}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer group z-20"
      >
        <span className="font-mono text-[9px] tracking-widest text-slate-500 uppercase group-hover:text-cyan-400 transition-colors duration-300">SCROLL DOWN</span>
        <ChevronDown className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 animate-bounce transition-colors duration-300" />
      </div>
    </div>
  );
}
