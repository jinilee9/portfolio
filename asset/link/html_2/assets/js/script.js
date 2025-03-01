$(document).ready(function () {

	/* Swiper Slides 1 -sec02
	-------------------------------------------------------*/
	var mySwiper = new Swiper('.sec02_swiper', {
		loop: false,
		slidesPerView: 'auto',
		centeredSlides: true,
		autoHeight: true,
		hashNavigation: {
			replaceState: false,
		},
		pagination: {
			el: '.swiper-pagination',
		},
		mousewheelControl: true,
		spaceBetween: 50,
	});

	/* Swiper Slides 2 -sec03
	-------------------------------------------------------*/
	var mySwiper = new Swiper('.sec03_swiper', {
		loop: true,
		grabCursor: true,
		centeredSlides: true,
		spaceBetween: 50,
		navigation: {
			nextEl: ".swiper-button-next.slide_btn_next",
			prevEl: ".swiper-button-prev.slide_btn_prev",
		},
		hashNavigation: {
			replaceState: false,
		},
		pagination: {
			el: '.swiper-pagination',
		},
		autoHeight: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		breakpoints: {
			// 화면의 넓이가 768px 이상일 때
			768: {
				slidesPerView: 'auto',
			},
		},
	});

});