$(function() {
	$('.intro .main h3').each(function() {
		$(this).css({
			'padding-left': $(this).find('span').outerWidth()+24+'px'
		});
	});
	$('.img-bg').each(function() {
		$(this).parent().css({
			'background': 'url("'+$(this).attr('src')+'") no-repeat center center',
			'background-size': 'cover'
		});
	});
	$('.stat-e ul li p').each(function() {
		var m = (72-$(this).height())/2;
		if ( m < 0 ) {
			m = 0;
		}
		$(this).css({
			'padding-top': m+'px'
		});
	});
	$('.reg-b .map h5').on('click', function(e) {
		e.preventDefault();
		if ( !$(this).parent().hasClass('opened') ) {
			$(this).text('Скрыть карту');
			$(this).parent().addClass('opened');
		} else {
			$(this).text('Показать на карте');
			$(this).parent().removeClass('opened');
		}
	});
});