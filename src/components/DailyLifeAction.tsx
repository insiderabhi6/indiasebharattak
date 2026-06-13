/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Timer,
  CheckSquare,
  TrendingUp,
  RotateCcw,
  BookOpen,
  Calendar,
  CheckCircle,
  Play,
  Pause,
  Clock,
  Sparkles
} from 'lucide-react';

interface Habit {
  id: string;
  title: string;
  category: string;
  streak: number;
  completedDays: boolean[]; // 7 days (Mon-Sun)
}

interface ChecklistItem {
  id: string;
  text: string;
  time: string;
  completed: boolean;
}

const DEFAULT_HABITS: Habit[] = [
  { id: 'h1', title: 'Wake prior to sunrise', category: 'Morning', streak: 4, completedDays: [true, true, true, true, false, false, false] },
  { id: 'h2', title: 'Ushapan (On-wake fresh copper water)', category: 'Morning', streak: 5, completedDays: [true, true, true, true, true, false, false] },
  { id: 'h3', title: 'Hasta Bhoojana (Eating with fingers)', category: 'Meals', streak: 2, completedDays: [false, true, true, false, false, false, false] },
  { id: 'h4', title: 'Pada Abhyanga (Sweet foot oil massage)', category: 'Evening', streak: 3, completedDays: [true, true, true, false, false, false, false] }
];

const DEFAULT_CHECKLIST: ChecklistItem[] = [
  { id: 'c1', text: 'Drink stored room temp copper water sitting down', time: 'Morning', completed: false },
  { id: 'c2', text: 'Tongue scrape and oil pull before morning tea', time: 'Morning', completed: false },
  { id: 'c3', text: 'Gaze into raw morning sunlight (10 min)', time: 'Morning', completed: false },
  { id: 'c4', text: 'Eat lunch sitting cross-legged on the floor', time: 'Meals', completed: false },
  { id: 'c5', text: 'Avoid drinking cold water with heavy grains', time: 'Meals', completed: false },
  { id: 'c6', text: 'Charge mobile away from bed, read book under amber warmth', time: 'Evening', completed: false },
  { id: 'c7', text: 'Massage sole with sesame oil before sleep', time: 'Evening', completed: false }
];

const WEEK_DAYS = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

