# BOSE ENTERPRISES - MODAL SYSTEM IMPLEMENTATION EXAMPLES

---

## EXAMPLE 1: CONTACT FORM MODAL

Add to any page (e.g., home.php, services.php):

```html
<!-- Modal Overlay -->
<div class="modal-overlay" data-modal-overlay="contactFormModal"></div>

<!-- Contact Form Modal -->
<div id="contactFormModal" class="modal-container form-modal">
  <div class="modal-header">
    <h2 class="modal-title">Quick Contact</h2>
    <button class="modal-close-btn" aria-label="Close modal">
      <i class="fa-solid fa-times"></i>
    </button>
  </div>

  <div class="modal-body">
    <form>
      <div class="mb-3">
        <label for="contactName" class="form-label">Full Name</label>
        <input type="text" class="form-control" id="contactName" required>
      </div>
      <div class="mb-3">
        <label for="contactEmail" class="form-label">Email Address</label>
        <input type="email" class="form-control" id="contactEmail" required>
      </div>
      <div class="mb-3">
        <label for="contactPhone" class="form-label">Phone Number</label>
        <input type="tel" class="form-control" id="contactPhone" required>
      </div>
      <div class="mb-3">
        <label for="contactMessage" class="form-label">Message</label>
        <textarea class="form-control" id="contactMessage" rows="4" required></textarea>
      </div>
    </form>
  </div>

  <div class="modal-footer">
    <button class="modal-btn modal-btn-secondary" onclick="ModalManager.close('contactFormModal')">
      Cancel
    </button>
    <button class="modal-btn modal-btn-primary">
      Send Message
    </button>
  </div>
</div>

<!-- Open Button -->
<button data-modal-open="contactFormModal" class="btn btn-primary btn-lg">
  <i class="fa-solid fa-envelope me-2"></i>Quick Contact
</button>
```

---

## EXAMPLE 2: SERVICE DETAILS MODAL

Add to services.php:

```html
<!-- Modal Overlay -->
<div class="modal-overlay" data-modal-overlay="serviceDetailsModal"></div>

<!-- Service Details Modal -->
<div id="serviceDetailsModal" class="modal-container">
  <div class="modal-header">
    <h2 class="modal-title">Service Details</h2>
    <button class="modal-close-btn" aria-label="Close modal">
      <i class="fa-solid fa-times"></i>
    </button>
  </div>

  <div class="modal-body">
    <h3>Solar EPC & Turnkey Solutions</h3>
    <p>Complete execution from design and procurement through installation, testing, and commissioning for ground-mounted and rooftop systems.</p>
    
    <h4 class="mt-4">What's Included:</h4>
    <ul>
      <li>Site assessment and design</li>
      <li>Equipment procurement</li>
      <li>Installation and assembly</li>
      <li>Testing and commissioning</li>
      <li>Performance monitoring</li>
      <li>Maintenance support</li>
    </ul>

    <h4 class="mt-4">Timeline:</h4>
    <p>Typically 3-6 months depending on project size and complexity.</p>

    <h4 class="mt-4">Investment:</h4>
    <p>Contact us for a customized quote based on your specific requirements.</p>
  </div>

  <div class="modal-footer">
    <button class="modal-btn modal-btn-secondary" onclick="ModalManager.close('serviceDetailsModal')">
      Close
    </button>
    <button class="modal-btn modal-btn-primary" onclick="ModalManager.open('contactFormModal')">
      Request Quote
    </button>
  </div>
</div>

<!-- Open Button (in service card) -->
<button data-modal-open="serviceDetailsModal" class="btn btn-outline-primary">
  Learn More
</button>
```

---

## EXAMPLE 3: PROJECT DETAILS MODAL

Add to projects.php:

```html
<!-- Modal Overlay -->
<div class="modal-overlay" data-modal-overlay="projectDetailsModal"></div>

<!-- Project Details Modal -->
<div id="projectDetailsModal" class="modal-container">
  <div class="modal-header">
    <h2 class="modal-title">Project Details</h2>
    <button class="modal-close-btn" aria-label="Close modal">
      <i class="fa-solid fa-times"></i>
    </button>
  </div>

  <div class="modal-body">
    <div class="row mb-4">
      <div class="col-md-6">
        <h4>Project Name</h4>
        <p>Nangunari Ground Mounted Solar</p>
      </div>
      <div class="col-md-6">
        <h4>Capacity</h4>
        <p>16 MW</p>
      </div>
    </div>

    <div class="row mb-4">
      <div class="col-md-6">
        <h4>Client</h4>
        <p>Renfra Energy India Pvt Ltd</p>
      </div>
      <div class="col-md-6">
        <h4>Timeline</h4>
        <p>2019-2020</p>
      </div>
    </div>

    <h4>Scope of Work</h4>
    <ul>
      <li>Pile Foundation</li>
      <li>Electrical Works</li>
      <li>Road & Fencing</li>
      <li>Module Installation</li>
      <li>Testing & Commissioning</li>
    </ul>

    <h4 class="mt-4">Key Achievements</h4>
    <ul>
      <li>On-time completion</li>
      <li>Zero safety incidents</li>
      <li>100% quality compliance</li>
      <li>Client satisfaction</li>
    </ul>
  </div>

  <div class="modal-footer">
    <button class="modal-btn modal-btn-secondary" onclick="ModalManager.close('projectDetailsModal')">
      Close
    </button>
    <button class="modal-btn modal-btn-primary" onclick="ModalManager.open('contactFormModal')">
      Discuss Similar Project
    </button>
  </div>
</div>

<!-- Open Button (in project card) -->
<button data-modal-open="projectDetailsModal" class="btn btn-outline-primary">
  View Details
</button>
```

