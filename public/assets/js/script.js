// Bose Enterprises - Premium Page Transitions & Section Animations
// PRODUCTION-SAFE VERSION with comprehensive error handling and fallbacks

document.addEventListener('DOMContentLoaded', function () {
  try {
    initPageTransition();
  } catch (e) {
    console.error('Page transition error:', e);
  }
  
  try {
    initSectionAnimations();
  } catch (e) {
    console.error('Section animations error:', e);
  }
  
  try {
    initScrollAnimations();
  } catch (e) {
    console.error('Scroll animations error:', e);
  }
  
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
    fixLazyImageFlickering();
  } catch (e) {
    console.error('Lazy image fix error:', e);
  }
  
  try {
    initHeroVideo();
  } catch (e) {
    console.error('Hero video error:', e);
  }
});

// =========================================================
// PAGE TRANSITION SYSTEM
// =========================================================

function initPageTransition() {
  var wrapper = document.querySelector('.page-wrapper');
  if (!wrapper) {
    console.warn('Page wrapper not found');
    return;
  }
  
  try {
    // Trigger page visible state
    requestAnimationFrame(function() {
      wrapper.classList.add('is-visible');
    });
  } catch (e) {
    console.error('Failed to add is-visible class:', e);
    // Fallback: force visibility
    wrapper.style.opacity = '1';
    wrapper.style.transform = 'translateY(0)';
  }
}

// =========================================================
// SECTION ANIMATIONS - PREMIUM REVEALS
// =========================================================

function initSectionAnimations() {
  // Apply reveal classes to common section elements
  
  try {
    // Section kickers
    var kickers = document.querySelectorAll('.be-kicker');
    if (kickers.length > 0) {
      kickers.forEach(function(el) {
        if (el && !el.classList.contains('reveal-down')) {
          el.classList.add('reveal-down');
        }
      });
    }
  } catch (e) {
    console.error('Error applying kicker animations:', e);
  }
  
  try {
    // Section titles
    var titles = document.querySelectorAll('.be-section__title, .section-title');
    if (titles.length > 0) {
      titles.forEach(function(el) {
        if (el && !el.classList.contains('reveal-up')) {
          el.classList.add('reveal-up');
        }
      });
    }
  } catch (e) {
    console.error('Error applying title animations:', e);
  }
  
  try {
    // Section subtitles
    var subtitles = document.querySelectorAll('.be-section__sub, .section-subtitle');
    if (subtitles.length > 0) {
      subtitles.forEach(function(el) {
        if (el && !el.classList.contains('reveal-up')) {
          el.classList.add('reveal-up');
        }
      });
    }
  } catch (e) {
    console.error('Error applying subtitle animations:', e);
  }
  
  try {
    // Card grids - add stagger
    var rows = document.querySelectorAll('.row');
    if (rows.length > 0) {
      rows.forEach(function(row) {
        if (!row) return;
        
        var cards = row.querySelectorAll('.be-card, .be-team-card, .be-client-card, .project-card, .capability-item, .be-stat');
        if (cards.length > 0) {
          row.classList.add('card-grid');
          cards.forEach(function(card) {
            if (card && !card.classList.contains('reveal-scale')) {
              card.classList.add('reveal-scale', 'stagger-item');
            }
          });
        }
      });
    }
  } catch (e) {
    console.error('Error applying card grid animations:', e);
  }
  
  try {
    // Gallery items
    var galleryItems = document.querySelectorAll('.gallery-item');
    if (galleryItems.length > 0) {
      galleryItems.forEach(function(item) {
        if (item && !item.classList.contains('reveal-scale')) {
          item.classList.add('reveal-scale', 'stagger-item');
        }
      });
    }
  } catch (e) {
    console.error('Error applying gallery animations:', e);
  }
  
  try {
    // Form groups
    var formGroups = document.querySelectorAll('.form-group');
    if (formGroups.length > 0) {
      formGroups.forEach(function(group) {
        if (group && !group.classList.contains('reveal-up')) {
          group.classList.add('reveal-up', 'stagger-item');
        }
      });
    }
  } catch (e) {
    console.error('Error applying form animations:', e);
  }
  
  try {
    // Images with hover effect
    var images = document.querySelectorAll('img:not(.be-logo)');
    if (images.length > 0) {
      images.forEach(function(img) {
        if (img && !img.classList.contains('hover-image')) {
          img.classList.add('hover-image');
        }
      });
    }
  } catch (e) {
    console.error('Error applying image hover effects:', e);
  }
  
  try {
    // Cards with hover effect
    var allCards = document.querySelectorAll('.be-card, .be-team-card, .be-client-card, .project-card, .capability-item');
    if (allCards.length > 0) {
      allCards.forEach(function(card) {
        if (card && !card.classList.contains('hover-card')) {
          card.classList.add('hover-card');
        }
      });
    }
  } catch (e) {
    console.error('Error applying card hover effects:', e);
  }
  
  try {
    // Buttons with hover effect
    var buttons = document.querySelectorAll('.btn');
    if (buttons.length > 0) {
      buttons.forEach(function(btn) {
        if (btn && !btn.classList.contains('hover-button')) {
          btn.classList.add('hover-button');
        }
      });
    }
  } catch (e) {
    console.error('Error applying button hover effects:', e);
  }
  
  try {
    // Links with hover effect
    var links = document.querySelectorAll('a:not(.btn)');
    if (links.length > 0) {
      links.forEach(function(link) {
        if (link && !link.classList.contains('hover-link')) {
          link.classList.add('hover-link');
        }
      });
    }
  } catch (e) {
    console.error('Error applying link hover effects:', e);
  }
}

