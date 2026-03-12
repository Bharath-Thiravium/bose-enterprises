<?php
$page_title = 'Home';
$page_description = 'BOSE ENTERPRISES | Solar EPC & Infrastructure Company - Specializing in solar farm construction, electrical installation, and commissioning services across India.';
include __DIR__ . '/../components/partials/head-meta.php';
include __DIR__ . '/../components/partials/header/navbar.php';
?>

<main class="main-content">
    <!-- Hero -->
    <section class="be-hero">
        <div class="be-hero__bg"></div>
        <div class="container">
            <div class="row align-items-center g-4">
                <div class="col-lg-6" data-be-animate="fadeInUp">
                    <p class="be-kicker">Solar EPC &amp; Infrastructure Services</p>
                    <h1 class="be-hero__title">Turnkey Solar EPC &amp; Infrastructure Projects</h1>
                    <p class="be-hero__lead">BOSE ENTERPRISES delivers engineering, construction, and commissioning of large-scale solar power projects across South India with safety, technical excellence, and on-time delivery.</p>
                    <div class="d-flex flex-wrap gap-3 mt-4">
                        <a href="<?php echo APP_URL; ?>?page=services" class="btn btn-primary btn-lg">Explore Services</a>
                        <a href="<?php echo APP_URL; ?>?page=contact" class="btn btn-outline-light btn-lg">Talk to Our Team</a>
                    </div>

                    <div class="be-hero__logos mt-4" data-be-animate="fadeInDown">
                        <span class="be-hero__logos-label">Trusted by</span>
                        <div class="be-logos">
                            <div class="be-logo-pill">RENFRA</div>
                            <div class="be-logo-pill">STERLING &amp; WILSON</div>
                            <div class="be-logo-pill">HINDUJA GROUP</div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6" data-be-animate="fadeInRight">
                    <div class="be-hero__media">
                        <div class="be-media-card">
                            <div class="be-media-card__img" role="img" aria-label="Solar Power Plant"></div>
                            <div class="be-media-card__caption">
                                <strong>Safety-first execution</strong>
                                <span>Quality systems, clear reporting, reliable delivery</span>
                            </div>
                        </div>
                        <div class="be-float-card be-float-card--a">
                            <span class="be-float-card__num">2019</span>
                            <span class="be-float-card__text">Established</span>
                        </div>
                        <div class="be-float-card be-float-card--b">
                            <span class="be-float-card__num">22+</span>
                            <span class="be-float-card__text">Years leadership experience</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- About -->
    <section class="be-section be-section--light" id="about">
        <div class="container">
            <div class="be-section__head">
                <p class="be-kicker">About Us</p>
                <h2 class="be-section__title">Charged With Purpose. Built For Execution.</h2>
                <p class="be-section__sub">Established in 2019, BOSE ENTERPRISES is a growing solar professional company in South India specializing in complete solar power project solutions and infrastructure development.</p>
            </div>

            <div class="row align-items-center g-4">
                <div class="col-lg-6" data-be-animate="fadeInLeft">
                    <div class="be-panel">
                        <h3 class="be-panel__title">Our Mission</h3>
                        <p class="mb-0">"Our mission is to deliver high-quality solar infrastructure solutions by ensuring safety, technical excellence, and timely project completion while providing maximum value and satisfaction to our customers."</p>
                    </div>

                    <div class="be-bullets mt-4">
                        <div class="be-bullet"><i class="fa-solid fa-shield-halved"></i><span>Safety-first execution</span></div>
                        <div class="be-bullet"><i class="fa-solid fa-compass-drafting"></i><span>Technical excellence</span></div>
                        <div class="be-bullet"><i class="fa-solid fa-clock"></i><span>On-time delivery</span></div>
                        <div class="be-bullet"><i class="fa-solid fa-handshake"></i><span>Customer satisfaction</span></div>
                    </div>
                </div>

                <div class="col-lg-6" data-be-animate="fadeInRight">
                    <div class="be-stats">
                        <div class="be-stat">
                            <div class="be-stat__value">2019</div>
                            <div class="be-stat__label">Established</div>
                        </div>
                        <div class="be-stat">
                            <div class="be-stat__value">South India</div>
                            <div class="be-stat__label">Primary footprint</div>
                        </div>
                        <div class="be-stat">
                            <div class="be-stat__value">Solar EPC</div>
                            <div class="be-stat__label">Core expertise</div>
                        </div>
                        <div class="be-stat">
                            <div class="be-stat__value">Infrastructure</div>
                            <div class="be-stat__label">Civil + electrical works</div>
                        </div>
                    </div>
                    <div class="mt-4">
                        <a href="<?php echo APP_URL; ?>?page=about" class="btn btn-outline-primary btn-lg">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Services Slider -->
    <section class="be-section be-section--white" id="services">
        <div class="container">
            <div class="be-section__head">
                <p class="be-kicker">Services</p>
                <h2 class="be-section__title">Electricity-Grade Discipline For Solar Projects</h2>
                <p class="be-section__sub">From civil infrastructure to AC-side electrical works, we deliver end-to-end execution with clear timelines and quality controls.</p>
            </div>

            <div class="be-slider" data-be-slider="services" data-be-autoplay="true" data-be-interval="3500" data-be-pause-hover="true" data-be-animate="fadeInUp">
                <div class="be-slider__controls">
                    <button class="be-slider__btn" type="button" data-be-slider-prev aria-label="Previous services">
                        <i class="fa-solid fa-arrow-left"></i>
                    </button>
                    <button class="be-slider__btn" type="button" data-be-slider-next aria-label="Next services">
                        <i class="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
                <div class="be-slider__track" data-be-slider-track>
                    <article class="be-card be-card--service">
                        <div class="be-card__num">01</div>
                        <div class="be-card__icon"><i class="fa-solid fa-solar-panel"></i></div>
                        <h3 class="be-card__title">Solar EPC &amp; Turnkey Solutions</h3>
                        <p class="be-card__text">Design, engineering, procurement, installation, testing, and commissioning for ground-mounted solar farms and rooftop solar systems.</p>
                    </article>
                    <article class="be-card be-card--service">
                        <div class="be-card__num">02</div>
                        <div class="be-card__icon"><i class="fa-solid fa-helmet-safety"></i></div>
                        <h3 class="be-card__title">Solar Farm Civil Works</h3>
                        <p class="be-card__text">Roads, drains, compound walls, fencing, inverter foundations, transformer foundations, and switchyard civil infrastructure.</p>
                    </article>
                    <article class="be-card be-card--service">
                        <div class="be-card__num">03</div>
                        <div class="be-card__icon"><i class="fa-solid fa-plug-circle-bolt"></i></div>
                        <h3 class="be-card__title">Electrical Installation Works</h3>
                        <p class="be-card__text">UG/PG cable laying, terminations, earthing systems, panel erection, LA installation, and compliant electrical execution.</p>
                    </article>
                    <article class="be-card be-card--service">
                        <div class="be-card__num">04</div>
                        <div class="be-card__icon"><i class="fa-solid fa-bolt"></i></div>
                        <h3 class="be-card__title">AC Side Electrical Works</h3>
                        <p class="be-card__text">Transformer installation, HT cable laying, cable tray works, oil filtration, equipment testing, and commissioning support.</p>
                    </article>
                    <article class="be-card be-card--service">
                        <div class="be-card__num">05</div>
                        <div class="be-card__icon"><i class="fa-solid fa-screwdriver-wrench"></i></div>
                        <h3 class="be-card__title">Solar Plant Installation</h3>
                        <p class="be-card__text">MMS structures, PV modules, inverters, and plant equipment installation with alignment checks and quality inspections.</p>
                    </article>
                    <article class="be-card be-card--service">
                        <div class="be-card__num">06</div>
                        <div class="be-card__icon"><i class="fa-solid fa-screwdriver"></i></div>
                        <h3 class="be-card__title">Operation &amp; Maintenance</h3>
                        <p class="be-card__text">Inspection, testing, preventive maintenance, and performance optimization to keep plants operating efficiently.</p>
                    </article>
                </div>
            </div>

            <div class="text-center mt-4">
                <a href="<?php echo APP_URL; ?>?page=services" class="btn btn-outline-primary btn-lg">View All Services</a>
            </div>
        </div>
    </section>

    <!-- Skills -->
    <section class="be-section be-section--dark" id="skills">
        <div class="container">
            <div class="row align-items-center g-4">
                <div class="col-lg-5" data-be-animate="fadeInLeft">
                    <p class="be-kicker be-kicker--light">Capabilities</p>
                    <h2 class="be-section__title be-section__title--light">Execution Strength You Can Measure</h2>
                    <p class="be-section__sub be-section__sub--light">Animated progress indicators highlight the capabilities clients typically evaluate for EPC readiness.</p>
                </div>
                <div class="col-lg-7" data-be-animate="fadeInUp">
                    <div class="be-skills" data-be-skills>
                        <div class="be-skill" data-progress="92">
                            <div class="be-skill__head"><span>Solar Projects</span><span class="be-skill__pct">92%</span></div>
                            <div class="be-skill__bar"><div class="be-skill__fill"></div></div>
                        </div>
                        <div class="be-skill" data-progress="88">
                            <div class="be-skill__head"><span>Electrical Infrastructure</span><span class="be-skill__pct">88%</span></div>
                            <div class="be-skill__bar"><div class="be-skill__fill"></div></div>
                        </div>
                        <div class="be-skill" data-progress="84">
                            <div class="be-skill__head"><span>Civil Works &amp; Foundations</span><span class="be-skill__pct">84%</span></div>
                            <div class="be-skill__bar"><div class="be-skill__fill"></div></div>
                        </div>
                        <div class="be-skill" data-progress="90">
                            <div class="be-skill__head"><span>Testing &amp; Commissioning</span><span class="be-skill__pct">90%</span></div>
                            <div class="be-skill__bar"><div class="be-skill__fill"></div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Team -->
    <section class="be-section be-section--white" id="team">
        <div class="container">
            <div class="be-section__head">
                <p class="be-kicker">Team</p>
                <h2 class="be-section__title">Leadership With On-Site Experience</h2>
                <p class="be-section__sub">Experienced professionals with 7-22+ years expertise in solar EPC and infrastructure projects.</p>
            </div>

            <div class="row g-4" data-be-stagger="120">
                <div class="col-lg-4 col-md-6">
                    <div class="be-team-card">
                        <div class="be-team-card__num">01</div>
                        <div class="be-team-card__avatar"><i class="fa-solid fa-user-tie"></i></div>
                        <h3 class="be-team-card__name">Karnakaran V</h3>
                        <p class="be-team-card__role">Managing Director</p>
                        <p class="be-team-card__meta">22+ years | MBA</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="be-team-card">
                        <div class="be-team-card__num">02</div>
                        <div class="be-team-card__avatar"><i class="fa-solid fa-user-tie"></i></div>
                        <h3 class="be-team-card__name">Janasekar</h3>
                        <p class="be-team-card__role">Working Partner</p>
                        <p class="be-team-card__meta">14+ years | B.E. Electrical</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="be-team-card">
                        <div class="be-team-card__num">03</div>
                        <div class="be-team-card__avatar"><i class="fa-solid fa-user-tie"></i></div>
                        <h3 class="be-team-card__name">Manikandan</h3>
                        <p class="be-team-card__role">Senior Project Manager</p>
                        <p class="be-team-card__meta">12+ years | B.E. Civil</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="be-team-card">
                        <div class="be-team-card__num">04</div>
                        <div class="be-team-card__avatar"><i class="fa-solid fa-user-tie"></i></div>
                        <h3 class="be-team-card__name">Kanagavel Nagamani</h3>
                        <p class="be-team-card__role">Project Director</p>
                        <p class="be-team-card__meta">12+ years | B.E. Electrical</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="be-team-card">
                        <div class="be-team-card__num">05</div>
                        <div class="be-team-card__avatar"><i class="fa-solid fa-user-tie"></i></div>
                        <h3 class="be-team-card__name">Vaira Dasan</h3>
                        <p class="be-team-card__role">Project Manager</p>
                        <p class="be-team-card__meta">7+ years | B.E. Civil</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="be-team-card">
                        <div class="be-team-card__num">06</div>
                        <div class="be-team-card__avatar"><i class="fa-solid fa-user-tie"></i></div>
                        <h3 class="be-team-card__name">Prabha Karan</h3>
                        <p class="be-team-card__role">Project Manager</p>
                        <p class="be-team-card__meta">9+ years | B.E. Electrical</p>
                    </div>
                </div>
            </div>

            <div class="text-center mt-4">
                <a href="<?php echo APP_URL; ?>?page=team" class="btn btn-outline-primary btn-lg">Meet the Full Team</a>
            </div>
        </div>
    </section>

    <!-- Clients -->
    <section class="be-section be-section--light" id="clients">
        <div class="container">
            <div class="be-section__head">
                <p class="be-kicker">Clients</p>
                <h2 class="be-section__title">Partners Who Value Reliable Delivery</h2>
                <p class="be-section__sub">A selection of clients and partners we've worked with across solar EPC and infrastructure execution.</p>
            </div>

            <div class="row g-4" data-be-stagger="120">
                <div class="col-lg-4 col-md-6" data-be-animate="fadeInUp">
                    <div class="be-client-card">
                        <div class="be-client-card__logo">RENFRA</div>
                        <div class="be-client-card__name">RENFRA ENERGY INDIA LIMITED</div>
                        <div class="be-client-card__desc">EPC collaboration and project execution support.</div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6" data-be-animate="fadeInUp">
                    <div class="be-client-card">
                        <div class="be-client-card__logo">S&amp;W</div>
                        <div class="be-client-card__name">STERLING &amp; WILSON</div>
                        <div class="be-client-card__desc">Infrastructure and electrical works delivery.</div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6" data-be-animate="fadeInUp">
                    <div class="be-client-card">
                        <div class="be-client-card__logo">HG</div>
                        <div class="be-client-card__name">THE HINDUJA GROUP</div>
                        <div class="be-client-card__desc">Reliable construction and commissioning support.</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA -->
    <section class="be-cta" id="cta">
        <div class="container text-center">
            <div class="be-cta__inner" data-be-animate="fadeInUp">
                <div class="be-cta__icon"><i class="fa-solid fa-phone-volume"></i></div>
                <h2 class="be-cta__title">Ready to Start Your Solar Project?</h2>
                <p class="be-cta__text">Call us to discuss scope, timelines, and execution needs. We'll respond quickly with clear next steps.</p>
                <div class="d-flex flex-wrap justify-content-center gap-3 mt-3">
                    <a href="tel:+919940040082" class="btn btn-light btn-lg"><i class="fa-solid fa-phone me-2"></i>+91-99400 40082</a>
                    <a href="<?php echo APP_URL; ?>?page=contact" class="btn btn-outline-light btn-lg">Send a Message</a>
                </div>
            </div>
        </div>
    </section>
</main>

<?php include __DIR__ . '/../components/partials/footer.php'; ?>
<?php include __DIR__ . '/../components/partials/footer-scripts.php'; ?>
