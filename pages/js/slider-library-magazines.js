$(document).ready(function () {
    $('.description_course_slick').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav',
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.description_course_slick',
        dots: true,
        centerMode: true,
        focusOnSelect: true,
    });
});
