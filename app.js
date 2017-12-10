var main = function(){
	/*Height of the section is same same*/
	$('section.left').height($('section.right').outerHeight());

	$(window).resize(function(){
		$('section.left').height($('section.right').outerHeight());
	});

	/*Video move*/
	$(document).mousemove(function(e){
		var rotatex = e.pageX / 60;
		var rotatey = e.pageY / 60;
		$('section.left video').css('transform', 'rotateX(' + rotatex + 'deg) rotateY(' + rotatey + 'deg)')
	});

	/*When p clicked - the input is focus*/
	$('p.access-text').click(function(){
		$('input.phone').focus();
	});

	/*When the share link clicked - the share screen opening*/
	$('section.right p.share-text').click(function(){
		$('div.share-screen').show();
		$('body').css('overflow', 'hidden');
	});

	/*Get out from the share sceen*/
	$('div.share-screen').click(function(evt){
		if ($(evt.target).closest('div.share-window').length) return;
		else {
			$(this).hide();
			$('body').css('overflow', 'auto');
		}
	});

	$('div.share-window p.x-button').click(function(){
		$('div.share-screen').hide();
		$('body').css('overflow', 'auto');
	});

	/*The access button change the text on tablet*/
	if($(window).width() <= 1023){
			$('section.right p.submit-text').text('JOIN');
	}
	$(window).resize(function(){
		if($(window).width() <= 1023){
			$('section.right p.submit-text').text('JOIN');
		}
		else{
			$('section.right p.submit-text').text('GET ACCESS');
		}
	});
}

$(document).ready(main);