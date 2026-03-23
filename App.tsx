
import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import Portfolio from './components/Portfolio';
import TheAnthology from './components/TheAnthology';
import Contact from './components/Contact';
import { Menu, X, ArrowUpRight, MessageCircle, Facebook, Instagram, Linkedin } from 'lucide-react';

const SydieLogo = ({ className }: { className?: string }) => (
  <img 
    src="https://i.ibb.co/x8qmNY3x/IMG-20260307-120358.png" 
    alt="Sydie Media Logo" 
    className={`object-contain ${className}`} 
  />
);

const WhatsAppButton = () => (
  <a
    href="https://wa.me/27760376942"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-8 right-8 z-50 flex items-center gap-3 px-6 py-3 bg-[#C8A951] text-white rounded-full shadow-xl hover:bg-[#4A8C8C] transition-all duration-300 group hover:-translate-y-1"
  >
    <MessageCircle className="w-5 h-5" />
    <span className="text-xs font-bold uppercase tracking-widest hidden md:block">Let's Talk!</span>
  </a>
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
    { name: 'The Salon', href: '#the-salon' },
    { name: 'The Anthology', href: '#the-anthology' },
    { name: 'Ethos', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ${
      isScrolled ? 'py-4 bg-[#FDFCF8]/95 backdrop-blur-lg border-b border-[#E2E8F0] shadow-sm' : 'py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-5 group cursor-pointer">
          <div className="relative w-12 h-12 flex items-center justify-center">
            <img 
              src="https://i.ibb.co/x8qmNY3x/IMG-20260307-120358.png" 
              alt="Sydie Media Logo" 
              className="absolute inset-0 w-10 h-10 m-auto object-contain transition-opacity duration-300 group-hover:opacity-0 group-active:opacity-0" 
            />
            <img 
              src="https://i.ibb.co/LXcWJQpP/Sydie-Media-Studio-Social-Media-Covers-20260311-161516-0000.png" 
              alt="Sydie Media Logo Color" 
              className="absolute inset-0 w-10 h-10 m-auto object-contain transition-opacity duration-300 opacity-0 group-hover:opacity-100 group-active:opacity-100" 
            />
          </div>
          <span className="text-xl font-bold tracking-widest uppercase font-serif text-[#262626]">Sydie Media</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map(link => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#262626]/60 hover:text-[#4A8C8C] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-8 py-3 bg-[#E08D79] text-white text-[10px] font-bold uppercase tracking-[0.25em] hover:bg-[#262626] transition-all flex items-center gap-3 shadow-md hover:shadow-lg rounded-full"
          >
            Inquire
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-[#262626]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#FDFCF8] z-[99] flex flex-col items-center justify-center space-y-12 text-3xl font-serif font-medium md:hidden">
          {navLinks.map(link => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMenuOpen(false)}
              className="text-[#262626]/70 hover:text-[#4A8C8C]"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="px-12 py-5 bg-[#4A8C8C] text-white text-lg uppercase tracking-widest font-bold rounded-full"
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
    <footer className="py-24 px-6 bg-[#F1F5F9] border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-20">
        <div className="max-w-md">
          <div className="flex items-center gap-4 mb-8">
            <SydieLogo className="w-8 h-8 text-[#262626]" />
            <span className="text-2xl font-bold uppercase font-serif tracking-widest">Sydie Media</span>
          </div>
          <p className="text-[#262626]/60 text-lg leading-relaxed mb-8 font-light italic font-serif">
            "Sophisticated narratives, synthesized for the modern world."
          </p>
          <div className="flex gap-3 mb-8">
            <div className="w-3 h-3 bg-[#4A8C8C] rounded-full shadow-sm" />
            <div className="w-3 h-3 bg-[#E08D79] rounded-full shadow-sm" />
            <div className="w-3 h-3 bg-[#C8A951] rounded-full shadow-sm" />
          </div>
          <p className="text-[#262626]/30 text-[10px] font-bold uppercase tracking-[0.2em]">© 2026 Sydie Media Group LLC</p>
        </div>
        
        <div>
          <h4 className="text-[#4A8C8C] text-[10px] font-bold tracking-[0.25em] uppercase mb-8">Contact The Founder</h4>
          <div className="space-y-6">
            <div>
              <p className="text-xl font-serif text-[#262626] mb-1">Melissa Jane Sydie</p>
              <div className="flex flex-col gap-2">
                <a href="mailto:melissa@sydiemedia.com" className="text-[#262626]/60 hover:text-[#E08D79] transition-colors text-sm tracking-wider uppercase font-bold">
                  melissa@sydiemedia.com
                </a>
                <a href="https://wa.me/27760376942" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#262626]/60 hover:text-[#4A8C8C] transition-colors text-sm tracking-wider uppercase font-bold">
                  <MessageCircle className="w-4 h-4" />
                  +27 76 037 6942
                </a>
              </div>
            </div>
            
            <div className="flex gap-4 pt-4">
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#262626]/60 hover:bg-[#E08D79] hover:text-white transition-all shadow-sm hover:-translate-y-1">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#262626]/60 hover:bg-[#4A8C8C] hover:text-white transition-all shadow-sm hover:-translate-y-1">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#262626]/60 hover:bg-[#C8A951] hover:text-white transition-all shadow-sm hover:-translate-y-1">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FDFCF8]">
      <Header />
      <Hero />
      
      {/* The Art of The Story Section - Darker Gray Accent Background */}
      <section className="py-32 px-6 bg-[#E2E8F0] border-y border-[#CBD5E1]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[#E08D79] font-bold tracking-[0.3em] uppercase text-xs mb-6 block">The Architecture of Story</span>
          <h2 className="text-5xl md:text-6xl font-serif leading-tight text-[#262626] mb-8 font-medium">
            The Art of Connection.
          </h2>
          <p className="text-[#262626]/70 text-xl md:text-2xl font-light leading-relaxed max-w-2xl mx-auto mb-10">
            Weaving the human spirit into the digital fabric. In a landscape of automated echoes, the studio crafts the voice that cuts through.
          </p>
          <div className="w-24 h-[1px] bg-[#262626]/10 mx-auto" />
        </div>
      </section>

      <ServicesGrid />
      <Portfolio />
      <TheAnthology />
      
      {/* About Section - Human + Tech - Darker Gray */}
      <section id="about" className="py-40 px-6 bg-[#E2E8F0] relative overflow-hidden border-t border-[#CBD5E1]">
        {/* Decorative Elements - Muted Tones */}
        <div className="absolute top-20 left-0 w-64 h-32 bg-[#C8A951]/10 -skew-x-12 -z-10 rounded-r-full" />
        <div className="absolute bottom-20 right-0 w-96 h-48 bg-[#4A8C8C]/5 skew-y-6 -z-10 rounded-l-full" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div className="relative group">
            <div className="aspect-[4/5] bg-white p-4 appliance-panel transition-all duration-700 group-hover:-translate-y-2">
              <img 
                src="https://i.ibb.co/TxMT7VP6/1772878063454.png" 
                alt="Studio Atmosphere" 
                className="w-full h-full object-cover grayscale brightness-110 group-hover:grayscale-0 transition-all duration-1000 rounded-xl"
              />
            </div>
            {/* Swirl Watermark */}
            <div className="absolute -top-12 -right-12 w-48 h-48 opacity-[0.03] rotate-45 pointer-events-none">
              <SydieLogo />
            </div>
          </div>
          
          <div>
            <div className="w-16 h-[2px] bg-[#E08D79] mb-10" />
            <span className="text-[#E08D79] font-bold tracking-[0.4em] uppercase text-xs mb-10 block">Studio Philosophy</span>
            <h2 className="text-5xl md:text-7xl font-serif mb-12 leading-[1] text-[#262626] font-medium">
              Timeless Precision <br /><span className="text-[#4A8C8C] italic text-4xl md:text-6xl">in the Age of AI.</span>
            </h2>
            <p className="text-[#262626]/70 text-xl mb-8 leading-relaxed font-light text-balance">
              Sydie Media doesn't just use artificial intelligence; The Studio teaches it the pulse of your brand. Sydie Media leverages advanced language models for unparalleled efficiency and speed, but recognizes that true narrative magic—the kind that builds trust and drives action—can only come from the human touch.
            </p>
            <p className="text-[#262626]/70 text-xl mb-14 leading-relaxed font-light text-balance">
              Lives are woven together by the tapestry of the stories told. Stories still matter. Stories sell. The Studio provides the architectural framework of technology and the irreplaceable soul of a human word alchemist, ensuring your brand scales brilliantly without ever losing its humanity.
            </p>
            
            {/* Metrics - Reverted Style */}
            <div className="grid grid-cols-2 gap-x-12 gap-y-10 mb-16 border-t border-[#262626]/10 pt-12">
              <div className="border-l-4 border-[#4A8C8C] pl-6">
                <p className="text-5xl font-serif text-[#262626] mb-2">15+</p>
                <p className="text-[#262626]/40 text-[10px] uppercase tracking-[0.3em] font-bold">Years of Strategic Craft</p>
              </div>
              <div className="border-l-4 border-[#E08D79] pl-6">
                <p className="text-5xl font-serif text-[#262626] mb-2">100%</p>
                <p className="text-[#262626]/40 text-[10px] uppercase tracking-[0.3em] font-bold">Bespoke Project Scoping</p>
              </div>
              <div className="border-l-4 border-[#C8A951] pl-6">
                <p className="text-5xl font-serif text-[#262626] mb-2">0</p>
                <p className="text-[#262626]/40 text-[10px] uppercase tracking-[0.3em] font-bold">In-House Overhead</p>
              </div>
              <div className="border-l-4 border-[#262626] pl-6">
                <p className="text-5xl font-serif text-[#262626] mb-2">1</p>
                <p className="text-[#262626]/40 text-[10px] uppercase tracking-[0.3em] font-bold">Irreplaceable Human Touch</p>
              </div>
            </div>

            {/* Logo Placeholders */}
            <div>
              <p className="text-[#262626]/30 text-[9px] uppercase tracking-[0.3em] font-bold mb-6">Trusted By</p>
              <div className="flex flex-wrap md:flex-nowrap gap-8 md:gap-4 items-center justify-between">
                {[
                  "https://i.ibb.co/ym0VQtPs/30-20260309-224116-0003.png",
                  "https://i.ibb.co/YBwspq6h/24-20260309-113120-0000.png",
                  "https://i.ibb.co/4nTGKwQk/25-20260309-113120-0001.png",
                  "https://i.ibb.co/pvWHBCxY/28-20260309-224116-0001.png",
                  "https://i.ibb.co/4RHRGwBC/27-20260309-224116-0000.png",
                  "https://i.ibb.co/xPTTwj0/30-20260309-113120-0006.png",
                  "https://i.ibb.co/JFBgCkVj/29-20260309-224116-0002.png"
                ].map((logoUrl, i) => (
                  <div 
                    key={i} 
                    className="h-16 md:h-16 flex items-center justify-center group cursor-pointer transition-all duration-300 flex-1 min-w-[120px] md:min-w-0"
                  >
                    <img 
                      src={logoUrl} 
                      alt={`Partner Logo ${i + 1}`} 
                      className="h-full w-auto object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
