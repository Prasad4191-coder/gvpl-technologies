import { useState, useEffect } from 'react';

interface VideoFallbackProps {
  videoSrc: string;
  fallbackImages: string[];
  className?: string;
  onVideoLoad?: () => void;
  onVideoError?: () => void;
}

const VideoFallback = ({ 
  videoSrc, 
  fallbackImages, 
  className = '',
  onVideoLoad,
  onVideoError 
}: VideoFallbackProps) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Try to load video with timeout
    const video = document.createElement('video');
    video.preload = 'metadata';
    video.src = videoSrc;
    
    const timeout = setTimeout(() => {
      setVideoError(true);
      onVideoError?.();
    }, 8000); // 8 second timeout
    
    video.addEventListener('loadedmetadata', () => {
      clearTimeout(timeout);
      setVideoLoaded(true);
      onVideoLoad?.();
    });
    
    video.addEventListener('error', () => {
      clearTimeout(timeout);
      setVideoError(true);
      onVideoError?.();
    });

    return () => {
      clearTimeout(timeout);
      video.removeEventListener('loadedmetadata', () => {});
      video.removeEventListener('error', () => {});
    };
  }, [videoSrc, onVideoLoad, onVideoError]);

  // Auto-slide for fallback images
  useEffect(() => {
    if (videoError && fallbackImages.length > 1) {
      const timer = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % fallbackImages.length);
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [videoError, fallbackImages.length]);

  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* Video */}
      {!videoError && (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            videoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoadedData={() => setVideoLoaded(true)}
          onError={() => setVideoError(true)}
          onCanPlay={() => setVideoLoaded(true)}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      
      {/* Fallback images */}
      {videoError && (
        <div className="relative w-full h-full">
          {fallbackImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                currentImageIndex === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image}
                alt={`Background ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      )}
      
      {/* Loading state */}
      {(!videoLoaded && !videoError) && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center">
          <div className="text-white text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
            <p>Loading...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoFallback;
