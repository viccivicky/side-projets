$(document).ready(function() {

	$('#hitarea').click(function () {
      $('.carousel').animate({
      "top": '+= 1000px',
      "height": "toggle"
      }, 1000);      
      console.log("click")
      
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
	
