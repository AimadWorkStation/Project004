/*
	theme Name : NextG WorkShare
	Theme Coder : EmadEddin Had
	Designer : EmadEddin had
*/

$(function(){
	// to calculate the hide of slide automaticly
	var windowHeight = $(window).height(),
	//innerheght to calculate all the size paddin margin border
		upperbarHeight = $('.upper-bar').innerHeight(),
		navbarHeight = $('.navbar').innerHeight();
		$('.slider .carousel-item').height(windowHeight - (upperbarHeight+navbarHeight));

		$('.carousel').carousel({
		  interval: 5000
		});
});