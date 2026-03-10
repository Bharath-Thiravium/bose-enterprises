# BOSE ENTERPRISES - Website Update Guide

## Company Information

**Company Name:** BOSE ENTERPRISES
**Tagline:** Solar & Infrastructure Project Specialists
**Established:** 2019
**Location:** Tamil Nadu, India
**Contact:** info@boseenterprises.in | +91 XXXXX XXXXX

## About Company

BOSE ENTERPRISES is a growing solar professional company in South India specializing in solar power project construction and infrastructure development.

**Services Include:**
- Design
- Supply
- Installation
- Testing
- Commissioning

**Focus Areas:**
- PV Solar Projects
- Infrastructure works (roads, fencing, building construction)
- Quality & Safety
- On-time project completion
- Strong customer response
- Integrity in business

---

## Core Offerings

1. **Solar Farm Projects**
2. **Ground Mounted Solar Projects**
3. **Rooftop Solar Projects**
4. **PSS Civil Works**

---

## Services (6 Main Services)

### 1. Turnkey Solar EPC Solutions
- Pile foundation works
- Electrical installation
- Complete solar project execution
- Design, supply, installation, testing, commissioning

### 2. Civil Infrastructure Works
- Roads
- Drain systems
- Compound wall construction
- Chain link fencing
- SIB foundations
- LA foundations
- Street light foundations
- RO plant construction
- MCS works

### 3. Electrical Works – Field Side
- UG / PG cable laying
- Cable termination
- Earthing works
- SIB installation
- MV panel erection
- Lightning arrester erection
- Earth rod installation
- Earth chamber installation
- Testing: VOC testing, Earth resistance testing (ERT)
- Full commissioning support

### 4. Electrical Works – AC Side
- Equipment installation
- Transformer oil filtration
- HT cable laying
- Earthing activities
- Cable tray installation
- Electrical equipment testing
- CRM test for bus duct
- Complete commissioning support

### 5. Solar Plant Installation
- MMS structure installation
- PV module installation
- Electrical equipment installation
- Complete plant setup

### 6. Operation & Maintenance
- O&M support for solar plants
- Monitoring and maintenance

---

## Team Members (6 Members)

### 1. Karnakaran V
- **Position:** Managing Director
- **Experience:** 22+ years in solar industry
- **Qualification:** MBA Graduate

### 2. Janasekar
- **Position:** Working Partner
- **Experience:** 14+ years in solar and infrastructure projects
- **Qualification:** Bachelor of Electrical Engineering

### 3. Manikandan
- **Position:** Senior Project Manager
- **Experience:** 12+ years
- **Qualification:** Bachelor of Civil Engineering

### 4. Kanagavel Nagamani
- **Position:** Project Director
- **Experience:** 12+ years
- **Qualification:** Bachelor of Electrical Engineering

### 5. Vaira Dasan
- **Position:** Project Manager
- **Experience:** 7+ years
- **Qualification:** Bachelor of Civil Engineering

### 6. Prabha Karan
- **Position:** Project Manager
- **Experience:** 9+ years
- **Qualification:** Bachelor of Electrical Engineering

---

## Company Mission

To make a positive difference in the business of our customers through the best possible service including:
- Safe project execution
- High quality delivery
- On-time completion
- Customer satisfaction
- Competitive pricing

---

## Clients / Partners

- Renfra Energy India Limited
- Sterling & Wilson
- The Hinduja Group

---

## Homepage Structure (index.php)

1. **Hero Section** - Solar & Infrastructure Solutions tagline
2. **About BOSE ENTERPRISES** - Company overview with 22+ years expertise
3. **Our Services** - 6 service cards
4. **Solar Project Expertise** - 4 project types (Solar Farm, Ground Mounted, Rooftop, PSS Civil)
5. **Why Choose Us** - Feature cards
6. **Leadership Team** - 6 team members
7. **Our Clients** - Client logo slider
8. **Testimonials** - Keep template design
9. **FAQ** - Solar project FAQs
10. **Contact Section** - Contact form
11. **Call To Action** - CTA section

---

## Why Choose Us Section (6 Features)

✔ Experienced Solar Professionals
✔ Complete EPC Solutions
✔ Quality & Safety Focus
✔ Timely Project Delivery
✔ Infrastructure Expertise
✔ Reliable Engineering Team

---

## FAQ Content

**Q1: What types of solar projects do you handle?**
A: We specialize in solar farms, rooftop solar and ground mounted PV solar plants.

**Q2: Do you provide turnkey EPC solutions?**
A: Yes, we provide complete project execution including design, supply, installation and commissioning.

**Q3: Do you handle electrical and civil works?**
A: Yes, we provide both electrical and civil infrastructure services.

**Q4: Do you provide solar plant maintenance?**
A: Yes, we offer operation and maintenance services.

---

## Contact Details

- **Phone:** +91 XXXXX XXXXX
- **Email:** info@boseenterprises.in
- **Location:** Tamil Nadu, India
- **Form:** Use existing Web3Forms integration

---

## Design Customization (SCSS)

Update `app/assets/scss/utils/_variable.scss`:

**Primary Color:** Solar Yellow / Orange (#FFA500 or #FFB800)
**Secondary Color:** Dark Blue (#1a3a52 or #003d82)
**Accent Color:** Green (#27AE60 or #2ecc71)

---

## SEO Updates

**Page Title:**
Bose Enterprises | Solar EPC & Infrastructure Projects

**Meta Description:**
Bose Enterprises provides solar farm construction, rooftop solar installation, electrical works, civil infrastructure and EPC solar project services across India.

---

## Content Replacement Checklist

### Pages to Update:
- [ ] index.php - Homepage
- [ ] about.php - About page
- [ ] service.php - Services listing
- [ ] service-single.php - Individual service pages (6 services)
- [ ] team.php - Team members (6 members)
- [ ] faq.php - FAQ page
- [ ] contact.php - Contact page
- [ ] testimonials.php - Testimonials

### Components to Update:
- [ ] app/views/components/footer.php - Footer links and contact
- [ ] app/views/components/header/navbar.php - Navigation menu
- [ ] app/views/components/title-meta.php - Meta tags and title

### Assets to Update:
- [ ] Replace demo images with solar/infrastructure images
- [ ] Update logo in app/views/components/header/navbar.php
- [ ] Update favicon in public/assets/img/logo/

### Configuration:
- [ ] Update config/config.php with company details
- [ ] Update SCSS variables for colors
- [ ] Update Web3Forms API key in contact form

---

## File Path Corrections

All include paths should be updated from:
```php
<?php include('partials/...'); ?>
```

To:
```php
<?php include('../components/...'); ?>
```

---

## Additional Tasks

1. Replace all electricity-related terminology with solar project terminology
2. Update demo images gradually with solar/infrastructure images
3. Keep animation libraries active (GSAP, AOS)
4. Maintain responsive design
5. Ensure Bootstrap grid structure is not broken
6. Maintain PHP component include system
7. Update all links to point to correct pages
8. Test all forms and functionality

---

## Color Scheme

| Element | Color | Hex |
|---------|-------|-----|
| Primary | Solar Orange | #FFA500 |
| Secondary | Dark Blue | #1a3a52 |
| Accent | Green | #27AE60 |
| Text | Dark Gray | #333333 |
| Background | Light Gray | #F5F5F5 |

---

## Next Steps

1. Update homepage (index.php) with Bose content
2. Update about page
3. Create 6 service detail pages
4. Update team page with 6 members
5. Update FAQ with solar-specific questions
6. Update contact page
7. Update footer with company info
8. Update SCSS colors
9. Replace images gradually
10. Test all pages and functionality

