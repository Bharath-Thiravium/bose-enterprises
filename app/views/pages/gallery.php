<?php
$page_title = 'Gallery';
$page_description = 'BOSE ENTERPRISES Gallery - View our solar projects and infrastructure work.';
include __DIR__ . '/../components/partials/head-meta.php';
include __DIR__ . '/../components/partials/header/navbar.php';

$gallery_path = __DIR__ . '/../../../../gallery/Images';
$images = [];

if (is_dir($gallery_path)) {
    $files = scandir($gallery_path);
    foreach ($files as $file) {
        if (preg_match('/\.(jpg|jpeg|png|gif|webp)$/i', $file)) {
            $images[] = $file;
        }
    }
    sort($images);
}
?>

<main class="main-content">
    <section class="be-section be-section--light">
        <div class="container">
            <div class="be-section__head">
                <p class="be-kicker">Gallery</p>
                <h2 class="be-section__title">Our Projects</h2>
                <p class="be-section__sub">Explore our solar infrastructure and project execution work across South India.</p>
            </div>

            <div class="gallery-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 2rem; margin-top: 3rem;">
                <?php foreach ($images as $image): ?>
                    <div class="gallery-item" style="position: relative; overflow: hidden; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); transition: transform 0.3s ease;">
                        <img 
                            src="<?php echo APP_URL; ?>/gallery/Images/<?php echo urlencode($image); ?>" 
                            alt="<?php echo htmlspecialchars($image); ?>"
                            loading="lazy"
                            style="width: 100%; height: 300px; object-fit: cover; display: block; transition: transform 0.3s ease;"
                            onmouseover="this.style.transform='scale(1.05)'"
                            onmouseout="this.style.transform='scale(1)'"
                        >
                    </div>
                <?php endforeach; ?>
            </div>

            <?php if (empty($images)): ?>
                <div style="text-align: center; padding: 3rem; color: #666;">
                    <p>No images found in the gallery.</p>
                </div>
            <?php endif; ?>
        </div>
    </section>
</main>

<?php include __DIR__ . '/../components/partials/footer.php'; ?>
<?php include __DIR__ . '/../components/partials/footer-scripts.php'; ?>
