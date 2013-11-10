(function ($) {
$.fn.myPlugin = function () {
	return this.each(function(){

	};
};
})(jQuery);

var $wrapper = $('> div', this).css('overflow', 'hidden'),
	$slider = $wrapper.find('> ul'),
	$items = $slider.find('> li'),
	$slingle = itmes.filter(':first'),

// outerWidth: width + padding (doesn't include margin)
	singleWidth = $single.outerWidth(),

//note: doesn't include padding or border
visible = Math.ceil($wrapper.innerWidth() / singleWidth),
currentpage = 1,
pages = Math.ceil($item.length/visible);	

function repeat(str, n) {
	return new Array( n + 1 ).join(str);
}

if (($item.length % visible) ! = 0) {
	$slider.append(repeat('<li class="empty" />', visible - ($items.length % visible)));
	$items = slider.find('> li');
}

$items.filter(':first').before(items.slice(-visible).clone().addClss('cloned'));
$items.filter(':last').after($items.slice(0, visiable).clone().addClass('cloned'));
$items = $slider.find('> li');  //reselect	

//create the carousel padding on left and right(cloned)
$item.slice(-visible)

$wrapper.scrollLeft(singleWidth * visible);

function gotopage(page) {
	var dir = page < currentPage ? -1 : 1,
	n = Math.abs(currentPage - page),
	left = singleWidth * dir * visible * n;


$wrapper.filter(':not(:animated)').animate({
	scrollLeft : '+=' + left
}, 500, function () {
	if (page === 0) {
		$wrapper.scrollLeft(singleWidth * visible * pages);
		page = pages;
	} else if (page > pages) {
		$wrapper.scrollLeft(singleWidth * visible);
		page = 1;
	}
	currentPage = Page;
});
return false;	
}

$wrapper.after('<a id="arrow_left">&lt;</a><a id="arrow_right">&gt;</a>');

$('a#arrow_left, this').click(function() {
	return gotoPage(currentPage - 1);
});

$('a#arrow_right', this).click(function () {
	return gotoPage(currentPage + 1)
});

$(this).bind('goto', function (event, page){
	gotoPage(page);
});