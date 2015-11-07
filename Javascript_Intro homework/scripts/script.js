$(document).ready(function(){

	// run the moment function and display the format that we define

	// var now = moment().format("dddd, MMMM Do, YYYY, h:mm:ss A");

	// $('#date-display').click(function(){
	// 	$('#demo').append(now);

	// });//end of date display function

	$('.replace').click(function(){
		console.log("clicked on column 1")
		$(this).replaceWith('<img src="./images/crown.png">')
		// $(this).click(function(){
		// 	$(this).addClass('img');

		// })

	});//end of replace function

	$('.mouseenter').mouseenter(function(){
		console.log ("mouseenter")
		$(this).animate({
			opacity: 0.25,
		}, 1000);
		$(this).mouseleave(function(){
			console.log("mouseleave")
			$(this).animate({
				opacity: 1,

			}, 1000);
		})

	});//end of mouseenterFunction


	$('#col2').click(function(){
		($('#col2').addClass('notVis'))
	});

	// $('#color-change').click(function(){
	// 	console.log("click")
	// 	if ($('#col2').hasClass('orange')) {
	// 		$('#col2').removeClass('orange').addClass('green')
	// 	}

	// 	else {
	// 		$('#col2').removeClass('green').addClass('orange')
	// 	}
	// });//end of color change function

	$('#expand').click(function(){
		console.log("click")
		if ($('p').hasClass('hide')) {
			$('p').removeClass('hide').addClass('show')
		}

		else {
			$('p').removeClass('show').addClass('hide')
		}


	

	});//end of show/hide

	


	// $('#hide').click(function(){
	// 	$('p').hide();
	// $('#show').click(function(){
	// 	$('p').show();
	// });


}); // end of document ready function