---

## EXAMPLE 4: TEAM MEMBER MODAL

Add to team.php:

```html
<!-- Modal Overlay -->
<div class="modal-overlay" data-modal-overlay="teamMemberModal"></div>

<!-- Team Member Modal -->
<div id="teamMemberModal" class="modal-container">
  <div class="modal-header">
    <h2 class="modal-title">Team Member</h2>
    <button class="modal-close-btn" aria-label="Close modal">
      <i class="fa-solid fa-times"></i>
    </button>
  </div>

  <div class="modal-body">
    <div class="text-center mb-4">
      <div style="font-size: 4rem; color: #0d6efd; margin-bottom: 1rem;">
        <i class="fa-solid fa-user-tie"></i>
      </div>
      <h3>Karnakaran V</h3>
      <p class="text-muted">Managing Director</p>
    </div>

    <div class="row mb-4">
      <div class="col-md-6">
        <h5>Experience</h5>
        <p>22+ years</p>
      </div>
      <div class="col-md-6">
        <h5>Qualification</h5>
        <p>MBA</p>
      </div>
    </div>

    <h5>Background</h5>
    <p>Visionary leader with extensive experience in solar project development, business management, and infrastructure execution. Specializes in EPC project delivery and stakeholder management.</p>

    <h5 class="mt-4">Expertise</h5>
    <ul>
      <li>Solar EPC Project Management</li>
      <li>Infrastructure Development</li>
      <li>Business Strategy</li>
      <li>Client Relations</li>
      <li>Team Leadership</li>
    </ul>
  </div>

  <div class="modal-footer">
    <button class="modal-btn modal-btn-secondary" onclick="ModalManager.close('teamMemberModal')">
      Close
    </button>
    <button class="modal-btn modal-btn-primary" onclick="ModalManager.open('contactFormModal')">
      Connect
    </button>
  </div>
</div>

<!-- Open Button (in team card) -->
<button data-modal-open="teamMemberModal" class="btn btn-outline-primary">
  View Profile
</button>
```

---

## EXAMPLE 5: CONFIRMATION MODAL

Add to any page for confirmations:

```html
<!-- Modal Overlay -->
<div class="modal-overlay" data-modal-overlay="confirmActionModal"></div>

<!-- Confirmation Modal -->
<div id="confirmActionModal" class="modal-container confirmation-modal">
  <div class="modal-body">
    <div class="confirmation-modal__icon" style="font-size: 3rem; color: #0d6efd; margin-bottom: 1rem;">
      <i class="fa-solid fa-exclamation-circle"></i>
    </div>
    <p class="confirmation-modal__message">
      Are you sure you want to submit this form? We'll contact you shortly.
    </p>
  </div>

  <div class="modal-footer">
    <button class="modal-btn modal-btn-secondary" onclick="ModalManager.close('confirmActionModal')">
      Cancel
    </button>
    <button class="modal-btn modal-btn-primary">
      Yes, Confirm
    </button>
  </div>
</div>

<!-- Trigger Button -->
<button data-modal-open="confirmActionModal" class="btn btn-primary">
  Submit
</button>
```

---

## EXAMPLE 6: SUCCESS MESSAGE MODAL

Add after form submission:

```html
<!-- Modal Overlay -->
<div class="modal-overlay" data-modal-overlay="successModal"></div>

<!-- Success Modal -->
<div id="successModal" class="modal-container confirmation-modal">
  <div class="modal-body">
    <div class="confirmation-modal__icon" style="font-size: 3rem; color: #198754; margin-bottom: 1rem;">
      <i class="fa-solid fa-check-circle"></i>
    </div>
    <h3 style="margin-bottom: 0.5rem;">Success!</h3>
    <p class="confirmation-modal__message">
      Your message has been sent successfully. We'll contact you within 24 hours.
    </p>
  </div>

  <div class="modal-footer">
    <button class="modal-btn modal-btn-primary" onclick="ModalManager.close('successModal')">
      Close
    </button>
  </div>
</div>

<!-- Trigger with JavaScript -->
<script>
  // After form submission
  ModalManager.open('successModal');
</script>
```

