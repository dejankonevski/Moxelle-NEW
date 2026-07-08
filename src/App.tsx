/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  Check, 
  ShieldCheck, 
  Sparkles, 
  Code, 
  Users, 
  CheckCircle2, 
  Cpu, 
  ChevronRight,
  TrendingUp,
  Building,
  ChevronDown,
  Layers,
  X,
  MessageSquare,
  Clock,
  HeartHandshake,
  RotateCw
} from 'lucide-react';

import Header from './components/Header';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import BlogPage from './components/BlogPage';

import { 
  METRIC_POINTS, 
  SOLUTIONS, 
  PROCESS_STEPS,
  FAQ_ITEMS,
  TALENT_PROFILES
} from './data';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'blog'>('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [prefilledBooking, setPrefilledBooking] = useState<{ teamSize: string; techStack: string } | null>(null);
  
  // Tab control inside Q&A block
  const [activeQuestion, setActiveQuestion] = useState<'q1' | 'q2' | 'q3'>('q1');
  
  // FAQ state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Hero Talent Spotlight state
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});
  
  const toggleFlip = (name: string) => {
    setFlippedCards((prev) => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  const [isChatOpen, setIsChatOpen] = useState(true);
  const [chatProfile, setChatProfile] = useState<any>(null);
  const chatTimerRef = useRef<any>(null);

  useEffect(() => {
    // Pick a random talent profile
    const randomIndex = Math.floor(Math.random() * TALENT_PROFILES.length);
    setChatProfile(TALENT_PROFILES[randomIndex]);

    // Auto disappear if not clicked in 5 seconds
    chatTimerRef.current = setTimeout(() => {
      setIsChatOpen(false);
    }, 5000);

    return () => {
      if (chatTimerRef.current) clearTimeout(chatTimerRef.current);
    };
  }, []);

  const toggleChat = () => {
    if (chatTimerRef.current) {
      clearTimeout(chatTimerRef.current);
    }
    if (!isChatOpen) {
      const randomIndex = Math.floor(Math.random() * TALENT_PROFILES.length);
      setChatProfile(TALENT_PROFILES[randomIndex]);
      setIsChatOpen(true);
      chatTimerRef.current = setTimeout(() => {
        setIsChatOpen(false);
      }, 5000);
    } else {
      setIsChatOpen(false);
    }
  };

  const heroTalentList = TALENT_PROFILES;

  const openBooking = (prefilled: { teamSize: string; techStack: string } | null = null) => {
    setPrefilledBooking(prefilled);
    setIsBookingOpen(true);
  };

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-brand-cream text-brand-navy selection:bg-brand-teal selection:text-white antialiased font-sans flex flex-col">
      
      {/* Navigation Header */}
      <Header 
        onOpenBooking={() => openBooking()} 
        currentView={currentView}
        onNavigateToHome={() => setCurrentView('home')}
        onNavigateToBlog={() => setCurrentView('blog')}
      />

      <main className="flex-grow pt-16">
        {currentView === 'blog' ? (
          <BlogPage 
            onBackToHome={() => setCurrentView('home')} 
            onOpenBooking={() => openBooking()} 
          />
        ) : (
          <>
        
        {/* HERO SECTION WITH COHESIVE VALUE PROPOSITION */}
        <section id="hero" className="relative pt-20 pb-20 overflow-hidden border-b border-neutral-200">
          {/* Subtle fluid background gradients */}
          <div className="absolute top-[-10%] right-[-10%] w-[550px] h-[550px] bg-gradient-to-br from-brand-teal/5 to-transparent rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-brand-teal/3 to-transparent rounded-full blur-[150px] pointer-events-none" />

          <div className="max-w-4xl mx-auto px-6 relative z-10 text-left space-y-8">
            <div className="space-y-5">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-brand-navy leading-[1.12]">
                Build your engineering hub in Europe <span className="text-brand-teal block italic font-medium font-display">and cut costs</span>.
              </h1>

              <p className="text-sm md:text-base text-brand-neutralgray font-normal leading-relaxed max-w-2xl space-y-2">
                <span className="font-bold text-brand-navy block text-base md:text-lg">
                  Embedded senior engineering teams for growing SaaS companies.
                </span>
                <span>
                  Stop hiring one engineer at a time. Build an embedded engineering hub in Europe with senior engineers fully integrated into your product team.
                </span>
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
              <button
                onClick={() => openBooking()}
                className="bg-brand-teal hover:bg-brand-teal-dark text-white font-bold text-xs px-7 py-3.5 rounded-xl transition-all duration-200 shadow-sm flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Book a Strategy Call</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => handleScrollTo('solutions')}
                className="bg-white hover:bg-neutral-50 text-brand-navy border border-neutral-200/80 font-bold text-xs px-7 py-3.5 rounded-xl transition-all duration-200 flex items-center justify-center gap-1 cursor-pointer"
              >
                <span>Explore Services</span>
              </button>
            </div>

            {/* Premium Attention-Grabbing Value Showcases - Big, Bold & Highly Attractive */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-3">
              {/* Showcase Card 1 */}
              <div className="bg-white border border-neutral-200 rounded-2xl p-5 shadow-3xs hover:border-brand-teal/30 hover:shadow-2xs transition-all duration-300 text-left relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-brand-teal/5 to-transparent rounded-full pointer-events-none" />
                <div className="space-y-2">
                  <div className="text-3xl font-extrabold tracking-tight text-brand-teal font-display">
                    Top 4%
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-display font-bold text-xs text-brand-navy">
                      Strict Technical Vetting
                    </h4>
                    <p className="text-[11px] text-brand-neutralgray leading-relaxed font-normal">
                      Only elite software engineers with deep computer science fundamentals and verified production expertise.
                    </p>
                  </div>
                </div>
              </div>

              {/* Showcase Card 2 */}
              <div className="bg-white border border-neutral-200 rounded-2xl p-5 shadow-3xs hover:border-emerald-500/20 hover:shadow-2xs transition-all duration-300 text-left relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-emerald-500/5 to-transparent rounded-full pointer-events-none" />
                <div className="space-y-2">
                  <div className="text-3xl font-extrabold tracking-tight text-emerald-600 font-display">
                    Save 30%+
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-display font-bold text-xs text-brand-navy">
                      Capital Efficiency Edge
                    </h4>
                    <p className="text-[11px] text-brand-neutralgray leading-relaxed font-normal">
                      Bypass recruitment fees, payroll taxes, and office overhead. Flat-rate, EOR-compliant scaling.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COST EFFICIENCY & CAPITAL DEPLOYMENT SECTION */}
        <section id="cost-efficiency" className="py-24 bg-brand-cream/30 border-b border-neutral-200 relative overflow-hidden">
          {/* Ambient organic light effects */}
          <div className="absolute top-1/2 left-[-10%] w-[500px] h-[500px] bg-brand-teal/5 rounded-full blur-[130px] pointer-events-none" />
          <div className="absolute top-0 right-[-10%] w-[400px] h-[400px] bg-brand-teal/3 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            {/* Centered Section Header to keep content clean, minimal and quick to digest */}
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
              <span className="font-mono text-[10px] font-bold bg-brand-teal/10 text-brand-teal border border-brand-teal/20 px-3 py-1 rounded-md uppercase tracking-wider">
                Financial Hyper-Efficiency
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-brand-navy">
                CUT costs, double your runway.
              </h2>
              <p className="text-sm text-brand-neutralgray leading-relaxed max-w-lg mx-auto">
                Compare the stark financial reality. Legacy hiring is packed with hidden liabilities. Moxelle delivers a flat-rate, fully compliant dedicated hub.
              </p>
            </div>

            {/* Side-by-Side Pricing Plan Style Comparison Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
              
              {/* Box A: WHAT THEY PAY (Traditional In-House) */}
              <div className="bg-white border-2 border-neutral-200 rounded-[2rem] p-8 flex flex-col justify-between hover:border-neutral-300 transition-all duration-300 relative group shadow-sm">
                <div className="space-y-6">
                  {/* Card Header */}
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="font-mono text-[10px] text-rose-500 font-extrabold uppercase tracking-widest bg-rose-50 border border-rose-100 px-2.5 py-1 rounded">
                        WHAT THEY PAY (LEGACY)
                      </span>
                      <h3 className="font-display font-extrabold text-xl text-brand-navy mt-2.5">
                        Traditional US/EU Hire
                      </h3>
                    </div>
                    {/* Tiny visual indicators of overhead */}
                    <span className="text-xl">⚠️</span>
                  </div>

                  {/* Pricing Display */}
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-1 text-neutral-400">
                      <span className="font-display font-black text-4xl md:text-5xl text-neutral-500 tracking-tight">$125,000</span>
                      <span className="font-mono text-sm font-semibold">/ yr</span>
                    </div>
                    <p className="text-xs text-neutral-400 font-medium">Estimated average per Senior Engineer</p>
                  </div>

                  {/* Obligations & Hidden Liabilities List */}
                  <div className="space-y-4 border-t border-neutral-100 pt-5 text-left">
                    <h4 className="font-sans font-bold text-xs text-brand-navy uppercase tracking-wider">
                      Your Overhead &amp; Obligations:
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2 text-xs text-brand-neutralgray">
                        <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-neutral-700">Recruiter Margins:</strong> Upfront fee of 15% to 20% ($15k+ per candidate)
                        </div>
                      </li>
                      <li className="flex items-start gap-2 text-xs text-brand-neutralgray">
                        <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-neutral-700">Taxes &amp; Benefits:</strong> Direct payroll tax, pension, and health insurance overhead
                        </div>
                      </li>
                      <li className="flex items-start gap-2 text-xs text-brand-neutralgray">
                        <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-neutral-700">Legal Risk:</strong> Full localized employer liability and complex local termination laws
                        </div>
                      </li>
                      <li className="flex items-start gap-2 text-xs text-brand-neutralgray">
                        <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-neutral-700">Administrative Costs:</strong> Hardware logistics, local HR compliance, desk overhead
                        </div>
                      </li>
                      <li className="flex items-start gap-2 text-xs text-brand-neutralgray">
                        <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-neutral-700">Hiring Delay:</strong> Average 45+ days recruitment cycles with high initial attrition risk
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-neutral-100 text-center">
                  <span className="text-[10px] font-mono text-neutral-400 font-bold uppercase tracking-wider">
                    High administrative &amp; legal friction
                  </span>
                </div>
              </div>

              {/* Box B: WHAT YOU SHOULD PAY (Moxelle Dedicated Hub) */}
              <div className="bg-brand-navy border-3 border-brand-teal rounded-[2rem] p-8 flex flex-col justify-between hover:border-emerald-400 hover:shadow-xl transition-all duration-300 relative overflow-hidden text-white shadow-lg">
                {/* Glowing decorative effect */}
                <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl from-brand-teal/20 to-transparent rounded-full pointer-events-none" />
                
                <div className="space-y-6 relative z-10">
                  {/* Card Header with circular callout */}
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="font-mono text-[10px] text-brand-teal font-extrabold uppercase tracking-widest bg-brand-teal/10 border border-brand-teal/20 px-2.5 py-1 rounded">
                        WHAT YOU SHOULD PAY
                      </span>
                      <h3 className="font-display font-extrabold text-xl text-white mt-2.5">
                        Moxelle Dedicated Hub
                      </h3>
                    </div>
                    
                    {/* THE ATTRACTIVE BIG CIRCLE FOR 3-SECOND COMPREHENSION */}
                    <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-emerald-500 to-brand-teal text-white flex flex-col items-center justify-center shadow-lg border border-white/20 shrink-0 transform -rotate-6 group-hover:rotate-0 transition-transform duration-300">
                      <span className="font-mono text-[9px] font-bold uppercase tracking-widest leading-none">CUT</span>
                      <span className="font-display font-black text-sm leading-none mt-0.5">37.6%</span>
                      <span className="font-mono text-[8px] font-medium leading-none mt-0.5">COSTS</span>
                    </div>
                  </div>

                  {/* Pricing Display */}
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-1 text-brand-teal">
                      <span className="font-display font-black text-4xl md:text-5xl text-brand-teal tracking-tight">$78,000</span>
                      <span className="font-mono text-sm font-semibold text-neutral-300">/ yr</span>
                    </div>
                    <p className="text-xs text-neutral-300 font-medium">Flat-rate, all-inclusive pricing per developer</p>
                  </div>

                  {/* Value & Compliance Included List */}
                  <div className="space-y-4 border-t border-white/10 pt-5 text-left">
                    <h4 className="font-sans font-bold text-xs text-brand-teal uppercase tracking-wider">
                      Everything Completely Included:
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2 text-xs text-neutral-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-white">Zero Extra Fees:</strong> Flat monthly invoices cover vetting, HR operations, and management.
                        </div>
                      </li>
                      <li className="flex items-start gap-2 text-xs text-neutral-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-white">Elite Talent Guaranteed:</strong> Rigorously vetted senior developers matched to your specific stack.
                        </div>
                      </li>
                      <li className="flex items-start gap-2 text-xs text-neutral-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-white">Full Legal/EOR Compliance:</strong> Zero legal exposure; we manage localized employment, benefits, &amp; taxes.
                        </div>
                      </li>
                      <li className="flex items-start gap-2 text-xs text-neutral-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-white">Enterprise Security Setup:</strong> Shipped company-owned secure laptops and workspaces included.
                        </div>
                      </li>
                      <li className="flex items-start gap-2 text-xs text-neutral-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-white">Rapid Onboarding:</strong> Sync'd into standups and committing high-quality code in under 21 days.
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 text-center">
                  <span className="text-[10px] font-mono text-emerald-400 font-extrabold uppercase tracking-wider flex items-center justify-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    RECOMMENDED CAPITAL CHOICE
                  </span>
                </div>
              </div>

            </div>

            {/* Big Summary Savings Panel to lock in 3-second understanding */}
            <div className="mt-12 bg-brand-navy text-white rounded-2xl p-6 md:p-8 max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 border border-brand-teal/20 shadow-md">
              <div className="text-center sm:text-left space-y-1.5">
                <span className="text-[9px] text-brand-teal font-mono font-extrabold uppercase tracking-wider block">CAPITAL RETENTION SCORE</span>
                <h4 className="font-display font-extrabold text-xl md:text-2xl text-white">
                  Save <span className="text-brand-teal font-black">$47,000 every single year</span> per developer.
                </h4>
                <p className="text-xs text-neutral-300">
                  Cut overhead costs, reinvest back into runway, and accelerate your core roadmap with confidence.
                </p>
              </div>
              <div className="shrink-0 bg-white/5 border border-white/10 rounded-xl p-4 text-center min-w-[200px]">
                <span className="text-[8px] text-neutral-400 font-mono font-bold uppercase tracking-widest block">FOR A 5-DEV TEAM</span>
                <span className="font-display font-black text-2xl text-emerald-400 mt-1 block">+$235,000 / yr</span>
                <span className="text-[10px] text-neutral-300 block mt-0.5">Retained Runway Capital</span>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED SENIOR DEVELOPERS SECTION */}
        <section id="featured-developers" className="py-24 bg-white border-b border-neutral-200 relative overflow-hidden">
          <div className="absolute top-1/2 right-[-10%] w-[500px] h-[500px] bg-brand-teal/4 rounded-full blur-[130px] pointer-events-none" />
          <div className="max-w-4xl mx-auto px-6 relative z-10 text-left space-y-10">
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <span className="font-mono text-[10px] font-bold bg-brand-teal/10 text-brand-teal border border-brand-teal/20 px-3 py-1 rounded-md uppercase tracking-wider">
                Vetted Engineers
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-brand-navy">
                Meet our featured senior developers
              </h2>
              <p className="text-sm text-brand-neutralgray leading-relaxed max-w-lg mx-auto text-center">
                Hover or click on any profile card to instantly flip it and inspect verified vetting, skills, and timezone details.
              </p>
            </div>

            {/* Responsive Tinder-like Cards Grid - Centered & Premium */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {heroTalentList.map((talent) => {
                const isFlipped = !!flippedCards[talent.name];
                return (
                  <div
                    key={talent.name}
                    className="perspective-1000 w-full h-[365px] group"
                    onMouseEnter={() => setFlippedCards((prev) => ({ ...prev, [talent.name]: true }))}
                    onMouseLeave={() => setFlippedCards((prev) => ({ ...prev, [talent.name]: false }))}
                  >
                    {/* 3D Flippable Wrapper */}
                    <div
                      className={`relative w-full h-full transition-transform duration-500 preserve-3d cursor-pointer ${
                        isFlipped ? 'rotate-y-180' : ''
                      }`}
                      onClick={() => toggleFlip(talent.name)}
                    >
                      {/* FRONT FACE */}
                      <div className="absolute inset-0 w-full h-full backface-hidden bg-white border-2 border-neutral-200/80 rounded-[1.75rem] p-5 flex flex-col justify-between hover:border-brand-teal/50 hover:shadow-md transition-all duration-300">
                        {/* Ambient glow accent */}
                        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-brand-teal/10 to-transparent rounded-full pointer-events-none" />
                        
                        <div className="space-y-4">
                          {/* Header with larger avatar and bold titles */}
                          <div className="flex gap-4 items-center">
                            <img
                              src={talent.avatar}
                              alt={talent.name}
                              className="w-14 h-14 rounded-2xl object-cover border border-neutral-100 shadow-2xs shrink-0"
                            />
                            <div className="min-w-0">
                              <h4 className="font-display font-extrabold text-lg md:text-xl text-brand-navy truncate">
                                {talent.name}
                              </h4>
                              <p className="text-sm font-extrabold text-brand-teal truncate mt-1">
                                {talent.title}
                              </p>
                            </div>
                          </div>

                          {/* Core details with enlarged text */}
                          <div className="space-y-2.5 border-t border-b border-neutral-100/80 py-3.5 text-sm text-brand-neutralgray">
                            <div className="flex justify-between items-center">
                              <span className="font-mono text-xs text-neutral-400">Experience:</span>
                              <span className="font-bold text-brand-navy text-sm">{talent.experience}</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="font-mono text-xs text-neutral-400">Overlap:</span>
                              <span className="font-bold text-emerald-600 text-sm flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                Full Sync (Daily)
                              </span>
                            </div>
                          </div>

                          {/* Larger, clear skills badges */}
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {talent.skills.slice(0, 3).map((skill) => (
                              <span
                                key={skill}
                                className="text-xs font-mono bg-neutral-100 text-brand-neutralgray border border-neutral-200/50 px-2.5 py-1 rounded-md font-bold"
                              >
                                {skill}
                              </span>
                            ))}
                            {talent.skills.length > 3 && (
                              <span className="text-xs font-mono bg-brand-teal/5 text-brand-teal border border-brand-teal/10 px-2.5 py-1 rounded-md font-extrabold">
                                +{talent.skills.length - 3} more
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-neutral-400 text-xs font-mono font-bold">
                          <span className="text-[11px] text-neutral-400 font-bold">Hover or click to rotate</span>
                          <span className="text-brand-teal flex items-center gap-1 text-xs hover:underline">
                            Full Details <RotateCw className="w-3.5 h-3.5 animate-spin-slow" />
                          </span>
                        </div>
                      </div>

                      {/* BACK FACE */}
                      <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-brand-navy text-white rounded-[1.75rem] p-5 flex flex-col justify-between border-2 border-brand-teal/50 shadow-lg">
                        <div className="space-y-3.5 text-left">
                          <div className="flex items-center justify-between border-b border-white/10 pb-2">
                            <span className="text-[10px] font-mono text-brand-teal font-extrabold uppercase tracking-widest">Verified Credentials</span>
                            <span className="text-[10px] font-mono text-emerald-400 font-extrabold bg-white/5 px-2 py-0.5 rounded border border-emerald-400/20">ELITE PASSED</span>
                          </div>

                          {/* Vetting highlights with larger readable typography */}
                          <div className="space-y-2 text-xs text-neutral-200">
                            <div className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" />
                              <span className="font-bold">Stage 1: Rigorous CS Vetting</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" />
                              <span className="font-bold">Stage 2: Live System Design &amp; Coding</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" />
                              <span className="font-bold">Stage 3: Fluent English Overlap Sync</span>
                            </div>
                          </div>

                          <p className="text-[11px] text-neutral-300 leading-normal italic pt-2 border-t border-white/5 line-clamp-3">
                            {talent.ipGuarantee}
                          </p>
                        </div>

                        <div className="pt-2 border-t border-white/10 flex gap-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              openBooking({ teamSize: '1 senior developer', techStack: `${talent.name} (${talent.title})` });
                            }}
                            className="w-full bg-brand-teal hover:bg-brand-teal-dark text-white font-sans text-xs font-extrabold py-2.5 px-3 rounded-xl cursor-pointer transition-all flex items-center justify-center gap-1 shadow-md hover:shadow-lg hover:-translate-y-0.5 transform duration-200"
                          >
                            <span>Deploy {talent.name.split(' ')[0]}</span>
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* PROOF METRICS GRID */}
        <section className="bg-brand-midnight py-10 border-y border-neutral-900 text-white overflow-hidden">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center text-center">
              {METRIC_POINTS.map((pt, i) => (
                <div key={i} className="space-y-1.5 py-2 border-r border-neutral-800/40 last:border-0">
                  <div className="font-display text-3xl md:text-4xl font-bold tracking-tight text-brand-teal">
                    {pt.value}
                  </div>
                  <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest font-bold">
                    {pt.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CORE ANSWERS BLOCK (What does Moxelle do?) */}
        <section id="what-we-do" className="py-24 bg-white border-b border-neutral-200 relative overflow-hidden">
          <div className="absolute top-1/4 left-1/12 w-[40rem] h-[40rem] bg-gradient-to-tr from-brand-teal/5 to-transparent rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/12 w-[30rem] h-[30rem] bg-gradient-to-br from-brand-teal/3 to-transparent rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-6xl mx-auto px-6 relative z-10">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-brand-navy leading-tight">
                The architecture of <span className="text-brand-teal block italic font-medium font-display">high-speed scaling</span>
              </h2>
              <p className="text-brand-neutralgray text-sm md:text-base mt-4 leading-relaxed max-w-2xl mx-auto">
                Discover how Moxelle removes administrative friction and embeds elite developers into your sprint rituals.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
              
              {/* Left Column: Selector buttons */}
              <div className="lg:col-span-5 flex flex-col justify-start gap-4">
                {[
                  {
                    id: 'q1' as const,
                    tag: "Q1",
                    label: "What does Moxelle do?",
                    summary: "Assembling, employing, and managing dedicated senior developer teams globally.",
                  },
                  {
                    id: 'q2' as const,
                    tag: "Q2",
                    label: "Who is Moxelle for?",
                    summary: "Fast-growing SaaS, product engineering teams, and technical leaders.",
                  },
                  {
                    id: 'q3' as const,
                    tag: "Q3",
                    label: "Why choose Moxelle?",
                    summary: "Full timezone alignment, direct tool integration, and high talent retention.",
                  }
                ].map((item) => {
                  const isActive = activeQuestion === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveQuestion(item.id)}
                      className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden flex gap-4 items-start cursor-pointer ${
                        isActive
                          ? 'bg-brand-navy border-brand-navy text-white shadow-md'
                          : 'bg-brand-warmgray/30 border-neutral-200 text-brand-neutralgray hover:bg-white hover:border-brand-teal/20'
                      }`}
                    >
                      {isActive && (
                        <div className="absolute inset-y-0 left-0 w-1.5 bg-brand-teal" />
                      )}
                      
                      <span className={`font-mono text-xs font-bold px-3 py-1.5 rounded-lg shrink-0 ${
                        isActive ? 'bg-brand-teal text-white shadow-xs' : 'bg-neutral-100 text-neutral-600'
                      }`}>
                        {item.tag}
                      </span>
                      <div className="space-y-1 pr-2">
                        <h4 className={`font-display font-bold text-base tracking-tight ${isActive ? 'text-white' : 'text-brand-navy'}`}>
                          {item.label}
                        </h4>
                        <p className={`text-xs leading-relaxed ${isActive ? 'text-neutral-300' : 'text-brand-neutralgray'}`}>
                          {item.summary}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Right Column: Interactive panels */}
              <div className="lg:col-span-7 bg-brand-cream/50 border border-neutral-200 rounded-[2rem] p-8 flex flex-col justify-between shadow-xs relative min-h-[400px]">
                
                {activeQuestion === 'q1' && (
                  <div className="space-y-6 text-left flex-grow flex flex-col justify-between">
                    <div className="space-y-4">
                      <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-brand-navy">
                        Your Fully Integrated <span className="text-brand-teal font-display italic font-medium">Engineering Hub</span>
                      </h3>
                      <p className="text-xs md:text-sm text-brand-neutralgray leading-relaxed font-normal">
                        We handle the full scope of regional employment while you lead product roadmap commits. Your Moxelle engineers sit in premium workspaces equipped with high-spec hardware and operate as your direct staff.
                      </p>
                    </div>

                    {/* Bolder, Clearer, 2x2 Clean Professional Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-white border border-neutral-200/80 rounded-2xl p-5 shadow-3xs space-y-2">
                        <span className="font-mono text-[9px] text-brand-teal font-extrabold uppercase tracking-wider block">01 / REGIONAL COMPLIANCE</span>
                        <h4 className="font-sans font-bold text-sm text-brand-navy">Employer of Record</h4>
                        <p className="text-[11px] text-brand-neutralgray leading-relaxed font-normal">
                          Moxelle handles 100% of regional tax, compliance, payroll, HR, and labor regulations with zero administrative client liability.
                        </p>
                      </div>

                      <div className="bg-white border border-neutral-200/80 rounded-2xl p-5 shadow-3xs space-y-2">
                        <span className="font-mono text-[9px] text-brand-teal font-extrabold uppercase tracking-wider block">02 / HARDWARE & ENVIRONMENT</span>
                        <h4 className="font-sans font-bold text-sm text-brand-navy">Premium Workspaces</h4>
                        <p className="text-[11px] text-brand-neutralgray leading-relaxed font-normal">
                          Dedicated modern physical offices globally equipped with high-spec developer hardware and a deep, collaborative engineering culture.
                        </p>
                      </div>

                      <div className="bg-white border border-neutral-200/80 rounded-2xl p-5 shadow-3xs space-y-2">
                        <span className="font-mono text-[9px] text-emerald-600 font-extrabold uppercase tracking-wider block">03 / REAL-TIME OVERLAP</span>
                        <h4 className="font-sans font-bold text-sm text-brand-navy">Overlapping Sprints</h4>
                        <p className="text-[11px] text-brand-neutralgray leading-relaxed font-normal">
                          Engineers maintain an active daily overlap for real-time standups, instant feedback loops, and rapid PR cycle closures.
                        </p>
                      </div>

                      <div className="bg-white border border-neutral-200/80 rounded-2xl p-5 shadow-3xs space-y-2">
                        <span className="font-mono text-[9px] text-emerald-600 font-extrabold uppercase tracking-wider block">04 / DIRECT STAFF PROTOCOL</span>
                        <h4 className="font-sans font-bold text-sm text-brand-navy">Direct Tool Integration</h4>
                        <p className="text-[11px] text-brand-neutralgray leading-relaxed font-normal">
                          Vetted staff join your Slack workspace, commit directly to your GitHub/GitLab repositories, and work directly as your in-house staff.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {activeQuestion === 'q2' && (
                  <div className="space-y-6 text-left flex-grow flex flex-col justify-between">
                    <div className="space-y-4">
                      <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-brand-navy">
                        Accelerate Your <span className="text-brand-teal font-display italic font-medium">Roadmap Velocity</span>
                      </h3>
                      <p className="text-xs md:text-sm text-brand-neutralgray leading-relaxed font-normal">
                        Designed for CTOs, product managers, and tech founders experiencing backlog strain. Moxelle cuts through recruiting friction by maintaining an active network of highly qualified developer profiles.
                      </p>
                    </div>

                    {/* Timeline box */}
                    <div className="bg-brand-navy text-white rounded-2xl p-5 space-y-3.5">
                      <div className="flex justify-between items-center border-b border-neutral-800 pb-2">
                        <span className="font-mono text-[9px] text-neutral-400 uppercase tracking-wider">Onboarding Cadence</span>
                        <span className="text-[9px] text-emerald-400 font-mono font-bold bg-white/5 border border-white/10 px-1.5 py-0.5 rounded">
                          Immediate Overlap
                        </span>
                      </div>
                      <div className="space-y-3 text-xs">
                        <div className="flex gap-2">
                          <span className="font-mono font-bold text-brand-teal shrink-0">Day 1:</span>
                          <p className="text-neutral-300 font-normal">Direct communication setup in your Slack workspace.</p>
                        </div>
                        <div className="flex gap-2">
                          <span className="font-mono font-bold text-brand-teal shrink-0">Day 5:</span>
                          <p className="text-neutral-300 font-normal">Initial technical walkthrough and initial sprint commits.</p>
                        </div>
                        <div className="flex gap-2">
                          <span className="font-mono font-bold text-emerald-400 shrink-0">Day 21:</span>
                          <p className="text-neutral-300 font-normal">Full production output, fully integrated daily stands.</p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-xl border border-neutral-100 space-y-1">
                        <span className="font-sans font-bold text-xs text-brand-navy block">
                          Zero Recruiter Noise
                        </span>
                        <p className="text-[11px] text-brand-neutralgray leading-relaxed font-normal">Bypass long recruitment agency pipeline delays. Secure stable continuity.</p>
                      </div>
                      <div className="bg-white p-4 rounded-xl border border-neutral-100 space-y-1">
                        <span className="font-sans font-bold text-xs text-brand-navy block">
                          Unblocked Backlogs
                        </span>
                        <p className="text-[11px] text-brand-neutralgray leading-relaxed font-normal">Re-activate complex feature shipping and satisfy scale demands safely.</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeQuestion === 'q3' && (
                  <div className="space-y-6 text-left flex-grow flex flex-col justify-between">
                    <div className="space-y-4">
                      <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-brand-navy">
                        Direct Timezone <span className="text-brand-teal font-display italic font-medium">Alignment</span>
                      </h3>
                      <p className="text-xs md:text-sm text-brand-neutralgray leading-relaxed font-normal">
                        We are not a brokerage. Every engineer is directly matched to your team, communicating in fluent English, working on your timezone, and focused exclusively on your backlog.
                      </p>
                    </div>

                    {/* Stats strip */}
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-white border border-neutral-200 p-4 rounded-xl text-center">
                        <span className="font-mono text-xl font-bold text-brand-navy block">100%</span>
                        <span className="font-mono text-[8px] text-brand-neutralgray uppercase tracking-wider block font-bold">Direct Alignment</span>
                      </div>
                      <div className="bg-white border border-neutral-200 p-4 rounded-xl text-center">
                        <span className="font-mono text-xl font-bold text-brand-teal block">8+ Hours</span>
                        <span className="font-mono text-[8px] text-brand-neutralgray uppercase tracking-wider block font-bold">Daily Overlap</span>
                      </div>
                      <div className="bg-white border border-neutral-200 p-4 rounded-xl text-center">
                        <span className="font-mono text-xl font-bold text-emerald-600 block">0</span>
                        <span className="font-mono text-[8px] text-brand-neutralgray uppercase tracking-wider block font-bold">Legal Overhead</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-xl border border-neutral-100 space-y-1">
                        <span className="font-sans font-bold text-xs text-brand-navy block">
                          Seamless Tool Sync
                        </span>
                        <p className="text-[11px] text-brand-neutralgray leading-relaxed font-normal">Engineers join your Slack standups, use your Jira boards, and commit to your repos.</p>
                      </div>
                      <div className="bg-white p-4 rounded-xl border border-neutral-100 space-y-1">
                        <span className="font-sans font-bold text-xs text-brand-navy block">
                          Highly Vetted STEM Pool
                        </span>
                        <p className="text-[11px] text-brand-neutralgray leading-relaxed font-normal">Our global networks possess high concentrations of outstanding, technical STEM graduates.</p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-8 pt-6 border-t border-neutral-200 flex justify-end text-xs">
                  <button
                    onClick={() => openBooking()}
                    className="text-brand-teal hover:text-brand-teal-dark font-bold flex items-center gap-1 cursor-pointer"
                  >
                    <span>Request resource interview</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>

            </div>

          </div>
        </section>


        {/* SOLUTIONS SECTION (Our Core Service Lines) */}
        <section id="solutions" className="py-24 bg-brand-cream/60 border-b border-neutral-200 relative overflow-hidden">
          {/* Subtle glowing elements */}
          <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-brand-teal/4 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-emerald-500/2 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            
            {/* Header: Visual layout optimized for 3-second comprehension */}
            <div className="text-left max-w-2xl mb-16 space-y-4">
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-brand-navy leading-tight">
                Our core service lines
              </h2>
              <p className="text-brand-neutralgray text-sm md:text-base leading-relaxed font-normal">
                Every model we deploy is engineered to dramatically reduce resource overhead, maximize workflow efficiency, and lead by example with clean, scalable technical execution.
              </p>
            </div>

            {/* Grid of 4 clean, extremely scan-friendly service cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {SOLUTIONS.map((sol) => (
                <div 
                  key={sol.id}
                  className="border border-neutral-200 bg-white rounded-2xl p-5 md:p-6 flex flex-col justify-between transition-all duration-300 hover:border-brand-teal/30 hover:shadow-xs relative overflow-hidden text-left group"
                >
                  <div className="space-y-4">
                    {/* Header bar */}
                    <div className="flex justify-between items-center">
                      <div className="bg-brand-navy text-white p-2.5 rounded-lg">
                        {sol.id === 'dedicated-hubs' && <Users className="w-4 h-4" />}
                        {sol.id === 'cto-as-a-service' && <Cpu className="w-4 h-4" />}
                        {sol.id === 'api-integrations' && <Code className="w-4 h-4" />}
                        {sol.id === 'operational-efficiency' && <TrendingUp className="w-4 h-4" />}
                      </div>
                      <span className="font-mono text-[9px] text-brand-navy font-bold uppercase tracking-wider bg-brand-warmgray border border-neutral-200/80 px-2 py-0.5 rounded">
                        {sol.label}
                      </span>
                    </div>

                    {/* Simplified descriptions for 3-second understanding */}
                    <div className="space-y-1.5">
                      <h3 className="font-display text-lg font-bold tracking-tight text-brand-navy">
                        {sol.title}
                      </h3>
                      <p className="text-xs text-brand-neutralgray leading-relaxed font-normal">
                        {sol.description}
                      </p>
                    </div>

                    {/* Quick Bullet List */}
                    <ul className="space-y-2 pt-3 border-t border-neutral-100">
                      {sol.benefits.map((benefit, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2 text-xs text-brand-neutralgray leading-relaxed font-normal">
                          <Check className="w-3.5 h-3.5 text-brand-teal shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 mt-4 border-t border-neutral-100">
                    <button
                      onClick={() => openBooking({ teamSize: '1-3 developers', techStack: sol.title })}
                      className="text-xs font-bold text-brand-navy hover:text-brand-teal transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <span>Inquire about this</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* WHY MOXELLE SECTION (Strategic Differentiation) */}
        <section id="why-moxelle" className="py-24 bg-brand-cream border-b border-neutral-200 relative overflow-hidden">
          {/* Subtle decorative elements */}
          <div className="absolute top-[-10%] right-[-10%] w-[450px] h-[450px] bg-brand-teal/4 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-brand-teal/2 rounded-full blur-[110px] pointer-events-none" />

          <div className="max-w-6xl mx-auto px-6 relative z-10">
            
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-brand-navy">
                Built different. Built to last.
              </h2>
              <p className="text-brand-neutralgray text-sm md:text-base max-w-lg mx-auto">
                Why technical founders choose Moxelle over unmanaged freelance networks or legacy brokers.
              </p>
            </div>

            {/* Grid of 6 High-Fidelity Differentiator cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Card 1: Zero Entity */}
              <div className="bg-white border border-neutral-200 rounded-2xl p-6 md:p-8 space-y-4 hover:border-brand-teal/20 hover:shadow-xs transition-all duration-300 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-navy text-white flex items-center justify-center shadow-3xs">
                    <Building className="w-5 h-5" />
                  </div>
                  <h4 className="font-sans font-bold text-sm text-brand-navy">
                    Zero Local Legal Entity
                  </h4>
                  <p className="text-xs text-brand-neutralgray leading-relaxed font-normal">
                    Tap into Europe's finest talent pool without regional payroll liability, incorporation costs, or complicated tax declarations.
                  </p>
                </div>
              </div>

              {/* Card 2: Seniority */}
              <div className="bg-white border border-neutral-200 rounded-2xl p-6 md:p-8 space-y-4 hover:border-brand-teal/20 hover:shadow-xs transition-all duration-300 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-navy text-white flex items-center justify-center shadow-3xs">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h4 className="font-sans font-bold text-sm text-brand-navy">
                    Verified Seniority Only
                  </h4>
                  <p className="text-xs text-brand-neutralgray leading-relaxed font-normal">
                    We bypass high-turnover junior staff. We actively screen and onboard software developers with rich computer science backgrounds and verified seniority.
                  </p>
                </div>
              </div>

              {/* Card 3: Collab */}
              <div className="bg-white border border-neutral-200 rounded-2xl p-6 md:p-8 space-y-4 hover:border-brand-teal/20 hover:shadow-xs transition-all duration-300 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-navy text-white flex items-center justify-center shadow-3xs">
                    <Users className="w-5 h-5" />
                  </div>
                  <h4 className="font-sans font-bold text-sm text-brand-navy">
                    Embedded Collaboration
                  </h4>
                  <p className="text-xs text-brand-neutralgray leading-relaxed font-normal">
                    Your Moxelle developers are embedded directly into your tools (Slack, Jira, GitHub) and operate under your internal leadership.
                  </p>
                </div>
              </div>

              {/* Card 4: Ownership */}
              <div className="bg-white border border-neutral-200 rounded-2xl p-6 md:p-8 space-y-4 hover:border-brand-teal/20 hover:shadow-xs transition-all duration-300 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-navy text-white flex items-center justify-center shadow-3xs">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h4 className="font-sans font-bold text-sm text-brand-navy">
                    Extreme Code Ownership
                  </h4>
                  <p className="text-xs text-brand-neutralgray leading-relaxed font-normal">
                    We match our incentives directly with your product shipping milestones. No blame-shifting or generic ticket pushing.
                  </p>
                </div>
              </div>

              {/* Card 5: Scale */}
              <div className="bg-white border border-neutral-200 rounded-2xl p-6 md:p-8 space-y-4 hover:border-brand-teal/20 hover:shadow-xs transition-all duration-300 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-navy text-white flex items-center justify-center shadow-3xs">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <h4 className="font-sans font-bold text-sm text-brand-navy">
                    Flexible Scale Controls
                  </h4>
                  <p className="text-xs text-brand-neutralgray leading-relaxed font-normal">
                    Adapt seamlessly to changing requirements. Easily scale the team size, add specialist seats, or adjust resources based on sprint backlogs.
                  </p>
                </div>
              </div>

              {/* Card 6: Continuity */}
              <div className="bg-white border border-neutral-200 rounded-2xl p-6 md:p-8 space-y-4 hover:border-brand-teal/20 hover:shadow-xs transition-all duration-300 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-navy text-white flex items-center justify-center shadow-3xs">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h4 className="font-sans font-bold text-sm text-brand-navy">
                    Long-Term Continuity
                  </h4>
                  <p className="text-xs text-brand-neutralgray leading-relaxed font-normal">
                    We cultivate a high-retention culture globally with competitive compensation, clear technical career paths, and beautiful workspace ecosystems.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* IP PROTECTION & SECURITY TRUST BANNER */}
        <section className="py-20 bg-brand-navy text-white relative overflow-hidden border-y border-neutral-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_45%)] pointer-events-none" />
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-5 space-y-6 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[9px] font-extrabold uppercase tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5 animate-pulse" />
                  <span>Airtight Compliance</span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
                  Intellectual property &amp; security is our <span className="text-emerald-400 font-display italic font-medium">Top 1 priority.</span>
                </h2>
                <p className="text-neutral-400 text-xs md:text-sm leading-relaxed font-normal">
                  We guarantee total legal and operational safety. Every developer is employed under strict legal frameworks ensuring that your proprietary assets, source code, and trade secrets remain exclusively yours.
                </p>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 space-y-3 text-left">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h4 className="font-sans font-bold text-sm text-white">
                    Contractual IP Assignment
                  </h4>
                  <p className="text-[11px] text-neutral-400 leading-relaxed font-normal">
                    100% of the code, patents, and technical documentations written by your Moxelle developers are contractually assigned directly to your firm under international master service agreements.
                  </p>
                </div>

                <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 space-y-3 text-left">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h4 className="font-sans font-bold text-sm text-white">
                    Dedicated Secure Workspaces
                  </h4>
                  <p className="text-[11px] text-neutral-400 leading-relaxed font-normal">
                    Moxelle engineers operate from premium, access-controlled physical offices equipped with high-spec developer workstations, modern security infrastructure, and secure networks.
                  </p>
                </div>

                <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 space-y-3 text-left">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <h4 className="font-sans font-bold text-sm text-white">
                    Direct Code Repository Ownership
                  </h4>
                  <p className="text-[11px] text-neutral-400 leading-relaxed font-normal">
                    No agency-side storage or proxy tools. Developers connect directly to your GitHub, GitLab, or cloud environments using security protocols, active SSH keys, and multi-factor authentication (MFA).
                  </p>
                </div>

                <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 space-y-3 text-left">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h4 className="font-sans font-bold text-sm text-white">
                    Non-Disclosure Agreements
                  </h4>
                  <p className="text-[11px] text-neutral-400 leading-relaxed font-normal">
                    All engineers sign comprehensive, legally vetted NDAs and corporate IP protections before their first day of system onboarding, maintaining direct accountability.
                  </p>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* PROCESS ROADMAP SECTION */}
        <section id="how-it-works" className="py-24 bg-white border-t border-neutral-200">
          <div className="max-w-6xl mx-auto px-6">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 text-left">
              <div className="space-y-4">
                <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-brand-navy">
                  Our structured matching process
                </h2>
              </div>
              <p className="text-brand-neutralgray max-w-sm text-sm font-normal">
                How we go from initial backlog mapping to full-time, integrated developer sprints in under 21 days.
              </p>
            </div>

            {/* Step Roadmap Timeline */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative text-left">
              {PROCESS_STEPS.map((step) => (
                <div key={step.number} className="relative space-y-4">
                  {/* Step Number Badge */}
                  <div className="flex justify-between items-center">
                    <span className="font-display font-bold text-5xl text-brand-teal/15">
                      0{step.number}
                    </span>
                    <span className="font-mono text-[10px] font-semibold bg-brand-warmgray text-brand-teal px-2.5 py-1 rounded border border-neutral-200">
                      {step.duration}
                    </span>
                  </div>

                  <h3 className="font-sans font-bold text-base text-brand-navy">
                    {step.title}
                  </h3>
                  <p className="text-xs text-brand-neutralgray leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* FAQ SECTION */}
        <section id="faq" className="py-24 bg-brand-cream border-t border-neutral-200 relative overflow-hidden">
          <div className="absolute top-1/3 left-[-10%] w-[500px] h-[500px] bg-brand-teal/4 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
              
              {/* Left Column: Contextual Confidence & Trust Panel */}
              <div className="lg:col-span-5 space-y-8 text-left">
                <div className="space-y-4">
                  <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-brand-navy leading-tight">
                    Answers on operations, legal, & IP
                  </h2>
                  <p className="text-brand-neutralgray text-sm md:text-base leading-relaxed font-normal">
                    Everything you need to know about setting up, administering, and scaling your dedicated engineering hub with complete peace of mind.
                  </p>
                </div>
              </div>

              {/* Right Column: Accordion */}
              <div className="lg:col-span-7 divide-y divide-neutral-200/80 border-t border-b border-neutral-200/80">
                {FAQ_ITEMS.map((item, index) => {
                  const isOpen = openFaqIndex === index;
                  return (
                    <div
                      key={index}
                      className="group transition-colors duration-200"
                    >
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                        className="w-full text-left py-7 flex justify-between items-start gap-6 cursor-pointer group"
                      >
                        <div className="flex gap-4 items-start">
                          <span className={`font-mono text-xs font-semibold shrink-0 mt-1 transition-colors duration-300 ${
                            isOpen ? 'text-brand-teal' : 'text-neutral-400 group-hover:text-brand-navy'
                          }`}>
                            0{index + 1}
                          </span>
                          <span className={`font-sans font-bold text-base md:text-lg tracking-tight leading-snug transition-colors duration-200 ${
                            isOpen ? 'text-brand-teal' : 'text-brand-navy group-hover:text-brand-teal'
                          }`}>
                            {item.question}
                          </span>
                        </div>

                        <div className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                          isOpen 
                            ? 'bg-brand-teal border-brand-teal text-white rotate-180' 
                            : 'bg-white border-neutral-200 text-neutral-400 group-hover:border-neutral-300 group-hover:text-brand-navy'
                        }`}>
                          <ChevronDown className="w-3.5 h-3.5 stroke-[2]" />
                        </div>
                      </button>

                      {isOpen && (
                        <div className="pl-8 pr-4 pb-7 text-xs md:text-sm text-brand-neutralgray leading-relaxed font-normal text-left">
                          {item.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </section>

        {/* FINAL HERO CTA SECTION */}
        <section className="bg-brand-navy text-white py-24 border-t border-neutral-900 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-brand-teal/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-4xl mx-auto px-6 text-center space-y-8 relative z-10">
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight max-w-2xl mx-auto leading-tight">
              Ready to scale your product or team?
            </h2>
            <p className="text-neutral-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed font-normal">
              Let's connect. Meet us, tell us your engineering pain points, and get friendly, honest advice on how to build your perfect team setup—completely free.
            </p>
            <div className="pt-4 flex flex-col items-center gap-3">
              <button
                onClick={() => openBooking()}
                className="w-full sm:w-auto bg-brand-teal hover:bg-brand-teal-dark text-white font-semibold text-sm px-8 py-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Let's Talk — Get Free Advice</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <span className="text-xs text-neutral-500 font-mono">
                No commitments or sales pitches. Just direct, helpful engineering insights.
              </span>
            </div>
          </div>
        </section>

          </>
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Booking Scheduler Modal */}
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
        prefilled={prefilledBooking} 
      />

      {/* Floating Bottom-Right Corner Chat Notification */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col items-end">
        {isChatOpen && (
          <div 
            onClick={() => {
              if (chatTimerRef.current) {
                clearTimeout(chatTimerRef.current);
                chatTimerRef.current = null;
              }
            }}
            className="mb-3 w-80 bg-white border border-neutral-200 rounded-2xl p-4 shadow-xl relative overflow-hidden text-left animate-fadeIn"
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-brand-pastelred" />
            
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setIsChatOpen(false);
              }}
              className="absolute top-3 right-3 text-neutral-400 hover:text-brand-navy transition-colors cursor-pointer p-1 rounded-full hover:bg-neutral-100"
            >
              <X className="w-3.5 h-3.5" />
            </button>

            <div className="flex gap-3 items-start mt-1">
              <div className="relative shrink-0 mt-0.5">
                <img
                  src={chatProfile?.avatar || "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100&h=100"}
                  alt={chatProfile?.name || "Elena K."}
                  className="w-10 h-10 rounded-full object-cover border border-neutral-200"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full ring-2 ring-white" />
              </div>

              <div className="space-y-2">
                <div>
                  <h5 className="text-xs font-bold text-brand-navy font-sans">{chatProfile?.name || "Elena K."}</h5>
                  <span className="text-[10px] text-brand-neutralgray font-mono block leading-tight font-medium">{chatProfile?.title || "Sourcing Lead"}</span>
                </div>
                <p className="text-xs text-brand-neutralgray leading-relaxed font-normal">
                  Hey! I'm a senior engineer ready to integrate into your Slack, stands, and repositories to accelerate your backlog. Let's connect!
                </p>
                
                <div className="flex gap-2 pt-1">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openBooking({ teamSize: '1 senior developer', techStack: `${chatProfile?.name || 'Any'} (${chatProfile?.title || 'Senior Developer'})` });
                      setIsChatOpen(false);
                    }}
                    className="bg-brand-teal hover:bg-brand-teal-dark text-white font-semibold text-[10px] px-3 py-1.5 rounded-lg transition-all cursor-pointer shadow-3xs"
                  >
                    Schedule Call
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openBooking({ teamSize: '1 senior developer', techStack: `${chatProfile?.name || 'Any'} (${chatProfile?.title || 'Senior Developer'})` });
                      setIsChatOpen(false);
                    }}
                    className="bg-neutral-100 hover:bg-neutral-200 text-brand-navy font-bold text-[10px] px-3 py-1.5 rounded-lg transition-all cursor-pointer"
                  >
                    Let's Chat
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Launcher Button */}
        <button
          onClick={toggleChat}
          className={`w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg cursor-pointer relative transition-all duration-300 ${
            isChatOpen 
              ? 'bg-brand-navy hover:bg-brand-navy' 
              : 'bg-brand-teal hover:bg-brand-teal-dark ring-4 ring-brand-teal/10'
          }`}
        >
          {isChatOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <div className="relative">
              <MessageSquare className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full ring-2 ring-white" />
            </div>
          )}
        </button>
      </div>

    </div>
  );
}
