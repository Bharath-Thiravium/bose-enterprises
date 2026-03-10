<?php

class Router {
    private $routes = [];

    public function register($path, $view) {
        $this->routes[$path] = $view;
    }

    public function route($path) {
        $path = trim($path, '/') ?: 'index';
        
        if (isset($this->routes[$path])) {
            return $this->routes[$path];
        }
        
        return 'app/views/pages/404.php';
    }
}

$router = new Router();

// Register routes
$router->register('', 'app/views/pages/index.php');
$router->register('about', 'app/views/pages/about.php');
$router->register('service', 'app/views/pages/service.php');
$router->register('blog', 'app/views/pages/blog.php');
$router->register('contact', 'app/views/pages/contact.php');
$router->register('team', 'app/views/pages/team.php');
$router->register('faq', 'app/views/pages/faq.php');
$router->register('pricing', 'app/views/pages/pricing.php');

return $router;
