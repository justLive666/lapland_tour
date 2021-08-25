let tour_slider = new Swiper(".tours__swiper .swiper-container", {
	slidesPerView: 1,
	spaceBetween: 10,
	simulateTouch: true,
  	speed: 800,
  	autoHeight: true,
	breakpoints: {
		1200: {
			slidesPerView: 3,
			spaceBetween: 30
		},
		860: {
			slidesPerView: 2,
			spaceBetween: 20
		},
		300: {
			slidesPerView: 1,
			spaceBetween: 10
		}
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	}
});