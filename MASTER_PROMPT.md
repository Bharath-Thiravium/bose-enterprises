# MASTER PROMPT FOR AMAZON Q - BOSE ENTERPRISES WEBSITE

## Quick Reference Guide

Use this prompt when you need Amazon Q to make modifications to the Bose Enterprises website while maintaining UI/UX integrity.

---

## MASTER INSTRUCTION PROMPT

```
You are working inside a PHP website template project for "BOSE ENTERPRISES".

Your task is to modify and maintain this professional corporate website for a solar infrastructure company without breaking the existing design, layout, animations, or responsive structure.

IMPORTANT RULES:

1. DO NOT modify the CSS layout structure or animations
2. DO NOT remove any Bootstrap classes or JavaScript plugins
3. ONLY update text content, headings, sections, icons, and images
4. Maintain the same section structure used in the template
5. Optimize all text for professional corporate tone and SEO
6. Ensure all pages use solar energy and infrastructure context

COMPANY DETAILS:

Company Name: BOSE ENTERPRISES
Established: 2019
Industry: Solar Power Infrastructure & EPC Services
Location: South India

About: BOSE ENTERPRISES is a growing solar infrastructure company specializing in solar power project construction and EPC services. The company provides design, supply, installation, testing, and commissioning services primarily for PV solar projects along with infrastructure and electrical works.

Core Values:
• Quality execution
• Safety standards
• Timely project delivery
• Technical excellence
• Customer satisfaction

MAIN SERVICES:

1. Solar EPC & Turnkey Solutions - Design, engineering, procurement, installation, testing and commissioning of solar power plants including ground mounted solar farms and rooftop solar systems.

2. Solar Farm Civil Works - Construction of roads, drains, compound walls, fencing works, inverter foundations, transformer foundations, and switchyard civil infrastructure.

3. Electrical Installation Works - UG and PG cable laying, cable termination, earthing systems, panel erection, lightning arrestor installation, and electrical equipment installation.

4. AC Side Electrical Works - Transformer installation, HT cable laying, cable tray works, transformer oil filtration, equipment testing and full commissioning support.

5. Solar Plant Installation - Installation of MMS structures, PV modules, electrical equipment, inverter systems, and plant infrastructure.

6. Operation & Maintenance - End-to-end maintenance and operational support for solar power plants including inspection, testing, and performance optimization.

MISSION STATEMENT:

"Our mission is to deliver high-quality solar infrastructure solutions by ensuring safety, technical excellence, and timely project completion while providing maximum value and satisfaction to our customers."

LEADERSHIP TEAM:

- Karnakaran V (Managing Director, 22+ years, MBA)
- Janasekar (Working Partner, 14+ years, B.E. Electrical)
- Manikandan (Senior Project Manager, 12+ years, B.E. Civil)
- Kanagavel Nagamani (Project Director, 12+ years, B.E. Electrical)
- Vaira Dasan (Project Manager, 7+ years, B.E. Civil)
- Prabha Karan (Project Manager, 9+ years, B.E. Electrical)

CLIENTS/PARTNERS:

- RENFRA ENERGY INDIA LIMITED
- STERLING & WILSON
- THE HINDUJA GROUP

PAGES TO CUSTOMIZE:

- index.php (home page)
- about.php
- services.php
- team.php
- contact.php

SEO OPTIMIZATION:

Title: BOSE ENTERPRISES | Solar Installation and Commisioning Contractor  Company
Meta Description: BOSE ENTERPRISES is a leading solar infrastructure and EPC service provider specializing in solar farm construction, electrical installation, and commissioning services across India.
Keywords: solar EPC contractor India, solar farm construction, solar infrastructure company, solar power installation India, solar engineering company

FINAL GOAL:

Transform/maintain this template as a modern corporate website for BOSE ENTERPRISES (Solar EPC Company) while keeping the template structure, animations, and responsiveness intact. Make all content professional, SEO friendly, and suitable for a renewable energy company website.
```

---

## COMMON MODIFICATION SCENARIOS

### Scenario 1: Update Service Descriptions
**Instruction:** "Update the service descriptions on the services page to reflect [new service details]. Keep the same card layout and icons."

### Scenario 2: Add New Team Member
**Instruction:** "Add a new team member [Name] with designation [Title], [X] years experience, and [Qualification]. Use the same card format as existing team members."

### Scenario 3: Update Contact Information
**Instruction:** "Update the contact information on the contact page with [new phone], [new email], and [new address]. Keep the same layout and styling."

### Scenario 4: Modify Homepage Content
**Instruction:** "Update the homepage hero section headline to '[new headline]' and subheading to '[new subheading]'. Keep all animations and button styling intact."

### Scenario 5: Add New Client/Partner
**Instruction:** "Add [Company Name] to the clients section on the homepage. Use the same placeholder card format as existing clients."

---

## FILE LOCATIONS

- **Homepage:** `app/views/pages/home.php`
- **About Page:** `app/views/pages/about.php`
- **Services Page:** `app/views/pages/services.php`
- **Team Page:** `app/views/pages/team.php`
- **Contact Page:** `app/views/pages/contact.php`
- **Navigation:** `app/views/components/partials/header/navbar.php`
- **Footer:** `app/views/components/partials/footer.php`
- **Meta Tags:** `app/views/components/partials/head-meta.php`
- **Styling:** `public/assets/css/style.css`
- **JavaScript:** `public/assets/js/script.js`
- **Configuration:** `config/config.php`

---

## IMPORTANT NOTES

1. **Never modify CSS structure** - All styling is handled by CSS variables and classes
2. **Keep animations intact** - JavaScript animations are critical for user experience
3. **Maintain responsive design** - All Bootstrap classes must remain unchanged
4. **Use semantic HTML** - Keep proper heading hierarchy and structure
5. **SEO optimization** - Always include proper meta tags and descriptions
6. **Professional tone** - All content should be corporate and professional
7. **Solar context** - All examples and descriptions should relate to solar infrastructure

---

## TESTING CHECKLIST

After modifications:
- [ ] All pages load without errors
- [ ] Navigation menu works correctly
- [ ] Animations display smoothly
- [ ] Mobile responsive design works
- [ ] All links are functional
- [ ] Meta tags are properly set
- [ ] Content is professional and accurate
- [ ] No CSS or JS errors in console

---

## QUICK LINKS

- **Website URL:** `http://localhost/BE/Bose Enterprises/`
- **Implementation Guide:** `IMPLEMENTATION_GUIDE.md`
- **Config File:** `config/config.php`
- **Main CSS:** `public/assets/css/style.css`

---

## VERSION HISTORY

- **v1.0** - Initial implementation with 5 main pages and advanced styling
- **v1.1** - Added SEO optimization and meta tags
- **v1.2** - Enhanced animations and interactive features

---

**Last Updated:** 2024
**Maintained By:** Development Team
