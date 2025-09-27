// Video optimization utilities

export const getVideoCompressionSettings = () => {
  return {
    // FFmpeg compression settings for optimal web delivery
    ffmpeg: {
      // For MP4 compression
      mp4: [
        '-c:v libx264',           // H.264 codec
        '-preset slow',           // Better compression
        '-crf 23',                // Quality (18-28 range, 23 is good balance)
        '-c:a aac',               // Audio codec
        '-b:a 128k',              // Audio bitrate
        '-movflags +faststart',   // Optimize for web streaming
        '-profile:v high',        // H.264 profile
        '-level 4.0',             // H.264 level
        '-pix_fmt yuv420p'        // Pixel format for compatibility
      ],
      // For WebM compression (alternative format)
      webm: [
        '-c:v libvpx-vp9',        // VP9 codec
        '-crf 30',                // Quality
        '-b:v 0',                 // Variable bitrate
        '-c:a libopus',           // Opus audio codec
        '-b:a 128k'               // Audio bitrate
      ]
    },
    // Recommended video specs for web
    specs: {
      resolution: '1920x1080',    // Full HD
      framerate: 30,              // 30fps (24fps for cinematic look)
      bitrate: '2M',              // 2 Mbps video bitrate
      maxSize: '10MB'             // Target file size
    }
  };
};

export const checkVideoOptimization = (file: File): Promise<{
  isOptimized: boolean;
  recommendations: string[];
}> => {
  return new Promise((resolve) => {
    const video = document.createElement('video');
    video.preload = 'metadata';
    
    video.onloadedmetadata = () => {
      const duration = video.duration;
      const fileSizeMB = file.size / (1024 * 1024);
      const bitrate = (file.size * 8) / (duration * 1000); // kbps
      
      const recommendations: string[] = [];
      let isOptimized = true;
      
      // Check file size
      if (fileSizeMB > 10) {
        recommendations.push('Reduce file size - target under 10MB');
        isOptimized = false;
      }
      
      // Check bitrate
      if (bitrate > 2000) {
        recommendations.push('Reduce bitrate - target under 2Mbps');
        isOptimized = false;
      }
      
      // Check duration
      if (duration > 30) {
        recommendations.push('Consider shortening video - target under 30 seconds');
        isOptimized = false;
      }
      
      resolve({ isOptimized, recommendations });
    };
    
    video.src = URL.createObjectURL(file);
  });
};

// Preload critical resources
export const preloadCriticalResources = () => {
  // Preload image
  const imageLink = document.createElement('link');
  imageLink.rel = 'preload';
  imageLink.href = '/src/assets/logo/gvpl_logo.png';
  imageLink.as = 'image';
  imageLink.type = 'image/png';
  document.head.appendChild(imageLink);

  // For videos, we'll use a different approach since 'video' is not a valid 'as' value
  // We'll create a video element and preload it
  const video = document.createElement('video');
  video.preload = 'metadata';
  video.style.display = 'none';
  video.src = '/src/assets/video/hero.mp4';
  document.body.appendChild(video);

  // Clean up the video element after a short delay
  setTimeout(() => {
    if (document.body.contains(video)) {
      document.body.removeChild(video);
    }
  }, 1000);
};
