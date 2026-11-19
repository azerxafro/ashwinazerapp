import React from 'react';
import { ARTIST_INFO } from '../data/artistData';
import { Award, CheckCircle2, ShieldCheck, Zap, Mail, Quote } from 'lucide-react';

export const Dossier: React.FC = () => {
  const { neramAnnouncement } = ARTIST_INFO;

  return (
    <section
      id="04-dossier"
      className="relative min-h-screen w-full bg-[#090909] text-[#F7F7F2] py-28 px-4 sm:px-6 lg:px-8 border-b-8 border-[#090909] overflow-hidden"
    >
      {/* Background Stamped Redacted Grid */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(0deg, #7B2CBF 1px, transparent 1px), linear-gradient(90deg, #7B2CBF 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10 space-y-16">
        {/* Section Header */}
        <div className="border-b-4 border-[#EEFF00] pb-6">
          <div className="inline-block px-3 py-1 bg-[#7B2CBF] text-[#EEFF00] font-mono text-xs font-black uppercase tracking-widest -rotate-1 mb-3 shadow-[3px_3px_0px_#EEFF00]">
            [CONFIDENTIAL // ARTIST DOSSIER & PRESS BULLETINS]
          </div>
          <h2 className="font-['Syne',sans-serif] font-black text-5xl sm:text-7xl tracking-tighter uppercase text-[#EEFF00]">
            04 // THE DOSSIER
          </h2>
          <p className="font-mono text-xs sm:text-sm text-[#F7F7F2]/80 mt-2 uppercase tracking-wider">
            SONIC IDENTITY // OFFICIAL PRESS RELEASES // MANIFESTO // MILESTONES
          </p>
        </div>

        {/* 🚨 FEATURED OFFICIAL PRESS RELEASE: "NERAM" 🚨 */}
        <div className="relative bg-[#EEFF00] text-[#090909] p-6 sm:p-8 border-4 border-[#090909] shadow-[14px_14px_0px_#7B2CBF] -rotate-0.5">
          {/* Black Gaffer Tape Pins */}
          <div className="absolute -top-4 left-12 w-32 h-7 bg-[#090909] -rotate-2 shadow-md opacity-95 z-20" />
          <div className="absolute -top-4 right-12 w-28 h-7 bg-[#090909] rotate-2 shadow-md opacity-95 z-20" />

          {/* Stamped Red Rubber Badge */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 border-3 border-[#7B2CBF] bg-[#F7F7F2] text-[#7B2CBF] font-mono text-xs sm:text-sm font-black px-3 py-1 uppercase tracking-widest rotate-3 shadow-[2px_2px_0px_#090909]">
            OFFICIAL PRESS BULLETIN
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
            {/* Left Cover Artwork Poster */}
            <div className="lg:col-span-5 relative">
              <div className="aspect-square w-full bg-[#090909] border-4 border-[#090909] shadow-[6px_6px_0px_#090909] overflow-hidden relative group">
                <img
                  src={neramAnnouncement.coverImage}
                  alt="Neram Single Artwork"
                  className="w-full h-full object-cover filter contrast-110 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 left-2 bg-[#090909] text-[#EEFF00] font-mono text-[10px] font-black px-2 py-0.5 border border-[#EEFF00]/40">
                  RELEASE: NOV 24, 2026
                </div>
              </div>
              <div className="font-mono text-[11px] font-bold text-center mt-2 text-[#090909]">
                {neramAnnouncement.collaborators}
              </div>
            </div>

            {/* Right Press Release Text & Quote */}
            <div className="lg:col-span-7 space-y-4">
              <div className="border-b-2 border-[#090909] pb-3">
                <span className="font-mono text-xs font-black uppercase text-[#7B2CBF] tracking-wider block">
                  [ANNOUNCEMENT // COIMBATORE, INDIA]
                </span>
                <h3 className="font-['Syne',sans-serif] font-black text-3xl sm:text-4xl uppercase tracking-tight leading-none mt-1">
                  {neramAnnouncement.title}
                </h3>
                <span className="font-mono text-xs font-bold text-zinc-800 block mt-1">
                  RELEASING NOVEMBER 24, 2026 • COMPOSED IN 10TH GRADE
                </span>
              </div>

              {/* Story Body */}
              <div className="font-sans text-sm sm:text-base leading-relaxed text-[#090909] space-y-3 font-medium">
                <p>
                  Ashwin Azer will release <strong>“Neram”</strong> on <strong>November 24, 2026</strong>. Hailing from <strong>Coimbatore, India</strong>, the new track marks a meaningful moment for the artist: it was the first song he ever composed, written while he was in 10th grade.
                </p>
                <p>
                  “Neram” carries the foundation of Ashwin Azer’s creative journey, revisiting an early composition that reflects the beginnings of his evolving sound. The release arrives as a personal milestone, connecting the artist’s earliest songwriting experience with his present-day musical identity.
                </p>
                <p>
                  Ashwin Azer’s music draws from cultural roots and lived experience, transforming raw emotion into tracks designed to resonate deeply. His approach embraces experimentation and boundary-pushing, blending traditional influences with a modern edge to tell stories that reflect the evolution of his sound.
                </p>
              </div>

              {/* Juice WRLD Quote Banner */}
              <div className="bg-[#090909] text-[#EEFF00] p-4 border-2 border-[#090909] shadow-[4px_4px_0px_#7B2CBF] flex items-start gap-3">
                <Quote className="w-6 h-6 shrink-0 text-[#7B2CBF]" />
                <div className="font-mono text-xs sm:text-sm">
                  <span className="font-black italic block">
                    {neramAnnouncement.quote}
                  </span>
                  <span className="text-zinc-400 text-[11px] block mt-1">
                    [CURATED ARTIST INSPIRATION]
                  </span>
                </div>
              </div>

              {/* Press Contact Line */}
              <div className="flex flex-wrap items-center justify-between font-mono text-xs pt-2 border-t border-[#090909]/40 gap-2">
                <div className="flex items-center gap-1.5 font-bold">
                  <Mail className="w-4 h-4 text-[#7B2CBF]" />
                  <span>FOR PRESS & FURTHER INFORMATION:</span>
                  <a
                    href="mailto:ashwinazer@gmail.com"
                    className="underline text-[#090909] hover:text-[#7B2CBF] font-black"
                  >
                    ashwinazer@gmail.com
                  </a>
                </div>
                <span className="bg-[#F7F7F2] px-2 py-0.5 border border-[#090909] text-[10px] font-bold">
                  CAT# AZR-003-NRM
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Torn Press Clippings & Typewriter Notes Collage */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Main Manifesto Paper Sheet (Pinned with Black Gaffer Tape) */}
          <div className="md:col-span-7 relative bg-[#F7F7F2] text-[#090909] p-8 border-4 border-[#090909] shadow-[12px_12px_0px_#EEFF00] -rotate-0.5 space-y-6">
            {/* Black Tape Top */}
            <div className="absolute -top-4 left-10 w-28 h-7 bg-[#090909] -rotate-3 shadow-md opacity-95 z-20" />
            <div className="absolute -bottom-3 right-8 w-24 h-6 bg-[#090909] rotate-2 shadow-md opacity-95 z-20" />

            {/* Red Rubber Stamp "DECLASSIFIED" */}
            <div className="absolute top-6 right-6 border-4 border-[#7B2CBF] text-[#7B2CBF] font-mono text-sm sm:text-base font-black px-3 py-1 uppercase tracking-widest rotate-12 opacity-80 pointer-events-none">
              VERIFIED 2026
            </div>

            {/* Metadata Header */}
            <div className="border-b-2 border-[#090909] pb-4 font-mono text-xs space-y-1">
              <div className="flex justify-between">
                <span className="font-bold text-[#7B2CBF]">SUBJECT: ASHWIN RAMESH (ASHWIN AZER)</span>
                <span>CODE: AA-DOSSIER-4D</span>
              </div>
              <div className="flex justify-between text-zinc-600">
                <span>ALIAS: LUCID ASH</span>
                <span>ORIGIN: COIMBATORE, INDIA</span>
              </div>
            </div>

            {/* Sonic Manifesto Body */}
            <div className="space-y-4 font-['Space_Mono',monospace] text-sm leading-relaxed">
              <p className="first-letter:text-4xl first-letter:font-black first-letter:float-left first-letter:mr-2 first-letter:text-[#7B2CBF]">
                {ARTIST_INFO.manifesto}
              </p>

              <p>
                From late-night tracking sessions in Coimbatore and Bengaluru to sound-design laboratories pushing 4D spatial mathematics, Ashwin Azer operates outside industry homogeny. The sonic architecture bridges analog saturation, bone-rattling sub-bass, and emotional vocal narratives.
              </p>

              {/* Redacted Bar Stylings for Punk Aesthetic */}
              <div className="p-3 bg-zinc-200 border border-zinc-400 font-mono text-xs space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="font-bold">STATUS:</span>
                  <span className="bg-[#090909] text-[#EEFF00] px-2 py-0.5 font-bold">ACTIVE BROADCAST</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold">IMMINENT RELEASE:</span>
                  <span>“NERAM” (FEAT. REYMEN RODERICKS & HAVOC SURYA) // NOV 24</span>
                </div>
              </div>
            </div>

            {/* Stamp of Authenticity */}
            <div className="pt-4 border-t-2 border-[#090909] flex items-center justify-between font-mono text-xs">
              <span className="flex items-center gap-1.5 font-bold text-[#7B2CBF]">
                <ShieldCheck className="w-4 h-4" />
                MONADELTA SOUND LABS
              </span>
              <span className="text-zinc-600">SERIAL #849204-AZR</span>
            </div>
          </div>

          {/* Right Column: Milestones & Awards Clippings */}
          <div className="md:col-span-5 space-y-6">
            {/* Milestone Card 1: WallMag Rap Awards */}
            <div className="relative bg-[#EEFF00] text-[#090909] p-6 border-4 border-[#090909] shadow-[8px_8px_0px_#7B2CBF] rotate-1">
              <div className="absolute -top-3 right-6 w-20 h-5 bg-[#090909] rotate-1 shadow-sm opacity-90" />
              <div className="flex items-center gap-2 text-[#7B2CBF] font-mono text-xs font-black uppercase tracking-wider mb-2">
                <Award className="w-4 h-4" />
                OFFICIAL HONORS
              </div>
              <h3 className="font-['Syne',sans-serif] font-black text-2xl uppercase leading-tight">
                WallMag Rap Awards 2026
              </h3>
              <p className="font-mono text-xs font-bold text-zinc-800 mt-2">
                Nominated & Spotlighted in the Top 250 Independent Rap / Hip-Hop Creators worldwide.
              </p>
            </div>

            {/* Milestone Card 2: Monadelta Productions */}
            <div className="relative bg-[#F7F7F2] text-[#090909] p-6 border-4 border-[#090909] shadow-[8px_8px_0px_#EEFF00] -rotate-1">
              <div className="absolute -top-3 left-6 w-16 h-5 bg-[#090909] -rotate-2 shadow-sm opacity-90" />
              <div className="flex items-center gap-2 text-[#7B2CBF] font-mono text-xs font-black uppercase tracking-wider mb-2">
                <Zap className="w-4 h-4" />
                IMPRINT & PRODUCTION
              </div>
              <h3 className="font-['Syne',sans-serif] font-black text-2xl uppercase leading-tight">
                Monadelta Productions
              </h3>
              <p className="font-mono text-xs font-bold text-zinc-800 mt-2">
                Independent creative imprint founded by Ashwin Azer. Engineering, mixing, mastering, and visual art direction all handled in-house.
              </p>
            </div>

            {/* Key Accolades Bullet List */}
            <div className="bg-zinc-900 border-2 border-zinc-700 p-6 space-y-3 font-mono text-xs">
              <div className="font-black text-[#EEFF00] uppercase tracking-wider flex items-center gap-2 pb-2 border-b border-zinc-800">
                <CheckCircle2 className="w-4 h-4 text-[#7B2CBF]" />
                RECORDED MILESTONES
              </div>
              {ARTIST_INFO.accolades.map((accolade, i) => (
                <div key={i} className="flex items-start gap-2.5 text-zinc-300">
                  <span className="text-[#EEFF00] font-black">[{i + 1}]</span>
                  <span>{accolade}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
