<?php
$page_title = 'Contact Us';
$page_description = 'Get in touch with BOSE ENTERPRISES for your solar EPC and infrastructure project requirements.';
include __DIR__ . '/../components/partials/head-meta.php';
include __DIR__ . '/../components/partials/header/navbar.php';

$companyPhoneDisplay = '+91-99400 40082 & +91-99400 40088';
$companyPhoneTel = '+919940040082';
$companyEmail = MAIL_FROM;
?>

<main class="main-content">
    <!-- Page Hero -->
    <section class="be-page-hero">
        <div class="container">
            <div class="row">
                <div class="col-lg-9">
                    <p class="be-kicker reveal-down">Contact</p>
                    <h1 class="be-page-hero__title reveal-up">Get in Touch with BOSE ENTERPRISES</h1>
                    <p class="be-page-hero__lead reveal-up">Tell us about your project scope and timeline. Our team responds quickly with clear next steps.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Cards -->
    <section class="be-section be-section--white">
        <div class="container">
            <div class="row g-4 card-grid">
                <div class="col-lg-4">
                    <div class="be-card be-card--contact reveal-scale stagger-item">
                        <div class="be-card__icon"><i class="fa-solid fa-location-dot"></i></div>
                        <h3 class="be-card__title">Location</h3>
                        <p class="be-card__text mb-0">
                            BOSE ENTERPRISES<br>
                            South India<br>
                            <strong>Industry:</strong> Solar EPC &amp; Infrastructure
                        </p>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="be-card be-card--contact reveal-scale stagger-item">
                        <div class="be-card__icon"><i class="fa-solid fa-phone"></i></div>
                        <h3 class="be-card__title">Phone</h3>
                        <p class="be-card__text mb-2"><a href="tel:<?php echo htmlspecialchars($companyPhoneTel, ENT_QUOTES, 'UTF-8'); ?>"><?php echo htmlspecialchars($companyPhoneDisplay, ENT_QUOTES, 'UTF-8'); ?></a></p>
                        <p class="be-card__text mb-0">Available during business hours.</p>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="be-card be-card--contact reveal-scale stagger-item">
                        <div class="be-card__icon"><i class="fa-solid fa-envelope"></i></div>
                        <h3 class="be-card__title">Email</h3>
                        <p class="be-card__text mb-0"><a href="mailto:<?php echo htmlspecialchars($companyEmail, ENT_QUOTES, 'UTF-8'); ?>"><?php echo htmlspecialchars($companyEmail, ENT_QUOTES, 'UTF-8'); ?></a></p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Form -->
    <section class="be-section be-section--light" id="contact-form">
        <div class="container">
            <div class="be-section__head">
                <p class="be-kicker reveal-down">Message</p>
                <h2 class="be-section__title reveal-up">Send Us a Message</h2>
                <p class="be-section__sub reveal-up">Share details about your site, scope, and timeline.</p>
            </div>

            <div class="row justify-content-center">
                <div class="col-lg-9 reveal-up">
                    <form method="POST" action="#" class="be-form">
                        <div class="row g-3">
                            <div class="col-md-6">
                                <label for="name" class="form-label">Full Name</label>
                                <input type="text" class="form-control" id="name" name="name" required>
                            </div>
                            <div class="col-md-6">
                                <label for="phone" class="form-label">Phone Number</label>
                                <input type="tel" class="form-control" id="phone" name="phone" required>
                            </div>
                            <div class="col-md-6">
                                <label for="email" class="form-label">Email Address</label>
                                <input type="email" class="form-control" id="email" name="email" required>
                            </div>
                            <div class="col-md-6">
                                <label for="subject" class="form-label">Subject</label>
                                <input type="text" class="form-control" id="subject" name="subject" required>
                            </div>
                            <div class="col-12">
                                <label for="message" class="form-label">Message</label>
                                <textarea class="form-control" id="message" name="message" rows="6" required></textarea>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary btn-lg w-100">Send Message</button>
                                <p class="be-form__fineprint mt-2 mb-0">This form is UI-only right now (no backend email handler wired).</p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- Why Contact Us -->
    <section class="be-section be-section--white">
        <div class="container">
            <div class="be-section__head">
                <p class="be-kicker reveal-down">Why Contact Us</p>
                <h2 class="be-section__title reveal-up">Clarity, Speed, and Accountability</h2>
                <p class="be-section__sub reveal-up">What to expect when you engage with BOSE ENTERPRISES.</p>
            </div>

            <div class="row g-4 card-grid">
                <div class="col-lg-6">
                    <div class="be-card reveal-scale stagger-item">
                        <div class="be-card__icon"><i class="fa-solid fa-comments"></i></div>
                        <h3 class="be-card__title">Expert Consultation</h3>
                        <p class="be-card__text">Professional advice on solar infrastructure requirements and execution planning.</p>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="be-card reveal-scale stagger-item">
                        <div class="be-card__icon"><i class="fa-solid fa-sitemap"></i></div>
                        <h3 class="be-card__title">Customized Solutions</h3>
                        <p class="be-card__text">Services tailored to your scope, site realities, and budget constraints.</p>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="be-card reveal-scale stagger-item">
                        <div class="be-card__icon"><i class="fa-solid fa-bolt"></i></div>
                        <h3 class="be-card__title">Quick Response</h3>
                        <p class="be-card__text">Prompt replies to inquiries and practical next steps to move forward.</p>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="be-card reveal-scale stagger-item">
                        <div class="be-card__icon"><i class="fa-solid fa-eye"></i></div>
                        <h3 class="be-card__title">Transparent Communication</h3>
                        <p class="be-card__text">Clear updates throughout project lifecycle and after commissioning.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA -->
    <section class="be-cta">
        <div class="container text-center">
            <div class="be-cta__inner reveal-scale">
                <div class="be-cta__icon reveal-up"><i class="fa-solid fa-phone-volume"></i></div>
                <h2 class="be-cta__title reveal-up">Ready to Discuss Your Solar Project?</h2>
                <p class="be-cta__text reveal-up">Our team is ready to help you achieve your solar infrastructure goals.</p>
                <div class="d-flex flex-wrap justify-content-center gap-3 mt-3">
                    <a href="tel:<?php echo htmlspecialchars($companyPhoneTel, ENT_QUOTES, 'UTF-8'); ?>" class="btn btn-light btn-lg reveal-up"><i class="fa-solid fa-phone me-2"></i><?php echo htmlspecialchars($companyPhoneDisplay, ENT_QUOTES, 'UTF-8'); ?></a>
                    <a href="#contact-form" class="btn btn-outline-light btn-lg reveal-up">Get Started</a>
                </div>
            </div>
        </div>
    </section>
</main>

<?php include __DIR__ . '/../components/partials/footer.php'; ?>
<?php include __DIR__ . '/../components/partials/footer-scripts.php'; ?>
