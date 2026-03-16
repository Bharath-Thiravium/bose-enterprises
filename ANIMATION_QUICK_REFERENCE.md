================================================================================
BOSE ENTERPRISES - ANIMATION SYSTEM QUICK REFERENCE
================================================================================

================================================================================
ANIMATION CLASSES
================================================================================

PAGE WRAPPER:
.page-wrapper                    - Wraps main content, triggers on load
.page-wrapper.is-visible         - Active state (fade + slide in)

REVEAL ANIMATIONS:
.reveal-up                       - Fade in + slide up (28px)
.reveal-down                     - Fade in + slide down (20px)
.reveal-left                     - Fade in + slide left (28px)
.reveal-right                    - Fade in + slide right (28px)
.reveal-scale                    - Fade in + scale (0.96 → 1)
.fade-in                         - Simple fade in

STAGGER SYSTEM:
.stagger-item                    - Grid item with stagger delay
.stagger-item:nth-child(1)       - 0s delay
.stagger-item:nth-child(2)       - 0.08s delay
.stagger-item:nth-child(3)       - 0.16s delay
... up to 10 items

HOVER EFFECTS:
.hover-image                     - Image hover (scale 1.02)
.hover-card                      - Card hover (lift + shadow)
.hover-button                    - Button hover (lift)
.hover-icon                      - Icon hover (lift + scale)
.hover-link                      - Link hover (slide right)

GRID CONTAINER:
.card-grid                       - Marks row for auto-stagger

================================================================================
ANIMATION TIMING
================================================================================

PAGE TRANSITION:
Duration:                        0.7s
Easing:                          cubic-bezier(0.22, 1, 0.36, 1)
Initial:                         opacity: 0, translateY(18px)
Final:                           opacity: 1, translateY(0)

SECTION REVEALS:
Duration:                        0.55s - 0.7s (varies)
Easing:                          cubic-bezier(0.22, 1, 0.36, 1)
Trigger:                         IntersectionObserver (scroll)

STAGGER DELAYS:
Desktop:                         0.08s between items
Mobile:                          0.06s between items
Max items:                       10 (0s to 0.72s)

HOVER EFFECTS:
Duration:                        0.25s - 0.35s
Easing:                          cubic-bezier(0.22, 1, 0.36, 1)
Trigger:                         Mouse hover / touch

================================================================================
ANIMATION DISTANCES
================================================================================

DESKTOP (1200px+):
translateY:                      28px
translateX:                      28px
scale:                           0.96 → 1

TABLET (768px - 1199px):
translateY:                      20px
translateX:                      20px
scale:                           0.96 → 1

MOBILE (576px - 767px):
translateY:                      16px - 20px
translateX:                      16px - 20px
scale:                           0.96 → 1

SMALL MOBILE (≤575px):
translateY:                      16px
translateX:                      16px
scale:                           0.96 → 1

================================================================================
HOVER EFFECT DISTANCES
================================================================================

Images:
scale:                           1.02
shadow:                          0 16px 40px rgba(15, 23, 42, 0.12)

Cards:
translateY:                      -4px
shadow:                          0 16px 40px rgba(15, 23, 42, 0.12)

Buttons:
translateY:                      -2px

Icons:
translateY:                      -2px
scale:                           1.05

Links:
translateX:                      2px

================================================================================
COMMON PATTERNS
================================================================================

HERO SECTION:
<p class="be-kicker reveal-down">Kicker</p>
<h1 class="be-hero__title reveal-up">Title</h1>
<p class="be-hero__lead reveal-up">Lead text</p>

SECTION HEADING:
<p class="be-kicker reveal-down">Kicker</p>
<h2 class="be-section__title reveal-up">Title</h2>
<p class="be-section__sub reveal-up">Subtitle</p>

LEFT-RIGHT SPLIT:
<div class="col-lg-6 reveal-left">Left image</div>
<div class="col-lg-6 reveal-right">Right content</div>

CARD GRID:
<div class="row g-4 card-grid">
  <div class="col-lg-4">
    <div class="be-card reveal-scale stagger-item">...</div>
  </div>
  ...
</div>

GALLERY GRID:
<div class="gallery-grid">
  <div class="gallery-item reveal-scale stagger-item">...</div>
  ...
</div>

CTA SECTION:
<div class="be-cta__inner reveal-scale">
  <div class="be-cta__icon reveal-up">...</div>
  <h2 class="be-cta__title reveal-up">...</h2>
  <p class="be-cta__text reveal-up">...</p>
</div>

================================================================================
JAVASCRIPT FUNCTIONS
================================================================================

initPageTransition()
- Wraps main content in .page-wrapper
- Triggers .is-visible on load
- Smooth fade + slide animation

