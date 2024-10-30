$(function(){


    //slide
    $(".image-wrap").slick({
        autoplay: true,
        autoplaySpeed:4000,
        speed : 400,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: false,
        infinite: true,
        pauseOnHover: true,
        touchMove: true,
        dots: false,
        fade: true
    });



    $("#product-carousel").slick({
        responsive: [
            {
                breakpoint: 9999,
                settings: "unslick"
            },
            {
                breakpoint: 768,
                settings: {
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    variableWidth: true,
                    arrows: false,
                    dots: false,
                    mobileFirst: true,
                    outerEdgeLimit: false,
                    touchMove: true,
                    easing: 'linear'
                }
            }
        ]
    });



});