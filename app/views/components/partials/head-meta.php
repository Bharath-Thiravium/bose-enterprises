<?php
// Head Meta Tags Component with SEO Optimization
$page_title = isset($page_title) ? $page_title . ' - BOSE ENTERPRISES' : 'BOSE ENTERPRISES | Solar Installation and Commisioning Contractor  Company';
$page_description = isset($page_description) ? $page_description : 'BOSE ENTERPRISES is a leading solar infrastructure and EPC service provider specializing in solar farm construction, electrical installation, and commissioning services across India.';
$page_keywords = isset($page_keywords) ? $page_keywords : 'solar EPC contractor India, solar farm construction, solar infrastructure company, solar power installation India, solar engineering company';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="<?php echo $page_description; ?>">
    <meta name="keywords" content="<?php echo $page_keywords; ?>">
    <meta name="author" content="<?php echo APP_NAME; ?>">
    <meta name="robots" content="index, follow">
    <meta property="og:title" content="<?php echo $page_title; ?>">
    <meta property="og:description" content="<?php echo $page_description; ?>">
    <meta property="og:type" content="website">
    <meta property="og:url" content="<?php echo APP_URL; ?>">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="<?php echo $page_title; ?>">
    <meta name="twitter:description" content="<?php echo $page_description; ?>">
    
    <title><?php echo $page_title; ?></title>
    
    <!-- Canonical URL -->
    <link rel="canonical" href="<?php echo APP_URL; ?>">
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

    <!-- Google Fonts (LEPL-style typography) - with system font fallback -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@700&family=Rubik:wght@400;500;600&display=swap" rel="stylesheet">
    
    <style>
        /* Fallback fonts while external fonts load */
        @font-face {
            font-family: 'Rajdhani', sans-serif;
            src: local('Arial'), local('Helvetica');
            font-weight: 700;
        }
        @font-face {
            font-family: 'Rubik', sans-serif;
            src: local('Segoe UI'), local('Roboto');
            font-weight: 400;
        }
    </style>
    
    <!-- Custom CSS -->
    <link rel="stylesheet" href="<?php echo APP_URL; ?>/public/assets/css/style.css?v=1.0">
    
    <!-- Global Animation System CSS -->
    <link rel="stylesheet" href="<?php echo APP_URL; ?>/public/assets/css/animations-global.css?v=2.0">
    
    <!-- Favicon -->
    <link rel="icon" type="image/jpeg" href="<?php echo APP_URL; ?>/public/assets/img/logo.jpeg">
    <link rel="apple-touch-icon" href="<?php echo APP_URL; ?>/public/assets/img/logo.jpeg">
    
    <!-- Preconnect to external resources -->
    <link rel="preconnect" href="https://cdn.jsdelivr.net">
    <link rel="preconnect" href="https://cdnjs.cloudflare.com">
    
    <!-- DNS Prefetch -->
    <link rel="dns-prefetch" href="https://fonts.googleapis.com">
    <link rel="dns-prefetch" href="https://fonts.gstatic.com">
    <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com">
    <link rel="dns-prefetch" href="https://cdn.jsdelivr.net">
</head>
<body>
