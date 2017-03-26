window.onload = () => {
	const contentArea = document.getElementsByClassName('welcome')[0];
	let i = 0;
	for(const element of contentArea.getElementsByTagName('p')) {
		let toggleElement = document.createElement("a")
		toggleElement.setAttribute("href", "#");
		toggleElement.setAttribute("onclick", i % 2 ? "collapse();" : "expand();");

		if(i % 2) {
			toggleElement.appendChild(document.createTextNode("less..."));
			toggleElement.style.display = "none";
		}
		else {
			toggleElement.appendChild(document.createTextNode("more..."));
		}

		contentArea.insertBefore(toggleElement, element.nextElementSibling);
		i++;
	}

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
