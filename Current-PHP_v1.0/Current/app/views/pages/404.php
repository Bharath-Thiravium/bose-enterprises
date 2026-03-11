<!DOCTYPE html>
<html lang="en">

<head>
  <?php include(__DIR__ . '/../components/partials/title-meta.php'); ?>

  <?php include(__DIR__ . '/../components/partials/head-css.php'); ?>
</head>

<body class="homepage1-body tg-heading-subheading animation-style3">

  <?php include(__DIR__ . '/../components/partials/loader.php'); ?>

  <?php include(__DIR__ . '/../components/partials/header/navbar.php'); ?>

  <!--===== HERO AREA STARTS =======-->
  <div class="hero1-section-area about-bg-area">
    <img src="assets/img/bg/header-img1.png" alt="" class="header-img1">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 m-auto">
          <div class="hero-heading-area heading1 text-center">
            <h1>404 Error</h1>
            <a href="index.php" class="backline">Home <i class="fa-solid fa-angle-right"></i><span>404 Error</span></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--===== HERO AREA ENDS =======-->

  <!--===== ERROR AREA STARTS =======-->
  <div class="error-section-area sp1">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 m-auto">
          <div class="error-content-area text-center">
            <div class="img1">
              <img src="assets/img/all-images/error.png" alt="">
            </div>
            <div class="space48"></div>
            <div class="content-area heading2">
              <h2> Sorry, Page Not Found!</h2>
              <p>Sorry, the page you are looking for doesn’t exist or has <br class="d-lg-block d-none"> been moved. Here are some helpful links.</p>
              <div class="space8"></div>
              <div class="btn-area">
                <a href="index.php" class="header-btn1">Take Me Home <i class="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--===== ERROR AREA ENDS =======-->

  <?php include(__DIR__ . '/../components/partials/cta.php'); ?>

  <?php include(__DIR__ . '/../components/partials/footer.php'); ?>

  <?php include(__DIR__ . '/../components/partials/footer-scripts.php'); ?>

</body>

</html>
