// Bose Enterprises - Essential Page Functionality
// Animation system is handled by footer-scripts.php and page-transitions.css

document.addEventListener('DOMContentLoaded', function () {
  try {
    initSliders();
  } catch (e) {
    console.error('Sliders error:', e);
  }
  
  try {
    initSkills();
  } catch (e) {
    console.error('Skills error:', e);
  }
  
  try {
    initNavbarShadow();
  } catch (e) {
    console.error('Navbar shadow error:', e);
  }
  
  try {
    initHeroVideo();
  } catch (e) {
    console.error('Hero video error:', e);
  }
});

// =========================================================
// SLIDERS
// =========================================================

function initSliders() {
  var sliders = document.querySelectorAll('[data-be-slider]');
  if (!sliders || sliders.length === 0) return;

  sliders.forEach(function (slider) {
    if (!slider) return;
    
    try {
      var track = slider.querySelector('[data-be-slider-track]');
      if (!track) return;

      var btnPrev = slider.querySelector('[data-be-slider-prev]');
      var btnNext = slider.querySelector('[data-be-slider-next]');
      var interval = parseInt(slider.getAttribute('data-be-interval') || '0', 10);
      var autoplay = slider.getAttribute('data-be-autoplay') === 'true' && Number.isFinite(interval) && interval > 0;
      var pauseOnHover = slider.getAttribute('data-be-pause-hover') === 'true';

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
    } catch (e) {
      console.error('Slider error:', e);
    }
  });
}

// =========================================================
// SKILLS
// =========================================================

function initSkills() {
  var skillsBlocks = document.querySelectorAll('[data-be-skills]');
  if (!skillsBlocks || skillsBlocks.length === 0) return;

  if (typeof IntersectionObserver === 'undefined') {
    skillsBlocks.forEach(function(block) {
      if (block) {
        block.querySelectorAll('.be-skill').forEach(function (skill) {
          var p = parseInt(skill.getAttribute('data-progress') || '0', 10);
          if (!Number.isFinite(p)) p = 0;
          p = Math.max(0, Math.min(100, p));
          var fill = skill.querySelector('.be-skill__fill');
          if (fill) fill.style.width = p + '%';
        });
      }
    });
    return;
  }

  try {
    var observer = new IntersectionObserver(function (entries) {
      requestAnimationFrame(function () {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var block = entry.target;
          if (!block) return;
          
          block.querySelectorAll('.be-skill').forEach(function (skill) {
            if (!skill) return;
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
      if (block) {
        try {
          observer.observe(block);
        } catch (e) {
          console.error('Error observing skills block:', e);
        }
      }
    });
  } catch (e) {
    console.error('Skills observer error:', e);
  }
}

// =========================================================
// NAVBAR SHADOW
// =========================================================

function initNavbarShadow() {
  var nav = document.querySelector('.be-navbar');
  if (!nav) return;
  
  function onScroll() {
    try {
      if (window.scrollY > 16) nav.classList.add('be-navbar--scrolled');
      else nav.classList.remove('be-navbar--scrolled');
    } catch (e) {
      console.error('Navbar shadow error:', e);
    }
  }
  
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// =========================================================
// HERO VIDEO
// =========================================================

function initHeroVideo() {
  var video = document.getElementById('heroVideo');
  if (!video) return;
  
  try {
    video.play().catch(function(error) {
      console.log('Video autoplay prevented:', error);
    });
    video.style.opacity = '1';
  } catch (e) {
    console.error('Hero video error:', e);
  }
}
