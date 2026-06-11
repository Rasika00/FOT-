import React from "react";
import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock, Award, BookOpen, Compass } from "lucide-react";

interface OverviewSectionProps {
  isActive: boolean;
}

export function OverviewSection({ isActive }: OverviewSectionProps) {

  return (
    <div id="academic-overview" className="w-full h-full relative flex items-center justify-center bg-black/20 backdrop-blur-md bg-radial-glow-purple px-4 md:px-12 lg:px-24">
      {/* Background Cyber grids */}
      <div className="absolute inset-0 bg-cyber-grid pointer-events-none opacity-20" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none animate-[pulse-glow_10s_infinite]" />

      <div className="max-w-4xl mx-auto w-full z-10 flex flex-col items-center justify-center max-h-[90dvh] overflow-y-auto lg:overflow-visible no-scrollbar pt-12 pb-16 lg:pt-0 lg:pb-0">

        {/* Center Column: Campus Info, Credentials, and Dean's Note */}
        <div className="w-full space-y-6 flex flex-col items-center justify-center text-center">

          {/* Header Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/30 backdrop-blur-md border border-purple-500/30 rounded-full text-purple-400 text-xs font-mono uppercase tracking-wider w-fit">
            <Award className="w-3.5 h-3.5 text-purple-400" />
            <span>Admissions & Inquiries Hub</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-white leading-tight">
            FACULTY HUB & <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              CAMPUS CODES
            </span>
          </h2>

          {/* Quick contact credentials row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl mt-8">
            <div className="p-4 bg-black/40 backdrop-blur-lg border border-white/10 rounded-xl flex flex-col items-center justify-center gap-2 shadow-md hover:border-white/20 transition-colors duration-300 text-center">
              <MapPin className="w-5 h-5 text-purple-400 mb-1" />
              <div className="space-y-1">
                <h5 className="font-mono text-[10px] uppercase tracking-widest text-[#22d3ee]/60">Mihintale Campus</h5>
                <p className="text-sm text-white font-sans leading-relaxed font-medium">
                  Faculty of Technology, Rajarata University of Sri Lanka, Mihintale.
                </p>
              </div>
            </div>

            <div className="p-4 bg-black/40 backdrop-blur-lg border border-white/10 rounded-xl flex flex-col items-center justify-center gap-2 shadow-md hover:border-white/20 transition-colors duration-300 text-center">
              <Phone className="w-5 h-5 text-purple-400 mb-1" />
              <div className="space-y-1">
                <h5 className="font-mono text-[10px] uppercase tracking-widest text-[#22d3ee]/60">Call Registrar</h5>
                <p className="text-sm text-white font-sans leading-relaxed font-medium">
                  +94 (0) 25<br />
                  <span className="text-slate-300">Mon - Fri: 8:30 AM - 4:15 PM</span>
                </p>
              </div>
            </div>

            <div className="p-4 bg-black/40 backdrop-blur-lg border border-white/10 rounded-xl flex flex-col items-center justify-center gap-2 shadow-md hover:border-white/20 transition-colors duration-300 text-center">
              <Mail className="w-5 h-5 text-purple-400 mb-1" />
              <div className="space-y-1">
                <h5 className="font-mono text-[10px] uppercase tracking-widest text-[#22d3ee]/60">Official Queries</h5>
                <p className="text-sm text-white font-sans leading-relaxed font-medium">
                  ar@tec.rjt.ac.lk<br />
                </p>
              </div>
            </div>

            <div className="p-4 bg-black/40 backdrop-blur-lg border border-white/10 rounded-xl flex flex-col items-center justify-center gap-2 shadow-md hover:border-white/20 transition-colors duration-300 text-center">
              <Compass className="w-5 h-5 text-purple-400 mb-1" />
              <div className="space-y-1">
                <h5 className="font-mono text-[10px] uppercase tracking-widest text-[#22d3ee]/60">University Portal</h5>
                <p className="text-sm text-white font-sans leading-relaxed font-medium">
                  www.rjt.ac.lk<br />
                  <span className="text-slate-300">Online Admissions Unit</span>
                </p>
              </div>
            </div>
          </div>

          {/* Academic Prospectus Actions */}
          <div className="bg-gradient-to-r from-[#080808] to-[#050505] border border-white/10 p-5 rounded-xl max-w-2xl w-full text-center mt-6">
            <h4 className="font-display font-bold text-sm sm:text-base text-white flex items-center justify-center gap-2">
              <BookOpen className="w-4 h-4 text-purple-400" />
              Looking for entry credentials?
            </h4>
            <p className="text-base text-slate-100 mt-2 leading-relaxed font-medium drop-shadow-md">
              Enrollments are filtered via the Sri Lankan G.C.E. Advanced Level (A/L) examinations under the Technology (ET/BST/ICT) stream requirements set by the University Grants Commission (UGC).
            </p>
          </div>
        </div>

      </div>

      {/* Floating coordinates footer bar */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-slate-300 text-[9px] font-mono tracking-widest uppercase hidden sm:block">
        © 2026 FACULTY OF TECHNOLOGY - RJT.AC.LK // DEVELOPED BY RASIKA00
      </div>
    </div>
  );
}
