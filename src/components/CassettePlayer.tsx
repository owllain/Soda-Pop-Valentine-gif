import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, SkipForward, SkipBack } from 'lucide-react';
import config from '../data/config.json';

interface CassettePlayerProps {
    isOpen?: boolean;
    isEvil?: boolean;
    isPlaying: boolean;
    setIsPlaying: (playing: boolean) => void;
}

export const CassettePlayer: React.FC<CassettePlayerProps> = ({ 
    isOpen = true, 
    isEvil = false,
    isPlaying,
    setIsPlaying
}) => {
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const audioRef = useRef<HTMLAudioElement>(null);
    const tracks = config.assets.tracks;

    const togglePlay = () => {
        if (!audioRef.current) return;
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch(err => console.log('Play error:', err));
        }
        setIsPlaying(!isPlaying);
    };

    const nextTrack = () => {
        const nextIndex = (currentTrackIndex + 1) % tracks.length;
        setCurrentTrackIndex(nextIndex);
    };

    const prevTrack = () => {
        const prevIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
        setCurrentTrackIndex(prevIndex);
    };

    // Sincronización con el tema Evil
    useEffect(() => {
        if (isEvil) {
            // Cambiar a Your Idol (Índice 2)
            setCurrentTrackIndex(2);
        } else {
            // Cambiar a Soda Pop Spanish (Índice 0)
            setCurrentTrackIndex(0);
        }
    }, [isEvil]);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.load();
            if (isPlaying) {
                audioRef.current.play().catch(err => console.log('Transition play error:', err));
            }
        }
    }, [currentTrackIndex]);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;
        const handleEnded = () => nextTrack();
        audio.addEventListener('ended', handleEnded);
        return () => audio.removeEventListener('ended', handleEnded);
    }, [currentTrackIndex]);

    // El efecto de "autoplay" ahora es controlado por la prop isPlaying
    useEffect(() => {
        if (audioRef.current && isPlaying) {
            audioRef.current.play().catch(err => {
                console.log("Play failed, resetting state:", err);
                setIsPlaying(false);
            });
        }
    }, [isPlaying]);

    const currentTrack = tracks[currentTrackIndex];

    return (
        <div className="fixed bottom-10 right-4 z-[10000] pointer-events-none">
            {/* Audio Logic */}
            <audio
                ref={audioRef}
                preload="auto"
                src={currentTrack.path}
            />

            {/* Animated Interface - Soda Pop Style */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: 20, rotate: 5, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 20, rotate: 5, scale: 0.9 }}
                        className="pointer-events-auto bg-white/90 backdrop-blur-md rounded-[2.5rem] p-6 shadow-2xl border-4 border-pop-pink relative overflow-hidden"
                        style={{ width: '280px' }}
                    >
                        {/* Decorative Bubbles */}
                        <div className="absolute top-2 left-4 w-3 h-3 bg-pop-blue/40 rounded-full blur-[1px]" />
                        <div className="absolute top-10 right-2 w-4 h-4 bg-pop-pink/30 rounded-full blur-[1px]" />
                        <div className="absolute bottom-4 left-10 w-2 h-2 bg-pop-yellow/50 rounded-full" />

                        {/* Track Info Header */}
                        <div className="text-center mb-4">
                            <h3 className="font-soda text-2xl text-pop-pink drop-shadow-sm mb-0">
                                Soda Mixtape
                            </h3>
                            <div className="h-1 w-12 bg-pop-blue mx-auto rounded-full opacity-50 mb-2" />
                            <div className="px-2 overflow-hidden bg-pop-purple/10 rounded-xl py-2 border-2 border-dashed border-pop-purple/30">
                                <p className="font-display text-sm text-pop-dark font-bold truncate">
                                    {currentTrack.title}
                                </p>
                                <p className="font-body text-[10px] text-pop-text/70 uppercase tracking-widest">
                                    {currentTrack.artist}
                                </p>
                            </div>
                        </div>

                        {/* Kawaii Cassette Visual */}
                        <div className="h-28 p-3 relative mb-5 bg-pop-blue/20 rounded-2xl border-2 border-pop-blue/40 shadow-inner group">
                            <div className="holographic h-full w-full rounded-xl flex items-center justify-center relative overflow-hidden shadow-md">
                                {/* Reels */}
                                <div className="flex justify-around items-center w-full px-4">
                                    {[1, 2].map((i) => (
                                        <div key={i} className="relative w-12 h-12 flex items-center justify-center">
                                            <motion.div
                                                animate={{ rotate: isPlaying ? 360 : 0 }}
                                                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                                                className="w-full h-full border-4 border-white rounded-full bg-pop-mint shadow-inner flex items-center justify-center"
                                            >
                                                <div className="w-3 h-3 bg-white rounded-full" />
                                                <div className="absolute top-0 w-1 h-3 bg-white/60 rounded-full" />
                                            </motion.div>
                                        </div>
                                    ))}
                                </div>
                                <div className="absolute top-2 right-2">
                                    <span className="text-white text-[10px] font-bubble opacity-80">Vol. 1</span>
                                </div>
                            </div>
                        </div>

                        {/* Controls - Pastel Circles */}
                        <div className="flex items-center justify-between gap-2 px-2">
                            <button
                                onClick={prevTrack}
                                className="w-10 h-10 rounded-full bg-pop-yellow text-pop-dark shadow-md active:scale-90 transition-all flex items-center justify-center hover:brightness-105"
                            >
                                <SkipBack size={18} fill="currentColor" />
                            </button>
                            
                            <button
                                onClick={togglePlay}
                                className="w-14 h-14 rounded-full holographic text-white shadow-lg active:scale-90 transition-all flex items-center justify-center hover:scale-105 border-4 border-white"
                            >
                                {isPlaying ? (
                                    <Pause size={24} fill="currentColor" />
                                ) : (
                                    <Play size={24} fill="currentColor" className="ml-1" />
                                )}
                            </button>

                            <button
                                onClick={nextTrack}
                                className="w-10 h-10 rounded-full bg-pop-yellow text-pop-dark shadow-md active:scale-90 transition-all flex items-center justify-center hover:brightness-105"
                            >
                                <SkipForward size={18} fill="currentColor" />
                            </button>
                        </div>

                        {/* Footer Track Count */}
                        <div className="mt-4 text-center">
                            <span className="font-display text-[10px] text-pop-pink font-bold uppercase py-1 px-3 bg-pop-pink/10 rounded-full">
                                Track {currentTrackIndex + 1} / {tracks.length}
                            </span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default CassettePlayer;
