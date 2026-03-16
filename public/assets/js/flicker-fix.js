// Global No-Blink / No-FOUC System + Premium Motion Foundation
(function() {
  'use strict';

  // 1. PREVENT FLASH OF UNSTYLED CONTENT (FOUC)
  var style = document.createElement('style');
  style.textContent = `
    /* No-FOUC: Hide until ready */
    html:not(.be-ready) {
      opacity: 0;
      transition: opacity 0.35s ease;
    }
    html.be-ready {
      opacity: 1;
    }

    /* Global rendering optimization */
    html {
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      scroll-behavior: smooth;
    }

    body {
      overflow-x: hidden;
    }

    /* GPU acceleration for animated elements */
    .be-hero__bg,
    .be-hero__bg::before,
    .be-hero__bg::after,
    [data-be-animate],
    .be-media-card,
    .be-float-card,
    .be-card,
    .be-team-card,
    .be-client-card,
    .project-card,
    .capability-item,
    .gallery-item {
      transform: translateZ(0);
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
    }

    /* Smooth image loading */
    img {
      image-rendering: auto;
      display: block;
      max-width: 100%;
      height: auto;
    }

    /* Prevent layout shift on lazy images */
    img[loading="lazy"] {
      background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
      background-size: 200% 100%;
    }

    /* Smooth page transitions */
    main {
      animation: pageEnter 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
    }

    @keyframes pageEnter {
      from {
        opacity: 0;
        transform: translateY(16px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* Smooth reveal animations */
    [data-be-animate] {
      opacity: 0;
      transform: translateY(24px);
      animation: revealUp 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
      animation-delay: var(--stagger-delay, 0ms);
    }

    [data-be-animate="fadeInLeft"] {
      transform: translateX(-24px);
      animation: revealLeft 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
      animation-delay: var(--stagger-delay, 0ms);
    }

    [data-be-animate="fadeInRight"] {
      transform: translateX(24px);
      animation: revealRight 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
      animation-delay: var(--stagger-delay, 0ms);
    }

    [data-be-animate="fadeInDown"] {
      transform: translateY(-24px);
      animation: revealDown 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
      animation-delay: var(--stagger-delay, 0ms);
    }

    @keyframes revealUp {
      from { opacity: 0; transform: translateY(24px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes revealLeft {
      from { opacity: 0; transform: translateX(-24px); }
      to { opacity: 1; transform: translateX(0); }
    }

    @keyframes revealRight {
      from { opacity: 0; transform: translateX(24px); }
      to { opacity: 1; transform: translateX(0); }
    }

    @keyframes revealDown {
      from { opacity: 0; transform: translateY(-24px); }
      to { opacity: 1; transform: translateY(0); }
    }

    /* Respect user motion preferences */
    @media (prefers-reduced-motion: reduce) {
      html {
        scroll-behavior: auto;
      }
      main,
      [data-be-animate],
      .be-card,
      .be-team-card,
      .be-client-card,
      .project-card,
      .capability-item,
      .gallery-item,
      .btn,
      .nav-link {
        animation: none !important;
        transition: none !important;
      }
    }
  `;

  document.head.appendChild(style);

  // 2. MARK PAGE AS READY ONCE DOM + CSS ARE LOADED
  function markReady() {
    document.documentElement.classList.add('be-ready');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', markReady);
  } else {
    markReady();
  }

  // 3. TRACK PAGE VISIBILITY
  document.addEventListener('visibilitychange', function() {
    document.documentElement.classList.toggle('be-page-hidden', document.hidden);
  });

  // 4. PREVENT HORIZONTAL OVERFLOW
  function fixOverflow() {
    var html = document.documentElement;
    var body = document.body;
    if (html.scrollWidth > html.clientWidth) {
      body.style.overflowX = 'hidden';
    }
  }
  fixOverflow();
  window.addEventListener('resize', fixOverflow);
})();
