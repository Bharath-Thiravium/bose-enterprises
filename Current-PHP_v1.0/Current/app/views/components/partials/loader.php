<!--===== PRELOADER STARTS =======-->
<div class="preloader <?= isset($loader) ? $loader : '' ?>">
    <div class="loading-container">
        <div class="loading"></div>
        <div id="loading-icon">
            <?php if (isset($logo3)): ?>
                <img src="assets/img/logo/preloader3.png" alt="">
            <?php elseif (isset($logo4)): ?>
                <img src="assets/img/logo/preloader4.png" alt="">
            <?php else: ?>
                <img src="assets/img/logo/prelodaer.png" alt="">
            <?php endif; ?>
        </div>
    </div>
</div>
<!--===== PRELOADER ENDS =======-->

<!--===== PROGRESS STARTS=======-->
<div class="paginacontainer  <?= isset($progress) ? $progress : '' ?>">
    <div class="progress-wrap">
        <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
    </div>
</div>
<!--===== PROGRESS ENDS=======-->