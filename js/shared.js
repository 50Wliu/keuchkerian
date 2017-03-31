window.onload = () => {
	const text = ["Renewable energy? I'm a big fan",
	            'Keep an even kale',
	            'Herb your enthusiasm',
	            'Visualize whirled peas',
	            'These are tearable puns',
	            'Air pollution is a mist-demeanor',
	            'Wasting paper cups is high tree sin',
	            'Get green-shirtified',
	            "I'd like to spend more thyme with you",
	            'A power outage at school often leaves the students delighted!',
	            'All this talk about wind energy really blew me away!',
	            'Q: Why did the leaf go to the doctor? A: Because it was feeling green',
	            'Q: How can you tell the ocean is friendly? A: It waves',
	            'Q: How do trees access the internet? A: They log on',
	            'Q: How many tickles does it take to make a squid laugh? A: Ten tickles',
	            "Q: What's the name of the new Tom Cruise eco-thriller? A: Mission Compostable",
	            'Q: Why do potatoes make good detectives? A: Because they keep their eyes peeled.'];
	const x = Math.floor(Math.random() * text.length);
	$('#pun').html(text[x]);
};

$(function () {
	$('[data-toggle="tooltip"]').tooltip();
});
