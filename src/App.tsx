import React, { useState, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Vault } from './components/Vault';
import { VisualsArchive } from './components/VisualsArchive';
import { Dossier } from './components/Dossier';
import { Transmissions } from './components/Transmissions';
import { PhotocopyFlash } from './components/PhotocopyFlash';
import { ZineTextureOverlay } from './components/ZineTextureOverlay';
import { CustomCursor } from './components/CustomCursor';

export const App: React.FC = () => {
  const [flashActive, setFlashActive] = useState(false);

  const triggerPhotocopyFlash = useCallback(() => {
    setFlashActive(true);
  }, []);

  const handleFlashComplete = useCallback(() => {
    setFlashActive(false);
  }, []);

  const scrollToSection = (id: string) => {
    triggerPhotocopyFlash();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-[#EEFF00] text-[#090909] font-sans selection:bg-[#090909] selection:text-[#EEFF00] overflow-x-hidden">
      {/* Texture & Print Overlays */}
      <ZineTextureOverlay />

      {/* Photocopy Flash on Major Transitions & Audio Peaks */}
      <PhotocopyFlash active={flashActive} onComplete={handleFlashComplete} />

      {/* Underground Risograph Custom Cursor (Desktop) */}
      <CustomCursor />

      {/* Fixed Sticky Header Navigation */}
      <Navbar onSectionClick={scrollToSection} onFlash={triggerPhotocopyFlash} />

      {/* 01 // HERO (Full-Viewport Acid Yellow, 4D Ashwin Azer Cutout + Tesseract) */}
      <Hero
        onExploreVault={() => scrollToSection('02-vault')}
        onFlash={triggerPhotocopyFlash}
      />

      {/* 02 // THE VAULT (Discography, Tilted Cassette Sleeves, 4D Morphing Halftone Blob) */}
      <Vault onFlash={triggerPhotocopyFlash} />

      {/* 03 // VISUALS & ARCHIVE (Asymmetric Collage, Photocopy Scan-line Reveal) */}
      <VisualsArchive onFlash={triggerPhotocopyFlash} />

      {/* 04 // DOSSIER (Bio, Manifesto, Torn Clippings & Classified Milestones) */}
      <Dossier />

      {/* 05 // TRANSMISSIONS (EPK, Ink-Stamp Platform Links, Booking Communicator) */}
      <Transmissions onFlash={triggerPhotocopyFlash} />
    </div>
  );
};

export default App;
