# BE Project - Animation Classes Implementation for Each Page

## 📄 HOME PAGE (home.php)

### Section Headers - Add These Classes:

```html
<!-- Hero Section -->
<p class="be-kicker reveal-down">Solar EPC &amp; Infrastructure Services</p>
<h1 class="be-hero__title reveal-up">Turnkey Solar EPC &amp; Infrastructure Projects</h1>
<p class="be-hero__lead mx-auto reveal-up">BOSE ENTERPRISES delivers...</p>

<!-- About Section -->
<p class="be-kicker reveal-down">About Us</p>
<h2 class="be-section__title reveal-up">Charged With Purpose. Built For Execution.</h2>
<p class="be-section__sub reveal-up">Established in 2019...</p>

<!-- Services Section -->
<p class="be-kicker reveal-down">Services</p>
<h2 class="be-section__title reveal-up">Electricity-Grade Discipline For Solar Projects</h2>
<p class="be-section__sub reveal-up">From civil infrastructure...</p>

<!-- Skills Section -->
<p class="be-kicker be-kicker--light reveal-down">Capabilities</p>
<h2 class="be-section__title be-section__title--light reveal-up">Execution Strength You Can Measure</h2>
<p class="be-section__sub be-section__sub--light reveal-up">Animated progress indicators...</p>

<!-- Team Section -->
<p class="be-kicker reveal-down">Team</p>
<h2 class="be-section__title reveal-up">Leadership With On-Site Experience</h2>
<p class="be-section__sub reveal-up">Experienced professionals...</p>

<!-- Clients Section -->
<p class="be-kicker reveal-down">Clients</p>
<h2 class="be-section__title reveal-up">Partners Who Value Reliable Delivery</h2>
<p class="be-section__sub reveal-up">A selection of clients...</p>

<!-- CTA Section -->
<h2 class="be-cta__title reveal-up">Ready to Start Your Solar Project?</h2>
<p class="be-cta__text reveal-up">Call us to discuss...</p>
```

### Grid Items - Add stagger-item:

```html
<!-- Stats Grid -->
<div class="be-stat reveal-scale stagger-item">
    <div class="be-stat__value">2019</div>
    <div class="be-stat__label">Established</div>
</div>

<!-- Team Cards -->
<div class="be-team-card reveal-scale stagger-item">
    <div class="be-team-card__avatar"><i class="fa-solid fa-user-tie"></i></div>
    <h3 class="be-team-card__name">Name</h3>
    <p class="be-team-card__role">Role</p>
</div>

<!-- Client Cards -->
<div class="be-client-card reveal-scale stagger-item">
    <div class="be-client-card__logo">...</div>
    <div class="be-client-card__name">Company</div>
</div>
```

### Two-Column Layout:

```html
<div class="row align-items-center g-4">
    <div class="col-lg-6 reveal-left">
        <picture class="about-image-wrapper">
            <img src="..." alt="..." class="about-image">
        </picture>
    </div>
    <div class="col-lg-6 reveal-right">
        <div class="be-panel">
            <h3 class="be-panel__title reveal-up">Our Mission</h3>
            <p class="reveal-up">Our mission is to deliver...</p>
        </div>
        <div class="be-bullets mt-4">
            <div class="be-bullet stagger-item reveal-up">
                <i class="fa-solid fa-shield-halved"></i>
                <span>Safety-first execution</span>
            </div>
            <!-- More bullets... -->
        </div>
    </div>
</div>
```

---

## 📄 ABOUT PAGE (about.php)

### Section Headers:

```html
<p class="be-kicker reveal-down">About BOSE ENTERPRISES</p>
<h1 class="be-section__title reveal-up">Our Story, Our Values, Our Commitment</h1>
<p class="be-section__sub reveal-up">Founded in 2019...</p>

<!-- Company Overview Section -->
<p class="be-kicker reveal-down">Company Overview</p>
<h2 class="be-section__title reveal-up">Building Solar Infrastructure With Precision</h2>
<p class="be-section__sub reveal-up">BOSE ENTERPRISES is...</p>

<!-- Values Section -->
<p class="be-kicker reveal-down">Our Values</p>
<h2 class="be-section__title reveal-up">Principles That Guide Our Work</h2>
<p class="be-section__sub reveal-up">Every project reflects...</p>

<!-- Team Section -->
<p class="be-kicker reveal-down">Leadership Team</p>
<h2 class="be-section__title reveal-up">Experienced Professionals</h2>
<p class="be-section__sub reveal-up">Our team brings...</p>
```

### Images and Cards:

```html
<!-- Company Image -->
<div class="col-lg-6 reveal-left">
    <picture class="about-image-wrapper">
        <img src="..." alt="Company" class="about-image">
    </picture>
</div>

<!-- Company Info -->
<div class="col-lg-6 reveal-right">
    <div class="company-snapshot-card">
        <div class="be-snapshot">
            <div class="be-snapshot__item snapshot-item reveal-up">
                <span>Founded</span>
                <strong>2019</strong>
            </div>
            <div class="be-snapshot__item snapshot-item reveal-up">
                <span>Headquarters</span>
                <strong>Dindigul</strong>
            </div>
            <!-- More items... -->
        </div>
    </div>
</div>

<!-- Team Cards -->
<div class="be-team-card reveal-scale stagger-item">
    <div class="be-team-card__avatar"><i class="fa-solid fa-user-tie"></i></div>
    <h3 class="be-team-card__name">Name</h3>
    <p class="be-team-card__role">Role</p>
</div>
```

