<?php
$page_title = 'Gallery';
$page_description = 'BOSE ENTERPRISES Gallery - View our solar projects and infrastructure work.';
include __DIR__ . '/../components/partials/head-meta.php';
include __DIR__ . '/../components/partials/header/navbar.php';

$web_path = APP_URL . '/public/images/gallery';

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


  <!-- Page Hero -->
    <section class="be-page-hero">
        <div class="container">
            <div class="row">
                <div class="col-lg-9" data-be-animate="fadeInDown">
                    <p class="be-kicker">Gallery</p>
                    <h1 class="be-page-hero__title">Our Projects</h1>
                    <p class="be-page-hero__lead">Explore our solar infrastructure and project execution work across South India.</p>
                </div>
            </div>
        </div>
    </section>

            <?php if (!empty($images)): ?>
                <div class="gallery-grid">
                    <?php foreach ($images as $image): ?>
                        <div class="gallery-item">
                            <img
                                src="<?php echo htmlspecialchars($web_path . '/' . rawurlencode($image), ENT_QUOTES, 'UTF-8'); ?>"
                                alt="Solar Project"
                                loading="lazy"
                                style="width: 100%; height: 300px; object-fit: cover;"
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
ok next gallery 