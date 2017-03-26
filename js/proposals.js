window.onload = () => {
	setFormSize();
}

window.onresize = () => {
	setFormSize();
}

function setFormSize()
{
	// Set the size of the form to the available window size
	const form = document.getElementById('form');
	// .slice(0, -2) gets rid of the trailing "px"
	const navbarHeight = Number(window.getComputedStyle(document.getElementsByTagName('nav')[0]).getPropertyValue('height').slice(0, -2));
	const footerHeight = Number(window.getComputedStyle(document.getElementsByTagName('footer')[0]).getPropertyValue('height').slice(0, -2));
	console.log(navbarHeight, footerHeight, window.innerHeight - navbarHeight - footerHeight);
	const height = window.innerHeight - navbarHeight - footerHeight;
	form.style.height = height + 'px';
	form.style.width = window.innerWidth + 'px';
}
