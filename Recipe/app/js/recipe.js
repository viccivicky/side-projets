$(function () {
    var data = [
        {
            "title": "Story 1",
            "sub_heading": "Sub-heading 1",
            "description": "Lorem ipsum 1 dolor sit amet, consectetur adipiscing elit. Vestibulum ornare porta elit, at feugiat mauris blandit nec. Nulla adipiscing ante ut imperdiet faucibus. Praesent libero nisi, dignissim at diam sed, posuere bibendum lorem. Maecenas interdum ut sapien a interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin sodales tempor mi, non fermentum erat adipiscing sit amet. Etiam pellentesque lacus sit amet lorem suscipit, a mollis arcu vehicula. Donec feugiat orci ut massa scelerisque placerat. Vivamus congue dapibus dolor eu dictum. Suspendisse non euismod mauris. Aliquam volutpat tortor non enim congue porta. Sed lacinia cursus elit eu eleifend. Proin tristique interdum odio eget sodales."
        },
        {
            "title": "Story 2",
            "sub_heading": "Sub-heading 2",
            "description": "Lorem ipsum 2 dolor sit amet, consectetur adipiscing elit. Vestibulum ornare porta elit, at feugiat mauris blandit nec. Nulla adipiscing ante ut imperdiet faucibus. Praesent libero nisi, dignissim at diam sed, posuere bibendum lorem. Maecenas interdum ut sapien a interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin sodales tempor mi, non fermentum erat adipiscing sit amet. Etiam pellentesque lacus sit amet lorem suscipit, a mollis arcu vehicula. Donec feugiat orci ut massa scelerisque placerat. Vivamus congue dapibus dolor eu dictum. Suspendisse non euismod mauris. Aliquam volutpat tortor non enim congue porta. Sed lacinia cursus elit eu eleifend. Proin tristique interdum odio eget sodales."
        },
        {
            "title": "Story 3",
            "sub_heading": "Sub-heading 3",
            "description": "Lorem ipsum 3 dolor sit amet, consectetur adipiscing elit. Vestibulum ornare porta elit, at feugiat mauris blandit nec. Nulla adipiscing ante ut imperdiet faucibus. Praesent libero nisi, dignissim at diam sed, posuere bibendum lorem. Maecenas interdum ut sapien a interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin sodales tempor mi, non fermentum erat adipiscing sit amet. Etiam pellentesque lacus sit amet lorem suscipit, a mollis arcu vehicula. Donec feugiat orci ut massa scelerisque placerat. Vivamus congue dapibus dolor eu dictum. Suspendisse non euismod mauris. Aliquam volutpat tortor non enim congue porta. Sed lacinia cursus elit eu eleifend. Proin tristique interdum odio eget sodales."
        },
        {
            "title": "Story 4",
            "sub_heading": "Sub-heading 4",
            "description": "Lorem ipsum 4 dolor sit amet, consectetur adipiscing elit. Vestibulum ornare porta elit, at feugiat mauris blandit nec. Nulla adipiscing ante ut imperdiet faucibus. Praesent libero nisi, dignissim at diam sed, posuere bibendum lorem. Maecenas interdum ut sapien a interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin sodales tempor mi, non fermentum erat adipiscing sit amet. Etiam pellentesque lacus sit amet lorem suscipit, a mollis arcu vehicula. Donec feugiat orci ut massa scelerisque placerat. Vivamus congue dapibus dolor eu dictum. Suspendisse non euismod mauris. Aliquam volutpat tortor non enim congue porta. Sed lacinia cursus elit eu eleifend. Proin tristique interdum odio eget sodales."
        },
        {
            "title": "Story 5",
            "sub_heading": "Sub-heading 5",
            "description": "Lorem ipsum 5 dolor sit amet, consectetur adipiscing elit. Vestibulum ornare porta elit, at feugiat mauris blandit nec. Nulla adipiscing ante ut imperdiet faucibus. Praesent libero nisi, dignissim at diam sed, posuere bibendum lorem. Maecenas interdum ut sapien a interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin sodales tempor mi, non fermentum erat adipiscing sit amet. Etiam pellentesque lacus sit amet lorem suscipit, a mollis arcu vehicula. Donec feugiat orci ut massa scelerisque placerat. Vivamus congue dapibus dolor eu dictum. Suspendisse non euismod mauris. Aliquam volutpat tortor non enim congue porta. Sed lacinia cursus elit eu eleifend. Proin tristique interdum odio eget sodales."
        },
        {		
            "title": "Story 6",
            "sub_heading": "Sub-heading 6",
            "description": "Lorem ipsum 6 dolor sit amet, consectetur adipiscing elit. Vestibulum ornare porta elit, at feugiat mauris blandit nec. Nulla adipiscing ante ut imperdiet faucibus. Praesent libero nisi, dignissim at diam sed, posuere bibendum lorem. Maecenas interdum ut sapien a interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin sodales tempor mi, non fermentum erat adipiscing sit amet. Etiam pellentesque lacus sit amet lorem suscipit, a mollis arcu vehicula. Donec feugiat orci ut massa scelerisque placerat. Vivamus congue dapibus dolor eu dictum. Suspendisse non euismod mauris. Aliquam volutpat tortor non enim congue porta. Sed lacinia cursus elit eu eleifend. Proin tristique interdum odio eget sodales."
        }
    ], externalControls = [];
	
		// move this outside the loop as otherwise you declare it everytime which uses memory
        var display = $('.wrapper ul'),
            left_nav = $('.menu ul'),
            nav_list = $('.menu ul li');
          
          
         set_carousel(0)
            
    $(data).each(function (index, item) {
            

		// add your list_item as a var so we can access it a bit more easily
		var list_item  = $('<li>').html(item.title);
		// append the list to thumbnails
		left_nav.append(list_item)
		
		
		/* function nav_text(txt) {
    	display.append($('<p>').html(data[txt].title)).append($('<li>').append($('<ul>'))
    	);
    	}; */
		
		
		console.log(item.title);
		
		// add a reference to the list_item from the json object
		// using data https://api.jquery.com/jQuery.data/
		
		list_item.data('position', index)
		
    });
    
    
    
    // we can now add our event delegation 
    left_nav.on("click", 'li', function(evt){

		// reference to the list_item
		var list_item = $(this);
		
		// check we are getting the list_item
		var position = list_item.data('position')
		
		/* $(this).addClass(function (){
			$(this) 
		}) */
		
		/* $(this).toggle(function(){
			$(this).addClass("select");
		}, function() {
			$(this).removeClass("select");
		}); */
		
		
		//$(this).toggle();
		

		
		console.log(data[position].src);
		
		set_carousel(position)
		
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
	
		
	

});



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


 
