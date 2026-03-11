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
});

function initScrollAnimations() {
  var animated = document.querySelectorAll('[data-be-animate]');
  if (!animated.length) return;

  var animationPool = ['fadeInUp', 'fadeInDown', 'fadeInLeft', 'fadeInRight', 'scaleRotate', 'slideRotate', 'elasticBounce', 'flipIn', 'zoomSlide', 'tiltShift', 'slideSkew'];

  document.querySelectorAll('[data-be-stagger]').forEach(function (parent) {
    var step = parseInt(parent.getAttribute('data-be-stagger'), 10);
    if (!Number.isFinite(step) || step < 0) return;
    var children = parent.querySelectorAll('[data-be-animate]');
    children.forEach(function (child, index) {
      child.style.animationDelay = (index * step) + 'ms';
    });
  });

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var el = entry.target;
      var anim = el.getAttribute('data-be-animate');
      if (!anim) {
        anim = animationPool[Math.floor(Math.random() * animationPool.length)];
      }
      el.classList.add('be-inview', 'be-anim--' + anim);
      observer.unobserve(el);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -10% 0px' });

  animated.forEach(function (el) {
    observer.observe(el);
  });
}

function assignRandomHoverAnimations() {
  var hoverAnimations = ['wobble', 'swing', 'bounce'];
  var cards = document.querySelectorAll('.be-card, .be-client-card');
  cards.forEach(function (card) {
    var randomAnim = hoverAnimations[Math.floor(Math.random() * hoverAnimations.length)];
    card.classList.add('anim-' + randomAnim);
  });
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

    function getStepPx() {
      var firstCard = track.querySelector('.be-card');
      if (!firstCard) return Math.max(320, track.clientWidth);
      // Include gap by measuring delta between first two items when possible.
      var secondCard = firstCard.nextElementSibling;
      if (secondCard) {
        return Math.abs(secondCard.getBoundingClientRect().left - firstCard.getBoundingClientRect().left);
      }
      return firstCard.getBoundingClientRect().width;
    }

    function goPrev() {
      track.scrollBy({ left: -getStepPx(), behavior: 'smooth' });
    }

    function goNext() {
      track.scrollBy({ left: getStepPx(), behavior: 'smooth' });
    }

    if (btnPrev) btnPrev.addEventListener('click', goPrev);
    if (btnNext) btnNext.addEventListener('click', goNext);

    // Keyboard support when slider is focused.
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

function initCursor() {
  var cursor = document.createElement('div');
  cursor.className = 'be-cursor';
  cursor.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="8"/><line x1="12" y1="4" x2="12" y2="2"/><line x1="12" y1="22" x2="12" y2="20"/><line x1="4" y1="12" x2="2" y2="12"/><line x1="22" y1="12" x2="20" y2="12"/><circle cx="12" cy="12" r="3" class="be-cursor-pulse"/></svg>';
  document.body.appendChild(cursor);

  var mouseX = 0;
  var mouseY = 0;

  document.addEventListener('mousemove', function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
    cursor.style.opacity = '1';
  }, { passive: true });

  document.addEventListener('mouseleave', function () {
    cursor.style.opacity = '0';
  });

  document.addEventListener('mouseenter', function () {
    cursor.style.opacity = '1';
  });
}
