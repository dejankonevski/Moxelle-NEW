/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Sparkles, ArrowRight, Menu, X, ArrowUpRight, ChevronDown } from 'lucide-react';
import Logo from './Logo';

interface HeaderProps {
  onOpenBooking: () => void;
  currentView: 'home' | 'blog';
  onNavigateToHome: () => void;
  onNavigateToBlog: () => void;
}

export default function Header({ onOpenBooking, currentView, onNavigateToHome, onNavigateToBlog }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = (id: string) => {
    setMobileMenuOpen(false);
    if (currentView !== 'home') {
      onNavigateToHome();
      // wait a tiny bit for render
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-brand-cream/95 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a 
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            if (currentView === 'blog') {
              onNavigateToHome();
            } else {
              handleScroll('hero');
            }
          }}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <Logo variant="dark" className="transition-transform group-hover:scale-[1.03]" />
        </a>

        {/* Desktop Navigation Links with Elegant, High-Legibility Dropdowns */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs font-semibold text-brand-neutralgray">
          
          {/* Capabilities: Simple direct link, no redundant dropdown subitems */}
          <button 
            onClick={() => handleScroll('what-we-do')}
            className="hover:text-brand-navy transition-colors cursor-pointer py-5 text-[12px]"
          >
            Capabilities
          </button>

          {/* Services Dropdown */}
          <div className="relative group py-5">
            <button 
              onClick={() => handleScroll('solutions')}
              className="hover:text-brand-navy transition-colors cursor-pointer flex items-center gap-1.5 text-[12px]"
            >
              <span>Services</span>
              <ChevronDown className="w-3.5 h-3.5 text-neutral-400 group-hover:text-brand-navy group-hover:rotate-180 transition-all duration-300" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-80 bg-white border border-neutral-300 rounded-2xl shadow-2xl p-3.5 mt-1.5 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 text-left">
              <div className="absolute top-[-7px] left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-white rotate-45 border-t border-l border-neutral-300" />
              <div className="relative z-10 space-y-1.5">
                <button 
                  onClick={() => handleScroll('solutions')} 
                  className="w-full text-left px-4 py-3 rounded-xl hover:bg-neutral-50 hover:text-brand-teal transition-all text-left block group/item"
                >
                  <span className="block font-bold text-brand-navy text-[13px] group-hover/item:text-brand-teal">
                    Dedicated Engineering Hubs
                  </span>
                  <span className="text-[11px] text-brand-neutralgray font-medium leading-relaxed block mt-1">
                    Secure full-time direct remote extensions globally
                  </span>
                </button>
                <button 
                  onClick={() => handleScroll('solutions')} 
                  className="w-full text-left px-4 py-3 rounded-xl hover:bg-neutral-50 hover:text-brand-teal transition-all text-left block group/item"
                >
                  <span className="block font-bold text-brand-navy text-[13px] group-hover/item:text-brand-teal">
                    Fractional Tech Leadership
                  </span>
                  <span className="text-[11px] text-brand-neutralgray font-medium leading-relaxed block mt-1">
                    CTO-level system scaling, design audits, & advice
                  </span>
                </button>
                <button 
                  onClick={() => handleScroll('solutions')} 
                  className="w-full text-left px-4 py-3 rounded-xl hover:bg-neutral-50 hover:text-brand-teal transition-all text-left block group/item"
                >
                  <span className="block font-bold text-brand-navy text-[13px] group-hover/item:text-brand-teal">
                    API Systems & Middleware
                  </span>
                  <span className="text-[11px] text-brand-neutralgray font-medium leading-relaxed block mt-1">
                    High-throughput robust payment & data webhooks
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Elite Talent Dropdown */}
          <div className="relative group py-5">
            <button 
              onClick={() => handleScroll('talent-directory')}
              className="hover:text-brand-navy transition-colors cursor-pointer flex items-center gap-1.5 text-[12px]"
            >
              <span>Elite Talent</span>
              <ChevronDown className="w-3.5 h-3.5 text-neutral-400 group-hover:text-brand-navy group-hover:rotate-180 transition-all duration-300" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-72 bg-white border border-neutral-300 rounded-2xl shadow-2xl p-2.5 mt-1.5 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 text-left">
              <div className="absolute top-[-7px] left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-white rotate-45 border-t border-l border-neutral-300" />
              <div className="relative z-10 space-y-1">
                <button onClick={() => handleScroll('talent-directory')} className="w-full text-left px-4 py-2.5 hover:bg-neutral-50 hover:text-brand-teal transition-colors font-bold text-brand-navy text-[12.5px] block">
                  Staff Go & Cloud Architects
                </button>
                <button onClick={() => handleScroll('talent-directory')} className="w-full text-left px-4 py-2.5 hover:bg-neutral-50 hover:text-brand-teal transition-colors font-bold text-brand-navy text-[12.5px] block">
                  Lead Frontend Product Architects
                </button>
                <button onClick={() => handleScroll('talent-directory')} className="w-full text-left px-4 py-2.5 hover:bg-neutral-50 hover:text-brand-teal transition-colors font-bold text-brand-navy text-[12.5px] block">
                  Senior Node/TypeScript Engineers
                </button>
                <button onClick={() => handleScroll('talent-directory')} className="w-full text-left px-4 py-2.5 hover:bg-neutral-50 hover:text-brand-teal transition-colors font-bold text-brand-navy text-[12.5px] block">
                  Senior AI & Data Engineers
                </button>
              </div>
            </div>
          </div>

          <button 
            onClick={() => handleScroll('cost-efficiency')}
            className="hover:text-brand-navy transition-colors cursor-pointer py-5 text-[12px]"
          >
            Financials
          </button>
          <button 
            onClick={() => handleScroll('how-it-works')}
            className="hover:text-brand-navy transition-colors cursor-pointer py-5 text-[12px]"
          >
            Our Process
          </button>
          
          {/* Creative Modern Blog Button */}
          <button 
            onClick={() => {
              setMobileMenuOpen(false);
              onNavigateToBlog();
            }}
            className={`hover:text-brand-navy transition-all cursor-pointer py-5 text-[12px] relative font-bold ${
              currentView === 'blog' ? 'text-brand-teal' : 'text-brand-neutralgray'
            }`}
          >
            <span>Blog</span>
            {currentView === 'blog' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-teal rounded-full" />
            )}
          </button>

          <button 
            onClick={() => handleScroll('faq')}
            className="hover:text-brand-navy transition-colors cursor-pointer py-5 text-[12px]"
          >
            FAQ
          </button>
        </nav>

        {/* Desktop CTA Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onOpenBooking}
            className="bg-brand-charcoal hover:bg-brand-charcoal/90 text-white font-semibold text-xs px-5 py-2.5 rounded-lg transition-all cursor-pointer shadow-3xs flex items-center gap-1.5"
          >
            <span>Book a Strategy Call</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-brand-charcoal bg-white border border-neutral-200 p-2 rounded-lg hover:bg-neutral-50 cursor-pointer"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>

      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-brand-cream border-b border-neutral-200 shadow-lg absolute top-16 left-0 right-0 py-6 px-6 z-50 animate-fadeIn text-left">
          <div className="flex flex-col gap-5 text-sm font-semibold text-brand-neutralgray">
            <button 
              onClick={() => handleScroll('what-we-do')}
              className="text-left hover:text-brand-charcoal transition-colors py-1 border-b border-neutral-100 cursor-pointer"
            >
              Capabilities
            </button>
            <button 
              onClick={() => handleScroll('solutions')}
              className="text-left hover:text-brand-charcoal transition-colors py-1 border-b border-neutral-100 cursor-pointer"
            >
              Services
            </button>
            <button 
              onClick={() => handleScroll('talent-directory')}
              className="text-left hover:text-brand-charcoal transition-colors py-1 border-b border-neutral-100 cursor-pointer"
            >
              Elite Talent
            </button>
            <button 
              onClick={() => handleScroll('cost-efficiency')}
              className="text-left hover:text-brand-charcoal transition-colors py-1 border-b border-neutral-100 cursor-pointer"
            >
              Financials
            </button>
            <button 
              onClick={() => handleScroll('how-it-works')}
              className="text-left hover:text-brand-charcoal transition-colors py-1 border-b border-neutral-100 cursor-pointer"
            >
              Our Process
            </button>
            
            {/* Mobile Blog */}
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateToBlog();
              }}
              className={`text-left transition-colors py-1 border-b border-neutral-100 cursor-pointer font-bold ${
                currentView === 'blog' ? 'text-brand-teal' : 'hover:text-brand-charcoal'
              }`}
            >
              Blog Section
            </button>

            <button 
              onClick={() => handleScroll('faq')}
              className="text-left hover:text-brand-charcoal transition-colors py-1 border-b border-neutral-100 cursor-pointer"
            >
              FAQ
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="bg-brand-charcoal hover:bg-brand-charcoal/90 text-white font-bold text-xs py-3.5 rounded-xl transition-all cursor-pointer text-center shadow-xs mt-2 flex items-center justify-center gap-1.5"
            >
              <span>Book a Strategy Call</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
