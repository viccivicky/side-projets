$( document ).ready(function() {


	$(".button").on("click", function() {
		
		
		$("ul li:nth-last-child(-n+2)").animate({
			opacity: 0.5,
		}, 200, function(){
			
			var el =  $(this);
			
			setTimeout(function() { 
				el.animate({opacity : 1});
			}, 500);
	
		});
			
		
		
		//$('#list_three').fadeIn(200, 1);
		//$('#list_four').fadeIn(200, 1);
	
		/* $("ul li:nth-last-child(-n+2)").animate({
			opacity: 0.5,
		}, 200, function(){
			}); */
	

	});
	
	});