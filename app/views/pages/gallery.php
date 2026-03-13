<?php
$page_title = 'Gallery';
$page_description = 'BOSE ENTERPRISES Gallery - View our solar projects and infrastructure work.';
include __DIR__ . '/../components/partials/head-meta.php';
include __DIR__ . '/../components/partials/header/navbar.php';

$gallery_path = __DIR__ . '/../../../../gallery/Images';
$web_path = APP_URL . '/gallery/Images';

$images = [];

if (is_dir($gallery_path)) {
    $files = scandir($gallery_path);

    foreach ($files as $file) {
        if ($file === '.' || $file === '..') {
            continue;
        }

        if (preg_match('/\.(jpg|jpeg|png|gif|webp)$/i', $file)) {
            $images[] = $file;
        }
    }
}

sort($images);
?>

<main class="main-content">
    <section class="be-section be-section--light">
        <div class="container">
            <div class="be-section__head">
                <p class="be-kicker">Gallery</p>
                <h2 class="be-section__title">Our Projects</h2>
                <p class="be-section__sub">Explore our solar infrastructure and project execution work across South India.</p>
            </div>

            <?php if (!empty($images)): ?>
                <div class="gallery-grid">
                    <?php foreach ($images as $image): ?>
                        <div class="gallery-item">
                            <img
                                src="<?php echo htmlspecialchars($web_path . '/' . rawurlencode($image), ENT_QUOTES, 'UTF-8'); ?>"
                                alt="Solar Project"
                                loading="lazy"
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
</main>

<?php include __DIR__ . '/../components/partials/footer.php'; ?>
<?php include __DIR__ . '/../components/partials/footer-scripts.php'; ?>
