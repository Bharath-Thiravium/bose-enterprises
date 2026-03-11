<?php
// Resolve URLs correctly when the app is hosted in a subfolder (e.g. /BE/Current-PHP_v1.0/Current).
$scriptName = $_SERVER['SCRIPT_NAME'] ?? '';
$basePath = $scriptName !== '' ? dirname($scriptName) : '';
$basePath = str_replace('\\', '/', $basePath);
$basePath = $basePath === '/' ? '' : rtrim($basePath, '/');
$assetBase = $basePath . '/public/assets';
?>
<!--===== JS SCRIPT LINK =======-->
<script src="<?php echo htmlspecialchars($assetBase, ENT_QUOTES, 'UTF-8'); ?>/js/plugins/bootstrap.min.js"></script>
<script src="<?php echo htmlspecialchars($assetBase, ENT_QUOTES, 'UTF-8'); ?>/js/plugins/fontawesome.js"></script>
<script src="<?php echo htmlspecialchars($assetBase, ENT_QUOTES, 'UTF-8'); ?>/js/plugins/aos.js"></script>
<script src="<?php echo htmlspecialchars($assetBase, ENT_QUOTES, 'UTF-8'); ?>/js/plugins/counter.js"></script>
<script src="<?php echo htmlspecialchars($assetBase, ENT_QUOTES, 'UTF-8'); ?>/js/plugins/gsap.min.js"></script>
<script src="<?php echo htmlspecialchars($assetBase, ENT_QUOTES, 'UTF-8'); ?>/js/plugins/ScrollTrigger.min.js"></script>
<script src="<?php echo htmlspecialchars($assetBase, ENT_QUOTES, 'UTF-8'); ?>/js/plugins/Splitetext.js"></script>
<script src="<?php echo htmlspecialchars($assetBase, ENT_QUOTES, 'UTF-8'); ?>/js/plugins/sidebar.js"></script>
<script src="<?php echo htmlspecialchars($assetBase, ENT_QUOTES, 'UTF-8'); ?>/js/plugins/magnific-popup.js"></script>
<script src="<?php echo htmlspecialchars($assetBase, ENT_QUOTES, 'UTF-8'); ?>/js/plugins/mobilemenu.js"></script>
<script src="<?php echo htmlspecialchars($assetBase, ENT_QUOTES, 'UTF-8'); ?>/js/plugins/owlcarousel.min.js"></script>
<script src="<?php echo htmlspecialchars($assetBase, ENT_QUOTES, 'UTF-8'); ?>/js/plugins/gsap-animation.js"></script>
<script src="<?php echo htmlspecialchars($assetBase, ENT_QUOTES, 'UTF-8'); ?>/js/plugins/nice-select.js"></script>
<script src="<?php echo htmlspecialchars($assetBase, ENT_QUOTES, 'UTF-8'); ?>/js/plugins/slick-slider.js"></script>
<script src="<?php echo htmlspecialchars($assetBase, ENT_QUOTES, 'UTF-8'); ?>/js/plugins/waypoints.js"></script>
<script src="<?php echo htmlspecialchars($assetBase, ENT_QUOTES, 'UTF-8'); ?>/js/main.js"></script>
