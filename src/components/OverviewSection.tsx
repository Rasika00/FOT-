import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Award, BookOpen, Compass } from "lucide-react";

interface OverviewSectionProps {
  isActive: boolean;
}

export function OverviewSection({ isActive }: OverviewSectionProps) {
  const [formData, setFormData] = useState({ name: "", email: "", degree: "BICT", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate API pipeline latency
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Clear data but keep success visible
    }, 1200);
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", degree: "BICT", message: "" });
    setIsSubmitted(false);
  };

  return (
    <div id="academic-overview" className="w-full h-full relative flex items-center justify-center bg-black/20 backdrop-blur-md bg-radial-glow-purple px-4 md:px-12 lg:px-24">
      {/* Background Cyber grids */}
      <div className="absolute inset-0 bg-cyber-grid pointer-events-none opacity-20" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none animate-[pulse-glow_10s_infinite]" />

      <div className="max-w-7xl mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-h-[85vh] overflow-y-auto lg:overflow-visible no-scrollbar pt-12 pb-16 lg:pt-0 lg:pb-0">
        
        {/* Left Column: Campus Info, Credentials, and Dean's Note */}
        <div className="lg:col-span-6 space-y-4 md:space-y-6 text-left flex flex-col justify-center">
          
          {/* Header Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/30 backdrop-blur-md border border-purple-500/30 rounded-full text-purple-400 text-xs font-mono uppercase tracking-wider w-fit">
            <Award className="w-3.5 h-3.5 text-purple-400" />
            <span>Admissions & Inquiries Hub</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-white leading-tight">
            FACULTY HUB & <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              CAMPUS CODES
            </span>
          </h2>

          {/* Quick contact credentials row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mr-4">
            <div className="p-3 bg-black/40 backdrop-blur-lg border border-white/10 rounded-lg flex items-start gap-3 shadow-md hover:border-white/20 transition-colors duration-300">
              <MapPin className="w-4 h-4 text-purple-400 mt-1 shrink-0" />
              <div className="space-y-0.5">
                <h5 className="font-mono text-[10px] uppercase tracking-widest text-[#22d3ee]/60">Mihintale Campus</h5>
                <p className="text-xs text-slate-200 font-sans leading-normal">
                  Faculty of Technology, Rajarata University of Sri Lanka, Mihintale.
                </p>
              </div>
            </div>

            <div className="p-3 bg-black/40 backdrop-blur-lg border border-white/10 rounded-lg flex items-start gap-3 shadow-md hover:border-white/20 transition-colors duration-300">
              <Phone className="w-4 h-4 text-purple-400 mt-1 shrink-0" />
              <div className="space-y-0.5">
                <h5 className="font-mono text-[10px] uppercase tracking-widest text-[#22d3ee]/60">Call Registrar</h5>
                <p className="text-xs text-slate-200 font-sans leading-normal">
                  +94 (0) 25 226 6200<br />
                  <span className="text-slate-300">Mon - Fri: 8:30 AM - 4:15 PM</span>
                </p>
              </div>
            </div>

            <div className="p-3 bg-black/40 backdrop-blur-lg border border-white/10 rounded-lg flex items-start gap-3 shadow-md hover:border-white/20 transition-colors duration-300">
              <Mail className="w-4 h-4 text-purple-400 mt-1 shrink-0" />
              <div className="space-y-0.5">
                <h5 className="font-mono text-[10px] uppercase tracking-widest text-[#22d3ee]/60">Official Queries</h5>
                <p className="text-xs text-slate-200 font-sans leading-normal">
                  dean@tec.rjt.ac.lk<br />
                  <span className="text-slate-300">Response within 24 work hours</span>
                </p>
              </div>
            </div>

            <div className="p-3 bg-black/40 backdrop-blur-lg border border-white/10 rounded-lg flex items-start gap-3 shadow-md hover:border-white/20 transition-colors duration-300">
              <Compass className="w-4 h-4 text-purple-400 mt-1 shrink-0" />
              <div className="space-y-0.5">
                <h5 className="font-mono text-[10px] uppercase tracking-widest text-[#22d3ee]/60">University Portal</h5>
                <p className="text-xs text-slate-200 font-sans leading-normal">
                  www.rjt.ac.lk<br />
                  <span className="text-slate-300">Online Admissions Unit</span>
                </p>
              </div>
            </div>
          </div>

          {/* Academic Prospectus Actions */}
          <div className="bg-gradient-to-r from-[#080808] to-[#050505] border border-white/10 p-4 rounded-xl max-w-xl text-left">
            <h4 className="font-display font-bold text-xs sm:text-sm text-white flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-purple-400" />
              Looking for entry credentials?
            </h4>
            <p className="text-xs text-slate-300 mt-1 leading-normal">
              Enrollments are filtered via the Sri Lankan G.C.E. Advanced Level (A/L) examinations under the Technology (ET/BST/ICT) stream requirements set by the University Grants Commission (UGC).
            </p>
          </div>
        </div>

        {/* Right Column: Inquiries Form Card with Interactive Transitions */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <div className="p-5 sm:p-6 md:p-8 bg-black/40 backdrop-blur-lg border border-white/20 rounded-2xl shadow-[0_0_20px_rgba(168,85,247,0.15)] backdrop-blur-md max-w-xl w-full mx-auto relative overflow-hidden transition-all duration-300">
            {/* Aesthetic Top Board Bar */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-purple-500 via-pink-400 to-purple-600" />

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key="inquiry-form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-left space-y-1.5 mb-6">
                    <h3 className="font-display font-extrabold text-lg sm:text-xl text-white">Ask an Academic Mentor</h3>
                    <p className="text-xs text-slate-300 leading-normal">
                      Have questions regarding the honors degree curriculum, local industry trends, or student internships? Submit your query directly to our campus registrars:
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4 text-left">
                    {/* Name */}
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-slate-405 text-slate-300 mb-1.5" htmlFor="name">
                        Applicant Name (Full or Initials)
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rasika Priyanath"
                        className="w-full px-4 py-2.5 bg-black/20 backdrop-blur-md border border-white/20 focus:border-purple-500 rounded-lg text-sm text-white focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Email */}
                      <div>
                        <label className="block text-[10px] font-mono uppercase tracking-wider text-slate-405 text-slate-300 mb-1.5" htmlFor="email">
                          Contact Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. rasika@gmail.com"
                          className="w-full px-4 py-2.5 bg-black/20 backdrop-blur-md border border-white/20 focus:border-purple-500 rounded-lg text-sm text-white focus:outline-none transition-colors"
                        />
                      </div>

                      {/* Stream */}
                      <div>
                        <label className="block text-[10px] font-mono uppercase tracking-wider text-slate-405 text-slate-300 mb-1.5" htmlFor="degree">
                          Degree Stream of Interest
                        </label>
                        <select
                          id="degree"
                          value={formData.degree}
                          onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
                          className="w-full px-4 py-2.5 bg-black/20 backdrop-blur-md border border-white/20 focus:border-purple-500 rounded-lg text-sm text-white focus:outline-none transition-colors cursor-pointer"
                        >
                          <option value="BBST-BP">BBST (Hons) in Bioprocess Technology</option>
                          <option value="BBST-FT">BBST (Hons) in Food Technology</option>
                          <option value="BET-EET">BET (Hons) in Electrical & Electronic</option>
                          <option value="BET-MAT">BET (Hons) in Materials Technology</option>
                          <option value="BICT">BICT (Hons) - General IT Operations</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-slate-405 text-slate-300 mb-1.5" htmlFor="message">
                        Detailed Message or Inquiry
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Write your academic or enrollment inquiry subjects here..."
                        className="w-full px-4 py-2.5 bg-black/20 backdrop-blur-md border border-white/20 focus:border-purple-500 rounded-lg text-sm text-white focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-5 py-3 cursor-pointer bg-purple-600 hover:bg-purple-500 text-white font-display font-semibold rounded-lg flex items-center justify-center gap-2 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all duration-300 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Streaming Encryption Pipeline...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Secured Inquiry</span>
                        </>
                      )}
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="form-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="py-8 text-center space-y-4 flex flex-col items-center justify-center h-full"
                >
                  <div className="p-4 bg-purple-950/60 border border-purple-500/30 rounded-full text-purple-400 shimmer">
                    <CheckCircle className="w-12 h-12" />
                  </div>
                  <div className="space-y-1.5 max-w-sm">
                    <h3 className="font-display font-extrabold text-xl text-white">Transmission Successful</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Thank you, <span className="text-purple-400 font-bold">{formData.name}</span>. Your inquiry regarding <span className="text-purple-400 font-bold">{formData.degree}</span> has been received of record in our academic intake index. An admissions executive will reach back shortly.
                    </p>
                  </div>
                  <button
                    onClick={handleReset}
                    className="px-5 py-2.5 border border-slate-850 bg-slate-900 hover:bg-slate-850 hover:border-slate-700 text-xs text-slate-200 hover:text-white rounded-lg transition-all cursor-pointer"
                  >
                    Send Another Question
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>

      {/* Floating coordinates footer bar */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-slate-300 text-[9px] font-mono tracking-widest uppercase hidden sm:block">
        © 2026 FACULTY OF TECHNOLOGY - RJT.AC.LK // DEVELOPED IN HARMONY // ALL RIGHTS PERSISTED
      </div>
    </div>
  );
}
