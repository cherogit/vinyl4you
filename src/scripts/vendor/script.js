$(document).ready(function() {
	
	var sliderPopular = $('.slider._popular .slide');

	$('.slider._popular').bxSlider({
		mode: 'horizontal',
		slideMargin: 20,
		touchEnabled: false,
		auto: false, 
		pause: 1000,
		pager: false,
		minSlides: 4,
		maxSlides: 4,
		moveSlides: 1,
		autoHover: true,
		autoStart: true,
		controls: true,
		responsive: true,
	});

	if (sliderPopular.length >= 5) {
		$('.slider._popular').parents('.bx-wrapper').addClass('_active');
	}

	$('.slider-thumbs').bxSlider({
		mode: 'horizontal',
		slideMargin: 0,
		touchEnabled: false,
		auto: false, 
		pause: 1000,
		pager: false,
		minSlides: 3,
		maxSlides: 3,
		moveSlides: 1,
		controls: true,
		responsive: true,
		slideWidth: $('.slider-thumbs').width() / 3,
	});

	$(".fancybox").fancybox({
	    scrolling: 'true',
	    fixed: false,
	});

	$('.productcard-aside__thumbs a').click(function() {
		$('.productcard-aside__thumbs a').removeClass('_active');
		$(this).addClass('_active');
	    $('.productcard-aside__big-imgs a').addClass('_hide').eq($(this).index()).removeClass('_hide');
	    return false;
	}).eq(0).trigger('click');
	

});