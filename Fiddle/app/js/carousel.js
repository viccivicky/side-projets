$(document).ready(function() {
	$("#hitarea").click(function() {
    	$("#blackbox").animate({
	    	"opacity": 1
    	}, 1000, function () {
	    	$(".carousel").animate({
		    	"opacity": 1
	    	}, 1000);
	 $("#hitarea").remove();
	 var $carousel = $('.carousel'),
	     $wrapper = $('.wrapper');
		$carousel.click(function() {
		console.log("Click");
		  $wrapper.animate({
			  left:parseInt($wrapper.css('left'))> -640*3 ? '-=640px' : 0
		  }, 500);
		  
		  
	   	 
	    	});
		}); 
});

		
   
	
});