
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Category, Project } from '../types';
import SectionHeading from './SectionHeading';
import { ArrowUpRight, X, Lock, ExternalLink, Play, Share2, ZoomIn } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Lightbox from './Lightbox';

const CATEGORIES: Category[] = ['All', 'Writing', 'Audio', 'Video', 'Marketing', 'Design'];

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 5);

  const handleCategoryChange = (cat: Category) => {
    setActiveCategory(cat);
    setShowAll(false);
  };

  const handleProjectClick = (project: Project) => {
    if (project.modalType) {
      setSelectedProject(project);
    } else if (project.link) {
      window.open(project.link, '_blank', 'noopener,noreferrer');
    }
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section id="the-salon" className="py-32 px-6 max-w-7xl mx-auto relative">
      <SectionHeading 
        title="The Salon" 
        subtitle="A curated portfolio of work where human creativity meets technical precision."
        centered
      />

      <div className="flex flex-wrap gap-10 mb-20 border-b border-[#E2E8F0] pb-6">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`pb-4 text-xs font-bold tracking-[0.25em] uppercase transition-all relative ${
              activeCategory === cat 
                ? 'text-[#4A8C8C]' 
                : 'text-[#262626]/40 hover:text-[#262626]'
            }`}
          >
            {cat}
            {activeCategory === cat && (
              <div className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-[#4A8C8C]" />
            )}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {displayedProjects.map((project) => {
          return (
            <div 
              key={project.id}
              className="group flex flex-col cursor-pointer"
              onClick={() => handleProjectClick(project)}
            >
              <div className="relative mb-8 bg-white p-2 appliance-panel transition-all duration-500 hover:shadow-lg">
                <div className="aspect-[4/3] md:aspect-video overflow-hidden bg-[#F1F5F9] rounded-xl relative">
                  {project.modalType === 'gallery' && project.galleryImages && project.galleryImages.length >= 3 ? (
                    <div className="grid grid-cols-2 gap-1 w-full h-full">
                      <div className="relative overflow-hidden h-full">
                         <img 
                          src={project.galleryImages[0].includes('i.ibb.co') ? project.galleryImages[0] : `https://placehold.co/600x400?text=Image+1`} 
                          alt={project.title}
                          className="w-full h-full object-cover object-top grayscale brightness-110 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                        />
                      </div>
                      <div className="grid grid-rows-2 gap-1 h-full">
                        <div className="relative overflow-hidden h-full">
                          <img 
                            src={project.galleryImages[1].includes('i.ibb.co') ? project.galleryImages[1] : `https://placehold.co/600x400?text=Image+2`} 
                            alt={project.title}
                            className="w-full h-full object-cover object-top grayscale brightness-110 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                          />
                        </div>
                        <div className="relative overflow-hidden h-full">
                          <img 
                            src={project.galleryImages[2].includes('i.ibb.co') ? project.galleryImages[2] : `https://placehold.co/600x400?text=Image+3`} 
                            alt={project.title}
                            className="w-full h-full object-cover object-top grayscale brightness-110 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                          />
                          {project.galleryImages.length > 3 && (
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white font-bold text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                              +{project.galleryImages.length - 3} More
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <img 
                      src={project.imageUrl} 
                      alt={project.title}
                      className="w-full h-full object-cover object-top grayscale brightness-110 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                    />
                  )}
                  {project.modalType === 'gated' && (
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-sm">
                      <Lock className="w-4 h-4 text-[#E08D79]" />
                    </div>
                  )}
                </div>
                <div className="absolute top-6 right-6 p-3 bg-white/90 backdrop-blur-sm border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-500 rounded-full shadow-sm z-10">
                  {project.modalType ? <Share2 className="w-4 h-4 text-[#262626]" /> : <ArrowUpRight className="w-4 h-4 text-[#262626]" />}
                </div>
              </div>
              
              <div className="px-2">
                <div className="flex justify-between items-baseline mb-4">
                  <h3 className="text-3xl font-serif font-medium text-[#262626] group-hover:text-[#4A8C8C] transition-colors leading-tight">
                    {project.title}
                  </h3>
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#E08D79] uppercase">
                    {project.category}
                  </span>
                </div>
                
                <p className="text-[#262626]/60 font-light leading-relaxed mb-6 text-lg line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between text-[10px] font-bold tracking-[0.2em] uppercase text-[#262626]/30">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-[1px] bg-[#C8A951]" />
                    <span>{project.client}</span>
                  </div>
                  <span>{project.projectType}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {!showAll && filteredProjects.length > 5 && (
        <div className="mt-20 flex justify-center">
          <button 
            onClick={() => setShowAll(true)}
            className="px-12 py-5 border border-[#4A8C8C] text-[#4A8C8C] text-xs font-bold uppercase tracking-[0.3em] rounded-full hover:bg-[#4A8C8C] hover:text-white transition-all duration-500 shadow-sm hover:shadow-md"
          >
            View All Pieces
          </button>
        </div>
      )}

      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-[#262626]/60 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#FDFCF8] max-w-2xl w-full max-h-[90vh] flex flex-col rounded-2xl shadow-2xl overflow-hidden relative border border-[#E2E8F0]"
            >
              <div className="sticky top-0 z-20 flex justify-end p-4 md:p-6 pointer-events-none">
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="p-2 bg-white/90 backdrop-blur-sm hover:bg-[#F1F5F9] rounded-full transition-colors shadow-sm pointer-events-auto border border-[#E2E8F0]"
                >
                  <X className="w-6 h-6 text-[#262626]" />
                </button>
              </div>

              <div className="p-6 md:p-14 pt-0 md:pt-0 overflow-y-auto custom-scrollbar">
                <span className="text-[#E08D79] font-bold tracking-[0.3em] uppercase text-xs mb-6 block">
                  {selectedProject.client} — {selectedProject.projectType}
                </span>
                
                <h3 className="text-4xl font-serif font-medium text-[#262626] mb-6 leading-tight">
                  {selectedProject.title}
                </h3>

                {selectedProject.modalType === 'gated' && (
                  <div className="space-y-8">
                    <div className="prose prose-lg text-[#262626]/70 font-light leading-relaxed">
                      <p className="italic border-l-4 border-[#C8A951] pl-6 py-2 bg-[#C8A951]/5 rounded-r-lg">
                        "{selectedProject.excerpt}"
                      </p>
                      <p>
                        This content is exclusive to the {selectedProject.platformName} community. 
                        Join thousands of professionals accessing premium insights daily.
                      </p>
                    </div>
                    
                    <div className="bg-[#F1F5F9] p-6 rounded-xl border border-[#E2E8F0]">
                      <p className="text-sm text-[#262626]/60 mb-4 font-medium flex items-center gap-2">
                        <Lock className="w-4 h-4" />
                        Free Access
                      </p>
                      <p className="text-xs text-[#262626]/50 mb-6 uppercase tracking-wider font-bold">
                        {selectedProject.platformName} is 100% free to join. No payment required.
                      </p>
                      <a 
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-[#4A8C8C] text-white font-bold uppercase tracking-widest text-xs rounded-full hover:bg-[#262626] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 w-full justify-center md:w-auto"
                      >
                        Read Full Article
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                )}

                {selectedProject.modalType === 'social' && (
                  <div className="space-y-8">
                    <p className="text-[#262626]/70 text-lg font-light leading-relaxed">
                      Connect with {selectedProject.client} across their digital ecosystem.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {selectedProject.socialLinks?.map((link) => (
                        <a
                          key={link.platform}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-4 bg-white border border-[#E2E8F0] rounded-xl hover:border-[#4A8C8C] hover:shadow-md transition-all group"
                        >
                          <span className="font-bold text-[#262626] group-hover:text-[#4A8C8C] transition-colors">{link.platform}</span>
                          <ExternalLink className="w-4 h-4 text-[#262626]/40 group-hover:text-[#4A8C8C]" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {selectedProject.modalType === 'seasons' && (
                  <div className="space-y-8">
                    <p className="text-[#262626]/70 text-lg font-light leading-relaxed">
                      Select a season to begin watching.
                    </p>
                    <div className="space-y-4">
                      {selectedProject.seasonLinks?.map((season) => (
                        <a
                          key={season.season}
                          href={season.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-6 bg-white border border-[#E2E8F0] rounded-xl hover:border-[#E08D79] hover:shadow-md transition-all group"
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-[#F1F5F9] rounded-full flex items-center justify-center group-hover:bg-[#E08D79] transition-colors">
                              <Play className="w-4 h-4 text-[#262626] group-hover:text-white ml-1" />
                            </div>
                            <span className="font-bold text-lg text-[#262626]">{season.season}</span>
                          </div>
                          <ArrowUpRight className="w-5 h-5 text-[#262626]/40 group-hover:text-[#E08D79]" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {selectedProject.modalType === 'gallery' && (
                  <div className="space-y-8">
                    <p className="text-[#262626]/70 text-lg font-light leading-relaxed">
                      A visual journey through the collection.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                      {selectedProject.galleryImages?.map((imgUrl, index) => (
                        <div 
                          key={index} 
                          className="aspect-[3/4] rounded-lg overflow-hidden bg-[#F1F5F9] border border-[#E2E8F0] group/img relative cursor-pointer"
                          onClick={() => openLightbox(index)}
                        >
                          <img 
                            src={imgUrl.includes('i.ibb.co') || imgUrl.includes('ibb.co') ? imgUrl : `https://placehold.co/600x800?text=Image+${index + 1}`} 
                            alt={`Gallery image ${index + 1}`}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110 grayscale group-hover/img:grayscale-0"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover/img:opacity-100">
                            <ZoomIn className="w-6 h-6 text-white drop-shadow-md" />
                          </div>
                        </div>
                      ))}
                    </div>

                    {selectedProject.carouselPostImages && selectedProject.carouselPostImages.length > 0 && (
                      <div className="mt-12 pt-12 border-t border-[#E2E8F0]">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E08D79] mb-6">Featured Carousel Post</h4>
                        <div className="flex gap-4 overflow-x-auto pb-6 snap-x snap-mandatory custom-scrollbar">
                          {selectedProject.carouselPostImages.map((imgUrl, index) => (
                            <div 
                              key={`carousel-${index}`} 
                              className="flex-shrink-0 w-64 aspect-square rounded-xl overflow-hidden bg-[#F1F5F9] border border-[#E2E8F0] snap-center shadow-sm"
                            >
                              <img 
                                src={imgUrl} 
                                alt={`Carousel slide ${index + 1}`}
                                className="w-full h-full object-cover"
                                loading="lazy"
                              />
                            </div>
                          ))}
                        </div>
                        <p className="text-[10px] text-[#262626]/40 italic mt-2">← Swipe to view full carousel</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {selectedProject?.modalType === 'gallery' && selectedProject.galleryImages && (
        <Lightbox 
          images={selectedProject.galleryImages}
          initialIndex={lightboxIndex}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </section>
  );
};

export default Portfolio;
