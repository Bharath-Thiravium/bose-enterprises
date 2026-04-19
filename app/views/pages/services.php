<?php
$page_title = 'Our Services';
$page_description = 'BOSE ENTERPRISES offers comprehensive solar EPC services including solar farm construction, electrical installation, civil works, and commissioning.';
include __DIR__ . '/../components/partials/head-meta.php';
include __DIR__ . '/../components/partials/header/navbar.php';
?>

<main class="main-content">
    <!-- Page Hero -->
    <section class="be-page-hero reveal">
        <div class="container">
            <div class="row">
                <div class="col-lg-9" data-be-animate="fadeInDown">
                    <p class="be-kicker">Services</p>
                    <h1 class="be-page-hero__title">Solar EPC &amp; Infrastructure Services</h1>
                    <p class="be-page-hero__lead">Six core services covering EPC, civil works, electrical works, installation, commissioning support, and O&amp;M.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Services Slider -->
    <section class="be-section be-section--white reveal">
        <div class="container">
            <div class="be-section__head">
                <p class="be-kicker">What We Deliver</p>
                <h2 class="be-section__title">Six Services. One Operating Standard.</h2>
                <p class="be-section__sub">Consistent execution pattern across every work package.</p>
            </div>

            <div class="be-slider" data-be-slider="services-page" data-be-autoplay="true" data-be-interval="4000" data-be-pause-hover="true" data-be-animate="fadeInUp">
                <div class="be-slider__controls">
                    <button class="be-slider__btn" type="button" data-be-slider-prev aria-label="Previous services">
                        <i class="fa-solid fa-arrow-left"></i>
                    </button>
                    <button class="be-slider__btn" type="button" data-be-slider-next aria-label="Next services">
                        <i class="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
                <div class="be-slider__track" data-be-slider-track>
                    <article class="be-card be-card--service reveal">
                        <div class="be-card__num">01</div>
                        <img src="<?php echo APP_URL; ?>/public/assets/img/service-1.jpg" alt="Solar EPC" class="be-card__img" style="width: 100%; height: 200px; object-fit: cover; margin: -1.35rem -1.35rem 1rem -1.35rem; border-radius: 16px 16px 0 0;">
                        <div class="be-card__icon"><i class="fa-solid fa-solar-panel"></i></div>
                        <h3 class="be-card__title">Solar EPC &amp; Turnkey Solutions</h3>
                        <p class="be-card__text">Complete execution from design and procurement through installation, testing, and commissioning for ground-mounted and rooftop systems.</p>
                    </article>
                    <article class="be-card be-card--service reveal">
                        <div class="be-card__num">02</div>
                        <img src="<?php echo APP_URL; ?>/public/assets/img/service-2.jpg" alt="Civil Works" class="be-card__img" style="width: 100%; height: 200px; object-fit: cover; margin: -1.35rem -1.35rem 1rem -1.35rem; border-radius: 16px 16px 0 0;">
                        <div class="be-card__icon"><i class="fa-solid fa-building"></i></div>
                        <h3 class="be-card__title">Solar Farm Civil Works</h3>
                        <p class="be-card__text">Roads, drains, compound walls, fencing, inverter and transformer foundations, and switchyard civil infrastructure.</p>
                    </article>
                    <article class="be-card be-card--service reveal">
                        <div class="be-card__num">03</div>
                        <img src="<?php echo APP_URL; ?>/public/assets/img/service-3.jpg" alt="Electrical Works" class="be-card__img" style="width: 100%; height: 200px; object-fit: cover; margin: -1.35rem -1.35rem 1rem -1.35rem; border-radius: 16px 16px 0 0;">
                        <div class="be-card__icon"><i class="fa-solid fa-plug"></i></div>
                        <h3 class="be-card__title">Electrical Installation Works</h3>
                        <p class="be-card__text">UG/PG cable laying, terminations, earthing, panel erection, lightning arrestor installation, and equipment installation.</p>
                    </article>
                    <article class="be-card be-card--service reveal">
                        <div class="be-card__num">04</div>
                        <img src="<?php echo APP_URL; ?>/public/assets/img/service-4.jpg" alt="AC Electrical" class="be-card__img" style="width: 100%; height: 200px; object-fit: cover; margin: -1.35rem -1.35rem 1rem -1.35rem; border-radius: 16px 16px 0 0;">
                        <div class="be-card__icon"><i class="fa-solid fa-bolt"></i></div>
                        <h3 class="be-card__title">AC Side Electrical Works</h3>
                        <p class="be-card__text">Transformer and HT works, cable tray works, oil filtration, testing, and full commissioning support.</p>
                    </article>
                    <article class="be-card be-card--service reveal">
                        <div class="be-card__num">05</div>
                        <img src="<?php echo APP_URL; ?>/public/assets/img/project-1.jpg" alt="Plant Installation" class="be-card__img" style="width: 100%; height: 200px; object-fit: cover; margin: -1.35rem -1.35rem 1rem -1.35rem; border-radius: 16px 16px 0 0;">
                        <div class="be-card__icon"><i class="fa-solid fa-wrench"></i></div>
                        <h3 class="be-card__title">Solar Plant Installation</h3>
                        <p class="be-card__text">MMS structure, PV module installation, inverter systems, and plant infrastructure with precision and quality.</p>
                    </article>
                    <article class="be-card be-card--service reveal">
                        <div class="be-card__num">06</div>
                        <img src="<?php echo APP_URL; ?>/public/assets/img/project-2.jpg" alt="O&M" class="be-card__img" style="width: 100%; height: 200px; object-fit: cover; margin: -1.35rem -1.35rem 1rem -1.35rem; border-radius: 16px 16px 0 0;">
                        <div class="be-card__icon"><i class="fa-solid fa-screwdriver"></i></div>
                        <h3 class="be-card__title">Operation &amp; Maintenance</h3>
                        <p class="be-card__text">Inspection, testing, preventive maintenance, and performance optimization to keep plants at peak efficiency.</p>
                    </article>
                </div>
            </div>
        </div>
    </section>

    <!-- Why Choose Us -->
    <section class="be-section be-section--light reveal">
        <div class="container">
            <div class="be-section__head">
                <p class="be-kicker">Why Us</p>
                <h2 class="be-section__title">A Team Built For Delivery</h2>
                <p class="be-section__sub">Practical experience, clear process, and accountable execution.</p>
            </div>

            <div class="row g-4" data-be-stagger="120">
                <div class="col-lg-4 col-md-6" data-be-animate="fadeInUp">
                    <div class="be-card reveal">
                        <div class="be-card__icon"><i class="fa-solid fa-people-group"></i></div>
                        <h3 class="be-card__title">Experienced Team</h3>
                        <p class="be-card__text">Leadership and site professionals bring 7-22+ years of experience in solar EPC and infrastructure projects.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6" data-be-animate="fadeInUp">
                    <div class="be-card reveal">
                        <div class="be-card__icon"><i class="fa-solid fa-circle-check"></i></div>
                        <h3 class="be-card__title">Quality Assurance</h3>
                        <p class="be-card__text">Rigorous checks and standards across civil, electrical, and commissioning activities.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6" data-be-animate="fadeInUp">
                    <div class="be-card reveal">
                        <div class="be-card__icon"><i class="fa-solid fa-clock"></i></div>
                        <h3 class="be-card__title">On-Time Delivery</h3>
                        <p class="be-card__text">Committed delivery schedules with transparent reporting and issue resolution.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6" data-be-animate="fadeInUp">
                    <div class="be-card reveal">
                        <div class="be-card__icon"><i class="fa-solid fa-shield-halved"></i></div>
                        <h3 class="be-card__title">Safety First</h3>
                        <p class="be-card__text">Industry safety standards and best practices across all sites and work packages.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6" data-be-animate="fadeInUp">
                    <div class="be-card reveal">
                        <div class="be-card__icon"><i class="fa-solid fa-compass-drafting"></i></div>
                        <h3 class="be-card__title">Technical Excellence</h3>
                        <p class="be-card__text">Strong technical capability across installations, testing, commissioning, and support.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6" data-be-animate="fadeInUp">
                    <div class="be-card reveal">
                        <div class="be-card__icon"><i class="fa-solid fa-headset"></i></div>
                        <h3 class="be-card__title">Customer Support</h3>
                        <p class="be-card__text">Dedicated communication throughout the project lifecycle and beyond commissioning.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA -->
    <section class="be-cta reveal">
        <div class="container text-center">
            <div class="be-cta__inner" data-be-animate="fadeInUp">
                <div class="be-cta__icon"><i class="fa-solid fa-phone-volume"></i></div>
                <h2 class="be-cta__title">Ready to Start Your Solar Project?</h2>
                <p class="be-cta__text">Contact our team to discuss your solar infrastructure requirements.</p>
                <div class="d-flex flex-wrap justify-content-center gap-3 mt-3">
                    <a href="tel:+9172001 86018" class="btn btn-light btn-lg"><i class="fa-solid fa-phone me-2"></i>+91- 72001 86018</a>
                    <a href="<?php echo APP_URL; ?>?page=contact" class="btn btn-outline-light btn-lg">Get in Touch</a>
                </div>
            </div>
        </div>
    </section>
</main>

<?php include __DIR__ . '/../components/partials/footer.php'; ?>
<?php include __DIR__ . '/../components/partials/footer-scripts.php'; ?>
