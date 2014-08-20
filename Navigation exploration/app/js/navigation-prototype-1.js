$(function() {

	var all_levels;	// global varibale 


	var getJSON = $.getJSON( "app/data/taxonomy.json", function(json) {
	   console.log(json); 

	  // The json file loaded correctly, call our functions here 
	  all_levels = json.taxonomy
	  show_level(all_levels.content_list_1, 'level_one');
	  
	  
	}).fail(function(message) {
		// There was an error with the json file. 
    	console.log( "error" )
    	console.log(message);
	});
	
	
	 $('#wrapper').on("click", '.level_one', function() {
	 
	 	show_level(all_levels.content_list_2, 'level_two')
	 });

	 $('#wrapper').on("click", '.level_two', function() {
	 
	 	show_level(all_levels.content_list_3, 'level_three')
	 });

//can abstract this further

});

	var show_level = (function(data, level) {
	console.log('show_level');
	
	$('#wrapper').html('');
	
	for(var i= 0; i < data.length ; i++) {
		
		var level_content = $('<div />', {'class' : 'content_items '+ level, "html" : data[i]}).appendTo('#wrapper');
		
		//level_one_content.data('position', i);
		//label and position of the element
	}
		
		
	});
	
	
		
	
						
	
	
// load level one taxonomy JSON

// click to reveal overlay

// overlay content

// append close button
	
	 

