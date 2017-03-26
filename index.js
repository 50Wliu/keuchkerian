// index.js

$(window).scroll(function() {
	// right now this is an anonymous function
	// because it's within "scroll" it's
	// automatically gonna get called
	console.log($(window).scrollTop());

	// create a variable called breakpoint
	var breakpoint = 100;

	if ($(window).scrollTop() >= breakpoint){
		$('.carousel-inner').css('visibility',
			'visible').hide().fadeIn(1500);
		// 1500 = 1.5 seconds

		// make this only run once; cause scroll is once
		$(this).off('scroll')

		// activate carousel
		$('#myCollapsible').on('hidden.bs.collapse', function () {
	  		// do something…
		})
	}
});