/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { INSTAGRAM_REELS } from '../data';
import { Play, Flame, Heart, Eye, ArrowUpRight } from 'lucide-react';

export default function ReelsShowcase() {
  return (
    <section id="reels" className="py-24 bg-[#2F2A24] text-white relative bg-noise">
      
      {/* Editorial Decorative Details */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-[#C97A1D]/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 left-10 w-96 h-96 rounded-full bg-[#3E5C4A]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#DDCBB2] inline-block mb-3">
            Digital Micro-Insights
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white font-light leading-tight">
            Instagram Reels Showcase
          </h2>
          <div className="w-12 h-[2px] bg-[#DDCBB2] mx-auto my-6" />
          <p className="text-sm sm:text-base text-[#DDCBB2]/80 font-sans font-light">
            We compress massive papers of modern biological science into visually stunning 60-second stories. Browse the latest stories from our catalog.
          </p>
        </div>

        {/* Reels Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {INSTAGRAM_REELS.map((reel, index) => (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              key={reel.id}
              className="bg-white/5 backdrop-blur-xs rounded-2xl border border-white/10 overflow-hidden hover:border-[#DDCBB2]/50 hover:bg-white/10 transition-all hover:shadow-xl group"
            >
              <a
                href={reel.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:no-underline select-none"
              >
                {/* Visual Thumbnail Frame */}
                <div className="relative aspect-video sm:aspect-16/10 overflow-hidden bg-black flex items-center justify-center">
                  <img
                    referrerPolicy="no-referrer"
                    src={reel.thumbnailUrl}
                    alt={reel.title}
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Hover play circles */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-[#DDCBB2]/90 text-[#2F2A24] flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-[#C97A1D] group-hover:text-white transition-all duration-300">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>
                  </div>

                  {/* Social Counters floating badge */}
                  <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-[10px] font-mono tracking-widest text-[#DDCBB2]">
                    <div className="flex items-center gap-1">
                      <Heart className="w-3 h-3 text-[#C97A1D]" />
                      <span>{reel.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-3 h-3 text-[#3E5C4A]" />
                      <span>{reel.views} Views</span>
                    </div>
                  </div>
                </div>

                {/* Info and Caption area */}
                <div className="p-5 sm:p-6 space-y-3 text-left">
                  <h3 className="text-md sm:text-lg font-serif font-bold text-white group-hover:text-[#DDCBB2] transition-colors leading-snug">
                    {reel.title}
                  </h3>
                  <p className="text-xs text-white/70 line-clamp-2 leading-relaxed font-sans font-light">
                    {reel.captionPreview}
                  </p>
                  
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#C97A1D] flex items-center gap-1 pt-2">
                    <span>Watch full doc on IG</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Global CTA */}
        <div className="text-center">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex flex-col items-center gap-4 bg-white/5 border border-white/10 p-6 sm:p-8 rounded-3xl max-w-xl mx-auto"
          >
            <span className="text-xs uppercase tracking-[0.25em] text-[#DDCBB2] font-semibold">
              Join Our Global Sangha (Community)
            </span>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans font-light mb-2">
              Over 100,000 mindful minds are currently reconstructing their lifestyle models by learning the science inside traditional Indian habits. Reach out on Instagram to follow along daily.
            </p>
            
            <a
              href="https://www.instagram.com/india.se.bharat.tak/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#DDCBB2] text-[#2F2A24] hover:bg-white hover:scale-102 font-bold uppercase tracking-wider text-xs rounded-full transition-all flex items-center gap-2 shadow-lg shadow-black/25"
            >
              <span>Follow @india.se.bharat.tak</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
