import { Track, ArchiveItem } from '../types';

export const ARTIST_INFO = {
  name: 'ASHWIN AZER',
  legalName: 'Ashwin Ramesh',
  alias: 'Lucid ASH',
  genre: 'Contemporary R&B // Melodic Hip-Hop // Alternative R&B',
  era: '2026 // VOL. 2 ERA',
  label: 'Monadelta Productions',
  status: 'ACTIVE // SIGNALS BROADCASTING',
  location: 'India // Global',
  coordinates: '12.9716° N, 77.5946° E',
  manifesto: `Music is more than sound for Ashwin Azer—it's a destiny. Merging the raw, subterranean weight of contemporary R&B with razor-sharp melodic hip-hop cadence, Azer crafts sonics that explore the friction and euphoria of modern life. Every beat is an architectural experiment, cutting through sterile production with visceral grit and unapologetic emotional intensity.`,
  accolades: [
    'WallMag Rap Awards 2026 — Top 250 Creator Nominee',
    'Founder & Principal Sound Architect at Monadelta Productions',
    'Self-produced discography exceeding 500,000+ organic streams',
    'Pioneer of 4D spatial frequency design in South Asian independent music'
  ],
  links: {
    spotify: 'https://open.spotify.com/artist/6M1VSmwtcuwS1DnvXTGk7P',
    spotifyAlt: 'https://open.spotify.com/artist/5aHEYAeQkjg7DT1CiH6l3t',
    appleMusic: 'https://music.apple.com/artist/1497428225',
    youtube: 'https://www.youtube.com/@ashwinazer',
    youtubeChannel: 'https://www.youtube.com/channel/UCS3YwBzcmC2rODzIMLdHSjA',
    instagram: 'https://instagram.com/theashwinazer',
    musicbrainz: 'https://musicbrainz.org/artist/b43aaeda-d79e-4711-b242-feebf44c76fb',
    website: 'https://ashwinazer.rocks',
    contactEmail: 'contact@monadelta.me'
  }
};

export const TRACKS: Track[] = [
  {
    id: 'azer-vol-2',
    title: 'THE AZER (Vol. 2)',
    releaseYear: '2026',
    type: 'UPCOMING',
    catalogNumber: 'CAT# AZR-002-LTD',
    coverImage: '/images/hero-portrait.png',
    description: 'The monumental second chapter. Heavy distorted 808s colliding with lush vocal tapestries and existential late-night reflections. Releasing worldwide October 2, 2026.',
    spotifyUrl: 'https://open.spotify.com/artist/6M1VSmwtcuwS1DnvXTGk7P',
    appleMusicUrl: 'https://music.apple.com/artist/1497428225',
    youtubeUrl: 'https://www.youtube.com/@ashwinazer',
    bpm: 138,
    key: 'F# Minor',
    duration: '34:20',
    vibe: 'Industrial Noir // 4D Sub-Bass',
    lyricsSnippet: 'Static on the frequency, higher than the ceiling / Shadow in the riso ink, tell me what you feeling...',
    synthRiffNote: 'F2'
  },
  {
    id: 'destiny',
    title: 'DESTINY',
    releaseYear: '2024',
    type: 'ALBUM',
    catalogNumber: 'CAT# AZR-001-LP',
    coverImage: '/images/lucid-moments.webp',
    description: 'The definitive debut album establishing the Ashwin Azer sonic blueprint. A dark, hypnotic odyssey through contemporary R&B and melodic trap.',
    spotifyUrl: 'https://open.spotify.com/artist/6M1VSmwtcuwS1DnvXTGk7P',
    appleMusicUrl: 'https://music.apple.com/artist/1497428225',
    youtubeUrl: 'https://www.youtube.com/@ashwinazer',
    bpm: 124,
    key: 'C# Minor',
    duration: '28:45',
    vibe: 'Melodic Trap // Velvet Overdrive',
    lyricsSnippet: 'Destiny calling in the silence of the room / Turning all the grief into the sonic boom.',
    synthRiffNote: 'C#2'
  },
  {
    id: 'legends-and-lovers',
    title: 'Legends & Lovers',
    releaseYear: '2023',
    type: 'SINGLE',
    catalogNumber: 'CAT# AZR-000-SNG',
    coverImage: '/images/sonic-frequencies.webp',
    description: 'A fan-favorite anthemic single blending infectious vocal melodies with shimmering synthesizer arpeggios and punchy boom-bap drums.',
    spotifyUrl: 'https://open.spotify.com/artist/6M1VSmwtcuwS1DnvXTGk7P',
    appleMusicUrl: 'https://music.apple.com/artist/1497428225',
    youtubeUrl: 'https://www.youtube.com/@ashwinazer',
    bpm: 96,
    key: 'A Minor',
    duration: '03:18',
    vibe: 'Late Night R&B // Golden Hour Tape',
    lyricsSnippet: 'Legends never die but the lovers lose their way / Caught between tomorrow and the memories of today.',
    synthRiffNote: 'A1'
  },
  {
    id: 'azer-vol-1',
    title: 'THE AZER (Vol. 1)',
    releaseYear: '2022',
    type: 'EP',
    catalogNumber: 'CAT# AZR-001-EP',
    coverImage: '/images/visual-narrative.webp',
    description: 'The raw underground mixtape that put Ashwin Azer on the radar of indie tastemakers and international playlists. Unfiltered creative energy.',
    spotifyUrl: 'https://open.spotify.com/artist/6M1VSmwtcuwS1DnvXTGk7P',
    appleMusicUrl: 'https://music.apple.com/artist/1497428225',
    youtubeUrl: 'https://www.youtube.com/@ashwinazer',
    bpm: 130,
    key: 'D Minor',
    duration: '18:12',
    vibe: 'Underground Zine // Lo-Fi Voltage',
    lyricsSnippet: 'Vol. 1 in the chamber, ready for the spark / Photocopy dreams glowing in the dark.',
    synthRiffNote: 'D2'
  }
];

