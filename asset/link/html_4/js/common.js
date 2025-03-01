$(function(){
    // go top
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $(".go-top").addClass("on");
        } else {
            $(".go-top").removeClass("on");
        }
    });
    $(".go-top").on("click", function(e) {
        e.preventDefault();
        $("html, body").animate({scrollTop: 0}, 300);
    });
    
    // header
    $(window).on("scroll", function() {
        if ($(window).scrollTop() >= 100) {
            $("header").addClass("fixed");
        } else if ($(window).scrollTop() < 100) {
            $("header").removeClass("fixed");
        }
    });

    // side-bar
    $('.toggle-side-bar-btn').click(function(){
        //console.log("토글 사이드바 버튼클릭");
        
        var $clicked = $(this);
        var nowAnimating = $clicked.attr('data-ico-now-animating');
        
        /* 만약 토글 사이드바 버튼의 요소가 Y가 되면 */
        if ( nowAnimating == "Y" ){
            return;
            /* 함수를 리턴하여 다시 안눌리게 한다 */
        }
        
        /* 만약 클릭된 버튼에 active 클래스가 있다면 */
        if ( $clicked.hasClass('active') ){
            /* 사이드바를 없앤다 */
            hideLeftSideBar();
        }
        else {
            /* active 클래스가 없으면 나타나게 한다 */
            showLeftSideBar();
        }
        
        /* 아이콘에 active 클래스가 없으면 active 클래스를 넣어주고 있으면 빼줌 */
        $clicked.toggleClass('active');
        
    });

    /* 왼쪽 사이드바 함수 */
    function showLeftSideBar(){
        /* 메뉴바가 나올때 안에 펼쳐져 있는 메뉴들을 다 접기위해 엑티브를 없앤다 */
        $('.left-side-bar > ul > li.active').removeClass('active');
        $('.left-side-bar-box').addClass('active');
    };
    function hideLeftSideBar(){
        $('.left-side-bar-box').removeClass('active');
    };

    /* 메뉴 접히고 펼치기 */
    $('.left-side-bar > ul > li.active').click(function(e){
        //console.log("메뉴 클릭됨");
        
        /* 만약 클릭된 메뉴에 엑티브 클래스가 있으면 */
        if ( $(this).hasClass('active') ){
            /* 클릭된 메뉴의 엑티브를 없앤다 */
            $(this).removeClass('active');
        }
        else {
            /* 클릭된 메뉴의 형제의 엑티브를 없앤다 */
            $(this).siblings('.active').removeClass('active');
            
            /* 클릭된 메뉴(지역)의 엑티브를 없앤다 */
            $(this).find('.active').removeClass('active');
            
            /* 클릭된 메뉴의 엑티브를 만든다 */
            $(this).addClass('active');
        }
        
        /* 클릭된 메뉴 안에 다른 메뉴를 클릭하면 위에있는 메뉴가 같이 클릭되는데 그것을 막아준다 */
        e.stopPropagation();
    });

    /* 사이드바 배경을 클릭했을때 */
    $('.left-side-bar-box').click(function(){
        //console.log('배경클릭');
        
        /* 토글 사이드바 버튼을 클릭한 효과를 만듬 */
        $('.toggle-side-bar-btn').click();
    });

    /* 사이드바 메뉴를 클릭했을 때 */
    $('.left-side-bar-box').click(function(){
        //console.log('메뉴클릭');
        
        /* 토글 사이드바 버튼을 클릭한 효과를 만듬 */
        $('.toggle-side-bar-btn').click();
    });


    /* 사이드바를 클릭할때 상위요소인 배경이 같이 클릭되어서 사이드바가 들어가버리기 때문에 그것을 막음 */
    $('.left-side-bar-box').click(function(e){
        e.stopPropagation();
    });

    //slide-img
    $(".slider-box01 > li:gt(0)").hide();
    setInterval(function() { 
      $('.slider-box01 > li:first')
        .fadeOut(100)
        .next()
        .fadeIn(100)
        .end()
        .appendTo('.slider-box01');
    },  500);

    $(".slider-box02 > li:gt(0)").hide();
    setInterval(function() { 
      $('.slider-box02 > li:first')
        .fadeOut(100)
        .next()
        .fadeIn(100)
        .end()
        .appendTo('.slider-box02');
    },  500);

    $(".slider-box03 > li:gt(0)").hide();
    setInterval(function() { 
      $('.slider-box03 > li:first')
        .fadeOut(100)
        .next()
        .fadeIn(100)
        .end()
        .appendTo('.slider-box03');
    },  500);
       
    $(".slider-box04 > li:gt(0)").hide();
    setInterval(function() { 
      $('.slider-box04 > li:first')
        .fadeOut(200)
        .next()
        .fadeIn(200)
        .end()
        .appendTo('.slider-box04');
    },  1000);

    $(".slider-box05 > li:gt(0)").hide();
    setInterval(function() { 
      $('.slider-box05 > li:first')
        .fadeOut(200)
        .next()
        .fadeIn(200)
        .end()
        .appendTo('.slider-box05');
    },  1000);

    $(".slider-box06 > li:gt(0)").hide();
    setInterval(function() { 
      $('.slider-box06 > li:first')
        .fadeOut(200)
        .next()
        .fadeIn(200)
        .end()
        .appendTo('.slider-box06');
    },  1000);


    new WOW().init();
    
    AOS.init();

});

