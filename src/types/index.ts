export interface Track {
  id: string;
  title: string;
  releaseYear: string;
  type: 'ALBUM' | 'EP' | 'SINGLE' | 'UPCOMING';
  catalogNumber: string;
  coverImage: string;
  description: string;
  spotifyUri: string;
  spotifyUrl: string;
  appleMusicUrl: string;
  youtubeUrl: string;
  bpm: number;
  key: string;
  duration: string;
  vibe: string;
  lyricsSnippet?: string;
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

export interface SpotifyOEmbedResponse {
  html: string;
  width: number;
  height: number;
  version: string;
  provider_name: string;
  provider_url: string;
  type: string;
  title: string;
  thumbnail_url?: string;
  thumbnail_width?: number;
  thumbnail_height?: number;
  iframe_url?: string;
}

export interface SpotifyEmbedController {
  loadUri: (uri: string) => void;
  play: () => void;
  pause: () => void;
  resume: () => void;
  togglePlay: () => void;
  seek: (seconds: number) => void;
  destroy: () => void;
  addListener: (event: string, callback: (data: unknown) => void) => void;
}

export interface SpotifyIFrameAPI {
  createController: (
    element: HTMLElement,
    options: {
      uri?: string;
      url?: string;
      width?: string | number;
      height?: string | number;
    },
    callback: (controller: SpotifyEmbedController) => void
  ) => void;
}

declare global {
  interface Window {
    onSpotifyIframeApiReady?: (IFrameAPI: SpotifyIFrameAPI) => void;
    SpotifyIFrameAPI?: SpotifyIFrameAPI;
  }
}
