/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Mail, Instagram, Youtube, Compass, ArrowUp } from 'lucide-react';

const linksColumn1 = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#science', label: 'Science' },
  { href: '#rituals', label: 'Ritual Library' }
];

const linksColumn2 = [
  { href: '#mind-body', label: 'Mind & Body' },
  { href: '#daily-life', label: 'Action Zone' },
  { href: '#reels', label: 'Reels Gallery' },
  { href: '#blog', label: 'Insights Publication' }
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      window.scrollTo({
        top: (el as HTMLElement).offsetTop - 90,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-[#F8F5F0] border-t border-[#E9DFD2] py-16 bg-noise relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper footer details */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 sm:gap-16 pb-12 mb-12 border-b border-[#E9DFD2]">
          
          {/* Brand/Logo Area (Left 4 columns) */}
          <div className="md:col-span-4 space-y-6 text-left">
            <div className="flex items-center gap-3">
              <svg
                className="w-8 h-8 text-[#C97A1D]"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M50 20C47 30 45 38 50 54C55 38 53 30 50 20Z"
                  fill="#C97A1D"
                />
                <path
                  d="M50 24C44 32 37 40 45 52C48 42 49 32 50 24Z"
                  fill="#C97A1D"
                  opacity="0.8"
                />
                <path
                  d="M50 24C56 32 63 40 55 52C52 42 51 32 50 24Z"
                  fill="#C97A1D"
                  opacity="0.8"
                />
                <defs>
                  <linearGradient id="footer-lotus" x1="50" y1="20" x2="50" y2="56" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#C97A1D" />
                    <stop offset="100%" stopColor="#DDCBB2" />
                  </linearGradient>
                </defs>
              </svg>
              
              <div className="leading-none text-left font-serif select-none">
                <span className="text-[9px] uppercase tracking-wider text-[#C97A1D] font-bold">India <span className="font-sans font-light lowercase text-xs text-[#2F2A24]">से</span></span>
                <div className="text-xs uppercase tracking-[0.1em] text-[#2F2A24] font-extrabold flex items-center gap-0.5 leading-none mt-0.5">
                  <span>भारत</span> <span className="font-sans font-normal text-[8px] tracking-normal text-slate-500">TAK</span>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#2F2A24]/70 leading-relaxed font-sans font-light">
              India Se Bharat Tak is a dedicated digital research forum to decode traditional Indian habits, food protocols, and wellness templates using modern biological, physical, and chemical standards. We educate, we do not dictate.
            </p>

            <span className="inline-block text-xs font-serif italic text-[#C97A1D] tracking-wide">
              जुड़ो अपनी जड़ों से...
            </span>
          </div>

          {/* Quick links block 1 (Middle 3 columns) */}
          <div className="md:col-span-2 space-y-4 text-left">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#2F2A24]/40">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {linksColumn1.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-xs text-[#2F2A24]/80 hover:text-[#C97A1D] transition-colors font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links block 2 (Middle 3 columns) */}
          <div className="md:col-span-2 space-y-4 text-left">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#2F2A24]/40">
              Resources
            </h4>
            <ul className="space-y-2.5">
              {linksColumn2.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-xs text-[#2F2A24]/80 hover:text-[#C97A1D] transition-colors font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Channels / Outlets (Right 3 columns) */}
          <div className="md:col-span-4 space-y-4 text-left">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#2F2A24]/40">
              Interactive Connections
            </h4>
            
            <p className="text-xs text-[#2F2A24]/60 leading-relaxed font-sans font-light">
              Reach out and follow along on digital platforms for daily micro-documentary shorts explaining complex rituals.
            </p>

            {/* Icons grid */}
            <div className="flex items-center gap-3">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/india.se.bharat.tak/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Handle"
                className="p-2.5 h-10 w-10 flex items-center justify-center rounded-full border border-[#E9DFD2] bg-white text-[#2F2A24]/70 hover:text-[#C97A1D] hover:border-[#DDCBB2] transition-colors"
              >
                <Instagram className="w-5 h-5 shrink-0" />
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com/channel-mock"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube Channel"
                className="p-2.5 h-10 w-10 flex items-center justify-center rounded-full border border-[#E9DFD2] bg-white text-[#2F2A24]/70 hover:text-[#C97A1D] hover:border-[#DDCBB2] transition-colors"
              >
                <Youtube className="w-5 h-5 shrink-0" />
              </a>

              {/* Mail */}
              <a
                href="mailto:indiasebharattak@gmail.com"
                aria-label="Contact Email"
                className="p-2.5 h-10 w-10 flex items-center justify-center rounded-full border border-[#E9DFD2] bg-white text-[#2F2A24]/70 hover:text-[#C97A1D] hover:border-[#DDCBB2] transition-colors"
              >
                <Mail className="w-5 h-5 shrink-0" />
              </a>
            </div>
          </div>

        </div>

        {/* Lower footer copyright & scroll-to-top */}
        <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4">
          <span className="text-[10.5px] text-[#2F2A24]/40 font-sans font-light">
            © 2026 India Se Bharat Tak Publications. All rights reserved. Designed with clinical care for modern lifestyles.
          </span>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top of page"
            className="group flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-[#2F2A24]/50 hover:text-[#C97A1D] focus:outline-none cursor-pointer bg-white border border-[#E9DFD2] py-2 px-3.5 rounded-full hover:shadow-xs transition-shadow"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
