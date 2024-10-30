$(function(){
    /*
     For mobile
     */

    // menu-toggle on
    $(".menu-toggle").click(function(){

        $(this).toggleClass("on");
        $("#category").toggleClass("on")

    });


    // aside animation
    $(".menu-toggle").click(function(){

        $("#aside").addClass("slide-left");
        $('#aside').append('<div class="aside-overlay"></div>');

    });
    $(".side-close").click(function(){

        $("#aside").removeClass("slide-left");

    });


    // accordion
    $(".accordion-item").each(function(){

        var depth = $(this).children(".accordion-panel").length;

        if(depth > 0) {

            $(this).children(".accordion-thumb").addClass("is-active")

        } else {

            $(this).children(".accordion-thumb").removeClass("is-active")

        }

    });

    $(".accordion-thumb").on("click", function () {

        if ($(this).hasClass("is-open")) {

            $(this).removeClass("is-open");
            $(this).parent().children(".accordion-panel").slideUp(200);

        } else {

            $(".accordion-thumb").removeClass("is-open");
            $(this).addClass("is-open");
            $(this).parent().children(".accordion-panel").slideDown(200);
            $(this).parent().siblings().children(".accordion-panel").slideUp(200);

        }

    })

    $(".accordion-item-last").each(function(){

        var depth = $(this).children(".accordion-panel-last").length;

        if(depth > 0) {

            $(this).children(".accordion-thumb-last").addClass("is-active")

        } else {

            $(this).children(".accordion-thumb-last").removeClass("is-active")

        }

    });

    $(".accordion-thumb-last").on("click", function () {

        if ($(this).hasClass("is-open")) {

            $(this).removeClass("is-open");
            $(this).parent().children(".accordion-panel-last").slideUp(200);

        } else {

            $(".accordion-thumb-last").removeClass("is-open");
            $(this).addClass("is-open");
            $(this).parent().children(".accordion-panel-last").slideDown(200);
            $(this).parent().siblings().children(".accordion-panel-last").slideUp(200);

        }

    })

    // slide
    $("#today-wrap").slick({
        speed : 400,
        variableWidth: true,
        adaptiveHeight: true,
        infinite: false,
        mobileFirst: true,
        outerEdgeLimit: false,
        dots: false,
        nextArrow: ".today-view-wrap .slick-next",
        prevArrow: ".today-view-wrap .slick-prev"
    });

});