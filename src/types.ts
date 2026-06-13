/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Tradition {
  id: string;
  title: string;
  traditionalBelief: string;
  scientificExplanation: string;
  researchSummary: string;
  practicalTakeaway: string;
  iconName: string;
}

export interface RitualItem {
  id: string;
  title: string;
  whatToDo: string;
  whyItWorks: string;
  benefits: string[];
  howToStart: string;
  iconName: string;
}

export interface RitualCategory {
  id: string;
  title: string;
  description: string;
  items: RitualItem[];
}

export interface MindBodyItem {
  id: string;
  title: string;
  description: string;
  exerciseTitle: string;
  exerciseSteps: string[];
  tips: string[];
  duration: string;
  iconName: string;
}

export interface ReelItem {
  id: string;
  title: string;
  thumbnailUrl: string;
  videoUrl: string;
  captionPreview: string;
  likes: string;
  views: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string; // Markdown or rich text
  category: string;
  readTime: string;
  author: string;
  date: string;
  tags: string[];
  imageSrc: string;
  scientificBasis: string;
  references: string[];
}

export interface ChecklistItem {
  id: string;
  text: string;
  completed: boolean;
  timeOfDay: 'morning' | 'anytime' | 'evening';
}

export interface HabitTracker {
  id: string;
  title: string;
  streak: number;
  completedDays: boolean[]; // Array representing 7 days of the week [M, T, W, T, F, S, S]
}
