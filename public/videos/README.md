# Hero Background Video

## Video File Location

Place your solar-themed background video in this directory with the following names:

- **Primary**: `solar-background.mp4` (H.264 codec, recommended)
- **Fallback**: `solar-background.webm` (VP9 codec, optional)

## Video Specifications

### Recommended Settings

**Format**: MP4 (H.264)
- **Resolution**: 1920x1080 (Full HD) or 1280x720 (HD)
- **Aspect Ratio**: 16:9
- **Frame Rate**: 24-30 fps
- **Bitrate**: 2-5 Mbps (balance quality and file size)
- **Duration**: 10-30 seconds (will loop seamlessly)
- **Audio**: None (video will be muted)

### File Size Optimization

- **Target Size**: 2-5 MB for optimal loading
- **Maximum Size**: 10 MB (larger files may impact performance)
- Use video compression tools to reduce file size without losing quality

### Content Recommendations

The video should feature:
- Solar panels installation
- Solar farm aerial views
- Workers installing solar equipment
- Time-lapse of solar construction
- Sunrise/sunset over solar panels
- Clean, professional footage

### Video Optimization Tools

**Free Tools**:
- HandBrake (https://handbrake.fr/)
- FFmpeg (command line)
- CloudConvert (online)

**FFmpeg Command Example**:
```bash
ffmpeg -i input.mp4 -c:v libx264 -crf 28 -preset slow -vf scale=1920:1080 -an solar-background.mp4
```

**For WebM**:
```bash
ffmpeg -i input.mp4 -c:v libvpx-vp9 -crf 30 -b:v 0 -vf scale=1920:1080 -an solar-background.webm
```

## Implementation Details

### HTML Structure
The video is implemented in `app/views/pages/home.php`:
```html
<div class="be-hero__video-bg">
    <video autoplay muted loop playsinline preload="auto">
        <source src="/public/videos/solar-background.mp4" type="video/mp4">
        <source src="/public/videos/solar-background.webm" type="video/webm">
    </video>
</div>
```

### CSS Styling
Video background styles in `public/assets/css/style.css`:
- Full-screen coverage with `object-fit: cover`
- Smooth fade-in transition
- Dark overlay for text readability
- Fallback gradient background

### JavaScript Enhancement
Video initialization in `public/assets/js/script.js`:
- Smooth loading with fade-in effect
- Error handling with fallback
- Mobile optimization
- Autoplay management

## Browser Compatibility

The video background works on:
- ✅ Chrome/Edge (Chromium) - Full support
- ✅ Firefox - Full support
- ✅ Safari (macOS/iOS) - Full support with `playsinline`
- ✅ Mobile browsers - Optimized with stronger overlay

## Fallback Behavior

If the video fails to load or is not supported:
1. The animated gradient background will display
2. No layout shift or broken elements
3. All text remains readable
4. User experience is not affected

## Performance Considerations

- Video loads asynchronously (doesn't block page render)
- Uses `preload="auto"` for smooth playback
- Optimized for mobile with conditional loading
- GPU-accelerated rendering
- Smooth fade-in prevents flicker

## Testing Checklist

Before deploying:
- [ ] Video file is under 10 MB
- [ ] Video loops seamlessly (no jump at end)
- [ ] Text is readable over video
- [ ] Video loads smoothly without flicker
- [ ] Fallback background works if video fails
- [ ] Mobile devices render properly
- [ ] Page load time is acceptable
- [ ] Video doesn't cause layout shift

## Troubleshooting

**Video not playing?**
- Check file path is correct
- Verify video codec is H.264 (MP4)
- Ensure file permissions are correct
- Check browser console for errors

**Video too large?**
- Compress using HandBrake or FFmpeg
- Reduce resolution to 1280x720
- Lower bitrate to 2-3 Mbps
- Trim video duration to 15-20 seconds

**Text not readable?**
- Increase overlay opacity in CSS
- Use darker video footage
- Add text shadow to hero text

## Current Status

⚠️ **Video file not yet added**

Please add your solar-themed video file to this directory:
- `solar-background.mp4` (required)
- `solar-background.webm` (optional)

The implementation is complete and ready to use once the video file is added.
