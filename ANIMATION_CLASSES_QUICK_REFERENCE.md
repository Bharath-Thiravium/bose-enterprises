# Animation Classes Quick Reference

## Pattern for Each Page Section

### Section Header Pattern:
```html
<section class="be-section be-section--light">
    <div class="container">
        <div class="be-section__head">
            <!-- Kicker fades down -->
            <p class="be-kicker reveal-down">Section Label</p>
            
            <!-- Title fades up -->
            <h2 class="be-section__title reveal-up">Main Heading</h2>
            
            <!-- Subtitle fades up with delay -->
            <p class="be-section__sub reveal-up">Description text</p>
        </div>
```

### Two-Column Layout Pattern:
```html
<div class="row align-items-center g-4">
    <!-- Left image slides in from left -->
    <div class="col-lg-6 reveal-left">
        <img src="..." alt="...">
    </div>
    
    <!-- Right content slides in from right -->
    <div class="col-lg-6 reveal-right">
        <h3 class="reveal-up">Heading</h3>
        <p class="reveal-up">Content</p>
    </div>
</div>
```

### Grid Items Pattern:
```html
<div class="row g-4">
    <!-- Each card gets stagger-item class -->
    <div class="col-lg-4 col-md-6">
        <div class="be-card stagger-item">
            <!-- Card content -->
        </div>
    </div>
    
    <div class="col-lg-4 col-md-6">
        <div class="be-card stagger-item">
            <!-- Card content -->
        </div>
    </div>
    
    <!-- More items... each gets 0.08s delay -->
</div>
```

### Gallery Pattern:
```html
<div class="gallery-grid">
    <!-- Each gallery item gets gallery-item class -->
    <div class="gallery-item">
        <img src="..." alt="...">
    </div>
    
    <div class="gallery-item">
        <img src="..." alt="...">
    </div>
    
    <!-- More items... each gets 0.08s delay -->
</div>
```

### Form Pattern:
```html
<form>
    <!-- Each form field gets form-group class -->
    <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" class="form-control">
    </div>
    
    <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" class="form-control">
    </div>
    
    <!-- More fields... each gets 0.08s delay -->
</form>
```

---

## Animation Classes Summary

| Class | Animation | Duration | Easing |
|-------|-----------|----------|--------|
| `.reveal-up` | Fade in + slide up | 0.65s | cubic-bezier(0.22, 1, 0.36, 1) |
| `.reveal-down` | Fade in + slide down | 0.65s | cubic-bezier(0.22, 1, 0.36, 1) |
| `.reveal-left` | Fade in + slide left | 0.7s | cubic-bezier(0.22, 1, 0.36, 1) |
| `.reveal-right` | Fade in + slide right | 0.7s | cubic-bezier(0.22, 1, 0.36, 1) |
| `.reveal-scale` | Fade in + scale up | 0.65s | cubic-bezier(0.22, 1, 0.36, 1) |
| `.fade-in` | Simple fade in | 0.6s | ease-out |
| `.stagger-item` | Fade in + slide up (staggered) | 0.65s | cubic-bezier(0.22, 1, 0.36, 1) |
| `.gallery-item` | Fade in + slide up (staggered) | 0.65s | cubic-bezier(0.22, 1, 0.36, 1) |
| `.form-group` | Fade in + slide up (staggered) | 0.65s | cubic-bezier(0.22, 1, 0.36, 1) |

---

## Stagger Delays

When using `.stagger-item`, `.gallery-item`, or `.form-group`:

| Position | Delay |
|----------|-------|
| 1st item | 0s |
| 2nd item | 0.08s |
| 3rd item | 0.16s |
| 4th item | 0.24s |
| 5th item | 0.32s |
| 6th item | 0.4s |
| 7th item | 0.48s |
| 8th item | 0.56s |
| 9th item | 0.64s |

---

## Mobile Adjustments

On mobile (< 768px):

| Property | Desktop | Mobile |
|----------|---------|--------|
| Animation Duration | 0.65s - 0.7s | 0.55s |
| Reveal Distance | 30px | 20px |
| Stagger Delay | 0.08s | 0.06s |
| Hover Lift | -4px | -2px |

---

## Hover Effects

Hover effects are automatically applied to:

- `.be-card` → lift -4px
- `.be-team-card` → lift -4px
- `.be-client-card` → lift -4px
- `.project-card` → lift -4px
- `.capability-item` → lift -4px
- `.gallery-item` → lift -6px
- `.be-media-card` → scale 1.02
- `.about-image` → scale 1.02
- `.btn` → lift -2px

No additional classes needed!

---

## Testing Checklist

For each page:

- [ ] Section headers animate on scroll
- [ ] Images slide in from correct direction
- [ ] Cards stagger with proper delays
- [ ] Gallery items stagger correctly
- [ ] Form fields stagger correctly
- [ ] Hover effects work smoothly
- [ ] Mobile animations are faster
- [ ] No console errors
- [ ] Content visible without JavaScript

---

## Common Mistakes to Avoid

❌ **Don't:** Add animation classes to every element
✅ **Do:** Add animation classes only to main content elements

❌ **Don't:** Mix different animation classes on same element
✅ **Do:** Use one animation class per element

❌ **Don't:** Forget to add stagger-item to grid items
✅ **Do:** Add stagger-item to all items in a grid

❌ **Don't:** Add animation classes to hidden elements
✅ **Do:** Only animate visible content

❌ **Don't:** Use animation classes on form labels
✅ **Do:** Use form-group on the entire form field wrapper

---

## Example: Complete Page Section

```html
<!-- Services Section -->
<section class="be-section be-section--white" id="services">
    <div class="container">
        <!-- Section Header -->
        <div class="be-section__head">
            <p class="be-kicker reveal-down">Services</p>
            <h2 class="be-section__title reveal-up">Our Services</h2>
            <p class="be-section__sub reveal-up">We provide comprehensive solar solutions</p>
        </div>

        <!-- Services Grid -->
        <div class="row g-4">
            <div class="col-lg-4 col-md-6">
                <div class="be-card stagger-item">
                    <div class="be-card__icon"><i class="fa-solid fa-solar-panel"></i></div>
                    <h3 class="be-card__title">Solar EPC</h3>
                    <p class="be-card__text">Complete solar solutions</p>
                </div>
            </div>

            <div class="col-lg-4 col-md-6">
                <div class="be-card stagger-item">
                    <div class="be-card__icon"><i class="fa-solid fa-helmet-safety"></i></div>
                    <h3 class="be-card__title">Civil Works</h3>
                    <p class="be-card__text">Infrastructure development</p>
                </div>
            </div>

            <div class="col-lg-4 col-md-6">
                <div class="be-card stagger-item">
                    <div class="be-card__icon"><i class="fa-solid fa-plug-circle-bolt"></i></div>
                    <h3 class="be-card__title">Electrical</h3>
                    <p class="be-card__text">Electrical installation</p>
                </div>
            </div>
        </div>
    </div>
</section>
```

This will produce:
1. Kicker fades down
2. Title fades up
3. Subtitle fades up
4. First card fades up (0s delay)
5. Second card fades up (0.08s delay)
6. Third card fades up (0.16s delay)

---

## Need Help?

Enable debug mode in browser console:
```javascript
BEAnimations.debug(true);
```

Then reload the page to see detailed logs of what's happening.
