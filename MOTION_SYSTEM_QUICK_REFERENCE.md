# BOSE ENTERPRISES - MOTION SYSTEM QUICK REFERENCE

## Files Changed

| File | Type | Purpose |
|------|------|---------|
| `public/assets/js/flicker-fix.js` | Updated | No-FOUC system + smooth page entrance |
| `public/assets/js/script.js` | Updated | Unified reveal system + stagger support |
| `public/assets/css/motion-system.css` | NEW | Premium hover effects + animations |
| `app/views/components/partials/head-meta.php` | Updated | Include motion-system.css |

---

## Key Features

### 1. Smooth Page Entrance
Every page fades in smoothly (0.6s) with subtle upward movement.
- **No action needed** - automatic on all pages

### 2. Scroll Reveal Animations
Elements with `data-be-animate` reveal smoothly when scrolled into view.

```html
<!-- Fade up (default) -->
<div data-be-animate="fadeInUp">Content</div>

<!-- Fade from left -->
<div data-be-animate="fadeInLeft">Content</div>

<!-- Fade from right -->
<div data-be-animate="fadeInRight">Content</div>

<!-- Fade from top -->
<div data-be-animate="fadeInDown">Content</div>
```

### 3. Stagger Animation for Grids
Cards in a grid cascade reveal with staggered delays.

```html
<!-- 80ms delay between items (default) -->
<div class="row g-4" data-be-stagger="80">
  <div class="col-lg-4" data-be-animate="fadeInUp">Card 1</div>
  <div class="col-lg-4" data-be-animate="fadeInUp">Card 2</div>
  <div class="col-lg-4" data-be-animate="fadeInUp">Card 3</div>
</div>

<!-- 120ms delay between items -->
<div class="row g-4" data-be-stagger="120">
  <!-- Cards auto-stagger -->
</div>
```

### 4. Premium Hover Effects
All cards, buttons, and images have smooth hover effects:
- **Cards**: Lift up 5px with enhanced shadow
- **Icons**: Lift 3px + scale 1.05
- **Images**: Scale 1.03
- **Buttons**: Lift 3px

**No action needed** - automatic on all elements with `.be-card`, `.btn`, `.gallery-item`, etc.

### 5. Smooth Transitions
All animations use premium cubic-bezier easing for a polished feel.

---

## Animation Timing

| Element | Duration | Easing |
|---------|----------|--------|
| Page Entrance | 0.6s | cubic-bezier(0.25, 0.46, 0.45, 0.94) |
| Section Reveals | 0.7s | cubic-bezier(0.25, 0.46, 0.45, 0.94) |
| Hover Effects | 0.25-0.35s | cubic-bezier(0.25, 0.46, 0.45, 0.94) |
| Stagger Delay | 80ms (default) | - |

---

## Common Use Cases

### Adding Reveal Animation to New Section
```html
<section class="be-section">
  <div class="container">
    <div class="row g-4" data-be-stagger="100">
      <div class="col-lg-4" data-be-animate="fadeInUp">
        <div class="be-card">
          <!-- Card content -->
        </div>
      </div>
      <!-- More cards -->
    </div>
  </div>
</section>
```

### Custom Stagger Timing
```html
<!-- Faster stagger (60ms) -->
<div data-be-stagger="60">...</div>

<!-- Slower stagger (150ms) -->
<div data-be-stagger="150">...</div>
```

### Different Reveal Directions
```html
<!-- Content from left -->
<div data-be-animate="fadeInLeft">...</div>

<!-- Content from right -->
<div data-be-animate="fadeInRight">...</div>

<!-- Content from top -->
<div data-be-animate="fadeInDown">...</div>

<!-- Content from bottom (default) -->
<div data-be-animate="fadeInUp">...</div>
```

---

## What's Automatic

These features work **without any code changes**:

✅ Page entrance animation (all pages)
✅ Navbar shadow on scroll
✅ Card hover effects
✅ Button hover effects
✅ Image hover scale
✅ Icon hover lift
✅ Skills bar animation
✅ Service slider smooth scroll
✅ Lazy image smooth loading
✅ Footer visibility
✅ No horizontal scrollbars
✅ Motion preference respect

---

## Performance

- **60fps animations** on all devices
- **GPU accelerated** (transform + opacity only)
- **No layout shift** (transform-based only)
- **Respects prefers-reduced-motion** for accessibility
- **Optimized for mobile** (smooth on low-end devices)

---

## Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

---

## Troubleshooting

### Elements not revealing on scroll?
- Ensure parent has `data-be-stagger` or element has `data-be-animate`
- Check IntersectionObserver threshold (0.08 by default)
- Verify element is in viewport

### Hover effects not working?
- Ensure element has correct class (`.be-card`, `.btn`, `.gallery-item`, etc.)
- Check CSS is loaded (motion-system.css)
- Verify no conflicting CSS

### Animations too fast/slow?
- Adjust stagger delay: `data-be-stagger="120"`
- Modify timing in motion-system.css if needed

### Motion disabled for user?
- System automatically respects `prefers-reduced-motion`
- No animations will play for users with this preference

---

## CSS Custom Properties

```css
/* Stagger delay (set by JavaScript) */
--stagger-delay: 0ms;
```

---

## JavaScript API

### Manually trigger reveal
```javascript
// Already handled by IntersectionObserver
// No manual trigger needed
```

### Check if element is in view
```javascript
// Use data-be-animate attribute
// IntersectionObserver handles automatically
```

---

## Best Practices

1. **Use stagger for grids**: Always add `data-be-stagger` to grid parents
2. **Consistent delays**: Use 80-120ms for professional feel
3. **Limit animations**: Don't animate every element
4. **Test on mobile**: Ensure smooth on low-end devices
5. **Respect preferences**: System handles prefers-reduced-motion

---

## Examples from BE Pages

### Home Page
```html
<!-- Skills section with stagger -->
<div class="row g-4" data-be-stagger="120">
  <div class="col-lg-4" data-be-animate="fadeInUp">
    <div class="be-card">...</div>
  </div>
</div>
```

### Services Page
```html
<!-- Service cards with stagger -->
<div class="row g-4" data-be-stagger="120">
  <div class="col-lg-4" data-be-animate="fadeInUp">
    <div class="be-card">...</div>
  </div>
</div>
```

### Projects Page
```html
<!-- Project cards with stagger -->
<div class="projects-grid">
  <div class="project-card" data-be-animate="fadeInUp">...</div>
</div>
```

---

## Support

For questions or issues with the motion system:
1. Check this quick reference
2. Review MOTION_SYSTEM_UPGRADE.md for detailed docs
3. Verify CSS and JS files are loaded
4. Test in different browsers

---

**Last Updated**: 2024
**Version**: 1.0
**Status**: Production Ready
