import { useState, useEffect, useRef } from 'react';

interface LazyVideoProps {
  src: string;
  className?: string;
  fallbackClassName?: string;
  onLoad?: () => void;
  onError?: () => void;
}

const LazyVideo = ({ 
  src, 
  className = '', 
  fallbackClassName = '',
  onLoad,
  onError 
}: LazyVideoProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  return (
    <div className={`relative ${className}`}>
      <div ref={videoRef} className="w-full h-full">
        {isInView && !hasError && (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoadedData={handleLoad}
            onError={handleError}
          >
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        
        {(!isLoaded || hasError) && (
          <div className={`absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black ${fallbackClassName}`} />
        )}
      </div>
    </div>
  );
};

export default LazyVideo;