export default function DailyLifeAction() {
  // State for Habits and Checklist
  const [habits, setHabits] = useState<Habit[]>([]);
  const [checklist, setChecklist] = useState<ChecklistItem[]>([]);
  const [activeTab, setActiveTab] = useState<'tracker' | 'checklist' | 'pacer'>('tracker');
  
  // Pacer states
  const [isPacing, setIsPacing] = useState(false);
  const [pacerSeconds, setPacerSeconds] = useState(0);
  const [pacerState, setPacerState] = useState<'Inhale' | 'Hold' | 'Exhale' | 'Hold Off'>('Inhale');

  // Load state from localStorage on init
  useEffect(() => {
    const savedHabits = localStorage.getItem('ib_habits');
    const savedChecklist = localStorage.getItem('ib_checklist');
    if (savedHabits) {
      setHabits(JSON.parse(savedHabits));
    } else {
      setHabits(DEFAULT_HABITS);
    }

    if (savedChecklist) {
      setChecklist(JSON.parse(savedChecklist));
    } else {
      setChecklist(DEFAULT_CHECKLIST);
    }
  }, []);

  // Save changes to localStorage
  const saveHabits = (newHabits: Habit[]) => {
    setHabits(newHabits);
    localStorage.setItem('ib_habits', JSON.stringify(newHabits));
  };

  const saveChecklist = (newChecklist: ChecklistItem[]) => {
    setChecklist(newChecklist);
    localStorage.setItem('ib_checklist', JSON.stringify(newChecklist));
  };

  // Toggle habit day completion
  const handleToggleDay = (habitId: string, dayIndex: number) => {
    const updated = habits.map((h) => {
      if (h.id === habitId) {
        const completedCopy = [...h.completedDays];
        completedCopy[dayIndex] = !completedCopy[dayIndex];
        
        // Simple recalculation of current streak
        let currentStreak = 0;
        let longestRun = 0;
        for (const done of completedCopy) {
          if (done) {
            currentStreak++;
            if (currentStreak > longestRun) longestRun = currentStreak;
          } else {
            currentStreak = 0;
          }
        }

        return {
          ...h,
          completedDays: completedCopy,
          streak: longestRun
        };
      }
      return h;
    });

    saveHabits(updated);
  };

  // Reset habits
  const handleResetHabits = () => {
    const reset = habits.map((h) => ({
      ...h,
      streak: 0,
      completedDays: [false, false, false, false, false, false, false]
    }));
    saveHabits(reset);
  };

  // Toggle Checklist completion
  const handleToggleChecklist = (id: string) => {
    const updated = checklist.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    saveChecklist(updated);
  };

  // Reset Checklist
  const handleResetChecklist = () => {
    const reset = checklist.map((item) => ({ ...item, completed: false }));
    saveChecklist(reset);
  };

  // Breathing Pacer Cycle loop
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isPacing) {
      interval = setInterval(() => {
        setPacerSeconds((prev) => {
          const next = prev + 1;
          
          // Box breathing cycle: 4s inhale, 4s hold, 4s exhale, 4s hold
          if (next <= 4) {
            setPacerState('Inhale');
          } else if (next <= 8) {
            setPacerState('Hold');
          } else if (next <= 12) {
            setPacerState('Exhale');
          } else if (next <= 16) {
            setPacerState('Hold Off');
          } else {
            setPacerState('Inhale');
            return 1; // loop back
          }
          return next;
        });
      }, 1000);
    } else {
      setPacerSeconds(0);
      setPacerState('Inhale');
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPacing]);

  // Calculations
  const completedChecklistCount = checklist.filter((item) => item.completed).length;
  const totalChecklistCount = checklist.length;
  const progressPercentage = totalChecklistCount > 0 ? Math.round((completedChecklistCount / totalChecklistCount) * 100) : 0;

  return (
    <section id="daily-life" className="py-24 bg-white relative">
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#F8F5F0]/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Group */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C97A1D] inline-block mb-3">
            Somatic Habit Building
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#2F2A24] font-light leading-tight">
            The Daily Life Action Zone
          </h2>
          <div className="w-12 h-[2px] bg-[#C97A1D] mx-auto my-6" />
          <p className="text-sm sm:text-base text-[#2F2A24]/75 font-sans font-light animate-[fadeIn_1s]">
            Knowledge without direct application is sterile. Choose a track below to track healthy ancestral habits, tick items off your routine checklist, or reset your vagus nerve.
          </p>
        </div>

        {/* Dynamic Zone Dashboard */}
        <div className="bg-[#F8F5F0] rounded-3xl border border-[#E9DFD2] p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-xs bg-noise">
          
          {/* Sub-navigation tabs */}
          <div className="flex flex-col sm:flex-row items-center border-b border-[#E9DFD2] pb-6 mb-8 gap-4 sm:gap-0 justify-between">
            <div className="flex gap-2 p-1 bg-white rounded-xl border border-[#E9DFD2]">
              <button
                onClick={() => setActiveTab('tracker')}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer flex items-center gap-2 ${
                  activeTab === 'tracker' ? 'bg-[#C97A1D] text-white' : 'text-[#2F2A24] hover:bg-[#F8F5F0]'
                }`}
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Habit Tracker</span>
              </button>
              
              <button
                onClick={() => setActiveTab('checklist')}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer flex items-center gap-2 ${
                  activeTab === 'checklist' ? 'bg-[#C97A1D] text-white' : 'text-[#2F2A24] hover:bg-[#F8F5F0]'
                }`}
              >
                <CheckSquare className="w-3.5 h-3.5" />
                <span>Routine Checklist</span>
              </button>

              <button
                onClick={() => setActiveTab('pacer')}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer flex items-center gap-2 ${
                  activeTab === 'pacer' ? 'bg-[#C97A1D] text-white' : 'text-[#2F2A24] hover:bg-[#F8F5F0]'
                }`}
              >
                <Timer className="w-3.5 h-3.5" />
                <span>Wellness Reset Pacer</span>
              </button>
            </div>

            {/* Reset Actions links */}
            {activeTab === 'tracker' && (
              <button
                onClick={handleResetHabits}
                className="text-xs font-semibold uppercase tracking-wider text-[#2F2A24]/60 hover:text-[#C97A1D] transition-colors flex items-center gap-1 cursor-pointer focus:outline-none"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Week</span>
              </button>
            )}

            {activeTab === 'checklist' && (
              <button
                onClick={handleResetChecklist}
                className="text-xs font-semibold uppercase tracking-wider text-[#2F2A24]/60 hover:text-[#C97A1D] transition-colors flex items-center gap-1 cursor-pointer focus:outline-none"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Clear Checklist</span>
              </button>
            )}
          </div>

          {/* Active Panel Content */}
          <AnimatePresence mode="wait">
            
            {/* 1. HABIT TRACKER PANEL */}
            {activeTab === 'tracker' && (
              <motion.div
                key="tracker-panel"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6"
              >
                <div className="space-y-1.5">
                  <h3 className="text-xl font-serif font-bold text-[#2F2A24]">Weekly Traditional Habit Tracker</h3>
                  <p className="text-xs text-[#2F2A24]/60">Tick off days where you adhered to the habit. Building a consecutive loop strengthens synaptic plasticity.</p>
                </div>

                <div className="space-y-4">
                  {habits.map((habit) => (
                    <div
                      key={habit.id}
                      className="bg-white p-5 rounded-2xl border border-[#E9DFD2] flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-2xs hover:shadow-sm"
                    >
                      <div className="space-y-1">
                        <span className="text-[9px] font-bold uppercase tracking-wider text-[#C97A1D] px-2 py-0.5 rounded-full bg-[#C97A1D]/10 h-fit w-fit block">
                          {habit.category}
                        </span>
                        <h4 className="text-sm sm:text-base font-semibold text-[#2F2A24]">
                          {habit.title}
                        </h4>
                      </div>

                      {/* Day Toggles */}
                      <div className="flex items-center gap-3 justify-between md:justify-end">
                        <div className="flex gap-1.5 sm:gap-2">
                          {WEEK_DAYS.map((day, idx) => {
                            const completed = habit.completedDays[idx];
                            return (
                              <div key={idx} className="flex flex-col items-center gap-1">
                                <span className="text-[9px] font-mono font-semibold text-[#2F2A24]/40">{day}</span>
                                <button
                                  onClick={() => handleToggleDay(habit.id, idx)}
                                  className={`w-8 h-8 rounded-full border text-xs font-semibold uppercase tracking-wider flex items-center justify-center transition-colors cursor-pointer focus:outline-none ${
                                    completed
                                      ? 'bg-[#3E5C4A] border-[#3E5C4A] text-white shadow-xs'
                                      : 'bg-[#F8F5F0] hover:bg-[#E9DFD2]/40 border-[#E9DFD2] text-[#2F2A24]/70'
                                  }`}
                                >
                                  {completed ? '✓' : ''}
                                </button>
                              </div>
                            );
                          })}
                        </div>

                        {/* Streak Badge */}
                        <div className="border-l border-[#E9DFD2] pl-4 sm:pl-6 ml-2 flex flex-col items-center">
                          <span className="text-[9px] font-bold uppercase tracking-widest text-[#2F2A24]/40">Streak</span>
                          <div className="flex items-center gap-1 text-[#C97A1D]">
                            <TrendingUp className="w-4 h-4" />
                            <span className="text-lg font-bold text-[#2F2A24]">{habit.streak}d</span>
                          </div>
                        </div>

                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* 2. DAILY ROUTINE CHECKLIST PANEL */}
            {activeTab === 'checklist' && (
              <motion.div
                key="checklist-panel"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-8"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <h3 className="text-xl font-serif font-bold text-[#2F2A24]">Circadian Routine Progress Check</h3>
                    <p className="text-xs text-[#2F2A24]/60">Tick items off your list as you progress through modern routines today.</p>
                  </div>

                  {/* Progress Ring and Bar */}
                  <div className="bg-white px-5 py-3 rounded-2xl border border-[#E9DFD2] flex flex-col items-center text-center justify-center min-w-[140px]">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#2F2A24]/50">Today's Sync</span>
                    <span className="text-xl font-bold text-[#3E5C4A]">{progressPercentage}%</span>
                    <div className="w-full bg-[#F8F5F0] h-1.5 rounded-full overflow-hidden mt-2">
                      <div className="bg-[#3E5C4A] h-full transition-all duration-500" style={{ width: `${progressPercentage}%` }} />
                    </div>
                  </div>
                </div>

                {/* Subcategorized Checklist */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  
                  {/* Morning Column */}
                  <div className="bg-white rounded-2xl p-5 border border-[#E9DFD2] space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#C97A1D] border-b border-[#F8F5F0] pb-2 flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      <span>Morning (Ushapan & Wake)</span>
                    </h4>
                    
                    <div className="space-y-2.5">
                      {checklist.filter((item) => item.time === 'Morning').map((item) => (
                        <div
                          key={item.id}
                          onClick={() => handleToggleChecklist(item.id)}
                          className={`p-3 rounded-xl border text-xs cursor-pointer select-none transition-colors duration-200 flex items-start gap-2.5 ${
                            item.completed
                              ? 'bg-[#3E5C4A]/5 border-[#3E5C4A]/30 text-[#2F2A24]/50 line-through'
                              : 'bg-[#F8F5F0]/50 border-[#E9DFD2]/60 hover:bg-[#F8F5F0]'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={item.completed}
                            onChange={() => {}} // Controlled via parent div click
                            className="w-4 h-4 rounded text-[#3E5C4A] focus:ring-[#3E5C4A] pointer-events-none mt-0.5"
                          />
                          <span>{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Meals Column */}
                  <div className="bg-white rounded-2xl p-5 border border-[#E9DFD2] space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#3E5C4A] border-b border-[#F8F5F0] pb-2 flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4" />
                      <span>Meal Times (Bhoojana)</span>
                    </h4>

                    <div className="space-y-2.5">
                      {checklist.filter((item) => item.time === 'Meals').map((item) => (
                        <div
                          key={item.id}
                          onClick={() => handleToggleChecklist(item.id)}
                          className={`p-3 rounded-xl border text-xs cursor-pointer select-none transition-colors duration-200 flex items-start gap-2.5 ${
                            item.completed
                              ? 'bg-[#3E5C4A]/5 border-[#3E5C4A]/30 text-[#2F2A24]/50 line-through'
                              : 'bg-[#F8F5F0]/50 border-[#E9DFD2]/60 hover:bg-[#F8F5F0]'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={item.completed}
                            onChange={() => {}} // Controlled via parent click
                            className="w-4 h-4 rounded text-[#3E5C4A] focus:ring-[#3E5C4A] pointer-events-none mt-0.5"
                          />
                          <span>{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Evening Column */}
                  <div className="bg-white rounded-2xl p-5 border border-[#E9DFD2] space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#2F2A24]/60 border-b border-[#F8F5F0] pb-2 flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      <span>Evening (Sandhya & Sleep)</span>
                    </h4>

                    <div className="space-y-2.5">
                      {checklist.filter((item) => item.time === 'Evening').map((item) => (
                        <div
                          key={item.id}
                          onClick={() => handleToggleChecklist(item.id)}
                          className={`p-3 rounded-xl border text-xs cursor-pointer select-none transition-colors duration-200 flex items-start gap-2.5 ${
                            item.completed
                              ? 'bg-[#3E5C4A]/5 border-[#3E5C4A]/30 text-[#2F2A24]/50 line-through'
                              : 'bg-[#F8F5F0]/50 border-[#E9DFD2]/60 hover:bg-[#F8F5F0]'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={item.completed}
                            onChange={() => {}} // Controlled via parent click
                            className="w-4 h-4 rounded text-[#3E5C4A] focus:ring-[#3E5C4A] pointer-events-none mt-0.5"
                          />
                          <span>{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </motion.div>
            )}

            {/* 3. WELLNESS PACER BREATH TIMER */}
            {activeTab === 'pacer' && (
              <motion.div
                key="pacer-panel"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex flex-col items-center space-y-6 text-center max-w-xl mx-auto py-6"
              >
                <div className="space-y-1 text-center">
                  <h3 className="text-xl font-serif font-bold text-[#2F2A24]">10-Minute Parasympathetic Reset</h3>
                  <p className="text-xs text-[#2F2A24]/60">Box breathing paces your nervous systems. Watch the visual pacer coordinate your inhalations,holds, and exhalations.</p>
                </div>

                {/* Breathing Visual Core Pacer Circle */}
                <div className="relative w-64 h-64 flex items-center justify-center">
                  
                  {/* Outer Ripple circle */}
                  <motion.div
                    animate={{
                      scale: isPacing && pacerState === 'Inhale' ? [1, 1.4] : isPacing && pacerState === 'Exhale' ? [1.4, 1] : isPacing && pacerState === 'Hold' ? 1.4 : 1,
                      opacity: isPacing ? [0.15, 0.4, 0.15] : 0.15
                    }}
                    transition={{ duration: 4, repeat: isPacing ? Infinity : 0, ease: 'easeInOut' }}
                    className="absolute w-44 h-44 rounded-full bg-[#C97A1D]/20 border border-[#C97A1D]/30"
                  />

                  {/* Inner breathing circle */}
                  <motion.div
                    animate={{
                      scale: isPacing && pacerState === 'Inhale' ? 1.4 : isPacing && pacerState === 'Exhale' ? 1 : isPacing && pacerState === 'Hold' ? 1.4 : 1
                    }}
                    transition={{ duration: 4, ease: 'easeInOut' }}
                    className="absolute w-36 h-36 rounded-full bg-white border-2 border-[#C97A1D] flex flex-col items-center justify-center p-4 shadow-md"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#C97A1D]">
                      {isPacing ? pacerState : 'Rest State'}
                    </span>
                    <span className="text-xl font-serif font-extrabold text-[#2F2A24] font-mono mt-1">
                      {isPacing ? `${pacerSeconds % 4 === 0 ? 4 : pacerSeconds % 4}s` : '0s'}
                    </span>
                  </motion.div>
                </div>

                {/* Instructions */}
                <span className="text-xs text-[#2F2A24]/70 max-w-sm italic h-10">
                  {pacerState === 'Inhale' && 'Slowly take deep oxygen into your stomach lobes...'}
                  {pacerState === 'Hold' && 'Hold oxygen inside. Relax your throat & chest...'}
                  {pacerState === 'Exhale' && 'Breathe out slowly. Empty stomach fully...'}
                  {pacerState === 'Hold Off' && 'Hold lungs empty. Calm heartbeats...'}
                </span>

                {/* Trigger buttons */}
                <button
                  onClick={() => setIsPacing(!isPacing)}
                  className={`px-8 py-3 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center gap-2 shadow-xs transition-all cursor-pointer ${
                    isPacing
                      ? 'bg-[#2F2A24] text-white hover:bg-black'
                      : 'bg-[#C97A1D] text-white hover:bg-[#A86414]'
                  }`}
                >
                  {isPacing ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white" />}
                  <span>{isPacing ? 'Pause Pacer' : 'Begin Breathing Cycle'}</span>
                </button>

              </motion.div>
            )}

          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
