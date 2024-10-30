$(function(){


    $("#product-carousel").slick({
        responsive: [
            {
                breakpoint: 9999,
                settings: "unslick"
            },
            {
                breakpoint: 768,
                infinite: true,
                speed: 300,
                slidesToShow: 1
            }
        ]
    });


});