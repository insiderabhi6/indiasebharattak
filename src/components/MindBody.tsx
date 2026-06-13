/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MIND_BODY } from '../data';
import {
  Activity,
  Wind,
  Sparkles,
  Timer,
  BookOpen,
  ArrowRight,
  Heart,
  Eye,
  Shuffle
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<any>> = {
  Activity,
  Wind,
  Sparkles
};

export default function MindBody() {
  const [activePracticeId, setActivePracticeId] = useState<string | null>(null);

  return (
    <section id="mind-body" className="py-24 bg-[#F8F5F0] bg-noise relative overflow-hidden">
      
      {/* Editorial Decorative Overlays */}
      <div className="absolute right-0 top-0 translate-x-1/4 w-96 h-96 rounded-full bg-[#E9DFD2] opacity-30 blur-3xl pointer-events-none" />
      <div className="absolute left-10 bottom-20 w-80 h-80 rounded-full bg-[#3E5C4A]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C97A1D] inline-block mb-3">
            Holistic Realignment
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#2F2A24] font-light leading-tight">
            Mind & Body Equilibrium
          </h2>
          <div className="w-12 h-[2px] bg-[#C97A1D] mx-auto my-6" />
          <p className="text-sm sm:text-base text-[#2F2A24]/75 font-sans font-light">
            Modern wellness often treats symptoms in isolation. Classical systems map the mind and body as linked circuits. Explore safe somatic tools for cognitive reset and emotional balance.
          </p>
        </div>

        {/* Dynamic Card Display Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MIND_BODY.map((practice, index) => {
            const Icon = iconMap[practice.iconName] || Sparkles;
            const isViewing = activePracticeId === practice.id;

            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={practice.id}
                className="bg-white rounded-2xl border border-[#E9DFD2] hover:border-[#DDCBB2] transition-all hover:shadow-md flex flex-col justify-between overflow-hidden group"
              >
                
                {/* Content Area */}
                <div className="p-6 sm:p-8 space-y-6">
                  
                  {/* Top Header */}
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-[#F8F5F0] text-[#C97A1D] border border-[#E9DFD2] group-hover:bg-[#C97A1D] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    
                    <div className="flex items-center gap-1 text-xs text-[#2F2A24]/50 font-mono">
                      <Timer className="w-3.5 h-3.5" />
                      <span>{practice.duration}</span>
                    </div>
                  </div>

                  {/* Text Description */}
                  <div className="space-y-3">
                    <h3 className="text-lg sm:text-xl font-serif font-bold text-[#2F2A24]">
                      {practice.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#2F2A24]/75 leading-relaxed font-sans font-light">
                      {practice.description}
                    </p>
                  </div>

                </div>

                {/* Lower Action Row */}
                <div className="bg-[#F8F5F0]/40 px-6 py-4 border-t border-[#E9DFD2] flex justify-between items-center bg-noise">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#2F2A24]/60">
                    Somatic Lesson
                  </span>
                  
                  <button
                    onClick={() => setActivePracticeId(practice.id)}
                    className="text-xs font-semibold uppercase tracking-wider text-[#C97A1D] hover:text-[#A86414] focus:outline-none flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Practice Exercise</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Interactive Mind-Body Exercises Drawer Overlay Modal */}
        <AnimatePresence>
          {activePracticeId && (
            (() => {
              const activePractice = MIND_BODY.find((p) => p.id === activePracticeId);
              if (!activePractice) return null;
              const PracticeIcon = iconMap[activePractice.iconName] || Sparkles;

              return (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                  
                  {/* Backdrop Close Filter */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setActivePracticeId(null)}
                    className="absolute inset-0 bg-[#2F2A24]/60 backdrop-blur-xs"
                  />

                  {/* Card Content Holder */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 10 }}
                    className="relative bg-white w-full max-w-2xl rounded-2xl shadow-xl overflow-hidden border border-[#E9DFD2] z-10 p-6 sm:p-10"
                  >
                    
                    {/* Header line detail */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-[#C97A1D]/10 text-[#C97A1D] rounded-lg">
                          <PracticeIcon className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-[#C97A1D]">
                            Practical Guide
                          </span>
                          <h4 className="text-sm font-semibold text-[#2F2A24]/50 leading-none block">
                            Mind & Body Resets
                          </h4>
                        </div>
                      </div>

                      <button
                        onClick={() => setActivePracticeId(null)}
                        className="text-xs font-bold uppercase tracking-wider text-[#2F2A24]/40 hover:text-[#2F2A24] focus:outline-none"
                      >
                        [ Close ]
                      </button>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#2F2A24] border-b border-[#E9DFD2] pb-4 mb-6">
                      {activePractice.exerciseTitle}
                    </h3>

                    {/* Sequenced exercises */}
                    <div className="space-y-4 mb-6">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#2F2A24]/50">
                        Step-by-Step Directions
                      </span>
                      <ol className="space-y-3">
                        {activePractice.exerciseSteps.map((step, idx) => (
                          <li key={idx} className="flex gap-3 text-sm text-[#2F2A24] leading-relaxed">
                            <span className="w-5 h-5 text-[10px] font-bold font-mono rounded-full bg-[#DDCBB2] text-[#2F2A24] flex items-center justify-center shrink-0 mt-0.5">
                              {idx + 1}
                            </span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>

                    {/* Pro Tips */}
                    <div className="bg-[#3E5C4A]/5 rounded-xl p-5 border border-[#3E5C4A]/10 space-y-1.5 mb-6">
                      <h5 className="text-xs font-bold uppercase tracking-widest text-[#3E5C4A] flex items-center gap-1.5">
                        <Heart className="w-3.5 h-3.5" />
                        <span>Practice Tips</span>
                      </h5>
                      <ul className="list-disc pl-4 space-y-1 text-xs text-[#2F2A24]/85 leading-relaxed">
                        {activePractice.tips.map((tip, idx) => (
                          <li key={idx}>{tip}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Dismiss Button */}
                    <div className="flex justify-end">
                      <button
                        onClick={() => setActivePracticeId(null)}
                        className="px-6 py-2.5 rounded-full bg-[#2F2A24] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#C97A1D] transition-colors"
                      >
                        Done, I am practicing
                      </button>
                    </div>

                  </motion.div>
                </div>
              );
            })()
          )}
        </AnimatePresence>

        {/* Minimal Secondary grid addressing Yoga basics and daily balance */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Yoga basics card */}
          <div className="bg-white rounded-2xl border border-[#E9DFD2] p-6 sm:p-8 flex gap-5 items-start">
            <div className="p-3.5 rounded-xl bg-[#3E5C4A]/10 text-[#3E5C4A]">
              <Shuffle className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h4 className="text-md font-serif font-bold text-[#2F2A24]">
                Yoga Basics & Spinal Radiance
              </h4>
              <p className="text-xs sm:text-sm text-[#2F2A24]/75 leading-relaxed">
                Asanas are physical geometries that align the spine to minimize neural compression. A simple daily flow of Marjariasana (Cat-Cow) and Adho Mukha Svanasana (Down Dog) triggers parasympathetic dominance, relieving lower back tension and nourishing vital organs.
              </p>
            </div>
          </div>

          {/* Daily balance card */}
          <div className="bg-white rounded-2xl border border-[#E9DFD2] p-6 sm:p-8 flex gap-5 items-start">
            <div className="p-3.5 rounded-xl bg-[#3E5C4A]/10 text-[#3E5C4A]">
              <Heart className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h4 className="text-md font-serif font-bold text-[#2F2A24]">
                Mindfulness & Emotional Resonance
              </h4>
              <p className="text-xs sm:text-sm text-[#2F2A24]/75 leading-relaxed">
                Emotional stability (Sthitaprajnata) is achieved by observing emotions as temporary biochemical ripples rather than defining identities. Practice silent 'Sakshi Bhava' (observant non-judgment) for just 5 minutes daily to de-escalate amygdala reactions.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
