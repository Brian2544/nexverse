import React, { useState } from 'react';
import OptimizedImage from './OptimizedImage';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  quality?: number;
  loading?: 'lazy' | 'eager';
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({ src, alt, ...props }) => {
  const [imgSrc, setImgSrc] = useState(src);
  return (
    <OptimizedImage
      src={imgSrc}
      alt={alt}
      {...props}
      // @ts-ignore
      onError={() => setImgSrc('/images/placeholder.jpg')}
    />
  );
};

export default ImageWithFallback; 