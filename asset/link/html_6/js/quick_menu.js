$(function(){

    // quick menu
    $(".today-view").slick({
        autoplay: false,
        speed : 400,
        slidesToShow: 2,
        slidesToScroll: 1,
        adaptiveHeight: true,
        infinite: true,
        pauseOnHover: true,
        dots: false,
        arrows: true
    });

    var qkMenu = $(".quick-menu"),
        qkBtn = $(".quick-menu .menu-btn button");

    qkBtn.click(function(e){
        var menuCont = $(this).attr("data-menu");
        $(".today-view").slick("refresh");
        qkBtn.removeClass("active");
        $(this).addClass("active");
        qkMenu.find(".menu-cont").hide();
        qkMenu.find(".menu-cont#"+menuCont).fadeIn()
    });
    $("body, html").click(function(e) {
        if(qkMenu.has(e.target).length == 0) {
            qkBtn.removeClass("active");
            qkMenu.find(".menu-cont").hide();
        }else{}
    });



    // aside fixed
    $(window).scroll(function(){
        if ( $(this).scrollTop() > 0) {
            $(".quick-menu").addClass("fixed")
        } else {
            $(".quick-menu").removeClass("fixed")
        }
    });



});