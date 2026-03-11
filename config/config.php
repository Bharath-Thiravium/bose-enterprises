<?php
// Bose Enterprises Configuration

// Detect environment and set APP_URL dynamically
$protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') ? 'https://' : 'http://';
$host = $_SERVER['HTTP_HOST'];
$base_path = rtrim(dirname($_SERVER['SCRIPT_NAME']), '/');
$app_url = $protocol . $host . $base_path;

// App Settings
define('APP_NAME', 'Bose Enterprises');
define('APP_URL', $app_url);
define('APP_ENV', getenv('APP_ENV') ?: 'development');

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
