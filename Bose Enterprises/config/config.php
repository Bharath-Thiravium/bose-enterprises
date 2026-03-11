<?php
// Bose Enterprises Configuration

// App Settings
define('APP_NAME', 'Bose Enterprises');
// Note: this project folder contains a space, so URLs should use %20.
define('APP_URL', 'http://localhost/BE/Bose%20Enterprises');
define('APP_ENV', 'development');

// Path Constants
define('BASE_PATH', dirname(dirname(__FILE__)));
define('PUBLIC_PATH', BASE_PATH . '/public');
define('APP_PATH', BASE_PATH . '/app');
define('VIEWS_PATH', APP_PATH . '/views');
define('COMPONENTS_PATH', VIEWS_PATH . '/components');
define('CONFIG_PATH', BASE_PATH . '/config');
define('ROUTES_PATH', BASE_PATH . '/routes');
define('STORAGE_PATH', BASE_PATH . '/storage');

// Database Configuration (if needed)
define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_NAME', 'bose_enterprises');

// Email Configuration
define('MAIL_FROM', 'info@bose-enterprises.in');
define('MAIL_FROM_NAME', 'Bose Enterprises');

// Timezone
date_default_timezone_set('UTC');
