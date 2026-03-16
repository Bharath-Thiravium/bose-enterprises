# Animation System - Quick Deployment Guide

## 5-Minute Deploy

### Step 1: Upload Files (1 min)

```bash
# Upload to server
scp /public/assets/js/animations.js user@server:/public/assets/js/
scp /app/views/components/partials/footer-scripts.php user@server:/app/views/components/partials/
```

Or via FTP:
1. Connect to server
2. Navigate to `/public/assets/js/`
3. Upload `animations.js`
4. Navigate to `/app/views/components/partials/`
5. Upload `footer-scripts.php`

### Step 2: Clear Cache (1 min)

**Browser**:
- Windows/Linux: Ctrl+Shift+Delete
- Mac: Cmd+Shift+Delete
- Select "All time"
- Click "Clear data"

**Server** (if applicable):
```bash
rm -rf /var/www/html/cache/*
```

### Step 3: Test (3 min)

1. Open website in browser
2. Open DevTools (F12)
3. Go to Console tab
4. Run verification commands:

```javascript
// Check 1
console.log(document.body.classList.contains('motion-ready'));
// Expected: true

// Check 2
console.log(document.querySelector('.page-wrapper'));
// Expected: <div class="page-wrapper is-visible">

// Check 3
console.log(document.querySelectorAll('[class*="reveal-"].is-visible').length);
// Expected: number > 0
```

5. Verify animations on each page:
   - Home: Hero animates
   - About: Sections slide in
   - Services: Cards stagger
   - Projects: Projects animate
   - Gallery: Items fade in
   - Team: Cards animate
   - Contact: Form fields animate

---

## Files to Deploy

### New Files
- `/public/assets/js/animations.js` (NEW)

### Updated Files
- `/app/views/components/partials/footer-scripts.php` (UPDATED)

### No Changes Needed
- `/public/assets/css/style.css` (Already has animation CSS)
- All page files (Already have animation classes)

---

## Verification Checklist

- [ ] Files uploaded
- [ ] Cache cleared
- [ ] motion-ready class present
- [ ] page-wrapper element exists
- [ ] Animated elements have is-visible class
- [ ] No console errors
- [ ] Animations play on Home page
- [ ] Animations play on scroll
- [ ] Mobile animations work
- [ ] All 7 pages tested

---

## Troubleshooting

### Animations Not Showing?

1. Hard refresh: Ctrl+Shift+R
2. Check console: `document.body.classList.contains('motion-ready')`
3. Check CSS loaded: `document.querySelector('link[href*="style.css"]')`
4. Check JS loaded: `document.querySelector('script[src*="animations.js"]')`

### Still Not Working?

1. Check file permissions (644)
2. Check file paths are correct
3. Check server logs for errors
4. Try different browser
5. Clear all caches again

### Works Locally, Not Live?

1. Add cache busting: `?v=2.0`
2. Clear browser cache
3. Clear server cache
4. Wait 5 minutes for CDN to update

---

## Rollback (If Needed)

If animations cause issues:

1. Remove `animations.js` line from `footer-scripts.php`
2. Clear cache
3. Website works normally (without animations)

---

## Performance Impact

- Page load: No impact
- CPU: Minimal (only during animations)
- Memory: Negligible
- Accessibility: Fully supported

---

## Browser Support

✓ Chrome, Firefox, Safari, Edge, Mobile
✓ IE 11 (fallback works)

---

## Success Criteria

✓ Animations play on all pages
✓ No console errors
✓ Works on all browsers
✓ Mobile smooth
✓ Accessibility maintained

---

**Estimated Time**: 5 minutes
**Risk Level**: Low
**Rollback Time**: 2 minutes

Ready to deploy! 🚀
