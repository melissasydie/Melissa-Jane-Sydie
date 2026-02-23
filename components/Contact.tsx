
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter } from 'lucide-react';
import SectionHeading from './SectionHeading';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-6 max-w-7xl mx-auto">
      <SectionHeading 
        title="The Connection" 
        subtitle="Inquire about availability for select studio commissions and consultancies." 
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
        <div>
          <p className="text-[#2D2A26]/60 text-xl mb-16 leading-relaxed font-light">
            We are currently accepting new projects for the winter season. Visit our Palm Springs studio or reach out via the secure dispatch below.
          </p>
          
          <div className="space-y-12 mb-20">
            <div className="flex items-center gap-8">
              <div className="w-16 h-16 bg-[#00A8A8]/5 border border-[#00A8A8]/20 flex items-center justify-center text-[#00A8A8]">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[11px] text-[#2D2A26]/30 uppercase tracking-[0.3em] font-black mb-2">Electronic Mail</p>
                <p className="text-2xl text-[#2D2A26] font-serif font-black">studio@sydiemedia.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-8">
              <div className="w-16 h-16 bg-[#FF7B7B]/5 border border-[#FF7B7B]/20 flex items-center justify-center text-[#FF7B7B]">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[11px] text-[#2D2A26]/30 uppercase tracking-[0.3em] font-black mb-2">Studio Line</p>
                <p className="text-2xl text-[#2D2A26] font-serif font-black">+1 (760) 555-MOD-01</p>
              </div>
            </div>
          </div>

          <div className="flex gap-8">
            {[Linkedin, Instagram, Twitter].map((Icon, idx) => (
              <a 
                key={idx}
                href="#" 
                className="w-16 h-16 border border-[#2D2A26]/10 flex items-center justify-center text-[#2D2A26]/40 hover:bg-[#2D2A26] hover:text-white transition-all"
              >
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>

        <div className="bg-white p-12 border border-[#2D2A26]/5 ps-shadow-sunny">
          <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-3">
                <label className="text-[11px] font-black text-[#2D2A26] uppercase tracking-[0.3em]">Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b-2 border-[#2D2A26]/10 py-4 text-[#2D2A26] focus:outline-none focus:border-[#00A8A8] transition-colors" 
                />
              </div>
              <div className="space-y-3">
                <label className="text-[11px] font-black text-[#2D2A26] uppercase tracking-[0.3em]">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-transparent border-b-2 border-[#2D2A26]/10 py-4 text-[#2D2A26] focus:outline-none focus:border-[#00A8A8] transition-colors" 
                />
              </div>
            </div>
            
            <div className="space-y-3">
              <label className="text-[11px] font-black text-[#2D2A26] uppercase tracking-[0.3em]">Select Discipline</label>
              <select className="w-full bg-white border-b-2 border-[#2D2A26]/10 py-4 text-[#2D2A26] focus:outline-none focus:border-[#00A8A8]">
                <option>Brand Modernization</option>
                <option>Audio Synthesis</option>
                <option>Editorial Curation</option>
                <option>Strategic Marketing</option>
              </select>
            </div>

            <div className="space-y-3">
              <label className="text-[11px] font-black text-[#2D2A26] uppercase tracking-[0.3em]">Project Narrative</label>
              <textarea 
                rows={4}
                className="w-full bg-transparent border-b-2 border-[#2D2A26]/10 py-4 text-[#2D2A26] focus:outline-none focus:border-[#00A8A8] transition-colors"
              />
            </div>

            <button className="px-12 py-6 bg-[#2D2A26] text-white font-black uppercase tracking-[0.3em] text-xs hover:bg-[#FF7B7B] transition-all w-full mcm-button">
              Send Dispatch
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
