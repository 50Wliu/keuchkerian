let activated = false;

document.onscroll = () => {
	// right now this is an anonymous function
	// because it's within "scroll" it's
	// automatically gonna get called
	if(activated) {
		return;
	}

	// create a variable called breakpoint
	const breakpoint = 100;

	if(document.documentElement.scrollTop >= breakpoint) {
		const carousel = document.getElementById('carousel-hss');
		carousel.style.visibility = 'visible';
		carousel.style.opacity = 1;

		$('.carousel').carousel(); // Activate carousel

		activated = true;
	}
};
