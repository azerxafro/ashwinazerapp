import React, { useState } from 'react';
import { ARCHIVE_ITEMS } from '../data/artistData';
import { ArchiveItem } from '../types';
import { Camera, Eye, X, ZoomIn, Hash } from 'lucide-react';

interface VisualsArchiveProps {
  onFlash: () => void;
}

export const VisualsArchive: React.FC<VisualsArchiveProps> = ({ onFlash }) => {
  const [selectedItem, setSelectedItem] = useState<ArchiveItem | null>(null);

  const handleOpenItem = (item: ArchiveItem) => {
    onFlash();
    setSelectedItem(item);
  };

  return (
    <section
      id="03-archive"
      className="relative min-h-screen w-full bg-[#EEFF00] text-[#090909] py-28 px-4 sm:px-6 lg:px-8 border-b-8 border-[#090909] overflow-hidden"
    >
      {/* Background Graphic Watermark */}
      <div className="absolute right-0 top-1/4 font-['Syne',sans-serif] font-black text-[18vw] text-[#090909]/5 select-none pointer-events-none uppercase leading-none">
        XEROX
      </div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-4 border-[#090909] pb-6 gap-6">
          <div>
            <div className="inline-block px-3 py-1 bg-[#090909] text-[#EEFF00] font-mono text-xs font-black uppercase tracking-widest rotate-1 mb-3 shadow-[3px_3px_0px_#7B2CBF]">
              [RISOGRAPH REPOSITORY // MONOCHROME TO TRITONE]
            </div>
            <h2 className="font-['Syne',sans-serif] font-black text-5xl sm:text-7xl tracking-tighter uppercase text-[#090909]">
              03 // VISUALS & ARCHIVE
            </h2>
            <p className="font-mono text-xs sm:text-sm text-[#090909] font-bold mt-2 uppercase tracking-wider">
              UNDERGROUND ZINE CUTOUTS // PHOTOCOPY SCAN-LINE ARTIFACTS
            </p>
          </div>

          <div className="flex items-center space-x-2 bg-[#F7F7F2] border-2 border-[#090909] p-3 font-mono text-xs shadow-[3px_3px_0px_#090909]">
            <Camera className="w-4 h-4 text-[#7B2CBF]" />
            <span>HOVER TO REVEAL ACID-YELLOW & PURPLE TRITONE</span>
          </div>
        </div>

        {/* Asymmetric Collage Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {ARCHIVE_ITEMS.map((item, index) => {
            const tilt = index % 3 === 0 ? '-rotate-1' : index % 3 === 1 ? 'rotate-1' : '-rotate-0.5';

            return (
              <div
                key={item.id}
                onClick={() => handleOpenItem(item)}
                className={`group relative bg-[#F7F7F2] p-4 border-4 border-[#090909] shadow-[8px_8px_0px_#090909] hover:shadow-[10px_10px_0px_#7B2CBF] transition-all duration-300 cursor-pointer ${tilt} hover:rotate-0 hover:-translate-y-1`}
              >
                {/* Black Gaffer Tape Decal Pinning the Card */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-[#090909] -rotate-2 z-20 shadow-[1px_1px_0px_rgba(255,255,255,0.4)] opacity-90" />

                {/* Stamped Tag & Year */}
                <div className="flex items-center justify-between pb-2 font-mono text-[11px] font-bold text-[#090909] border-b-2 border-[#090909]">
                  <span className="flex items-center gap-1 text-[#7B2CBF]">
                    <Hash className="w-3 h-3" />
                    {item.tag}
                  </span>
                  <span>{item.year}</span>
                </div>

                {/* Image Container with Scan-line Hover Reveal */}
                <div className="relative mt-3 aspect-square w-full overflow-hidden border-2 border-[#090909] bg-[#090909]">
                  {/* Default State: High-Contrast B&W Xerox Halftone */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover filter grayscale contrast-200 brightness-90 group-hover:opacity-0 transition-opacity duration-300"
                  />

                  {/* Hover State: Full Acid Yellow & Risograph Purple Tritone */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover filter contrast-150 saturate-200"
                    />
                    <div className="absolute inset-0 bg-[#EEFF00] mix-blend-color opacity-70" />
                    <div className="absolute inset-0 bg-[#7B2CBF] mix-blend-multiply opacity-40" />

                    {/* Animated Photocopy Scan-line sweeping vertically */}
                    <div className="absolute inset-x-0 h-2 bg-[#F7F7F2] shadow-[0_0_15px_#F7F7F2] animate-[scan_1.6s_ease-in-out_infinite]" />
                  </div>

                  {/* Corner Inspection Icon */}
                  <div className="absolute bottom-2 right-2 p-1.5 bg-[#090909] text-[#EEFF00] border border-[#EEFF00] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>

                {/* Caption & Metadata */}
                <div className="mt-3 space-y-1">
                  <h4 className="font-['Syne',sans-serif] font-black text-lg tracking-tight uppercase leading-snug text-[#090909] group-hover:text-[#7B2CBF] transition-colors">
                    {item.title}
                  </h4>
                  <p className="font-mono text-xs text-zinc-800 line-clamp-2">
                    {item.caption}
                  </p>
                </div>

                {/* Cassette J-Card Footnote */}
                <div className="mt-3 pt-2 border-t border-dashed border-[#090909]/40 flex items-center justify-between font-mono text-[10px] text-[#090909]/70">
                  <span>PRINT ARCHIVE #{index + 1}</span>
                  <span className="flex items-center gap-1 font-bold">
                    <Eye className="w-3 h-3" />
                    CLICK TO EXPAND
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Expanded Modal Lightbox */}
      {selectedItem && (
        <div
          onClick={() => setSelectedItem(null)}
          className="fixed inset-0 z-[9999] bg-[#090909]/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-[#F7F7F2] text-[#090909] max-w-3xl w-full border-6 border-[#EEFF00] p-6 shadow-[16px_16px_0px_#7B2CBF] space-y-4"
          >
            {/* Top Tape */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#090909] -rotate-1 shadow-md" />

            <div className="flex items-center justify-between border-b-2 border-[#090909] pb-3">
              <span className="font-mono text-xs font-black uppercase text-[#7B2CBF]">
                [ARCHIVE INSPECTION: {selectedItem.tag}]
              </span>
              <button
                onClick={() => setSelectedItem(null)}
                className="p-1 border-2 border-[#090909] bg-[#EEFF00] hover:bg-[#7B2CBF] hover:text-[#EEFF00] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="max-h-[60vh] overflow-hidden border-3 border-[#090909] bg-[#090909] flex items-center justify-center">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-full object-contain max-h-[55vh]"
              />
            </div>

            <div className="space-y-2">
              <h3 className="font-['Syne',sans-serif] font-black text-2xl uppercase">
                {selectedItem.title}
              </h3>
              <p className="font-mono text-sm leading-relaxed text-zinc-900">
                {selectedItem.caption}
              </p>
              <div className="font-mono text-xs text-zinc-600 pt-2 border-t border-zinc-300 flex justify-between">
                <span>YEAR: {selectedItem.year}</span>
                <span>AUTHENTICATED BY MONADELTA ARCHIVES</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
