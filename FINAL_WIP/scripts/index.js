$(document).ready(function(){

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
		$('#onePic').toggleClass("active");
		$('#grid').toggleClass("active");
		$('.block#two').toggleClass("inactive");
		$('.block#three').toggleClass("inactive");
		$('.block#four').toggleClass("inactive");
	}); //end of click function
	$('.block#two').click(function(){
		console.log("clicked");
		$(this).toggleClass("active");
		$('#twoPic').toggleClass("active");
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