$(document).ready(function()
{
	var text = ["Renewable energy? I'm a big fan","Keep an even kale","Herb your enthusiasm","Q: Why did the leaf go to the doctor? A: Because it was feeling green"];
	var x = Math.floor((Math.random()*4));
	$('#myTxt').html(text[x]);
});