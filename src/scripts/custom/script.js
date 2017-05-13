$(document).ready(function() {
	
	$('.promo-block__slider._slider').bxSlider({
		mode: 'horizontal',
		slideMargin: 0,
		touchEnabled: false,
		auto: false,
		pause: 2000,
		pager: true,
		minSlides: 1,
		maxSlides: 1,
		moveSlides: 1,
		autoHover: true,
		autoStart: true,
		controls: false,
		responsive: true,
	});

	$('.product-slider .bx-slider').bxSlider({
		mode: 'horizontal',
		slideMargin: 40,
		touchEnabled: false,
		auto: false,
		pause: 2000,
		pager: false,
		slideWidth: 235,
		minSlides: 4,
		maxSlides: 4,
		moveSlides: 1,
		autoHover: true,
		autoStart: true,
		controls: true,
		responsive: true,
	});
});