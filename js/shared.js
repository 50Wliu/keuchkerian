$(document).ready(function()
{
	var text = ["Renewable energy? I'm a big fan",
	            "Keep an even kale",
				"Herb your enthusiasm",
				"Visualize whirled peas",
				"Air pollution is a mist-demeanor",
				"Wasting paper cups is high tree sin",
				"Get green-shirtified",
				"Q: Why did the leaf go to the doctor? A: Because it was feeling green",
				"Q: How can you tell the ocean is friendly? A: It waves",
				"Q: How do trees access the internet? A: They log on",
				"Q: What's the name of the new Tom Cruise eco-thriller? A: Mission Compostable",
				"Q: Why do potatoes make good detectives? A: Because they keep their eyes peeled."];
	var x = Math.floor(Math.random() * text.length);
	$('#pun').html(text[x]);
});

$(function () {
	$('[data-toggle="tooltip"]').tooltip()
})
