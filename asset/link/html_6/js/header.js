$(function(){

    // mobile search
    $(".m-search").css("display",'none');
    $("#mserch").click(function(){
        $(".m-search").toggle();
        $(".ico-search").toggleClass("m-close");
    });

    // header fixed
    $(window).scroll(function(){
        var topBanner = $(".top-banner").height();

        if ( $(this).scrollTop() > topBanner) {

            $(".h-shadow, .m-search").addClass("fixed");

        } else {

            $(".h-shadow, .m-search").removeClass("fixed");

        }
    });

});