import React from 'react';

export const ZineTextureOverlay: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[9990] overflow-hidden">
      {/* 1. Vertical Photocopy Toner Streaks */}
      <div
        className="absolute inset-0 opacity-[0.06] mix-blend-multiply"
        style={{
          backgroundImage: `repeating-linear-gradient(
            90deg,
            transparent,
            transparent 120px,
            rgba(9, 9, 9, 0.4) 121px,
            transparent 122px,
            transparent 240px,
            rgba(9, 9, 9, 0.7) 241px,
            transparent 243px,
            transparent 380px,
            rgba(9, 9, 9, 0.3) 381px,
            transparent 382px
          )`
        }}
      />

      {/* 2. Paper Fold Creases */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage: `
            linear-gradient(0deg, transparent 49.8%, rgba(9,9,9,0.9) 50%, rgba(247,247,242,0.8) 50.2%, transparent 50.4%),
            linear-gradient(90deg, transparent 49.8%, rgba(9,9,9,0.9) 50%, rgba(247,247,242,0.8) 50.2%, transparent 50.4%)
          `
        }}
      />

      {/* 3. Global SVG Halftone Noise Texture */}
      <svg className="fixed top-0 left-0 w-full h-full opacity-[0.035] mix-blend-color-burn">
        <filter id="zine-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.75"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#zine-grain)" />
      </svg>
    </div>
  );
};
