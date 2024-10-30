$(function(){

    //slide
    $("#visual-wide").slick({
        autoplay: true,
        autoplaySpeed: 4000,
        speed : 400,
        slidesToShow: 1,
        adaptiveHeight: true,
        infinite: true,
        pauseOnHover: true,
        touchMove: true,
        nextArrow: '.main-visual .slick-next',
        prevArrow: '.main-visual .slick-prev',
        dots: false,
        fade: true
    });



});