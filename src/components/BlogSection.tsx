/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { EDITORIAL_POSTS } from '../data';
import { BlogPost } from '../types';
import { Search, Clock, Tag, BookOpen, Quote, ChevronRight, X, ArrowUpRight } from 'lucide-react';

export default function BlogSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [readingPost, setReadingPost] = useState<BlogPost | null>(null);

  // Collect all unique tags for filter controls
  const allTags = Array.from(new Set(EDITORIAL_POSTS.flatMap((post) => post.tags)));

  // Filtering articles
  const filteredPosts = EDITORIAL_POSTS.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true;

    return matchesSearch && matchesTag;
  });

  // Identify featured post (typically the first one which is longest)
  const featuredPost = EDITORIAL_POSTS[0];
  const secondaryPosts = filteredPosts.filter((post) => post.id !== featuredPost.id || searchQuery || selectedTag);

  return (
    <section id="blog" className="py-24 bg-white relative">
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#F8F5F0]/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title / Search layout */}
        <div className="border-b border-[#E9DFD2] pb-12 mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C97A1D] block mb-3">
              Research Documents
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#2F2A24] font-light leading-tight">
              Insights & Editorial Studies
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#2F2A24]/70 font-sans font-light">
              Peer-reviewed frameworks, clinical papers, and metabolic biochemistry studies backing ancestral routines. We write without fluff.
            </p>
          </div>

          {/* Elegant Search form */}
          <div className="relative w-full lg:max-w-xs shrink-0">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-[#2F2A24]/40">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              placeholder="Search scientific papers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-3 text-xs bg-[#F8F5F0] border border-[#E9DFD2] focus:border-[#C97A1D] rounded-full focus:outline-none transition-all text-[#2F2A24] font-sans"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#2F2A24]/40 hover:text-[#2F2A24]"
              >
                [ Clear ]
              </button>
            )}
          </div>
        </div>

        {/* Categories/Tags Scroller */}
        <div className="flex items-center gap-2 overflow-x-auto pb-6 mb-10 no-scrollbar select-none">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#2F2A24]/40 shrink-0 mr-2">
            Categories:
          </span>
          <button
            onClick={() => setSelectedTag(null)}
            className={`px-4 py-1.5 rounded-full text-[10px] font-semibold uppercase tracking-wider transition-colors cursor-pointer border shrink-0 ${
              !selectedTag
                ? 'bg-[#2F2A24] text-white border-[#2F2A24]'
                : 'bg-white border-[#E9DFD2] text-[#2F2A24]/80 hover:bg-[#F8F5F0]'
            }`}
          >
            All Papers
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-1.5 rounded-full text-[10px] font-semibold uppercase tracking-wider transition-colors cursor-pointer border shrink-0 ${
                selectedTag === tag
                  ? 'bg-[#C97A1D] text-white border-[#C97A1D]'
                  : 'bg-white border-[#E9DFD2] text-[#2F2A24]/85 hover:bg-[#F8F5F0]'
              }`}
            >
              #{tag}
            </button>
          ))}
        </div>

        {/* Main Feed Content */}
        <div className="space-y-16">
          
          {/* A. FEATURED ARTICLE BANNER (only shown if not actively filtering/searching) */}
          {!searchQuery && !selectedTag && (
            <div className="relative border border-[#E9DFD2] rounded-3xl overflow-hidden bg-[#F8F5F0]/30 shadow-xs hover:border-[#DDCBB2] transition-colors">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                
                {/* Left image block */}
                <div className="lg:col-span-6 relative overflow-hidden bg-black aspect-video lg:aspect-auto min-h-[300px]">
                  <img
                    referrerPolicy="no-referrer"
                    src={featuredPost.imageSrc}
                    alt={featuredPost.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-85 hover:scale-101 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Floating category badge top left */}
                  <div className="absolute top-4 left-4 bg-white shadow-xs text-[#2F2A24] font-mono text-[9px] uppercase tracking-widest px-3 py-1 rounded-full border border-[#E9DFD2]">
                    {featuredPost.category}
                  </div>
                </div>

                {/* Right text block */}
                <div className="lg:col-span-6 p-6 sm:p-10 md:p-12 flex flex-col justify-between space-y-6">
                  
                  {/* Meta headers */}
                  <div className="flex items-center gap-4 text-[10px] text-[#2F2A24]/50 font-mono">
                    <span className="bg-[#C97A1D]/10 text-[#C97A1D] uppercase tracking-widest px-2 py-0.5 rounded font-bold">
                      Featured Monograph
                    </span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-2xl sm:text-3xl font-serif text-[#2F2A24] cursor-pointer hover:text-[#C97A1D] transition-colors font-medium leading-tight" onClick={() => setReadingPost(featuredPost)}>
                      {featuredPost.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#2F2A24]/75 leading-relaxed font-sans font-light">
                      {featuredPost.excerpt}
                    </p>
                  </div>

                  {/* Highlights banner */}
                  <div className="bg-[#3E5C4A]/5 rounded-xl p-4 border border-[#3E5C4A]/10 text-xs text-[#2F2A24]/85 leading-normal flex gap-3 italic">
                    <span className="text-[#3E5C4A] font-bold">Scientific Basis:</span>
                    <span>{featuredPost.scientificBasis}</span>
                  </div>

                  {/* Bottom details */}
                  <div className="flex items-center justify-between border-t border-[#E9DFD2] pt-4">
                    <div className="flex items-center gap-2">
                       <span className="w-8 h-8 rounded-full bg-[#E9DFD2] flex items-center justify-center font-serif text-xs">🪷</span>
                       <div className="leading-none text-left">
                         <span className="text-xs font-semibold text-[#2F2A24] block">{featuredPost.author}</span>
                         <span className="text-[9px] text-[#2F2A24]/40 font-mono mt-0.5 block">{featuredPost.date}</span>
                       </div>
                    </div>

                    <button
                      onClick={() => setReadingPost(featuredPost)}
                      className="text-xs font-bold uppercase tracking-wider text-[#C97A1D] hover:text-[#A86414] focus:outline-none flex items-center gap-1"
                    >
                      <span>Read Deep Dive</span>
                      <ChevronRight className="w-4 h-4 text-[#C97A1D]" />
                    </button>
                  </div>

                </div>

              </div>
            </div>
          )}

          {/* B. SECONDARY ARTICLES GRID */}
          <div>
            {secondaryPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {secondaryPosts.map((post) => (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5 }}
                    key={post.id}
                    className="bg-white rounded-2xl border border-[#E9DFD2] p-6 sm:p-8 flex flex-col justify-between shadow-2xs hover:shadow-xs hover:border-[#DDCBB2] transition-all group"
                  >
                    <div className="space-y-4">
                      
                      {/* Meta info tags */}
                      <div className="flex items-center gap-3 text-[10px] text-[#2F2A24]/50 font-mono">
                        <span className="text-[#C97A1D] font-bold uppercase tracking-widest">{post.category}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E9DFD2]" />
                        <div className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <h3 className="text-lg sm:text-xl font-serif text-[#2F2A24] hover:text-[#C97A1D] cursor-pointer transition-colors font-semibold leading-snug" onClick={() => setReadingPost(post)}>
                        {post.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#2F2A24]/75 leading-relaxed font-sans font-light">
                        {post.excerpt}
                      </p>

                      {/* Scientific highlight banner */}
                      <div className="bg-[#3E5C4A]/5 rounded-xl p-3.5 border border-[#3E5C4A]/5 text-xs text-[#2F2A24]/90 pl-3 border-l-2 border-l-[#3E5C4A]">
                        <span className="font-bold text-[#3E5C4A]">Research Extract:</span> {post.scientificBasis}
                      </div>

                    </div>

                    {/* Bottom Author Segment */}
                    <div className="flex items-center justify-between border-t border-[#E9DFD2] pt-4 mt-6">
                      <div className="flex items-center gap-2">
                        <span className="w-7 h-7 rounded-full bg-[#F8F5F0] flex items-center justify-center font-serif text-xs">🪷</span>
                        <div className="leading-none text-left">
                          <span className="text-xs font-semibold text-[#2F2A24] block">{post.author}</span>
                          <span className="text-[9px] text-[#2F2A24]/40 font-mono mt-0.5 block">{post.date}</span>
                        </div>
                      </div>

                      <button
                        onClick={() => setReadingPost(post)}
                        className="text-xs font-bold uppercase tracking-wider text-[#C97A1D] hover:text-[#A86414] focus:outline-none flex items-center gap-0.5"
                      >
                        <span>Study Deep Dive</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-[#F8F5F0]/30 rounded-2xl border border-dashed border-[#E9DFD2]">
                <span className="text-2xl block mb-2">📭</span>
                <span className="text-sm font-semibold text-[#2F2A24]/60">No scientific papers found matching your query.</span>
                <button onClick={() => { setSearchQuery(''); setSelectedTag(null); }} className="text-xs font-bold uppercase tracking-wider text-[#C97A1D] hover:underline block mx-auto mt-4 focus:outline-none">
                  Reset Search Filters
                </button>
              </div>
            )}
          </div>

        </div>

      </div>

      {/* FULL WRITTEN EDITORIAL READER MODAL OVERLAY */}
      <AnimatePresence>
        {readingPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
            
            {/* Backdrop closers */}
            <motion.div
              initial={{ bg: 'transparent', opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setReadingPost(null)}
              className="absolute inset-0 bg-[#2F2A24]/70 backdrop-blur-xs"
            />

            {/* Narrative Body wrapper */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 15 }}
              className="relative bg-white w-full max-w-4xl h-[90vh] rounded-2xl shadow-2xl overflow-hidden border border-[#E9DFD2] z-10 flex flex-col justify-between"
            >
              
              {/* Top Sticky bar header */}
              <div className="bg-[#F8F5F0] border-b border-[#E9DFD2] px-6 sm:px-8 py-4 flex items-center justify-between bg-noise shadow-2xs shrink-0">
                <div className="flex items-center gap-3">
                  <BookOpen className="w-5 h-5 text-[#C97A1D]" />
                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-[#C97A1D]">
                      Deep Dive Scientific Paper
                    </span>
                    <span className="text-[10px] text-[#2F2A24]/50 font-mono block leading-none mt-0.5">
                      Subject: {readingPost.category}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setReadingPost(null)}
                  className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#2F2A24]/50 hover:text-[#2F2A24] focus:outline-none bg-white py-1.5 px-3 rounded-full border border-[#E9DFD2]"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>Exit Reader</span>
                </button>
              </div>

              {/* Scrollable Reader Content */}
              <div className="flex-1 overflow-y-auto px-6 py-8 sm:px-12 sm:py-12 space-y-8 select-text">
                
                {/* Meta details */}
                <div className="flex flex-wrap items-center gap-4 text-xs text-[#2F2A24]/50 font-mono border-b border-[#E9DFD2] pb-6">
                  <span>Author: {readingPost.author}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E9DFD2]" />
                  <span>Date: {readingPost.date}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E9DFD2]" />
                  <span>Reading: {readingPost.readTime}</span>
                </div>

                {/* Article Main Titles */}
                <h1 className="text-2xl sm:text-4xl font-serif text-[#2F2A24] leading-tight font-medium max-w-3xl">
                  {readingPost.title}
                </h1>

                {/* Visual Image if any */}
                <div className="relative aspect-video rounded-xl overflow-hidden border border-[#E9DFD2]">
                  <img
                    referrerPolicy="no-referrer"
                    src={readingPost.imageSrc}
                    alt={readingPost.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-90"
                    loading="lazy"
                  />
                </div>

                {/* Article Core Content - Beautiful Typography */}
                <article className="prose prose-stone max-w-none text-[#2F2A24] text-sm sm:text-base leading-relaxed space-y-6 font-sans font-light">
                  {readingPost.content.split('\n\n').map((paragraph, index) => {
                    // Check if it's a heading
                    if (paragraph.startsWith('###')) {
                      return (
                        <h3 key={index} className="text-lg sm:text-xl font-serif font-bold text-[#2F2A24] pt-4 block border-b border-[#F8F5F0] pb-1">
                          {paragraph.replace('###', '').trim()}
                        </h3>
                      );
                    }
                    // Check if it's a sub-heading or list items
                    if (paragraph.startsWith('*')) {
                      const items = paragraph.split('\n');
                      return (
                        <ul key={index} className="list-disc pl-6 space-y-2.5 text-xs sm:text-sm text-[#2F2A24] leading-relaxed">
                          {items.map((it, i) => (
                            <li key={i}>{it.replace('*', '').trim()}</li>
                          ))}
                        </ul>
                      );
                    }
                    if (paragraph.startsWith('1.')) {
                      const items = paragraph.split('\n');
                      return (
                        <ol key={index} className="list-decimal pl-6 space-y-2.5 text-xs sm:text-sm text-[#2F2A24] leading-relaxed">
                          {items.map((it, i) => (
                            <li key={i}>{it.replace(/^\d+\.\s*/, '').trim()}</li>
                          ))}
                        </ol>
                      );
                    }
                    return (
                      <p key={index} className="whitespace-pre-line text-sm sm:text-base">
                        {paragraph}
                      </p>
                    );
                  })}
                </article>

                {/* Scientific References Footnotes */}
                <div className="pt-8 border-t border-[#E9DFD2] space-y-3 shrink-0">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#2F2A24]/40 flex items-center gap-1">
                    <Quote className="w-3.5 h-3.5" />
                    <span>Scientific Citations & Bibliography</span>
                  </h4>
                  
                  <ol className="list-decimal pl-4 space-y-2 text-[11px] text-[#2F2A24]/60 italic font-sans leading-normal">
                    {readingPost.references.map((ref, idx) => (
                      <li key={idx}>{ref}</li>
                    ))}
                  </ol>
                </div>

              </div>

              {/* Bottom control bar */}
              <div className="bg-[#F8F5F0] border-t border-[#E9DFD2] px-6 sm:px-8 py-4 flex items-center justify-between shrink-0">
                <span className="text-[10px] text-[#2F2A24]/50 leading-none">
                  © 2026 India Se Bharat Tak Publications
                </span>

                <button
                  onClick={() => setReadingPost(null)}
                  className="px-6 py-2 bg-[#2F2A24] hover:bg-[#C97A1D] text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors focus:outline-none"
                >
                  Done, Close Reader
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
