//event saat diklik
$('.page-scroll').on('click', function(e){
	var href = $(this).attr('href');
	var el = $(href);
	$('html, body').animate({
		scrollTop: el.offset().top - 70
	}, 1250, 'easeInOutExpo');

	e.preventDefault();
});