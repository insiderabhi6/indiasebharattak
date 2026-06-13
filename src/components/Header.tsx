/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#science', label: 'Science' },
  { href: '#rituals', label: 'Ritual Library' },
  { href: '#mind-body', label: 'Mind & Body' },
  { href: '#daily-life', label: 'Daily Life' },
  { href: '#reels', label: 'Reels' },
  { href: '#blog', label: 'Insights' },
  { href: '#contact', label: 'Contact' }
];

export default function Header() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Monitor scroll for headers stickiness and active section tracking
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 120;
      for (const link of navLinks) {
        const el = document.querySelector(link.href);
        if (el) {
          const top = (el as HTMLElement).offsetTop;
          const height = el.getBoundingClientRect().height;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.href.substring(1));
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      window.scrollTo({
        top: (targetElement as HTMLElement).offsetTop - 90,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      id="main-nav"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F8F5F0]/95 backdrop-blur-md shadow-md border-b border-[#E9DFD2] py-2'
          : 'bg-[#F8F5F0]/90 backdrop-blur-md border-b border-[#E9DFD2]/30 py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Section */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="India Se Bharat Tak Home"
          >
            {/* Highly customized SVG Recreating the Brand Logo */}
            <div className="flex items-center gap-2.5 select-none py-1">
              <svg
                id="brand-logo-svg"
                className="w-10 h-10 text-[#C97A1D] group-hover:scale-105 transition-transform duration-300 shrink-0"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Layered elegant lotus petals with high contrast rich saffron color */}
                <path
                  d="M50 20C47 30 45 38 50 54C55 38 53 30 50 20Z"
                  fill="#C97A1D"
                />
                <path
                  d="M50 24C44 32 37 40 45 52C48 42 49 32 50 24Z"
                  fill="#C97A1D"
                  opacity="0.95"
                />
                <path
                  d="M50 24C56 32 63 40 55 52C52 42 51 32 50 24Z"
                  fill="#C97A1D"
                  opacity="0.95"
                />
                <path
                  d="M50 30C40 36 29 44 40 54C43 45 46 36 50 30Z"
                  fill="#C97A1D"
                  opacity="0.85"
                />
                <path
                  d="M50 30C60 36 71 44 60 54C57 45 54 36 50 30Z"
                  fill="#C97A1D"
                  opacity="0.85"
                />
                <path
                  d="M50 38C34 40 22 56 36 56C42 48 44 42 50 38Z"
                  fill="#C97A1D"
                  opacity="0.75"
                />
                <path
                  d="M50 38C66 40 78 56 64 56C58 48 56 42 50 38Z"
                  fill="#C97A1D"
                  opacity="0.75"
                />
                <path
                  d="M32 58C42 61 58 61 68 58C62 55 38 55 32 58Z"
                  fill="#2F2A24"
                  opacity="0.5"
                />
              </svg>
              
              <div className="leading-none text-left font-serif shrink-0">
                <span className="text-[10px] uppercase tracking-[0.15em] text-[#C97A1D] font-bold block mb-0.5">
                  India <span className="font-sans font-light lowercase text-xs text-[#2F2A24]">से</span>
                </span>
                <div className="text-xs uppercase tracking-[0.1em] text-[#2F2A24] font-extrabold flex items-center gap-1 leading-none">
                  <span>भारत</span> <span className="font-sans font-normal text-[8px] tracking-normal text-slate-500">TAK</span>
                </div>
              </div>
            </div>

            {/* Separator */}
            <div className="hidden sm:block h-8 w-[1px] bg-[#E9DFD2]"></div>

            {/* Slogan */}
            <span className="hidden sm:inline font-serif text-[11px] text-[#C97A1D] italic tracking-wide leading-tight">
              जुड़ो अपनी जड़ों से...
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const active = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`relative px-3 py-2 text-xs font-medium uppercase tracking-wider transition-colors duration-200 focus:outline-none ${
                    active ? 'text-[#C97A1D]' : 'text-[#2F2A24] hover:text-[#C97A1D]'
                  }`}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#C97A1D]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* CTA Link (Instagram Page Link) */}
          <div className="hidden lg:block">
            <a
              href="https://www.instagram.com/india.se.bharat.tak/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#C97A1D] hover:bg-[#A86414] rounded-full transition-colors duration-200 shadow-sm shadow-[#C97A1D]/20 hover:shadow-md"
            >
              <span>Join Instagram</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Trigger Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#2F2A24] hover:text-[#C97A1D] transition-colors focus:outline-none"
              aria-label="Toggle Mobile Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden border-t border-[#E9DFD2] bg-[#F8F5F0]/95 backdrop-blur-md overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-1.5">
              {navLinks.map((link) => {
                const active = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`block px-4 py-3 text-sm font-medium uppercase tracking-wider rounded-lg transition-colors ${
                      active
                        ? 'bg-[#E9DFD2]/50 text-[#C97A1D]'
                        : 'text-[#2F2A24] hover:bg-[#E9DFD2]/30 hover:text-[#C97A1D]'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
              <div className="pt-4 px-4">
                <a
                  href="https://www.instagram.com/india.se.bharat.tak/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-1.5 px-4 py-3 text-sm font-semibold uppercase tracking-wider text-white bg-[#C97A1D] hover:bg-[#A86414] rounded-xl transition-all"
                >
                  <span>Follow @india.se.bharat.tak</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