// =========================================================
// SCROLL ANIMATIONS - INTERSECTION OBSERVER
// =========================================================

function initScrollAnimations() {
  var elementsToAnimate = document.querySelectorAll(
    '.reveal-up, .reveal-down, .reveal-left, .reveal-right, .reveal-scale, .fade-in, ' +
    '[data-be-animate], .stagger-item, .gallery-item, .form-group'
  );
  
  if (!elementsToAnimate || elementsToAnimate.length === 0) {
    console.warn('No elements to animate found');
    return;
  }

  // Check if IntersectionObserver is supported
  if (typeof IntersectionObserver === 'undefined') {
    console.warn('IntersectionObserver not supported - revealing all elements immediately');
    elementsToAnimate.forEach(function(el) {
      if (el) {
        el.classList.add('is-visible');
      }
    });
    return;
  }

  try {
    var observer = new IntersectionObserver(function (entries) {
      requestAnimationFrame(function () {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          
          var el = entry.target;
          if (!el) return;
          
          try {
            // Add is-visible class to trigger animation
            el.classList.add('is-visible');
            
            // Unobserve after animation completes
            observer.unobserve(el);
          } catch (e) {
            console.error('Error adding is-visible class:', e);
          }
        });
      });
    }, { 
      threshold: 0.1, 
      rootMargin: '0px 0px -50px 0px' 
    });

    elementsToAnimate.forEach(function (el) {
      if (el) {
        try {
          observer.observe(el);
        } catch (e) {
          console.error('Error observing element:', e);
        }
      }
    });
  } catch (e) {
    console.error('IntersectionObserver error:', e);
    // Fallback: reveal all elements immediately
    elementsToAnimate.forEach(function(el) {
      if (el) {
        el.classList.add('is-visible');
      }
    });
  }
}

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
    console.warn('IntersectionObserver not supported - animating skills immediately');
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
// LAZY IMAGE FLICKERING FIX
// =========================================================

function fixLazyImageFlickering() {
  var lazyImages = document.querySelectorAll('img[loading="lazy"]');
  if (!lazyImages || lazyImages.length === 0) return;
  
  lazyImages.forEach(function (img) {
    if (!img) return;
    
    try {
      img.addEventListener('load', function () {
        this.style.animation = 'none';
        this.style.background = 'none';
      });
    } catch (e) {
      console.error('Lazy image fix error:', e);
    }
  });
}

// =========================================================
// HERO VIDEO
// =========================================================

function initHeroVideo() {
  var video = document.getElementById('heroVideo');
  if (!video) return;
  
  try {
    // Force play the video
    video.play().catch(function(error) {
      console.log('Video autoplay prevented:', error);
    });
    
    // Ensure video is visible
    video.style.opacity = '1';
  } catch (e) {
    console.error('Hero video error:', e);
  }
}
