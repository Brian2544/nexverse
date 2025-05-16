import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  loading?: 'eager' | 'lazy';
  fallbackColor?: string;
  onError?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  style = {},
  loading = 'eager',
  fallbackColor = '#0a0f2c',
  onError,
}) => {
  // Preload the image
  useEffect(() => {
    const img = new Image();
    img.src = src;
  }, [src]);

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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src={src}
          alt={alt}
          loading={loading}
          className="w-full h-full object-cover"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'translateZ(0)',
            willChange: 'transform'
          }}
          onError={onError}
        />
      </motion.div>
    </div>
  );
};

export default OptimizedImage; 