/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Sparkles, ArrowRight, Menu, X, ArrowUpRight, ChevronDown, ShieldCheck, Clock, Users, Cpu, Code, Award, Terminal } from 'lucide-react';
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
          
          <button 
            onClick={() => handleScroll('solutions')}
            className="hover:text-brand-navy transition-colors cursor-pointer py-5 text-[12px]"
          >
            Engineering Hubs
          </button>

          <button 
            onClick={() => handleScroll('how-it-works')}
            className="hover:text-brand-navy transition-colors cursor-pointer py-5 text-[12px]"
          >
            How It Works
          </button>

          <button 
            onClick={() => handleScroll('why-moxelle')}
            className="hover:text-brand-navy transition-colors cursor-pointer py-5 text-[12px]"
          >
            Case Studies
          </button>

          <button 
            onClick={() => handleScroll('what-we-do')}
            className="hover:text-brand-navy transition-colors cursor-pointer py-5 text-[12px]"
          >
            About
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
            <span>Insights</span>
            {currentView === 'blog' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-teal rounded-full" />
            )}
          </button>
        </nav>

        {/* Desktop CTA Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onOpenBooking}
            className="bg-brand-charcoal hover:bg-brand-charcoal/90 text-white font-semibold text-xs px-5 py-2.5 rounded-lg transition-all cursor-pointer shadow-3xs flex items-center gap-1.5"
          >
            <span>Book a Call</span>
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
              onClick={() => handleScroll('solutions')}
              className="text-left hover:text-brand-charcoal transition-colors py-1 border-b border-neutral-100 cursor-pointer"
            >
              Engineering Hubs
            </button>
            <button 
              onClick={() => handleScroll('how-it-works')}
              className="text-left hover:text-brand-charcoal transition-colors py-1 border-b border-neutral-100 cursor-pointer"
            >
              How It Works
            </button>
            <button 
              onClick={() => handleScroll('why-moxelle')}
              className="text-left hover:text-brand-charcoal transition-colors py-1 border-b border-neutral-100 cursor-pointer"
            >
              Case Studies
            </button>
            <button 
              onClick={() => handleScroll('what-we-do')}
              className="text-left hover:text-brand-charcoal transition-colors py-1 border-b border-neutral-100 cursor-pointer"
            >
              About
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
              Insights
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="bg-brand-charcoal hover:bg-brand-charcoal/90 text-white font-bold text-xs py-3.5 rounded-xl transition-all cursor-pointer text-center shadow-xs mt-2 flex items-center justify-center gap-1.5"
            >
              <span>Book a Call</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
