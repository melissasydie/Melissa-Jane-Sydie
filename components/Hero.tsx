
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-24 bg-[#FCFAF2]">
      {/* Palm Springs Abstract Geometry */}
      <div className="absolute top-20 right-[10%] w-[30vw] h-[30vw] bg-[#FFC857]/20 rounded-full -z-10" />
      <div className="absolute bottom-10 left-[5%] w-[20vw] h-[10vw] bg-[#00A8A8]/10 rotate-12 -z-10" />
      
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[2px] w-12 bg-[#FF7B7B]" />
            <span className="text-[#FF7B7B] font-bold tracking-[0.4em] uppercase text-xs">Desert Modernism</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black font-serif leading-[1.1] mb-8 text-[#2D2A26]">
            Narrative <br />
            By <span className="text-[#00A8A8]">Design.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-[#2D2A26]/70 max-w-lg mb-12 leading-relaxed font-light">
            Sydie Media blends 1960s aesthetic precision with the vibrant energy of Palm Springs to craft unforgettable brand stories.
          </p>
          
          <div className="flex flex-wrap gap-6">
            <a 
              href="#portfolio"
              className="px-10 py-5 bg-[#2D2A26] text-[#FCFAF2] font-bold tracking-widest uppercase text-sm mcm-button flex items-center gap-4"
            >
              The Archives
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#services"
              className="px-10 py-5 border-2 border-[#2D2A26] text-[#2D2A26] font-bold tracking-widest uppercase text-sm hover:bg-[#2D2A26] hover:text-[#FCFAF2] transition-all"
            >
              Our Studio
            </a>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative group">
            <div className="aspect-[4/5] bg-white ps-shadow-coral overflow-hidden p-3 border border-[#2D2A26]/5">
              <img 
                src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1000" 
                className="w-full h-full object-cover grayscale brightness-110 hover:grayscale-0 transition-all duration-1000"
                alt="Palm Springs Inspiration"
              />
            </div>
            {/* Logo Watermark Decoration */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 opacity-10 pointer-events-none rotate-12">
               <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full text-[#2D2A26]">
                  <path d="M50 0C22.4 0 0 22.4 0 50s22.4 50 50 50 50-22.4 50-50S77.6 0 50 0zm0 90C28 90 10 72 10 50S28 10 50 10s40 18 40 40-18 40-40 40zM35 50c0 8.3 6.7 15 15 15s15-6.7 15-15-6.7-15-15-15-15 6.7-15 15zm20 0c0 2.8-2.2 5-5 5s-5-2.2-5-5 2.2-5 5-5 5 2.2 5 5z" />
               </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
