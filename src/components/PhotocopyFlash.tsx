import React, { useEffect, useState } from 'react';

interface PhotocopyFlashProps {
  active: boolean;
  onComplete?: () => void;
}

export const PhotocopyFlash: React.FC<PhotocopyFlashProps> = ({ active, onComplete }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (active) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        if (onComplete) onComplete();
      }, 160);
      return () => clearTimeout(timer);
    }
  }, [active, onComplete]);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[99999] mix-blend-difference bg-[#EEFF00] animate-pulse"
      style={{
        boxShadow: 'inset 0 0 100px rgba(123, 44, 191, 0.8)',
        filter: 'contrast(300%)'
      }}
    >
      <div className="absolute inset-0 bg-repeat opacity-40 bg-[linear-gradient(rgba(9,9,9,0.8)_1px,transparent_1px)] bg-[size:100%_4px]" />
    </div>
  );
};
