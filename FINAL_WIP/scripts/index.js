$(document).ready(function(){


// if ($(window).width() > 1200){

// 	$('.block').mouseover(function(){
// 			$(this).fadeTo("fast", 0.50);
// 			// $(this).addClass('.do-spin');
// 			$(this).removeClass("block");
// 			$(this).addClass("grow");
// 			// $(this).css("z-index","9999");
// 			}).mouseleave(function(){
// 			$(this).fadeTo("fast", 0.85);
// 			$(this).removeClass("grow");
// 			$(this).addClass("block");

// 			});
// 	};


	$('.block#one').click(function(e){
		console.log (e);	
		if (e.currentTarget.classList.contains ('active')) {
			if ('object with x class') {

			} else {
				return;
			}
			
		}
		// console.log (e);
		console.log("clicked");
		$(this).toggleClass("active");
		$('#grid').toggleClass("active");
		$('.block#two').toggleClass("inactive");
		$('.block#three').toggleClass("inactive");
		$('.block#four').toggleClass("inactive");
	}); //end of click function
	$('.block#two').click(function(){
		console.log("clicked");
		$(this).toggleClass("active");
		$('#grid').toggleClass("active");
		$('.block#one').toggleClass("inactive");
		$('.block#three').toggleClass("inactive");
		$('.block#four').toggleClass("inactive");
	}); //end of click function
	$('.block#three').click(function(){
		console.log("clicked");
		$(this).toggleClass("active");
		$('#grid').toggleClass("active");
		$('.block#two').toggleClass("inactive");
		$('.block#one').toggleClass("inactive");
		$('.block#four').toggleClass("inactive");
	}); //end of click function
	$('.block#four').click(function(){
		console.log("clicked");
		$(this).toggleClass("active");
		$('#grid').toggleClass("active");
		$('.block#two').toggleClass("inactive");
		$('.block#three').toggleClass("inactive");
		$('.block#one').toggleClass("inactive");
	}); //end of click function

	$('#logo').click(function(){
		//write a loop that checks the class of the block
		//remove the extra classes...

	}); //end of logoclicked



});