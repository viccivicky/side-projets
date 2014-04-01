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

    $(data).each(function (index, item) {
        var carousel = $('.wrapper ul'),
            thumbnails = $('.thumbs ul');
            
	carousel.append($('<li>').append(
            $('<img>').attr('src', item.src))
        );

     thumbnails.append($('<li>').append(
            $('<img>').attr('src', item.src))
        );
	
	$('.thumbs').on('click', function () {
		$(this).attr('.thumbs ul li:nth-child(' + (index + 1) + ') img');
	});
		

    });
    

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


 
