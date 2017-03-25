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
	form.style.height = window.innerHeight + 'px';
	form.style.width = window.innerWidth + 'px';
}
