window.addEventListener('load', AOS.refresh)
jQuery(function($){
  window.onscroll = function () {
      myFunction()
  };
  var header = document.getElementById("main-header");
  var headerHeight = $('#main-header').innerHeight();
  var sticky = header.offsetTop + headerHeight + 30;

  function myFunction() {
      if (window.pageYOffset > sticky) {
          header.classList.add("fixed-header");
      } else {
          header.classList.remove("fixed-header");
      }
  }
  


  $(document).ready(function(){
    $('.hero-slider').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000, // Set autoplay timeout in milliseconds
        autoplayHoverPause: false,
        nav: false,
        dots: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn'
        // Add more options as needed
    });
    $('.testimonials-slider').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 6000, // Set autoplay timeout in milliseconds
        autoplayHoverPause: false,
        nav: true,
        dots: false,
        smartSpeed: 1500,
        // Add more options as needed
    });
});

  $('.navbar-toggler').click(function(){
    $('html').toggleClass("disabledscroll");
  });
  $('.navbar-collapse .btn-close').click(function(){
    $('.navbar-collapse').removeClass("show");
    $('html').removeClass("disabledscroll");
  });


});