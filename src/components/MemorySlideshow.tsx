
import React, { useState, useRef } from 'react';
import { MEMORIES } from '../constants';
import { Memory } from '../types';
import SodaImage from './SodaImage';

interface MemorySlideshowProps {
  onContinue: () => void;
}

const MemorySlideshow: React.FC<MemorySlideshowProps> = ({ onContinue }) => {
  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollLeft = e.currentTarget.scrollLeft;
    const itemWidth = e.currentTarget.offsetWidth * 0.8; // Approximate item width based on 80vw
    const index = Math.round(scrollLeft / (itemWidth + 24)); // 24 is the gap-6
    if (index !== activeIndex) {
        setActiveIndex(index);
    }
  };

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
        const itemWidth = scrollRef.current.offsetWidth * 0.8;
        scrollRef.current.scrollTo({
            left: index * (itemWidth + 24),
            behavior: 'smooth'
        });
        setActiveIndex(index);
    }
  };

  return (
    <div className="h-full flex flex-col pt-safe-area animate-pop-in" style={{ paddingTop: 'calc(3.5rem + env(safe-area-inset-top))' }}>
      <div className="px-6 mb-1 sm:mb-2 flex flex-col items-center shrink-0">
        <h2 className="text-3xl sm:text-5xl font-soda text-white text-outline-blue drop-shadow-[0_4px_0_rgba(107,76,154,0.6)] leading-tight text-center transform -rotate-1">
          Our Memories
        </h2>
        <div className="bg-white/50 px-3 sm:px-4 py-1.5 rounded-full mt-1 sm:mt-2 border border-white backdrop-blur-sm shadow-sm transform rotate-1">
          <p className="text-[9px] sm:text-xs text-pop-purple font-black tracking-[0.2em] uppercase">✨ FOREVER WITH YOU ✨</p>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center relative group/slideshow">
        {/* Navigation Buttons for better UX */}
        <div className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-30 transition-all">
            <button 
                onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full relative overflow-hidden border-2 sm:border-4 border-white shadow-xl flex items-center justify-center text-white transition-all active:scale-90 ${activeIndex === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            >
                <div className="absolute inset-0 holographic scale-110" />
                <span className="material-symbols-outlined font-black relative z-10 drop-shadow-md text-xl sm:text-2xl">chevron_left</span>
            </button>
        </div>
        <div className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-30 transition-all">
            <button 
                onClick={() => scrollToIndex(Math.min(MEMORIES.length - 1, activeIndex + 1))}
                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full relative overflow-hidden border-2 sm:border-4 border-white shadow-xl flex items-center justify-center text-white transition-all active:scale-90 ${activeIndex === MEMORIES.length - 1 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            >
                <div className="absolute inset-0 holographic scale-110" />
                <span className="material-symbols-outlined font-black relative z-10 drop-shadow-md text-xl sm:text-2xl">chevron_right</span>
            </button>
        </div>

        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-6 px-8 py-10"
        >
          {MEMORIES.map((memory) => (
            <div
              key={memory.id}
              onClick={() => setSelectedMemory(memory)}
              className="snap-center shrink-0 w-[70vw] sm:w-[75vw] max-w-sm aspect-[3/4.2] sm:aspect-[4/5] relative group cursor-pointer active:scale-95 transition-transform"
            >
              {/* Decorative Buny Ears */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-20 flex gap-1 pointer-events-none">
                <div className="w-8 h-16 bg-white border-4 border-pop-pink rounded-full transform -rotate-12 translate-y-2"></div>
                <div className="w-8 h-16 bg-white border-4 border-pop-pink rounded-full transform rotate(12deg) translate-y-2"></div>
              </div>

              <div className="w-full h-full rounded-[2.5rem] p-4 holographic shadow-xl relative overflow-hidden border-8 border-white group-hover:scale-[1.02] transition-transform duration-500">
                <div className="absolute inset-0 bg-white/40 backdrop-blur-sm opacity-50"></div>
                
                <div className="w-full h-full relative z-10 rounded-[2rem] overflow-hidden shadow-inner border-2 border-white/50">
                  <SodaImage
                    src={memory.image}
                    alt={memory.title}
                  />
                  
                  {/* Click Hint Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                      <div className="bg-white/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/60 shadow-lg scale-90 group-hover:scale-100 transition-transform">
                          <span className="text-white font-bold text-sm tracking-widest uppercase flex items-center gap-2">
                              <span className="material-symbols-outlined text-sm">zoom_in</span>
                              Tap to Zoom
                          </span>
                      </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-pop-purple/60 via-transparent to-transparent z-10 pointer-events-none"></div>
                  <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col items-center text-center">
                    <div className="bg-white text-pop-pink px-4 py-1 rounded-full text-xs font-black shadow-md mb-2 border-2 border-pop-pink transform -rotate-2">
                      {memory.category}
                    </div>
                    <h3 className="text-2xl font-display font-bold text-white mb-1 drop-shadow-md">{memory.title}</h3>
                    <div className="flex items-center justify-center text-white/90 text-xs font-bold bg-white/20 backdrop-blur-sm px-3 py-1 rounded-lg mt-2">
                      <span className="material-symbols-outlined text-sm mr-1">place</span>
                      <span>{memory.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="shrink-0 w-4"></div>
        </div>

        {/* Progress Dots / Index Indicators */}
        <div className="flex justify-center gap-2 sm:gap-3 mt-2 sm:mt-4">
          {MEMORIES.map((_, i) => (
            <button 
                key={i} 
                onClick={() => scrollToIndex(i)}
                className={`relative overflow-hidden transition-all duration-500 shadow-md rounded-full border-2 border-white ${
                  i === activeIndex 
                    ? 'w-8 h-3 sm:w-12 sm:h-4' 
                    : 'w-3 h-3 sm:w-4 sm:h-4 bg-white/40 backdrop-blur-sm'
                }`}
            >
              {i === activeIndex && (
                <div className="absolute inset-0 holographic scale-150 animate-pulse" />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="px-6 pb-safe-area mt-auto shrink-0" style={{ paddingBottom: 'calc(0.5rem + env(safe-area-inset-bottom))' }}>
        <button
          onClick={onContinue}
          className="group relative w-full max-w-[400px] h-24 mx-auto mt-4 rounded-full border-8 border-white shadow-[0_10px_40px_-10px_rgba(255,183,213,0.8)] overflow-hidden transition-transform hover:scale-105 active:scale-95 active:shadow-sm"
        >
          {/* Background Animated Gradient */}
          <div className="absolute inset-0 holographic opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute inset-0 bg-gradient-to-r from-pop-pink/20 to-pop-blue/20 mix-blend-overlay" />
          
          {/* Shine Effect */}
          <div className="absolute inset-0 w-full h-full">
            <div className="absolute top-0 -inset-full h-full w-1/2 z-20 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/40 group-hover:animate-shine" />
          </div>

          {/* Content */}
          <div className="relative z-10 flex items-center justify-center gap-3 h-full w-full">
             <span className="font-soda text-3xl sm:text-4xl tracking-tight text-white drop-shadow-md" style={{ WebkitTextStroke: '1.5px #ff6b95', paintOrder: 'stroke fill', textShadow: '2px 2px 0px rgba(255,107,149,0.4)' }}>
              Wait, one more...
             </span>
             <span className="material-symbols-outlined text-4xl text-white animate-bounce drop-shadow-md" style={{ WebkitTextStroke: '1px #ff6b95' }}>
              arrow_forward
             </span>
          </div>
        </button>
      </div>

      {/* Detail Overlay */}
      {selectedMemory && (
        <div 
          className="fixed inset-0 z-[60] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm"
          onClick={() => setSelectedMemory(null)}
        >
          <div 
            className="w-full max-w-sm bg-gradient-to-br from-pop-purple to-pop-dark rounded-[3rem] p-8 animate-pop-in relative overflow-hidden shadow-[0_20px_50px_rgba(107,76,154,0.5)] border-4 border-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-pop-pink/30 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-pop-blue/30 rounded-full blur-2xl"></div>
            
            <button 
              onClick={() => setSelectedMemory(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white flex items-center justify-center text-pop-pink shadow-md active:scale-90 z-10"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-xl mb-6 relative z-10">
              <SodaImage src={selectedMemory.image} alt={selectedMemory.title} />
            </div>
            <div className="text-center space-y-4 relative z-10">
              <div className="text-pop-blue font-black text-xs tracking-widest uppercase bg-white/10 py-1 px-3 rounded-full inline-block">
                {selectedMemory.date} • {selectedMemory.location}
              </div>
              <h3 className="text-3xl font-display font-bold text-white drop-shadow-md">{selectedMemory.title}</h3>
              <div className="h-[2px] w-12 bg-white/30 mx-auto rounded-full"></div>
              <p className="text-white font-medium leading-relaxed italic text-lg drop-shadow-sm">
                "{selectedMemory.caption}"
              </p>
              <div className="pt-4 flex justify-center items-center gap-4">
                 {/* Left Side Icons */}
                 <img src="/-raw-images/-raw-icons/image%20copy%209.png" className="w-10 h-10 object-contain animate-bounce delay-100 drop-shadow-md" alt="icon" />
                 <img src="/-raw-images/-raw-icons/image%20copy.png" className="w-12 h-12 object-contain animate-bounce delay-200 drop-shadow-md" alt="icon" />
                 
                 {/* Main Center Icon */}
                 <div className="relative group cursor-pointer">
                    <img src="/-raw-images/-raw-icons/image.png" className="w-16 h-16 object-contain animate-bounce drop-shadow-xl hover:scale-110 transition-transform" alt="Main Icon" />
                 </div>

                 {/* Right Side Icons */}
                 <img src="/-raw-images/-raw-icons/image%20copy%2010.png" className="w-12 h-12 object-contain animate-bounce delay-300 drop-shadow-md" alt="icon" />
                 <img src="/-raw-images/-raw-icons/image%20copy%2011.png" className="w-10 h-10 object-contain animate-bounce delay-500 drop-shadow-md" alt="icon" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MemorySlideshow;
