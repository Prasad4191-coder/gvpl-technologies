# Video Optimization Guide for GVPL Technologies

## Current Video Issues
- Large file size causing slow loading
- Video takes time to start playing
- Poor performance on mobile devices

## Recommended Video Compression

### Using FFmpeg (Recommended)
```bash
# Install FFmpeg first: https://ffmpeg.org/download.html

# Compress video for web (reduces file size by 70-80%)
ffmpeg -i hero.mp4 -c:v libx264 -crf 28 -preset fast -c:a aac -b:a 128k -movflags +faststart hero_optimized.mp4

# For even smaller size (reduces quality slightly)
ffmpeg -i hero.mp4 -c:v libx264 -crf 32 -preset fast -c:a aac -b:a 96k -movflags +faststart hero_compressed.mp4

# Create multiple resolutions for responsive loading
ffmpeg -i hero.mp4 -vf scale=1920:1080 -c:v libx264 -crf 28 -preset fast -c:a aac -b:a 128k -movflags +faststart hero_1080p.mp4
ffmpeg -i hero.mp4 -vf scale=1280:720 -c:v libx264 -crf 28 -preset fast -c:a aac -b:a 128k -movflags +faststart hero_720p.mp4
ffmpeg -i hero.mp4 -vf scale=854:480 -c:v libx264 -crf 28 -preset fast -c:a aac -b:a 96k -movflags +faststart hero_480p.mp4
```

### Using Online Tools
1. **HandBrake** (Free): https://handbrake.fr/
   - Preset: Web - Gmail Large 3 Minutes 720p30
   - Video: H.264, CRF 28
   - Audio: AAC, 128kbps

2. **CloudConvert** (Online): https://cloudconvert.com/
   - Format: MP4
   - Video Codec: H.264
   - Quality: 70-80%

3. **Compressor.io** (Online): https://compressor.io/
   - Upload video
   - Choose compression level (70-80%)

## Target Specifications
- **File Size**: Under 5MB for 10-15 second video
- **Resolution**: 1920x1080 (1080p) or 1280x720 (720p)
- **Frame Rate**: 30fps or 24fps
- **Bitrate**: 1-2 Mbps for video, 128kbps for audio
- **Format**: MP4 with H.264 codec
- **Duration**: Keep under 15 seconds for hero videos

## Implementation Steps

1. **Compress your video** using one of the methods above
2. **Replace the current video** in `src/assets/video/hero.mp4`
3. **Test the loading speed** on different devices
4. **Consider creating multiple resolutions** for responsive loading

## Additional Optimizations Implemented

### 1. Lazy Loading
- Video only loads when in viewport
- Fallback background while loading
- Smooth transitions

### 2. Caching Strategy
- Service Worker for offline caching
- Browser cache headers
- Preloading critical resources

### 3. Performance Monitoring
- Bundle splitting for faster initial load
- Code minification
- Image optimization

### 4. Mobile Optimization
- Reduced quality on slow connections
- Touch-friendly interactions
- Responsive video sizing

## Testing Performance

1. **Chrome DevTools**:
   - Open Network tab
   - Check video loading time
   - Monitor bundle sizes

2. **Lighthouse**:
   - Run performance audit
   - Check Core Web Vitals
   - Optimize based on recommendations

3. **GTmetrix**:
   - Test loading speed
   - Check file sizes
   - Monitor performance scores

## Expected Results
- **50-70% reduction** in video file size
- **Faster initial page load** (2-3 seconds improvement)
- **Better mobile performance**
- **Improved Core Web Vitals scores**
- **Better user experience** with smooth loading
