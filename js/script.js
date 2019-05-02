jQuery(document).ready(function () {

$('.login').click(function () {
   $('.popup-wrapper').fadeIn();
});

$('.close-popup').click(function () {
    $('.popup-wrapper').fadeOut();
});

$('.mobile-menu').click(function () {
    $('.navigation ul').toggleClass('active');
});

$('.sidebar-menu').click(function () {
    $('.sidebar').toggleClass('active');
});

$('.xzoom, .xzoom-gallery').click(function () {
    $('.xzoom, .xzoom-gallery').xzoom({tint: '#333', Xoffset: 5});
});

//Main slider initialization

    var mySwiper = new Swiper('.main-slider', {
        speed: 400,
        autoplay: {
            delay: 5000,
        },
        navigation: {
            nextEl: '.button-next',
            prevEl: '.button-prev',
        },
        loop: true,
    });
   

});



	