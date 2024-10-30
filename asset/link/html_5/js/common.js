$(function(){

    var mql = window.matchMedia("screen and (max-width: 768px)");
    $(".display-m , .display-w").addClass('display-hide');

    /* 처음에 감지 */
    if (mql.matches) {
        $('.display-m').removeClass('display-hide');
        $('.display-w').addClass('display-hide');

        $(".footer .sns li").on("click", function(){
            $(".sns-tooltip").hide();
            $(this).children(".sns-tooltip").fadeIn();
        })
    } else {
        $('.display-m').addClass('display-hide');
        $('.display-w').removeClass('display-hide');

        $(".footer .sns li").hover(function(){
            $(this).children(".sns-tooltip").fadeIn();
        }, function(){
            $(".sns-tooltip").hide();
        })
    }

    /* 해상도 변화 감지 */
    mql.addListener(function(e) {
        if(e.matches) {
            $('.display-m').removeClass('display-hide');
            $('.display-w').addClass('display-hide');

            $('.footer .sns li').on("click", function(){
                $(".sns-tooltip").hide();
                $(this).children(".sns-tooltip").fadeIn();
            })
        } else {
            $('.display-m').addClass('display-hide');
            $('.display-w').removeClass('display-hide');

            $('.footer .sns li').hover(function(){
                $(this).children(".sns-tooltip").fadeIn();
            }, function(){
                $(".sns-tooltip").hide();
            })
        }
    });

});