export const ARCHIVE_ITEMS: ArchiveItem[] = [
  {
    id: 'arch-1',
    title: 'THE 4D HYPERCUBE // HERO CUTOUT',
    type: 'COVER ART',
    year: '2026',
    image: '/images/hero-portrait.png',
    caption: 'Official 2026 visual identity: Acid yellow risograph screen with purple chromatic misregistration and xerox dot-matrix shading.',
    aspect: 'square',
    tag: 'VISUAL ID'
  },
  {
    id: 'arch-2',
    title: 'DESTINY STUDIO TAPES // VOL. 2 SESSIONS',
    type: 'STUDIO ARCHIVE',
    year: '2025',
    image: '/images/hero-bg.webp',
    caption: 'Late night console sessions at Monadelta Studios tracking analog synth stems and vocal doubles.',
    aspect: 'landscape',
    tag: 'STUDIO LOG'
  },
  {
    id: 'arch-3',
    title: 'LUCID MOMENTS // MUSIC VIDEO STILL',
    type: 'MUSIC VIDEO',
    year: '2024',
    image: '/images/lucid-moments.webp',
    caption: 'High-contrast monochrome frame from the "Lucid Moments" official visualizer. Directed by Ashwin Azer.',
    aspect: 'portrait',
    tag: 'VIDEO STILL'
  },
  {
    id: 'arch-4',
    title: 'SONIC FREQUENCIES // MODULAR EXPERIMENTS',
    type: 'STUDIO ARCHIVE',
    year: '2024',
    image: '/images/sonic-frequencies.webp',
    caption: 'Exploring modular voltage control and 4D spatial audio phase cancellation.',
    aspect: 'square',
    tag: 'RESEARCH'
  },
  {
    id: 'arch-5',
    title: 'VISUAL NARRATIVE // THE AZER ZINE ISSUE 01',
    type: 'PRESS CLIP',
    year: '2023',
    image: '/images/visual-narrative.webp',
    caption: 'Physical cassette J-card print insert and DIY riso booklet distributed at underground showcases.',
    aspect: 'landscape',
    tag: 'PRINT ARTIFACT'
  },
  {
    id: 'arch-6',
    title: 'WALLMAG RAP AWARDS 2026 // TOP 250 ENTRY',
    type: 'PRESS CLIP',
    year: '2026',
    image: '/images/og-image.jpg',
    caption: 'Official nomination spotlight certificate recognizing Ashwin Azer in the 2026 Top 250 Rap/Hip-Hop Creators.',
    aspect: 'portrait',
    tag: 'AWARD'
  }
];
