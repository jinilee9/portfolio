$(function(){

    /*
        For pc
    */

    // menu-toggle on
    $(".menu-toggle").click(function(){

        $(this).toggleClass("on");
        $("#category").toggleClass("on")

    });


    /*
        For mobile
    */

    // header fixed
    $(window).scroll(function(){
        if ( $(this).scrollTop() > 0) {

            $(".header").addClass("fixed")

        } else {

            $(".header").removeClass("fixed")

        }
    });

    // slide
    $("#menu").slick({
        responsive: [
            {
                breakpoint: 9999,
                settings: "unslick"
            },
            {
                breakpoint: 768,
                settings: {
                    infinite: false,
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

    $(window).on("resize", function() {
        $("#menu").slick("resize");
    });


});