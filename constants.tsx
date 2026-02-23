
import React from 'react';
import { PenTool, Mic, BarChart3, Palette, FileEdit, Globe, Layers } from 'lucide-react';
import { Project, Service } from './types';

export const SERVICES: Service[] = [
  {
    id: 'writing',
    title: 'Content Writing',
    description: 'Bespoke storytelling, technical copy, and long-form journalism that resonates.',
    icon: <PenTool className="w-6 h-6" />,
  },
  {
    id: 'podcasts',
    title: 'Podcast Production',
    description: 'Full-cycle production from scriptwriting to sound engineering and distribution.',
    icon: <Mic className="w-6 h-6" />,
  },
  {
    id: 'studio88',
    title: 'Studio88 Design',
    description: 'Comprehensive design solutions including graphics, flyers, and high-performance websites.',
    icon: <Layers className="w-6 h-6" />,
  },
  {
    id: 'marketing',
    title: 'Digital Marketing',
    description: 'Data-driven campaigns that build community and drive measurable growth.',
    icon: <BarChart3 className="w-6 h-6" />,
  },
  {
    id: 'branding',
    title: 'Identity Branding',
    description: 'Visual systems and brand voices that stand out in a saturated digital landscape.',
    icon: <Palette className="w-6 h-6" />,
  },
  {
    id: 'editing',
    title: 'Editorial Services',
    description: 'Meticulous developmental and line editing for manuscripts and publications.',
    icon: <FileEdit className="w-6 h-6" />,
  },
  {
    id: 'strategy',
    title: 'Media Strategy',
    description: 'Holistic roadmaps for cross-platform presence and audience engagement.',
    icon: <Globe className="w-6 h-6" />,
  },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'The Modern Narrative',
    category: 'Writing',
    description: 'A deep-dive series on the evolution of digital journalism in the AI era.',
    imageUrl: 'https://picsum.photos/seed/writing1/800/600',
    client: 'Atlantic Press',
    date: '2023',
  },
  {
    id: '2',
    title: 'Soundwaves Daily',
    category: 'Podcasts',
    description: 'Award-winning daily tech podcast with over 500k monthly downloads.',
    imageUrl: 'https://picsum.photos/seed/pod1/800/600',
    client: 'MediaBox',
    date: '2024',
  },
  {
    id: '3',
    title: 'Lumina Brand Rebirth',
    category: 'Branding',
    description: 'Complete visual identity overhaul for a sustainable tech startup.',
    imageUrl: 'https://picsum.photos/seed/brand1/800/600',
    client: 'Lumina Corp',
    date: '2023',
  },
  {
    id: '4',
    title: 'Growth Engine',
    category: 'Marketing',
    description: 'Integrated social and SEO campaign resulting in 400% organic growth.',
    imageUrl: 'https://picsum.photos/seed/mkt1/800/600',
    client: 'Velocity Retail',
    date: '2022',
  },
  {
    id: '5',
    title: 'The Final Proof',
    category: 'Editing',
    description: 'Structural editing for the NYT Best Selling non-fiction title.',
    imageUrl: 'https://picsum.photos/seed/edit1/800/600',
    client: 'Harmony Publishing',
    date: '2024',
  },
  {
    id: '6',
    title: 'Voices of Tomorrow',
    category: 'Podcasts',
    description: 'Investigative documentary podcast series on urban planning.',
    imageUrl: 'https://picsum.photos/seed/pod2/800/600',
    client: 'City Voices',
    date: '2023',
  },
];