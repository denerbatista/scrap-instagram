export const startHtml = (): string => {
  return `<!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title>MenuFlow-NestJS</title>
    <meta content="" name="description">
    <meta content="" name="keywords">

    <!-- Favicons -->
    <link href="https://www.sotatek.com/wp-content/uploads/2021/04/NestJS-300x300.png" rel="icon">
    <link href="https://www.sotatek.com/wp-content/uploads/2021/04/NestJS-300x300.png" rel="apple-touch-icon">

    <!-- Google Fonts -->
    <link
      href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Montserrat:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
      rel="stylesheet">

    <!-- Vendor CSS Files -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.3/css/bootstrap.min.css" rel="stylesheet">

  </head>

  <style type="text/css">
    body {
      font-family: "Open Sans", sans-serif;
      color: #555555;
    }

    a {
      text-decoration: none;
      color: #7cc576;
    }

    a:hover {
      color: #9ed49a;
      text-decoration: none;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: "Montserrat", sans-serif;
    }

    /*--------------------------------------------------------------
  # Hero Section
  --------------------------------------------------------------*/
    #hero {
      width: 100%;
      height: 100vh;
      background: url("https://cdn.discordapp.com/attachments/985645895779508254/1085292774074613811/hero-bg.png");
      position: relative;
    }

    #hero .hero-container {
      position: absolute;
      bottom: 0;
      top: 0;
      left: 0;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      text-align: center;
      padding: 0 15px;
    }

    #hero .hero-logo {
      margin-bottom: 30px;
    }

    #hero h1 {
      margin: 0 0 30px 0;
      font-size: 48px;
      font-weight: 500;
      line-height: 56px;
      color: #fff;
    }

    #hero h2 {
      color: #aeaeae;
      margin-bottom: 30px;
      font-size: 14px;
      font-weight: 400;
      text-transform: uppercase;
    }

    #hero .btn-get-started {
      font-family: "Montserrat", sans-serif;
      text-transform: uppercase;
      font-weight: 400;
      font-size: 16px;
      letter-spacing: 1px;
      display: inline-block;
      padding: 14px 30px;
      border-radius: 3px;
      margin: 10px;
      color: #fff;
      background: #7cc576;
    }

    #hero .btn-get-started:hover {
      transition: 0.5s;
      background: #fff;
      color: #7cc576;
    }

    @media (min-width: 1024px) {
      #hero {
        background-attachment: fixed;
      }
    }

    @media (max-width: 768px) {
      #hero h1 {
        font-size: 28px;
        line-height: 36px;
      }

      #hero h2 {
        line-height: 22px;
      }
    }
  </style>

  <body>

    <!-- ======= Hero Section ======= -->
    <section id="hero">
      <div class="hero-container">
        <a href="https://scrap-instagram.onrender.com/api-docs" class="hero-logo" data-aos="zoom-in"><img
            src="https://www.sotatek.com/wp-content/uploads/2021/04/NestJS-300x300.png" alt=""></a>
        <h1 data-aos="zoom-in">Aplication NestJS Scraping Instagram is running !</h1>
        <h2 data-aos="fade-up">click below to check swagger documentation.</h2>
        <a data-aos="fade-up" data-aos-delay="200" href="https://scrap-instagram.onrender.com/api-docs"
          class="btn-get-started scrollto">Swagger docs</a>
      </div>
    </section><!-- End Hero -->

    <!-- Vendor JS Files -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.3/js/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/glightbox/3.2.0/js/glightbox.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.isotope/3.0.6/isotope.pkgd.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/9.1.0/swiper-bundle.min.js"></script>

    <script>
      (function () {
        "use strict";
        /**
         * Testimonials slider
         */
        new Swiper('.testimonials-slider', {
          speed: 600,
          loop: true,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false
          },
          slidesPerView: 'auto',
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
          }
        });

        /**
         * Animation on scroll
         */
        window.addEventListener('load', () => {
          AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false
          })
        });

      })()
    </script>

  </body>

  </html>`;
};
