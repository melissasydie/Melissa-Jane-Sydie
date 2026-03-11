import React from 'react';

export type Category = 'All' | 'Writing' | 'Audio' | 'Video' | 'Marketing' | 'Design';

export interface SocialLink {
  platform: 'Facebook' | 'Instagram' | 'LinkedIn' | 'YouTube' | 'Spotify' | 'Wefunder' | 'Website' | 'App' | 'Linktree';
  url: string;
}

export interface SeasonLink {
  season: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  category: Category;
  description: string;
  imageUrl: string;
  client?: string;
  projectType: string;
  link?: string;
  modalType?: 'gated' | 'social' | 'seasons' | 'gallery';
  socialLinks?: SocialLink[];
  seasonLinks?: SeasonLink[];
  galleryImages?: string[];
  carouselPostImages?: string[];
  excerpt?: string;
  platformName?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  tagline?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  imageUrl: string;
  tags: string[];
  content?: string;
}