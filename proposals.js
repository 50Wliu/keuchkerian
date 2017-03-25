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
	const height = window.innerHeight - parseInt(window.getComputedStyle(document.getElementById('navbar')).getPropertyValue('height'), 10);
	form.style.height = height + 'px';
	form.style.width = window.innerWidth + 'px';
}
