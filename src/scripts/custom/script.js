$(document).ready(function() {

	$('.search-link').click(function(event) {
		var searchForm = $('.search._toggle');

		event.preventDefault();
		$(this).hide();
		searchForm.addClass('_active');
	});
	
	$('.promo-block__slider._slider').bxSlider({
		mode: 'horizontal',
		slideMargin: 0,
		touchEnabled: true,
		auto: true,
		pause: 3000,
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
		variableWidth: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					infinite: true,
					slidesToShow: 3,
					variableWidth: true,
					centerMode: true,
				}
			},
			{
				breakpoint: 760,
				settings: {
					infinite: true,
					slidesToShow: 2,
					variableWidth: true,
					arrows: false,
					// centerMode: true,
				}
			}
		]
	});
});
