# BE Project - About Us Image Popup Scroll Animation

## Summary
Added a smooth popup-style scroll animation to the About Us section image on the Home page. When users scroll to the About Us section, the image appears with a soft fade and scale effect.

## Changes Made

### 1. **HTML Update** (home.php)
Changed the About Us image wrapper class from `reveal-left` to `reveal-popup`:

**Before:**
```html
<picture class="about-image-wrapper reveal-left">
```

**After:**
```html
<picture class="about-image-wrapper reveal-popup">
```

### 2. **CSS Addition** (style.css)
Added new popup animation styles:

```css
/* Popup Scroll Animation for About Us Image */
.reveal-popup {
    opacity: 0;
    transform: scale(0.92) translateY(20px);
    transition: opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1),
                transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
    will-change: transform, opacity;
    backface-visibility: hidden;
}

.reveal-popup.active {
    opacity: 1;
    transform: scale(1) translateY(0);
}
```

Also updated `prefers-reduced-motion` media query to respect accessibility preferences:
```css
.reveal-popup {
    opacity: 1;
    transform: scale(1) translateY(0);
    transition: none;
}
```

### 3. **JavaScript Addition** (script.js)
Added new `initPopupScrollAnimations()` function:

```javascript
// ============================================================
// POPUP SCROLL ANIMATIONS
// ============================================================
function initPopupScrollAnimations() {
  var popupElements = document.querySelectorAll('.reveal-popup');
  if (!popupElements.length) return;

  var popupObserver = new IntersectionObserver(function (entries) {
    requestAnimationFrame(function () {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        
        // Add active class to trigger animation
        entry.target.classList.add('active');
        
        // Unobserve after animation triggers (one-time only)
        popupObserver.unobserve(entry.target);
      });
    });
  }, {
    threshold: 0.2,
    rootMargin: '0px 0px -40px 0px'
  });

  popupElements.forEach(function (el) {
    popupObserver.observe(el);
  });
}
```

Also added function call in DOMContentLoaded:
```javascript
document.addEventListener('DOMContentLoaded', function () {
  // ... existing code ...
  initPopupScrollAnimations();
});
```

## Animation Specifications

### Initial State (Before Scroll)
- `opacity: 0` - Image is invisible
- `transform: scale(0.92) translateY(20px)` - Slightly smaller and lower

### Active State (On Scroll)
- `opacity: 1` - Image becomes visible
- `transform: scale(1) translateY(0)` - Returns to normal size and position

### Timing
- **Duration:** 0.8s (smooth and premium)
- **Easing:** `cubic-bezier(0.22, 1, 0.36, 1)` (smooth ease-out)
- **Trigger:** When image enters viewport (20% visible)
- **Margin:** 40px below viewport edge for early trigger

## Features

✅ **Smooth Popup Effect**
- Soft fade-in (opacity transition)
- Gentle scale-up (0.92 → 1)
- Subtle upward movement (20px → 0)

✅ **Performance Optimized**
- Uses `will-change` for GPU acceleration
- `backface-visibility: hidden` prevents flickering
- IntersectionObserver for efficient scroll detection
- One-time animation (unobserves after trigger)

✅ **Accessibility**
- Respects `prefers-reduced-motion` preference
- No flashy or jarring effects
- Smooth, professional animation

✅ **Responsive**
- Works on desktop, tablet, and mobile
- No layout shifts
- Image size and alignment unchanged

## Testing Checklist
- [x] Image appears with popup animation on scroll
- [x] Animation triggers only once
- [x] Smooth fade and scale effect
- [x] No layout shifts or spacing changes
- [x] Responsive on all screen sizes
- [x] Accessibility preferences respected
- [x] No performance impact
- [x] Image loads correctly with lazy loading

## Result
The About Us image now has a premium, subtle popup animation that enhances the user experience when scrolling to that section. The effect feels smooth and professional, matching the overall BE animation system.
