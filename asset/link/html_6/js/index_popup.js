$(function(){
    $(document).ready(function () {
        /* popup */
        var popMax = $('.pop-img > ul li').length;
        var i = 0;

        function fade(incre) {
            if (popMax == 1 || popMax.length == 0) {
                return;
            }
            if (incre == true) i++;
            else i--;
            if (i == popMax) {
                i = 0;
            }
            if (i < 0) {
                i = popMax - 1;
            }
            $('.pop-img ul li').stop().fadeOut(0);
            $('.pop-img ul li').eq(i).stop().fadeIn();
            $('.pop-menu > a').removeClass();
            $('.pop-menu > a').eq(i).addClass('active');
        }

        var timer = setInterval(function () {
            fade(true)
        }, 3000);
        $('.pop-menu > a').hover(function () {
            clearInterval(timer);
            i = $(this).index() - 1;
            fade(true);
        }, function () {
            clearInterval(timer);
            timer = setInterval(function () {
                fade(true)
            }, 3000);
        });
    });
});