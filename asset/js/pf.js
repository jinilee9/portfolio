$(document).ready(function () {
    // 성능 최적화를 위한 스로틀링 설정
    const THROTTLE_DELAY = 100; // 밀리초
    const VIEWPORT_OFFSET = 300; // 뷰포트에서 추가로 고려할 오프셋

    // 스크롤 비율 계산 (한 번만 계산)
    const scrollTopRatio = calculateScrollRatio();

    // 스크롤 비율 계산 함수
    function calculateScrollRatio() {
        return document.scrollingElement
            ? $(document).height() / document.scrollingElement.scrollHeight
            : 1;
    }

    // 조정된 스크롤 위치 반환
    function getAdjustedScrollTop() {
        return $(window).scrollTop() * scrollTopRatio;
    }

    // 요소가 뷰포트 내에 있는지 확인
    function isElementInView($element) {
        const scrollTop = getAdjustedScrollTop();
        const windowHeight = $(window).height();
        const elementOffset = $element.offset();
        const elementTop = elementOffset.top;
        const elementHeight = $element.outerHeight();

        // 요소가 뷰포트 내에 완전히 또는 부분적으로 있는 경우
        return (
            (elementTop >= scrollTop && elementTop + elementHeight <= scrollTop + windowHeight) || // 완전히 보이는 경우
                    (elementTop <= scrollTop + windowHeight - VIEWPORT_OFFSET) // 약간의 오프셋 고려
        );
    }

    // 보이는 요소에 애니메이션 클래스 추가
    function animateVisibleElements() {
        $('.effect').each(function () {
            const $this = $(this);
            if (isElementInView($this) && !$this.hasClass('fade_in_up')) {
                $this.addClass('fade_in_up');
            }
        });
    }

    // 스크롤 이벤트 스로틀링
    let scrollTimeout = null;
    $(window).on('scroll', function () {
        if (scrollTimeout === null) {
            scrollTimeout = setTimeout(() => {
                animateVisibleElements();
                scrollTimeout = null;
            }, THROTTLE_DELAY);
        }
    });

    // 초기 로드 시 애니메이션 적용
    animateVisibleElements();
});