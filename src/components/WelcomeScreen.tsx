import React from "react";
import SodaImage from "./SodaImage";

interface WelcomeScreenProps {
  onStart: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  const [isPopping, setIsPopping] = React.useState(false);

  const handlePop = () => {
    setIsPopping(true);
    // Reproducir un sonido de "Pop" aquí sería genial (falta audio)
    setTimeout(() => {
      onStart();
    }, 600);
  };

  return (
    <div
      className={`h-full flex flex-col items-center justify-center px-6 py-4 animate-pop-in transition-opacity duration-700 ${isPopping ? "opacity-0 scale-105" : "opacity-100"}`}
    >
      <div className="relative w-64 h-64 sm:w-72 sm:h-72 mb-4 sm:mb-8 shrink-0">
        <div className="absolute inset-0 bg-white rounded-[2.5rem] rotate-3 scale-105 shadow-xl"></div>
        <div className="absolute inset-0 bg-pop-blue/30 rounded-[2.5rem] -rotate-2 scale-100"></div>
        <div className="relative w-full h-full rounded-[2rem] overflow-hidden border-4 border-white shadow-inner bg-white z-10">
          <SodaImage
            src="/-raw-images/-raw-photoshoots/WhatsApp%20Image%202026-02-12%20at%208.52.40%20PM.jpeg"
            alt="Welcome"
          />
        </div>

        {/* Badge 'Since 2023' */}
        <div className="absolute -bottom-4 -right-2 bg-white px-3 py-1.5 rounded-full border-2 border-pop-purple shadow-lg transform rotate-[-5deg] animate-bounce z-20">
          <div className="flex items-center gap-1">
            <span
              className="material-symbols-outlined text-pop-blue text-lg filled"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              favorite
            </span>
            <span className="text-[10px] sm:text-sm font-bold text-pop-text font-display">
              Since 2018
            </span>
          </div>
        </div>

        {/* Bunny Sticker (Image Copy 12) - Left aligned & Bouncing */}
        <div
          className="absolute -bottom-8 -left-18 z-30 animate-bounce"
          style={{ animationDuration: "2.5s" }}
        >
          <img
            src="/-raw-images/-raw-icons/image%20copy%2012.png"
            alt="Bunny Love"
            className="w-32 h-32 sm:w-48 sm:h-48 object-contain drop-shadow-2xl transform -rotate-12 filter hover:brightness-110 transition-all"
          />
        </div>
      </div>

      <div className="text-center space-y-4 sm:space-y-6 relative z-10 w-full flex-1 flex flex-col justify-center min-h-0">
        <div className="relative inline-block shrink-0">
          <h1 className="font-soda text-5xl sm:text-6xl md:text-7xl leading-none text-white drop-shadow-[0_4px_0_rgba(0,210,255,0.8)] transform -rotate-3 mb-1 relative z-10">
            <span className="block text-outline-blue mb-1">Happy</span>
            <span className="block text-pop-blue text-outline drop-shadow-md">
              Valentine's
            </span>
            <span className="block text-pop-yellow text-outline-pink text-4xl sm:text-5xl md:text-6xl mt-1">
              Day!
            </span>
          </h1>
        </div>

        <div className="relative max-w-[260px] mx-auto mt-2 shrink-0">
          {/* Decorative Stickers around Paragraph */}
          <img
            src="/-raw-images/-raw-icons/image%20copy%205.png"
            className="absolute -left-12 top-1/2 -translate-y-1/2 w-16 h-auto z-20 animate-pulse drop-shadow-md"
            alt="Deco Left"
          />
          <img
            src="/-raw-images/-raw-icons/image%20copy%202.png"
            className="absolute -top-6 -right-6 w-10 h-10 z-0 opacity-80 rotate-12"
            alt="Deco"
          />
          <img
            src="/-raw-images/-raw-icons/image%20copy%203.png"
            className="absolute -bottom-4 -left-2 w-8 h-8 z-20 rotate-[-15deg]"
            alt="Deco"
          />

          <p className="font-medium text-[13px] sm:text-base text-pop-dark/80 leading-relaxed bg-white/40 backdrop-blur-md p-3 sm:p-4 rounded-2xl border-2 border-white shadow-sm transform rotate-1 relative z-10">
            Refreshing memories just for you. <br className="hidden sm:block" />{" "}
            Ready for a sweet sip of us?
          </p>
        </div>

        <button
          onClick={handlePop}
          disabled={isPopping}
          className={`group relative w-[85%] max-w-[340px] h-20 sm:h-28 mx-auto mt-6 sm:mt-10 rounded-full border-4 sm:border-8 border-white overflow-hidden transition-all duration-500 ease-out shrink-0
            ${isPopping ? "scale-125 opacity-0" : "hover:scale-105 active:scale-95 hover:-translate-y-1"}
            shadow-[0_15px_35px_-5px_rgba(0,210,255,0.5),0_8px_15px_-6px_rgba(0,0,0,0.1),inset_0_-6px_8px_-4px_rgba(0,0,0,0.1)]`}
        >
          {/* Background Animated Gradient (Recycled Holographic Logic) */}
          <div className="absolute inset-0 holographic opacity-90 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Soft Overlay to reinforce Pink/Blue Soda vibe */}
          <div className="absolute inset-0 bg-gradient-to-r from-pop-pink/20 to-pop-blue/20 mix-blend-overlay" />

          {/* Shine Effect */}
          <div className="absolute inset-0 w-full h-full">
            <div
              className={`absolute top-0 -inset-full h-full w-1/2 z-20 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/40 ${isPopping ? "animate-ping" : "group-hover:animate-shine"}`}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 flex items-center justify-center gap-4 h-full w-full">
            <span
              className="font-soda text-5xl sm:text-6xl tracking-tighter text-white drop-shadow-md transition-transform group-hover:scale-105"
              style={{
                WebkitTextStroke: "2px rgba(255, 107, 149, 0.4)", // Reduced Opacity
                paintOrder: "stroke fill",
                textShadow: "3px 3px 6px rgba(255,107,149,0.3)",
              }}
            >
              POP OPEN!
            </span>
          </div>
        </button>
      </div>

      <div className="mt-12 flex items-center gap-3 text-white text-xs font-bold tracking-widest uppercase opacity-80">
        <span className="material-symbols-outlined text-sm">star</span>
        <span>MADE WITH LOVE FOR YOU</span>
        <span className="material-symbols-outlined text-sm">star</span>
      </div>
    </div>
  );
};

export default WelcomeScreen;
