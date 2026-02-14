
import React from 'react';
import { FloatingElementProps } from '../types';

const FloatingElements: React.FC = () => {
  const elements: FloatingElementProps[] = [
    { type: 'heart', size: 40, top: '10%', left: '15%', delay: '0s', speed: 'slow' },
    { type: 'bubble', size: 60, top: '25%', left: '80%', delay: '1s', speed: 'medium' },
    { type: 'star', size: 30, top: '45%', left: '5%', delay: '2s', speed: 'fast' },
    { type: 'heart', size: 25, top: '65%', left: '90%', delay: '1.5s', speed: 'medium' },
    { type: 'bubble', size: 40, top: '80%', left: '20%', delay: '0.5s', speed: 'slow' },
    { type: 'star', size: 50, top: '15%', left: '70%', delay: '2.5s', speed: 'medium' },
    { type: 'heart', size: 35, top: '5%', left: '45%', delay: '3s', speed: 'slow' },
    { type: 'bubble', size: 20, top: '55%', left: '60%', delay: '1.2s', speed: 'fast' },
    { type: 'star', size: 25, top: '90%', left: '75%', delay: '4s', speed: 'medium' },
    { type: 'heart', size: 45, top: '35%', left: '25%', delay: '0.8s', speed: 'medium' },
    { type: 'bubble', size: 50, top: '70%', left: '10%', delay: '2.2s', speed: 'slow' },
    { type: 'star', size: 40, top: '85%', left: '40%', delay: '1.7s', speed: 'fast' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {elements.map((el, i) => (
        <div
          key={i}
          className={`absolute animate-float-${el.speed} opacity-40`}
          style={{
            top: el.top,
            left: el.left,
            animationDelay: el.delay,
          }}
        >
          <span
            className="material-symbols-outlined"
            style={{
              fontSize: el.size,
              color: el.type === 'heart' ? '#ffb7d5' : el.type === 'bubble' ? '#a6e4ff' : '#fff59e',
              fontVariationSettings: "'FILL' 1"
            }}
          >
            {el.type === 'heart' ? 'favorite' : el.type === 'bubble' ? 'bubble_chart' : 'star'}
          </span>
        </div>
      ))}
    </div>
  );
};

export default FloatingElements;
