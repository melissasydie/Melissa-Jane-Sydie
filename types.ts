import React from 'react';

export type Category = 'All' | 'Writing' | 'Podcasts' | 'Marketing' | 'Branding' | 'Editing';

export interface Project {
  id: string;
  title: string;
  category: Category;
  description: string;
  imageUrl: string;
  client?: string;
  date: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}