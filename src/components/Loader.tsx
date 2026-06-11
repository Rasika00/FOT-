import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

export function Loader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 250);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#030305] text-white overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-cyber-grid pointer-events-none opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#22d3ee]/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Animated Logo */}
      <div className="relative w-48 h-48 mb-12">
        <div className="absolute inset-0 bg-[#22d3ee]/20 blur-xl animate-pulse rounded-full" />
        <svg viewBox="0 0 100 100" className="w-full h-full relative z-10 text-[#22d3ee]">
          <defs>
            <linearGradient id="loader-gradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="currentColor" />
              <stop offset="100%" stopColor="#67e8f9" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="42" fill="none" stroke="url(#loader-gradient)" strokeWidth="8" strokeLinecap="round" strokeDasharray="75 40" className="origin-center animate-[spin_6s_linear_infinite]" />
          <path d="M50 18 L55 45 L82 50 L55 55 L50 82 L45 55 L18 50 L45 45 Z" fill="url(#loader-gradient)" className="origin-center animate-[pulse_2s_ease-in-out_infinite]" />
          <circle cx="50" cy="50" r="6" fill="#fff" className="origin-center animate-[pulse_1s_ease-in-out_infinite]" />
        </svg>
      </div>

      {/* Progress Bar Only (No Text) */}
      <div className="w-64 sm:w-80 h-1 bg-white/10 rounded-full overflow-hidden relative border border-white/5">
        <motion.div
          className="absolute top-0 left-0 h-full bg-[#22d3ee] shadow-[0_0_10px_#22d3ee]"
          initial={{ width: "0%" }}
          animate={{ width: `${Math.min(progress, 100)}%` }}
          transition={{ ease: "linear" }}
        />
      </div>
    </motion.div>
  );
}
