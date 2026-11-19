import React, { useState } from 'react';
import { TRACKS } from '../data/artistData';
import { Track } from '../types';
import { SpotifyEmbed } from './SpotifyEmbed';
import {
  ExternalLink,
  Disc,
  Headphones,
  Music2,
  FileText
} from 'lucide-react';

interface VaultProps {
  onFlash: () => void;
}

export const Vault: React.FC<VaultProps> = ({ onFlash }) => {
  const [selectedTrack, setSelectedTrack] = useState<Track>(TRACKS[0]);

  const handleSelectTrack = (track: Track) => {
    onFlash();
    setSelectedTrack(track);
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
              DISCOGRAPHY // CASSETTE ARCHIVE // UPCOMING 2026 DROPS // STREAMING ON SPOTIFY
            </p>
          </div>

          <div className="flex items-center space-x-3 bg-zinc-900 border-2 border-zinc-700 p-3 font-mono text-xs text-[#EEFF00]">
            <Headphones className="w-4 h-4 animate-pulse text-[#EEFF00]" />
            <span>OFFICIAL SPOTIFY EMBED // SELECT ANY RELEASE</span>
          </div>
        </div>

        {/* Two-Column Layout: Left = Official Spotify Embed Player; Right = Tilted Cassette Sleeves */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Official Spotify Embed Player */}
          <div className="lg:col-span-5 bg-[#EEFF00] text-[#090909] p-6 border-4 border-[#090909] shadow-[10px_10px_0px_#7B2CBF] space-y-6 sticky top-24">
            {/* Player Header */}
            <div className="flex items-center justify-between border-b-2 border-[#090909] pb-3">
              <span className="font-mono text-xs font-black uppercase tracking-widest flex items-center gap-2">
                <Music2 className="w-4 h-4 text-[#7B2CBF]" />
                SPOTIFY EMBED CONTROLLER
              </span>
              <span className="font-mono text-[11px] font-bold px-2 py-0.5 bg-[#090909] text-[#EEFF00]">
                {selectedTrack.type} // {selectedTrack.releaseYear}
              </span>
            </div>

            {/* Official Spotify Embed Player via IFrame API */}
            <div className="relative w-full border-3 border-[#090909] bg-[#090909] shadow-[4px_4px_0px_#090909] overflow-hidden">
              <SpotifyEmbed
                uri={selectedTrack.spotifyUri}
                height={152}
              />
            </div>

            {/* Active Track Dossier */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-16 h-16 bg-[#090909] border-2 border-[#090909] shadow-[3px_3px_0px_#7B2CBF] overflow-hidden shrink-0">
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

              <p className="font-mono text-xs text-zinc-800 leading-relaxed bg-[#F7F7F2] p-3 border-2 border-[#090909]">
                {selectedTrack.description}
              </p>

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
                  OPEN ON SPOTIFY
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
              </div>
            </div>
          </div>

          {/* Right Column: Tilted Zine Flyers & Cassette Sleeves */}
          <div className="lg:col-span-7 space-y-6">
            {TRACKS.map((track, index) => {
              const isSelected = selectedTrack.id === track.id;
              const rotationDegree = index % 2 === 0 ? '-rotate-1' : 'rotate-1';

              return (
                <div
                  key={track.id}
                  onClick={() => handleSelectTrack(track)}
                  className={`group relative p-6 border-4 cursor-pointer transition-all duration-300 ${rotationDegree} hover:rotate-0 hover:-translate-y-1 ${
                    isSelected
                      ? 'bg-[#F7F7F2] text-[#090909] border-[#EEFF00] shadow-[8px_8px_0px_#EEFF00]'
                      : 'bg-zinc-950 text-[#F7F7F2] border-zinc-700 hover:border-[#EEFF00] shadow-[6px_6px_0px_#7B2CBF]'
                  }`}
                >
                  {/* Cassette Sleeve Spine Stamped Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-current pb-3 font-mono text-xs font-bold">
                    <span
                      className={`px-2 py-0.5 uppercase tracking-wider shadow-[2px_2px_0px_#090909] font-black ${
                        track.type === 'UPCOMING'
                          ? 'bg-[#EEFF00] text-[#090909] border border-[#090909] animate-pulse'
                          : 'bg-[#7B2CBF] text-[#EEFF00]'
                      }`}
                    >
                      {track.type === 'UPCOMING' ? '★ UPCOMING DROP' : track.type}
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
                          {track.duration}
                        </span>
                      </div>

                      <div className="pt-3 flex items-center justify-between">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleSelectTrack(track);
                          }}
                          className={`px-4 py-2 border-2 border-current font-mono text-xs font-black uppercase flex items-center gap-2 shadow-[2px_2px_0px_current] active:translate-x-0.5 active:translate-y-0.5 ${
                            isSelected
                              ? 'bg-[#EEFF00] text-[#090909]'
                              : 'bg-transparent hover:bg-[#EEFF00] hover:text-[#090909]'
                          }`}
                        >
                          <Headphones className="w-3.5 h-3.5" />
                          {isSelected ? 'LOADED IN SPOTIFY PLAYER' : 'LOAD IN SPOTIFY'}
                        </button>

                        <span className="font-mono text-xs opacity-60">
                          {isSelected ? '[NOW PLAYING]' : 'CLICK TO LOAD'}
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
