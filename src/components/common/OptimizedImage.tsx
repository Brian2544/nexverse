import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  loading?: 'eager' | 'lazy';
  fallbackColor?: string;
  onError?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  sizes?: string;
  quality?: number;
}

// Utility to check WebP support
function checkWebPSupport(): Promise<boolean> {
  if (typeof window === 'undefined') return Promise.resolve(false);
  return new Promise((resolve) => {
    const img = new window.Image();
    img.onload = () => resolve(img.width === 1);
    img.onerror = () => resolve(false);
    img.src =
      'data:image/webp;base64,UklGRiIAAABXRUJQVlA4TAYAAAAvAAAAAAfQ//73v/+BiOh/AAA=';
  });
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  style = {},
  loading = 'eager',
  fallbackColor = '#0a0f2c',
  onError,
  sizes = '100vw',
  quality = 80,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [imageSrc, setImageSrc] = useState(src);
  const [triedWebP, setTriedWebP] = useState(false);

  // Try to load .webp first if supported
  useEffect(() => {
    let isMounted = true;
    setIsLoaded(false);
    setError(false);
    setTriedWebP(false);
    checkWebPSupport().then((webpSupported) => {
      if (!isMounted) return;
      if (webpSupported && src.match(/\.(jpg|jpeg|png)$/i)) {
        const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
        setImageSrc(webpSrc);
        setTriedWebP(true);
      } else {
        setImageSrc(src);
        setTriedWebP(false);
      }
    });
    return () => { isMounted = false; };
  }, [src]);

  // Handle image loading and errors
  useEffect(() => {
    if (!imageSrc) return;
    const img = new window.Image();
    img.src = imageSrc;
    img.onload = () => setIsLoaded(true);
    img.onerror = () => {
      if (triedWebP) {
        setImageSrc(src); // fallback to original
        setTriedWebP(false);
      } else {
        setError(true);
      }
    };
  }, [imageSrc, src, triedWebP]);

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setError(true);
    onError?.(e);
  };

  return (
    <div 
      className={`relative ${className}`}
      style={{ 
        backgroundColor: fallbackColor,
        ...style,
        contain: 'layout paint',
        backfaceVisibility: 'hidden',
        transform: 'translateZ(0)',
        willChange: 'transform'
      }}
    >
      {/* Blur placeholder */}
      {!isLoaded && !error && (
        <div 
          className="absolute inset-0 w-full h-full animate-pulse"
          style={{ backgroundColor: fallbackColor }}
        />
      )}
      {/* Error state */}
      {error && (
        <div 
          className="absolute inset-0 w-full h-full flex items-center justify-center bg-gray-100"
          style={{ backgroundColor: fallbackColor }}
        >
          <span className="text-gray-400 text-sm">{alt}</span>
        </div>
      )}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src={imageSrc}
          alt={alt}
          loading={loading}
          sizes={sizes}
          className="w-full h-full object-cover"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'translateZ(0)',
            willChange: 'transform',
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out'
          }}
          onError={handleError}
        />
      </motion.div>
    </div>
  );
};

export default OptimizedImage; 