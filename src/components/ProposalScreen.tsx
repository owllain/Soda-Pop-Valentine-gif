
import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { X } from 'lucide-react';
import SodaImage from './SodaImage';

interface ProposalScreenProps {
  onAccept: () => void;
  onBack: () => void;
}

const ProposalScreen: React.FC<ProposalScreenProps> = ({ onAccept, onBack }) => {
  const [showModal, setShowModal] = useState(false);

  const handleAccept = () => {
    // Change screen almost immediately for better flow
    setTimeout(onAccept, 200);

    // Soda Pop Confetti Explosion!
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#ffb7d5', '#a6e4ff', '#fff59e'] // Soda colors
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#ffb7d5', '#a6e4ff', '#fff59e']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  };

  return (
    <div className="h-full flex flex-col items-center justify-between px-4 animate-pop-in relative overflow-hidden" style={{ paddingTop: 'env(safe-area-inset-top)', paddingBottom: 'env(safe-area-inset-bottom)' }}>
      <div className="flex-1 w-full flex flex-col items-center justify-center py-8 min-h-0 overflow-y-auto no-scrollbar">

      {/* Decorative Sparkles (Image Copy 7) */}
      <img src="/-raw-images/-raw-icons/image%20copy%207.png" className="absolute top-20 left-4 w-8 h-8 object-contain animate-pulse z-0 opacity-60" alt="Sparkle" />
      <img src="/-raw-images/-raw-icons/image%20copy%207.png" className="absolute top-32 right-6 w-6 h-6 object-contain animate-pulse delay-500 z-0 opacity-60" alt="Sparkle" />
      <img src="/-raw-images/-raw-icons/image%20copy%207.png" className="absolute bottom-40 left-8 w-10 h-10 object-contain animate-pulse delay-200 z-0 opacity-50" alt="Sparkle" />
      <div className="relative z-10 text-center mb-6">
        <h2 className="font-soda text-5xl md:text-6xl text-white drop-shadow-[0_4px_0_rgba(255,105,180,0.8)] leading-tight transform -rotate-2 relative">
          <span className="block mb-2 text-outline-pink">Will you be</span>
          <span className="block text-6xl md:text-7xl text-pop-yellow text-outline-blue drop-shadow-xl transform rotate-3 mt-2">
            my Valentine?
          </span>
        </h2>
      </div>

      {/* Polaroid Gallery - Clean Cards */}
      <div className="relative w-full max-w-sm h-64 mb-10 z-10 perspective-1000 flex justify-center items-center">
        
        {/* Polaroid 1 - Left Tilted */}
        <div className="absolute left-0 w-32 p-2 bg-white rounded-lg shadow-xl transform -rotate-12 hover:rotate-[-6deg] hover:scale-105 transition-all duration-300 z-10 border-2 border-gray-100">
           <div className="w-full h-32 overflow-hidden rounded-md bg-pink-100 relative">
             <SodaImage src="/-raw-images/-raw-photoshoots/WhatsApp Image 2026-02-12 at 8.52.41 PM (2).jpeg" alt="Soda Pop Cutie" />
           </div>
        </div>

        {/* Polaroid 2 - Right Tilted */}
        <div className="absolute right-0 w-32 p-2 bg-white rounded-lg shadow-xl transform rotate-12 hover:rotate-[6deg] hover:scale-105 transition-all duration-300 z-10 border-2 border-gray-100">
           <div className="w-full h-32 overflow-hidden rounded-md bg-blue-100 relative">
             <SodaImage src="/-raw-images/-raw-photoshoots/WhatsApp Image 2026-02-12 at 8.46.25 PM (2).jpeg" alt="My Forever Soda" />
           </div>
        </div>

        {/* Polaroid 3 - Center Top */}
        <div className="absolute top-[-20px] w-36 p-2.5 bg-white rounded-lg shadow-2xl transform rotate-[-2deg] hover:rotate-0 hover:scale-110 transition-all duration-300 z-20">
           <div className="w-full h-36 overflow-hidden rounded-md bg-purple-100 relative">
             <SodaImage src="/-raw-images/-raw-photoshoots/WhatsApp Image 2026-02-12 at 8.52.42 PM.jpeg" alt="Us Together" />
           </div>
        </div>

        {/* Floating Soda Can & Bubbles Graphic */}
        <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 z-30 w-full text-center flex flex-col items-center">
           {/* Animated Main Can Container */}
           <div className="relative mb-2 w-32 h-32 flex items-center justify-center z-10">
             
             {/* Sticker Badge - Positioned at the bottom (base) of the can */}
             <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 z-30 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full border-2 border-pop-purple shadow-lg rotate-[-2deg] whitespace-nowrap">
                <span className="font-pixel text-[10px] text-pop-purple tracking-widest">YOU'RE MY SODA POP!</span>
             </div>

             <div className="absolute inset-0 bg-white/40 blur-2xl rounded-full scale-110 animate-pulse"></div>
             <img src="/-raw-images/-raw-icons/image%20copy%205.png" className="w-32 h-auto object-contain animate-can-rotate drop-shadow-2xl relative z-10" alt="Soda Can" />
             
             {/* Fizzing Bubbles System */}
             <div className="absolute inset-0 z-0 pointer-events-none">
                 <img src="/-raw-images/-raw-icons/image.png" className="absolute -top-10 left-4 w-4 h-4 object-contain animate-float opacity-80" style={{ animationDelay: '0s', animationDuration: '3s' }} alt="Bubble" />
                 <img src="/-raw-images/-raw-icons/image%20copy.png" className="absolute -top-16 right-8 w-6 h-6 object-contain animate-float opacity-70" style={{ animationDelay: '0.5s', animationDuration: '4s' }} alt="Bubble" />
                 <img src="/-raw-images/-raw-icons/image.png" className="absolute -top-24 left-8 w-3 h-3 object-contain animate-float opacity-60" style={{ animationDelay: '1.2s', animationDuration: '3.5s' }} alt="Bubble" />
                 <img src="/-raw-images/-raw-icons/image%20copy.png" className="absolute -top-8 -right-2 w-5 h-5 object-contain animate-float opacity-75" style={{ animationDelay: '2s', animationDuration: '4.5s' }} alt="Bubble" />
                 <img src="/-raw-images/-raw-icons/image.png" className="absolute -top-32 left-1/2 w-4 h-4 object-contain animate-float opacity-50" style={{ animationDelay: '0.8s', animationDuration: '5s' }} alt="Bubble" />
                 <img src="/-raw-images/-raw-icons/image%20copy.png" className="absolute -top-20 -left-4 w-5 h-5 object-contain animate-float opacity-65" style={{ animationDelay: '1.8s', animationDuration: '3.8s' }} alt="Bubble" />
                 <img src="/-raw-images/-raw-icons/image.png" className="absolute top-[-5rem] right-0 w-3 h-3 object-contain animate-float opacity-40" style={{ animationDelay: '2.5s', animationDuration: '4.2s' }} alt="Bubble" />
             </div>
           </div>
        </div>
      </div>

      </div>

      {/* Action Buttons */}
      <div className="w-full max-w-sm mx-auto space-y-4 z-20 pb-4 shrink-0">
        <button
          onClick={handleAccept}
          className="group relative w-full h-24 rounded-full border-8 border-white shadow-[0_10px_40px_-10px_rgba(166,228,255,0.6)] overflow-hidden transition-transform hover:scale-105 active:scale-95 active:shadow-sm"
        >
          {/* Background Animated Gradient */}
          <div className="absolute inset-0 holographic opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute inset-0 bg-gradient-to-r from-pop-pink/20 to-pop-blue/20 mix-blend-overlay" />
          
          {/* Shine Effect */}
          <div className="absolute inset-0 w-full h-full">
            <div className="absolute top-0 -inset-full h-full w-1/2 z-20 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/40 group-hover:animate-shine" />
          </div>

          {/* Content */}
          <div className="relative z-10 flex items-center justify-center gap-4 h-full w-full">
             <span className="font-soda text-4xl sm:text-5xl tracking-tight text-white drop-shadow-md" style={{ WebkitTextStroke: '2px #29b6f6', paintOrder: 'stroke fill', textShadow: '2px 2px 0px rgba(41,182,246,0.4)' }}>
              YES, YES!
             </span>
             <img src="/-raw-images/-raw-icons/image.png" className="w-12 h-12 object-contain animate-wiggle drop-shadow-md filter brightness-110" alt="Soda Love" />
          </div>
        </button>
        
        <button 
          onClick={() => setShowModal(true)}
          className="group relative w-full h-16 rounded-full border-4 border-white/60 bg-white/20 backdrop-blur-md shadow-sm overflow-hidden transition-all hover:bg-white/40 hover:border-white active:scale-95 flex items-center justify-center gap-2"
        >
            <span className="font-display font-bold text-white text-lg tracking-wide group-hover:underline decoration-wavy decoration-white underline-offset-4 drop-shadow-sm">
              Wait, one more song... 🎵
            </span>
        </button>
      </div>

      {/* Photocard Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-[320px] animate-pop-in">
            {/* Photocard Container with Gradient Border */}
            <div className="p-1.5 rounded-3xl holographic shadow-[0_20px_50px_rgba(166,228,255,0.5)]">
              <div className="bg-white rounded-[20px] p-4 flex flex-col items-center gap-4 relative overflow-hidden">
                {/* Decorative Bubbles & Sparkles inside Photocard */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden rounded-[20px]">
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-pop-pink/10 blur-xl"></div>
                  <div className="absolute bottom-10 right-10 w-16 h-16 rounded-full bg-pop-blue/10 blur-xl"></div>
                  <img src="/-raw-images/-raw-icons/image%20copy%207.png" className="absolute top-8 right-6 w-6 h-6 object-contain animate-pulse opacity-40" alt="" />
                  <img src="/-raw-images/-raw-icons/image%20copy%207.png" className="absolute bottom-20 left-4 w-4 h-4 object-contain animate-pulse delay-700 opacity-40" alt="" />
                </div>

                {/* Close Button */}
                <button 
                  onClick={() => setShowModal(false)}
                  className="absolute top-3 right-3 p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 transition-colors z-20 shadow-sm"
                >
                  <X size={16} />
                </button>

                {/* Header/Title */}
                <div className="w-full text-center z-10">
                  <span className="font-pixel text-[9px] text-pop-purple uppercase tracking-[0.2em] font-bold">Soda Pop Collector</span>
                </div>

                {/* Main Image (Photocard Style) */}
                <div className="w-full aspect-[3/4] rounded-xl overflow-hidden shadow-lg border-2 border-gray-50 relative group z-10">
                  <SodaImage 
                    src="/-raw-images/crow_denied.webp" 
                    alt="Crow Denied" 
                  />
                  
                  {/* Status Sticker on Image */}
                  <div className="absolute bottom-2 right-2 bg-pop-blue text-white font-pixel text-[8px] px-2 py-1 rounded-md shadow-md animate-pulse">
                    LIMITED
                  </div>
                </div>

                {/* Text "SAY YES!! is the only correct answer" */}
                <div className="w-full py-1 flex flex-col items-center gap-1 z-10 text-center">
                  <h3 className="font-soda text-4xl text-pop-blue text-outline-blue drop-shadow-[0_2px_0_rgba(255,255,255,1)] transform -rotate-1 leading-tight">
                    SAY YES!!
                  </h3>
                  <p className="font-display text-xs font-bold text-pop-purple uppercase tracking-tighter opacity-80 -mt-1 transform rotate-1">
                    is the only correct answer
                  </p>
                  <div className="flex gap-3 mt-1">
                    <span className="w-2 h-2 rounded-full bg-pop-pink animate-bounce shadow-sm"></span>
                    <span className="w-2 h-2 rounded-full bg-pop-blue animate-bounce delay-100 shadow-sm"></span>
                    <span className="w-2 h-2 rounded-full bg-pop-yellow animate-bounce delay-200 shadow-sm"></span>
                  </div>
                </div>

                {/* Decorative Sticker Bottom Left */}
                <img 
                  src="/-raw-images/-raw-icons/image%20copy%203.png" 
                  className="absolute -bottom-2 -left-2 w-14 h-14 object-contain rotate-[-15deg] drop-shadow-md z-20" 
                  alt="Sticker" 
                />

                {/* "Return" Button to close */}
                <button 
                  onClick={() => setShowModal(false)}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-pop-pink to-pop-blue text-white font-display font-bold text-sm tracking-widest shadow-lg hover:shadow-xl hover:brightness-110 transition-all mt-1 active:scale-95 z-10"
                >
                  OH, ALRIGHT! ✨
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProposalScreen;
