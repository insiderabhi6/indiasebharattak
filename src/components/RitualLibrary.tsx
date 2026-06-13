/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RITUAL_CATEGORIES } from '../data';
import {
  Sun,
  SunDim,
  Smile,
  ShieldAlert,
  Wind,
  Hand,
  VolumeX,
  Gauge,
  Tv,
  Compass,
  Layers,
  Flame,
  CloudRain,
  Snowflake,
  Sparkles,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<any>> = {
  Sun,
  SunDim,
  Smile,
  ShieldAlert,
  Wind,
  Hand,
  VolumeX,
  Gauge,
  Tv,
  Compass,
  Layers,
  Flame,
  CloudRain,
  Snowflake
};

export default function RitualLibrary() {
  const [activeCategoryId, setActiveCategoryId] = useState(RITUAL_CATEGORIES[0].id);
  const [selectedPracticeId, setSelectedPracticeId] = useState<string | null>(null);

  const activeCategory = RITUAL_CATEGORIES.find((cat) => cat.id === activeCategoryId) || RITUAL_CATEGORIES[0];

  return (
    <section id="rituals" className="py-24 bg-white relative">
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#F8F5F0]/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#3E5C4A] inline-block mb-3">
            An Ancestral Daily Protocol
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#2F2A24] font-light leading-tight">
            The Ritual Library
          </h2>
          <div className="w-12 h-[2px] bg-[#3E5C4A] mx-auto my-6" />
          <p className="text-sm sm:text-base text-[#2F2A24]/75 font-sans font-light">
            A comprehensive catalog of ancient self-care habits classified by time of day and geographic seasons. Pick one practice to begin restructuring your health.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 sm:mb-16">
          {RITUAL_CATEGORIES.map((cat) => {
            const active = cat.id === activeCategoryId;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategoryId(cat.id);
                  setSelectedPracticeId(null); // Reset select details
                }}
                className={`relative px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  active
                    ? 'text-white'
                    : 'text-[#2F2A24] bg-[#F8F5F0] hover:bg-[#E9DFD2]/60 border border-[#E9DFD2]'
                }`}
              >
                {active && (
                  <motion.div
                    layoutId="libraryTabBg"
                    className="absolute inset-0 bg-[#3E5C4A] rounded-full"
                    transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                  />
                )}
                <span className="relative z-10">{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Category Narrative */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-[#C97A1D] mb-1">
            Core Philosophy
          </p>
          <p className="text-sm font-serif italic text-[#2F2A24]/80">
            "{activeCategory.description}"
          </p>
        </div>

        {/* Two-Column Layout details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Practice List Selection (Left) */}
          <div className="lg:col-span-5 space-y-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.3 }}
                className="space-y-3"
              >
                {activeCategory.items.map((practice) => {
                  const Icon = iconMap[practice.iconName] || Sparkles;
                  const isSelected = selectedPracticeId === practice.id || (!selectedPracticeId && activeCategory.items[0].id === practice.id);
                  
                  return (
                    <div
                      key={practice.id}
                      onClick={() => setSelectedPracticeId(practice.id)}
                      className={`p-5 rounded-xl border cursor-pointer select-none transition-all flex items-center justify-between ${
                        isSelected
                          ? 'bg-[#3E5C4A]/5 border-[#3E5C4A] shadow-xs'
                          : 'bg-white border-[#E9DFD2] hover:border-[#DDCBB2]'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`p-2 rounded-lg ${
                          isSelected ? 'bg-[#3E5C4A] text-white' : 'bg-[#F8F5F0] text-[#2F2A24]'
                        }`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="text-left">
                          <h4 className="text-sm font-semibold text-[#2F2A24] leading-tight">
                            {practice.title}
                          </h4>
                          <span className="text-[10px] text-[#2F2A24]/50 hover:text-[#3E5C4A] font-medium uppercase tracking-wider block mt-1">
                            Click to study protocol
                          </span>
                        </div>
                      </div>
                      
                      <ArrowRight className={`w-4 h-4 text-[#3E5C4A] transition-transform duration-300 ${isSelected ? 'translate-x-1 opacity-100' : 'opacity-30'}`} />
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Practice Detail Display (Right) */}
          <div className="lg:col-span-7 bg-white">
            <AnimatePresence mode="wait">
              {(() => {
                const currentPractice = activeCategory.items.find((it) => it.id === (selectedPracticeId || activeCategory.items[0].id)) || activeCategory.items[0];
                const PracticeIcon = iconMap[currentPractice.iconName] || Sparkles;

                return (
                  <motion.div
                    key={currentPractice.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="rounded-xl border border-[#E9DFD2] p-6 sm:p-8 space-y-6 relative"
                  >
                    {/* Visual Stamp */}
                    <div className="absolute top-5 right-5 text-[#3E5C4A]/5">
                      <PracticeIcon className="w-24 h-24 stroke-[0.5]" />
                    </div>

                    {/* Meta */}
                    <div className="flex items-center gap-3">
                      <div className="px-3 py-1 rounded-full bg-[#3E5C4A]/10 text-[#3E5C4A] text-[10px] font-bold uppercase tracking-widest">
                        Protocol Profile
                      </div>
                      <span className="text-xs text-[#2F2A24]/40 font-mono">
                        ID: {currentPractice.id}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#2F2A24] border-b border-[#E9DFD2] pb-5">
                      {currentPractice.title}
                    </h3>

                    {/* Step Section */}
                    <div className="space-y-4">
                      <div className="space-y-1.5">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#C97A1D]">
                          What to Do
                        </span>
                        <p className="text-sm sm:text-base text-[#2F2A24] font-sans leading-relaxed">
                          {currentPractice.whatToDo}
                        </p>
                      </div>

                      <div className="space-y-1.5 border-l-2 border-[#3E5C4A]/30 pl-4 bg-[#3E5C4A]/2 p-3 rounded-r-lg">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#3E5C4A]">
                          Why it Works (The Science)
                        </span>
                        <p className="text-sm text-[#2F2A24]/90 font-sans leading-relaxed">
                          {currentPractice.whyItWorks}
                        </p>
                      </div>
                    </div>

                    {/* Bullet Points Benefits */}
                    <div className="space-y-2.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#2F2A24]/50">
                        Observed Benefits
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {currentPractice.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-[#2F2A24]/95">
                            <CheckCircle2 className="w-4 h-4 text-[#3E5C4A] shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Beginner Guidance Box */}
                    <div className="bg-[#F8F5F0] rounded-xl p-5 border border-[#E9DFD2] space-y-2">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-[#C97A1D] flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Beginner Starter Plan</span>
                      </h4>
                      <p className="text-xs leading-relaxed text-[#2F2A24]/90">
                        {currentPractice.howToStart}
                      </p>
                    </div>

                  </motion.div>
                );
              })()}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
