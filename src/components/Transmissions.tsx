import React, { useState } from 'react';
import { ARTIST_INFO } from '../data/artistData';
import {
  ExternalLink,
  Download,
  Mail,
  Send,
  Headphones,
  Disc,
  Youtube,
  Instagram,
  CheckCircle,
  Radio,
  FileCode
} from 'lucide-react';

interface TransmissionsProps {
  onFlash: () => void;
}

export const Transmissions: React.FC<TransmissionsProps> = ({ onFlash }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'BOOKING // LIVE PERFORMANCE',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFlash();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        inquiryType: 'BOOKING // LIVE PERFORMANCE',
        message: ''
      });
    }, 4000);
  };

  const handleDownloadEPK = () => {
    onFlash();
    // Generate and download authentic EPK markdown summary
    const epkContent = `# ASHWIN AZER // OFFICIAL ELECTRONIC PRESS KIT (EPK)
==================================================
Artist: Ashwin Azer (Ashwin Ramesh)
Alias: Lucid ASH
Genre: Contemporary R&B // Melodic Hip-Hop
Imprint: Monadelta Productions
Location: Coimbatore, India / Global
Press Contact: ashwinazer@gmail.com
Current Era: 2026 // "NERAM" ERA

FEATURED ANNOUNCEMENT:
Ashwin Azer will release “Neram” on November 24, 2026. Hailing from Coimbatore, India, the new track marks a meaningful moment for the artist: it was the first song he ever composed, written while he was in 10th grade.
Collaborators: Reymen Rodericks × Ashwin Azer × Havoc Surya
Featured Quote: “Want to get overly famous and fake my death” — Juice WRLD

OFFICIAL BIO & MANIFESTO:
${ARTIST_INFO.manifesto}

ACCOLADES & MILESTONES:
${ARTIST_INFO.accolades.map((a) => `- ${a}`).join('\n')}

DISCOGRAPHY:
- Neram [Single with Reymen Rodericks & Havoc Surya, Drops Nov 24, 2026]
- THE AZER (Vol. 2) [Upcoming Album, 2026]
- DESTINY [Studio LP, 2024]
- Legends & Lovers [Single, 2023]
- THE AZER (Vol. 1) [Mixtape, 2022]

VERIFIED STREAMING LINKS:
- Spotify: ${ARTIST_INFO.links.spotify}
- Apple Music: ${ARTIST_INFO.links.appleMusic}
- YouTube: ${ARTIST_INFO.links.youtube}
- Instagram: ${ARTIST_INFO.links.instagram}
- MusicBrainz: ${ARTIST_INFO.links.musicbrainz}

PRESS & MANAGEMENT:
Direct Press: ashwinazer@gmail.com
Management: contact@monadelta.me
Website: ${ARTIST_INFO.links.website}
CATALOG STAMP: CAT# AZR-2026-PRESS
==================================================
`;
    const blob = new Blob([epkContent], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'ASHWIN-AZER-EPK-2026.md';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const stampLinks = [
    {
      label: 'SPOTIFY',
      url: ARTIST_INFO.links.spotify,
      icon: Headphones,
      color: 'bg-[#EEFF00] text-[#090909] border-[#090909]',
      stampId: 'STAMP-01-SPT'
    },
    {
      label: 'APPLE MUSIC',
      url: ARTIST_INFO.links.appleMusic,
      icon: Disc,
      color: 'bg-[#F7F7F2] text-[#090909] border-[#090909]',
      stampId: 'STAMP-02-APL'
    },
    {
      label: 'YOUTUBE',
      url: ARTIST_INFO.links.youtube,
      icon: Youtube,
      color: 'bg-[#EEFF00] text-[#090909] border-[#090909]',
      stampId: 'STAMP-03-YTB'
    },
    {
      label: 'INSTAGRAM',
      url: ARTIST_INFO.links.instagram,
      icon: Instagram,
      color: 'bg-[#7B2CBF] text-[#EEFF00] border-[#090909]',
      stampId: 'STAMP-04-IG'
    },
    {
      label: 'MUSICBRAINZ',
      url: ARTIST_INFO.links.musicbrainz,
      icon: FileCode,
      color: 'bg-[#F7F7F2] text-[#090909] border-[#090909]',
      stampId: 'STAMP-05-MBZ'
    }
  ];

  return (
    <section
      id="05-transmissions"
      className="relative min-h-screen w-full bg-[#EEFF00] text-[#090909] py-28 px-4 sm:px-6 lg:px-8 border-b-8 border-[#090909] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-4 border-[#090909] pb-6 gap-6">
          <div>
            <div className="inline-block px-3 py-1 bg-[#090909] text-[#EEFF00] font-mono text-xs font-black uppercase tracking-widest -rotate-1 mb-3 shadow-[3px_3px_0px_#7B2CBF]">
              [OUTLET // EPK // BOOKING FREQUENCY]
            </div>
            <h2 className="font-['Syne',sans-serif] font-black text-5xl sm:text-7xl tracking-tighter uppercase text-[#090909]">
              05 // TRANSMISSIONS
            </h2>
            <p className="font-mono text-xs sm:text-sm text-[#090909] font-bold mt-2 uppercase tracking-wider">
              STREAMING CHANNELS // PRESS ASSETS // MANAGEMENT COMMUNICATIONS
            </p>
          </div>

          <button
            onClick={handleDownloadEPK}
            className="flex items-center gap-2 px-6 py-3.5 bg-[#090909] text-[#EEFF00] font-mono text-xs font-black uppercase tracking-wider border-3 border-[#090909] shadow-[5px_5px_0px_#7B2CBF] hover:bg-[#7B2CBF] transition-all cursor-pointer rotate-1 active:translate-x-1 active:translate-y-1 active:shadow-none"
          >
            <Download className="w-4 h-4" />
            DOWNLOAD OFFICIAL EPK (.MD)
          </button>
        </div>

        {/* Oversized Ink-Stamp Buttons Grid */}
        <div className="space-y-4">
          <div className="font-mono text-xs font-black uppercase tracking-widest text-[#090909] flex items-center gap-2">
            <Radio className="w-4 h-4 text-[#7B2CBF]" />
            AUTHENTICATED BROADCAST CHANNELS
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {stampLinks.map((item, index) => {
              const Icon = item.icon;
              const tilt = index % 2 === 0 ? '-rotate-1' : 'rotate-1';

              return (
                <a
                  key={item.label}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onFlash}
                  className={`group relative p-5 border-4 ${item.color} shadow-[6px_6px_0px_#090909] hover:shadow-[8px_8px_0px_#7B2CBF] hover:-translate-y-1 transition-all duration-200 cursor-pointer flex flex-col justify-between h-36 ${tilt} hover:rotate-0`}
                >
                  <div className="flex items-center justify-between font-mono text-[10px] font-bold opacity-75">
                    <span>{item.stampId}</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>

                  <div className="space-y-1">
                    <Icon className="w-6 h-6 mb-1 text-current" />
                    <span className="font-['Syne',sans-serif] font-black text-lg sm:text-xl uppercase tracking-tight block">
                      {item.label}
                    </span>
                  </div>

                  <div className="font-mono text-[9px] font-bold uppercase tracking-wider opacity-80">
                    OPEN FEED →
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Booking & Management Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-6">
          {/* Left Form Box */}
          <div className="lg:col-span-7 bg-[#F7F7F2] p-8 border-4 border-[#090909] shadow-[12px_12px_0px_#090909] space-y-6 relative -rotate-0.5">
            {/* Corner Gaffer Tape */}
            <div className="absolute -top-3 left-8 w-24 h-5 bg-[#090909] -rotate-2" />

            <div className="border-b-2 border-[#090909] pb-4 flex items-center justify-between">
              <div>
                <h3 className="font-['Syne',sans-serif] font-black text-2xl uppercase text-[#090909]">
                  TRANSMIT SIGNAL // BOOKING & INQUIRIES
                </h3>
                <span className="font-mono text-xs text-zinc-700">
                  DIRECT LINE TO MANAGEMENT & TOUR LOGISTICS
                </span>
              </div>
              <Mail className="w-6 h-6 text-[#7B2CBF]" />
            </div>

            {formSubmitted ? (
              <div className="bg-[#EEFF00] p-6 border-3 border-[#090909] shadow-[4px_4px_0px_#7B2CBF] font-mono text-center space-y-2">
                <CheckCircle className="w-8 h-8 text-[#090909] mx-auto animate-bounce" />
                <h4 className="font-black text-base uppercase">SIGNAL RECEIVED // LOGGED TO ARCHIVE</h4>
                <p className="text-xs text-zinc-800">
                  Thank you. Management will acknowledge within 24 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-bold uppercase tracking-wider block text-zinc-800">
                      IDENTIFIER / NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Promoter / Festival"
                      className="w-full p-3 bg-white border-2 border-[#090909] focus:bg-[#EEFF00] focus:outline-none shadow-[2px_2px_0px_#090909]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold uppercase tracking-wider block text-zinc-800">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@organization.com"
                      className="w-full p-3 bg-white border-2 border-[#090909] focus:bg-[#EEFF00] focus:outline-none shadow-[2px_2px_0px_#090909]"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-bold uppercase tracking-wider block text-zinc-800">
                    TRANSMISSION TYPE
                  </label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full p-3 bg-white border-2 border-[#090909] focus:bg-[#EEFF00] focus:outline-none shadow-[2px_2px_0px_#090909]"
                  >
                    <option>BOOKING // LIVE PERFORMANCE</option>
                    <option>PRESS // INTERVIEW // FEATURE</option>
                    <option>SYNCHRONIZATION // LICENSING</option>
                    <option>PRODUCTION // COLLABORATION</option>
                    <option>GENERAL INQUIRY</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-bold uppercase tracking-wider block text-zinc-800">
                    MESSAGE PAYLOAD *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide event date, venue, city, budget, or press inquiry details..."
                    className="w-full p-3 bg-white border-2 border-[#090909] focus:bg-[#EEFF00] focus:outline-none shadow-[2px_2px_0px_#090909]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#090909] text-[#EEFF00] font-mono text-sm font-black uppercase tracking-widest border-3 border-[#090909] shadow-[6px_6px_0px_#7B2CBF] hover:bg-[#7B2CBF] transition-all flex items-center justify-center gap-2 cursor-pointer active:translate-x-1 active:translate-y-1 active:shadow-none"
                >
                  <Send className="w-4 h-4" />
                  TRANSMIT SIGNAL [SUBMIT]
                </button>
              </form>
            )}
          </div>

          {/* Right Direct Coordinates Card */}
          <div className="lg:col-span-5 bg-[#090909] text-[#F7F7F2] p-8 border-4 border-[#090909] shadow-[12px_12px_0px_#7B2CBF] space-y-6 rotate-0.5">
            <div className="border-b-2 border-[#EEFF00] pb-4">
              <span className="font-mono text-xs text-[#EEFF00] font-black uppercase tracking-wider block">
                DIRECT COMMUNICATOR
              </span>
              <h4 className="font-['Syne',sans-serif] font-black text-2xl uppercase mt-1">
                MONADELTA MANAGEMENT
              </h4>
            </div>

            <div className="font-mono text-xs space-y-4 text-zinc-300">
              <div>
                <span className="text-zinc-500 uppercase block">PRIMARY PRESS DESK:</span>
                <a
                  href="mailto:ashwinazer@gmail.com"
                  className="text-[#EEFF00] font-bold text-sm hover:underline"
                >
                  ashwinazer@gmail.com
                </a>
              </div>

              <div>
                <span className="text-zinc-500 uppercase block">LABEL & IMPRINT:</span>
                <span className="text-white font-bold">{ARTIST_INFO.label}</span>
              </div>

              <div>
                <span className="text-zinc-500 uppercase block">SPATIAL LOCUS:</span>
                <span>Coimbatore, India // {ARTIST_INFO.coordinates}</span>
              </div>

              <div>
                <span className="text-zinc-500 uppercase block">CURRENT ERA:</span>
                <span className="text-[#EEFF00] font-bold">“NERAM” & THE AZER CYCLE</span>
              </div>
            </div>

            <div className="p-4 bg-zinc-950 border border-zinc-800 font-mono text-[11px] text-zinc-400 space-y-1">
              <div className="text-[#EEFF00] font-bold">[PRESS ASSETS NOTICE]</div>
              <p>
                Hi-res promotional stills, tour riders, technical stage plots, and bio one-sheets are included in the downloadable EPK archive.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Cassette J-Card Footer */}
      <footer className="mt-20 pt-8 border-t-4 border-[#090909] max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between font-mono text-xs font-bold gap-4">
        <div className="flex items-center space-x-2">
          <span>© 2026 ASHWIN AZER</span>
          <span>•</span>
          <span>MONADELTA PRODUCTIONS</span>
          <span>•</span>
          <span className="text-[#7B2CBF]">ALL RIGHTS RESERVED</span>
        </div>

        <div className="flex items-center space-x-4 text-zinc-800">
          <span>CAT# AA-2026-RISOGRID</span>
          <span>•</span>
          <span>STAMPED IN TRITONE</span>
        </div>
      </footer>
    </section>
  );
};
