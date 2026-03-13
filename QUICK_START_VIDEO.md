# Quick Start: Adding Hero Background Video

## Step 1: Get Your Video Ready

### Video Requirements
- **Format**: MP4 (H.264)
- **Size**: 2-10 MB
- **Resolution**: 1920x1080 or 1280x720
- **Duration**: 10-30 seconds
- **Content**: Solar panels, installation, solar farm

### Compress Your Video (if needed)

**Using HandBrake** (Free, GUI):
1. Download from https://handbrake.fr/
2. Open your video
3. Select "Fast 1080p30" preset
4. Set quality to 28
5. Click "Start Encode"

**Using FFmpeg** (Command line):
```bash
ffmpeg -i your-video.mp4 -c:v libx264 -crf 28 -preset slow -vf scale=1920:1080 -an solar-background.mp4
```

## Step 2: Upload Video File

Place your video file here:
```
public/videos/solar-background.mp4
```

### File Structure
```
BE../
└── public/
    └── videos/
        └── solar-background.mp4  ← Place your video here
```

## Step 3: Test

1. Clear browser cache (Ctrl+Shift+Delete)
2. Visit your homepage
3. Video should:
   - ✅ Load smoothly without flicker
   - ✅ Play automatically
   - ✅ Loop seamlessly
   - ✅ Keep text readable
   - ✅ Work on mobile

## That's It!

The implementation is already complete. Just add your video file and it will work automatically.

## Troubleshooting

**Video not showing?**
- Check file path: `public/videos/solar-background.mp4`
- Check file permissions: Should be readable (644)
- Check browser console for errors

**Video too large?**
- Compress using HandBrake or FFmpeg
- Target 2-5 MB file size
- Reduce resolution to 1280x720 if needed

**Text hard to read?**
- Use darker video footage
- Or increase overlay opacity in CSS

## Need Help?

See full documentation in:
- `HERO_VIDEO_IMPLEMENTATION.md` - Complete technical details
- `public/videos/README.md` - Video specifications
