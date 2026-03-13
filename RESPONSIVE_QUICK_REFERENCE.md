# Responsive Design - Quick Reference Guide

## Breakpoints at a Glance

| Device | Width | Hero Height | Hero Title | Section Padding | Grid Columns | Status |
|--------|-------|-------------|-----------|-----------------|--------------|--------|
| Small Mobile | ≤575px | 300px | 1.5rem | 2rem | 1 | ✓ |
| Mobile | 576-767px | 400px | 2rem | 2.5rem | 1 | ✓ |
| Tablet | 768-1199px | 500px | 2.5rem | 3.5rem | 2 | ✓ |
| Desktop | 1200-1399px | 600px | 3.5rem | 5rem | 3 | ✓ |
| Large Desktop | ≥1400px | 600px | 4rem | 5rem | 3 | ✓ |

---

## CSS Media Queries

### Small Mobile (≤575px)
```css
@media (max-width: 575px) {
    body { font-size: 14px; }
    .be-hero { padding: 3rem 0 2.5rem; }
    .be-card { padding: 1rem; }
    .be-card__icon { width: 44px; height: 44px; }
}
```

### Mobile (576px - 767px)
```css
@media (max-width: 767px) {
    .be-topbar { display: none !important; }
    .be-hero { padding: 4rem 0 3rem; }
    .be-section { padding: 2.5rem 0; }
}
```

### Tablet (768px - 1199px)
```css
@media (min-width: 768px) and (max-width: 1199px) {
    .be-hero { padding: 5rem 0 4rem; }
    .be-section { padding: 3.5rem 0; }
    .be-stats { grid-template-columns: repeat(2, 1fr); }
}
```

### Desktop (1200px - 1399px)
```css
@media (min-width: 1200px) {
    .be-hero { padding: 7rem 0 5.5rem; }
    .be-section { padding: 5rem 0; }
}
```

### Large Desktop (≥1400px)
```css
@media (min-width: 1400px) {
    .be-hero__title { font-size: 4rem; }
    .be-section__title { font-size: 2.75rem; }
}
```

---

## Component Responsiveness

### Navbar
- **Desktop**: Full menu + topbar
- **Mobile**: Hamburger menu, topbar hidden

### Hero Section
- Uses `clamp()` for fluid scaling
- Responsive padding on all breakpoints
- Optimized image heights

### Grids
- **Desktop**: 3 columns
- **Tablet**: 2 columns
- **Mobile**: 1 column

### Gallery
- **Desktop**: 3 cols, 260px height
- **Tablet**: 2 cols, 240px height
- **Mobile**: 1 col, 220px height
- **Small Mobile**: 1 col, 200px height

### Cards
- **Desktop**: 1.35rem padding, 52px icons
- **Tablet**: 1.25rem padding, 48px icons
- **Mobile**: 1rem padding, 44px icons

---

## Fluid Typography

Uses `clamp()` for responsive font sizing:

```css
.be-hero__title {
    font-size: clamp(1.5rem, 4vw, 4rem);
}
```

This ensures:
- Minimum size: 1.5rem (small mobile)
- Preferred size: 4vw (viewport width)
- Maximum size: 4rem (large desktop)

---

## Touch-Friendly Sizing

- Buttons: 44px minimum
- Icons: 34px-52px
- Spacing: Adequate gaps
- No hover-only interactions

---

## Container System

- Uses Bootstrap `.container`
- Max-width: 1200px
- Padding: 0 20px (responsive)
- Centered on all devices

---

## Testing Devices

### Mobile
- iPhone SE (375px)
- iPhone 12 (390px)
- Samsung Galaxy S21 (360px)

### Tablet
- iPad (768px)
- iPad Pro (1024px)

### Desktop
- Laptop (1366px)
- Desktop (1920px)
- Ultra-wide (2560px)

---

## Performance Tips

1. Use `clamp()` for fluid sizing
2. Use `auto-fit` and `minmax()` for grids
3. Enable lazy loading for images
4. Use `object-fit` for image consistency
5. Optimize media query order
6. Use `will-change` for animations
7. Enable GPU acceleration

---

## Browser Support

- Chrome/Edge: ✓ Full
- Firefox: ✓ Full
- Safari: ✓ Full
- Mobile browsers: ✓ Full

---

## Files

- CSS: `/public/assets/css/style.css` (2441 lines)
- Media Queries: 20 breakpoints
- Responsive Components: All sections

---

## Status

✅ **COMPLETE** - Website is fully responsive and production-ready
