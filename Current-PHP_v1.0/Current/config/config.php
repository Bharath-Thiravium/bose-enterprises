<?php

return [
    'app' => [
        'name' => 'Current - Electricity Services',
        'url' => 'http://localhost/BE/Current-PHP_v1.0/Current',
        'env' => 'development',
    ],
    'database' => [
        'host' => 'localhost',
        'user' => 'root',
        'password' => '',
        'name' => 'current_db',
    ],
    'paths' => [
        'base' => __DIR__ . '/..',
        'public' => __DIR__ . '/../public',
        'views' => __DIR__ . '/../app/views',
        'assets' => '/public/assets',
    ],
];
