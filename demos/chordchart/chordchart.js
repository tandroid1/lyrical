$(function () {
	var lyrics = $(document).find("#lyrics");

	var spanInserted = lyrics.html().split(" ").join(" <span></span>");
	var wrapped = ("<span>").concat(spanInserted, "</span>");
	lyrics.html(wrapped);
	var refPos = lyrics.find('span:first-child').position().top;
	var newPos;
	lyrics.find('span').each(function(index) {
	    newPos = $(this).position().top   
	    if (index == 0){
	       return;
	    }
	    if (newPos == refPos){
	        $(this).prepend($(this).prev().text() + " ");
	        $(this).prev().remove();
	    } 
	    refPos = newPos;
	});

	lyrics.find('span').click(function () {
	    $(this).addClass('chords');
	});

});