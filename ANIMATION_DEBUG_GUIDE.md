# Animation System Debug & Verification Guide

## Quick Diagnosis

### 1. Browser Console Check
Open browser DevTools (F12) and check:

```javascript
// Check if motion-ready class is added
console.log(document.body.classList.contains('motion-ready'));
// Should output: true

// Check if page-wrapper exists
console.log(document.querySelector('.page-wrapper'));
// Should output: <div class="page-wrapper is-visible">

// Check if animated elements exist
console.log(document.querySelectorAll('.reveal-up').length);
// Should output: number > 0

// Check if elements have is-visible class
console.log(document.querySelector('.reveal-up').classList.contains('is-visible'));
// Should output: true
```

### 2. CSS Verification
Check if CSS file is loaded:
```javascript
// In console
var link = document.querySelector('link[href*="page-transitions.css"]');
console.log(link ? 'CSS loaded' : 'CSS NOT loaded');
```

### 3. Animation Trigger Check
```javascript
// Check if animations are computing
var el = document.querySelector('.reveal-up.is-visible');
var computed = window.getComputedStyle(el);
console.log('Animation:', computed.animation);
console.log('Opacity:', computed.opacity);
console.log('Transform:', computed.transform);
```

---

## Root Causes & Fixes

### Problem 1: motion-ready Class Not Added
**Symptom**: Elements have animation classes but no animations play

**Check**:
```javascript
document.body.classList.contains('motion-ready') // Should be true
```

**Fix**: Ensure `footer-scripts.php` runs this code:
```javascript
document.body.classList.add('motion-ready');
```

**Verification**: After page load, run in console:
```javascript
document.body.classList.contains('motion-ready')
```

---

### Problem 2: IntersectionObserver Not Triggering
**Symptom**: Elements below fold don't animate when scrolled into view

**Check**:
```javascript
// Manually trigger observer
window.triggerScrollAnimations();

// Wait 1s, then check
setTimeout(() => {
  console.log(document.querySelectorAll('.reveal-up.is-visible').length);
}, 1000);
```

**Fix**: Ensure `triggerScrollAnimations()` is called in `footer-scripts.php`

---

### Problem 3: CSS Not Gating Animations Properly
**Symptom**: Elements visible but animations don't play

**Check**: Open DevTools → Elements tab → Find `.reveal-up` element
- Should have `opacity: 1` by default (no motion-ready)
- Should have `opacity: 0` when `body.motion-ready` is present
- Should animate to `opacity: 1` when `.is-visible` is added

**Fix**: Verify CSS has these selectors:
```css
/* Default - visible */
.reveal-up {
    opacity: 1;
    transform: translateY(0);
}

/* Hidden when motion-ready */
body.motion-ready .reveal-up {
    opacity: 0;
    transform: translateY(28px);
}

/* Animate when visible */
body.motion-ready .reveal-up.is-visible {
    animation: revealUp 0.65s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}
```

---

### Problem 4: Script Loading Order
**Symptom**: Animations work on some pages but not others

**Check**: Verify `footer-scripts.php` is included at end of every page:
```php
<?php include __DIR__ . '/../components/partials/footer-scripts.php'; ?>
```

**Fix**: Add to end of every page file (before closing `</html>`)

---

### Problem 5: Cache Issues
**Symptom**: Changes don't take effect after deployment

**Fix**: Add cache busting to CSS/JS links:
```php
<!-- In head-meta.php -->
<link rel="stylesheet" href="<?php echo APP_URL; ?>/public/assets/css/page-transitions.css?v=<?php echo time(); ?>">

<!-- In footer-scripts.php -->
<script defer src="<?php echo APP_URL; ?>/public/assets/js/script.js?v=<?php echo time(); ?>"></script>
```

Or use static version numbers:
```php
<link rel="stylesheet" href="<?php echo APP_URL; ?>/public/assets/css/page-transitions.css?v=2.0">
<script defer src="<?php echo APP_URL; ?>/public/assets/js/script.js?v=2.0"></script>
```

---

## Verification Checklist

### Pre-Deployment
- [ ] `footer-scripts.php` includes motion-ready initialization
- [ ] `page-transitions.css` is linked in `head-meta.php`
- [ ] All page files include `footer-scripts.php` at end
- [ ] Animation classes exist on elements (reveal-up, reveal-left, etc.)
- [ ] CSS has `body.motion-ready` selectors
- [ ] No console errors in DevTools

