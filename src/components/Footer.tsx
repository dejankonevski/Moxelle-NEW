/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Sparkles, ArrowUp, Github } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-midnight text-white pt-16 pb-12 border-t border-neutral-900 overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-6 space-y-12 relative z-10">
        
        {/* Brand & Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 text-left">
          
          {/* Logo Column */}
          <div className="md:col-span-5 space-y-4">
            <Logo variant="light" className="scale-[0.9] origin-left" />
            <p className="text-xs text-neutral-400 max-w-sm leading-relaxed font-normal">
              Moxelle is the dedicated engineering hub partner for growing SaaS and product companies. We assemble, employ, and manage elite remote developer teams in Skopje, North Macedonia—fully integrated into your workflows.
            </p>
          </div>

          {/* Links Column 1 */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="font-mono text-[10px] font-bold text-neutral-500 uppercase tracking-widest">
              CAPABILITIES
            </h5>
            <ul className="text-xs space-y-2 text-neutral-300">
              <li>
                <a href="#what-we-do" className="hover:text-brand-terracotta transition-colors">
                  Engineering Hubs
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-brand-terracotta transition-colors">
                  Fractional CTO Strategy
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-brand-terracotta transition-colors">
                  Middleware & API Systems
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="md:col-span-4 space-y-3">
            <h5 className="font-mono text-[10px] font-bold text-neutral-500 uppercase tracking-widest">
              OFFICE LOCATION
            </h5>
            <p className="text-xs text-neutral-300 leading-relaxed font-normal">
              Moxelle DOOEL Skopje<br />
              Skopje, North Macedonia<br />
              <span className="text-neutral-500 font-mono mt-1 block">CET / EST Alignment</span>
            </p>
          </div>

        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-neutral-800/60" />

        {/* Copyright and Top Trigger */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-[11px] text-neutral-400 gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-4 font-mono">
            <span>&copy; {new Date().getFullYear()} Moxelle. All rights reserved.</span>
            <span className="hidden sm:inline text-neutral-700">|</span>
            <span className="hover:text-white transition-colors">IP Contracts &amp; SLA Compliant</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white text-neutral-400 transition-colors font-mono font-semibold text-[10px] cursor-pointer bg-neutral-800 hover:bg-neutral-700 px-3 py-1.5 rounded-lg border border-neutral-700"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
