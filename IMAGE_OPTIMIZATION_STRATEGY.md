# Image Optimization & Placement Strategy

## Image Placement Plan

### 1. Hero Section (Home Page)
- **Location**: Right side of hero content
- **Type**: Solar farm/power plant image
- **Size**: 500x400px
- **Format**: WebP with JPG fallback
- **Optimization**: Lazy load, responsive srcset

### 2. About Section
- **Location**: Left side of about content
- **Type**: Team/company office image
- **Size**: 400x500px
- **Format**: WebP with JPG fallback
- **Optimization**: Lazy load

### 3. Services Section
- **Location**: Service card backgrounds
- **Type**: Service-specific images (solar panels, electrical work, etc.)
- **Size**: 300x200px each
- **Format**: WebP with JPG fallback
- **Optimization**: Lazy load, low quality placeholder

### 4. Projects Page
- **Location**: Project card backgrounds
- **Type**: Completed project photos
- **Size**: 350x250px each
- **Format**: WebP with JPG fallback
- **Optimization**: Lazy load, progressive loading

### 5. Team Section
- **Location**: Team member avatars
- **Type**: Professional headshots
- **Size**: 150x150px each
- **Format**: WebP with JPG fallback
- **Optimization**: Lazy load

## Free Premium Image Sources

### Recommended Services (Free Tier):
1. **Unsplash** - High-quality, free images
   - Solar energy: https://unsplash.com/s/photos/solar-energy
   - Construction: https://unsplash.com/s/photos/construction
   - Team: https://unsplash.com/s/photos/team

2. **Pexels** - Free stock photos
   - Solar panels: https://www.pexels.com/search/solar/
   - Infrastructure: https://www.pexels.com/search/infrastructure/

3. **Pixabay** - Free images and videos
   - Power plants: https://pixabay.com/search/power%20plant/
   - Electrical: https://pixabay.com/search/electrical/

4. **Freepik** - Free with attribution
   - Solar EPC: https://www.freepik.com/search?query=solar+epc

## Image Optimization Techniques

### 1. Format Optimization
- Use WebP format (30% smaller than JPG)
- Provide JPG fallback for older browsers
- Use PNG only for graphics with transparency

### 2. Size Optimization
- Compress images using TinyPNG/TinyJPG
- Use appropriate dimensions (no oversizing)
- Create responsive srcset for different screen sizes

### 3. Loading Strategy
- Lazy load images below the fold
- Use low-quality placeholder (LQIP)
- Implement progressive image loading

### 4. Responsive Images
```html
<picture>
  <source srcset="image.webp" type="image/webp">
  <source srcset="image.jpg" type="image/jpeg">
  <img src="image.jpg" alt="Description" loading="lazy">
</picture>
```

## Performance Targets

- Image file size: < 100KB per image
- Total images size: < 500KB
- Load time impact: < 200ms
- LCP (Largest Contentful Paint): < 2.5s

## Implementation Steps

1. Download images from free sources
2. Compress using TinyPNG (https://tinypng.com)
3. Convert to WebP format
4. Create responsive srcset
5. Implement lazy loading
6. Add alt text for accessibility
7. Test performance with Lighthouse

## Recommended Image Dimensions

| Page Section | Dimensions | Format | Size |
|---|---|---|---|
| Hero Image | 600x500px | WebP | 80KB |
| About Image | 500x600px | WebP | 75KB |
| Service Cards | 300x200px | WebP | 40KB each |
| Project Cards | 350x250px | WebP | 45KB each |
| Team Avatars | 150x150px | WebP | 20KB each |

## CDN Recommendation

For production, use image CDN:
- **Cloudinary** - Free tier available
- **ImageKit** - Free tier with optimization
- **Imgix** - Free tier with transformations

These services automatically optimize and serve images in best format.

## Accessibility

- Add descriptive alt text to all images
- Use title attributes for additional context
- Ensure sufficient color contrast
- Test with screen readers

## Monitoring

- Use Google PageSpeed Insights
- Monitor Core Web Vitals
- Track image load times
- Use Lighthouse for performance audits