---

## 📄 SERVICES PAGE (services.php)

### Section Headers:

```html
<p class="be-kicker reveal-down">Our Services</p>
<h1 class="be-section__title reveal-up">Complete Solar Solutions</h1>
<p class="be-section__sub reveal-up">From design to commissioning...</p>

<!-- Service Category -->
<p class="be-kicker reveal-down">Solar EPC</p>
<h2 class="be-section__title reveal-up">End-to-End Solar Projects</h2>
<p class="be-section__sub reveal-up">We handle every aspect...</p>
```

### Service Cards:

```html
<!-- Service Cards Grid -->
<div class="row g-4">
    <div class="col-lg-4 col-md-6">
        <div class="be-card stagger-item">
            <div class="be-card__icon"><i class="fa-solid fa-solar-panel"></i></div>
            <h3 class="be-card__title">Solar EPC</h3>
            <p class="be-card__text">Complete solar solutions...</p>
        </div>
    </div>
    
    <div class="col-lg-4 col-md-6">
        <div class="be-card stagger-item">
            <div class="be-card__icon"><i class="fa-solid fa-helmet-safety"></i></div>
            <h3 class="be-card__title">Civil Works</h3>
            <p class="be-card__text">Infrastructure development...</p>
        </div>
    </div>
    
    <div class="col-lg-4 col-md-6">
        <div class="be-card stagger-item">
            <div class="be-card__icon"><i class="fa-solid fa-plug-circle-bolt"></i></div>
            <h3 class="be-card__title">Electrical</h3>
            <p class="be-card__text">Electrical installation...</p>
        </div>
    </div>
    <!-- More cards... -->
</div>
```

---

## 📄 PROJECTS PAGE (projects.php)

### Section Headers:

```html
<p class="be-kicker reveal-down">Our Work</p>
<h1 class="be-section__title reveal-up">Featured Projects</h1>
<p class="be-section__sub reveal-up">Successful solar installations...</p>

<!-- Year Section -->
<h3 class="timeline-year__title reveal-up">2024</h3>
```

### Project Cards:

```html
<!-- Projects Grid -->
<div class="projects-grid">
    <div class="project-card stagger-item">
        <div class="project-card__header">
            <h3 class="project-card__title">Project Name</h3>
            <span class="project-card__capacity">500 kW</span>
        </div>
        <p class="project-card__client">Client Name</p>
        <div class="project-card__scope">
            <p class="project-card__scope-title">Scope:</p>
            <ul class="project-card__scope-list">
                <li>Civil works</li>
                <li>Electrical installation</li>
                <li>Commissioning</li>
            </ul>
        </div>
    </div>
    <!-- More projects... -->
</div>
```

### Capabilities:

```html
<!-- Capabilities Grid -->
<div class="capabilities-grid">
    <div class="capability-item stagger-item">
        <div class="capability-item__icon"><i class="fa-solid fa-solar-panel"></i></div>
        <h3 class="capability-item__title">Solar EPC</h3>
        <p class="capability-item__desc">Complete solar solutions...</p>
    </div>
    <!-- More capabilities... -->
</div>
```

---

## 📄 GALLERY PAGE (gallery.php)

### Section Headers:

```html
<p class="be-kicker reveal-down">Gallery</p>
<h1 class="be-section__title reveal-up">Project Gallery</h1>
<p class="be-section__sub reveal-up">Visual showcase of our work...</p>
```

### Gallery Items:

```html
<!-- Gallery Grid -->
<div class="gallery-grid">
    <div class="gallery-item">
        <img src="..." alt="Project Image 1" loading="lazy">
    </div>
    
    <div class="gallery-item">
        <img src="..." alt="Project Image 2" loading="lazy">
    </div>
    
    <div class="gallery-item">
        <img src="..." alt="Project Image 3" loading="lazy">
    </div>
    
    <!-- More gallery items... -->
    <!-- Each gets 0.08s stagger delay automatically -->
</div>
```

---

## 📄 TEAM PAGE (team.php)

### Section Headers:

```html
<p class="be-kicker reveal-down">Our Team</p>
<h1 class="be-section__title reveal-up">Meet Our Experts</h1>
<p class="be-section__sub reveal-up">Experienced professionals...</p>

<!-- Department Section -->
<p class="be-kicker reveal-down">Management</p>
<h2 class="be-section__title reveal-up">Leadership Team</h2>
<p class="be-section__sub reveal-up">Guiding our vision...</p>
```

### Team Cards:

