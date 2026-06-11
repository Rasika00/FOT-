import React from "react";
import { motion } from "motion/react";
import { Sparkles, ThumbsUp, MessageSquare, Share2, Award, Users, BookOpen, ExternalLink } from "lucide-react";

interface HighlightItem {
  id: string;
  category: "Exhibition" | "Research" | "Industrial" | "Achievement";
  title: string;
  excerpt: string;
  source: string;
  image: string;
  time: string;
  likes: number;
  comments: number;
  tag: string;
}

const HIGHLIGHTS: HighlightItem[] = [
  {
    id: "feed-1",
    category: "Exhibition",
    title: "ProFood ProPack 2025: Innovation Trophy Secured",
    excerpt: "BBST Food Technology students swept national acclaim at Sri Lanka's largest food expo, demonstrating advanced functional food formulations and modern packaging prototypes developed inside our laboratories.",
    source: "FOT Media & Exhibitions Unit",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop",
    time: "2 days ago",
    likes: 184,
    comments: 42,
    tag: "FoodTech"
  },
  {
    id: "feed-2",
    category: "Research",
    title: "World Top 2% Scientist Ranking Milestone",
    excerpt: "We congratulate the senior academic panel of the Faculty of Technology on having multiple professors listed in the Stanford University Top 2% Global Scientists index for 2025-2026 publications.",
    source: "Academic Senate RJT",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop",
    time: "Last week",
    likes: 245,
    comments: 31,
    tag: "Research"
  },
  {
    id: "feed-3",
    category: "Industrial",
    title: "BICT Enterprise Bridging: Virtusa HQ Visit",
    excerpt: "Level 3 Information & Communication Technology students traveled to Virtusa Colombo. The intensive sessions focused on enterprise cloud architecture, active DevOps pipelines, and upcoming technical placement intakes.",
    source: "Faculty Industry Liaison",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800&auto=format&fit=crop",
    time: "May 2026",
    likes: 156,
    comments: 18,
    tag: "BICT"
  },
  {
    id: "feed-4",
    category: "Achievement",
    title: "National Tech Arena Smart-IoT Championship",
    excerpt: "BET Electrical and Electronic Engineering students won the runner-up slot in the National Automation Hackathon, showing off a low-cost IoT environment analyzer powered by custom circuit layouts built right on our campus.",
    source: "Rajarata Electronics Society",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop",
    time: "April 2026",
    likes: 212,
    comments: 29,
    tag: "EET"
  }
];

export function HighlightsSection() {
  return (
    <div className="w-full h-full relative flex flex-col justify-center bg-transparent px-4 md:px-12 lg:px-24">
      {/* Background Orbits */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-blue-500/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute inset-0 bg-cyber-grid pointer-events-none opacity-25" />

      <div className="max-w-7xl mx-auto w-full z-10 flex flex-col justify-between max-h-[85vh] overflow-y-auto no-scrollbar py-6 md:py-12">
        {/* Header Block with Slide Entrance */}
        <div className="text-left mb-6 sm:mb-8 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/30 backdrop-blur-md border border-blue-500/30 rounded-full text-blue-400 text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Digital Footprint & Engagement</span>
          </div>
          <h2 className="text-2xl sm:text-3.5xl font-display font-extrabold tracking-tight text-white uppercase">
            LATEST OUTCOMES & <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">HIGHLIGHTS</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl font-sans">
            A snapshot into active campus life, professional placements, national exhibitions, and breakthrough research publications originating from our Mihintale faculty.
          </p>
        </div>

        {/* Facebook Vibe - Streaming Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {HIGHLIGHTS.map((item, idx) => {
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="shimmer-card relative flex flex-col bg-black/40 backdrop-blur-lg border border-white/10 hover:border-blue-500/30 rounded-xl overflow-hidden shadow-xl hover:shadow-[0_4px_25px_rgba(59,130,246,0.1)] transition-all duration-500 group"
              >
                {/* Image Showcase Container with zoom on hover */}
                <div className="relative h-40 w-full overflow-hidden">
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#080808] to-transparent h-12 z-10" />
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-blue-950/80 border border-blue-500/40 font-mono text-[9px] tracking-widest uppercase text-blue-300 z-10">
                    {item.tag}
                  </span>
                </div>

                {/* Card Content block */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between text-left space-y-3.5">
                  <div className="space-y-2">
                    {/* Source & Timestamp row */}
                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                      <span className="truncate max-w-[120px] text-slate-300 font-medium">{item.source}</span>
                      <span>{item.time}</span>
                    </div>

                    <h4 className="font-display font-extrabold text-sm text-white group-hover:text-blue-400 transition-colors leading-snug line-clamp-2">
                      {item.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed font-sans line-clamp-3">
                      {item.excerpt}
                    </p>
                  </div>

                  {/* Social Reaction Bar mimicking active feed */}
                  <div className="flex items-center justify-between border-t border-white/10 pt-3 mt-1">
                    <div className="flex items-center gap-3">
                      <button className="flex items-center gap-1 text-[11px] text-slate-300 hover:text-blue-400 font-sans cursor-pointer transition-colors">
                        <ThumbsUp className="w-3.5 h-3.5" />
                        <span>{item.likes}</span>
                      </button>
                      <button className="flex items-center gap-1 text-[11px] text-slate-300 hover:text-blue-400 font-sans cursor-pointer transition-colors">
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>{item.comments}</span>
                      </button>
                    </div>
                    
                    <button className="text-slate-400 hover:text-white transition-colors cursor-pointer">
                      <Share2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Inline Student Life Metric Badges */}
        <div className="mt-8 pt-4 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center gap-3 p-3 bg-white/[0.01] border border-white/10 rounded-lg text-left">
            <Award className="w-5 h-5 text-blue-400 shrink-0" />
            <div>
              <div className="font-display font-bold text-xs text-white">Top Placements</div>
              <p className="text-[10px] text-slate-300 font-sans">90%+ Employment Rate</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-white/[0.01] border border-white/10 rounded-lg text-left">
            <Users className="w-5 h-5 text-blue-400 shrink-0" />
            <div>
              <div className="font-display font-bold text-xs text-white font-sans">Active Clubs</div>
              <p className="text-[10px] text-slate-300">ICT, Robo, AgroTech</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-white/[0.01] border border-white/10 rounded-lg text-left">
            <BookOpen className="w-5 h-5 text-blue-400 shrink-0" />
            <div>
              <div className="font-display font-bold text-xs text-white">Innovation Lab</div>
              <p className="text-[10px] text-slate-300">Dedicated Project Incubation Hubs</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-white/[0.01] border border-white/10 rounded-lg text-left">
            <ExternalLink className="w-5 h-5 text-blue-400 shrink-0" />
            <div>
              <div className="font-display font-bold text-xs text-white">Official FB Stream</div>
              <p className="text-[10px] text-slate-300">@tech.rjt.ac.lk</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
