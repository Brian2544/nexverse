import React, { useState, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  quality?: number;
  loading?: 'lazy' | 'eager';
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  loading = 'lazy',
  placeholder,
  blurDataURL,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(placeholder === 'blur' && blurDataURL ? blurDataURL : src);

  useEffect(() => {
    if (placeholder === 'blur' && blurDataURL) {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setCurrentSrc(src);
        setIsLoaded(true);
      };
    }
  }, [src, placeholder, blurDataURL]);

  return (
    <div className="relative w-full h-full">
      <img
        src={currentSrc}
        alt={alt}
        className={`${className} transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        loading={loading}
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        decoding="async"
        fetchPriority={loading === 'eager' ? 'high' : 'auto'}
        onLoad={() => setIsLoaded(true)}
      />
      {placeholder === 'blur' && blurDataURL && !isLoaded && (
        <img
          src={blurDataURL}
          alt={`${alt} placeholder`}
          className={`${className} absolute inset-0 filter blur-xl scale-110`}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      )}
    </div>
  );
};

export default OptimizedImage; 