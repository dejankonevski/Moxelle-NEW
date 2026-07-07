/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, CheckCircle, Sparkles, MessageSquare } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilled: { teamSize?: string; techStack?: string } | null;
}

export default function BookingModal({ isOpen, onClose, prefilled }: BookingModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [teamSize, setTeamSize] = useState('1-3 developers');
  const [techStack, setTechStack] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (prefilled) {
      if (prefilled.teamSize) setTeamSize(prefilled.teamSize);
      if (prefilled.techStack) setTechStack(prefilled.techStack);
    } else {
      setTeamSize('1-3 developers');
      setTechStack('');
    }
  }, [prefilled, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setCompany('');
    setTechStack('');
    setNotes('');
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Dark semi-transparent backdrop */}
      <div 
        className="absolute inset-0 bg-brand-navy/65 backdrop-blur-xs transition-opacity duration-300"
        onClick={resetForm}
      />

      {/* Modal Container */}
      <div className="bg-brand-cream border border-neutral-200 w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl relative z-10 transition-transform duration-300 scale-100 max-h-[90vh] flex flex-col">
        
        {/* Top brand indicator */}
        <div className="h-1.5 w-full bg-brand-teal shrink-0" />

        {/* Close Button */}
        <button 
          onClick={resetForm}
          className="absolute top-4 right-4 text-brand-neutralgray hover:text-brand-navy bg-white border border-neutral-200 hover:border-neutral-300 p-2 rounded-full transition-all cursor-pointer z-20"
          id="btn-close-booking"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Content Body */}
        <div className="p-6 md:p-8 overflow-y-auto flex-grow">
          {!isSuccess ? (
            <div className="space-y-6">
              <div className="text-left space-y-2">
                <span className="font-mono text-[10px] text-brand-teal uppercase tracking-wider font-bold block">
                  STRATEGY CONSULTATION
                </span>
                <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-brand-navy">
                  Book a Strategy Call
                </h3>
                <p className="text-xs text-brand-neutralgray leading-relaxed font-normal">
                  Discuss your engineering bottlenecks, stack alignment, and developer bandwidth needs with our leadership team in Skopje.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                {/* Name */}
                <div className="space-y-1">
                  <label className="text-[11px] font-mono font-bold text-brand-navy block uppercase">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full bg-white border border-neutral-300/80 rounded-xl px-4 py-3 text-xs text-brand-navy focus:border-brand-teal focus:outline-none focus:ring-1 focus:ring-brand-teal/30 transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-mono font-bold text-brand-navy block uppercase">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      className="w-full bg-white border border-neutral-300/80 rounded-xl px-4 py-3 text-xs text-brand-navy focus:border-brand-teal focus:outline-none focus:ring-1 focus:ring-brand-teal/30 transition-all"
                    />
                  </div>

                  {/* Company */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-mono font-bold text-brand-navy block uppercase">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. Acme Corp"
                      className="w-full bg-white border border-neutral-300/80 rounded-xl px-4 py-3 text-xs text-brand-navy focus:border-brand-teal focus:outline-none focus:ring-1 focus:ring-brand-teal/30 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Target Team Size */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-mono font-bold text-brand-navy block uppercase">
                      Target Team Size
                    </label>
                    <select
                      value={teamSize}
                      onChange={(e) => setTeamSize(e.target.value)}
                      className="w-full bg-white border border-neutral-300/80 rounded-xl px-3 py-3 text-xs text-brand-navy focus:border-brand-teal focus:outline-none focus:ring-1 focus:ring-brand-teal/30 transition-all cursor-pointer"
                    >
                      <option value="1 developer">1 senior developer</option>
                      <option value="1-3 developers">1 - 3 senior developers</option>
                      <option value="4-7 developers">4 - 7 senior developers</option>
                      <option value="8+ developers">8+ senior developers</option>
                    </select>
                  </div>

                  {/* Target Tech Stack */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-mono font-bold text-brand-navy block uppercase">
                      Target Tech Stack / Role
                    </label>
                    <input
                      type="text"
                      value={techStack}
                      onChange={(e) => setTechStack(e.target.value)}
                      placeholder="e.g. Go, React, Python"
                      className="w-full bg-white border border-neutral-300/80 rounded-xl px-4 py-3 text-xs text-brand-navy focus:border-brand-teal focus:outline-none focus:ring-1 focus:ring-brand-teal/30 transition-all"
                    />
                  </div>
                </div>

                {/* Additional Notes */}
                <div className="space-y-1">
                  <label className="text-[11px] font-mono font-bold text-brand-navy block uppercase">
                    Backlog & Sprints Context (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Tell us about the features you are building and when you are hoping to launch."
                    className="w-full bg-white border border-neutral-300/80 rounded-xl px-4 py-3 text-xs text-brand-navy focus:border-brand-teal focus:outline-none focus:ring-1 focus:ring-brand-teal/30 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-teal hover:bg-brand-teal-dark disabled:bg-brand-teal/70 text-white font-bold text-sm py-4 rounded-xl shadow-md transition-all cursor-pointer text-center mt-2 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Scheduling meeting...</span>
                  ) : (
                    <>
                      <Calendar className="w-4 h-4" />
                      <span>Request Strategy Session</span>
                    </>
                  )}
                </button>
              </form>

              <div className="flex justify-between items-center text-[10px] font-mono text-brand-neutralgray pt-2 border-t border-neutral-200/60">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  No compliance or local entity risk
                </span>
                <span>Response in &lt; 12 Hours</span>
              </div>
            </div>
          ) : (
            <div className="text-center py-12 space-y-6">
              <div className="w-16 h-16 bg-emerald-500/10 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-3xs">
                <CheckCircle className="w-10 h-10" />
              </div>
              <div className="space-y-2">
                <span className="font-mono text-[10px] text-emerald-600 uppercase tracking-widest font-extrabold block">
                  SESSION CONFIRMED
                </span>
                <h3 className="font-display text-2xl font-bold tracking-tight text-brand-charcoal">
                  Thank You, {name.split(' ')[0]}!
                </h3>
                <p className="text-xs text-brand-neutralgray leading-relaxed max-w-sm mx-auto font-normal">
                  Our core engineering team has received your details. We will reach out to you within the next 12 hours with candidate recommendations and customized timezone sync suggestions.
                </p>
              </div>

              <div className="bg-brand-warmgray border border-neutral-200/80 rounded-2xl p-4 max-w-sm mx-auto text-left space-y-2.5">
                <span className="font-mono text-[9px] text-neutral-400 uppercase tracking-wider font-bold">SUMMARY OF DETAILS</span>
                <div className="text-xs space-y-1">
                  <p className="font-normal text-brand-neutralgray"><strong className="text-brand-charcoal">Company:</strong> {company}</p>
                  <p className="font-normal text-brand-neutralgray"><strong className="text-brand-charcoal">Developers Needed:</strong> {teamSize}</p>
                  {techStack && <p className="font-normal text-brand-neutralgray"><strong className="text-brand-charcoal">Primary Focus:</strong> {techStack}</p>}
                </div>
              </div>

              <button
                onClick={resetForm}
                className="bg-brand-charcoal hover:bg-brand-charcoal/90 text-white font-bold text-xs py-3 px-6 rounded-xl transition-all cursor-pointer"
              >
                Return to Homepage
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
