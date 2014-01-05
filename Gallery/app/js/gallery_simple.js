$(function(){
	var list = $('#gallery #thumbs li a');
	var largeImg = $('#largeImage');

	list.bind("click", function() {
		largeImg.attr({
			src: $(this).attr("href")
		})


		return false;

	});

});