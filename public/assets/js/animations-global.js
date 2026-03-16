/**
 * Global Premium Animation System - BE Project
 * Minimal JavaScript for reveal-on-scroll functionality
 * Uses IntersectionObserver for performance
 */

(function() {
    'use strict';

    // Configuration
    const config = {
        rootMargin: '0px 0px -100px 0px', // Trigger when element is 100px from bottom
        threshold: 0.1
    };

    // Elements to observe
    const revealSelectors = [
        '.reveal-up',
        '.reveal-down',
        '.reveal-left',
        '.reveal-right',
        '.reveal-scale',
        '.stagger-item',
        '.be-card--service',
        '.be-team-card',
        '.be-client-card',
        '.be-stat',
        '.project-card',
        '.capability-item',
        '.gallery-item',
        '.be-section'
    ];

    // Create IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Add visible class to trigger animation
                entry.target.classList.add('is-visible');
                
                // Stop observing this element (animation runs once only)
                observer.unobserve(entry.target);
            }
        });
    }, config);

    // Initialize observer
    function initializeAnimations() {
        revealSelectors.forEach((selector) => {
            const elements = document.querySelectorAll(selector);
            elements.forEach((element) => {
                // Skip if already visible (page load)
                if (!element.classList.contains('is-visible')) {
                    observer.observe(element);
                }
            });
        });
    }

    // Handle page load animations
    function handlePageLoad() {
        const pageWrapper = document.querySelector('.page-wrapper');
        if (pageWrapper) {
            // Page wrapper animates on load via CSS
            pageWrapper.classList.add('is-visible');
        }
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            handlePageLoad();
            initializeAnimations();
        });
    } else {
        handlePageLoad();
        initializeAnimations();
    }

    // Cleanup on page unload
    window.addEventListener('beforeunload', () => {
        observer.disconnect();
    });

    // Expose to global scope for debugging
    window.BEAnimations = {
        observer: observer,
        reinitialize: initializeAnimations,
        config: config
    };
})();
