$(function(){
	var data = [
	{
		"src" : "app/img/x_eyes.png",
		"description" : "cross eyes"
	},
	{
		"src" : "app/img/dot_eyes.png",
		"description" : "dot eyes"
	},
	{
		"src" : "app/img/beak.png",
		"description" : "dot eyes"
	},
	{
		"src" : "app/img/intoxicated.png",
		"description" : "dot eyes"
	},
	{
		"src" : "app/img/line_eyes.png",
		"description" : "dot eyes"
	},	
	{
		"src" : "app/img/one_eye.png",
		"description" : "dot eyes"
	},
	{
		"src" : "app/img/shock.png",
		"description" : "dot eyes"
	},
	{	
		"src" : "app/img/toung.png",
		"description" : "dot eyes"
	}
	];

	$(data).each(function(index, item) {
		console.log(item);
		$('<li>').append($('<img>').attr('src', item.src).attr('width', 200).attr('height', 200)).appendTo('.wrapper ul');
	});

	$(".wrapper").jCarouselLite({
		btnNext: ".right",
		btnPrev: ".left"
	});
});
