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

	// i made this to fix the probleme of changing from show hide to opacity whene resizing the window
	$(window).on('resize', function(){
		$(".feature-service ul li[data-val='all']").addClass('active').siblings().removeClass('active');
		$('.feature-service .row .col-sm-6').show(1000);
		$('.feature-service .row .col-sm-6').css('opacity',1);
	});

	//shuflle features Services
	$('.feature-service ul li').on('click',function(){
	    
	    $(this).addClass('active').siblings().removeClass('active');

	     //i see here that the idea of leting the items opacity minimaze whene choosing one element 
	    // will not work nicely in mobile phones so it is better to hide element or showing theme
		if($(window).width()< 570){

			// console.log('.feature-service .row .col-sm-6'+' '+$(this).data('val'));
			if($(this).data('val') === 'all'){
				$('.feature-service .row .col-sm-6').show(1000);
			}
			else {
				$('.feature-service .row .col-sm-6').hide(1000);
				$('.feature-service .row .col-sm-6'+' '+$(this).data('val')).parent().show(1000);
			}

		}

		else{

			if($(this).data('val') === 'all'){
				$('.feature-service .row .col-sm-6').css('opacity',1);
			}
			else {
				$('.feature-service .row .col-sm-6').css('opacity',0.5);
				$('.feature-service .row .col-sm-6'+' '+$(this).data('val')).parent().css('opacity',1);
			}

		}


		


	});


});