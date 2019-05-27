$(document).ready(function() {

    $('.carousel').slick({
        asNavFor: '.carousel-bg',
        dots: true
    });
    $('.carousel-bg').slick({
        arrows: false,
        asNavFor: '.carousel',
        swipe: false,
        fade: true
    });

    $('.posts-big-carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1
    });
    $('.posts-small-carousel').slick({
        autoplay: true,
        arrows: false,
        dots: true,
    });
    $('.burger').click(function() {
        $('.nav-container').toggleClass('active');
        $('.burger').toggleClass('active');
    });

    // $('.play-video').fancybox({
    //     'width'				: '75%',
    //     'height'			: '75%',
    //     'autoScale'			: false,
    //     'transitionIn'		: 'none',
    //     'transitionOut'		: 'none',
    //     'type'				: 'iframe'
    // });
});