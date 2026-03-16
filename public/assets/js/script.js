// Bose Enterprises - Premium Page Transitions & Section Animations
// - Smooth page fade + slide transitions
// - Scroll-triggered section reveals with IntersectionObserver
// - Service slider with autoplay
// - Skills/progress bars animate on scroll

document.addEventListener('DOMContentLoaded', function () {
  initPageTransition();
  initSectionAnimations();
  initScrollAnimations();
  assignRandomHoverAnimations();
  initSliders();
  initSkills();
  initNavbarShadow();
  initCursor();
  fixLazyImageFlickering();
  initHeroVideo();
});

// =========================================================
// PAGE TRANSITION SYSTEM
// =========================================================

function initPageTransition() {
  var wrapper = document.querySelector('.page-wrapper');
  if (!wrapper) return;
  
  // Trigger page visible state
  requestAnimationFrame(function() {
    wrapper.classList.add('is-visible');
  });
}

// =========================================================
// SECTION ANIMATIONS - PREMIUM REVEALS
// =========================================================

function initSectionAnimations() {
  // Apply reveal classes to common section elements
  
  // Section kickers
  document.querySelectorAll('.be-kicker').forEach(function(el) {
    if (!el.classList.contains('reveal-down')) {
      el.classList.add('reveal-down');
    }
  });
  
  // Section titles
  document.querySelectorAll('.be-section__title, .section-title').forEach(function(el) {
    if (!el.classList.contains('reveal-up')) {
      el.classList.add('reveal-up');
    }
  });
  
  // Section subtitles
  document.querySelectorAll('.be-section__sub, .section-subtitle').forEach(function(el) {
    if (!el.classList.contains('reveal-up')) {
      el.classList.add('reveal-up');
    }
  });
  
  // Card grids - add stagger
  document.querySelectorAll('.row').forEach(function(row) {
    var cards = row.querySelectorAll('.be-card, .be-team-card, .be-client-card, .project-card, .capability-item, .be-stat');
    if (cards.length > 0) {
      row.classList.add('card-grid');
      cards.forEach(function(card) {
        if (!card.classList.contains('reveal-scale')) {
          card.classList.add('reveal-scale', 'stagger-item');
        }
      });
    }
  });
  
  // Gallery items
  document.querySelectorAll('.gallery-item').forEach(function(item) {
    if (!item.classList.contains('reveal-scale')) {
      item.classList.add('reveal-scale', 'stagger-item');
    }
  });
  
  // Form groups
  document.querySelectorAll('.form-group').forEach(function(group) {
    if (!group.classList.contains('reveal-up')) {
      group.classList.add('reveal-up', 'stagger-item');
    }
  });
  
  // Images with hover effect
  document.querySelectorAll('img:not(.be-logo)').forEach(function(img) {
    if (!img.classList.contains('hover-image')) {
      img.classList.add('hover-image');
    }
  });
  
  // Cards with hover effect
  document.querySelectorAll('.be-card, .be-team-card, .be-client-card, .project-card, .capability-item').forEach(function(card) {
    if (!card.classList.contains('hover-card')) {
      card.classList.add('hover-card');
    }
  });
  
  // Buttons with hover effect
  document.querySelectorAll('.btn').forEach(function(btn) {
    if (!btn.classList.contains('hover-button')) {
      btn.classList.add('hover-button');
    }
  });
  
  // Links with hover effect
  document.querySelectorAll('a:not(.btn)').forEach(function(link) {
    if (!link.classList.contains('hover-link')) {
      link.classList.add('hover-link');
    }
  });
}

// =========================================================
// SCROLL ANIMATIONS - INTERSECTION OBSERVER
// =========================================================

function initScrollAnimations() {
  var elementsToAnimate = document.querySelectorAll(
    '.reveal-up, .reveal-down, .reveal-left, .reveal-right, .reveal-scale, .fade-in, ' +
    '[data-be-animate], .stagger-item, .gallery-item, .form-group'
  );
  
  if (!elementsToAnimate.length) return;

  var observer = new IntersectionObserver(function (entries) {
    requestAnimationFrame(function () {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        
        var el = entry.target;
        
        // Add is-visible class to trigger animation
        el.classList.add('is-visible');
        
        // Unobserve after animation completes
        observer.unobserve(el);
      });
    });
  }, { 
    threshold: 0.1, 
    rootMargin: '0px 0px -50px 0px' 
  });

  elementsToAnimate.forEach(function (el) {
    observer.observe(el);
  });
}

function assignRandomHoverAnimations() {
  // Removed: aggressive random animations for smoother, consistent behavior
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
