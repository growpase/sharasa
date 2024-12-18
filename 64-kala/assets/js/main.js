(function ($) {
    "use strict";


    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });


    // Hero Header carousel
    // $(".header-carousel").owlCarousel({
    //     animateOut: 'slideOutDown',
    //     items: 1,
    //     autoplay: true,
    //     smartSpeed: 1000,
    //     dots: false,
    //     loop: true,
    //     nav : true,
    //     navText : [
    //         '<i class="fas fa-arrow-left fa-fw"></i>',
    //         '<i class="fas fa-arrow-right fa-fw"></i>'
    //     ],
    // });


    // International carousel
    // $(".testimonial-carousel").owlCarousel({
    //     autoplay: true,
    //     items: 1,
    //     smartSpeed: 1500,
    //     dots: true,
    //     dotsData: true,
    //     loop: true,
    //     margin: 25,
    //     nav : true,
    //     navText : [
    //         '<i class="fas fa-arrow-left fa-fw"></i>',
    //         '<i class="fas fa-arrow-right fa-fw"></i>'
    //     ]
    // });


    // Modal Video
    // $(document).ready(function () {
    //     var $videoSrc;
    //     $('.btn-play').click(function () {
    //         $videoSrc = $(this).data("src");
    //     });
    //     console.log($videoSrc);

    //     $('#videoModal').on('shown.bs.modal', function (e) {
    //         $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    //     })

    //     $('#videoModal').on('hide.bs.modal', function (e) {
    //         $("#video").attr('src', $videoSrc);
    //     })
    // });


    // testimonial carousel
    // $(".testimonial-carousel").owlCarousel({
    //     autoplay: true,
    //     smartSpeed: 1000,
    //     center: true,
    //     dots: true,
    //     loop: true,
    //     nav : true,
    //     navText : [
    //         '<i class="fas fa-arrow-left fa-fw"></i>',
    //         '<i class="fas fa-arrow-right fa-fw"></i>'
    //     ],
    // });



   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    function myMove() {
        let id = null;
        const elem = document.getElementById("animate");
        let pos = 0;
        clearInterval(id);
        id = setInterval(frame, 5);
        function frame() {
          if (pos == 350) {
            clearInterval(id);
          } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
          }
        }
      }


      $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 25,
        responsiveClass: true,
        navText : [
            '<i class="fas fa-arrow-left fa-fw"></i>',
            '<i class="fas fa-arrow-right fa-fw"></i>'
        ],
        responsive: {
          0: {
            items: 1,
            nav: true
          },
          600: {
            items: 2,
            nav: false
          },
          1000: {
            items: 3,
            nav: true,
            loop: false,
            margin: 20
          },
          1200: {
            items: 4,
            nav: true,
            loop: false,
            margin: 20
          }
        }
      })

// Smooth scroll to section on navigation link click
// $('#navbarCollapse .nav-link').click(function (e) {
//     e.preventDefault();
//     const targetId = $(this).attr('href');
//     $('html, body').animate(
//       {
//         scrollTop: $(targetId).offset().top,
//       },
//       500
//     );
//   });

//   // Update active class on scroll
//   $(window).on('scroll', function () {
//     const scrollPos = $(window).scrollTop();
//     $('#navbarCollapse .nav-link').each(function () {
//       const target = $($(this).attr('href'));
//       if (
//         target.position().top <= scrollPos &&
//         target.position().top + target.outerHeight() > scrollPos
//       ) {
//         $('#navbarCollapse .nav-link').removeClass('active');
//         $(this).addClass('active');
//       }
//     });
//   });

// })(jQuery);

$('.cta-btn').click(function (e) {
  e.preventDefault();
  const targetId = $(this).attr('href');
  $('html, body').animate(
    {
      scrollTop: $(targetId).offset().top,
    },
    500
  );
});

})(jQuery);

