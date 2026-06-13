/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, ArrowRight, MessageSquare, Check } from 'lucide-react';

export default function JoinSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim().includes('@')) {
      setStatus('success');
      setEmail('');
    }
  };

  return (
    <section className="py-20 bg-[#F8F5F0] bg-noise relative border-t border-b border-[#E9DFD2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text block (Left) */}
          <div className="lg:col-span-6 space-y-4 text-center lg:text-left">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C97A1D] block">
              Subscribe & Connect
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#2F2A24] font-light leading-tight">
              Receive weekly rituals and <br className="hidden sm:inline" />
              science-backed insights.
            </h2>
            <p className="text-sm text-[#2F2A24]/70 font-sans font-light max-w-md mx-auto lg:mx-0">
              No daily spam. Only deeply researched, biochemically sound guides to help adapt traditional wisdom effortlessly to modern life.
            </p>
          </div>

          {/* Action form (Right) */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E9DFD2] shadow-2xs space-y-8">
              
              {status === 'idle' ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-[#2F2A24]/40">
                      <Mail className="w-5 h-5" />
                    </div>
                    <input
                      type="email"
                      required
                      placeholder="Enter your personal email address..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#F8F5F0] pr-4 pl-12 py-4 rounded-xl text-xs sm:text-sm border border-[#E9DFD2] focus:border-[#C97A1D] focus:outline-none transition-all text-[#2F2A24] font-sans"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 text-xs font-bold uppercase tracking-wider text-white bg-[#C97A1D] hover:bg-[#A86414] rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer focus:outline-none"
                  >
                    <span>Request Newsletter Access</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6 space-y-4"
                >
                  <div className="w-12 h-12 bg-[#3E5C4A]/10 text-[#3E5C4A] rounded-full flex items-center justify-center mx-auto border border-[#3E5C4A]/20">
                    <Check className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-md font-serif font-bold text-[#2F2A24]">Subscription Complete</h4>
                    <p className="text-xs text-[#2F2A24]/60">Your access has been approved. Welcome to India Se Bharat Tak.</p>
                  </div>
                  
                  <button
                    onClick={() => setStatus('idle')}
                    className="text-xs font-bold uppercase tracking-widest text-[#C97A1D] hover:underline focus:outline-none mt-2 select-none cursor-pointer"
                  >
                    [ Subscribe another email ]
                  </button>
                </motion.div>
              )}

              {/* WhatsApp Community CTA */}
              <div className="border-t border-[#E9DFD2] pt-6 flex flex-col sm:flex-row items-center sm:justify-between gap-4">
                <div className="flex items-center gap-3 text-left">
                  <div className="p-2 bg-[#3E5C4A]/10 text-[#3E5C4A] rounded-lg shrink-0 border border-[#3E5C4A]/15">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#3E5C4A] block leading-none">
                      Private Sangha Loop
                    </span>
                    <span className="text-xs text-[#2F2A24]/60 block mt-1 leading-snug">
                      Join our private WhatsApp broadcaster list.
                    </span>
                  </div>
                </div>

                <a
                  href="https://chat.whatsapp.com/mock-community-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-full text-[10px] font-bold uppercase tracking-wider border border-[#E9DFD2] hover:bg-[#F8F5F0] hover:text-[#C97A1D] text-[#2F2A24] transition-colors inline-block w-full sm:w-auto text-center"
                >
                  Join Broadcast Channel
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
