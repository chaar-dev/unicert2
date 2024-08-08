(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
      setTimeout(function () {
          if ($('#spinner').length > 0) {
              $('#spinner').removeClass('show');
          }
      }, 1);
  };
  spinner();
  
  
  // Initiate the wowjs
  new WOW().init();



  
  

  
  





  // Header carousel
  $(".header-carousel").owlCarousel({
      autoplay: false,
      smartSpeed: 1500,
      items: 1,
      dots: false,
      loop: true,
      nav : true,
      navText : [
          '<i class="bi bi-chevron-left"></i>',
          '<i class="bi bi-chevron-right"></i>'
      ]
  });



  
})(jQuery);