initSectionAnimations()
- Auto-applies reveal classes to common elements
- Adds hover classes to images, cards, buttons, links
- Marks card rows with .card-grid

initScrollAnimations()
- Sets up IntersectionObserver
- Detects all reveal elements
- Adds .is-visible when in viewport
- Triggers CSS animations

initSliders()
- Handles service slider autoplay
- Smooth scroll behavior
- Pause on hover

initSkills()
- Animates progress bars on scroll
- Fills skill bars with percentage

================================================================================
CSS FILES
================================================================================

/public/assets/css/page-transitions.css
- Global page transition system
- Section reveal animations
- Hover effects
- Stagger system
- Accessibility support
- Mobile optimizations
- Performance optimizations
- ~600 lines

/public/assets/css/style.css
- Existing styles (unchanged)
- Page transition inline styles in head-meta.php

================================================================================
JAVASCRIPT FILES
================================================================================

/public/assets/js/script.js
- Page transition logic
- Section animation logic
- Scroll animation logic
- Slider logic
- Skills animation logic

/public/assets/js/flicker-fix.js
- Existing flicker prevention (unchanged)

================================================================================
HTML STRUCTURE
================================================================================

BODY:
<body>
  <header>...</header>
  <main class="main-content">
    <!-- Page wrapper added by JS -->
    <section>...</section>
    ...
  </main>
  <footer>...</footer>
</body>

PAGE WRAPPER (added by JS):
<div class="page-wrapper is-visible">
  <main class="main-content">
    ...
  </main>
</div>

================================================================================
ACCESSIBILITY
================================================================================

REDUCED MOTION SUPPORT:
@media (prefers-reduced-motion: reduce) {
  /* All animations disabled */
  /* Opacity and transform set to default */
  /* Hover effects disabled */
}

KEYBOARD NAVIGATION:
- All interactive elements keyboard accessible
- Focus states preserved
- No animation interference

SCREEN READERS:
- No animation-only content
- All information available without animation
- Semantic HTML preserved

================================================================================
BROWSER COMPATIBILITY
================================================================================

SUPPORTED:
✓ Chrome 51+
✓ Firefox 55+
✓ Safari 12.1+
✓ Edge 79+
✓ iOS Safari 12.2+
✓ Chrome Android

FEATURES USED:
✓ CSS Transforms
✓ CSS Transitions
✓ CSS Animations
✓ IntersectionObserver API
✓ CSS Media Queries

================================================================================
PERFORMANCE METRICS
================================================================================

ANIMATION PERFORMANCE:
- 60fps on modern devices
- GPU-accelerated
- No layout shifts
- Minimal CPU usage
- Minimal memory usage

LOAD TIME IMPACT:
- CSS: ~15KB (page-transitions.css)
- JS: ~2KB (animation logic in script.js)
- Total: ~17KB additional

SCROLL PERFORMANCE:
- IntersectionObserver efficient
- One-time animation execution
- No continuous animations
- Minimal reflow/repaint

================================================================================
TROUBLESHOOTING
================================================================================

ANIMATIONS NOT SHOWING:
1. Check if page-transitions.css is linked
2. Check if script.js is loaded
3. Check browser console for errors
4. Verify animation classes are applied

ANIMATIONS STUTTERING:
1. Check browser performance
2. Disable other animations
3. Check for heavy JavaScript
4. Test on different device

ANIMATIONS NOT RESPONSIVE:
1. Check media queries in CSS
2. Verify mobile breakpoints
3. Test on actual mobile device
4. Check viewport meta tag

FOUC (Flash of Unstyled Content):
1. Verify inline styles in head-meta.php
2. Check CSS load order
3. Verify page-wrapper class applied
4. Check for CSS conflicts

================================================================================
CUSTOMIZATION EXAMPLES
================================================================================

CHANGE ANIMATION DURATION:
In page-transitions.css:
.reveal-up.is-visible {
  animation: revealUp 0.5s cubic-bezier(...) forwards;  /* Changed from 0.65s */
}

CHANGE ANIMATION DISTANCE:
In page-transitions.css:
@keyframes revealUp {
  from { transform: translateY(40px); }  /* Changed from 28px */
  to { transform: translateY(0); }
}

CHANGE STAGGER DELAY:
In page-transitions.css:
.stagger-item:nth-child(2).is-visible { animation-delay: 0.12s; }  /* Changed from 0.08s */

DISABLE ANIMATIONS:
1. Remove page-transitions.css link
2. Remove animation classes from HTML
3. Remove initSectionAnimations() call

ADD ANIMATION TO NEW ELEMENT:
<div class="my-element reveal-up">Content</div>
<!-- Script will automatically detect and animate -->

================================================================================
END OF QUICK REFERENCE
================================================================================
