
import React from 'react';

interface Props {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeading: React.FC<Props> = ({ title, subtitle, centered = false }) => {
  return (
    <div className={`mb-20 ${centered ? 'text-center' : ''}`}>
      <div className={`flex items-center gap-3 mb-6 ${centered ? 'justify-center' : ''}`}>
        <div className="w-12 h-[2px] bg-[#FF7B7B]" />
        <div className="w-3 h-3 bg-[#FFC857] rounded-full" />
      </div>
      <h2 className="text-5xl md:text-7xl font-black font-serif mb-8 tracking-tighter text-[#2D2A26]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[#2D2A26]/50 text-xl max-w-2xl font-light leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
