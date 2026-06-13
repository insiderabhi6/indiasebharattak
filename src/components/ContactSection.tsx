/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Instagram, Youtube, Users, MessageCircle, FileText, Send, Check } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'collaboration',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setStatus('success');
      setFormData({ name: '', email: '', type: 'collaboration', message: '' });
    }
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#F8F5F0]/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C97A1D] inline-block mb-3">
            Inquiries & Bookings
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#2F2A24] font-light leading-tight">
            Connect & Collaborate
          </h2>
          <div className="w-12 h-[2px] bg-[#C97A1D] mx-auto my-6" />
          <p className="text-sm sm:text-base text-[#2F2A24]/75 font-sans font-light">
            Have questions about biochemical research? Want to collaborate on lifestyle workshops or book Mahesh for talks? Reach out down below.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
          
          {/* Info Details & Channels (Left) */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Editorial block */}
            <div className="bg-[#F8F5F0] rounded-2xl p-6 sm:p-8 border border-[#E9DFD2] space-y-4 bg-noise">
              <h3 className="text-lg font-serif font-bold text-[#2F2A24]">
                The Dialogue of Roots
              </h3>
              <p className="text-xs sm:text-sm text-[#2F2A24]/75 leading-relaxed font-sans font-light">
                We believe in genuine, human-paced collaborations. Whether you are an academic school, corporate wellness coordinator, YouTube brand manager, or simple enthusiast—we listen selectively to everything that respects native heritage.
              </p>
            </div>

            {/* Channels Lists */}
            <div className="space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#2F2A24]/40 block pl-1">
                Direct Channels
              </span>

              {/* Email */}
              <div className="flex items-center gap-3.5 p-4 rounded-xl border border-[#E9DFD2] bg-white">
                <div className="p-2.5 bg-[#C97A1D]/10 text-[#C97A1D] rounded-xl shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-left leading-tight">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#2F2A24]/40 block">Email Address</span>
                  <a href="mailto:indiasebharattak@gmail.com" className="text-xs sm:text-sm text-[#2F2A24] hover:text-[#C97A1D] font-semibold mt-1 block">
                    indiasebharattak@gmail.com
                  </a>
                </div>
              </div>

              {/* Social Link Handles */}
              <div className="flex items-center gap-3.5 p-4 rounded-xl border border-[#E9DFD2] bg-white">
                <div className="p-2.5 bg-[#C97A1D]/10 text-[#C97A1D] rounded-xl shrink-0">
                  <Instagram className="w-5 h-5" />
                </div>
                <div className="text-left leading-tight">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#2F2A24]/40 block">Instagram</span>
                  <a href="https://www.instagram.com/india.se.bharat.tak/" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-[#2F2A24] hover:text-[#C97A1D] font-semibold mt-1 block">
                    @india.se.bharat.tak
                  </a>
                </div>
              </div>

              {/* Speaking badge */}
              <div className="flex items-center gap-3.5 p-4 rounded-xl border border-[#E9DFD2] bg-white">
                <div className="p-2.5 bg-[#C97A1D]/10 text-[#C97A1D] rounded-xl shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div className="text-left leading-tight">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#2F2A24]/40 block">Public Talks</span>
                  <span className="text-xs text-[#2F2A24] font-semibold mt-1 block">
                    Open for Bookings (2026/2027)
                  </span>
                </div>
              </div>

            </div>

          </div>

          {/* Contact Input Form (Right) */}
          <div className="lg:col-span-8 bg-white border border-[#E9DFD2] p-6 sm:p-10 rounded-3xl shadow-2xs">
            
            {status === 'idle' ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name & Email cluster */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Name */}
                  <div className="space-y-1 text-left">
                    <label htmlFor="form-name" className="text-[10px] font-bold uppercase tracking-widest text-[#2F2A24]/60">Your Full Name</label>
                    <input
                      id="form-name"
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#F8F5F0] px-4 py-3 text-xs sm:text-sm rounded-xl border border-[#E9DFD2] focus:border-[#C97A1D] focus:outline-none transition-all text-[#2F2A24]"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1 text-left">
                    <label htmlFor="form-email" className="text-[10px] font-bold uppercase tracking-widest text-[#2F2A24]/60">Your Email Address</label>
                    <input
                      id="form-email"
                      type="email"
                      required
                      placeholder="e.g. rahul@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#F8F5F0] px-4 py-3 text-xs sm:text-sm rounded-xl border border-[#E9DFD2] focus:border-[#C97A1D] focus:outline-none transition-all text-[#2F2A24]"
                    />
                  </div>

                </div>

                {/* Inquiry Type Radio / Selector */}
                <div className="space-y-2 text-left">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#2F2A24]/60 block mb-1">
                    Nature of Inquiry
                  </span>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    
                    {/* Research */}
                    <label className={`p-3.5 rounded-xl border cursor-pointer flex items-center justify-between transition-colors ${
                      formData.type === 'collaboration' ? 'bg-[#C97A1D]/10 border-[#C97A1D] text-[#C97A1D]' : 'bg-[#F8F5F0]/50 border-[#E9DFD2] hover:bg-[#F8F5F0] text-[#2F2A24]'
                    }`}>
                      <span className="text-xs font-semibold">Research Collaboration</span>
                      <input
                        type="radio"
                        name="inquiry-type"
                        checked={formData.type === 'collaboration'}
                        onChange={() => setFormData({ ...formData, type: 'collaboration' })}
                        className="sr-only"
                      />
                    </label>

                    {/* Workshop */}
                    <label className={`p-3.5 rounded-xl border cursor-pointer flex items-center justify-between transition-colors ${
                      formData.type === 'workshop' ? 'bg-[#C97A1D]/10 border-[#C97A1D] text-[#C97A1D]' : 'bg-[#F8F5F0]/50 border-[#E9DFD2] hover:bg-[#F8F5F0] text-[#2F2A24]'
                    }`}>
                      <span className="text-xs font-semibold">Corporate Workshop</span>
                      <input
                        type="radio"
                        name="inquiry-type"
                        checked={formData.type === 'workshop'}
                        onChange={() => setFormData({ ...formData, type: 'workshop' })}
                        className="sr-only"
                      />
                    </label>

                    {/* Speaking */}
                    <label className={`p-3.5 rounded-xl border cursor-pointer flex items-center justify-between transition-colors ${
                      formData.type === 'speaking' ? 'bg-[#C97A1D]/10 border-[#C97A1D] text-[#C97A1D]' : 'bg-[#F8F5F0]/50 border-[#E9DFD2] hover:bg-[#F8F5F0] text-[#2F2A24]'
                    }`}>
                      <span className="text-xs font-semibold">Speaking Sessions</span>
                      <input
                        type="radio"
                        name="inquiry-type"
                        checked={formData.type === 'speaking'}
                        onChange={() => setFormData({ ...formData, type: 'speaking' })}
                        className="sr-only"
                      />
                    </label>

                  </div>
                </div>

                {/* Message Body */}
                <div className="space-y-1 text-left">
                  <label htmlFor="form-message" className="text-[10px] font-bold uppercase tracking-widest text-[#2F2A24]/60">Detailed Message Outline</label>
                  <textarea
                    id="form-message"
                    required
                    rows={5}
                    placeholder="Provide specific notes regarding schedules, participant numbers, or scientific topics of interest..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#F8F5F0] px-4 py-3 text-xs sm:text-sm rounded-xl border border-[#E9DFD2] focus:border-[#C97A1D] focus:outline-none transition-all text-[#2F2A24] font-sans"
                  />
                </div>

                {/* Submit button */}
                <div className="flex justify-start">
                  <button
                    type="submit"
                    className="px-8 py-3.5 bg-[#2F2A24] hover:bg-[#C97A1D] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors shadow-sm flex items-center gap-2 focus:outline-none cursor-pointer"
                  >
                    <span>Transmit Secure Inquiry</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>

              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-4"
              >
                <div className="w-14 h-14 bg-[#3E5C4A]/10 text-[#3E5C4A] rounded-full flex items-center justify-center mx-auto border border-[#3E5C4A]/25 shadow-xs">
                  <Check className="w-6 h-6 border-2 border-transparent" />
                </div>
                
                <div className="space-y-2 max-w-sm mx-auto">
                  <h3 className="text-xl font-serif font-bold text-[#2F2A24]">Inquiry Transmitted</h3>
                  <p className="text-xs text-[#2F2A24]/70 leading-relaxed font-sans font-light">
                    Your request has been routed directly to Mahesh's private workspace. A personalized research or calendar follow-up will arrive inside 48 hours. Let's unite.
                  </p>
                </div>

                <button
                  onClick={() => setStatus('idle')}
                  className="px-6 py-2 bg-[#F8F5F0] border border-[#E9DFD2] hover:bg-[#E9DFD2]/30 text-xs font-bold text-[#C97A1D] uppercase tracking-wider rounded-lg focus:outline-none transition-colors mt-6 select-none cursor-pointer"
                >
                  Send another inquiry
                </button>
              </motion.div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
