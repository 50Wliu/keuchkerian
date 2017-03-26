window.onload = () => {
	const proposals = document.getElementsByClassName('proposal');
	for(const proposal of proposals) {
		let i = 0;
		for(const element of proposal.getElementsByTagName('p')) {
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

			proposal.insertBefore(toggleElement, element.nextElementSibling);
			i++;
		}
	}
}

function expand() {
	const activeElement = document.activeElement;
	activeElement.style.display = "none"; // a (more...)
	activeElement.nextElementSibling.style.display = "block"; // p (details)
	activeElement.nextElementSibling.nextElementSibling.style.display = "block"; // a (less...)
}

function collapse() {
	const activeElement = document.activeElement;
	activeElement.style.display = "none"; // a (less...)
	activeElement.previousElementSibling.style.display = "none"; // p (details)
	activeElement.previousElementSibling.previousElementSibling.style.display = "inline"; // a (more...)
}
