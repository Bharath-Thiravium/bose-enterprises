# Current - Electricity Services Website

## Project Structure

```
Current-PHP_v1.0/Current/
├── public/                          # Public accessible files
│   └── assets/
│       ├── css/                     # Stylesheets
│       ├── js/                      # JavaScript files
│       ├── img/                     # Images
│       └── fonts/                   # Font files
│
├── app/                             # Application logic
│   ├── views/
│   │   ├── pages/                   # Page templates
│   │   ├── layouts/                 # Layout templates
│   │   └── components/              # Reusable components
│   │       ├── header/              # Header variations
│   │       ├── header-single/       # Single page headers
│   │       ├── footer.php
│   │       ├── cta.php
│   │       ├── loader.php
│   │       └── ...
│   ├── controllers/                 # Page controllers
│   ├── models/                      # Data models
│   └── assets/
│       └── scss/                    # SCSS source files
│
├── config/                          # Configuration files
│   └── config.php
│
├── routes/                          # Route definitions
│   └── web.php
│
├── storage/                         # Storage directories
│   ├── logs/                        # Application logs
│   └── cache/                       # Cache files
│
├── tests/                           # Test files
│
├── index.php                        # Entry point
└── README.md                        # This file
```

## Pages

- **index.php** - Homepage
- **about.php** - About Us
- **service.php** - Services
- **blog.php** - Blog listing
- **contact.php** - Contact form
- **team.php** - Team members
- **faq.php** - FAQ
- **pricing.php** - Pricing plans
- **404.php** - Error page

## Components

- **header/** - Navigation headers (4 variations)
- **header-single/** - Single page headers
- **footer.php** - Footer
- **cta.php** - Call-to-action
- **loader.php** - Page loader
- **title-meta.php** - Meta tags
- **head-css.php** - CSS imports
- **footer-scripts.php** - JS imports

## Assets

- **CSS** - Bootstrap, plugins, custom styles
- **JS** - jQuery, Bootstrap, animations, plugins
- **Images** - Organized by category
- **Fonts** - FontAwesome and custom fonts
- **SCSS** - Source stylesheets

## Setup

1. Place in `c:/laragon/www/BE/Current-PHP_v1.0/Current`
2. Access via `http://localhost/BE/Current-PHP_v1.0/Current`
3. Update `config/config.php` with your settings

## Technologies

- PHP 7.4+
- HTML5, CSS3 (SCSS)
- JavaScript (jQuery)
- Bootstrap 5
- GSAP, AOS, Owl Carousel
