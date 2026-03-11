<?php
require_once __DIR__ . '/config/config.php';

// Get the requested page
$page = isset($_GET['page']) ? $_GET['page'] : 'home';
$page = preg_replace('/[^a-zA-Z0-9_-]/', '', $page);

// Default to home if page not specified
if (empty($page)) {
    $page = 'home';
}

// Build the page file path
$page_file = VIEWS_PATH . '/pages/' . $page . '.php';

// Check if page exists
if (!file_exists($page_file)) {
    $page_file = VIEWS_PATH . '/pages/home.php';
}

// Include the page
if (file_exists($page_file)) {
    include $page_file;
} else {
    echo "Page not found";
}
