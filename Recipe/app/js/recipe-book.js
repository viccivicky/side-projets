// 1 - a page container to wrap everything - add after step
var page_container = function()

{
	var that = this;
	
	this.parent = null;
	
	this.display = null;
	
	this.top_nav = null;
	
	this.nav_list - null;
}



// 2 - A div for you your season nav tabs 

	          
    $(data).each(function (index, item) {
            

		var season  = $('<div/>').html(item.label);
		top_nav.append(seasons)
		

		
		
		console.log(item.label);
		
		
		seasons.data('label', index)
		
    });

	
	
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
