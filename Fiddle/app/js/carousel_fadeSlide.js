$(document).ready(function() {
	$("#hitarea").click(function() {
	    	$(".carousel").animate({
		    	"opacity": 1
	    	}, 1000);
	 $("#hitarea").remove();
	 var $carousel = $('.carousel'),
	     $wrapper = $('.wrapper');
	$wrapper.animate({
		'margin-top': 0
	});
		$carousel.click(function() {
		console.log("Click");
		  $wrapper.animate({
			  left:parseInt($wrapper.css('left'))> -640*3 ? '-=640px' : 0
		  }, 500);
	   	 
	    	});
		}); 
});

	