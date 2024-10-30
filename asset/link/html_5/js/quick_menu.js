$(function(){


    $(".today-view").slick({
        autoplay: false,
        autoplaySpeed:4000,
        speed : 400,
        slidesToShow: 2,
        slidesToScroll: 2,
        adaptiveHeight: true,
        vertical: true,
        verticalSwiping: true,
        infinite: true,
        pauseOnHover: true,
        nextArrow: '.quick-menu .slick-next',
        prevArrow: '.quick-menu .slick-prev',
        dots: false
    });



    // aside fixed
    function asideFixed(){
        var sticky = $(".quick-menu"),
            st = $(window).scrollTop(),
            header = $(".header").outerHeight(),
            mainVisual = $(".main-visual").outerHeight(),
            quickFixed = header + mainVisual;

        if ( st >= quickFixed ) {
            sticky.addClass("fixed")
        } else {
            sticky.removeClass("fixed");

        }
    }

    $(window).scroll(function(){
        asideFixed()
    });

    $(window).resize(function(){
        asideFixed()
    });



});