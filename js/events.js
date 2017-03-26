window.onload = () => {
	for(const element of document.getElementsByClassName('time')) {
		const time = moment(element.innerText, "MMMM-Do-YYYY hh a");
		element.innerText += " (" + moment().to(time) + ")";
	}
}

function expand() {
	const activeElement = document.activeElement;
	activeElement.style.display = "none"; // a (more...)
	activeElement.nextElementSibling.style.display = "inline"; // p (description)
	activeElement.nextElementSibling.nextElementSibling.style.display = "block"; // a (less...)
}

function collapse() {
	const activeElement = document.activeElement;
	activeElement.style.display = "none"; // a (less...)
	activeElement.previousElementSibling.style.display = "none"; // p (description)
	activeElement.previousElementSibling.previousElementSibling.style.display = "inline"; // a (more...)
}
