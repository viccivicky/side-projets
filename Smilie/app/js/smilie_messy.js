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

//Transition Colour Background

// global variables
var prevLvlNm = 0;

var currLvlNm = 1;

//Set true when the bg is transitioning, false when not

var transition = false;

//If you want the bg change, set true
//If set false, it will only transition one colour everytime changeBG() is called

var continuousBG = true;

//Array of three values that define the rgb of the last colour

var currentArray;

var game={
//The amount of ms before the main game loop is called again

runtime: 70,

//how many levels/colours

numOfLvls:3,

//The RGB values for each "level"

colorStyles: {
	main: '255, 125,0',
	level1: '255, 125, 0',
	level2: '0,255,255',
	level3: '255,0,255',
},
}

function changeBG()

{
//We're beginning to change BG, so let's set the transition to true
transition = true;

//if we are at last level, transition from last colour to first to restart
//else, increment the currLvlNm
if(currLvlNm===game.numOfLvls){currLvlNm=1;prevLvlNm=game.numOfLvls}
else{prevLvlNm = currLvlNm;currLvlNm++}

//turn RGB into an array and place it into a var. prevArray is for previous rgb array

var prevStr.split(",");

//turn RGB into an array and place it into a var. currentArray is for previous rgb array

var currStr=game['colorStyle']['level'+currLvNm];

currentArray = currStr.split(",");

//now we have the array's transition the backgrounds

transitionBG()

};

function transitionBG() {

	//loop through the three valued in p

for (var i = prevArray.length -1; i > = 0; i --) {
	// if prevArray[0] is less than currentArray[0], add 1

if(prevArray[i]<currentArray[i]){
prevArray[i] =parseInt(prevArray[i])+1;	
}	

//if prevArray[0] is greater than currentArray[0]
else if(prevArray[i]>currentArray[i]){
	prevArray[i]=parseInt(prevArray[i])-1;
}
//set current color to new values in prevArray
game['colorStyle']['main']= prevArray[0]+','+prevArray[1]+','+prevArray[2];
}

var p = prevArray; var c = currentArray;

if(p[0]!=c[0] || p[1]!=c[1] || p[2]!=c[2]){}
else{transition = false; if(continuousBG)changeBG();}

}

function gameLoop(){

//clear screen before next draw

ctx.clearRect(0,0,canvas.width,canvas.height);

//When the colour is transitioning, continue to change the value of current to have nice steady fade.

if(transition){

	transitionBG()
}

//draw the current colorStyle variable to the canvas

ctx.fillStyle = "rgb("+game['colorStyle']['main']+");";

//make the colour fill the whole canvas

ctx.fillRect(0,0,canvas.width,canvas.height);

//call gameloop again; based on runtime variable

setTimeout('gameLoop()', game.runTime);

}









