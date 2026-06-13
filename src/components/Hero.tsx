/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Compass, Play, ArrowDown } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string, offset = 90) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-noise bg-[#F8F5F0]"
    >
      {/* Elegantly Polished Minimal Background Vignette for High Text-Contrast */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(221,203,178,0.15)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Intro Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E9DFD2] bg-white/80 backdrop-blur-sm shadow-xs"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#C97A1D]" />
          <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#2F2A24]">
            Bridging Science and Sanctity
          </span>
        </motion.div>

        {/* Brand Mission Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light text-[#2F2A24] tracking-tight leading-[1.1] mb-6 max-w-4xl"
        >
          Rediscover <span className="font-serif italic font-medium text-[#C97A1D] relative">Bharat</span> <br className="hidden sm:inline" />
          Through Science & Tradition
        </motion.h1>

        {/* Substated Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-lg sm:text-xl text-[#2F2A24]/80 font-sans font-light max-w-2xl mb-12 leading-relaxed"
        >
          Ancient wisdom, modern understanding, and practical habits designed for healthy, everyday modern life. Learn the profound physiological logic of ancestral designs.
        </motion.p>

        {/* Buttons Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 min-w-full sm:min-w-[auto]"
        >
          <button
            onClick={() => scrollToSection('science')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white bg-[#C97A1D] hover:bg-[#A86414] rounded-full transition-all hover:shadow-lg shadow-sm hover:translate-y-[-2px]"
          >
            <Compass className="w-4 h-4" />
            <span>Explore Traditions</span>
          </button>
          
          <button
            onClick={() => scrollToSection('reels')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-[#2F2A24] bg-[#DDCBB2]/50 hover:bg-[#DDCBB2]/80 border border-[#E9DFD2] rounded-full transition-all hover:translate-y-[-2px]"
          >
            <Play className="w-4 h-4 fill-current text-[#2F2A24]" />
            <span>Watch Reels</span>
          </button>
        </motion.div>

        {/* Flow down guidance */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#2F2A24]/60 cursor-pointer hover:text-[#C97A1D] transition-colors"
          onClick={() => scrollToSection('about')}
        >
          <span>Begin the Journey</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-[#C1955E]" />
        </motion.div>

      </div>
    </section>
  );
}
