# Bose Enterprises Website

## Project Structure

```
Bose Enterprises/
├── public/
│   └── assets/
│       ├── css/
│       │   └── style.css
│       └── js/
│           └── script.js
├── app/
│   └── views/
│       ├── pages/
│       │   └── home.php
│       └── components/
│           └── partials/
│               ├── header/
│               │   └── navbar.php
│               ├── header-single/
│               ├── head-meta.php
│               ├── footer.php
│               └── footer-scripts.php
├── config/
│   └── config.php
├── routes/
├── storage/
├── tests/
└── index.php
```

## Setup Instructions

1. Access the website at: `http://localhost/BE/Bose Enterprises/`
2. The homepage will load by default
3. Navigation uses query parameters: `?page=home`, `?page=about`, etc.

## Adding New Pages

1. Create a new PHP file in `app/views/pages/`
2. Include the head-meta, navbar, footer, and footer-scripts components
3. Access via `?page=filename`

## Configuration

Edit `config/config.php` to update:
- APP_NAME
- APP_URL
- Database credentials
- Email settings
