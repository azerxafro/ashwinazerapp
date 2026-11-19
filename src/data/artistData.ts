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
    catalogNumber: 'CAT# AZR-001-OSN',
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
    catalogNumber: 'CAT# AZR-002-NRM',
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
    id: 'onnula-di',
    title: 'Onnula di',
    releaseYear: '2026',
    type: 'SINGLE',
    catalogNumber: 'CAT# AZR-003-OLD',
    coverImage: '/images/sonic-frequencies.webp',
    spotifyUri: 'spotify:track:19HaPiAeTykGDV2KGmaG1W',
    spotifyUrl: 'https://open.spotify.com/track/19HaPiAeTykGDV2KGmaG1W',
    appleMusicUrl: 'https://music.apple.com/artist/1497428225',
    youtubeUrl: 'https://www.youtube.com/@ashwinazer',
    description: 'The breakout hit single from "THE AZER". Fuses introspective Tamil lyricism with atmospheric 808s and melancholic guitar hooks.',
    bpm: 122,
    key: 'C Minor',
    duration: '02:58',
    vibe: 'Alternative R&B // Sub-Bass Melancholy',
    lyricsSnippet: 'Onnula di... echoes through the midnight streets of Coimbatore.'
  },
  {
    id: 'kadhal-raagam',
    title: 'Kadhal Raagam',
    releaseYear: '2026',
    type: 'SINGLE',
    catalogNumber: 'CAT# AZR-004-KDR',
    coverImage: '/images/lucid-moments.webp',
    spotifyUri: 'spotify:track:4ivmbWiNtchIl1QTzvI2f6',
    spotifyUrl: 'https://open.spotify.com/track/4ivmbWiNtchIl1QTzvI2f6',
    appleMusicUrl: 'https://music.apple.com/artist/1497428225',
    youtubeUrl: 'https://www.youtube.com/@ashwinazer',
    description: 'A soulful, lush contemporary R&B ballad layered with intimate vocal delivery, warm chords, and velvet analog saturation.',
    bpm: 105,
    key: 'A Minor',
    duration: '03:22',
    vibe: 'Soulful R&B // Melodic Trap Wave',
    lyricsSnippet: 'Kadhal Raagam... harmonies bleeding into 432Hz vibrations.'
  },
  {
    id: '27club',
    title: '27club',
    releaseYear: '2026',
    type: 'SINGLE',
    catalogNumber: 'CAT# AZR-005-27C',
    coverImage: '/images/visual-narrative.webp',
    spotifyUri: 'spotify:track:3ZdkyAPaVISRuPCFCC5FJf',
    spotifyUrl: 'https://open.spotify.com/track/3ZdkyAPaVISRuPCFCC5FJf',
    appleMusicUrl: 'https://music.apple.com/artist/1497428225',
    youtubeUrl: 'https://www.youtube.com/@ashwinazer',
    description: 'An emotionally charged tribute channeling the energy and vulnerability of Juice WRLD, addressing youthful angst and musical immortality.',
    bpm: 130,
    key: 'F Minor',
    duration: '03:04',
    vibe: 'Emo Trap // Lucid Introspection',
    lyricsSnippet: 'Living fast, chasing dreams before the 27 club calls.'
  },
  {
    id: 'billboard-la-peru',
    title: 'Billboard la peru',
    releaseYear: '2026',
    type: 'SINGLE',
    catalogNumber: 'CAT# AZR-006-BLP',
    coverImage: '/images/hero-bg.webp',
    spotifyUri: 'spotify:track:4pQJTcSIwO3a3anLmGcHGB',
    spotifyUrl: 'https://open.spotify.com/track/4pQJTcSIwO3a3anLmGcHGB',
    appleMusicUrl: 'https://music.apple.com/artist/1497428225',
    youtubeUrl: 'https://www.youtube.com/@ashwinazer',
    description: 'High-octane melodic hip-hop anthem featuring Suriyan, celebrating the relentless grind from DIY underground bedroom recording to national recognition.',
    bpm: 136,
    key: 'D Minor',
    duration: '02:46',
    vibe: 'Melodic Hip-Hop // High Voltage Anthemic',
    lyricsSnippet: 'Billboard la peru... writing the future with every verse.'
  },
  {
    id: 'the-azer',
    title: 'THE AZER',
    releaseYear: '2026',
    type: 'ALBUM',
    catalogNumber: 'CAT# AZR-LP-001',
    coverImage: '/images/hero-portrait.png',
    spotifyUri: 'spotify:album:0MwdLbvV0Nvc2TNNo6y7ld',
    spotifyUrl: 'https://open.spotify.com/album/0MwdLbvV0Nvc2TNNo6y7ld',
    appleMusicUrl: 'https://music.apple.com/artist/1497428225',
    youtubeUrl: 'https://www.youtube.com/@ashwinazer',
    description: 'The landmark 10-track magnum opus featuring "Onnula di", "Kadhal Raagam", "CRYSTALS", "Heatwaves", and "SLOW MOTION".',
    bpm: 120,
    key: 'C Minor',
    duration: '31:40',
    vibe: 'Magnum Opus // Contemporary R&B / Hip-Hop'
  },
  {
    id: 'destiny',
    title: 'DESTINY',
    releaseYear: '2025',
    type: 'ALBUM',
    catalogNumber: 'CAT# AZR-LP-000',
    coverImage: '/images/lucid-moments.webp',
    spotifyUri: 'spotify:album:4eipwaoJfbKEuwdZdaORQT',
    spotifyUrl: 'https://open.spotify.com/album/4eipwaoJfbKEuwdZdaORQT',
    appleMusicUrl: 'https://music.apple.com/artist/1497428225',
    youtubeUrl: 'https://www.youtube.com/@ashwinazer',
    description: 'The critically acclaimed 11-track foundational record featuring "HUDAA HOLA", "Flix N\' Pills", "DAISIES", and "808s and Heartbeats".',
    bpm: 124,
    key: 'G Minor',
    duration: '34:12',
    vibe: 'Underground Blueprint // Lo-Fi Voltage & 808s'
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
