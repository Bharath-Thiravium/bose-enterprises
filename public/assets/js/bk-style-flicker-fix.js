// Bose Enterprises - BK-Style No-Flash Rendering System
(function() {
  'use strict';

  // 1. PREVENT FLASH OF UNSTYLED CONTENT
  var style = document.createElement('style');
  style.textContent = `
    html:not(.be-ready) {
      opacity: 0;
      transition: opacity 0.45s cubic-bezier(0.22, 1, 0.36, 1);
    }
    html.be-ready {
      opacity: 1;
    }
    html {
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      scroll-behavior: smooth;
    }
    body {
      overflow-x: hidden;
    }
    [data-be-animate],
    .be-card,
    .be-team-card,
    .be-client-card,
    .project-card,
    .capability-item,
    .gallery-item,
    .be-media-card,
    .be-float-card {
      transform: translateZ(0);
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
    }
    img {
      display: block;
      max-width: 100%;
      height: auto;
    }
    img[loading="lazy"] {
      background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
      background-size: 200% 100%;
    }
    main {
      animation: pageEnter 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    }
    @keyframes pageEnter {
      from { opacity: 0; transform: translateY(8px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @media (prefers-reduced-motion: reduce) {
      html { scroll-behavior: auto; }
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

  // 2. MARK PAGE AS READY
  function markReady() {
    document.documentElement.classList.add('be-ready');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', markReady);
  } else {
    markReady();
  }

  // 3. PREVENT HORIZONTAL OVERFLOW
  function fixOverflow() {
    var html = document.documentElement;
    var body = document.body;
    if (html.scrollWidth > html.clientWidth) {
      body.style.overflowX = 'hidden';
    }
  }
  fixOverflow();
  window.addEventListener('resize', fixOverflow);

  // 4. SMOOTH LAZY IMAGE LOADING
  document.querySelectorAll('img[loading="lazy"]').forEach(function(img) {
    img.addEventListener('load', function() {
      this.style.animation = 'none';
      this.style.background = 'none';
    });
  });
})();
