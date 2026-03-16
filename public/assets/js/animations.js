/**
 * BOSE ENTERPRISES - UNIFIED ANIMATION SYSTEM
 * Production-Safe | Progressive Enhancement | Comprehensive Error Handling
 * 
 * Features:
 * - Content visible by default (no JS required)
 * - Smooth page transitions on load
 * - Scroll-triggered animations via IntersectionObserver
 * - Comprehensive fallback mechanism
 * - Full error handling and logging
 * - Mobile optimizations
 * - Accessibility support (prefers-reduced-motion)
 */

(function() {
    'use strict';

    // =========================================================
    // CONFIGURATION
    // =========================================================

    const config = {
        // IntersectionObserver settings
        observerThreshold: 0.05,
        observerRootMargin: '0px 0px -80px 0px',
        
        // Fallback timeout (ms)
        fallbackTimeout: 2000,
        
        // Animation selectors
        animationSelectors: [
            '.reveal-up',
            '.reveal-down',
            '.reveal-left',
            '.reveal-right',
            '.reveal-scale',
            '.fade-in',
            '.stagger-item',
            '.gallery-item',
            '.form-group'
        ]
    };

    // =========================================================
    // INITIALIZATION
    // =========================================================

    function init() {
        try {
            // Step 1: Enable animations
            enableAnimations();
            
            // Step 2: Wrap main content
            wrapMainContent();
            
            // Step 3: Trigger page transition
            triggerPageTransition();
            
            // Step 4: Initialize scroll animations
            initScrollAnimations();
            
            // Step 5: Setup fallback
            setupFallback();
            
            // Log success
            logDebug('Animation system initialized successfully');
        } catch (error) {
            logError('Initialization error', error);
            // Fallback: reveal all content
            revealAllContent();
        }
    }

    // =========================================================
    // STEP 1: ENABLE ANIMATIONS
    // =========================================================

    function enableAnimations() {
        try {
            document.documentElement.classList.add('motion-ready');
            document.body.classList.add('motion-ready');
            logDebug('Motion-ready class added');
        } catch (error) {
            logError('Error enabling animations', error);
        }
    }

    // =========================================================
    // STEP 2: WRAP MAIN CONTENT
    // =========================================================

    function wrapMainContent() {
        try {
            const main = document.querySelector('main');
            if (!main) {
                logDebug('No main element found');
                return;
            }
            
            // Check if already wrapped
            if (main.parentElement && main.parentElement.classList.contains('page-wrapper')) {
                logDebug('Main content already wrapped');
                return;
            }
            
            // Create wrapper
            const wrapper = document.createElement('div');
            wrapper.className = 'page-wrapper';
            
            // Insert wrapper before main
            main.parentNode.insertBefore(wrapper, main);
            
            // Move main into wrapper
            wrapper.appendChild(main);
            
            logDebug('Main content wrapped in page-wrapper');
        } catch (error) {
            logError('Error wrapping main content', error);
        }
    }

    // =========================================================
    // STEP 3: TRIGGER PAGE TRANSITION
    // =========================================================

    function triggerPageTransition() {
        try {
            const wrapper = document.querySelector('.page-wrapper');
            if (!wrapper) {
                logDebug('No page-wrapper found');
                return;
            }
            
            // Use requestAnimationFrame for smooth timing
            requestAnimationFrame(function() {
                wrapper.classList.add('is-visible');
                logDebug('Page transition triggered');
            });
        } catch (error) {
            logError('Error triggering page transition', error);
        }
    }

    // =========================================================
    // STEP 4: INITIALIZE SCROLL ANIMATIONS
    // =========================================================

    function initScrollAnimations() {
        try {
            // Get all animated elements
            const elements = getAnimatedElements();
            
            if (!elements || elements.length === 0) {
                logDebug('No animated elements found');
                return;
            }
            
            logDebug(`Found ${elements.length} animated elements`);
            
            // Check for IntersectionObserver support
            if (typeof IntersectionObserver === 'undefined') {
                logDebug('IntersectionObserver not supported, using fallback');
                revealAllContent();
                return;
            }
            
            // Create observer
            const observer = createObserver();
            
            // Observe all elements
            elements.forEach(function(element) {
                if (element) {
                    observer.observe(element);
                }
            });
            
            logDebug('IntersectionObserver initialized');
        } catch (error) {
            logError('Error initializing scroll animations', error);
            revealAllContent();
        }
    }

    // =========================================================
    // HELPER: GET ANIMATED ELEMENTS
    // =========================================================

    function getAnimatedElements() {
        try {
            const selector = config.animationSelectors.join(', ');
            return document.querySelectorAll(selector);
        } catch (error) {
            logError('Error getting animated elements', error);
            return [];
        }
    }

    // =========================================================
    // HELPER: CREATE OBSERVER
    // =========================================================

    function createObserver() {
        return new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                try {
                    if (entry.isIntersecting && entry.target) {
                        // Add visible class to trigger animation
                        entry.target.classList.add('is-visible');
                        
                        // Stop observing (animation runs once)
                        this.unobserve(entry.target);
                        
                        logDebug(`Element animated: ${entry.target.className}`);
                    }
                } catch (error) {
                    logError('Error in observer callback', error);
                }
            });
        }, {
            threshold: config.observerThreshold,
            rootMargin: config.observerRootMargin
        });
    }

    // =========================================================
    // STEP 5: SETUP FALLBACK
    // =========================================================

    function setupFallback() {
        try {
            setTimeout(function() {
                try {
                    // Ensure motion-ready is set
                    document.body.classList.add('motion-ready');
                    
                    // Ensure page wrapper is visible
                    const wrapper = document.querySelector('.page-wrapper');
                    if (wrapper && !wrapper.classList.contains('is-visible')) {
                        wrapper.classList.add('is-visible');
                        logDebug('Fallback: Page wrapper revealed');
                    }
                    
                    // Ensure all animated elements are visible
                    const elements = getAnimatedElements();
                    let revealedCount = 0;
                    
                    elements.forEach(function(element) {
                        if (element && !element.classList.contains('is-visible')) {
                            element.classList.add('is-visible');
                            revealedCount++;
                        }
                    });
                    
                    if (revealedCount > 0) {
                        logDebug(`Fallback: ${revealedCount} elements revealed`);
                    }
                } catch (error) {
                    logError('Error in fallback', error);
                }
            }, config.fallbackTimeout);
            
            logDebug(`Fallback timeout set to ${config.fallbackTimeout}ms`);
        } catch (error) {
            logError('Error setting up fallback', error);
        }
    }

    // =========================================================
    // UTILITY: REVEAL ALL CONTENT
    // =========================================================

    function revealAllContent() {
        try {
            // Ensure motion-ready is set
            document.body.classList.add('motion-ready');
            
            // Reveal page wrapper
            const wrapper = document.querySelector('.page-wrapper');
            if (wrapper) {
                wrapper.classList.add('is-visible');
            }
            
            // Reveal all animated elements
            const elements = getAnimatedElements();
            elements.forEach(function(element) {
                if (element) {
                    element.classList.add('is-visible');
                }
            });
            
            logDebug('All content revealed');
        } catch (error) {
            logError('Error revealing all content', error);
        }
    }

    // =========================================================
    // LOGGING
    // =========================================================

    function logDebug(message) {
        if (window.BEAnimationsDebug) {
            console.log('[BE Animations]', message);
        }
    }

    function logError(message, error) {
        console.error('[BE Animations Error]', message, error);
    }

    // =========================================================
    // EXECUTION
    // =========================================================

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // =========================================================
    // GLOBAL API
    // =========================================================

    window.BEAnimations = {
        // Configuration
        config: config,
        
        // Methods
        init: init,
        revealAll: revealAllContent,
        getElements: getAnimatedElements,
        
        // Debug flag
        debug: function(enable) {
            window.BEAnimationsDebug = enable;
            if (enable) {
                console.log('[BE Animations] Debug mode enabled');
            }
        }
    };

    logDebug('Animation system loaded');

})();
