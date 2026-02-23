
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Category } from '../types';
import SectionHeading from './SectionHeading';
import { ArrowUpRight } from 'lucide-react';

const CATEGORIES: Category[] = ['All', 'Writing', 'Podcasts', 'Marketing', 'Branding', 'Editing'];

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-32 px-6 max-w-7xl mx-auto">
      <SectionHeading 
        title="The Gallery" 
        subtitle="Exploring the narrative potential of modern media through deliberate execution."
      />

      <div className="flex flex-wrap gap-10 mb-20 border-b border-[#2D2A26]/5 pb-6">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`pb-4 text-xs font-black tracking-[0.3em] uppercase transition-all relative ${
              activeCategory === cat 
                ? 'text-[#00A8A8]' 
                : 'text-[#2D2A26]/30 hover:text-[#2D2A26]'
            }`}
          >
            {cat}
            {activeCategory === cat && (
              <div className="absolute bottom-[-2px] left-0 w-full h-[4px] bg-[#00A8A8]" />
            )}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        {filteredProjects.map((project, idx) => (
          <div 
            key={project.id}
            className="group flex flex-col"
          >
            <div className="relative mb-10 bg-white p-3 border border-[#2D2A26]/5 transition-all duration-500 hover:ps-shadow-coral">
              <div className="aspect-video overflow-hidden bg-[#2D2A26]/5">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale brightness-110 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                />
              </div>
              <div className="absolute top-6 right-6 p-4 bg-white border border-[#2D2A26]/10 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-500">
                <ArrowUpRight className="w-5 h-5 text-[#2D2A26]" />
              </div>
            </div>
            
            <div className="px-2">
              <div className="flex justify-between items-baseline mb-6">
                <h3 className="text-4xl font-serif font-black text-[#2D2A26] group-hover:text-[#00A8A8] transition-colors leading-tight">
                  {project.title}
                </h3>
                <span className="text-[10px] font-black tracking-[0.4em] text-[#FF7B7B] uppercase">
                  {project.category}
                </span>
              </div>
              
              <p className="text-[#2D2A26]/50 font-light leading-relaxed mb-10 text-xl">
                {project.description}
              </p>
              
              <div className="flex items-center justify-between text-[11px] font-black tracking-[0.3em] uppercase text-[#2D2A26]/30">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-[2px] bg-[#FFC857]" />
                  <span>{project.client}</span>
                </div>
                <span>Est. {project.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
