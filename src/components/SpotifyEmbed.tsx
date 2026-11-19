import React, { useEffect, useRef, useState, useId } from 'react';
import { SpotifyEmbedController, SpotifyIFrameAPI } from '../types';

interface SpotifyEmbedProps {
  uri?: string;
  url?: string;
  height?: number | string;
  width?: number | string;
  className?: string;
  title?: string;
}

export const SpotifyEmbed: React.FC<SpotifyEmbedProps> = ({
  uri = 'spotify:track:4hGOmD42QWQN7xrWaCV52e',
  url,
  height = 152,
  width = '100%',
  className = '',
  title = 'Spotify Player'
}) => {
  const controllerRef = useRef<SpotifyEmbedController | null>(null);
  const [isReady, setIsReady] = useState(false);
  const uniqueId = useId().replace(/:/g, '-');
  const embedTargetId = `embed-iframe-${uniqueId}`;

  const optionsRef = useRef({ uri, url, width, height });
  optionsRef.current = { uri, url, width, height };

  // Helper to construct Spotify embed URL for direct iframe fallback
  const getEmbedUrl = () => {
    if (url) {
      return url.includes('/embed/') ? url : url.replace('open.spotify.com/', 'open.spotify.com/embed/');
    }
    const parts = uri.split(':');
    const type = parts[1] || 'track';
    const id = parts[2] || '4hGOmD42QWQN7xrWaCV52e';
    return `https://open.spotify.com/embed/${type}/${id}?utm_source=generator&theme=0`;
  };

  useEffect(() => {
    let isMounted = true;

    const initController = (IFrameAPI: SpotifyIFrameAPI) => {
      const element = document.getElementById(embedTargetId);
      if (!element || controllerRef.current || !isMounted) return;

      const currentOpts = optionsRef.current;
      const options = {
        uri: currentOpts.uri,
        ...(currentOpts.url ? { url: currentOpts.url } : {}),
        width: typeof currentOpts.width === 'number' ? `${currentOpts.width}px` : currentOpts.width,
        height: typeof currentOpts.height === 'number' ? currentOpts.height : parseInt(String(currentOpts.height), 10) || 152
      };

      const callback = (EmbedController: SpotifyEmbedController) => {
        if (!isMounted) {
          try {
            EmbedController.destroy();
          } catch {
            // ignore
          }
          return;
        }
        controllerRef.current = EmbedController;
        setIsReady(true);
      };

      IFrameAPI.createController(element, options, callback);
    };

    if (window.SpotifyIFrameAPI) {
      initController(window.SpotifyIFrameAPI);
    } else {
      const existingCallback = window.onSpotifyIframeApiReady;
      window.onSpotifyIframeApiReady = (IFrameAPI: SpotifyIFrameAPI) => {
        window.SpotifyIFrameAPI = IFrameAPI;
        if (existingCallback) existingCallback(IFrameAPI);
        initController(IFrameAPI);
      };
    }

    return () => {
      isMounted = false;
      if (controllerRef.current) {
        try {
          controllerRef.current.destroy();
        } catch {
          // ignore destroy errors
        }
        controllerRef.current = null;
      }
    };
  }, [embedTargetId]);

  // When uri changes, update existing Spotify controller dynamically
  useEffect(() => {
    if (controllerRef.current && isReady && uri) {
      controllerRef.current.loadUri(uri);
    }
  }, [uri, isReady]);

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      {/* Target element for Spotify IFrame API createController */}
      <div id={embedTargetId} className="w-full">
        {/* Instant Iframe Fallback while IFrame API controller connects */}
        {!isReady && (
          <iframe
            src={getEmbedUrl()}
            width={width}
            height={height}
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title={title}
            className="w-full border-0 rounded-none shadow-none"
          />
        )}
      </div>
    </div>
  );
};
