import React from 'react';

type StickerSource = 'icons1' | 'icons2';

interface StickerProps {
  source: StickerSource;
  /* Porcentaje de posición X (0-100) del centro del recorte */
  x: number;
  /* Porcentaje de posición Y (0-100) del centro del recorte */
  y: number;
  /* Ancho del recorte en porcentaje relativo a la imagen original */
  width: number;
  /* Alto del recorte en porcentaje relativo a la imagen original */
  height: number;
  /* Tamaño de visualización en píxeles (opcional, por defecto usa w/h proporcional o un tamaño fijo) */
  size?: number;
  className?: string;
  rotate?: number;
}

const stickerMap: Record<StickerSource, string> = {
  icons1: '/-raw-images/FloatIcons_1.png',
  icons2: '/-raw-images/FloatIcons_2.png',
};

export const Sticker: React.FC<StickerProps> = ({ 
  source, 
  x, 
  y, 
  width, 
  height, 
  size = 64, 
  className = '',
  rotate = 0
}) => {
  return (
    <div 
      className={`overflow-hidden relative select-none ${className}`}
      style={{ 
        width: `${size}px`, 
        height: `${size}px`,
        transform: `rotate(${rotate}deg)` 
      }}
    >
      <img
        src={stickerMap[source]}
        alt="Sticker"
        className="absolute max-w-none"
        style={{
          /* 
             La lógica aquí es escalar la imagen para que el área de recorte (width% x height%)
             coincida con el tamaño del contenedor (size x size).
             Luego movemos la imagen para centrar el punto (x%, y%) en el contenedor.
          */
          width: `${(100 / width) * 100}%`,
          height: 'auto', // Mantenemos aspect ratio de la imagen original? Asumimos que width/height definen el aspect ratio del icono
          left: `${50 - (x * (100 / width))}%`,
          top: `${50 - (y * (100 / width))}%`, // Simplificación: asumiendo imagen cuadrada para el cálculo rápido, ajustaremos si es necesario
          objectFit: 'none'
        }}
      />
    </div>
  );
};

/* 
   Componente Helper para definir "Presets" de stickers que encontremos en las hojas.
   Como no podemos ver las coordenadas exactas, dejaremos esto preparado para ajuste manual 
   o usaremos valores aproximados para empezar.
*/
export const StickerPreset: React.FC<{ type: 'heart' | 'star' | 'music' | 'candy', variant?: number, className?: string }> = ({ type, variant = 1, className }) => {
    // Estos valores son marcadores de posición. Deberán ajustarse "a ojo" viendo la app.
    // Usaremos un "Debug Grid" mental o prueba y error.
    let props: StickerProps = { source: 'icons1', x: 50, y: 50, width: 20, height: 20 };
    
    // Ejemplo de configuración (necesitará ajuste real al ver las imágenes)
    if (type === 'heart') {
        props = { source: 'icons1', x: 20, y: 20, width: 15, height: 15, rotate: -10 };
    }
    
    return <Sticker {...props} className={className} />;
};
