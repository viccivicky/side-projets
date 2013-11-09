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