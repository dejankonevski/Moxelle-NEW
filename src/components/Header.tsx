/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Sparkles, ArrowRight, Menu, X, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';

interface HeaderProps {
  onOpenBooking: () => void;
}

export default function Header({ onOpenBooking }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-brand-cream/85 backdrop-blur-md border-b border-neutral-200/50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a 
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleScroll('hero');
          }}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <Logo variant="dark" className="scale-[0.9] origin-left group-hover:scale-95 transition-transform" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold text-brand-neutralgray">
          <button 
            onClick={() => handleScroll('what-we-do')}
            className="hover:text-brand-charcoal transition-colors cursor-pointer"
          >
            Capabilities
          </button>
          <button 
            onClick={() => handleScroll('solutions')}
            className="hover:text-brand-charcoal transition-colors cursor-pointer"
          >
            Services
          </button>
          <button 
            onClick={() => handleScroll('talent-directory')}
            className="hover:text-brand-charcoal transition-colors cursor-pointer"
          >
            Elite Talent
          </button>
          <button 
            onClick={() => handleScroll('cost-efficiency')}
            className="hover:text-brand-charcoal transition-colors cursor-pointer"
          >
            Financials
          </button>
          <button 
            onClick={() => handleScroll('how-it-works')}
            className="hover:text-brand-charcoal transition-colors cursor-pointer"
          >
            Our Process
          </button>
          <button 
            onClick={() => handleScroll('faq')}
            className="hover:text-brand-charcoal transition-colors cursor-pointer"
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
