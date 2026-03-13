// Bose Enterprises - LEPL-style interactions
// - Scroll-triggered animations via IntersectionObserver
// - Service slider (3-up on desktop) using scroll-snap + buttons + autoplay
// - Skills/progress bars animate on scroll

document.addEventListener('DOMContentLoaded', function () {
  initScrollAnimations();
  assignRandomHoverAnimations();
  initSliders();
  initSkills();
  initNavbarShadow();
  initCursor();
  fixLazyImageFlickering();
  initHeroVideo();
});

function initScrollAnimations() {
  var animated = document.querySelectorAll('[data-be-animate]');
  if (!animated.length) return;

  // Removed aggressive stagger delays - elements appear smoothly
  document.querySelectorAll('[data-be-stagger]').forEach(function (parent) {
    var children = parent.querySelectorAll('[data-be-animate]');
    children.forEach(function (child) {
      child.style.animationDelay = '0ms';
    });
  });

  var observer = new IntersectionObserver(function (entries) {
    requestAnimationFrame(function () {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        // Simply make element visible - no flashy animations
        el.classList.add('be-inview');
        observer.unobserve(el);
      });
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -10% 0px' });

  animated.forEach(function (el) {
    observer.observe(el);
  });
}

function assignRandomHoverAnimations() {
  // Removed aggressive random animations for smoother, consistent behavior
  return;
}

function initSliders() {
  var sliders = document.querySelectorAll('[data-be-slider]');
  if (!sliders.length) return;

  sliders.forEach(function (slider) {
    var track = slider.querySelector('[data-be-slider-track]');
    if (!track) return;

    var btnPrev = slider.querySelector('[data-be-slider-prev]');
    var btnNext = slider.querySelector('[data-be-slider-next]');
    var interval = parseInt(slider.getAttribute('data-be-interval') || '0', 10);
    var autoplay = slider.getAttribute('data-be-autoplay') === 'true' && Number.isFinite(interval) && interval > 0;
    var pauseOnHover = slider.getAttribute('data-be-pause-hover') === 'true';

    // Smooth scroll behavior
    track.style.scrollBehavior = 'smooth';

    function getStepPx() {
      var firstCard = track.querySelector('.be-card');
      if (!firstCard) return Math.max(320, track.clientWidth);
      var secondCard = firstCard.nextElementSibling;
      if (secondCard) {
        return Math.abs(secondCard.getBoundingClientRect().left - firstCard.getBoundingClientRect().left);
      }
      return firstCard.getBoundingClientRect().width;
    }

    function goPrev() {
      requestAnimationFrame(function() {
        track.scrollBy({ left: -getStepPx(), behavior: 'smooth' });
      });
    }

    function goNext() {
      requestAnimationFrame(function() {
        track.scrollBy({ left: getStepPx(), behavior: 'smooth' });
      });
    }

    if (btnPrev) btnPrev.addEventListener('click', goPrev);
    if (btnNext) btnNext.addEventListener('click', goNext);

    slider.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    });

    var timer = null;
    function start() {
      if (!autoplay || timer) return;
      timer = window.setInterval(goNext, interval);
    }
    function stop() {
      if (!timer) return;
      window.clearInterval(timer);
      timer = null;
    }

    if (autoplay) start();

    if (pauseOnHover) {
      slider.addEventListener('mouseenter', stop);
      slider.addEventListener('mouseleave', start);
      slider.addEventListener('focusin', stop);
      slider.addEventListener('focusout', start);
    }
  });
}

function initSkills() {
  var skillsBlocks = document.querySelectorAll('[data-be-skills]');
  if (!skillsBlocks.length) return;

  var observer = new IntersectionObserver(function (entries) {
    requestAnimationFrame(function () {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var block = entry.target;
        block.querySelectorAll('.be-skill').forEach(function (skill) {
          var p = parseInt(skill.getAttribute('data-progress') || '0', 10);
          if (!Number.isFinite(p)) p = 0;
          p = Math.max(0, Math.min(100, p));
          var fill = skill.querySelector('.be-skill__fill');
          if (fill) fill.style.width = p + '%';
        });
        observer.unobserve(block);
      });
    });
  }, { threshold: 0.2, rootMargin: '0px 0px -10% 0px' });

  skillsBlocks.forEach(function (block) {
    observer.observe(block);
  });
}

function initNavbarShadow() {
  var nav = document.querySelector('.be-navbar');
  if (!nav) return;
  function onScroll() {
    if (window.scrollY > 16) nav.classList.add('be-navbar--scrolled');
    else nav.classList.remove('be-navbar--scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function fixLazyImageFlickering() {
  var lazyImages = document.querySelectorAll('img[loading="lazy"]');
  lazyImages.forEach(function (img) {
    img.addEventListener('load', function () {
      this.style.animation = 'none';
      this.style.background = 'none';
    });
  });
}

function initCursor() {
  // Removed: custom cursor with pulse animation
  // Using default browser cursor for better performance and no flicker
  return;
}

function initHeroVideo() {
  var video = document.getElementById('heroVideo');
  if (!video) return;
  
  // Force play the video
  video.play().catch(function(error) {
    console.log('Video autoplay prevented:', error);
  });
  
  // Ensure video is visible
  video.style.opacity = '1';
}
