# Home Page Mission Animations - Quick Reference

## Animation Summary

| Element | Animation | Duration | Delay | Effect |
|---------|-----------|----------|-------|--------|
| Left Image | Fade + Left | 0.9s | 0.2s | Slide left 30px |
| Right Card | Fade + Right | 0.9s | 0.2s | Slide right 30px |
| Title | Fade + Up | 0.7s | 0.4s | Slide up 20px |
| Text | Fade + Up | 0.7s | 0.5s | Slide up 20px |
| Bullet 1 | Fade + Up | 0.7s | 0.6s | Slide up 24px |
| Bullet 2 | Fade + Up | 0.7s | 0.7s | Slide up 24px |
| Bullet 3 | Fade + Up | 0.7s | 0.8s | Slide up 24px |
| Bullet 4 | Fade + Up | 0.7s | 0.9s | Slide up 24px |

---

## HTML Classes Added

```html
<!-- Section -->
home-mission-section

<!-- Left image -->
home-mission-image-wrap
home-mission-image

<!-- Right card -->
home-mission-card-wrap
home-mission-card
home-mission-title
home-mission-text

<!-- Bullets -->
home-mission-bullets
home-mission-bullet
```

---

## CSS Keyframes Used

```css
@keyframes aboutFadeInUp { /* 0 → 30px up */ }
@keyframes aboutFadeInLeft { /* 0 → 30px left */ }
@keyframes aboutFadeInRight { /* 0 → 30px right */ }
```

---

## Hover Effects

| Element | Hover Effect |
|---------|--------------|
| Image | Scale 1.02 + shadow |
| Card | Lift -2px + shadow |
| Bullets | Lift -2px + shadow + border |

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

1. `/app/views/pages/home.php` - HTML classes added
2. `/public/assets/css/style.css` - CSS animations added

---

## Total Animation Time

~1.6 seconds from start to finish

---

## Browser Support

✓ Chrome/Edge  
✓ Firefox  
✓ Safari  
✓ Mobile browsers  

---

## Consistency

Same animation language as About page:
- Same keyframes
- Same easing
- Same durations
- Same hover effects
- Same accessibility

---

**Status**: ✅ COMPLETE
