window.onload = () => {
	const proposals = document.getElementsByClassName('proposal');
	for(const proposal of proposals) {
		let i = 0;
		for(const element of proposal.getElementsByTagName('p')) {
			const toggleElement = document.createElement('a');
			toggleElement.setAttribute('href', '#');
			toggleElement.setAttribute('onclick', i % 2 ? 'collapse();' : 'expand();');

			if(i % 2) {
				toggleElement.appendChild(document.createTextNode('less...'));
				toggleElement.style.display = 'none';
			} else {
				toggleElement.appendChild(document.createTextNode('more...'));
			}

			proposal.insertBefore(toggleElement, element.nextElementSibling);
			i++;
		}
	}
};

// eslint-disable-next-line no-unused-vars
function expand() {
	const activeElement = document.activeElement;
	activeElement.style.display = 'none'; // a (more...)
	activeElement.nextElementSibling.style.display = 'block'; // p (details)
	activeElement.nextElementSibling.nextElementSibling.style.display = 'block'; // a (less...)
}

// eslint-disable-next-line no-unused-vars
function collapse() {
	const activeElement = document.activeElement;
	activeElement.style.display = 'none'; // a (less...)
	activeElement.previousElementSibling.style.display = 'none'; // p (details)
	activeElement.previousElementSibling.previousElementSibling.style.display = 'inline'; // a (more...)
}

let auth2;
gapi.load('auth2', function() {
	auth2 = gapi.auth2.init({
		client_id: '414718215830-1fvqh9dcc1t4uc7ueisnsq93flehqcl2.apps.googleusercontent.com',
		hosted_domain: 'virginia.edu'
	});
});

// eslint-disable-next-line no-unused-vars
function onSignIn(googleUser) {
	if(googleUser.getHostedDomain() === 'virginia.edu') {
		document.getElementById('signed-out').style.display = 'none';
		document.getElementById('signed-in').style.display = 'inherit';
	}
}

// eslint-disable-next-line no-unused-vars
function disconnect() {
	auth2.disconnect();
}
