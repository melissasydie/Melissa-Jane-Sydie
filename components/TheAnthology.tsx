import React, { useState, useEffect } from 'react';
import { BLOG_POSTS } from '../constants';
import SectionHeading from './SectionHeading';
import { ArrowUpRight, Clock, Calendar, X } from 'lucide-react';
import { BlogPost } from '../types';

const TheAnthology: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedPost) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedPost]);

  return (
    <section id="the-anthology" className="py-32 px-6 max-w-7xl mx-auto bg-[#FDFCF8]">
      <SectionHeading 
        title="The Anthology" 
        subtitle="Chronicles of design, thought leadership, and navigating the digital frontier."
        centered
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
        {BLOG_POSTS.map((post) => (
          <article 
            key={post.id}
            className="group flex flex-col h-full cursor-pointer"
            onClick={() => setSelectedPost(post)}
          >
            <div className="relative mb-8 bg-white p-2 appliance-panel transition-all duration-500 hover:shadow-lg overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden bg-[#E2E8F0] rounded-xl relative">
                <img 
                  src={post.imageUrl} 
                  alt={post.title}
                  className="w-full h-full object-cover grayscale brightness-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-[#4A8C8C]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-multiply" />
              </div>
              
              <div className="absolute top-6 right-6 p-2 bg-white/90 backdrop-blur-sm border border-white/20 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 duration-500 rounded-full shadow-sm">
                <ArrowUpRight className="w-4 h-4 text-[#262626]" />
              </div>
            </div>

            <div className="flex flex-col flex-grow px-2">
              <div className="flex items-center gap-4 text-[10px] font-bold tracking-[0.2em] uppercase text-[#262626]/40 mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-3 h-3" />
                  <span>{post.date}</span>
                </div>
                <div className="w-1 h-1 bg-[#C8A951] rounded-full" />
                <div className="flex items-center gap-2">
                  <Clock className="w-3 h-3" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <h3 className="text-2xl font-serif font-medium text-[#262626] group-hover:text-[#4A8C8C] transition-colors leading-tight mb-4">
                {post.title}
              </h3>

              <p className="text-[#262626]/60 font-light leading-relaxed text-sm mb-6 flex-grow line-clamp-3">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-[#E2E8F0]">
                {post.tags.map(tag => (
                  <span key={tag} className="text-[9px] font-bold uppercase tracking-[0.15em] px-2 py-1 bg-[#E2E8F0] text-[#262626]/60 rounded-md border border-[#CBD5E1]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
      
      <div className="mt-20 flex justify-center">
        <a 
          href="#" 
          className="px-10 py-4 border border-[#E2E8F0] text-[#262626] text-[10px] font-bold uppercase tracking-[0.25em] hover:bg-[#262626] hover:text-white hover:border-[#262626] transition-all rounded-full shadow-sm hover:shadow-md flex items-center gap-3"
        >
          View All Entries
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>

      {/* Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12">
          <div 
            className="absolute inset-0 bg-[#141414]/80 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedPost(null)}
          />
          
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#FDFCF8] rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-300">
            {/* Close Button */}
            <button 
              onClick={() => setSelectedPost(null)}
              className="absolute top-6 right-6 z-10 p-2 bg-white/80 backdrop-blur-md border border-[#E2E8F0] rounded-full text-[#262626] hover:bg-[#262626] hover:text-white transition-colors shadow-sm"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="overflow-y-auto flex-grow">
              {/* Header Image */}
              <div className="w-full h-64 sm:h-80 md:h-96 relative">
                <img 
                  src={selectedPost.imageUrl} 
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#FDFCF8] to-transparent" />
              </div>

              {/* Content Container */}
              <div className="px-6 sm:px-12 md:px-20 pb-20 -mt-20 relative z-10">
                <div className="flex items-center gap-4 text-[10px] font-bold tracking-[0.2em] uppercase text-[#262626]/60 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3" />
                    <span>{selectedPost.date}</span>
                  </div>
                  <div className="w-1 h-1 bg-[#C8A951] rounded-full" />
                  <div className="flex items-center gap-2">
                    <Clock className="w-3 h-3" />
                    <span>{selectedPost.readTime}</span>
                  </div>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium text-[#262626] leading-tight mb-8">
                  {selectedPost.title}
                </h2>

                <div className="flex flex-wrap gap-2 mb-12">
                  {selectedPost.tags.map(tag => (
                    <span key={tag} className="text-[9px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 bg-[#E2E8F0] text-[#262626]/70 rounded-md border border-[#CBD5E1]">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="prose prose-lg prose-stone max-w-none">
                  {selectedPost.content ? (
                    selectedPost.content.split('\n\n').map((paragraph, idx) => (
                      <p key={idx} className="text-[#262626]/80 font-light leading-relaxed mb-6 text-lg">
                        {paragraph}
                      </p>
                    ))
                  ) : (
                    <p className="text-[#262626]/80 font-light leading-relaxed mb-6 text-lg">
                      {selectedPost.excerpt}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TheAnthology;