### Deployment
- [ ] Upload updated `footer-scripts.php`
- [ ] Upload updated `page-transitions.css` (if changed)
- [ ] Clear browser cache (Ctrl+Shift+Delete)
- [ ] Clear server cache if applicable
- [ ] Verify file permissions (644 for files)

### Live Testing
- [ ] Open each page: Home, About, Services, Projects, Gallery, Team, Contact
- [ ] Check console for errors (F12)
- [ ] Verify `motion-ready` class on body:
  ```javascript
  document.body.classList.contains('motion-ready')
  ```
- [ ] Verify page wrapper has `is-visible` class:
  ```javascript
  document.querySelector('.page-wrapper').classList.contains('is-visible')
  ```
- [ ] Scroll down and verify elements animate in
- [ ] Test on mobile (animations should be smoother)
- [ ] Test in different browsers (Chrome, Firefox, Safari, Edge)

### Accessibility
- [ ] Test with `prefers-reduced-motion: reduce` enabled
- [ ] Animations should be disabled
- [ ] Content should still be fully visible

### Performance
- [ ] Page load time < 3s
- [ ] No layout shifts during animations
- [ ] Smooth 60fps animations (check DevTools Performance tab)

---

## Emergency Fallback

If animations still don't work, force reveal all content:

**In `footer-scripts.php`, replace animation code with:**
```javascript
<script>
document.addEventListener('DOMContentLoaded', function() {
    // Force reveal all animated elements immediately
    document.querySelectorAll('.reveal-up, .reveal-down, .reveal-left, .reveal-right, .reveal-scale, .fade-in, .stagger-item, .gallery-item, .form-group').forEach(function(el) {
        el.classList.add('is-visible');
    });
    
    var wrapper = document.querySelector('.page-wrapper');
    if (wrapper) wrapper.classList.add('is-visible');
});
</script>
```

This ensures content is visible even if animations fail.

---

## Testing Commands

### Test in Console
```javascript
// 1. Check motion-ready
console.log('motion-ready:', document.body.classList.contains('motion-ready'));

// 2. Check page wrapper
console.log('page-wrapper:', document.querySelector('.page-wrapper'));

// 3. Count animated elements
console.log('animated elements:', document.querySelectorAll('[class*="reveal-"]').length);

// 4. Check visible elements
console.log('visible elements:', document.querySelectorAll('[class*="reveal-"].is-visible').length);

// 5. Manually trigger animations
window.triggerScrollAnimations();

// 6. Check for errors
console.log('errors:', console.getEventListeners ? 'check console' : 'no errors');
```

### Test Animation Playback
```javascript
// Get first animated element
var el = document.querySelector('.reveal-up');
var style = window.getComputedStyle(el);

console.log('Element:', el);
console.log('Opacity:', style.opacity);
console.log('Transform:', style.transform);
console.log('Animation:', style.animation);
console.log('Has is-visible:', el.classList.contains('is-visible'));
```

---

## Common Issues & Solutions

| Issue | Cause | Solution |
|-------|-------|----------|
| No animations on page load | motion-ready not added | Check footer-scripts.php runs on DOMContentLoaded |
| Animations work on scroll but not on load | IntersectionObserver not triggered for visible elements | Call triggerScrollAnimations() immediately |
| Animations work locally but not live | Cache not cleared | Add cache busting (?v=2.0) to CSS/JS links |
| Content hidden on page load | CSS hiding elements before motion-ready | Ensure default state is opacity: 1 |
| Animations stutter | Too many animations at once | Reduce stagger delays or animation count |
| Mobile animations slow | Reduced motion preference | Check prefers-reduced-motion media query |

---

## Files to Check

1. **`/app/views/components/partials/footer-scripts.php`**
   - Must add `motion-ready` class to body
   - Must call `triggerScrollAnimations()`
   - Must include fallback timeout

2. **`/app/views/components/partials/head-meta.php`**
   - Must link `page-transitions.css`
   - Must NOT have inline styles hiding content

3. **`/public/assets/css/page-transitions.css`**
   - Must have `body.motion-ready` selectors
   - Must have default visible state
   - Must have animation keyframes

4. **`/app/views/pages/*.php`** (all 7 pages)
   - Must include animation classes (reveal-up, reveal-left, etc.)
   - Must include footer-scripts.php at end

5. **`/public/assets/js/script.js`**
   - Must not interfere with animations
   - Must have error handling

---

## Next Steps

1. Deploy updated `footer-scripts.php`
2. Clear browser cache
3. Test on live site using console commands above
4. If still not working, check server logs for errors
5. Verify all files uploaded correctly
6. Test in different browsers
