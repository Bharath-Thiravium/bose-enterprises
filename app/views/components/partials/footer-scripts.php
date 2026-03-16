<?php
// Footer Scripts Component
?>
    <!-- Bootstrap JS (async) -->
    <script async src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    
    <!-- Page Transition Script - Production Safe -->
    <script>
        (function() {
            'use strict';
            
            // CRITICAL: Add motion-ready class to enable animations
            // This must happen BEFORE animations can hide content
            function enableMotionSystem() {
                document.documentElement.classList.add('motion-ready');
                document.body.classList.add('motion-ready');
            }
            
            // Enable motion system immediately (before DOMContentLoaded)
            // This ensures animations are ready but content is still visible
            enableMotionSystem();
            
            // Wrap main content for page transitions
            function wrapMainContent() {
                var main = document.querySelector('main.main-content');
                if (!main) return false;
                
                if (main.parentElement && main.parentElement.classList.contains('page-wrapper')) {
                    return true; // Already wrapped
                }
                
                var wrapper = document.createElement('div');
                wrapper.className = 'page-wrapper';
                
                try {
                    main.parentNode.insertBefore(wrapper, main);
                    wrapper.appendChild(main);
                    return true;
                } catch (e) {
                    console.error('Failed to wrap main content:', e);
                    return false;
                }
            }
            
            // Trigger page visible state after DOM ready
            function triggerPageTransition() {
                var wrapper = document.querySelector('.page-wrapper');
                if (wrapper) {
                    try {
                        requestAnimationFrame(function() {
                            wrapper.classList.add('is-visible');
                        });
                    } catch (e) {
                        console.error('Failed to trigger page transition:', e);
                        // Fallback: ensure wrapper is visible
                        wrapper.style.opacity = '1';
                        wrapper.style.transform = 'translateY(0)';
                    }
                }
            }
            
            // Try to wrap content immediately
            if (document.readyState === 'loading') {
                // DOM not ready yet, wait for DOMContentLoaded
                document.addEventListener('DOMContentLoaded', function() {
                    wrapMainContent();
                    triggerPageTransition();
                });
            } else {
                // DOM already ready
                wrapMainContent();
                triggerPageTransition();
            }
            
            // FALLBACK: If page transition doesn't trigger within 2 seconds, force reveal all content
            setTimeout(function() {
                var wrapper = document.querySelector('.page-wrapper');
                if (wrapper && !wrapper.classList.contains('is-visible')) {
                    console.warn('Page transition timeout - forcing content visibility');
                    wrapper.style.opacity = '1';
                    wrapper.style.transform = 'translateY(0)';
                    wrapper.classList.add('is-visible');
                }
                
                // Also ensure all reveal elements are visible as fallback
                var revealElements = document.querySelectorAll('.reveal-up, .reveal-down, .reveal-left, .reveal-right, .reveal-scale, .fade-in');
                revealElements.forEach(function(el) {
                    if (!el.classList.contains('is-visible')) {
                        el.style.opacity = '1';
                        el.style.transform = 'translateY(0) translateX(0) scale(1)';
                    }
                });
            }, 2000);
        })();
    </script>
    
    <!-- Custom JS (defer) -->
    <script defer src="<?php echo APP_URL; ?>/public/assets/js/script.js"></script>
    
    <!-- Flicker Fix -->
    <script src="<?php echo APP_URL; ?>/public/assets/js/flicker-fix.js"></script>
</body>
</html>
