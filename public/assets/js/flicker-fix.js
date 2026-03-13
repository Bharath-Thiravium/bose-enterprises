// Seamless animation optimizer
(function() {
  'use strict';

  var style = document.createElement('style');
  style.textContent = `
    html {
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    .be-hero__bg,
    .be-hero__bg::before,
    .be-hero__bg::after,
    [data-be-animate],
    .be-media-card,
    .be-float-card {
      transform: translateZ(0);
      backface-visibility: hidden;
    }

    img {
      image-rendering: auto;
    }

    @media (prefers-reduced-motion: reduce) {
      .be-hero__bg::before,
      .be-hero__bg::after,
      [data-be-animate] {
        animation: none !important;
        transition: none !important;
      }
    }
  `;

  document.head.appendChild(style);

  document.addEventListener('visibilitychange', function() {
    document.documentElement.classList.toggle('be-page-hidden', document.hidden);
  });
})();
