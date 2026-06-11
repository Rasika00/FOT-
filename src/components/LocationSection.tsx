import React from "react";
import { motion } from "motion/react";
import { MapPin, Navigation, Car, Bookmark, Anchor, Compass, PhoneCall } from "lucide-react";

export function LocationSection() {
  return (
    <div className="w-full h-full relative flex flex-col justify-center bg-transparent px-4 md:px-12 lg:px-24">
      {/* Background grids */}
      <div className="absolute inset-0 bg-cyber-grid pointer-events-none opacity-20" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-h-[85vh] overflow-y-auto lg:overflow-visible no-scrollbar py-6 md:py-12">
        
        {/* Left Column: Directions & Travel Coordinates */}
        <div className="lg:col-span-5 space-y-4 md:space-y-6 text-left flex flex-col justify-center">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/30 backdrop-blur-md border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-mono uppercase tracking-wider w-fit">
            <Compass className="w-3.5 h-3.5" />
            <span>GEO-LOCATION COORDINATES</span>
          </div>

          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3.5xl font-display font-extrabold tracking-tight text-white uppercase">
              FIND US AT <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300 bg-clip-text text-transparent">
                MIHINTALE CAMPUS
              </span>
            </h2>
            <div className="font-mono text-xs text-slate-400 tracking-wider">
              LATITUDE: <span className="text-slate-200 font-bold">8.3614° N</span> // LONGITUDE: <span className="text-slate-200 font-bold">80.5034° E</span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
            The state-of-the-art tech faculty premises are situated in the historical, scenic hills of Mihintale, Anuradhapura, offering an ideal academic atmosphere away from the bustle of key industrial zones, yet tightly connected online.
          </p>

          {/* Bullet travel paths cards */}
          <div className="space-y-3.5">
            <div className="p-3 bg-black/40 backdrop-blur-lg border border-white/10 rounded-lg flex gap-3 text-left">
              <div className="p-2 h-fit rounded bg-cyan-950/40 border border-cyan-500/20 text-cyan-400 mt-0.5">
                <Navigation className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h5 className="font-display font-bold text-xs text-white">Via Mihintale Junction</h5>
                <p className="text-[11px] text-slate-300 leading-normal">
                  Drive 1.2km eastward along the Kandy-Jaffna Highway (A9) from the central Mihintale Junction to arrive at the campus gates.
                </p>
              </div>
            </div>

            <div className="p-3 bg-black/40 backdrop-blur-lg border border-white/10 rounded-lg flex gap-3 text-left">
              <div className="p-2 h-fit rounded bg-cyan-950/40 border border-cyan-500/20 text-cyan-400 mt-0.5">
                <Car className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h5 className="font-display font-bold text-xs text-white">Anuradhapura City Link</h5>
                <p className="text-[11px] text-slate-300 leading-normal">
                  Located just 14km (approximately 15 minutes drive) away from the historic Anuradhapura Sacred City administrative center.
                </p>
              </div>
            </div>

            <div className="p-3 bg-black/40 backdrop-blur-lg border border-white/10 rounded-lg flex gap-3 text-left">
              <div className="p-2 h-fit rounded bg-cyan-950/40 border border-cyan-500/20 text-cyan-400 mt-0.5">
                <Bookmark className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h5 className="font-display font-bold text-xs text-white">Faculty Entry Credentials</h5>
                <p className="text-[11px] text-slate-300 leading-normal">
                  Open for official delegations, industrial liaison panels, and school excursion cohorts under authorized registry permissions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Google maps Interactive Iframe Styled Dark */}
        <div className="lg:col-span-7 w-full h-[48vh] min-h-[350px] flex flex-col justify-center">
          <div className="relative w-full h-full p-2 bg-black/30 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden shadow-[0_0_25px_rgba(6,182,212,0.15)] group">
            {/* Corner cyber grids decorations */}
            <div className="absolute top-4 left-4 z-10 px-2.5 py-1 rounded bg-black/85 border border-cyan-500/40 font-mono text-[9px] tracking-widest uppercase text-cyan-400 flex items-center gap-1.5 backdrop-blur-md">
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping" />
              <span>SATELLITE BEACON ACTIVE</span>
            </div>

            <div className="absolute bottom-4 right-4 z-10 px-2.5 py-1 rounded bg-black/85 border border-white/10 font-mono text-[9px] tracking-wider text-slate-300 backdrop-blur-md">
              FOT, RUSL, MIHINTALE, SRI LANKA
            </div>

            {/* Google Maps Real Iframe Overlayed with dark-mode filters */}
            <div className="w-full h-full rounded-xl overflow-hidden relative">
              <iframe
                title="Google Map Rusl Faculty of Technology, Mihintale"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.068202574163!2d80.50085857597148!3d8.361494791672322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1m3!1d15784.270929559388!2d80.5034!3d8.3614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk"
                className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700 pointer-events-auto"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer"
                style={{
                  // High fidelity dark filter configuration for beautiful aesthetic mapping
                  filter: "invert(92%) hue-rotate(185deg) contrast(90%) brightness(95%) grayscale(60%)",
                }}
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
