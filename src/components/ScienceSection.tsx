/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TRADITIONS_SCIENCE } from '../data';
import {
  Hand,
  DropletOff,
  Sun,
  Footprints,
  HeartHandshake,
  Timer,
  ChevronDown,
  BookOpen,
  BrainCircuit,
  GraduationCap,
  Lightbulb
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<any>> = {
  Hand,
  DropletOff,
  Sun,
  Footprints,
  HeartHandshake,
  Timer
};

export default function ScienceSection() {
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    if (expandedCardId === id) {
      setExpandedCardId(null);
    } else {
      setExpandedCardId(id);
    }
  };

  return (
    <section id="science" className="py-24 bg-[#F8F5F0] relative overflow-hidden bg-noise">
      
      {/* Background design circular graphics */}
      <div className="absolute top-1/2 left-0 -translate-x-1/2 w-80 h-80 rounded-full bg-[#DDCBB2]/15 blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 translate-x-1/3 w-[500px] h-[500px] rounded-full bg-[#3E5C4A]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C97A1D] inline-block mb-3">
            The Biochemistry of Rituals
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#2F2A24] font-light leading-tight">
            Science Behind Our Traditions
          </h2>
          <div className="w-12 h-[2px] bg-[#C97A1D] mx-auto my-6" />
          <p className="text-base sm:text-lg text-[#2F2A24]/75 font-sans font-light">
            We peel back layers of cultural metaphor to reveal the underlying neurological, biological, and physiological mechanics calculated by ancient Indian seers.
          </p>
        </div>

        {/* Interactive Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {TRADITIONS_SCIENCE.map((trad) => {
            const IconComponent = iconMap[trad.iconName] || BookOpen;
            const isExpanded = expandedCardId === trad.id;

            return (
              <motion.div
                layout="position"
                key={trad.id}
                className={`group rounded-xl border transition-all duration-300 overflow-hidden bg-white ${
                  isExpanded
                    ? 'border-[#C97A1D] shadow-md md:col-span-2 lg:col-span-3'
                    : 'border-[#E9DFD2] hover:border-[#DDCBB2] hover:shadow-md'
                }`}
              >
                
                {/* Header Row clickable */}
                <div
                  onClick={() => toggleExpand(trad.id)}
                  className="p-6 sm:p-8 cursor-pointer flex items-start gap-4 sm:gap-6 justify-between select-none"
                >
                  <div className="flex items-start gap-4 sm:gap-5">
                    {/* Floating animated icon box */}
                    <div className={`p-3.5 rounded-xl border shrink-0 transition-colors duration-300 ${
                      isExpanded
                        ? 'bg-[#C97A1D] border-[#C97A1D] text-white'
                        : 'bg-[#F8F5F0] border-[#E9DFD2] text-[#2F2A24] group-hover:bg-[#E9DFD2]/40'
                    }`}>
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <div className="space-y-1.5">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#C97A1D]">
                        Interactive Decode
                      </span>
                      <h3 className="text-lg sm:text-xl font-serif font-bold text-[#2F2A24] group-hover:text-[#C97A1D] transition-colors">
                        {trad.title}
                      </h3>
                      {!isExpanded && (
                        <p className="text-xs sm:text-sm text-[#2F2A24]/60 line-clamp-1 italic font-serif">
                          "{trad.traditionalBelief}"
                        </p>
                      )}
                    </div>
                  </div>

                  <div className={`p-1.5 rounded-full border border-[#E9DFD2] text-[#2F2A24]/60 self-center transition-transform duration-300 ${isExpanded ? 'rotate-180 bg-[#F8F5F0]' : 'group-hover:bg-[#F8F5F0]'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>

                {/* Expanding Block containing Science & Research */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="border-t border-[#E9DFD2]"
                    >
                      
                      {/* Interactive breakdown sections */}
                      <div className="p-6 sm:p-8 md:p-10 bg-[#F8F5F0]/30 space-y-8">
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                          
                          {/* Left: Culture and Belief */}
                          <div className="bg-white rounded-xl p-5 border border-[#E9DFD2] flex gap-4">
                            <div className="p-2 h-fit rounded-lg bg-[#DDCBB2]/30 text-[#C97A1D] shrink-0">
                              <BookOpen className="w-5 h-5" />
                            </div>
                            <div className="space-y-1.5">
                              <h4 className="text-xs font-bold uppercase tracking-wider text-[#2F2A24]/50">
                                Cultural Context & Belief
                              </h4>
                              <p className="font-serif italic text-[#2F2A24] text-sm leading-relaxed">
                                "{trad.traditionalBelief}"
                              </p>
                            </div>
                          </div>

                          {/* Right: Modern Research */}
                          <div className="bg-white rounded-xl p-5 border border-[#E9DFD2] flex gap-4">
                            <div className="p-2 h-fit rounded-lg bg-[#3E5C4A]/10 text-[#3E5C4A] shrink-0">
                              <GraduationCap className="w-5 h-5" />
                            </div>
                            <div className="space-y-1.5">
                              <h4 className="text-xs font-bold uppercase tracking-wider text-[#3E5C4A]/70">
                                Clinical Research / Legacy Studies
                              </h4>
                              <p className="text-[#2F2A24]/85 text-sm leading-relaxed">
                                {trad.researchSummary}
                              </p>
                            </div>
                          </div>

                        </div>

                        {/* Middle banner: Core Biochemistry */}
                        <div className="bg-[#3E5C4A]/5 rounded-xl p-6 border border-[#3E5C4A]/15 flex flex-col md:flex-row gap-5 items-start">
                          <div className="p-3 rounded-xl bg-[#3E5C4A] text-white shrink-0">
                            <BrainCircuit className="w-6 h-6" />
                          </div>
                          <div className="space-y-2">
                            <h4 className="text-xs font-bold uppercase tracking-widest text-[#3E5C4A] flex items-center gap-1.5">
                              <span>The Biomedical Machinery</span>
                              <span className="w-2 h-2 rounded-full bg-[#3E5C4A]/30" />
                              <span className="text-[10px] font-normal tracking-normal text-[#3E5C4A]/70 italic lowercase">vagus nerve & cellular signaling</span>
                            </h4>
                            <p className="text-sm text-[#2F2A24] leading-relaxed">
                              {trad.scientificExplanation}
                            </p>
                          </div>
                        </div>

                        {/* Bottom line: Action Takeaway */}
                        <div className="bg-[#C97A1D]/5 rounded-xl p-6 border border-[#C97A1D]/15 flex flex-col md:flex-row gap-5 items-start">
                          <div className="p-3 rounded-xl bg-[#C97A1D] text-white shrink-0">
                            <Lightbulb className="w-6 h-6" />
                          </div>
                          <div className="space-y-2">
                            <h4 className="text-xs font-bold uppercase tracking-widest text-[#C97A1D]">
                              Actionable Integration (How to Practice)
                            </h4>
                            <p className="text-sm text-[#2F2A24] leading-relaxed font-medium">
                              {trad.practicalTakeaway}
                            </p>
                          </div>
                        </div>

                        {/* Collapse Button inside */}
                        <div className="flex justify-end pt-3">
                          <button
                            onClick={() => setExpandedCardId(null)}
                            className="text-xs font-medium uppercase tracking-wider text-[#C97A1D] hover:text-[#A86414] focus:outline-none flex items-center gap-1"
                          >
                            <span>Collapse Card</span>
                            <ChevronDown className="w-3.5 h-3.5 rotate-180" />
                          </button>
                        </div>

                      </div>

                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
