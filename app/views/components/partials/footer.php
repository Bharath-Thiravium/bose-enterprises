<?php
// Footer Component
$companyName = 'BOSE ENTERPRISES';
$companyTagline = 'Solar Installation and Commisioning Contractor  Services';
$companyPhoneDisplay = '+91-72001 86018 & +91-72001 86027';
$companyPhoneTel = '+91-7200186018';
$companyEmail = MAIL_FROM;
$companyLocation = 'Plot no 81, Poriyalar Nagar 4th Street, Tiruppalai (PO), Madurai - 625014';
$services = [
    
    'Solar Farm Civil Works',
    'Electrical Installation Works',
    'AC Side Electrical Works',
    'Solar Plant Installation',
    'Operation & Maintenance',
];
?>
<footer class="footer">
    <div class="container">
        <div class="row gy-4">
            <div class="col-lg-4 col-md-6">
                <div class="footer-brand d-flex align-items-center gap-3 mb-3">
                    <img class="be-logo be-logo--footer" src="<?php echo APP_URL; ?>/public/assets/img/logo.png" alt="<?php echo htmlspecialchars($companyName, ENT_QUOTES, 'UTF-8'); ?>">
                    <div>
                        <h5 class="mb-0"><?php echo htmlspecialchars($companyName, ENT_QUOTES, 'UTF-8'); ?></h5>
                        <p class="footer-tagline mb-0"><?php echo htmlspecialchars($companyTagline, ENT_QUOTES, 'UTF-8'); ?></p>
                    </div>
                </div>
                <p class="mb-3">Our mission is to deliver high-quality solar infrastructure solutions by ensuring safety, technical excellence, and timely project completion while providing maximum value and satisfaction to our customers.</p>
                <div class="d-flex align-items-center gap-3">
                    <a class="be-social be-social--footer" href="#" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
                    <a class="be-social be-social--footer" href="#" aria-label="Twitter"><i class="fa-brands fa-twitter"></i></a>
                    <a class="be-social be-social--footer" href="#" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
                    <a class="be-social be-social--footer" href="#" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
                </div>
            </div>

            <div class="col-lg-2 col-md-6">
                <h6 class="footer-title">Quick Links</h6>
                <ul class="list-unstyled footer-links">
                    <li><a href="<?php echo APP_URL; ?>?page=home">Home</a></li>
                    <li><a href="<?php echo APP_URL; ?>?page=about">About</a></li>
                    <li><a href="<?php echo APP_URL; ?>?page=services">Services</a></li>
                    <li><a href="<?php echo APP_URL; ?>?page=team">Team</a></li>
                    <li><a href="<?php echo APP_URL; ?>?page=contact">Contact</a></li>
                </ul>
            </div>

            <div class="col-lg-3 col-md-6">
                <h6 class="footer-title">Services</h6>
                <ul class="list-unstyled footer-links">
                    <?php foreach ($services as $service): ?>
                        <li><a href="<?php echo APP_URL; ?>?page=services"><?php echo htmlspecialchars($service, ENT_QUOTES, 'UTF-8'); ?></a></li>
                    <?php endforeach; ?>
                </ul>
            </div>

            <div class="col-lg-3 col-md-6">
                <h6 class="footer-title">Contact</h6>
                <ul class="list-unstyled footer-contact">
                    <li class="d-flex align-items-start">
                        <i class="fa-solid fa-location-dot me-2 mt-1"></i>
                        <a href="https://www.google.com/maps/place/Athena+solutions/@9.9829579,78.1428185,427m/data=!3m1!1e3!4m6!3m5!1s0x3b00c7ea5f368929:0x5695eb00ff07d955!8m2!3d9.9814754!4d78.1433403!16s%2Fg%2F11m5s49bss?entry=ttu&g_ep=EgoyMDI2MDQxNS4wIKXMDSoASAFQAw%3D%3D<?php echo urlencode($companyLocation); ?>" target="_blank" style="text-decoration: none; color: inherit;">
                            <span><?php echo htmlspecialchars($companyLocation, ENT_QUOTES, 'UTF-8'); ?></span>
                        </a>
                    </li>
                    <li>
                        <i class="fa-solid fa-phone me-2"></i>
                        <a href="tel:<?php echo htmlspecialchars($companyPhoneTel, ENT_QUOTES, 'UTF-8'); ?>"><?php echo htmlspecialchars($companyPhoneDisplay, ENT_QUOTES, 'UTF-8'); ?></a>
                    </li>
                    <li>
                        <i class="fa-solid fa-envelope me-2"></i>
                        <a href="mailto:<?php echo htmlspecialchars($companyEmail, ENT_QUOTES, 'UTF-8'); ?>"><?php echo htmlspecialchars($companyEmail, ENT_QUOTES, 'UTF-8'); ?></a>
                    </li>
                </ul>
            </div>
        </div>

        <hr class="footer-divider my-4">
        <div class="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2 pb-2">
            <p class="mb-0">&copy; <?php echo date('Y'); ?> <?php echo htmlspecialchars($companyName, ENT_QUOTES, 'UTF-8'); ?>. All rights reserved.</p>
            <p class="mb-0 footer-small">Designed for performance, clarity, and trust.</p>
        </div>
    </div>
</footer>