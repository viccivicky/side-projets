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
			$('.wrapper').append('<div class="recipe" data-url="'+recipe.json_file+'">' + recipe.label + '</div>');  	
		}
	});
	
	function showRecipe(recipe) {
		$('.wrapper').html('');
 		$('.wrapper').append('<h1 class="single_recipe_title">'+recipe.title+'</h1>');
 		$('.wrapper').append('<p class= "serving">'+recipe.serving+'</p>');
 		$('.wrapper').append('<h2>Ingredients</h2><ul id="ingredients"></ul>');
 		for(var i= 0; i < recipe.ingredients.length; i++) {
	 		$('#ingredients').append('<li>'+recipe.ingredients[i]+'</li>');
	 	}
	 	$('.wrapper').append('<h2>Cooking Instructions</h2><ol id="instructions"></ol>');
 		for(var i= 0; i < recipe.instructions.length; i++) {
	 		$('#instructions').append('<li>'+recipe.instructions[i]+'</li>');	
	 	}
	}
	
	$('.wrapper').on('click', '.recipe', function(evnt) {
		var json_file = $(this).attr('data-url');
 		var json = $.getJSON("app/data/recipies/"+json_file, function(json){
	 		showRecipe(json);
	 		
 		});
 		

	});
	
	var seasons_nav = {};
	

			
	
	 function recipe_index(){

			
	}


		
	});


});
