<?php
// Header/Navbar Component (LEPL-style: top contact bar + sticky nav)
$currentPage = $_GET['page'] ?? 'home';
$companyName = 'BOSE ENTERPRISES';
$companyTagline = 'Solar EPC & Infrastructure';
$companyPhoneDisplay = '+91-99400 40082';
$companyPhoneTel = '+919940040082';
$companyEmail = MAIL_FROM;

$navItems = [
    'home' => 'Home',
    'about' => 'About',
    'services' => 'Services',
    'team' => 'Team',
    'contact' => 'Contact',
];
?>
<header class="be-header sticky-top">
    <div class="be-topbar d-none d-lg-block">
        <div class="container">
            <div class="d-flex align-items-center justify-content-between py-2">
                <div class="d-flex align-items-center gap-4">
                    <a class="be-topbar__link" href="tel:<?php echo htmlspecialchars($companyPhoneTel, ENT_QUOTES, 'UTF-8'); ?>">
                        <i class="fa-solid fa-phone me-2"></i><?php echo htmlspecialchars($companyPhoneDisplay, ENT_QUOTES, 'UTF-8'); ?>
                    </a>
                    <a class="be-topbar__link" href="mailto:<?php echo htmlspecialchars($companyEmail, ENT_QUOTES, 'UTF-8'); ?>">
                        <i class="fa-solid fa-envelope me-2"></i><?php echo htmlspecialchars($companyEmail, ENT_QUOTES, 'UTF-8'); ?>
                    </a>
                </div>
                <div class="d-flex align-items-center gap-3">
                    <a class="be-social" href="#" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
                    <a class="be-social" href="#" aria-label="Twitter"><i class="fa-brands fa-x-twitter"></i></a>
                    <a class="be-social" href="#" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
                    <a class="be-social" href="#" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
                </div>
            </div>
        </div>
    </div>

    <nav class="navbar navbar-expand-lg navbar-light bg-white be-navbar">
        <div class="container">
            <a class="navbar-brand d-flex align-items-center gap-3" href="<?php echo APP_URL; ?>?page=home">
                <img class="be-logo" src="<?php echo APP_URL; ?>/public/assets/img/logo.jpeg" alt="<?php echo htmlspecialchars($companyName, ENT_QUOTES, 'UTF-8'); ?>">
                <span class="be-brand">
                    <span class="be-brand__name"><?php echo htmlspecialchars($companyName, ENT_QUOTES, 'UTF-8'); ?></span>
                    <span class="be-brand__tag"><?php echo htmlspecialchars($companyTagline, ENT_QUOTES, 'UTF-8'); ?></span>
                </span>
            </a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto align-items-lg-center">
                    <?php foreach ($navItems as $key => $label): ?>
                        <li class="nav-item">
                            <a class="nav-link<?php echo $currentPage === $key ? ' active' : ''; ?>" href="<?php echo APP_URL; ?>?page=<?php echo htmlspecialchars($key, ENT_QUOTES, 'UTF-8'); ?>">
                                <?php echo htmlspecialchars($label, ENT_QUOTES, 'UTF-8'); ?>
                            </a>
                        </li>
                    <?php endforeach; ?>
                </ul>

                <div class="ms-lg-3 mt-3 mt-lg-0">
                    <a class="btn btn-primary be-nav-cta" href="<?php echo APP_URL; ?>?page=contact">
                        <i class="fa-solid fa-phone me-2"></i>Get a Quote
                    </a>
                </div>
            </div>
        </div>
    </nav>
</header>
