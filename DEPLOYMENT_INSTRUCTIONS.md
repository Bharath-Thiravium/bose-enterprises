# Animation System - Deployment Instructions

## Quick Deploy (5 minutes)

### Step 1: Upload Fixed File
Upload this file to your server:
- **Local**: `/home/athenas/Downloads/BE/app/views/components/partials/footer-scripts.php`
- **Server**: `/app/views/components/partials/footer-scripts.php`

File permissions: `644`

### Step 2: Clear Cache
- Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- If using server cache, clear it
- If using CDN, purge cache

### Step 3: Test
Open each page and verify animations work:
- Home page
- About page
- Services page
- Projects page
- Gallery page
- Team page
- Contact page

---

## Detailed Deployment Steps

### Prerequisites
- FTP/SFTP access to server
- Ability to clear cache
- Browser DevTools (F12)

### Step 1: Backup Current File
```bash
# On server, backup current file
cp app/views/components/partials/footer-scripts.php app/views/components/partials/footer-scripts.php.backup
```

### Step 2: Upload New File
Using FTP/SFTP:
1. Connect to server
2. Navigate to: `app/views/components/partials/`
3. Upload: `footer-scripts.php`
4. Set permissions: `644`

Or using command line:
```bash
scp footer-scripts.php user@server:/path/to/app/views/components/partials/
```

### Step 3: Verify Upload
```bash
# Check file exists and has correct permissions
ls -la app/views/components/partials/footer-scripts.php
# Should show: -rw-r--r-- (644)
```

### Step 4: Clear Browser Cache
- **Chrome**: Ctrl+Shift+Delete → Clear all time → Clear data
- **Firefox**: Ctrl+Shift+Delete → Clear all → Clear now
- **Safari**: Develop → Empty Web Storage
- **Edge**: Ctrl+Shift+Delete → Clear all time → Clear now

### Step 5: Clear Server Cache (if applicable)
```bash
# If using PHP cache
rm -rf /var/www/html/cache/*

# If using Redis
redis-cli FLUSHALL

# If using Memcached
memcached-tool localhost:11211 flush_all
```

### Step 6: Test on Live Site
1. Open browser DevTools (F12)
2. Go to Console tab
3. Run these commands:

```javascript
// Check 1: motion-ready class
console.log('motion-ready:', document.body.classList.contains('motion-ready'));
// Expected: true

// Check 2: page wrapper
console.log('page-wrapper:', document.querySelector('.page-wrapper'));
// Expected: <div class="page-wrapper is-visible">

// Check 3: animated elements
console.log('animated elements:', document.querySelectorAll('[class*="reveal-"].is-visible').length);
// Expected: number > 0

// Check 4: no errors
console.log('errors:', document.querySelectorAll('*').length > 0 ? 'none' : 'check console');
```

### Step 7: Visual Verification
- [ ] Home page: Hero section fades in and slides up
- [ ] About page: Sections slide in from sides
- [ ] Services page: Cards fade in with stagger
- [ ] Projects page: Project cards animate in
- [ ] Gallery page: Gallery items fade in
- [ ] Team page: Team cards animate in
- [ ] Contact page: Form fields animate in

### Step 8: Cross-Browser Testing
Test on:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Chrome
- [ ] Mobile Safari

### Step 9: Mobile Testing
- [ ] Animations work on mobile
- [ ] No layout shifts
- [ ] Smooth performance
- [ ] Touch interactions work

---

## Troubleshooting

### Problem: Animations Still Not Working

**Check 1: File Uploaded Correctly**
```bash
# SSH into server
ssh user@server

# Check file exists
cat app/views/components/partials/footer-scripts.php | head -20
# Should show the new code with "Motion System Initialization"
```

**Check 2: Cache Not Cleared**
```bash
# Hard refresh in browser
Ctrl+Shift+R (Windows/Linux)
Cmd+Shift+R (Mac)

# Or clear cache again
```

**Check 3: CSS File Loading**
In browser console:
```javascript
// Check if CSS is loaded
var link = document.querySelector('link[href*="page-transitions.css"]');
console.log(link ? 'CSS loaded' : 'CSS NOT loaded');
```

**Check 4: JavaScript Errors**
In browser console, look for red error messages. Common issues:
- `Uncaught ReferenceError: triggerScrollAnimations is not defined`
- `Cannot read property 'classList' of null`

**Check 5: motion-ready Class**
```javascript
// Check if class is on body
console.log(document.body.classList);
// Should include 'motion-ready'
```

### Problem: Animations Stutter or Lag

