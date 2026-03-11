
import React, { useState } from 'react';
import { SERVICES } from '../constants';
import SectionHeading from './SectionHeading';

const ServiceCard: React.FC<{ service: typeof SERVICES[0], index: number, accentColor: string }> = ({ service, index, accentColor }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="p-10 appliance-panel flex flex-col h-full transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        borderColor: accentColor,
        backgroundColor: isHovered ? accentColor : 'white',
        transform: isHovered ? 'translateY(-4px)' : 'none',
        boxShadow: isHovered ? `0 10px 30px -10px ${accentColor}40` : ''
      }}
    >
      <div 
        className="w-14 h-14 border rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 shadow-inner"
        style={{ 
          backgroundColor: isHovered ? 'white' : accentColor,
          borderColor: isHovered ? 'white' : accentColor,
          color: isHovered ? accentColor : 'white'
        }}
      >
        {service.icon}
      </div>
      <h3 
        className="text-2xl font-medium mb-4 font-serif tracking-tight transition-colors duration-500"
        style={{ color: isHovered ? 'white' : '#262626' }}
      >
        {service.tagline || `Type 0${index + 1}`}
      </h3>
      <p 
        className="leading-relaxed font-light text-base mb-8 flex-grow transition-colors duration-500"
        style={{ color: isHovered ? 'rgba(255,255,255,0.9)' : 'rgba(38,38,38,0.6)' }}
      >
        {service.description}
      </p>
      <div className="pt-6 border-t flex justify-between items-center mt-auto transition-colors duration-500"
        style={{ borderColor: isHovered ? 'rgba(255,255,255,0.2)' : '#E2E8F0' }}
      >
        <span 
          className="text-[10px] uppercase tracking-[0.3em] font-bold transition-colors duration-500"
          style={{ color: isHovered ? 'rgba(255,255,255,0.6)' : 'rgba(38,38,38,0.3)' }}
        >
          {service.title}
        </span>
        <div className="flex items-center gap-2">
          <div 
            className="w-8 h-1 rounded-full transition-colors duration-500"
            style={{ backgroundColor: isHovered ? 'white' : '#E2E8F0' }}
          />
          <div 
            className="w-2 h-2 rounded-full transition-colors duration-500"
            style={{ backgroundColor: isHovered ? 'white' : '#E2E8F0' }}
          />
        </div>
      </div>
    </div>
  );
};

const ServicesGrid: React.FC = () => {
  const accentColors = ['#4A8C8C', '#E08D79', '#C8A951'];

  return (
    <section id="services" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          title="Curated Services" 
          subtitle="Refined digital strategy and consulting for brands that value aesthetic precision, strategic depth, and bespoke wordsmith tailoring."
          centered
        >
          <p className="text-[#2D2A26]/50 text-xl max-w-2xl font-light leading-relaxed mx-auto">
            Sydie Media operates on a project-by-project or contract basis, offering the caliber of more than a decade of senior-level expertise without the bloated overhead of an in-house hire. From comprehensive brand architectures to single strategic narratives, The Studio delivers top-tier, custom solutions with bespoke, accessible quoting.
          </p>
        </SectionHeading>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {SERVICES.map((service, idx) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              index={idx} 
              accentColor={accentColors[idx % 3]} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
