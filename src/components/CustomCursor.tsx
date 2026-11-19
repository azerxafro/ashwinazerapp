import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [clicked, setClicked] = useState(false);
  const [isHoveringLink, setIsHoveringLink] = useState(false);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = Boolean(
          target.closest('a, button, input, textarea, select, [role="button"]')
        );
        setIsHoveringLink(isInteractive);
      }
    };

    const handleDown = () => setClicked(true);
    const handleUp = () => setClicked(false);

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mousedown', handleDown);
    window.addEventListener('mouseup', handleUp);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mousedown', handleDown);
      window.removeEventListener('mouseup', handleUp);
    };
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-[99998] transition-transform duration-75 will-change-transform hidden md:block"
      style={{
        left: `${pos.x}px`,
        top: `${pos.y}px`,
        transform: `translate(-50%, -50%) scale(${clicked ? 0.8 : isHoveringLink ? 1.4 : 1})`
      }}
    >
      {/* Misregistration Purple chromatic shadow */}
      <div
        className="absolute w-6 h-6 border-2 border-[#7B2CBF] -translate-x-[2px] translate-y-[2px] opacity-80"
        style={{ transform: 'rotate(45deg)' }}
      />

      {/* Main Ink Black Crosshair with raw paper dot */}
      <div
        className="relative w-6 h-6 border-2 border-[#090909] bg-[#EEFF00] flex items-center justify-center shadow-[2px_2px_0px_#090909]"
        style={{ transform: 'rotate(0deg)' }}
      >
        <div className="w-1.5 h-1.5 bg-[#090909]" />
      </div>
    </div>
  );
};