---

## EXAMPLE 7: VIDEO MODAL

Add to services or projects page:

```html
<!-- Modal Overlay -->
<div class="modal-overlay" data-modal-overlay="videoModal"></div>

<!-- Video Modal -->
<div id="videoModal" class="modal-container video-modal">
  <div class="modal-header">
    <h2 class="modal-title">Project Video</h2>
    <button class="modal-close-btn" aria-label="Close modal">
      <i class="fa-solid fa-times"></i>
    </button>
  </div>

  <div class="modal-body">
    <video controls style="width: 100%; height: auto;">
      <source src="<?php echo APP_URL; ?>/public/videos/solar-background.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>
</div>

<!-- Open Button -->
<button data-modal-open="videoModal" class="btn btn-primary">
  <i class="fa-solid fa-play me-2"></i>Watch Video
</button>
```

---

## EXAMPLE 8: PRICING MODAL

Add to services page:

```html
<!-- Modal Overlay -->
<div class="modal-overlay" data-modal-overlay="pricingModal"></div>

<!-- Pricing Modal -->
<div id="pricingModal" class="modal-container">
  <div class="modal-header">
    <h2 class="modal-title">Pricing Information</h2>
    <button class="modal-close-btn" aria-label="Close modal">
      <i class="fa-solid fa-times"></i>
    </button>
  </div>

  <div class="modal-body">
    <h4>Solar EPC & Turnkey Solutions</h4>
    <p class="text-muted">Pricing varies based on project scope, size, and location.</p>

    <div class="alert alert-info mt-3">
      <strong>Typical Range:</strong> ₹40-60 lakhs per MW
    </div>

    <h5 class="mt-4">Factors Affecting Price:</h5>
    <ul>
      <li>Project capacity (MW)</li>
      <li>Site location and accessibility</li>
      <li>Ground conditions</li>
      <li>Equipment specifications</li>
      <li>Timeline requirements</li>
      <li>Additional services</li>
    </ul>

    <p class="mt-4 text-muted">
      <strong>Note:</strong> For accurate pricing, please contact us with your project details.
    </p>
  </div>

  <div class="modal-footer">
    <button class="modal-btn modal-btn-secondary" onclick="ModalManager.close('pricingModal')">
      Close
    </button>
    <button class="modal-btn modal-btn-primary" onclick="ModalManager.open('contactFormModal')">
      Get Quote
    </button>
  </div>
</div>

<!-- Open Button -->
<button data-modal-open="pricingModal" class="btn btn-outline-primary">
  View Pricing
</button>
```

---

## JAVASCRIPT INTEGRATION

### Open Modal on Page Load
```javascript
document.addEventListener('DOMContentLoaded', function() {
  // Open modal after 3 seconds
  setTimeout(function() {
    ModalManager.open('contactFormModal');
  }, 3000);
});
```

### Open Modal on Button Click
```javascript
document.getElementById('myButton').addEventListener('click', function() {
  ModalManager.open('contactFormModal');
});
```

### Chain Modals
```javascript
// Open contact form after closing service details
ModalManager.on('modalClosed', function(data) {
  if (data.modalId === 'serviceDetailsModal') {
    ModalManager.open('contactFormModal');
  }
});
```

### Form Submission
```javascript
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  // Submit form
  ModalManager.close('contactFormModal');
  ModalManager.open('successModal');
});
```

---

## BEST PRACTICES

1. **Always include overlay** - Required for backdrop
2. **Use unique IDs** - Each modal needs unique ID
3. **Include close button** - Always provide close option
4. **Test on mobile** - Verify on actual mobile devices
5. **Use semantic HTML** - Proper heading levels
6. **Add ARIA labels** - Accessibility support
7. **Provide fallback** - Content visible without JS
8. **Keep it simple** - Don't overload modals

---

## CUSTOMIZATION

### Change Animation Speed
Edit `modal-system.css`:
```css
.modal-container {
  transition: opacity 0.5s ..., /* Change 0.35s to 0.5s */
              transform 0.5s ...,
              visibility 0.5s ...;
}
```

### Change Modal Width
```css
.modal-container {
  max-width: 600px; /* Change from 90vw */
}
```

### Change Overlay Color
```css
.modal-overlay.active {
  background: rgba(0, 0, 0, 0.7); /* Change opacity */
}
```

---

## TESTING CHECKLIST

- ✅ Modal opens smoothly
- ✅ Modal closes smoothly
- ✅ Overlay click closes modal
- ✅ Close button works
- ✅ Escape key closes modal
- ✅ Scroll is locked
- ✅ Works on desktop
- ✅ Works on tablet
- ✅ Works on mobile
- ✅ Keyboard navigation works
- ✅ No console errors

---

**Status**: ✅ READY TO USE
**Version**: 1.0
