// Global Scroll Reveal Animation System
// Uses IntersectionObserver to trigger smooth reveal animations on scroll

document.addEventListener('DOMContentLoaded', function() {
  initScrollReveal();
});

function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');
  
  if (!revealElements.length) return;

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(function(element) {
    observer.observe(element);
  });
}
