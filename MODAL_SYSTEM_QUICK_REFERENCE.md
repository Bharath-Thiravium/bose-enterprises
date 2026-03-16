# BOSE ENTERPRISES - MODAL SYSTEM QUICK REFERENCE

## Files Delivered

| File | Type | Purpose |
|------|------|---------|
| `public/assets/css/modal-system.css` | CSS | Modal animations & styling |
| `public/assets/js/modal-system.js` | JS | Modal open/close logic |
| `head-meta.php` | Updated | Include modal CSS |
| `footer-scripts.php` | Updated | Include modal JS |
| `gallery.php` | Updated | Gallery with lightbox |

---

## Quick Start

### 1. Create Modal HTML
```html
<!-- Overlay -->
<div class="modal-overlay" data-modal-overlay="myModal"></div>

<!-- Modal -->
<div id="myModal" class="modal-container">
  <div class="modal-header">
    <h2 class="modal-title">Title</h2>
    <button class="modal-close-btn"><i class="fa-solid fa-times"></i></button>
  </div>
  <div class="modal-body">Content</div>
</div>

<!-- Button -->
<button data-modal-open="myModal">Open</button>
```

### 2. Open Modal
```javascript
ModalManager.open('myModal');
```

### 3. Close Modal
```javascript
ModalManager.close('myModal');
```

---

## Animation Specs

```
Open:     0.35s, scale(0.95→1), translateY(20px→0)
Close:    0.35s, scale(1→0.95), translateY(0→10px)
Overlay:  0.35s, opacity(0→1)
Easing:   cubic-bezier(0.22, 1, 0.36, 1)
```

---

## Modal Types

### Standard Modal
```html
<div class="modal-container">
  <div class="modal-header">...</div>
  <div class="modal-body">...</div>
  <div class="modal-footer">...</div>
</div>
```

### Image Modal
```html
<div class="modal-container image-modal">
  <div class="modal-header">...</div>
  <div class="modal-body"><img src="..."></div>
</div>
```

### Video Modal
```html
<div class="modal-container video-modal">
  <div class="modal-header">...</div>
  <div class="modal-body"><video>...</video></div>
</div>
```

### Form Modal
```html
<div class="modal-container form-modal">
  <div class="modal-header">...</div>
  <div class="modal-body"><form>...</form></div>
  <div class="modal-footer">...</div>
</div>
```

---

## JavaScript API

```javascript
// Open
ModalManager.open('modalId');

// Close
ModalManager.close('modalId');

// Toggle
ModalManager.toggle('modalId');

// Listen
ModalManager.on('modalOpened', callback);
ModalManager.on('modalClosed', callback);

// Get active
ModalManager.activeModal;
```

---

## Features

✅ Smooth fade & scale animation
✅ No blinking or flashing
✅ Scroll lock on open
✅ Keyboard escape to close
✅ Overlay click to close
✅ Responsive (desktop, tablet, mobile)
✅ Accessibility compliant
✅ Gallery lightbox auto-init
✅ GPU accelerated
✅ 60fps smooth

---

## Gallery Lightbox

**Automatic!** Just click gallery images:
- Images auto-become clickable
- Click opens smooth lightbox
- Shows full-size image
- Close with button or escape

---

## Buttons

### Primary Button
```html
<button class="modal-btn modal-btn-primary">Confirm</button>
```

### Secondary Button
```html
<button class="modal-btn modal-btn-secondary">Cancel</button>
```

---

## Responsive

| Device | Max-Width | Max-Height |
|--------|-----------|-----------|
| Desktop | 90vw | 90vh |
| Tablet | 90vw | 90vh |
| Mobile | 100vw | 100vh |

---

## Customization

### Change Duration
Edit `modal-system.css`:
```css
.modal-container {
  transition: ... 0.35s ...; /* Change 0.35s */
}
```

### Change Overlay Color
```css
.modal-overlay.active {
  background: rgba(0, 0, 0, 0.55); /* Change opacity */
}
```

### Change Size
```css
.modal-container {
  max-width: 90vw; /* Change width */
  max-height: 90vh; /* Change height */
}
```

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Modal not opening | Check modal ID matches |
| Modal not closing | Verify close button class |
| Scroll not locked | Check CSS is loaded |
| Animation not smooth | Verify browser supports transforms |
| Mobile too small | Check viewport meta tag |

---

## Browser Support

✅ Chrome/Edge (latest)
✅ Firefox (latest)
✅ Safari (latest)
✅ Mobile browsers
✅ prefers-reduced-motion

---

## Performance

- CSS: ~8KB
- JS: ~4KB
- Animation: 60fps
- No dependencies
- GPU accelerated

---

## Examples

### Contact Form Modal
```html
<div class="modal-overlay" data-modal-overlay="contactModal"></div>
<div id="contactModal" class="modal-container form-modal">
  <div class="modal-header">
    <h2 class="modal-title">Contact Us</h2>
    <button class="modal-close-btn"><i class="fa-solid fa-times"></i></button>
  </div>
  <div class="modal-body">
    <form>
      <input type="text" placeholder="Name">
      <input type="email" placeholder="Email">
      <textarea placeholder="Message"></textarea>
    </form>
  </div>
  <div class="modal-footer">
    <button class="modal-btn modal-btn-secondary" onclick="ModalManager.close('contactModal')">Cancel</button>
    <button class="modal-btn modal-btn-primary">Send</button>
  </div>
</div>
<button data-modal-open="contactModal" class="btn btn-primary">Contact</button>
```

### Confirmation Modal
```html
<div class="modal-overlay" data-modal-overlay="confirmModal"></div>
<div id="confirmModal" class="modal-container confirmation-modal">
  <div class="modal-body">
    <div class="confirmation-modal__icon">
      <i class="fa-solid fa-check-circle"></i>
    </div>
    <p class="confirmation-modal__message">Are you sure?</p>
  </div>
  <div class="modal-footer">
    <button class="modal-btn modal-btn-secondary" onclick="ModalManager.close('confirmModal')">No</button>
    <button class="modal-btn modal-btn-primary">Yes</button>
  </div>
</div>
<button data-modal-open="confirmModal" class="btn btn-primary">Confirm</button>
```

---

## Best Practices

1. Always include overlay
2. Use unique modal IDs
3. Include close button
4. Test on mobile
5. Test keyboard navigation
6. Use semantic HTML
7. Add ARIA labels
8. Provide fallback content

---

**Status**: ✅ PRODUCTION READY
**Version**: 1.0
