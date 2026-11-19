import { Track, ArchiveItem } from '../types';

export const ARTIST_INFO = {
  name: 'ASHWIN AZER',
  legalName: 'Ashwin Ramesh',
  alias: 'Lucid ASH',
  genre: 'Contemporary R&B // Melodic Hip-Hop // Alternative R&B',
  era: '2026 // NERAM ERA',
  label: 'Monadelta Productions',
  status: 'ACTIVE // SIGNALS BROADCASTING',
  location: 'Coimbatore, India // Global',
  coordinates: '11.0168° N, 76.9558° E',
  pressEmail: 'ashwinazer@gmail.com',
  featuredQuote: '“Want to get overly famous and fake my death” — Juice WRLD',
  manifesto: `Music is more than sound for Ashwin Azer—it's a destiny. Merging the raw, subterranean weight of contemporary R&B with razor-sharp melodic hip-hop cadence, Azer crafts sonics that explore the friction and euphoria of modern life. His approach embraces experimentation and boundary-pushing, blending traditional cultural roots with a modern edge to tell stories that reflect the evolution of his sound.`,
  neramAnnouncement: {
    title: 'Ashwin Azer Announces New Release “Neram”',
    collaborators: 'Reymen Rodericks × Ashwin Azer × Havoc Surya',
    releaseDate: 'November 24, 2026',
    origin: 'Coimbatore, India',
    coverImage: '/images/neram-cover.jpg',
    story: `Ashwin Azer will release “Neram” on November 24, 2026. Hailing from Coimbatore, India, the new track marks a meaningful moment for the artist: it was the first song he ever composed, written while he was in 10th grade.

“Neram” carries the foundation of Ashwin Azer’s creative journey, revisiting an early composition that reflects the beginnings of his evolving sound. The release arrives as a personal milestone, connecting the artist’s earliest songwriting experience with his present-day musical identity.

Ashwin Azer’s music draws from cultural roots and lived experience, transforming raw emotion into tracks designed to resonate deeply. His approach embraces experimentation and boundary-pushing, blending traditional influences with a modern edge to tell stories that reflect the evolution of his sound.`,
    quote: '“Want to get overly famous and fake my death” — Juice WRLD',
    pressContact: 'ashwinazer@gmail.com'
  },
  accolades: [
    'Upcoming Release: “Neram” with Reymen Rodericks & Havoc Surya — Drops Nov 24, 2026',
    'Origin: First song ever composed, written in 10th grade in Coimbatore, India',
    'WallMag Rap Awards 2026 — Top 250 Creator Nominee',
    'Founder & Principal Sound Architect at Monadelta Productions',
    'Self-produced discography exceeding 500,000+ organic streams'
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
    contactEmail: 'ashwinazer@gmail.com',
    managementEmail: 'contact@monadelta.me'
  }
};

export const TRACKS: Track[] = [
  {
    id: 'neram',
    title: 'Neram',
    releaseYear: 'Nov 24, 2026',
    type: 'UPCOMING',
    catalogNumber: 'CAT# AZR-003-NRM',
    coverImage: '/images/neram-cover.jpg',
    description: 'Reymen Rodericks × Ashwin Azer × Havoc Surya. The foundational genesis of Ashwin Azer\'s creative journey. The very first song he ever composed, written while in 10th grade in Coimbatore, India. Connecting his earliest songwriting experience with modern 4D sonic architecture. Dropping November 24, 2026.',
    spotifyUrl: 'https://open.spotify.com/artist/6M1VSmwtcuwS1DnvXTGk7P',
    appleMusicUrl: 'https://music.apple.com/artist/1497428225',
    youtubeUrl: 'https://www.youtube.com/@ashwinazer',
    bpm: 118,
    key: 'E Minor',
    duration: '03:15',
    vibe: 'Genesis Composition // Cultural Roots // Coimbatore Origins',
    lyricsSnippet: 'Want to get overly famous and fake my death — Juice WRLD',
    synthRiffNote: 'E2'
  },
  {
    id: 'azer-vol-2',
    title: 'THE AZER (Vol. 2)',
    releaseYear: '2026',
    type: 'UPCOMING',
    catalogNumber: 'CAT# AZR-002-LTD',
    coverImage: '/images/hero-portrait.png',
    description: 'The monumental second chapter. Heavy distorted 808s colliding with lush vocal tapestries and existential late-night reflections.',
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
    id: 'arch-neram',
    title: '“NERAM” // OFFICIAL COVER ART',
    type: 'COVER ART',
    year: 'NOV 2026',
    image: '/images/neram-cover.jpg',
    caption: 'Reymen Rodericks × Ashwin Azer × Havoc Surya — "Neram". First song ever composed, written in 10th grade in Coimbatore. Drops Nov 24, 2026.',
    aspect: 'square',
    tag: 'NEW SINGLE'
  },
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
