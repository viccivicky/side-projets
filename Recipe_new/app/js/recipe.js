$(function() {

	// move this outside the loop as otherwise you declare it everytime which uses memory
    var display = $('.wrapper ul'),
        tabs = $('.tabs');
//        nav_list = $('.menu ul li'); 
          


	var getJSON = $.getJSON( "app/data/seasons.json", function() {
	  // console.log( "success" );
	  // The json file loaded correctly, call our functions here
	  populateTabs(getJSON);
	  
	}).fail(function() {
		// There was an error with the json file. 
    	console.log( "error" );
	});
	 


	populateTabs = (function(getJSON) {
		console.log('populateTabs');
		console.info(getJSON);

		// google how to navigate through JSON object
		// set a variable to contain an array of items (label)
		// assign the array to a html li element
		// append the li array to the 'tabs' 
		
	});




          
          
         //set_carousel(0);
    /*        
    $(data).each(function (index, item) {
            

		// add your list_item as a var so we can access it a bit more easily
		var list_item  = $('<li>').html(item.title);
		// append the list to thumbnails
		top_nav.append(list_item)
		
		
		
		
		console.log(item.title);
		
		// add a reference to the list_item from the json object
		// using data https://api.jquery.com/jQuery.data/
		
		list_item.data('position', index)
		
    });
    */
    	
    




    
    // we can now add our event delegation 
    /*
    top_nav.on("click", 'li', function(evt){

		// reference to the list_item
		var list_item = $(this);
		
		// check we are getting the list_item
		var position = list_item.data('position')
		
		$('.selected').removeClass('selected');
		
		$(this).addClass('selected');		
		
		 $(this).addClass(function (){
			$(this) 
		}) 
		
		 $(this).toggle(function(){
			$(this).addClass("select");
		}, function() {
			$(this).removeClass("select");
		}); 
		
		
		//$(this).toggle();
		

		
		//console.log(data[position].src);
		
//set_carousel(position)
		
		// get the json reference .data from list_item
		
		// now match that to data and add that to a variable
		
		// we can now get the src variable 
		
		// and swap that out  the  image in wrapper
		
	});
	
	function set_carousel(pst){
		
		display.empty();
		
		var content = $('<li>');
		display.append(content);
		
		var content_title = $('<h2>', {"html":data[pst].title});
		content.append(content_title);
		
		var content_sub_heading = $('<h3>', {"html":data[pst].sub_heading});
		content.append(content_sub_heading);
		
		
		var content_txt = $('<span>', {"html": data[pst].description});
		content.append(content_txt);
		
		
	};
	
		
	
*/




/*	
		display.empty().append($('<span>').html(data[pst].description))
		.append($('<li>').append($('<ul>'))
		); 
		
		
		
		thumbnails.click(function () {
		carousel.attr({
			src: $(this).attr('img');
			});
			
		
		thumbnails.find('<img>').attr('src', item.src);

    	carousel.append($('<li>').append(
            $('<img>').attr('src', item.src))
        );

        thumbnails.append($('<li>').append(
            $('<img>').attr('src', item.src))
        );

        externalControls.push('.thumbs ul li:nth-child(' + (index + 1) + ') img');



	thumbnails.bind("click", function(){
	          carousel.attr({
		          src:$('<img>').attr('src', item.src)
	          })
          });  
		  
		  return false;

	
	 $(".wrapper").jCarouselLite({
        btnNext: ".right",
        btnPrev: ".left",
        visible: 1,
        btnGo: externalControls
    });
 
	$(data).each(function(index, item) {
		console.log(item);
		$('<li>').append($('<img>').attr('src', item.src).attr('width', 450).attr('height', 450)).appendTo('.wrapper ul');
	});
	

	$(".wrapper").jCarouselLite({
		btnNext: ".right",
		btnPrev: ".left",
		visible: 1
	});
	
	$(data).each(function(index, item){
		console.log(item);
		$('<li>').append($('<img>').attr('src', item.src).attr('width', 150).attr('height', 150)).appendTo('.thumbs ul');

		
	});

});


$(function() {
 $("#data").JSONView(data);
 }

 var thumbs = function(index, item){
 console.log(thumbs);
 }


 function thumbnails(element){
 var largeImg = document.getElementById(element);

 for(var i = 0; i < data.length; i++) {
 if(i === data[i].src == largeImg.src ) {
 if(i === imgArray.length){
 document.getElementById(element).src = data[0].src;
 break;
 }
 document.getElementById(element).src = data[i+1].src;
 break;
 }
 }


 var thumbnails = function(index, item) {
 console.log(thumbnails);
 };

 $(function() {
 var thumbnails = data.map(function(arrayCell){return arrayCell});

 var thumbnails = [];
 for(var i = 0; i < data.length; i++) {
 thumbnails[i] =(data[i]);
 };

 thumbnails.bind("click", function () {
 wrapper.attr({
 src: $(this).attr("href")
 })

 return false;

 }); */


 
});