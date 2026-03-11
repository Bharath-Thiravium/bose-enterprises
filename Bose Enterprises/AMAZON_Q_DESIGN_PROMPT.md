# MASTER PROMPT FOR AMAZON Q - APPLY LEPL DESIGN PATTERN TO BOSE ENTERPRISES

## OBJECTIVE
Transform the BOSE ENTERPRISES PHP website to match the professional design pattern and layout structure of the LEPL website while maintaining all existing company content and information.

## DESIGN PATTERN ANALYSIS FROM LEPL WEBSITE

### Key Design Elements to Implement:
1. **Sticky Header with Contact Info** - Top bar with phone and email
2. **Professional Navigation** - Horizontal menu with logo and company name
3. **Hero Section** - Full-width with company logos/images
4. **Smooth Animations** - Fade-in effects on scroll (fadeInUp, fadeInDown)
5. **Service Slider** - Horizontal carousel for services with 3 visible items
6. **Team Section** - Grid layout with numbered team member cards
7. **Client Logos Section** - Grid display of client/partner logos
8. **Skills/Progress Bars** - Animated progress indicators
9. **CTA Section** - Call-to-action with phone icon and messaging
10. **Footer** - Multi-column layout with links and information

### Color Scheme:
- Primary: White background with dark text
- Accent: Blue (#0d6efd or similar)
- Dark sections: Dark gray/charcoal backgrounds
- Text: Professional dark gray for body text

### Typography:
- Font Family: Rajdhani, Rubik (Google Fonts)
- Headings: Bold, uppercase for section titles
- Body: Regular weight, readable line-height

### Layout Patterns:
- Container-based layout with max-width
- Flexbox for alignment
- Grid for multi-column sections
- Responsive breakpoints for mobile/tablet/desktop

## IMPLEMENTATION REQUIREMENTS

### 1. UPDATE HEADER COMPONENT
- Add sticky top bar with contact information (phone, email)
- Display social media icons (Facebook, Twitter, LinkedIn, Instagram)
- Add company logo and name side-by-side
- Implement horizontal navigation menu
- Add hamburger menu for mobile

### 2. UPDATE HERO SECTION
- Full-width background with gradient or image
- Company name and tagline prominently displayed
- Add company logo images in hero
- Include call-to-action buttons
- Implement fade-in animations on load

### 3. CREATE SERVICE SLIDER
- Convert static service cards to horizontal carousel/slider
- Show 3 services visible at once on desktop
- Add navigation arrows for carousel
- Include service icons and descriptions
- Implement auto-play with pause on hover

### 4. REDESIGN TEAM SECTION
- Create numbered team member cards (01, 02, 03, etc.)
- Display member photo, name, designation, experience
- Arrange in grid layout (2-3 columns)
- Add hover effects with image overlay
- Include staggered fade-in animations

### 5. ADD CLIENT SECTION
- Create grid layout for client logos
- Display 4-6 clients per row on desktop
- Add hover effects on client cards
- Include company name and description
- Implement image overlay on hover

### 6. ADD SKILLS/PROGRESS SECTION
- Create animated progress bars
- Show percentage values that animate on scroll
- Include skill titles (Solar Projects, Electrical Infrastructure, etc.)
- Use smooth animation transitions

### 7. UPDATE CTA SECTION
- Add phone icon with call-to-action
- Display prominent phone number
- Include descriptive text
- Add background image
- Implement hover effects

### 8. REDESIGN FOOTER
- Multi-column layout (4-5 columns)
- Include company info, quick links, contact details
- Add social media icons
- Implement responsive stacking for mobile
- Add copyright information

### 9. IMPLEMENT ANIMATIONS
- Fade-in animations on page load
- Scroll-triggered animations for sections
- Hover effects on interactive elements
- Smooth transitions for all interactions
- Parallax effects where appropriate

### 10. RESPONSIVE DESIGN
- Mobile-first approach
- Breakpoints: 576px, 768px, 992px, 1200px
- Hamburger menu for mobile navigation
- Stacked layout for mobile
- Touch-friendly buttons and spacing

## CONTENT TO PRESERVE

### Company Information:
- Company Name: BOSE ENTERPRISES
- Established: 2019
- Industry: Solar EPC & Infrastructure Services
- Location: South India
- Email: info@bose-enterprises.in
- Phone: +91 (555) 000-0000

### Services (6 Total):
1. Solar EPC & Turnkey Solutions
2. Solar Farm Civil Works
3. Electrical Installation Works
4. AC Side Electrical Works
5. Solar Plant Installation
6. Operation & Maintenance

### Team Members (6 Total):
1. Karnakaran V - Managing Director (22+ years, MBA)
2. Janasekar - Working Partner (14+ years, B.E. Electrical)
3. Manikandan - Senior Project Manager (12+ years, B.E. Civil)
4. Kanagavel Nagamani - Project Director (12+ years, B.E. Electrical)
5. Vaira Dasan - Project Manager (7+ years, B.E. Civil)
6. Prabha Karan - Project Manager (9+ years, B.E. Electrical)

### Clients/Partners (3 Total):
1. RENFRA ENERGY INDIA LIMITED
2. STERLING & WILSON
3. THE HINDUJA GROUP

### Mission Statement:
"Our mission is to deliver high-quality solar infrastructure solutions by ensuring safety, technical excellence, and timely project completion while providing maximum value and satisfaction to our customers."

## TECHNICAL SPECIFICATIONS

### Framework & Libraries:
- Bootstrap 5.3.0 (responsive grid)
- Font Awesome 6.4.0 (icons)
- GSAP or similar for advanced animations
- Swiper.js for carousel/slider
- jQuery (if needed for interactions)

### CSS Approach:
- CSS Variables for theming
- Flexbox and Grid layouts
- Media queries for responsiveness
- Smooth transitions and animations
- Professional color palette

### JavaScript Features:
- Intersection Observer for scroll animations
- Carousel/slider functionality
- Smooth scroll navigation
- Active link highlighting
- Mobile menu toggle

## PAGES TO UPDATE

1. **home.php** - Complete redesign with new layout
2. **about.php** - Update with new design pattern
3. **services.php** - Implement service slider
4. **team.php** - Redesign team section with numbered cards
5. **contact.php** - Update with new design

## DESIGN PRINCIPLES

1. **Professional Appearance** - Corporate-grade design
2. **User Experience** - Intuitive navigation and clear hierarchy
3. **Performance** - Optimized animations and fast loading
4. **Accessibility** - Semantic HTML and proper contrast
5. **Responsiveness** - Works on all device sizes
6. **Consistency** - Unified design language throughout

## DELIVERABLES

1. Updated header with sticky top bar
2. Redesigned hero section with animations
3. Service carousel/slider
4. Team member grid with numbered cards
5. Client logos section
6. Skills/progress bars
7. Enhanced CTA section
8. Professional footer
9. Responsive design for all breakpoints
10. Smooth animations and transitions throughout

## NOTES

- Maintain all existing company information and content
- Do not remove any pages or functionality
- Ensure mobile responsiveness
- Keep animations smooth and professional
- Use consistent spacing and alignment
- Follow the LEPL design pattern as reference
- Implement proper SEO meta tags
- Ensure fast page load times

---

**This prompt should be provided to Amazon Q to transform the BOSE ENTERPRISES website to match the professional LEPL design pattern while preserving all company content and information.**
