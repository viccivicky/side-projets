$(function () {
    var data = [
        {
            "src": "app/img/x_eyes.png",
            "description": "cross eyes"
        },
        {
            "src": "app/img/dot_eyes.png",
            "description": "dot eyes"
        },
        {
            "src": "app/img/beak.png",
            "description": "dot eyes"
        },
        {
            "src": "app/img/intoxicated.png",
            "description": "dot eyes"
        },
        {
            "src": "app/img/line_eyes.png",
            "description": "dot eyes"
        },
        {		
            "src": "app/img/one_eye.png",
            "description": "dot eyes"
        }
    ], externalControls = [];
	
		// move this outside the loop as otherwise you declare it everytime which uses memory
        var carousel = $('.wrapper ul'),
            thumbnails = $('.thumbs ul');
          
          
         set_carousel(3)
            
    $(data).each(function (index, item) {
            

		// add your list_item as a var so we can access it a bit more easily
		var list_item  = $('<li>').append($('<img>').attr('src', item.src));
		// append the list to thumbnails
		thumbnails.append(list_item)
		
		// add a reference to the list_item from the json object
		// using data https://api.jquery.com/jQuery.data/

		list_item.data('position',index);
 
		
/*
	
	$('.thumbs').on('click', function () {
		$(this).attr('.thumbs ul li:nth-child(' + (index + 1) + ') img');
	});
*/
		

    });
    
    
    // we can now add our event delegation 
    thumbnails.on("click", 'li', function(evt){
		
		// reference to the list_item
		var list_item = $(this);
		
		// check we are getting the list_item
 
		var position = list_item.data('position')
		
		console.log(data[position].src);
		
		set_carousel(position)
 
		
		// get the json reference .data from list_item
		
		// now match that to data and add that to a variable
		
		// we can now get the src variable 
		
		// and swap that out  the  image in wrapper
		
	});
	
	function set_carousel(pst){
		/*
		carousel.empty().append($('<li>').append(
			$('<img>').attr('src', data[pst].src))
		).append($('<span>').html(data[pst].description)); 
		*/
		
		// empty carousel
		carousel.empty();
		
		var big_list_item = $('<li>');
		carousel.append(big_list_item);
		
		
		var big_img = $('<img>', { "src" : data[pst].src});
		big_list_item.append(big_img);
		
		var caption = $('<span>', { "html" : data[pst].description});
		big_list_item.append(caption);
		
	};
		
	

});



/*	
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


 
