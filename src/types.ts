
export type AppScreen = 'WELCOME' | 'MEMORIES' | 'PROPOSAL' | 'SUCCESS';

export interface Memory {
  id: string;
  image: string;
  title: string;
  caption: string;
  date: string;
  location: string;
  category: 'FIRST DATE' | 'TRIP' | 'ANNIVERSARY' | 'CASUAL' | 'ADVENTURE' | 'FUTURE' | 'WORK' | 'TRAVEL';
}

export interface FloatingElementProps {
  type: 'heart' | 'bubble' | 'star';
  size: number;
  top: string;
  left: string;
  delay: string;
  speed: 'slow' | 'medium' | 'fast';
}
