$(document).ready(function() {

	$(".fancy").fancybox({
	    padding: 0,
	    scrolling: 'no',
	    fixed: false,
	    autoCenter: true,
	});

	$("#phone").mask("+7 (999) 999-99-99");

	$('.search-link').click(function(event) {
		var searchForm = $('.search._toggle');

		event.preventDefault();
		$(this).hide();
		searchForm.addClass('_active');
	});

	// $(document).on('click', function(e) {
	//     if ($(e.target).closest('.search._toggle').length === 0) {
	//         $('.search._toggle').removeClass('_active');
	//     }
	// });

	$('.burger-menu').click(function() {
		$(this).toggleClass('active');
		$('.header__top-wrap .main-nav').toggleClass('active');
	});
	
	$('.promo-block__slider._slider').bxSlider({
		mode: 'horizontal',
		slideMargin: 0,
		touchEnabled: true,
		auto: true,
		pause: 5000,
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
				}
			}
		]
	});
});
