
import React from 'react';
import { SERVICES } from '../constants';
import SectionHeading from './SectionHeading';

const COLORS = ['ps-shadow-teal', 'ps-shadow-sunny', 'ps-shadow-coral'];

const ServicesGrid: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          title="Curated Services" 
          subtitle="Refined solutions for brands who value aesthetic precision and strategic depth."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {SERVICES.map((service, idx) => (
            <div 
              key={service.id}
              className={`p-12 bg-[#FCFAF2] border border-[#2D2A26]/5 transition-all group hover:-translate-y-2 ${COLORS[idx % 3]}`}
            >
              <div className="w-16 h-16 bg-white border border-[#2D2A26]/10 flex items-center justify-center text-[#2D2A26] mb-10 group-hover:bg-[#2D2A26] group-hover:text-white transition-all">
                {service.icon}
              </div>
              <h3 className="text-3xl font-black mb-6 text-[#2D2A26] font-serif tracking-tight">
                {service.title}
              </h3>
              <p className="text-[#2D2A26]/60 leading-relaxed font-light text-lg">
                {service.description}
              </p>
              <div className="mt-12 pt-8 border-t border-[#2D2A26]/5 flex justify-between items-center">
                <span className="text-[10px] uppercase tracking-[0.4em] font-black text-[#2D2A26]/30">Type 0{idx + 1}</span>
                <div className="w-2 h-2 bg-[#FF7B7B] rounded-full group-hover:scale-150 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
