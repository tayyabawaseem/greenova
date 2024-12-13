
    // Preloader Styles
    // $(window).on('load', function () {
    //   $('body').addClass('loaded');
    // });
    
  (function($){ 
    "use strict";

    $(window).on('load', function() {
        setTimeout(function(){
            $('body').addClass('loaded');
        }, 100); // Increase the delay here (in milliseconds)
    });
})(jQuery);

 
 
 //common reveal options to create reveal animations
 ScrollReveal({
    //reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400
  });

  //target elements, and specify options to create reveal animations
  ScrollReveal().reveal('.m-title, .section-title', { delay: 500, origin: 'left' });
  ScrollReveal().reveal('.sec-01 .vid, .button', { delay: 600, origin: 'bottom' });
  ScrollReveal().reveal('.text-box', { delay: 700, origin: 'right' });
  ScrollReveal().reveal('.media-icons i', { delay: 500, origin: 'bottom', interval: 200 });
  ScrollReveal().reveal('.sec-02 .image, .sec-03 .image', { delay: 500, origin: 'top' });
  ScrollReveal().reveal('.media-info li', { delay: 500, origin: 'left', interval: 200 });

//   /* Slider */

  $('.slider').slick({
    centerMode: true,
    dots: true,
    autoplay: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [{
    breakpoint: 768,
    settings: {
    arrows: false,
    centerMode: true,
    centerPadding: '40px',
    Infinity: true,
    slidesToShow: 1
      },
    }]
  });




$(document).ready(function() {
  $(".post-filter li").click(function() {
      // Remove 'active' class from all filters
      $(".post-filter li").removeClass('active');
      // Add 'active' class to the clicked filter
      $(this).addClass('active');

      // Get filter value and info
      var filterValue = $(this).attr('data-filter');
      var infoText = $(this).attr('data-info');

      // Update data info section
      $("#data-info").text(infoText);

      // Show or hide items based on the filter
      if (filterValue === "all") {
          $('.filter-item').fadeOut().promise().done(function() {
              $('.filter-item').fadeIn();
          });
      } else {
          $('.filter-item').fadeOut().promise().done(function() {
              $('.filter-item').each(function() {
                  if ($(this).hasClass(filterValue.substring(1))) {
                      $(this).fadeIn();
                  } else {
                      $(this).fadeOut();
                  }
              });
          });
      }

      $(".post-filter li").removeClass('btn-primary').addClass('btn-secondary');
      $(this).removeClass('btn-secondary').addClass('btn-primary');
  });

  // Initial display of all items
  $(".post-filter li[data-filter='all']").click();
});

