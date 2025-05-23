import React from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  quality?: number;
  loading?: 'lazy' | 'eager';
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  loading = 'lazy',
}) => (
  <img
    src={src}
    alt={alt}
    className={className}
    loading={loading}
    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
    decoding="async"
    fetchPriority={loading === 'eager' ? 'high' : 'auto'}
  />
);

export default OptimizedImage; 