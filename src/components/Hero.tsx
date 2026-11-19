import React from 'react';
import { Hero3DCanvas } from './Hero3DCanvas';
import { ARTIST_INFO } from '../data/artistData';
import { SpotifyEmbed } from './SpotifyEmbed';
import { Disc, ArrowDownRight, Radio, Sparkles, Headphones, ExternalLink } from 'lucide-react';

interface HeroProps {
  onExploreVault: () => void;
  onFlash: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreVault, onFlash }) => {
  return (
    <section
      id="01-hero"
      className="relative min-h-screen w-full bg-[#EEFF00] text-[#090909] pt-20 pb-16 overflow-hidden flex flex-col justify-between border-b-8 border-[#090909]"
    >
      {/* Background Ticker Tape (Top) */}
      <div className="w-full bg-[#090909] text-[#EEFF00] py-2 border-y-2 border-[#090909] overflow-hidden whitespace-nowrap font-mono text-xs sm:text-sm font-black tracking-widest flex items-center shadow-[0_4px_0_#7B2CBF]">
        <div className="animate-[marquee_24s_linear_infinite] flex items-center space-x-8 shrink-0">
          <span className="text-[#EEFF00] bg-[#7B2CBF] px-2 py-0.5">[UPCOMING RELEASES: "NERAM" (NOV 24) • "PROMISE" (2026) • "IRAVIN NIZHAL" (2026)]</span>
          <span className="text-[#7B2CBF]">///</span>
          <span>ASHWIN AZER (COIMBATORE, INDIA)</span>
          <span className="text-[#7B2CBF]">///</span>
          <span>FIRST SONG COMPOSED (WRITTEN IN 10TH GRADE)</span>
          <span className="text-[#7B2CBF]">///</span>
          <span className="italic text-zinc-300">“WANT TO GET OVERLY FAMOUS AND FAKE MY DEATH” — JUICE WRLD</span>
          <span className="text-[#7B2CBF]">///</span>
          <span>WALLMAG RAP AWARDS 2026 TOP 250 CREATOR</span>
          <span className="text-[#7B2CBF]">///</span>
          <span>THE AZER (VOL. 2) OUT NOW</span>
          <span className="text-[#7B2CBF]">///</span>
          <span>LAT: 11.0168° N, 76.9558° E</span>
          <span className="text-[#7B2CBF]">///</span>
        </div>
        <div className="animate-[marquee_24s_linear_infinite] flex items-center space-x-8 shrink-0" aria-hidden="true">
          <span className="text-[#EEFF00] bg-[#7B2CBF] px-2 py-0.5">[UPCOMING RELEASES: "NERAM" (NOV 24) • "PROMISE" (2026) • "IRAVIN NIZHAL" (2026)]</span>
          <span className="text-[#7B2CBF]">///</span>
          <span>ASHWIN AZER (COIMBATORE, INDIA)</span>
          <span className="text-[#7B2CBF]">///</span>
          <span>FIRST SONG COMPOSED (WRITTEN IN 10TH GRADE)</span>
          <span className="text-[#7B2CBF]">///</span>
          <span className="italic text-zinc-300">“WANT TO GET OVERLY FAMOUS AND FAKE MY DEATH” — JUICE WRLD</span>
          <span className="text-[#7B2CBF]">///</span>
          <span>WALLMAG RAP AWARDS 2026 TOP 250 CREATOR</span>
          <span className="text-[#7B2CBF]">///</span>
        </div>
      </div>

      {/* Main Grid: Typography, 3D Canvas, and Brutalist Dossier Badges */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Huge Brutalist Typography & Manifestos */}
        <div className="lg:col-span-7 z-10 space-y-6">
          {/* Release Countdown / Alert Badge */}
          <div className="inline-flex flex-wrap items-center gap-2">
            <span className="bg-[#7B2CBF] text-[#EEFF00] font-mono text-xs font-black px-3 py-1 uppercase shadow-[3px_3px_0px_#090909] -rotate-1 border border-[#090909] animate-pulse">
              NEW RELEASE // “NERAM” — NOV 24, 2026
            </span>
            <span className="bg-[#090909] text-[#EEFF00] font-mono text-xs font-black px-3 py-1 uppercase border-2 border-[#090909] shadow-[3px_3px_0px_#7B2CBF] rotate-1">
              UPCOMING // “PROMISE” • “IRAVIN NIZHAL” (2026)
            </span>
            <span className="bg-[#F7F7F2] text-[#090909] font-mono text-xs font-black px-2 py-1 uppercase shadow-[2px_2px_0px_#090909] border border-[#090909]">
              GENESIS COMPOSITION // 10TH GRADE
            </span>
          </div>

          {/* Monumental Wordmark with Risograph Purple Misregistration Shadow */}
          <div className="relative select-none">
            {/* Risograph Purple Misregistration Layer */}
            <h1
              className="font-['Syne',sans-serif] font-black text-6xl sm:text-8xl md:text-9xl tracking-tighter uppercase leading-[0.85] text-[#7B2CBF] absolute -top-1 -left-1 opacity-70 blur-[0.5px] pointer-events-none"
              style={{
                transform: 'translate(4px, -3px) rotate(-0.5deg)'
              }}
            >
              ASHWIN<br />AZER
            </h1>

            {/* Ink Black Foreground Layer */}
            <h1 className="font-['Syne',sans-serif] font-black text-6xl sm:text-8xl md:text-9xl tracking-tighter uppercase leading-[0.85] text-[#090909] relative -rotate-0.5">
              ASHWIN<br />AZER
            </h1>
          </div>

          {/* Subtitle / Sonic Identity */}
          <div className="space-y-3 max-w-xl">
            <p className="font-mono text-sm sm:text-base font-bold uppercase tracking-wider text-[#090909] bg-[#F7F7F2] p-3 border-2 border-[#090909] shadow-[4px_4px_0px_#090909]">
              {ARTIST_INFO.genre}
            </p>
            <p className="font-sans text-base sm:text-lg font-medium text-[#090909] leading-relaxed border-l-4 border-[#7B2CBF] pl-4">
              {ARTIST_INFO.manifesto}
            </p>
          </div>

          {/* Featured Spotify Track Embed Player */}
          <div className="bg-[#090909] text-[#EEFF00] p-4 border-3 border-[#090909] shadow-[6px_6px_0px_#7B2CBF] font-mono text-xs max-w-xl space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-zinc-700">
              <span className="flex items-center gap-2 font-bold tracking-widest text-[#EEFF00]">
                <Radio className="w-3.5 h-3.5 animate-pulse text-[#7B2CBF]" />
                FEATURED RELEASE // SPOTIFY PLAYER
              </span>
              <span className="text-zinc-400 font-bold">LUCID ASH × ASHWIN AZER</span>
            </div>

            <div className="w-full border-2 border-zinc-700 bg-black overflow-hidden">
              <SpotifyEmbed
                uri="spotify:track:4hGOmD42QWQN7xrWaCV52e"
                url="https://open.spotify.com/track/4hGOmD42QWQN7xrWaCV52e"
                height={152}
                title="Ashwin Azer - One Side Nee One Side Naan"
              />
            </div>

            <div className="flex items-center justify-between text-[11px] text-zinc-400 pt-1">
              <span>ONE SIDE NEE ONE SIDE NAAN</span>
              <a
                href="https://open.spotify.com/track/4hGOmD42QWQN7xrWaCV52e"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#EEFF00] hover:underline flex items-center gap-1 font-bold"
              >
                OPEN ON SPOTIFY <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="https://open.spotify.com/track/4hGOmD42QWQN7xrWaCV52e"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onFlash}
              className="px-6 py-3.5 font-mono text-sm font-black uppercase tracking-wider border-3 border-[#090909] shadow-[5px_5px_0px_#090909] bg-[#090909] text-[#EEFF00] hover:bg-[#7B2CBF] active:translate-x-1 active:translate-y-1 active:shadow-none flex items-center gap-2 cursor-pointer transition-all"
            >
              <Headphones className="w-4 h-4" />
              STREAM ON SPOTIFY
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={() => {
                onFlash();
                onExploreVault();
              }}
              className="px-6 py-3.5 font-mono text-sm font-black uppercase tracking-wider bg-[#F7F7F2] text-[#090909] border-3 border-[#090909] shadow-[5px_5px_0px_#7B2CBF] hover:bg-[#EEFF00] hover:shadow-[5px_5px_0px_#090909] active:translate-x-1 active:translate-y-1 active:shadow-none flex items-center gap-2 cursor-pointer transition-all -rotate-1"
            >
              <Disc className="w-4 h-4" />
              EXPLORE THE VAULT
              <ArrowDownRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Column: 3D Hero Canvas & Tesseract */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          {/* Stamped Corner Badges */}
          <div className="absolute -top-4 -right-2 z-20 bg-[#F7F7F2] text-[#090909] border-3 border-[#090909] px-3 py-1.5 font-mono text-[11px] font-black uppercase shadow-[4px_4px_0px_#7B2CBF] rotate-3 pointer-events-none">
            <span className="flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-[#7B2CBF]" />
              GLSL SIMPLEX SHADER
            </span>
          </div>

          <div className="absolute -bottom-2 -left-2 z-20 bg-[#090909] text-[#EEFF00] border-2 border-[#EEFF00] px-3 py-1 font-mono text-[10px] font-bold tracking-widest -rotate-2 pointer-events-none shadow-[3px_3px_0px_#7B2CBF]">
            3-PLATE Z-DEPTH SPRING PHYSICS
          </div>

          {/* Three.js Canvas Container */}
          <div className="relative w-full border-4 border-[#090909] bg-[#090909]/5 shadow-[12px_12px_0px_#090909] overflow-hidden">
            <Hero3DCanvas />
          </div>
        </div>
      </div>

      {/* Cassette J-Card Footprint / Stamp */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4 flex flex-wrap items-center justify-between text-xs font-mono font-bold border-t-2 border-[#090909] gap-4">
        <div>CAT# AZR-2026-PORTAL // MONADELTA STUDIOS</div>
        <div className="flex items-center space-x-4">
          <span>CONTEMPORARY R&B</span>
          <span>•</span>
          <span>MELODIC HIP-HOP</span>
          <span>•</span>
          <span>STREAMING ON SPOTIFY</span>
        </div>
      </div>
    </section>
  );
};
