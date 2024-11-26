document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('.contact__bg');
  const particleNum = 200;
  const particleBaseSize = 8;

  // 기존 circle-container 제거
  container.innerHTML = '';

  // 새로운 circle-container 생성
  for (let i = 1; i <= particleNum; i++) {
    const circleContainer = document.createElement('div');
    circleContainer.className = 'contact__bg-circle';
    
    const circle = document.createElement('div');
    circle.className = 'circle';
    
    // 랜덤 크기 설정
    const circleSize = Math.random() * particleBaseSize;
    circleContainer.style.width = `${circleSize}px`;
    circleContainer.style.height = `${circleSize}px`;
    
    // 애니메이션 설정
    const startPositionY = Math.random() * 10 + 100;
    const moveDuration = 28000 + Math.random() * 9000;
    const delay = Math.random() * 37000;
    const startX = Math.random() * 100;
    const endX = Math.random() * 100;
    const endY = -startPositionY - Math.random() * 30;
    
    // 키프레임 애니메이션 생성
    const keyframes = `
      @keyframes move-frames-${i} {
        from { transform: translate3d(${startX}vw, ${startPositionY}vh, 0); }
        to { transform: translate3d(${endX}vw, ${endY}vh, 0); }
      }
    `;
    
    // 스타일 시트에 키프레임 추가
    const styleSheet = document.createElement('style');
    styleSheet.textContent = keyframes;
    document.head.appendChild(styleSheet);
    
    // 애니메이션 적용
    circleContainer.style.animationName = `move-frames-${i}`;
    circleContainer.style.animationDuration = `${moveDuration}ms`;
    circleContainer.style.animationDelay = `${delay}ms`;
    
    // circle의 애니메이션 딜레이 설정
    circle.style.animationDelay = `${Math.random() * 4000}ms`;
    
    circleContainer.appendChild(circle);
    container.appendChild(circleContainer);
  }
});

(function($) {
  var s,
  spanizeLetters = {
    settings: {
      letters: $('.js-spanize'),
    },
    init: function() {
      s = this.settings;
      this.bindEvents();
    },
    bindEvents: function(){
      s.letters.html(function (i, el) {
        var text = $.trim(el);
        var chars = text.split("");
        var result = '';
        
        for(var i = 0; i < chars.length; i++) {
          if(text.substr(i, 3) === "이진희") {
            result += '<span class="highlight">이진희</span>';
            i += 2; // 다음 3글자 건너뛰기
          } else {
            result += '<span>' + chars[i] + '</span>';
          }
        }
        
        return result;
      });
    },
  };
  spanizeLetters.init();
})(jQuery);