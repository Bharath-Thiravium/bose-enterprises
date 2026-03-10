# BOSE ENTERPRISES - Implementation Steps

## Phase 1: Setup & Configuration

### Step 1: Update Configuration File
**File:** `config/config.php`

```php
'app' => [
    'name' => 'BOSE ENTERPRISES - Solar EPC & Infrastructure',
    'url' => 'http://localhost/BE/Current-PHP_v1.0/Current',
    'tagline' => 'Solar & Infrastructure Project Specialists',
],
```

### Step 2: Update Meta Tags
**File:** `app/views/components/title-meta.php`

- Title: "Bose Enterprises | Solar EPC & Infrastructure Projects"
- Description: "Bose Enterprises provides solar farm construction, rooftop solar installation, electrical works, civil infrastructure and EPC solar project services across India."
- Keywords: "Solar EPC, Solar Projects, Infrastructure, Rooftop Solar, Solar Farm"

### Step 3: Update SCSS Colors
**File:** `app/assets/scss/utils/_variable.scss`

```scss
$primary-color: #FFA500;      // Solar Orange
$secondary-color: #1a3a52;    // Dark Blue
$accent-color: #27AE60;       // Green
$text-color: #333333;         // Dark Gray
$bg-color: #F5F5F5;           // Light Gray
```

---

## Phase 2: Component Updates

### Step 4: Update Navigation
**File:** `app/views/components/header/navbar.php`

**Changes:**
- Update logo to BOSE ENTERPRISES logo
- Update company name/tagline
- Update navigation menu items:
  - Home
  - About Us
  - Services
  - Team
  - Contact Us

### Step 5: Update Footer
**File:** `app/views/components/footer.php`

**Changes:**
- Company name: BOSE ENTERPRISES
- Tagline: Solar & Infrastructure Project Specialists
- Contact: +91 XXXXX XXXXX | info@boseenterprises.in
- Location: Tamil Nadu, India
- Update all footer links
- Update service links
- Update quick links

### Step 6: Update CTA Section
**File:** `app/views/components/cta.php`

**Changes:**
- Update heading to solar/infrastructure focused
- Update description
- Update button text and links

---

## Phase 3: Page Updates

### Step 7: Update Homepage
**File:** `app/views/pages/index.php`

**Sections to Update:**
1. Hero Section
   - Tagline: "Solar & Infrastructure Solutions"
   - Heading: "Turnkey Solar EPC & Infrastructure Projects"
   - Description: Company overview
   - Update all 3 hero slides

2. About Section
   - Title: "About BOSE ENTERPRISES"
   - Heading: "Solar & Infrastructure Project Specialists"
   - Description: Company background
   - Counter: 22+ Years
   - Key points: Design, Supply, Installation, Testing, Commissioning

3. Services Section
   - Update 3 service cards to 6 services (or keep 3 and link to service page)
   - Service 1: Turnkey Solar EPC Solutions
   - Service 2: Civil Infrastructure Works
   - Service 3: Electrical Works & Testing

4. How It Works Section
   - Rename to "Solar Project Expertise"
   - Update 4 tabs:
     - Solar Farm Projects
     - Ground Mounted Solar
     - Rooftop Solar Projects
     - PSS Civil Works

5. Testimonials Section
   - Keep template design
   - Update heading to "Client Success Stories"

6. Team Section
   - Update 4 team members to 6 members
   - Add: Karnakaran V, Janasekar, Manikandan, Kanagavel Nagamani, Vaira Dasan, Prabha Karan

7. FAQ Section
   - Update 4 FAQs with solar-specific questions
   - Q1: What types of solar projects do you handle?
   - Q2: Do you provide turnkey EPC solutions?
   - Q3: Do you handle electrical and civil works?
   - Q4: Do you provide solar plant maintenance?

8. Contact Section
   - Update heading: "Get in Touch with BOSE ENTERPRISES"
   - Phone: +91 XXXXX XXXXX
   - Email: info@boseenterprises.in
   - Location: Tamil Nadu, India

9. Clients Section
   - Update brand slider with:
     - Renfra Energy India Limited
     - Sterling & Wilson
     - The Hinduja Group

10. Blog Section
    - Update heading: "Solar & Infrastructure Insights"

### Step 8: Update About Page
**File:** `app/views/pages/about.php`

**Content:**
- Company overview
- Mission statement
- Team introduction
- Services overview
- Why choose us section

### Step 9: Update Services Page
**File:** `app/views/pages/service.php`

**Content:**
- List all 6 services
- Service cards with descriptions
- Links to individual service pages

### Step 10: Create Service Detail Pages
**Files:** `app/views/pages/service-single.php`

**Create 6 versions or update single template:**
1. Turnkey Solar EPC Solutions
2. Civil Infrastructure Works
3. Electrical Works – Field Side
4. Electrical Works – AC Side
5. Solar Plant Installation
6. Operation & Maintenance

**Each page should include:**
- Service title and description
- Key features/benefits
- Process/steps
- Related services
- Call to action

