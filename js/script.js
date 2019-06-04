$(document).ready(function() {
    $('.banner-carousel').slick({
        fade: true,
        arrows: false,
        asNavFor: '.dots-wrap'


    });
    $('.dots-wrap').slick({
        slidesToShow: 3,
        autoplay: true,
        asNavFor: '.banner-carousel',
        focusOnSelect: true

    });
    $('.favorites-carousel').slick({
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1

    });

    $('.moreless').click(function() {
        $('.moreless').toggleClass('opened');
        if ($('.moreless').hasClass('opened')) {
            $('.section-text').toggleClass('expanded');
            $('.moreless').text('Свернуть');

        } else {
            $('.section-text').removeClass('expanded');
            $('.moreless').text('Развернуть');

        }

        return false;
    });

    // $('.burger').click(function() {
    //     $('.nav-container').toggleClass('active');
    //     $('.burger').toggleClass('active');
    // });
});