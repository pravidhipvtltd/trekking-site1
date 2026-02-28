/**
 * Optimized image with lazy loading, async decoding, and responsive srcset for Unsplash.
 */
function unsplashSrc(src, w, q = 80) {
  if (!src?.includes('images.unsplash.com')) return null;
  const u = new URL(src);
  u.searchParams.set('w', String(w));
  u.searchParams.set('q', String(q));
  return `${u.toString()} ${w}w`;
}

export default function OptimizedImage({
  src,
  alt = '',
  width,
  height,
  className = '',
  loading = 'lazy',
  fetchPriority,
  sizes,
  srcSet, // allow override
  ...props
}) {
  const isAboveFold = fetchPriority === 'high' || loading === 'eager';
  const srcset =
    srcSet ?? (src?.includes('images.unsplash.com')
      ? [unsplashSrc(src, 400, 75), unsplashSrc(src, 800, 80), unsplashSrc(src, 1200, 85)]
          .filter(Boolean)
          .join(', ')
      : undefined);

  return (
    <img
      src={src}
      srcSet={srcset}
      sizes={sizes ?? '(max-width: 640px) 400px, (max-width: 1024px) 800px, 1200px'}
      alt={alt}
      width={width}
      height={height}
      loading={isAboveFold ? 'eager' : loading}
      fetchPriority={fetchPriority}
      decoding="async"
      className={className}
      {...props}
    />
  );
}
