/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Users, Clock, Sparkles, Code, ChevronRight, CheckCircle2 } from 'lucide-react';
import { TALENT_PROFILES } from '../data';
import { TalentProfile } from '../types';

interface TalentDirectoryProps {
  onInquire: (prefilled: { teamSize: string; techStack: string } | null) => void;
}

export default function TalentDirectory({ onInquire }: TalentDirectoryProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'backend' | 'frontend' | 'fullstack' | 'ai-data'>('all');

  const filteredTalent = TALENT_PROFILES.filter((profile) => {
    if (activeTab === 'all') return true;
    return profile.roleCategory === activeTab;
  });

  return (
    <section id="talent-directory" className="py-28 bg-white border-b border-neutral-200 relative overflow-hidden">
      {/* Decorative ambient color spots */}
      <div className="absolute top-1/3 right-[-10%] w-[450px] h-[450px] bg-brand-teal/4 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-[-10%] w-[400px] h-[400px] bg-blue-500/3 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-brand-teal bg-brand-teal/5 border border-brand-teal/20 px-3.5 py-1.5 rounded-full font-bold inline-block">
            Elite Engineering Directory
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-brand-navy">
            Deploy vetted, senior-tier capacity
          </h2>
          <p className="text-brand-neutralgray text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Review live profiles of active senior engineers ready to join your daily Slack stands, push code, and sync with your team.
          </p>
        </div>

        {/* Directory Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All Engineers' },
            { id: 'backend', label: 'Backend (Go / Python)' },
            { id: 'frontend', label: 'Frontend (React / Next.js)' },
            { id: 'fullstack', label: 'Fullstack (TS / Node)' },
            { id: 'ai-data', label: 'AI & Data Pipelines' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`font-mono text-[11px] font-bold py-2.5 px-4 rounded-xl border transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-brand-navy border-brand-navy text-white shadow-xs'
                  : 'bg-brand-warmgray/50 border-neutral-200 text-brand-neutralgray hover:bg-neutral-50 hover:text-brand-navy'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Talent Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredTalent.map((profile, idx) => (
            <div
              key={profile.name}
              className="bg-brand-cream/40 border border-neutral-200 rounded-[2rem] p-6 md:p-8 flex flex-col justify-between hover:border-brand-teal/30 hover:bg-white hover:shadow-xl transition-all duration-300 relative overflow-hidden text-left group"
            >
              {/* Card visual elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-brand-teal/2 to-transparent rounded-full blur-2xl pointer-events-none" />
              
              <div className="space-y-6">
                {/* Header Information */}
                <div className="flex gap-4 md:gap-5 items-start">
                  <img
                    src={profile.avatar}
                    alt={profile.name}
                    className="w-16 h-16 rounded-2xl object-cover border border-neutral-200 shadow-3xs group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-display font-bold text-lg text-brand-navy">
                        {profile.name}
                      </h4>
                      <span className="text-[9px] font-mono bg-brand-teal/10 text-brand-teal px-2 py-0.5 rounded-sm font-semibold uppercase tracking-wider">
                        Vetted Elite
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-brand-teal leading-tight">
                      {profile.title}
                    </p>
                    <div className="flex items-center gap-1 text-[11px] font-mono text-brand-neutralgray">
                      <span>Experience: {profile.experience}</span>
                      <span>&bull;</span>
                      <span>{profile.time}</span>
                    </div>
                  </div>
                </div>

                {/* SPRINT IMPACT HIGHLIGHT CARD */}
                <div className="bg-white border border-neutral-200/80 rounded-2xl p-4 space-y-2 relative shadow-3xs">
                  <span className="font-mono text-[9px] text-neutral-400 uppercase tracking-wider font-extrabold block">
                    Verified Production Impact
                  </span>
                  <p className="text-xs text-brand-neutralgray leading-relaxed font-normal">
                    &ldquo;{profile.impact}&rdquo;
                  </p>
                </div>

                {/* Skill Badges */}
                <div className="space-y-2">
                  <span className="font-mono text-[9px] text-neutral-400 uppercase tracking-wider font-bold block">
                    Core Competencies
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {profile.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[10px] font-mono bg-white text-brand-neutralgray border border-neutral-200/80 px-2.5 py-1 rounded-lg font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer action */}
              <div className="mt-8 pt-6 border-t border-neutral-200/60 flex items-center justify-between">
                <span className="text-[10px] font-mono text-brand-neutralgray flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-emerald-500" />
                  Full Timezone Overlap
                </span>
                
                <button
                  onClick={() => onInquire({ teamSize: '1 senior developer', techStack: `${profile.name} (${profile.title})` })}
                  className="bg-brand-navy hover:bg-brand-teal hover:text-white text-white font-bold text-xs py-2.5 px-4.5 rounded-xl transition-all duration-200 cursor-pointer flex items-center gap-1 group/btn"
                >
                  <span>Inquire about {profile.name.split(' ')[0]}</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Directory Footnote */}
        <div className="mt-16 text-center max-w-xl mx-auto space-y-4">
          <p className="text-xs text-brand-neutralgray leading-relaxed">
            Need specialized roles or alternative tech configurations (e.g., Rust, Kubernetes, Salesforce)? We maintain active talent benches in Skopje to build your customized engineering hub in under 21 days.
          </p>
          <button
            onClick={() => onInquire(null)}
            className="text-xs font-bold text-brand-teal hover:text-brand-teal-dark inline-flex items-center gap-1 cursor-pointer"
          >
            <span>Request customized resource blueprint</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}
