import { Track, ArchiveItem } from '../types';

export const ARTIST_INFO = {
  name: 'ASHWIN AZER',
  legalName: 'Ashwin Ramesh',
  alias: 'Lucid ASH',
  genre: 'Contemporary R&B // Melodic Hip-Hop // Alternative R&B',
  era: '2026 // NERAM ERA',
  label: 'Monadelta Productions',
  status: 'ACTIVE // BROADCASTING ON SPOTIFY',
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
    id: 'one-side',
    title: 'One Side Nee One Side Naan',
    releaseYear: '2026',
    type: 'SINGLE',
    catalogNumber: 'CAT# AZR-004-OSN',
    coverImage: '/images/hero-portrait.png',
    spotifyUri: 'spotify:track:4hGOmD42QWQN7xrWaCV52e',
    spotifyUrl: 'https://open.spotify.com/track/4hGOmD42QWQN7xrWaCV52e',
    appleMusicUrl: 'https://music.apple.com/artist/1497428225',
    youtubeUrl: 'https://www.youtube.com/@ashwinazer',
    description: 'Lucid ASH, Ashwin Azer. The hit single exploring melodic vulnerability, contemporary R&B cadence, and heartfelt emotion. Stream now on Spotify.',
    bpm: 110,
    key: 'G# Minor',
    duration: '03:12',
    vibe: 'Contemporary R&B // Melodic Vulnerability',
    lyricsSnippet: 'One side nee, one side naan... echoes in the night.'
  },
  {
    id: 'neram',
    title: 'Neram',
    releaseYear: 'Nov 24, 2026',
    type: 'UPCOMING',
    catalogNumber: 'CAT# AZR-003-NRM',
    coverImage: '/images/neram-cover.jpg',
    spotifyUri: 'spotify:track:4hGOmD42QWQN7xrWaCV52e',
    spotifyUrl: 'https://open.spotify.com/track/4hGOmD42QWQN7xrWaCV52e',
    appleMusicUrl: 'https://music.apple.com/artist/1497428225',
    youtubeUrl: 'https://www.youtube.com/@ashwinazer',
    description: 'Reymen Rodericks × Ashwin Azer × Havoc Surya. The foundational genesis of Ashwin Azer\'s creative journey. The very first song he ever composed, written while in 10th grade in Coimbatore, India. Drops November 24, 2026.',
    bpm: 118,
    key: 'E Minor',
    duration: '03:15',
    vibe: 'Genesis Composition // Cultural Roots // Coimbatore Origins',
    lyricsSnippet: 'Want to get overly famous and fake my death — Juice WRLD'
  },
  {
    id: 'ticket',
    title: 'Ticket',
    releaseYear: '2026',
    type: 'SINGLE',
    catalogNumber: 'CAT# AZR-005-TCK',
    coverImage: '/images/sonic-frequencies.webp',
    spotifyUri: 'spotify:album:6PkvVw3cqae6hwvPBTto5l',
    spotifyUrl: 'https://open.spotify.com/album/6PkvVw3cqae6hwvPBTto5l',
    appleMusicUrl: 'https://music.apple.com/artist/1497428225',
    youtubeUrl: 'https://www.youtube.com/@ashwinazer',
    description: 'A dark, hypnotic trap single featuring punchy rhythms and effortless vocal delivery. Streaming on Spotify.',
    bpm: 128,
    key: 'F Minor',
    duration: '02:50',
    vibe: 'Late Night Trap // Velvet Overdrive'
  },
  {
    id: 'off-my-chest',
    title: 'off my chest',
    releaseYear: '2025',
    type: 'SINGLE',
    catalogNumber: 'CAT# AZR-002-OMC',
    coverImage: '/images/lucid-moments.webp',
    spotifyUri: 'spotify:album:3trMx9Z5ZAXzaB2tuFeHPd',
    spotifyUrl: 'https://open.spotify.com/album/3trMx9Z5ZAXzaB2tuFeHPd',
    appleMusicUrl: 'https://music.apple.com/artist/1497428225',
    youtubeUrl: 'https://www.youtube.com/@ashwinazer',
    description: 'Raw introspection and emotional release over hypnotic guitar chords and melodic hip-hop drums.',
    bpm: 120,
    key: 'C Minor',
    duration: '03:05',
    vibe: 'Melodic Hip-Hop // Emotional Release'
  },
  {
    id: 'lax',
    title: 'LAX',
    releaseYear: '2023',
    type: 'SINGLE',
    catalogNumber: 'CAT# AZR-001-LAX',
    coverImage: '/images/visual-narrative.webp',
    spotifyUri: 'spotify:album:6Cnu5Drrt1FpdRSRWdA3DE',
    spotifyUrl: 'https://open.spotify.com/album/6Cnu5Drrt1FpdRSRWdA3DE',
    appleMusicUrl: 'https://music.apple.com/artist/1497428225',
    youtubeUrl: 'https://www.youtube.com/@ashwinazer',
    description: 'Fan-favorite underground anthemic single. Infectious melodies over shimmering synthesizers.',
    bpm: 96,
    key: 'A Minor',
    duration: '03:18',
    vibe: 'Golden Hour R&B // Shimmering Tape'
  },
  {
    id: 'nexus',
    title: 'NEXUS',
    releaseYear: '2022',
    type: 'ALBUM',
    catalogNumber: 'CAT# AZR-000-NXS',
    coverImage: '/images/hero-bg.webp',
    spotifyUri: 'spotify:album:2uJg5R8lyX0qZmu5QNQgh7',
    spotifyUrl: 'https://open.spotify.com/album/2uJg5R8lyX0qZmu5QNQgh7',
    appleMusicUrl: 'https://music.apple.com/artist/1497428225',
    youtubeUrl: 'https://www.youtube.com/@ashwinazer',
    description: 'The monumental foundational album bridging underground DIY production with modern R&B.',
    bpm: 130,
    key: 'D Minor',
    duration: '24:18',
    vibe: 'Underground Blueprint // Lo-Fi Voltage'
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
    title: 'HERO CUTOUT // AZER PORTRAIT',
    type: 'COVER ART',
    year: '2026',
    image: '/images/hero-portrait.png',
    caption: 'Official visual identity: Acid yellow risograph screen with purple chromatic misregistration and xerox dot-matrix shading.',
    aspect: 'square',
    tag: 'VISUAL ID'
  },
  {
    id: 'arch-2',
    title: 'DESTINY STUDIO TAPES // RECORDING SESSIONS',
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
    caption: 'Exploring modular voltage control and spatial audio sound design.',
    aspect: 'square',
    tag: 'RESEARCH'
  },
  {
    id: 'arch-5',
    title: 'VISUAL NARRATIVE // ZINE ISSUE 01',
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
