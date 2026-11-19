import React, { useState } from 'react';
import { TRACKS } from '../data/artistData';
import { Track } from '../types';
import { VaultVisualizerCanvas } from './VaultVisualizerCanvas';
import { audioEngine } from '../audio/audioEngine';
import {
  Play,
  Pause,
  ExternalLink,
  Disc,
  Headphones,
  Radio,
  FileText
} from 'lucide-react';

interface VaultProps {
  onFlash: () => void;
}

export const Vault: React.FC<VaultProps> = ({ onFlash }) => {
  const [selectedTrack, setSelectedTrack] = useState<Track>(TRACKS[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hoveredTrackId, setHoveredTrackId] = useState<string | null>(null);

  const handlePlayToggle = async (track: Track) => {
    onFlash();
    if (selectedTrack.id === track.id && isPlaying) {
      audioEngine.stopTrack();
      setIsPlaying(false);
    } else {
      setSelectedTrack(track);
      await audioEngine.setTrack(track.id, track.bpm, track.key);
      setIsPlaying(true);
    }
  };

  return (
    <section
      id="02-vault"
      className="relative min-h-screen w-full bg-[#090909] text-[#F7F7F2] py-28 px-4 sm:px-6 lg:px-8 border-b-8 border-[#090909] overflow-hidden"
    >
      {/* Background Graphic Halftone Grid */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#EEFF00 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-4 border-[#EEFF00] pb-6 gap-6">
          <div>
            <div className="inline-block px-3 py-1 bg-[#EEFF00] text-[#090909] font-mono text-xs font-black uppercase tracking-widest -rotate-1 mb-3">
              [CATALOGUE // 2022 - 2026]
            </div>
            <h2 className="font-['Syne',sans-serif] font-black text-5xl sm:text-7xl tracking-tighter uppercase text-[#EEFF00]">
              02 // THE VAULT
            </h2>
            <p className="font-mono text-xs sm:text-sm text-[#F7F7F2]/80 mt-2 uppercase tracking-wider">
              DISCOGRAPHY // CASSETTE ARCHIVE // 4D FREQUENCY PRESSINGS
            </p>
          </div>

          <div className="flex items-center space-x-3 bg-zinc-900 border-2 border-zinc-700 p-3 font-mono text-xs text-[#EEFF00]">
            <Radio className="w-4 h-4 animate-pulse text-[#EEFF00]" />
            <span>SELECT TRACK TO ENGAGE 4D BLOB VISUALIZER</span>
          </div>
        </div>

        {/* Two-Column Layout: Left = 4D Morphing Visualizer & Player; Right = Tilted Cassette Sleeves */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: 4D Morphing Sphere Canvas & Brutalist Mini-Player */}
          <div className="lg:col-span-5 bg-[#EEFF00] text-[#090909] p-6 border-4 border-[#090909] shadow-[10px_10px_0px_#7B2CBF] space-y-6 sticky top-24">
            {/* Visualizer Header */}
            <div className="flex items-center justify-between border-b-2 border-[#090909] pb-3">
              <span className="font-mono text-xs font-black uppercase tracking-widest flex items-center gap-2">
                <Disc className={`w-4 h-4 ${isPlaying ? 'animate-spin' : ''}`} />
                4D MORPHING VISUALIZER
              </span>
              <span className="font-mono text-[11px] font-bold px-2 py-0.5 bg-[#090909] text-[#EEFF00]">
                {selectedTrack.key} // {selectedTrack.bpm} BPM
              </span>
            </div>

            {/* 3D 4D-Noise Morphing Blob Canvas */}
            <div className="relative w-full bg-[#090909] border-3 border-[#090909] overflow-hidden flex items-center justify-center p-2 shadow-inner">
              <VaultVisualizerCanvas
                activeTrackId={isPlaying ? selectedTrack.id : null}
                isHovered={Boolean(hoveredTrackId)}
              />
              <div className="absolute top-2 left-2 font-mono text-[10px] text-[#EEFF00] bg-[#090909]/80 px-2 py-0.5 border border-[#EEFF00]/40">
                MESH: 4D SIMPLEX WARP
              </div>
            </div>

            {/* Active Track Dossier & Playback Bar */}
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 bg-[#090909] border-2 border-[#090909] shadow-[2px_2px_0px_#7B2CBF] overflow-hidden shrink-0">
                    <img
                      src={selectedTrack.coverImage}
                      alt={selectedTrack.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="font-mono text-[11px] font-bold text-[#7B2CBF] uppercase tracking-wider block">
                      {selectedTrack.catalogNumber} • {selectedTrack.type}
                    </span>
                    <h3 className="font-['Syne',sans-serif] font-black text-2xl sm:text-3xl tracking-tight uppercase mt-0.5">
                      {selectedTrack.title}
                    </h3>
                    <span className="font-mono text-xs text-zinc-800">
                      DURATION: {selectedTrack.duration} // {selectedTrack.releaseYear}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => handlePlayToggle(selectedTrack)}
                  className={`p-4 border-3 border-[#090909] shadow-[4px_4px_0px_#090909] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none cursor-pointer transition-all shrink-0 ${
                    isPlaying
                      ? 'bg-[#7B2CBF] text-[#EEFF00]'
                      : 'bg-[#090909] text-[#EEFF00] hover:bg-[#7B2CBF]'
                  }`}
                  title={isPlaying ? 'Pause' : 'Play 4D synthesized riff preview'}
                >
                  {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current" />}
                </button>
              </div>

              {/* Raw Monospace Waveform Scrub Bar */}
              <div className="space-y-1">
                <div className="flex justify-between font-mono text-[10px] text-zinc-700 font-bold">
                  <span>WAVEFORM RASTER</span>
                  <span>{isPlaying ? '4D AUDIO OSC: ACTIVE' : 'PREVIEW READY'}</span>
                </div>
                <div className="h-6 w-full bg-[#090909] p-1 flex items-center gap-[2px] overflow-hidden border border-[#090909]">
                  {Array.from({ length: 42 }).map((_, idx) => {
                    const heightPercent = isPlaying
                      ? 20 + Math.abs(Math.sin((idx + Date.now() / 200) * 0.4)) * 75
                      : 15 + Math.sin(idx * 0.5) * 20 + 20;
                    return (
                      <div
                        key={idx}
                        className={`flex-1 transition-all duration-75 ${
                          idx % 4 === 0 ? 'bg-[#7B2CBF]' : 'bg-[#EEFF00]'
                        }`}
                        style={{ height: `${heightPercent}%` }}
                      />
                    );
                  })}
                </div>
              </div>

              {/* Lyrics Snippet / Cassette Liner Note */}
              {selectedTrack.lyricsSnippet && (
                <div className="bg-[#F7F7F2] p-3 border-2 border-[#090909] font-mono text-xs italic text-[#090909] flex items-start gap-2 shadow-[2px_2px_0px_#090909]">
                  <FileText className="w-4 h-4 shrink-0 text-[#7B2CBF]" />
                  <span>"{selectedTrack.lyricsSnippet}"</span>
                </div>
              )}

              {/* Streaming Links Direct */}
              <div className="flex flex-wrap gap-2 pt-2">
                <a
                  href={selectedTrack.spotifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-[#090909] text-[#EEFF00] font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 hover:bg-[#7B2CBF] transition-colors border border-[#090909]"
                >
                  <Headphones className="w-3.5 h-3.5" />
                  SPOTIFY
                  <ExternalLink className="w-3 h-3" />
                </a>

                <a
                  href={selectedTrack.appleMusicUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-[#090909] text-[#EEFF00] font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 hover:bg-[#7B2CBF] transition-colors border border-[#090909]"
                >
                  <Disc className="w-3.5 h-3.5" />
                  APPLE MUSIC
                  <ExternalLink className="w-3 h-3" />
                </a>

                <a
                  href={selectedTrack.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-[#090909] text-[#EEFF00] font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 hover:bg-[#7B2CBF] transition-colors border border-[#090909]"
                >
                  YOUTUBE
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Tilted Zine Flyers & Cassette Sleeves */}
          <div className="lg:col-span-7 space-y-6">
            {TRACKS.map((track, index) => {
              const isSelected = selectedTrack.id === track.id;
              const isThisPlaying = isSelected && isPlaying;
              const rotationDegree = index % 2 === 0 ? '-rotate-1' : 'rotate-1';

              return (
                <div
                  key={track.id}
                  onMouseEnter={() => setHoveredTrackId(track.id)}
                  onMouseLeave={() => setHoveredTrackId(null)}
                  onClick={() => {
                    setSelectedTrack(track);
                    onFlash();
                  }}
                  className={`group relative p-6 border-4 cursor-pointer transition-all duration-300 ${rotationDegree} hover:rotate-0 hover:-translate-y-1 ${
                    isSelected
                      ? 'bg-[#F7F7F2] text-[#090909] border-[#EEFF00] shadow-[8px_8px_0px_#EEFF00]'
                      : 'bg-zinc-950 text-[#F7F7F2] border-zinc-700 hover:border-[#EEFF00] shadow-[6px_6px_0px_#7B2CBF]'
                  }`}
                >
                  {/* Cassette Sleeve Spine Stamped Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-current pb-3 font-mono text-xs font-bold">
                    <span className="px-2 py-0.5 bg-[#7B2CBF] text-[#EEFF00] uppercase tracking-wider shadow-[2px_2px_0px_#090909]">
                      {track.type}
                    </span>
                    <span className="tracking-widest">{track.catalogNumber}</span>
                    <span className="opacity-80">REL. {track.releaseYear}</span>
                  </div>

                  {/* Body Content */}
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 mt-4 items-center">
                    {/* Cover Art Cutout Thumbnail */}
                    <div className="sm:col-span-4 relative">
                      <div className="aspect-square w-full bg-[#090909] border-2 border-current overflow-hidden relative shadow-[4px_4px_0px_#090909]">
                        <img
                          src={track.coverImage}
                          alt={track.title}
                          className="w-full h-full object-cover filter contrast-125 group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-[#EEFF00]/10 mix-blend-color" />
                      </div>
                    </div>

                    {/* Meta & Description */}
                    <div className="sm:col-span-8 space-y-2">
                      <h4 className="font-['Syne',sans-serif] font-black text-2xl sm:text-3xl tracking-tight uppercase group-hover:text-[#7B2CBF] transition-colors">
                        {track.title}
                      </h4>
                      <p className="font-mono text-xs opacity-90 leading-relaxed">
                        {track.description}
                      </p>

                      <div className="flex flex-wrap items-center gap-2 pt-2 font-mono text-[11px] font-bold">
                        <span className="px-2 py-0.5 border border-current bg-transparent">
                          VIBE: {track.vibe}
                        </span>
                        <span className="px-2 py-0.5 border border-current bg-transparent">
                          {track.bpm} BPM
                        </span>
                      </div>

                      <div className="pt-3 flex items-center justify-between">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handlePlayToggle(track);
                          }}
                          className={`px-4 py-2 border-2 border-current font-mono text-xs font-black uppercase flex items-center gap-2 shadow-[2px_2px_0px_current] active:translate-x-0.5 active:translate-y-0.5 ${
                            isThisPlaying
                              ? 'bg-[#EEFF00] text-[#090909]'
                              : 'bg-transparent hover:bg-[#EEFF00] hover:text-[#090909]'
                          }`}
                        >
                          {isThisPlaying ? <Pause className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                          {isThisPlaying ? 'PLAYING 4D' : 'PREVIEW 4D'}
                        </button>

                        <span className="font-mono text-xs opacity-60">
                          {isSelected ? '[SELECTED]' : 'CLICK TO LOAD'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
