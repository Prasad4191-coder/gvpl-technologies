# Video Optimization Guide for GVPL Technologies

## Current Video Issues
- Large file size causing slow loading
- Video takes time to start playing
- Poor performance on slow connections

## Recommended Video Compression Settings

### Using FFmpeg (Recommended)

#### For MP4 Format (Best Compatibility)
```bash
ffmpeg -i input_video.mp4 -c:v libx264 -preset slow -crf 23 -c:a aac -b:a 128k -movflags +faststart -profile:v high -level 4.0 -pix_fmt yuv420p -vf "scale=1920:1080" output_optimized.mp4
```

#### For WebM Format (Better Compression)
```bash
ffmpeg -i input_video.mp4 -c:v libvpx-vp9 -crf 30 -b:v 0 -c:a libopus -b:a 128k -vf "scale=1920:1080" output_optimized.webm
```

### Target Specifications
- **Resolution**: 1920x1080 (Full HD)
- **Frame Rate**: 30fps (or 24fps for cinematic look)
- **Video Bitrate**: 2Mbps maximum
- **Audio Bitrate**: 128kbps
- **File Size**: Under 10MB
- **Duration**: Under 30 seconds for hero videos

### Online Tools (Alternative)
1. **HandBrake** (Free, GUI-based)
   - Preset: Web - Gmail Large 3 Minutes 720p30
   - Adjust quality to achieve target file size

2. **CloudConvert** (Online)
   - Format: MP4
   - Video Codec: H.264
   - Quality: 70-80%

3. **Adobe Media Encoder**
   - Preset: H.264 - Match Source - High Bitrate
   - Target Bitrate: 2 Mbps

## Performance Optimizations Implemented

### 1. Video Loading Optimizations
- ✅ Preload metadata only (`preload="metadata"`)
- ✅ Loading states with spinner
- ✅ Fallback image support
- ✅ Error handling

### 2. Caching Strategy
- ✅ Service Worker implementation
- ✅ Critical resource preloading
- ✅ Browser cache optimization

### 3. Performance Monitoring
- ✅ Connection speed detection
- ✅ Reduced motion preference support
- ✅ Lazy loading capabilities

## Implementation Steps

1. **Compress your video** using the FFmpeg command above
2. **Replace** `src/assets/video/hero.mp4` with the optimized version
3. **Test** the loading performance
4. **Monitor** using browser dev tools

## Expected Results
- 50-70% reduction in file size
- Faster initial page load
- Smoother video playback
- Better mobile performance
- Improved SEO scores

## Additional Recommendations

### For Multiple Video Formats
Consider providing both MP4 and WebM formats for maximum compatibility:

```jsx
<video>
  <source src="hero.webm" type="video/webm" />
  <source src="hero.mp4" type="video/mp4" />
</video>
```

### For Progressive Enhancement
- Start with a static image
- Load video on user interaction
- Provide play/pause controls
- Respect user's data preferences

## Monitoring Performance
Use these tools to monitor improvements:
- Google PageSpeed Insights
- GTmetrix
- WebPageTest
- Chrome DevTools Performance tab
