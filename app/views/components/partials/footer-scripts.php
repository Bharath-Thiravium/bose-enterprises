<?php
// Footer Scripts Component
?>
    <!-- Bootstrap JS (async) -->\n    <script async src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    
    <!-- Page Transition Script -->
    <script>
        (function() {
            'use strict';
            
            // Wrap main content for page transitions
            var main = document.querySelector('main.main-content');
            if (main && !main.parentElement.classList.contains('page-wrapper')) {
                var wrapper = document.createElement('div');
                wrapper.className = 'page-wrapper';
                main.parentNode.insertBefore(wrapper, main);
                wrapper.appendChild(main);
            }
            
            // Trigger page visible state after DOM ready
            function triggerPageTransition() {
                var wrapper = document.querySelector('.page-wrapper');
                if (wrapper) {
                    requestAnimationFrame(function() {
                        wrapper.classList.add('is-visible');
                    });
                }
            }
            
            // Trigger on DOMContentLoaded
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', triggerPageTransition);
            } else {
                triggerPageTransition();
            }
        })();
    </script>
    
    <!-- Custom JS (defer) -->
    <script defer src="<?php echo APP_URL; ?>/public/assets/js/script.js"></script>
    
    <!-- Flicker Fix -->
    <script src="<?php echo APP_URL; ?>/public/assets/js/flicker-fix.js"></script>
</body>
</html>
