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

	//*********** shuflle features Services
	$('.feature-service ul li').on('click',function(){
	    
	    $(this).addClass('active').siblings().removeClass('active');

	     //i see here that the idea of leting the items opacity minimaze whene choosing one element 
	    // will not work nicely in mobile phones so it is better to hide element or showing theme
		if($(window).width() < 570){
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
	//******* end shuffel features

	//******* start typo


	  // The base speed per character
		time_setting = 30;
	  // How much to 'sway' between letters
		sway_setting = 50;
	  // The text to use NB use \n not real life line breaks!
		input_text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam magnam alias aspernatur libero nihil neque blanditiis modi sit, eligendi, dolore dignissimos in ad incidunt vel a eum necessitatibus quaerat aut.";
	  // Where to fill up
		target_setting = $("#TypoOutput");
		target_setting2 = $("#TypoOutput2");
	  // Launch the function!
	type(input_text, target_setting, 0, time_setting, sway_setting);
	type(input_text, target_setting2, 0, time_setting, sway_setting);

	function type(input, target, current, time, random){
	  // If the current count is larger than the length of the string, then for goodness sake, stop
		if(current > input.length){
	    // Write Complete
			//console.log("Complete.");
			
		}
		else{
	    // Increment the selector of lenght
			current += 1;
			// console.log(current);
	    // fill the target with a substring, from the 0th character to the current one
			target.text(input.substring(0,current));
	    // Wait ...
			setTimeout(function(){
	      // do the function again, with the newly incremented marker
				type(input, target, current, time, random);
	      // Time it the normal time, plus the amount of sway
			},time + random);
		}
	}

	//********** end typo

	//******** statistics counter
	$(window).on('scroll',function(){
	    var scrolling = $(window).scrollTop();
		if((scrolling >= 2800) && ($('#count1').text() === "0")){
			console.log($(window).scrollTop());
			$('#count1').jQuerySimpleCounter({end: 400,duration: 5000});
			$('#count2').jQuerySimpleCounter({end: 3098,duration: 5000});
			$('#count3').jQuerySimpleCounter({end: 433334,duration: 5000});
			$('#count4').jQuerySimpleCounter({end: 2324,duration: 4500});
		}
	});
	//********* end statistics counter


});