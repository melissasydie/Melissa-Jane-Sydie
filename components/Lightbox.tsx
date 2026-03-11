import React, { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  images: string[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ images, initialIndex, isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = React.useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, handleNext, handlePrev]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[300] bg-black/90 backdrop-blur-md flex items-center justify-center"
        onClick={onClose}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors z-50"
        >
          <X className="w-8 h-8" />
        </button>

        <button
          onClick={(e) => { e.stopPropagation(); handlePrev(); }}
          className="absolute left-4 md:left-8 p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors z-40"
        >
          <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" />
        </button>

        <button
          onClick={(e) => { e.stopPropagation(); handleNext(); }}
          className="absolute right-4 md:right-8 p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors z-40"
        >
          <ChevronRight className="w-8 h-8 md:w-10 md:h-10" />
        </button>

        <div 
          className="relative w-full h-full flex items-center justify-center p-4 md:p-12"
          onClick={(e) => e.stopPropagation()}
        >
          <motion.img
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            src={images[currentIndex].includes('i.ibb.co') ? images[currentIndex] : `https://placehold.co/1200x800?text=Image+${currentIndex + 1}`}
            alt={`Gallery image ${currentIndex + 1}`}
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
          />
          
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm font-mono tracking-widest">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Lightbox;
