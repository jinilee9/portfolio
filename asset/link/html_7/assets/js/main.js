$(function(){
    // go top
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $(".goTop").addClass("show");
        } else {
            $(".goTop").removeClass("show");
        }
    });
    $(".goTop").on("click", function(e) {
        e.preventDefault();
        $("html, body").animate({scrollTop: 0}, 300);
    });
    

    // fullpage
    var total_section = 0; //전체 원페이지 수
    var current_idx = 0;
    var screen_h = 0; // 화면 높이
    var page_h = 0;
    var last_y = 0; // 스크롤 마지막 하단 높이
    var onpage_on = true;
    var isScroll = false;
    
    $(document).ready(function(){
        
        init();
        
        // Scroll Event
        $('.container').on('scroll mousewheel', function(event) {	
    
            if(last_y > $("html").scrollTop() && !onpage_on){
                
                //원페이지 스크롤 진입
                console.log(":: 원페이지 시작 ::");
                onpage_on = true;
                isScroll = false;
            }
            
            if(!onpage_on) return;
            
            //스크롤 이벤트 막기
            event.preventDefault();
            event.stopPropagation();		
            if(isScroll) return; // 현재 스크롤이 동작중이면 종료
            
            
            isScroll = true;		
            var direction = event.originalEvent.wheelDelta; //마우스 휠 방향
            var y = 0;
    
            if(direction > 0){
                // up
                current_idx --;
                if(current_idx < 0){current_idx = -1;}
                y = current_idx * page_h;
            }
            else{
                // down
                current_idx ++;
                if(current_idx > total_section){
                    current_idx = total_section;
                    onpage_on = false;
                    return;
                }
                
                y = current_idx * page_h;		
            }
    
            $('html').animate({scrollTop: y}, 100, function(){isScroll=false;});	
        });
    });
    
    $( window ).resize(function() {        
        // 반응형
        setHeight();
    });
    
    
    function init(){        
        setHeight();        
        total_section = $('.full').length;
        last_y = page_h * total_section;
    }	
    
    function setHeight(){        
        // 높이 설정
        screen_h = document.body.clientHeight;
        page_h = screen_h - 0;
        $(".full").height(page_h);
    }    


    // swiper initiation
    /* team section */
    var swiper = new Swiper(".swiper-container", {
        //초기값 설정 모바일값이 먼저!!
        slidesPerView: 1.5, 
        spaceBetween: 25,
        slidesOffsetAfter: 35,
        freeMode: true,
        navigation: {
            nextEl: '.arrow__next',
            prevEl: '.arrow__prev',
        },

        breakpoints: {   
        //브라우저가 768보다 클 때     
        768: { 
            slidesPerView: 'auto',  
            allowTouchMove: false,
            slidesOffsetAfter: 0,
        },
        },
    });   

    
    // header color change
    function navOn() {
        var nowTop = $(window).scrollTop();
		
        var sec1_offset = $('.project').offset().top - 100;
        var sec2_offset = $('.content').offset().top - 300;

        $('.header').removeClass('dark');

        if ( nowTop >  0 && nowTop < sec2_offset) {
            $('.header').eq(0).addClass('dark');
        } else if( nowTop >=  sec2_offset  ) {
            $('.header').eq(2).addClass('dark');
        }
    };
    navOn();

    $(window).scroll(function() {
        navOn();
    });
    

    // indicator__item
    var dot2 = $(".indicator__item");
    var contents = $(".container__wrapper > section");

    dot2.on("click",function(e){
        e.preventDefault();
        
        var target = $(this);
        var index = target.index();
        var section = contents.eq(index);
        var offset = section.offset().top;
        
        $("body, html").animate({scrollTop:offset});
    });

    $(window).on("scroll",function(){
        var wScroll = $(this).scrollTop();

        if(wScroll >= contents.eq(0).offset().top){
            dot2.removeClass("on");
            dot2.eq(0).addClass("on");
        }
        if(wScroll >= contents.eq(1).offset().top-190){
            dot2.removeClass("on");
            dot2.eq(1).addClass("on");
        }
        if(wScroll >= contents.eq(2).offset().top-190){
            dot2.removeClass("on");
            dot2.eq(2).addClass("on");
        }
        if(wScroll >= contents.eq(3).offset().top-190){
            dot2.removeClass("on");
            dot2.eq(3).addClass("on");
        }
        if(wScroll >= contents.eq(4).offset().top-190){
            dot2.removeClass("on");
            dot2.eq(4).addClass("on");
        }
        if(wScroll >= contents.eq(5).offset().top-190){
            dot2.removeClass("on");
            dot2.eq(5).addClass("on");
        }
        if(wScroll >= contents.eq(6).offset().top-190){
            dot2.removeClass("on");
            dot2.eq(6).addClass("on");
        }
        if(wScroll >= contents.eq(7).offset().top-190){
            dot2.removeClass("on");
            dot2.eq(7).addClass("on");
        }
    });

    // floating
    $(".btn__close").click(function(){
        $(".floating").css("display","none");
    });

    // AOS initiation
    AOS.init();    

});

