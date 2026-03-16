// Bose Enterprises - Smooth Modal Animation System
// Handles modal open/close with smooth animations and scroll lock

(function() {
  'use strict';

  // ============================================================
  // MODAL MANAGER
  // ============================================================
  var ModalManager = {
    activeModal: null,
    scrollbarWidth: 0,

    // Calculate scrollbar width
    getScrollbarWidth: function() {
      if (this.scrollbarWidth) return this.scrollbarWidth;
      
      var outer = document.createElement('div');
      outer.style.visibility = 'hidden';
      outer.style.overflow = 'scroll';
      document.body.appendChild(outer);
      
      var inner = document.createElement('div');
      outer.appendChild(inner);
      
      this.scrollbarWidth = outer.offsetWidth - inner.offsetWidth;
      outer.parentNode.removeChild(outer);
      
      return this.scrollbarWidth;
    },

    // Lock body scroll
    lockScroll: function() {
      var scrollbarWidth = this.getScrollbarWidth();
      document.documentElement.style.setProperty('--scrollbar-width', scrollbarWidth + 'px');
      document.body.classList.add('modal-open');
    },

    // Unlock body scroll
    unlockScroll: function() {
      document.body.classList.remove('modal-open');
      document.documentElement.style.setProperty('--scrollbar-width', '0');
    },

    // Open modal
    open: function(modalId) {
      var modal = document.getElementById(modalId);
      var overlay = document.querySelector('[data-modal-overlay="' + modalId + '"]');

      if (!modal || !overlay) {
        console.warn('Modal or overlay not found:', modalId);
        return;
      }

      // Close any active modal first
      if (this.activeModal && this.activeModal !== modalId) {
        this.close(this.activeModal);
      }

      this.activeModal = modalId;

      // Lock scroll
      this.lockScroll();

      // Trigger animations
      requestAnimationFrame(function() {
        overlay.classList.add('active');
        modal.classList.add('open');
      });

      // Emit event
      this.emit('modalOpened', { modalId: modalId });
    },

    // Close modal
    close: function(modalId) {
      var modal = document.getElementById(modalId);
      var overlay = document.querySelector('[data-modal-overlay="' + modalId + '"]');

      if (!modal || !overlay) {
        console.warn('Modal or overlay not found:', modalId);
        return;
      }

      // Start closing animation
      modal.classList.add('closing');
      modal.classList.remove('open');

      // Wait for animation to complete
      var self = this;
      setTimeout(function() {
        overlay.classList.remove('active');
        modal.classList.remove('closing');

        // Unlock scroll
        self.unlockScroll();

        // Clear active modal
        if (self.activeModal === modalId) {
          self.activeModal = null;
        }

        // Emit event
        self.emit('modalClosed', { modalId: modalId });
      }, 350);
    },

    // Toggle modal
    toggle: function(modalId) {
      var modal = document.getElementById(modalId);
      if (modal && modal.classList.contains('open')) {
        this.close(modalId);
      } else {
        this.open(modalId);
      }
    },

    // Event system
    listeners: {},
    on: function(event, callback) {
      if (!this.listeners[event]) {
        this.listeners[event] = [];
      }
      this.listeners[event].push(callback);
    },
    emit: function(event, data) {
      if (this.listeners[event]) {
        this.listeners[event].forEach(function(callback) {
          callback(data);
        });
      }
    }
  };

  // ============================================================
  // INITIALIZE MODALS
  // ============================================================
  function initModals() {
    // Close button handlers
    document.querySelectorAll('.modal-close-btn').forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        var modal = this.closest('.modal-container');
        if (modal) {
          ModalManager.close(modal.id);
        }
      });
    });

    // Overlay click to close
    document.querySelectorAll('.modal-overlay').forEach(function(overlay) {
      overlay.addEventListener('click', function(e) {
        if (e.target === this) {
          var modalId = this.getAttribute('data-modal-overlay');
          ModalManager.close(modalId);
        }
      });
    });

    // Open button handlers
    document.querySelectorAll('[data-modal-open]').forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        var modalId = this.getAttribute('data-modal-open');
        ModalManager.open(modalId);
      });
    });

    // Keyboard escape to close
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && ModalManager.activeModal) {
        ModalManager.close(ModalManager.activeModal);
      }
    });
  }

  // ============================================================
  // GALLERY LIGHTBOX
  // ============================================================
  function initGalleryLightbox() {
    var galleryItems = document.querySelectorAll('.gallery-item img');
    
    if (galleryItems.length === 0) return;

    galleryItems.forEach(function(img, index) {
      img.style.cursor = 'pointer';
      img.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Create modal if not exists
        var modalId = 'gallery-lightbox-' + index;
        var existingModal = document.getElementById(modalId);
        
        if (!existingModal) {
          createGalleryModal(modalId, this.src, this.alt);
        }
        
        ModalManager.open(modalId);
      });
    });
  }

  // Create gallery modal
  function createGalleryModal(modalId, imageSrc, imageAlt) {
    var overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.setAttribute('data-modal-overlay', modalId);

    var modal = document.createElement('div');
    modal.id = modalId;
    modal.className = 'modal-container image-modal';

    var header = document.createElement('div');
    header.className = 'modal-header';
    header.innerHTML = '<h2 class="modal-title">' + (imageAlt || 'Image') + '</h2>' +
                       '<button class="modal-close-btn" aria-label="Close modal"><i class="fa-solid fa-times"></i></button>';

    var body = document.createElement('div');
    body.className = 'modal-body';
    var img = document.createElement('img');
    img.src = imageSrc;
    img.alt = imageAlt || 'Image';
    body.appendChild(img);

    modal.appendChild(header);
    modal.appendChild(body);

    document.body.appendChild(overlay);
    document.body.appendChild(modal);

    // Reinitialize close handlers
    modal.querySelector('.modal-close-btn').addEventListener('click', function(e) {
      e.preventDefault();
      ModalManager.close(modalId);
    });

    overlay.addEventListener('click', function(e) {
      if (e.target === this) {
        ModalManager.close(modalId);
      }
    });
  }

  // ============================================================
  // INITIALIZE ON DOM READY
  // ============================================================
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      initModals();
      initGalleryLightbox();
    });
  } else {
    initModals();
    initGalleryLightbox();
  }

  // ============================================================
  // EXPOSE MODAL MANAGER TO GLOBAL SCOPE
  // ============================================================
  window.ModalManager = ModalManager;
})();
