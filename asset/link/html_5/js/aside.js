$(function(){

    // tab
    $(".tab-menu li").click(function(){
        var tab_target= $(this).attr("rel");
        var tab_content= $(this).attr("data-content");

        $(this).siblings("li").removeClass("active");
        $(".tab-content[id*=" + tab_content + "]").removeClass("active");

        $(this).addClass("active");
        $("#"+tab_target).addClass("active");

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

    // slide
    $("#today-view").slick({
        speed : 400,
        variableWidth: true,
        adaptiveHeight: true,
        infinite: false,
        mobileFirst: true,
        outerEdgeLimit: false,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 9999,
                settings: "unslick"
            },
            {
                breakpoint: 768,
                settings: {
                }
            }
        ]
    });

});