$(function() {
//Why do I need to define an empty function? 

// 1 - a page container to wrap everything - add after step

	
	var seasons_data;	// global varibale 


	var getJSON = $.getJSON( "app/data/seasons.json", function(json) {
	  // console.log( "success" );
	  // The json file loaded correctly, call our functions here
	  seasons_data = json
	  populateTabs(json);
	  
	}).fail(function() {
		// There was an error with the json file. 
    	console.log( "error" );
	});
	 


	populateTabs = (function(json) {
		console.log('populateTabs');

	for(var i= 0; i < json.items.length ; i++) {

		var tab_element = $('<div / >', {'class' : 'four_seasons'}).appendTo('#seasons_nav');
		tab_element.html(json.items[i].label);
		//always create elements like this
		//create elements for tabs
		// enject the id so it can be referenced, append it to the element to the id and references the positioning				
		
		tab_element.data('position', i);
		//label and position
		
		//add data here
	}
	
	$('#seasons_nav').on("click", 'div', function(evt) {
		var position = $(this).data('position'),
			recipes = json.items[position].recipies;
		
		//emptying the wrapper - why
		$('.wrapper').html('');
		
		for(var i= 0; i < recipes.length; i++) {
			var recipe = recipes[i];
			$('.wrapper').append('<div class="recipe">' + recipe.label + '</div>'); //create this like the tab element above - recipe element
			
		//reference data here - json file label - json file	
		}
	});
	
	$('.wrapper').delegate('.recipe', 'click', function() {
		// Clicking recipe!
		//grab json file here. set another one above
		//once get the file name load in json file
		/*
				
			var getJSON = $.getJSON( "app/data/"  + data_var_name , function(json) {
			  // console.log( "success" );
			  // The json file loaded correctly, call our functions here
			  seasons_data = json
			  populateTabs(json);
			  
			}).fail(function() {
				// There was an error with the json file. 
		    	console.log( "error" );
			});

		*/
	});
	
	var seasons_nav = {};
	
	//var content_links = $('<div />', {'class': 'links'}).appendTo('.wrapper');
	//	content_links.html(json.items[i].recipies.label);
	
	
	
	//for loop within a for loop -  show recipes
	
	//happen on a click even
	

	
	
		
			
	
	 function recipe_index(){
		//click event outside the function
		
		
		
		/*var recipe_seasons = $(this);
		
		var position = recipe_seasons.seasons_data('position')*/
		
		
			
	}

	
	/* function recipe_index() {
		$("#seasons_nav").click(function(){
			$(".wrapper").show(json.items[i]recipies.label)
		});
	} */
	
		

		
// 1. loop through the json array (hint: the .length of 'items')
// 2. for each items in the loop, return 'label'
// 3. append the 'label' value to an li element

// 4. once you have finished the for loop, append all the li elements to the ul (.seasons)

		
	});


});
/*
		
	}
	

*/


// 2 - A div for your season nav tabs 


// 3 - A div  for the individual recipies of a selected season

	
	
	
/*

	4 - Load in the first json file with an ajax request
	file : data/seasons.json	
*/


	

/// when the ajax request is complete: 
// 5 - Make the data response a global variable called seasons_object so all parts of the app can access it

// 6 - display each season as a tab and assign a data variable called position. This is so you can access the data in the object


/* 
	7 - A function that can be used to set the contents of the container. 
	 	*  This will display recipies from the seasons_object by using the data position method
	 	- Create a list of the recipies in the selected season
	 	- Each item will need a data object called "json_file" on the div
*/
