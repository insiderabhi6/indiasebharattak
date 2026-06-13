/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { FOUNDER_STORY } from '../data';
import { Award, Compass, BookOpen, Quote } from 'lucide-react';
// @ts-ignore
import maheshPhoto from '../assets/images/mahesh_mimani_face_1781344760752.jpg';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#F8F5F0]/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center md:text-left mb-16 md:flex md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C97A1D] block mb-3">
              The Genesis
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#2F2A24] font-light leading-tight">
              Bridging Ancient Living <br />
              with Modern Biochemistry
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm text-[#2F2A24]/60 max-w-sm border-l-2 border-[#DDCBB2] pl-4 italic">
            "We do not inherit traditions as simple commandments. We inherit them as advanced somatic templates."
          </p>
        </div>

        {/* Narrative & Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          
          {/* Visual Portrait Card Area (Left) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#E9DFD2] bg-[#F8F5F0] p-8 sm:p-12">
              
              {/* Background abstract texture */}
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[#DDCBB2]/30 blur-2xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-44 h-44 rounded-full bg-[#3E5C4A]/10 blur-2xl pointer-events-none" />

              {/* Decorative Indian Pattern Accent */}
              <div className="absolute top-4 right-4 text-[#C97A1D]/15">
                <svg className="w-16 h-16" viewBox="0 0 100 100" fill="currentColor">
                  {/* Subtle mandala fragment */}
                  <path d="M50 0 C55 25 75 45 100 50 C75 55 55 75 50 100 C45 75 25 55 0 50 C25 45 45 25 50 0Z" />
                </svg>
              </div>

              {/* Founder Profile Visual */}
              <div className="relative mb-8 flex flex-col items-center text-center">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-[#C97A1D] to-[#DDCBB2] p-[3px] shadow-md mb-4 relative">
                  <div className="w-full h-full rounded-full bg-[#F8F5F0] flex items-center justify-center overflow-hidden">
                    <img
                      src={maheshPhoto}
                      alt="Mahesh Mimani"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute bottom-0 right-0 bg-[#3E5C4A] text-white p-1.5 rounded-full shadow-xs">
                    <Compass className="w-4 h-4" />
                  </div>
                </div>
                
                <h3 className="text-xl font-serif font-semibold text-[#2F2A24]">{FOUNDER_STORY.name}</h3>
                <p className="text-xs uppercase tracking-wider text-[#C97A1D] font-medium">{FOUNDER_STORY.title}</p>
              </div>

              {/* Founder quote */}
              <div className="relative border-t border-[#E9DFD2] pt-6 flex gap-3">
                <Quote className="w-8 h-8 text-[#DDCBB2] shrink-0" />
                <p className="text-sm font-serif italic text-[#2F2A24]/90 leading-relaxed">
                  "{FOUNDER_STORY.quote}"
                </p>
              </div>

              {/* Key Achievements Badges */}
              <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-[#E9DFD2]">
                <div className="flex items-center gap-2.5">
                  <Award className="w-5 h-5 text-[#3E5C4A]" />
                  <div className="leading-tight">
                    <div className="text-sm font-bold text-[#2F2A24]">100K+</div>
                    <div className="text-[10px] text-[#2F2A24]/60 uppercase tracking-widest">Followers</div>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <BookOpen className="w-5 h-5 text-[#C97A1D]" />
                  <div className="leading-tight">
                    <div className="text-sm font-bold text-[#2F2A24]">100%</div>
                    <div className="text-[10px] text-[#2F2A24]/60 uppercase tracking-widest">Science-Tested</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Narrative Content (Right Column) */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="space-y-6">
              {FOUNDER_STORY.narrative.map((item, index) => (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  key={index}
                  className="p-6 rounded-xl border border-[#E9DFD2]/65 hover:border-[#DDCBB2]/85 hover:bg-[#F8F5F0]/30 transition-all group"
                >
                  <h3 className="text-lg font-serif font-semibold text-[#2F2A24] mb-3 flex items-center gap-3">
                    <span className="w-6 h-[1px] bg-[#C97A1D] group-hover:w-10 transition-all duration-300" />
                    {item.heading}
                  </h3>
                  <p className="text-sm sm:text-base text-[#2F2A24]/85 leading-relaxed font-sans font-light">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>

        </div>

        {/* Brand Timeline Segment */}
        <div className="border-t border-[#E9DFD2] pt-20">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#3E5C4A]">The Progression</span>
            <h3 className="text-2xl sm:text-3xl font-serif text-[#2F2A24] font-medium mt-1">Foundational Milestones</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Elegant connection bar in background */}
            <div className="hidden md:block absolute top-[28px] left-[15%] right-[15%] h-[1px] bg-[#E9DFD2]" />

            {FOUNDER_STORY.timeline.map((mile, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                key={idx}
                className="relative bg-[#F8F5F0]/50 rounded-xl p-6 border border-[#E9DFD2] hover:bg-[#F8F5F0] hover:shadow-xs transition-all text-center flex flex-col items-center"
              >
                {/* Year Badge */}
                <div className="w-14 h-14 rounded-full bg-[#E9DFD2]/60 flex items-center justify-center font-serif text-base font-semibold text-[#C97A1D] border-2 border-white shadow-xs mb-4 z-10 transition-transform duration-300 hover:scale-110">
                  {mile.year}
                </div>
                
                <h4 className="text-sm font-semibold text-[#2F2A24] mb-1.5 uppercase tracking-wide">
                  {mile.title}
                </h4>
                
                <p className="text-xs text-[#2F2A24]/75 leading-relaxed font-light">
                  {mile.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
