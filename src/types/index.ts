export interface Track {
  id: string;
  title: string;
  releaseYear: string;
  type: 'ALBUM' | 'EP' | 'SINGLE' | 'UPCOMING';
  catalogNumber: string;
  coverImage: string;
  description: string;
  spotifyUrl: string;
  appleMusicUrl: string;
  youtubeUrl: string;
  bpm: number;
  key: string;
  duration: string;
  vibe: string;
  lyricsSnippet?: string;
  synthRiffNote?: string;
}

export interface ArchiveItem {
  id: string;
  title: string;
  type: 'MUSIC VIDEO' | 'COVER ART' | 'STUDIO ARCHIVE' | 'PRESS CLIP';
  year: string;
  image: string;
  caption: string;
  aspect: 'square' | 'portrait' | 'landscape';
  videoUrl?: string;
  tag: string;
}

export interface AudioMetrics {
  bass: number;
  mids: number;
  highs: number;
  energy: number;
  isPlaying: boolean;
  isMuted: boolean;
  currentTrackId?: string;
}
