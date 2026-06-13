/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ScienceSection from './components/ScienceSection';
import RitualLibrary from './components/RitualLibrary';
import MindBody from './components/MindBody';
import DailyLifeAction from './components/DailyLifeAction';
import ReelsShowcase from './components/ReelsShowcase';
import BlogSection from './components/BlogSection';
import JoinSection from './components/JoinSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#F8F5F0] text-[#2F2A24] font-sans antialiased overflow-x-hidden selection:bg-[#DDCBB2] selection:text-[#2F2A24]">
      
      {/* Sticky Header Navigation */}
      <Header />

      {/* Main Page Layout */}
      <main>
        
        {/* 1. Hero Block */}
        <Hero />

        {/* 2. About Founder & Paradigm Shift */}
        <AboutSection />

        {/* 3. Science behind Traditions expandable directory */}
        <ScienceSection />

        {/* 4. Ritual Library tabbed database */}
        <RitualLibrary />

        {/* 5. Mind & Body reset guides */}
        <MindBody />

        {/* 6. Daily Life Action Zone (Habits, Checklist, Pacer) */}
        <DailyLifeAction />

        {/* 7. Instagram Reels Showcase and Call-to-Action */}
        <ReelsShowcase />

        {/* 8. Editorial Blog publication search & reader */}
        <BlogSection />

        {/* 9. Join The Journey Newsletter Signup */}
        <JoinSection />

        {/* 10. Contact form workshop and speaking booking */}
        <ContactSection />

      </main>

      {/* Bottom Footer block */}
      <Footer />

    </div>
  );
}

