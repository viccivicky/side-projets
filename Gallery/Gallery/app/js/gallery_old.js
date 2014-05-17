$(document).ready(function(){
	$(".wrapper").jCarouseLite({
	btnNext: ".right",
	btnPrev: ".left"
	});
})



var gallery_images = function(){
	var that = {};

	that.wrapper = null;

	that.init = function() {
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
	}

	];

	_.each(data, function(item, index) {

	}).appendTo(".wrapper")



	}


}