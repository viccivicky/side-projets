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
	

	 
//click and move to the next levels	 

//can abstract this further

});

	var show_level = (function(data, level) {
	console.log('show_level');
	
	$('#wrapper').html('');
	
	for(var i= 0; i < data.length ; i++) {
		
		
		
		//level_one_content.data('position', i);
		//label and position of the element
	}
		
		
	});
	
	
		
	
						
	
	
// load level one taxonomy JSON

// click to reveal overlay

// overlay content

// append close button
	
	 

