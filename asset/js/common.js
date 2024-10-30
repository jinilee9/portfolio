// JavaScript Document
function intro(){

    var $intro = $('#intro');
    var $obj = $intro.find('div');
    var length = $obj.length;
    setTimeout(function () {
        $('.t2').addClass('loaded');
    }, 1000);
    setTimeout(function(){
        $('.t1').addClass('on');
    }, 100)
    setTimeout(function(i){
       $('.door').find('.original').delay(800*(i+1)).animate({'opacity':'1'}, 2000,function(){
            $(this).parent().addClass('show');
       });
       $('.door').find('.blur').delay(800*(i+1)).animate({'opacity':'0'}, 1800);         
    },3000);

    $intro.on('click','.door',function(i){
        $('.door').find('.blur').delay(800*i).animate({'opacity':'0'}, 1000);
        $('.door').find('.original').delay(800*i).animate({'opacity':'0'}, 800);
        $('#intro .txt-t2').delay(500).animate({'opacity':'0'}, 600);
        $('#intro .txt-t1').delay(1000).animate({'opacity':'0'}, 600, function(){
            $('#intro').fadeOut(800)
        });

    });
}

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
            $(this).addClass('close').css({'top':'-115%'}) // 초기 위치값 설정
        });
    }
}

$(function(){
        var $html = $('html');
        var $nav_wrap = $('#nav_wrap');
        var $nav = $('#nav');
        var $content = $('#content');
        var $item = $content.find('.item');
        var $obj = $content.find('.obj_things li'); 
        var $scroll = $('.scrollbox'); 
        var itemTop;
        var objTop;
        var itemHeight = 0;

        $scroll.niceScroll({
            cursorcolor : '#fff',
            cursorwidth:4,
            scrollspeed:120,
            cursorborderradius:'6px',
            mousescrollstep:30,
            railpadding:{
                top:10,
                right:5,
                left:0,
                bottom:10
            },
            background:'none',
            cursorborder:'none',
            autohidemode:true,
            touchbehavior:false,
            zindex:98            
        });

        $(window).on('resize', function(){
            itemTop = new Array;
            objTop = new Array;
            itemHeight = $item.innerHeight();
            $item.each(function(i){
                itemTop.push(Math.round($(this).offset().top)); 
            });
            $obj.each(function(i){
                objTop.push(Math.round($(this).offset().top));
            });
            //console.log(itemTop);
        }).resize(); // 리사이즈 실행

        $scroll.on('scroll', function(){
            var scrTop = $(this).scrollTop();
            $item.each(function(i){
                var $active = $(this).hasClass('active');
                if(scrTop > itemTop[i]-itemHeight && !$active){ // 스크롤값이 해당 배열의 값보다 크고, 클래스 active가 아닌경우
                    $item.eq(i).addClass('active');
                }else if(scrTop < itemTop[i]-itemHeight && $active){
                    //$item.eq(i).removeClass('active');
                }
            });
            $obj.each(function(i){
                var $active = $(this).hasClass('active');
                var dataTop = $(this).attr('data-top'); // 조건 값 조절
                if(scrTop > objTop[i]-dataTop && !$active){ // 스크롤값이 해당 배열의 값보다 크고, 클래스 active가 아닌경우
                    $(this).addClass('active');
                }
            });
            $content.find('.obj_cards li').each(function(){
                var dataTop = $(this).attr('data-top');
                $(this).stop().animate({'margin-top':scrTop*dataTop+'%'}, 800);
            })
            
        })        


        $nav_wrap.on('click', '.btn_toggle', function(){
            var $this = $(this);
            if($this.hasClass('on')){
                $this.removeClass('on');
                $nav.stop().fadeOut(400);
            }else{
                $this.addClass('on');
                $nav.stop().fadeIn(600);
            }
        });   
        
        var overLock = true;
        var subTop = 0;
        $nav.find('.nav-link').on({
            'mouseenter' : function(){
                var $this = $(this);
                var subWidth = $this.innerWidth();
                if(overLock){
                    subTop = $this.innerHeight() + $this.offset().top;
                    $this.next('.nav_contents').css({'top':subTop,'height':'0'}).stop().animate({'width':subWidth}, 400);
                }
            },
            'mouseleave' : function(){
                if(overLock){
                    $(this).next('.nav_contents').stop().animate({'width':0}, 300);
                }
            },
            'click' : function(){
                overLock = false;
                $nav_wrap.find('.btn_toggle').stop().fadeOut(400);
                $(this).next('.nav_contents').animate({'width':'100%'}, 500, function(){
                    $(this).animate({
                        'top':'0',
                        'height':'100%'
                    }, 600);
                });
                $('#nav .nav_menu > li').find('.nav_contents').addClass('is-open');
            }
        });

        $nav.on('click', '.btn_close', function(){
            overLock = true;
            $(this).parent().stop().animate({'top':subTop, 'height':'0'}, 300, function(){
                $(this).css({'width':'0'});
                $nav_wrap.find('.btn_toggle').stop().fadeIn(400);
            });
            $('#nav .nav_menu > li').find('.nav_contents').removeClass('is-open');
        });

});             





