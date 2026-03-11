<?php
// Resolve URLs correctly when the app is hosted in a subfolder (e.g. /BE/Current-PHP_v1.0/Current).
$scriptName = $_SERVER['SCRIPT_NAME'] ?? '';
$basePath = $scriptName !== '' ? dirname($scriptName) : '';
$basePath = str_replace('\\', '/', $basePath);
$basePath = $basePath === '/' ? '' : rtrim($basePath, '/');
$assetBase = $basePath . '/public/assets';
?>
<!--===== CSS LINK =======-->
<link rel="stylesheet" href="<?php echo htmlspecialchars($assetBase, ENT_QUOTES, 'UTF-8'); ?>/css/plugins/bootstrap.min.css">
<link rel="stylesheet" href="<?php echo htmlspecialchars($assetBase, ENT_QUOTES, 'UTF-8'); ?>/css/plugins/aos.css">
<link rel="stylesheet" href="<?php echo htmlspecialchars($assetBase, ENT_QUOTES, 'UTF-8'); ?>/css/plugins/fontawesome.css">
<link rel="stylesheet" href="<?php echo htmlspecialchars($assetBase, ENT_QUOTES, 'UTF-8'); ?>/css/plugins/magnific-popup.css">
<link rel="stylesheet" href="<?php echo htmlspecialchars($assetBase, ENT_QUOTES, 'UTF-8'); ?>/css/plugins/mobile.css">
<link rel="stylesheet" href="<?php echo htmlspecialchars($assetBase, ENT_QUOTES, 'UTF-8'); ?>/css/plugins/owlcarousel.min.css">
<link rel="stylesheet" href="<?php echo htmlspecialchars($assetBase, ENT_QUOTES, 'UTF-8'); ?>/css/plugins/sidebar.css">
<link rel="stylesheet" href="<?php echo htmlspecialchars($assetBase, ENT_QUOTES, 'UTF-8'); ?>/css/plugins/slick-slider.css">
<link rel="stylesheet" href="<?php echo htmlspecialchars($assetBase, ENT_QUOTES, 'UTF-8'); ?>/css/plugins/nice-select.css">
<link rel="stylesheet" href="<?php echo htmlspecialchars($assetBase, ENT_QUOTES, 'UTF-8'); ?>/css/main.css">

<!--=====  JS SCRIPT LINK =======-->
<script src="<?php echo htmlspecialchars($assetBase, ENT_QUOTES, 'UTF-8'); ?>/js/plugins/jquery-3-6-0.min.js"></script>
