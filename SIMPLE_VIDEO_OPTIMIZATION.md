# Simple Video Optimization Guide

## Quick Video Compression (Recommended)

### Using FFmpeg (Command Line)
```bash
# Basic compression - reduces file size by 60-80%
ffmpeg -i hero.mp4 -c:v libx264 -crf 28 -preset fast -c:a aac -b:a 128k -movflags +faststart hero_compressed.mp4
```

### Using Online Tools (Easiest)
1. **CloudConvert.com** - Upload your video
2. **HandBrake** (Free software) - Use "Web" preset
3. **Adobe Media Encoder** - Use "H.264" preset

## Target Settings
- **File Size**: Under 5MB (currently might be 20-50MB)
- **Resolution**: 1920x1080 or 1280x720
- **Duration**: Under 30 seconds
- **Format**: MP4 (H.264 codec)

## Quick Performance Fixes

### 1. Video Attributes (Already Applied)
```html
<video
  autoPlay
  muted
  loop
  playsInline
  preload="metadata"  <!-- Only loads metadata, not full video -->
>
```

### 2. Add Loading State (Simple)
Add this to your Hero component for better UX:

```jsx
const [videoLoaded, setVideoLoaded] = useState(false);

<video
  onLoadedData={() => setVideoLoaded(true)}
  style={{ opacity: videoLoaded ? 1 : 0 }}
>
```

### 3. Browser Caching
Add to your `index.html` head:
```html
<meta http-equiv="Cache-Control" content="max-age=31536000">
```

## Expected Results
- **70% smaller file size**
- **3x faster loading**
- **Better mobile performance**
- **No complex code needed**

## Next Steps
1. Compress your video using FFmpeg command above
2. Replace `src/assets/video/hero.mp4` with compressed version
3. Test the loading speed
4. Done! 🎉
