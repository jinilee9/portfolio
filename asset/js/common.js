function preventBackButton() {
    history.pushState(null, null, location.href);
    window.addEventListener('popstate', function (event) {
        history.pushState(null, null, location.href);
        event.preventDefault();
    });
}

document.addEventListener("DOMContentLoaded", function () {
    preventBackButton();
});


var portfolioIframe = {
    open : function(path){ // path = 불러오는 파일 명
        var $pop = $('#popIframe'); // 팝업
        var $frame = $pop.find('.frame'); // 팝업 아이프레임
        $frame.css({'opacity':'0'}).attr({'src':'./portfolio/'+path+'.html'}); // 프레임 투명도0, 속성중 src의 값을 받아오면 경로로 적용한다
        $pop.show().stop().animate({'top':0}, 800, 'easeOutQuart', function(){ // 팝업 보이기 > 위치 Top 0으로 애니메이션 효과
            $(this).find('.btn_close').stop().fadeIn(600); // 팝업 닫기버튼 나타남
            $frame.stop().animate({'opacity':'1'}, 1000); //팝업 아이프레임 나타남
        });
        $pop.removeClass('close'); // 팝업 클래스 close 제거
    },
    close : function(){
        $('#popIframe').stop().fadeOut(400, function(){ //서서히 사라진다
            $(this).addClass('close').css({ 'top': '-115%' }) // 초기 위치값 설정
        });
    }
}

function goToHome() {
    window.location.href = 'index.html';
}