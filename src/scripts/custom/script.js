$(document).ready(function() {

	$(".fancy").fancybox({
		padding: 0,
		scrolling: 'no',
		fixed: true,
		autoCenter: true,
	});

	$(".phone").mask("+7 (999) 999-99-99");

	$('select').styler({
		'selectPlaceholder': '',
	});

	//ordering-form start

	$(function() {
		var form = $('.ordering-form'),
			step_links = $('.step-links a'),
			step_contents = $('.step-content');

		form.submit(function() {
			if (form.validate()) return false;
		});
			
		step_links.click(function() {
			var item = $(this);
			if (!item.index() || item.prev().attr('class') && (item.hasClass('done') || !form.validate())) {
				step_links.removeClass('active')
				item.prev().addClass('done');
				item.addClass('active');
				step_contents.hide();
				$(item.attr('href')).show();
			}
			if (!item.index()) {
				//скрыть кнопку назад
				$('.ordering-form__prev').hide();
			} else {
				//отобразить кнопку назад
				$('.ordering-form__prev').show();
			}
			if (item.is(':last-child')) {
				//скрыть кнопку вперед
				$('.ordering-form__next').hide();
				//отобразить сабмит
				$('.ordering-form__submit').show();
			} else {
				//отобразить кнопку вперед
				$('.ordering-form__next').show();
				//скрыть сабмит
				$('.ordering-form__submit').hide();
			}
			return false;
		});

		$('.ordering-form__prev').click(function() {
			step_links.filter('.active').prev().trigger('click');
			return false;
		});

		$('.ordering-form__next').click(function() {
			if ($('.step-links a.active').is(':last-child')) {
				form.submit();
			} else {
				step_links.filter('.active').next().trigger('click');
			}
			return false;
		});
	});

	//ordering-form finish

	// validate start

	(function( $ ){
		$.fn.validate = function() {

			var $this = this,
				num_errors = 0,
				validators = {
					email	: /^([a-z0-9_\.\-\+]+)@([\da-z\.\-]+)\.([a-z\.]{2,6})$/i,
					phone	: /^(\d|\+\d ?)?( )?\(?\d{3}\)?(-| )?\d{3}(-| )?\d{2}(-| )?\d{2}$/,
				}

			$this.show_error = function(element, msg) {
				var $element = $(element);
				if($element.data('error')) msg = $element.data('error');
				$element.addClass('has-error');
				var em = $('<span>'+msg+'</span>').insertAfter($(element)).addClass('error-text');
				num_errors++;
			}

			$this.check_input = function(input) {
				var $input = $(input),
					require = $input.data('required');
				if (require) {
					$input.removeClass('has-error');
					if ($input.val() == '') return $this.show_error(input, "Поле, необходимое для заполнения!");
					if (require == 'mixed') return ;
					if (require == 'phone') {
						if (!validators.phone.test($input.val())) {
							return $this.show_error(input, "Необходим телефонный номер в формате x (yyy) zzz-zz-zz!"); 
						}
					}
					if (require == 'email') {
						if (!validators.email.test($input.val())) {
							return $this.show_error(input, "Некорректный электронный адрес!"); 
						}
					}
				}
			}

			$this.check_select = function(select) {
				var $select = $(select);
				if ($select.data('required') && !$select.val()) {
					return $this.show_error($select, "Выберите подходящий пункт!");
				}
			}

			$this.check_checkbox = function(checkbox) {
				var $checkbox = $(checkbox);
				if ($checkbox.data('required') && !$checkbox.is(':checked')) {
					return $this.show_error($checkbox, "Поставьте галочку!");
				}
			}

			this.each(function (){
				$(".error-text").remove();
				$(this).find('input:text:visible, input[type="email"]:visible').each(function(){
					$this.check_input(this);
				});

				$(this).find('select:visible').each(function(){
					$this.check_select(this);
				});

				$(this).find('textarea:visible').each(function(){
					$this.check_input(this);
				});

				$(this).find('input:checkbox:visible').each(function(){
					$this.check_checkbox(this);
				});
			});
			
			return num_errors;
		}
	})(jQuery);
	// validate finish

	$('.search-link').click(function(event) {
		var searchForm = $('.search._toggle');

		event.preventDefault();
		$(this).hide();
		searchForm.addClass('_active');
	});


	$('.burger-menu').click(function() {
		$(this).toggleClass('active');
		$('.header__top-wrap .main-nav').toggleClass('active');
		return false;
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

	$('.catalog-aside__list-link._l2').click(function() {
		$(this).parent().toggleClass('_active');
		$(this).next().stop().slideToggle();
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
					slidesToScroll: 2,
					variableWidth: true,
					arrows: false,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToScroll: 1,
				}
			}
		]
	});

	$('.related-products__slider').slick({
		infinite: true,
		slidesToShow: 3,
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
					slidesToScroll: 2,
					variableWidth: true,
					arrows: false,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToScroll: 1,
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
		nextArrow: '<a href="" class="slider-thumbs__arrow _next"></a>',
		prevArrow: '<a href="" class="slider-thumbs__arrow _prev"></a>',
		centerMode: false,
		variableWidth: true,
	});


	$('.product-sidebar__slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: false,
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

	$('input[type="number"]').change(function() {
		var item = $(this);
		if (parseInt(item.val()) > item.data('max')) item.val(item.data('max'));
		if (parseInt(item.val()) < item.data('min')) item.val(item.data('min'));
	});

	// counter end

	// responsive accordion to tabs
	var accordion_title = $('.accordion-title'),
		accordion_content = $('.accordion-content');
	accordion_title.click(function() {
		accordion_title.removeClass('active');
		accordion_content.hide();
		$(this).addClass('active').next().show();

		if ($(window).width() < 800) {
			$('html, body').animate({
			    scrollTop: accordion_title.offset().top
			}, 400);
		}
	});
	accordion_title.eq(0).trigger('click');
});