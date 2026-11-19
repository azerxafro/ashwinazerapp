import React, { useState, useEffect } from 'react';
import { audioEngine } from '../audio/audioEngine';
import { Volume2, VolumeX, Menu, X, Disc3 } from 'lucide-react';

interface NavbarProps {
  onSectionClick: (id: string) => void;
  onFlash: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onSectionClick, onFlash }) => {
  const [isSoundOn, setIsSoundOn] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('01-hero');

  useEffect(() => {
    const unsub = audioEngine.subscribe((m) => {
      setIsSoundOn(m.isPlaying && !m.isMuted);
    });

    const handleScroll = () => {
      const sections = ['01-hero', '02-vault', '03-archive', '04-dossier', '05-transmissions'];
      const scrollPos = window.scrollY + 200;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      unsub();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSoundToggle = async () => {
    onFlash();
    const state = await audioEngine.toggleSound();
    setIsSoundOn(state);
  };

  const navItems = [
    { id: '01-hero', label: '01 // HERO' },
    { id: '02-vault', label: '02 // THE VAULT' },
    { id: '03-archive', label: '03 // ARCHIVE' },
    { id: '04-dossier', label: '04 // DOSSIER' },
    { id: '05-transmissions', label: '05 // TRANSMISSIONS' },
  ];

  const handleNavClick = (id: string) => {
    onFlash();
    setMobileMenuOpen(false);
    onSectionClick(id);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[990] bg-[#EEFF00] border-b-4 border-[#090909] text-[#090909]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Wordmark & Signal Badge */}
        <div className="flex items-center space-x-3">
          <button
            onClick={() => handleNavClick('01-hero')}
            className="text-left group cursor-pointer"
          >
            <span className="font-['Syne',sans-serif] font-black text-xl sm:text-2xl tracking-tighter uppercase block leading-none group-hover:text-[#7B2CBF] transition-colors">
              ASHWIN AZER
            </span>
            <span className="font-mono text-[10px] tracking-widest text-[#090909] opacity-80 block mt-0.5">
              OFFICIAL 4D PORTAL // 2026
            </span>
          </button>

          <div className="hidden lg:flex items-center px-2 py-0.5 bg-[#090909] text-[#EEFF00] font-mono text-[11px] tracking-wider font-bold shadow-[2px_2px_0px_#7B2CBF]">
            <span className="w-2 h-2 rounded-full bg-[#EEFF00] animate-ping mr-2 inline-block" />
            [SIGNAL: ACTIVE]
          </div>
        </div>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`px-3 py-1 font-mono text-xs font-bold tracking-wider transition-all uppercase cursor-pointer border-2 ${
                activeSection === item.id
                  ? 'bg-[#090909] text-[#EEFF00] border-[#090909] shadow-[3px_3px_0px_#7B2CBF] -rotate-1'
                  : 'text-[#090909] border-transparent hover:border-[#090909] hover:bg-[#F7F7F2]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Audio Toggle & Mobile Menu */}
        <div className="flex items-center space-x-3">
          {/* Stark Brutalist Sound Toggle */}
          <button
            onClick={handleSoundToggle}
            className={`flex items-center space-x-2 px-3 py-1.5 border-3 border-[#090909] font-mono text-xs font-black tracking-wider transition-all cursor-pointer shadow-[3px_3px_0px_#7B2CBF] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none ${
              isSoundOn
                ? 'bg-[#7B2CBF] text-[#EEFF00] animate-pulse'
                : 'bg-[#F7F7F2] text-[#090909] hover:bg-[#090909] hover:text-[#EEFF00]'
            }`}
            title="Toggle Web Audio 4D reactive engine"
          >
            {isSoundOn ? (
              <>
                <Volume2 className="w-4 h-4 animate-bounce" />
                <span className="tracking-widest">SOUND: ON ⚡</span>
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4" />
                <span className="tracking-widest">SOUND: OFF</span>
              </>
            )}
          </button>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 border-2 border-[#090909] bg-[#F7F7F2] text-[#090909] shadow-[2px_2px_0px_#090909]"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#090909] text-[#EEFF00] border-t-4 border-[#090909] px-6 py-6 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#EEFF00]/30 font-mono text-xs">
            <span>[FREQUENCY: 432Hz]</span>
            <span className="text-[#7B2CBF] font-bold">MONADELTA RECORDS</span>
          </div>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="w-full text-left font-['Syne',sans-serif] font-black text-xl uppercase tracking-tight py-2 border-b border-zinc-800 hover:text-[#7B2CBF] flex items-center justify-between"
            >
              <span>{item.label}</span>
              <Disc3 className="w-4 h-4 opacity-50" />
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};
