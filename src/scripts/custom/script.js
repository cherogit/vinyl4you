$(document).ready(function() {

	$(".fancy").fancybox({
		padding: 0,
		scrolling: 'no',
		fixed: true,
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

	$('.btn__callback._callback').click(function() {
		$(this).toggleClass('_active');
		$('.contacts._callback').toggleClass('_active');

		return false;
	});

	$('.footer__fixed-catalog').click(function() {
		$('.catalog-menu._footer').toggleClass('_active');

		return false;
	});

	var accordeon_links = $('.catalog-menu._footer .catalog-menu__list-item');
	
		accordeon_links.click(function() {
	 		accordeon_links.not(this).removeClass('_active').find('.catalog-submenu').stop().slideUp();
	 		$(this).toggleClass('_active').find('.catalog-submenu').stop().slideToggle();
	 	return false;
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

	var thumb_links = $('.product-card__thumbs a'),
		big_links = $('.product-card__preview a');

		thumb_links.click(function() {
		thumb_links.removeClass('_active');
		$(this).addClass('_active');
		big_links.removeClass('active');
	    big_links.filter('[href="' + $(this).attr('href') + '"]').addClass('active');
	    return false;
	}).eq(0).trigger('click');

	$('.slider-thumbs').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		centerMode: false,
		variableWidth: true,
	});



	// counter

	$('.counter__minus').click(function() {
		var input = $(this).closest('.counter').find('input'),
		curr_val = parseInt(input.val());
		if (curr_val > input.data('min'))
			input.val(curr_val - 1);
		return false;
	});

	$('.counter__plus').click(function() {
		var input = $(this).closest('.counter').find('input'),
		curr_val = parseInt(input.val());
		if (curr_val < input.data('max'))
			input.val(curr_val + 1);
		return false;
	});

	// counter end


	// responsive accordion to tabs

	$(document).ready(function() {
		if ($('.accordion')[0]) {
			if ($(window).width() > 768) {
				$('.accordion-content:not(:first)').hide();
				$('.accordion-title:first-child').addClass('active');
			} else {
				$('.accordion-content').hide();
			};

			$('.accordion-title').on('click', function() {

				if ($(window).width() > 768) {

					$('.accordion-content').hide();
					$(this).next().show().prev().addClass('active').siblings().removeClass('active');

					return false;

				} else {
					$(this).next().toggle().prev().toggleClass('active');
					return false;
				};
			});
		}
	});

});