### Step 11: Update Team Page
**File:** `app/views/pages/team.php`

**Update 6 team members:**
1. Karnakaran V - Managing Director (22+ years, MBA)
2. Janasekar - Working Partner (14+ years, B.E. Electrical)
3. Manikandan - Senior Project Manager (12+ years, B.E. Civil)
4. Kanagavel Nagamani - Project Director (12+ years, B.E. Electrical)
5. Vaira Dasan - Project Manager (7+ years, B.E. Civil)
6. Prabha Karan - Project Manager (9+ years, B.E. Electrical)

### Step 12: Update FAQ Page
**File:** `app/views/pages/faq.php`

**Update with 4 solar-specific FAQs:**
1. What types of solar projects do you handle?
2. Do you provide turnkey EPC solutions?
3. Do you handle electrical and civil works?
4. Do you provide solar plant maintenance?

### Step 13: Update Contact Page
**File:** `app/views/pages/contact.php`

**Changes:**
- Update company contact information
- Phone: +91 XXXXX XXXXX
- Email: info@boseenterprises.in
- Location: Tamil Nadu, India
- Update form fields if needed
- Update Web3Forms API key

### Step 14: Update Testimonials Page
**File:** `app/views/pages/testimonials.php`

**Changes:**
- Keep template design
- Update heading to "Client Success Stories"
- Update testimonial content (can keep demo for now)

---

## Phase 4: Asset Updates

### Step 15: Replace Images
**Priority Order:**
1. Logo (logo1.png, logo2.png, etc.)
2. Favicon (fav-icon1.png)
3. Hero background images (header-img1.png, header-img2.png, header-img3.png, header-img4.png)
4. About section images (about-img1.png, about-img2.png)
5. Service images (service-img1.png, service-img2.png, service-img3.png)
6. Team member images (team-img1.png through team-img6.png)
7. Blog images (blog-img1.png, blog-img2.png, blog-img3.png)

**Keep:**
- All SVG icons
- Decorative elements
- Background patterns

### Step 16: Update Branding
**Changes:**
- Update company name throughout
- Update tagline throughout
- Update colors in CSS
- Update logo in header
- Update favicon

---

## Phase 5: Testing & Validation

### Step 17: Functional Testing
- [ ] All pages load without errors
- [ ] All links work correctly
- [ ] Navigation menu works
- [ ] Contact form submits
- [ ] Images display properly
- [ ] Responsive design works
- [ ] Animations work smoothly

### Step 18: Content Validation
- [ ] All company information is correct
- [ ] All team member details are accurate
- [ ] All service descriptions are complete
- [ ] FAQ answers are accurate
- [ ] Contact information is correct
- [ ] Meta tags are optimized

### Step 19: SEO Validation
- [ ] Page titles are correct
- [ ] Meta descriptions are present
- [ ] Keywords are relevant
- [ ] Images have alt text
- [ ] Links are working
- [ ] Mobile responsive

---

## File Path Corrections

### All Include Paths Need Update

**From:**
```php
<?php include('partials/title-meta.php'); ?>
<?php include('partials/head-css.php'); ?>
<?php include('partials/loader.php'); ?>
<?php include('partials/header/navbar.php'); ?>
<?php include('partials/cta.php'); ?>
<?php include('partials/footer.php'); ?>
<?php include('partials/footer-scripts.php'); ?>
```

**To:**
```php
<?php include('../components/title-meta.php'); ?>
<?php include('../components/head-css.php'); ?>
<?php include('../components/loader.php'); ?>
<?php include('../components/header/navbar.php'); ?>
<?php include('../components/cta.php'); ?>
<?php include('../components/footer.php'); ?>
<?php include('../components/footer-scripts.php'); ?>
```

---

## Quick Reference: Content Mapping

| Template Element | Bose Content |
|------------------|--------------|
| Company Name | BOSE ENTERPRISES |
| Tagline | Solar & Infrastructure Project Specialists |
| Services | 6 Solar/Infrastructure Services |
| Team Members | 6 Professionals (22+ years combined) |
| Clients | 3 Major Partners |
| Location | Tamil Nadu, India |
| Email | info@boseenterprises.in |
| Phone | +91 XXXXX XXXXX |
| Primary Color | #FFA500 (Solar Orange) |
| Secondary Color | #1a3a52 (Dark Blue) |
| Accent Color | #27AE60 (Green) |

---

## Estimated Timeline

- Phase 1 (Setup): 30 minutes
- Phase 2 (Components): 1 hour
- Phase 3 (Pages): 3-4 hours
- Phase 4 (Assets): 2-3 hours
- Phase 5 (Testing): 1 hour

**Total: 7-9 hours**

---

## Support Files

- `BOSE_ENTERPRISES_GUIDE.md` - Comprehensive guide
- `BOSE_CONTENT_REFERENCE.md` - Content reference
- `TEMPLATE_SUMMARY.md` - Template overview
- `README.md` - Project documentation

