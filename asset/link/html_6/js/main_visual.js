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
        dots: true,
        arrows: false,
        fade: true
    });

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

    // tab
    $(".tab-menu li").click(function(){
        var tab_target= $(this).attr("rel");
        var tab_content= $(this).attr("data-content");

        $(this).siblings("li").removeClass("active");
        $(".tab-content[id*=" + tab_content + "]").removeClass("active");

        $(this).addClass("active");
        $("#"+tab_target).addClass("active");

    });

});