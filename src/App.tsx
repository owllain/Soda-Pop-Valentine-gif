
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WelcomeScreen from './components/WelcomeScreen';
import MemorySlideshow from './components/MemorySlideshow';
import ProposalScreen from './components/ProposalScreen';
import SuccessScreen from './components/SuccessScreen';
import FloatingElements from './components/FloatingElements';
import CassettePlayer from './components/CassettePlayer';
import { AppScreen } from './types';

const App: React.FC = () => {
  const [screen, setScreen] = useState<AppScreen>('WELCOME');
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);
  const [isEvil, setIsEvil] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(true);

  const handleStart = () => {
    setScreen('MEMORIES');
    // Aseguramos que se intente reproducir de nuevo al interactuar
    setIsMusicPlaying(true);
  };

  return (
    <div className={`max-w-md mx-auto safe-h-screen relative flex flex-col overflow-hidden transition-colors duration-700 padding-safe-area ${isEvil ? 'evil-theme bg-pop-dark' : 'bg-pop-blue/10'}`}>
      <FloatingElements />

      {/* Background Image Layer */}
      <div 
        className={`fixed inset-0 z-0 transition-all duration-1000 ${isEvil ? 'opacity-40 grayscale-0 contrast-125 scale-105' : 'opacity-20 grayscale-0'}`}
        style={{ 
          backgroundImage: `url("/-raw-images/${isEvil ? 'background2.png' : 'background.png'}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Music Toggle Button */}
      <button 
        onClick={() => setIsPlayerOpen(!isPlayerOpen)}
        className="fixed top-safe-top left-4 z-[10001] w-14 h-14 rounded-full holographic border-4 border-white shadow-xl flex items-center justify-center text-white active:scale-95 transition-transform group"
        style={{ top: 'calc(1rem + env(safe-area-inset-top))' }}
      >
        <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
        <span className="material-symbols-outlined text-3xl drop-shadow-md">
          {isPlayerOpen ? 'close' : 'music_note'}
        </span>
        {(!isPlayerOpen && isMusicPlaying) && (
          <motion.div 
            animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }} 
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="absolute -top-1 -right-1 w-5 h-5 bg-pop-pink rounded-full border-2 border-white flex items-center justify-center shadow-sm"
          >
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
          </motion.div>
        )}
      </button>

      {/* Evil Toggle Button */}
      <button 
        onClick={() => setIsEvil(!isEvil)}
        className="fixed left-4 z-[10001] w-14 h-14 rounded-full holographic border-4 border-white shadow-xl flex items-center justify-center text-white transition-all duration-500 active:scale-95 group"
        title={isEvil ? "Go Sweet" : "Go Evil"}
        style={{ top: 'calc(5rem + env(safe-area-inset-top))' }}
      >
        <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
        <span className="material-symbols-outlined text-3xl drop-shadow-md relative z-10 text-white">
          {isEvil ? 'skull' : 'favorite'}
        </span>
        {isEvil && (
          <motion.div 
            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }} 
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute inset-0 bg-pop-pink rounded-full filter blur-md"
          />
        )}
      </button>
      
      <div className="flex-1 relative z-10 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={screen}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="h-full w-full"
          >
            {screen === 'WELCOME' && <WelcomeScreen onStart={handleStart} />}
            {screen === 'MEMORIES' && <MemorySlideshow onContinue={() => setScreen('PROPOSAL')} />}
            {screen === 'PROPOSAL' && <ProposalScreen onAccept={() => setScreen('SUCCESS')} onBack={() => setScreen('WELCOME')} />}
            {screen === 'SUCCESS' && <SuccessScreen />}
          </motion.div>
        </AnimatePresence>
      </div>

      <CassettePlayer 
        isOpen={isPlayerOpen} 
        isEvil={isEvil} 
        isPlaying={isMusicPlaying}
        setIsPlaying={setIsMusicPlaying}
      />
      
      {/* Dynamic Grid Pattern Background Layer */}
      <div className="fixed inset-0 pointer-events-none opacity-10 z-0" 
           style={{ 
             backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', 
             backgroundSize: '30px 30px' 
           }}>
      </div>
    </div>
  );
};

export default App;