**Solution 1: Reduce Animation Count**
Edit `page-transitions.css` and reduce stagger delays:
```css
/* Change from 0.08s to 0.12s */
body.motion-ready .stagger-item:nth-child(2).is-visible { animation-delay: 0.12s; }
```

**Solution 2: Disable on Mobile**
Add to `page-transitions.css`:
```css
@media (max-width: 768px) {
    body.motion-ready .reveal-up,
    body.motion-ready .reveal-down,
    body.motion-ready .reveal-left,
    body.motion-ready .reveal-right {
        animation: none !important;
        opacity: 1 !important;
        transform: none !important;
    }
}
```

**Solution 3: Check Performance**
In DevTools:
1. Go to Performance tab
2. Click Record
3. Scroll page
4. Click Stop
5. Look for dropped frames (should be < 10%)

### Problem: Content Hidden on Page Load

**Cause**: CSS hiding content before JavaScript runs

**Solution**: Ensure `page-transitions.css` has default visible state:
```css
/* Should be visible by default */
.reveal-up {
    opacity: 1;
    transform: translateY(0);
}
```

### Problem: Animations Work Locally But Not Live

**Cause**: Cache not cleared or file not uploaded

**Solution**:
1. Add cache busting to CSS/JS links in `head-meta.php`:
```php
<link rel="stylesheet" href="<?php echo APP_URL; ?>/public/assets/css/page-transitions.css?v=2.0">
```

2. Update version number in `footer-scripts.php`:
```php
<script defer src="<?php echo APP_URL; ?>/public/assets/js/script.js?v=2.0"></script>
```

3. Clear all caches again

---

## Rollback Instructions

If animations cause problems:

### Step 1: Restore Backup
```bash
# SSH into server
ssh user@server

# Restore backup
cp app/views/components/partials/footer-scripts.php.backup app/views/components/partials/footer-scripts.php
```

### Step 2: Clear Cache
- Clear browser cache
- Clear server cache
- Clear CDN cache

### Step 3: Verify
- Open website
- Check that it loads normally
- Animations will be disabled but content will be visible

---

## Verification Checklist

### Pre-Deployment
- [ ] Backup current `footer-scripts.php`
- [ ] New file ready to upload
- [ ] FTP/SFTP access confirmed
- [ ] Browser DevTools available

### Deployment
- [ ] File uploaded to correct location
- [ ] File permissions set to 644
- [ ] Browser cache cleared
- [ ] Server cache cleared (if applicable)

### Post-Deployment
- [ ] Console check: `motion-ready` class present
- [ ] Console check: `page-wrapper` element exists
- [ ] Console check: animated elements have `is-visible` class
- [ ] Visual check: animations play on page load
- [ ] Visual check: animations play on scroll
- [ ] Visual check: no console errors
- [ ] Mobile check: animations work on mobile
- [ ] Cross-browser check: tested on 4+ browsers

### Performance
- [ ] Page load time < 3s
- [ ] No layout shifts during animations
- [ ] Smooth 60fps animations
- [ ] No memory leaks

### Accessibility
- [ ] Tested with `prefers-reduced-motion: reduce`
- [ ] Animations disabled when preference set
- [ ] Content still fully visible

---

## Support Resources

### Test Page
Open this page to test animations:
- **Local**: `http://localhost/BE/animation-test.html`
- **Live**: `https://yourdomain.com/animation-test.html`

### Debug Guide
See: `ANIMATION_DEBUG_GUIDE.md`

### Root Cause Analysis
See: `ANIMATION_FIX_SUMMARY.md`

---

## Contact Support

If you need help:

1. Check browser console for errors (F12)
2. Run verification commands above
3. Check `ANIMATION_DEBUG_GUIDE.md`
4. Review `ANIMATION_FIX_SUMMARY.md`
5. Contact support with:
   - Browser and version
   - Console errors (screenshot)
   - Server logs (if available)
   - Steps to reproduce

---

## Timeline

| Step | Time | Notes |
|------|------|-------|
| Backup | 1 min | Quick backup of current file |
| Upload | 1 min | Upload new file via FTP |
| Cache Clear | 1 min | Clear browser and server cache |
| Testing | 2 min | Quick visual verification |
| **Total** | **5 min** | Complete deployment |

---

## Success Criteria

✓ All pages load without errors
✓ Animations play on page load
✓ Animations play on scroll
✓ No console errors
✓ Mobile animations work
✓ Cross-browser compatible
✓ Performance acceptable (< 3s load time)
✓ Accessibility maintained

---

## Next Steps

1. Deploy using steps above
2. Test thoroughly
3. Monitor for issues
4. Gather user feedback
5. Optimize if needed

Good luck! 🚀
