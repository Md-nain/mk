$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    dots: true,
    nav: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 2,
            margin: 10,
            stagePadding: 20,
        },
        600: {
            items: 3,
            margin: 20,
            stagePadding: 50,
        },
        1000: {
            items: 4
        }
    }
});

var $owl = $('.loop');

$owl.owlCarousel({
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 800,
    center: true,
    items: 1.4,
    stagePadding: 15,
    loop: true,
    margin: 15,
    animateOut: 'slide-up',
    animateIn: 'slide-down',
});
$(document).ready(function () {
    var owl = $("#slider-carousel");
    owl.owlCarousel({
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 3000,
        autoplaySpeed: 800,
        items: 4,
        itemsDesktop: [1000, 4],
        itemsDesktopSmall: [900, 2],
        itemsTablet: [600, 1],
        itemsMobile: false,
        pagination: false
    });
    $(".next").click(function () {
        owl.trigger('owl.next');
    })
    $(".prev").click(function () {
        owl.trigger('owl.prev');
    })
});



