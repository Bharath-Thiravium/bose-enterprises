// Seamless rendering optimizer - removes flicker and improves stability
(function() {
  'use strict';

  var style = document.createElement('style');
  style.textContent = `
    html {
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    /* Stable rendering - no animations causing flicker */
    .be-hero__video-bg,
    .be-hero__overlay,
    [data-be-animate],
    .be-media-card,
    .be-float-card,
    .be-card,
    .be-team-card,
    .be-client-card {
      transform: translateZ(0);
      backface-visibility: hidden;
      will-change: auto;
    }

    img {
      image-rendering: auto;
    }

    /* Disable animations for users who prefer reduced motion */
    @media (prefers-reduced-motion: reduce) {
      * {
        animation: none !important;
        transition: none !important;
      }
    }
  `;

  document.head.appendChild(style);

  /* Track page visibility for stable rendering */
  document.addEventListener('visibilitychange', function() {
    document.documentElement.classList.toggle('be-page-hidden', document.hidden);
  });
})();
