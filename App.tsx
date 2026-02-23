
import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import ChatConsultant from './components/ChatConsultant';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const SydieLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="currentColor" className={className}>
    {/* Refined swirl matching the provided image with multiple arms and central eye */}
    <circle cx="50" cy="50" r="12" />
    <path d="M50 0C22.4 0 0 22.4 0 50c0 12 4.2 23 11.2 31.6l4.8-4.8C10.6 69.9 8 60.3 8 50c0-23.2 18.8-42 42-42s42 18.8 42 42c0 10.3-3.7 19.7-9.8 27l5.2 5.2C95.1 73.6 100 62.4 100 50 100 22.4 77.6 0 50 0z" />
    <path d="M50 15c-19.3 0-35 15.7-35 35 0 7.8 2.6 15 6.9 20.8l5.4-5.4C24.3 61 23 55.7 23 50c0-14.9 12.1-27 27-27s27 12.1 27 27c0 5.7-1.3 11-4.3 15.4l5.4 5.4c4.3-5.8 6.9-13 6.9-20.8 0-19.3-15.7-35-35-35z" />
    <path d="M50 30c-11 0-20 9-20 20 0 4.5 1.5 8.7 4 12l5.6-5.6c-1.6-1.9-2.6-4.3-2.6-6.4 0-7.2 5.8-13 13-13s13 5.8 13 13c0 2.1-1 4.5-2.6 6.4L66 62c2.5-3.3 4-7.5 4-12 0-11-9-20-20-20z" />
    <path d="M85 10L70 25c10 5 18 15 22 25l8-8c-5-15-15-27-15-32z" />
    <path d="M15 90l15-15c-10-5-18-15-22-25l-8 8c5 15 15 27 15 32z" />
    <path d="M54 44c1.5 0 2.5 1 2.5 2.5S55.5 49 54 49s-2.5-1-2.5-2.5 1-2.5 2.5-2.5z" fill="white" opacity="0.8" />
  </svg>
);

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Ethos', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ${
      isScrolled ? 'py-4 bg-[#FCFAF2]/95 backdrop-blur-lg border-b border-[#2D2A26]/5 shadow-sm' : 'py-10'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-5 group cursor-pointer">
          <div className="w-14 h-14 overflow-hidden flex items-center justify-center transition-transform duration-700 group-hover:rotate-180">
            <SydieLogo className="w-12 h-12 text-[#2D2A26]" />
          </div>
          <span className="text-2xl font-black tracking-tighter uppercase font-serif text-[#2D2A26]">Sydie Media</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-14">
          {navLinks.map(link => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[10px] font-black uppercase tracking-[0.4em] text-[#2D2A26]/40 hover:text-[#00A8A8] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-10 py-3 bg-[#FF7B7B] text-white text-[10px] font-black uppercase tracking-[0.3em] hover:bg-[#2D2A26] transition-all flex items-center gap-3 shadow-[6px_6px_0px_0px_rgba(45,42,38,0.1)] hover:shadow-[6px_6px_0px_0px_rgba(45,42,38,1)]"
          >
            Inquire
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-[#2D2A26]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#FCFAF2] z-[99] flex flex-col items-center justify-center space-y-12 text-4xl font-serif font-black md:hidden">
          {navLinks.map(link => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMenuOpen(false)}
              className="text-[#2D2A26]/40 hover:text-[#00A8A8]"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="px-16 py-6 bg-[#00A8A8] text-white text-xl uppercase tracking-widest font-black"
          >
            Start Project
          </a>
        </div>
      )}
    </nav>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="py-32 px-6 bg-white border-t border-[#2D2A26]/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-24">
        <div className="max-w-md">
          <div className="flex items-center gap-5 mb-10">
            <SydieLogo className="w-10 h-10 text-[#2D2A26]" />
            <span className="text-3xl font-black uppercase font-serif tracking-tighter">Sydie Media</span>
          </div>
          <p className="text-[#2D2A26]/60 text-lg leading-relaxed mb-10 font-light italic">
            "Sophisticated narratives, synthesized for the modern world."
          </p>
          <div className="flex gap-4 mb-8">
            <div className="w-2 h-2 bg-[#00A8A8] rounded-full" />
            <div className="w-2 h-2 bg-[#FF7B7B] rounded-full" />
            <div className="w-2 h-2 bg-[#FFC857] rounded-full" />
          </div>
          <p className="text-[#2D2A26]/30 text-[10px] font-black uppercase tracking-[0.5em]">© 2024 Sydie Media Group LLC | Palm Springs</p>
        </div>
        
        <div className="grid grid-cols-2 gap-24">
          <div>
            <h4 className="text-[#00A8A8] text-[11px] font-black tracking-[0.4em] uppercase mb-10">Exploration</h4>
            <ul className="space-y-5 text-[11px] font-black text-[#2D2A26]/40 uppercase tracking-[0.3em]">
              <li><a href="#portfolio" className="hover:text-[#FF7B7B] transition-colors">The Archives</a></li>
              <li><a href="#services" className="hover:text-[#FF7B7B] transition-colors">Studio Capabilities</a></li>
              <li><a href="#about" className="hover:text-[#FF7B7B] transition-colors">Design Philosophy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#00A8A8] text-[11px] font-black tracking-[0.4em] uppercase mb-10">Connection</h4>
            <ul className="space-y-5 text-[11px] font-black text-[#2D2A26]/40 uppercase tracking-[0.3em]">
              <li><a href="#" className="hover:text-[#FF7B7B] transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-[#FF7B7B] transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-[#FF7B7B] transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ServicesGrid />
      <Portfolio />
      
      {/* About Section */}
      <section id="about" className="py-40 px-6 bg-[#FCFAF2] relative overflow-hidden">
        {/* Decorative MCM Boomerang */}
        <div className="absolute top-20 left-0 w-64 h-32 bg-[#FFC857]/10 -skew-x-12 -z-10" />
        <div className="absolute bottom-20 right-0 w-96 h-48 bg-[#00A8A8]/5 skew-y-6 -z-10" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div className="relative group">
            <div className="aspect-[4/5] bg-white p-4 ps-shadow-teal border border-[#2D2A26]/5 transition-all duration-700 group-hover:-translate-y-4">
              <img 
                src="https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&q=80&w=1000" 
                alt="Palm Springs Mid Century Studio" 
                className="w-full h-full object-cover grayscale brightness-110 group-hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            {/* Swirl Watermark */}
            <div className="absolute -top-12 -right-12 w-48 h-48 opacity-[0.03] rotate-45 pointer-events-none">
              <SydieLogo />
            </div>
          </div>
          
          <div>
            <div className="w-16 h-1 bg-[#FF7B7B] mb-10" />
            <span className="text-[#FF7B7B] font-black tracking-[0.7em] uppercase text-xs mb-10 block">Studio Philosophy</span>
            <h2 className="text-6xl md:text-8xl font-black font-serif mb-12 leading-[1] text-[#2D2A26]">
              Timeless <br /><span className="text-[#00A8A8]">Precision.</span>
            </h2>
            <p className="text-[#2D2A26]/70 text-2xl mb-14 leading-relaxed font-light">
              We operate at the intersection of Palm Springs coolness and digital innovation. Our approach is deliberate, aesthetic-first, and rooted in the principles of Desert Modernism.
            </p>
            <div className="grid grid-cols-2 gap-16">
              <div className="border-l-4 border-[#FFC857] pl-10">
                <p className="text-6xl font-serif font-black text-[#2D2A26] mb-3">15+</p>
                <p className="text-[#2D2A26]/40 text-[10px] uppercase tracking-[0.4em] font-black">Years Experience</p>
              </div>
              <div className="border-l-4 border-[#FF7B7B] pl-10">
                <p className="text-6xl font-serif font-black text-[#2D2A26] mb-3">500+</p>
                <p className="text-[#2D2A26]/40 text-[10px] uppercase tracking-[0.4em] font-black">Strategic Partners</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
      <ChatConsultant />
    </div>
  );
};

export default App;
