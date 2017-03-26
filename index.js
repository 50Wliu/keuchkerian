// index.js

$(window).scroll(function() {
	console.log($(window).scrollTop());

	var breakpoint = 80;

	if ($(window).scrollTop() >= breakpoint){
		$('.welcomePic1').css('visibility',
			'visible').hide().fadeIn(1500);
		// 1500 = 1.5 seconds

		// make this only run once; cause scroll is once
		$(this).off('scroll');
	}
})

$('#myCollapsible').on('hidden.bs.collapse', function () {
  console.log("hello world");
})