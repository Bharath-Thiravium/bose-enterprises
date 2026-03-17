<?php
$page_title = 'Gallery';
$page_description = 'BOSE ENTERPRISES Gallery - View our solar projects and infrastructure work.';
include __DIR__ . '/../components/partials/head-meta.php';
include __DIR__ . '/../components/partials/header/navbar.php';

// Gallery images array - verified to exist in /public/images/gallery/
$images = [
    'image6.jpg',
    'image7.jpg',
    'image8.jpg',
    'image9.jpg',
    'image10.jpg',
    'image11.jpg',
    'image12.jpg',
    'image13.jpg',
    'image14.jpg',
    'image15.jpg',
    'image16.jpg',
    'image17.jpg',
    'image18.jpg',
    'image19.jpg',
    'image20.jpg',
    'image21.jpg',
    'image22.jpg',
    'image23.jpg',
    'image24.jpg',
    'image25.jpg',
    'image26.jpg',
    'image27.jpg',
    'image28.jpg',
    'image29.jpg',
    'image30.jpg',
    'image31.jpg',
    'image32.jpg',
    'image33.jpg',
    'image34.jpg',
];
?>

<main class="main-content">
    <!-- Page Hero -->
    <section class="be-page-hero reveal">
        <div class="container">
            <div class="row">
                <div class="col-lg-9" data-be-animate="fadeInDown">
                    <p class="be-kicker">Gallery</p>
                    <h1 class="be-page-hero__title">Our Projects</h1>
                    <p class="be-page-hero__lead">
                        Explore our solar infrastructure and project execution work across South India.
                        Click any image to view in full screen.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Gallery Section -->
    <section class="be-section be-section--gallery">
        <div class="container">
            <?php if (!empty($images)): ?>
                <div class="gallery-grid">
                    <?php foreach ($images as $image): ?>
                        <div class="gallery-item reveal" data-be-animate="fadeInUp">
                            <img
                                src="./public/images/gallery/<?php echo htmlspecialchars($image, ENT_QUOTES, 'UTF-8'); ?>"
                                alt="Solar Project"
                                loading="eager"
                                decoding="async"
                                title="Click to view full size"
                            >
                        </div>
                    <?php endforeach; ?>
                </div>
            <?php else: ?>
                <div class="gallery-empty">
                    <p>No images found in the gallery.</p>
                </div>
            <?php endif; ?>
        </div>
    </section>

    <!-- CTA -->
    <section class="be-cta reveal">
        <div class="container text-center">
            <div class="be-cta__inner" data-be-animate="fadeInUp">
                <div class="be-cta__icon"><i class="fa-solid fa-phone-volume"></i></div>
                <h2 class="be-cta__title">Interested in Our Work?</h2>
                <p class="be-cta__text">
                    Contact us to discuss your solar infrastructure project requirements.
                </p>
                <div class="d-flex flex-wrap justify-content-center gap-3 mt-3">
                    <a href="tel:+919940040082" class="btn btn-light btn-lg">
                        <i class="fa-solid fa-phone me-2"></i>+91-99400 40082
                    </a>
                    <a href="<?php echo APP_URL; ?>?page=contact" class="btn btn-outline-light btn-lg">
                        Get in Touch
                    </a>
                </div>
            </div>
        </div>
    </section>
</main>

<?php include __DIR__ . '/../components/partials/footer.php'; ?>
<?php include __DIR__ . '/../components/partials/footer-scripts.php'; ?>