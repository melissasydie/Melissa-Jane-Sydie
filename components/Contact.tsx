
import React from 'react';
import { Mail, Phone, Linkedin, Instagram, Twitter } from 'lucide-react';
import SectionHeading from './SectionHeading';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-6 max-w-7xl mx-auto">
      <SectionHeading 
        title="The Connection" 
        subtitle="Inquire about availability for select commissions and consultancies." 
        centered
      />
      
      <div className="max-w-3xl mx-auto text-center mb-20">
        <p className="text-[#2D2A26]/70 text-xl font-light leading-relaxed">
          Sydie Media offers bespoke, custom quotes tailored to your exact scope and budget. Secure 15 years of senior marketing and narrative expertise for your next project, on demand.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
        <div>
          <div className="space-y-12 mb-20">
            <div className="flex items-center gap-8 group">
              <div className="w-16 h-16 bg-[#4A8C8C]/5 border border-[#4A8C8C]/20 flex items-center justify-center text-[#4A8C8C] rounded-2xl transition-all duration-500 group-hover:bg-[#4A8C8C] group-hover:text-white group-hover:rotate-12 group-hover:scale-110 shadow-sm">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[11px] text-[#2D2A26]/30 uppercase tracking-[0.3em] font-bold mb-2">studio email</p>
                <a href="mailto:studio@sydiemedia.com" className="text-2xl text-[#2D2A26] font-serif font-bold hover:text-[#4A8C8C] transition-colors">studio@sydiemedia.com</a>
              </div>
            </div>
            
            <div className="flex items-center gap-8 group">
              <div className="w-16 h-16 bg-[#E08D79]/5 border border-[#E08D79]/20 flex items-center justify-center text-[#E08D79] rounded-2xl transition-all duration-500 group-hover:bg-[#E08D79] group-hover:text-white group-hover:-rotate-12 group-hover:scale-110 shadow-sm">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[11px] text-[#2D2A26]/30 uppercase tracking-[0.3em] font-bold mb-2">WhatsApp the Studio</p>
                <a href="https://wa.me/27760376942" target="_blank" rel="noopener noreferrer" className="text-2xl text-[#2D2A26] font-serif font-bold hover:text-[#E08D79] transition-colors">+27 76 037 6942</a>
              </div>
            </div>
          </div>

          <div className="flex gap-8">
            {[
              { Icon: Linkedin, color: '#4A8C8C' },
              { Icon: Instagram, color: '#E08D79' },
              { Icon: Twitter, color: '#C8A951' }
            ].map(({ Icon, color }, idx) => (
              <a 
                key={idx}
                href="#" 
                className="w-16 h-16 border border-[#2D2A26]/10 flex items-center justify-center text-[#2D2A26]/40 rounded-2xl transition-all duration-500 hover:text-white shadow-sm hover:-translate-y-2"
                style={{ '--hover-bg': color } as React.CSSProperties}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = color}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>

        <div className="bg-white p-12 border border-[#2D2A26]/5 ps-shadow-mustard">
          <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-3">
                <label className="text-[11px] font-bold text-[#2D2A26] uppercase tracking-[0.3em]">Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b-2 border-[#2D2A26]/10 py-4 text-[#2D2A26] focus:outline-none focus:border-[#8A9A86] transition-colors" 
                />
              </div>
              <div className="space-y-3">
                <label className="text-[11px] font-bold text-[#2D2A26] uppercase tracking-[0.3em]">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-transparent border-b-2 border-[#2D2A26]/10 py-4 text-[#2D2A26] focus:outline-none focus:border-[#8A9A86] transition-colors" 
                />
              </div>
            </div>
            
            <div className="space-y-3">
              <label className="text-[11px] font-bold text-[#2D2A26] uppercase tracking-[0.3em]">Select Discipline</label>
              <select className="w-full bg-white border-b-2 border-[#2D2A26]/10 py-4 text-[#2D2A26] focus:outline-none focus:border-[#8A9A86]">
                <option>Brand Modernization</option>
                <option>Audio Synthesis</option>
                <option>Editorial Curation</option>
                <option>Strategic Marketing</option>
              </select>
            </div>

            <div className="space-y-3">
              <label className="text-[11px] font-bold text-[#2D2A26] uppercase tracking-[0.3em]">Project Narrative</label>
              <textarea 
                rows={4}
                className="w-full bg-transparent border-b-2 border-[#2D2A26]/10 py-4 text-[#2D2A26] focus:outline-none focus:border-[#8A9A86] transition-colors"
              />
            </div>

            <button className="px-12 py-6 bg-[#2D2A26] text-white font-bold uppercase tracking-[0.3em] text-xs hover:bg-[#C48B8B] transition-all w-full mcm-button">
              Send Dispatch
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
