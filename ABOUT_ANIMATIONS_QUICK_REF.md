# About Page Animations - Quick Reference

## Animation Summary

| Element | Animation | Duration | Delay | Effect |
|---------|-----------|----------|-------|--------|
| Kicker | Fade + Down | 0.7s | 0s | Slide down 20px |
| Title | Fade + Up | 0.8s | 0.15s | Slide up 30px |
| Subtitle | Fade + Up | 0.8s | 0.3s | Slide up 24px |
| Image | Fade + Left | 0.9s | 0.4s | Slide left 30px |
| Card | Fade + Right | 0.9s | 0.4s | Slide right 30px |
| Box 1 | Fade + Up | 0.7s | 0.55s | Slide up 20px |
| Box 2 | Fade + Up | 0.7s | 0.65s | Slide up 20px |
| Box 3 | Fade + Up | 0.7s | 0.75s | Slide up 20px |
| Text | Fade + Up | 0.7s | 0.85s | Slide up 20px |

---

## HTML Classes Added

```html
<!-- Section head -->
about-section-head
about-kicker
about-title
about-subtitle

<!-- Left image -->
about-image-wrap
about-media-card

<!-- Right card -->
about-snapshot-wrap
company-snapshot-card
snapshot-item
snapshot-text
```

---

## CSS Keyframes

```css
@keyframes aboutFadeInUp { /* 0 → 30px up */ }
@keyframes aboutFadeInDown { /* 0 → 20px down */ }
@keyframes aboutFadeInLeft { /* 0 → 30px left */ }
@keyframes aboutFadeInRight { /* 0 → 30px right */ }
```

---

## Hover Effects

| Element | Hover Effect |
|---------|--------------|
| Image | Scale 1.02 + shadow |
| Card | Lift -2px + shadow |
| Info boxes | Lift -2px + shadow + border |

---

## Easing Curve

```
cubic-bezier(0.25, 0.46, 0.45, 0.94)
```
Smooth, professional, natural motion

---

## Mobile Adjustments

- Animations simplified on mobile
- Horizontal slides become vertical
- Stagger delays reduced
- All animations remain smooth

---

## Accessibility

- Respects `prefers-reduced-motion`
- No animations if user prefers reduced motion
- All content visible immediately
- No flashing or rapid motion

---

## Performance

- Uses transform and opacity (GPU accelerated)
- No layout shifts
- Minimal performance impact
- Optimized for all devices

---

## Files Modified

1. `/app/views/pages/about.php` - HTML classes added
2. `/public/assets/css/style.css` - CSS animations added

---

## Total Animation Time

~1.55 seconds from start to finish

---

## Browser Support

✓ Chrome/Edge  
✓ Firefox  
✓ Safari  
✓ Mobile browsers  

---

**Status**: ✅ COMPLETE
