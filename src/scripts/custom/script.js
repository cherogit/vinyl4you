$(document).ready(function() {

	if ($(window).width() <= 1200) {
		$('.search').click(function() {
			$(this).toggleClass('active');
			return false
		});
	}
	
	
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

	$('.product-slider').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		nextArrow: '<a href="" class="slider-arrow _next"></a>',
		prevArrow: '<a href="" class="slider-arrow _prev"></a>',
		centerMode: false,
		// centerPadding: 30,
		variableWidth: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					variableWidth: true,
					centerMode: true,
					infinite: true,
				}
			},
			{
				breakpoint: 760,
				settings: {
					slidesToShow: 3,
					variableWidth: true,
					centerMode: true,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					variableWidth: true,
					centerMode: true,
					centerPadding: 30,
				}
			}
		]
	});
});
