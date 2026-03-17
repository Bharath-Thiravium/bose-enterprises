// Bose Enterprises - Premium Motion System
// - Unified scroll-triggered animations via IntersectionObserver
// - Staggered reveal for grids and card sections
// - Service slider with smooth scroll-snap
// - Skills/progress bars animate on scroll
// - Premium hover micro-interactions

document.addEventListener('DOMContentLoaded', function () {
  initScrollAnimations();
  initSliders();
  initSkills();
  initNavbarShadow();
  fixLazyImageFlickering();
  initHeroVideo();
  initPopupScrollAnimations();
  initMediaCardAnimations();
});

// ============================================================
// UNIFIED SCROLL REVEAL ANIMATIONS
// ============================================================
function initScrollAnimations() {
  var animated = document.querySelectorAll('[data-be-animate]');
  if (!animated.length) return;

  // Apply stagger delays to children if parent has data-be-stagger
  document.querySelectorAll('[data-be-stagger]').forEach(function (parent) {
    var staggerDelay = parseInt(parent.getAttribute('data-be-stagger') || '80', 10);
    var children = parent.querySelectorAll('[data-be-animate]');
    
    children.forEach(function (child, index) {
      var delay = index * staggerDelay;
      child.style.setProperty('--stagger-delay', delay + 'ms');
    });
  });

  // IntersectionObserver for smooth reveal
  var observer = new IntersectionObserver(function (entries) {
    requestAnimationFrame(function () {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        
        var el = entry.target;
        var delay = el.style.getPropertyValue('--stagger-delay') || '0ms';
        
        // Apply delay via CSS custom property
        el.style.animationDelay = delay;
        el.classList.add('be-inview');
        
        observer.unobserve(el);
      });
    });
  }, { 
    threshold: 0.08,
    rootMargin: '0px 0px -8% 0px'
  });

  animated.forEach(function (el) {
    observer.observe(el);
  });

  // Premium scroll reveal animations for home page
  initPremiumRevealAnimations();
}

// ============================================================
// MEDIA CARD SCROLL ANIMATIONS
// ============================================================
function initMediaCardAnimations() {
  var mediaCards = document.querySelectorAll('.be-media-card');
  if (!mediaCards.length) return;

  var mediaObserver = new IntersectionObserver(function (entries) {
    requestAnimationFrame(function () {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        
        entry.target.classList.add('active');
        mediaObserver.unobserve(entry.target);
      });
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  mediaCards.forEach(function (el) {
    mediaObserver.observe(el);
  });
}
function initPopupScrollAnimations() {
  var popupElements = document.querySelectorAll('.reveal-popup');
  if (!popupElements.length) return;

  var popupObserver = new IntersectionObserver(function (entries) {
    requestAnimationFrame(function () {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        
        // Add active class to trigger animation
        entry.target.classList.add('active');
        
        // Unobserve after animation triggers (one-time only)
        popupObserver.unobserve(entry.target);
      });
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  popupElements.forEach(function (el) {
    popupObserver.observe(el);
  });
}

// ============================================================
// PREMIUM SCROLL REVEAL ANIMATIONS
// ============================================================
function initPremiumRevealAnimations() {
  var revealElements = document.querySelectorAll('.reveal-left, .reveal-right, .reveal-up');
  if (!revealElements.length) return;

  var revealObserver = new IntersectionObserver(function (entries) {
    requestAnimationFrame(function () {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        
        // Animation already plays via CSS, just unobserve
        revealObserver.unobserve(entry.target);
      });
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -10% 0px'
  });

  revealElements.forEach(function (el) {
    revealObserver.observe(el);
  });
}

// ============================================================
// SERVICE SLIDER
// ============================================================
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

// ============================================================
// SKILLS / PROGRESS BARS
// ============================================================
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
          if (fill) {
            fill.style.width = p + '%';
          }
        });
        
        observer.unobserve(block);
      });
    });
  }, { 
    threshold: 0.15,
    rootMargin: '0px 0px -8% 0px'
  });

  skillsBlocks.forEach(function (block) {
    observer.observe(block);
  });
}

// ============================================================
// NAVBAR SHADOW ON SCROLL
// ============================================================
function initNavbarShadow() {
  var nav = document.querySelector('.be-navbar');
  if (!nav) return;
  
  function onScroll() {
    if (window.scrollY > 16) {
      nav.classList.add('be-navbar--scrolled');
    } else {
      nav.classList.remove('be-navbar--scrolled');
    }
  }
  
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ============================================================
// FIX LAZY IMAGE FLICKERING
// ============================================================
function fixLazyImageFlickering() {
  var lazyImages = document.querySelectorAll('img[loading="lazy"]');
  lazyImages.forEach(function (img) {
    img.addEventListener('load', function () {
      this.style.animation = 'none';
      this.style.background = 'none';
    });
  });
}

// ============================================================
// HERO VIDEO AUTOPLAY
// ============================================================
function initHeroVideo() {
  var video = document.getElementById('heroVideo');
  if (!video) return;
  
  video.play().catch(function(error) {
    console.log('Video autoplay prevented:', error);
  });
  
  video.style.opacity = '1';
}
