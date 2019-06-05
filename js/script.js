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
            $('.section-text').css('height', 'auto');
            var height_expand = $('.section-text').height();
            $('.section-text').css('height', '80px');
            $('.section-text').animate({ height: height_expand }, 300);
            $('.moreless').text('Свернуть');

        } else {
            $('.section-text').removeClass('expanded').animate({ height: '80px' }, 300);;
            $('.moreless').text('Развернуть');

        }

        return false;
    });



    $(window).scroll(function() {
        if ($(window).scrollTop() > ($('header').offset().top + $('header').outerHeight() - $('.nav-section').height())) {
            var height_nav = $('.nav-section').outerHeight();
            $('header').css({ 'height': $('header').height() });
            $('.nav-section').addClass('top-fixed');
        } else {
            $('header').removeAttr('style');
            $('.nav-section').removeClass('top-fixed');
        }
    });


    // $('.burger').click(function() {
    //     $('.nav-container').toggleClass('active');
    //     $('.burger').toggleClass('active');
    // });
});