```html
<!-- Team Grid -->
<div class="row g-4">
    <div class="col-lg-4 col-md-6">
        <div class="be-team-card stagger-item">
            <div class="be-team-card__avatar"><i class="fa-solid fa-user-tie"></i></div>
            <h3 class="be-team-card__name">Name</h3>
            <p class="be-team-card__role">Position</p>
            <p class="be-team-card__meta">Experience</p>
            <p class="be-team-card__desc">Brief bio...</p>
        </div>
    </div>
    
    <div class="col-lg-4 col-md-6">
        <div class="be-team-card stagger-item">
            <!-- More team members... -->
        </div>
    </div>
    <!-- More team cards... -->
</div>
```

---

## 📄 CONTACT PAGE (contact.php)

### Section Headers:

```html
<p class="be-kicker reveal-down">Get In Touch</p>
<h1 class="be-section__title reveal-up">Contact Us</h1>
<p class="be-section__sub reveal-up">We'd love to hear from you...</p>

<!-- Contact Info Section -->
<p class="be-kicker reveal-down">Contact Information</p>
<h2 class="be-section__title reveal-up">Reach Out To Us</h2>
<p class="be-section__sub reveal-up">Multiple ways to connect...</p>
```

### Contact Form:

```html
<!-- Contact Form -->
<form method="POST" action="<?php echo APP_URL; ?>?page=contact" class="contact-form">
    <div class="form-group">
        <label for="name">Full Name</label>
        <input type="text" id="name" name="name" class="form-control" required>
    </div>
    
    <div class="form-group">
        <label for="email">Email Address</label>
        <input type="email" id="email" name="email" class="form-control" required>
    </div>
    
    <div class="form-group">
        <label for="phone">Phone Number</label>
        <input type="tel" id="phone" name="phone" class="form-control">
    </div>
    
    <div class="form-group">
        <label for="subject">Subject</label>
        <input type="text" id="subject" name="subject" class="form-control" required>
    </div>
    
    <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" name="message" class="form-control" rows="5" required></textarea>
    </div>
    
    <button type="submit" class="btn btn-primary btn-lg reveal-up">Send Message</button>
</form>
```

### Contact Info Cards:

```html
<!-- Contact Info Grid -->
<div class="row g-4">
    <div class="col-lg-4 col-md-6">
        <div class="be-card stagger-item">
            <div class="be-card__icon"><i class="fa-solid fa-phone"></i></div>
            <h3 class="be-card__title">Phone</h3>
            <p class="be-card__text">+91-99400 40082</p>
        </div>
    </div>
    
    <div class="col-lg-4 col-md-6">
        <div class="be-card stagger-item">
            <div class="be-card__icon"><i class="fa-solid fa-envelope"></i></div>
            <h3 class="be-card__title">Email</h3>
            <p class="be-card__text">info@boseenterprises.com</p>
        </div>
    </div>
    
    <div class="col-lg-4 col-md-6">
        <div class="be-card stagger-item">
            <div class="be-card__icon"><i class="fa-solid fa-map-pin"></i></div>
            <h3 class="be-card__title">Address</h3>
            <p class="be-card__text">Dindigul, Tamil Nadu</p>
        </div>
    </div>
</div>
```

---

## ✅ IMPLEMENTATION CHECKLIST

For each page, ensure:

- [ ] Section headers have reveal-down (kicker) and reveal-up (title, subtitle)
- [ ] Images have reveal-left or reveal-right
- [ ] Grid items have stagger-item class
- [ ] Gallery items have gallery-item class
- [ ] Form fields have form-group class
- [ ] All animation classes are added
- [ ] No console errors
- [ ] Animations work on scroll
- [ ] Mobile animations work
- [ ] Hover effects work

---

## 🎯 QUICK COPY-PASTE TEMPLATES

### Template 1: Section Header
```html
<div class="be-section__head">
    <p class="be-kicker reveal-down">Label</p>
    <h2 class="be-section__title reveal-up">Heading</h2>
    <p class="be-section__sub reveal-up">Subtitle</p>
</div>
```

### Template 2: Two-Column Layout
```html
<div class="row align-items-center g-4">
    <div class="col-lg-6 reveal-left">
        <img src="..." alt="...">
    </div>
    <div class="col-lg-6 reveal-right">
        <h3 class="reveal-up">Heading</h3>
        <p class="reveal-up">Content</p>
    </div>
</div>
```

### Template 3: Grid Items
```html
<div class="row g-4">
    <div class="col-lg-4 col-md-6">
        <div class="be-card stagger-item">
            <!-- Content -->
        </div>
    </div>
    <!-- Repeat for each item -->
</div>
```

### Template 4: Gallery
```html
<div class="gallery-grid">
    <div class="gallery-item">
        <img src="..." alt="...">
    </div>
    <!-- Repeat for each image -->
</div>
```

### Template 5: Form
```html
<form>
    <div class="form-group">
        <label for="field">Label</label>
        <input type="text" id="field" class="form-control">
    </div>
    <!-- Repeat for each field -->
</form>
```

---

## 📞 NEED HELP?

Enable debug mode in browser console:
```javascript
BEAnimations.debug(true);
```

Then reload the page to see detailed logs of what's happening.
