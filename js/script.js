$(document).ready(function() {
    $('.banner-carousel').slick({
        fade: true,
        autoplay: true,
        arrows: false,
        asNavFor: '.dots-wrap',


    });
    $('.dots-wrap').slick({
        slidesToShow: 3,
        autoplay: true,
        asNavFor: '.banner-carousel',
        focusOnSelect: true

    });
    // $('.burger').click(function() {
    //     $('.nav-container').toggleClass('active');
    //     $('.burger').toggleClass('active');
    // });
});