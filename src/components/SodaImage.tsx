import React from 'react';

interface SodaImageProps {
  src: string;
  alt?: string;
  className?: string; // Para clases extra de tamaño o posición
  imageClassName?: string; // Para ajustar object-position o scale
}

const SodaImage: React.FC<SodaImageProps> = ({ src, alt = "Soda Pop Memory", className = "", imageClassName = "" }) => {
  return (
    // Contenedor Principal: isolate asegura que el blending ocurra dentro de este contexto
    <div className={`relative w-full h-full overflow-hidden group isolate bg-pop-dark/10 ${className}`}>
      
      {/* CAPA 1: LA IMAGEN BASE */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`w-full h-full object-cover brightness-105 saturate-150 contrast-95 transition-transform duration-700 group-hover:scale-110 will-change-transform ${imageClassName}`}
      />

      {/* CAPA 2: EL TINTE UNIFICADOR
         Cambiamos a multiply para que el tinte sea mucho más evidente y unifique los colores
      */}
      <div 
        className="absolute inset-0 z-10 bg-pop-purple/30 mix-blend-multiply pointer-events-none"
        aria-hidden="true"
      ></div>

      {/* CAPA 3: EL GRADIENTE SODA POP
         Ajustamos para que el overlay sea más vibrante
      */}
      <div 
        className="absolute inset-0 z-20 bg-gradient-to-br from-pop-pink/70 via-pop-overlay/50 to-pop-blue/70 mix-blend-overlay opacity-100 transition-opacity duration-300 pointer-events-none"
        aria-hidden="true"
      ></div>
      
       {/* CAPA 4: Un brillo extra en hover para efecto "mojado" */}
       <div className="absolute inset-0 z-30 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-soft-light"></div>
    </div>
  );
};

export default SodaImage;
