import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { slides } from './slides';

const Slideshow: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = slides.length;

  const nextSlide = () => setCurrentSlide(prev => Math.min(prev + 1, totalSlides - 1));
  const prevSlide = () => setCurrentSlide(prev => Math.max(prev - 1, 0));

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="flex flex-col h-full bg-[#FDFBF7] text-stone-900">
      {/* Slide Content Area */}
      <div className="flex-1 p-6 md:p-10 overflow-y-auto flex flex-col justify-center items-center">
          <div className="w-full max-w-[90rem] h-full flex flex-col">
            <CurrentSlideComponent />
          </div>
      </div>

      {/* Control Bar */}
      <div className="h-20 bg-white border-t border-stone-200 flex items-center justify-between px-8 shrink-0 shadow-[0_-5px_15px_rgba(0,0,0,0.02)] z-10">
         <button 
           onClick={prevSlide} 
           disabled={currentSlide === 0}
           className="flex items-center gap-3 text-stone-500 hover:text-stone-900 disabled:opacity-30 disabled:cursor-not-allowed font-bold transition-colors px-4 py-2 rounded-lg hover:bg-stone-50"
         >
             <ChevronLeft size={24} /> Previous
         </button>

         <div className="flex gap-2">
             {Array.from({ length: totalSlides }).map((_, idx) => (
                 <button 
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${currentSlide === idx ? 'bg-[#D97706] w-8' : 'bg-stone-300 w-2 hover:bg-stone-400'}`}
                    aria-label={`Go to slide ${idx + 1}`}
                 />
             ))}
         </div>

         <button 
           onClick={nextSlide} 
           disabled={currentSlide === totalSlides - 1}
           className="flex items-center gap-3 text-stone-500 hover:text-stone-900 disabled:opacity-30 disabled:cursor-not-allowed font-bold transition-colors px-4 py-2 rounded-lg hover:bg-stone-50"
         >
             Next <ChevronRight size={24} />
         </button>
      </div>
    </div>
  );
};

export default Slideshow;