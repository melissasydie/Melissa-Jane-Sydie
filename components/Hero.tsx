
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#FDFBF7]">
      
      {/* Full Screen Image Background - B&W to Color on Hover */}
      <div 
        className="absolute inset-0 w-full h-full z-0 transition-all duration-1000 ease-in-out cursor-none"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`absolute inset-0 bg-black/20 z-10 transition-opacity duration-700 ${isHovered ? 'opacity-0' : 'opacity-20'}`} />
        <img 
          src="https://i.ibb.co/kscNP663/1-20260309-235959-0000.png" 
          className={`absolute inset-0 w-full h-full object-cover object-center grayscale transition-opacity duration-1000 ease-in-out ${isHovered ? 'opacity-0' : 'opacity-100'}`}
          alt="Hero Image 1"
        />
        <img 
          src="https://i.ibb.co/ds7FzQdC/2-20260309-235959-0001.png" 
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out ${isHovered ? 'opacity-100' : 'opacity-0'}`}
          alt="Hero Image 2"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full pointer-events-none">
        <div className="max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-[1px] w-16 bg-white/80 backdrop-blur-sm" />
            <span className="text-white font-medium tracking-[0.3em] uppercase text-xs backdrop-blur-sm px-2 py-1 rounded-sm bg-black/10">Est. 2015</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl md:text-8xl lg:text-9xl font-serif text-white leading-[0.9] mb-10 mix-blend-overlay opacity-90"
          >
            Narrative by <br />
            Design.
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pointer-events-auto flex flex-wrap gap-6"
          >
            <a 
              href="#services"
              className="px-12 py-4 bg-white/90 backdrop-blur-md text-[#1A1A1A] font-bold tracking-widest uppercase text-xs hover:bg-[#008B8B] hover:text-white transition-all duration-500 border border-white/20 shadow-lg"
            >
              Studio Offerings
            </a>
            <a 
              href="#the-salon"
              className="px-12 py-4 border border-white/40 text-white font-bold tracking-widest uppercase text-xs hover:bg-white hover:text-[#1A1A1A] transition-all duration-500 backdrop-blur-sm"
            >
              Studio Portfolio
            </a>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
