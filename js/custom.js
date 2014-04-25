$(function () {
	// cache variables
	var win = $(window),
		doc = $(document),
		lyrics = doc.find("#lyrics"),
		scroller,
		scrollSpeed = doc.find("#scrollRate"),
		speed = scrollSpeed.val();
		
	lyrics.css({
		height: win.height() + "px",
	});

	scrollSpeed.change(function () {
		speed = scrollSpeed.val();
	});

	function startScroll () {
		scroller = setInterval(function () {		
			var pos = lyrics.scrollTop();
			lyrics.scrollTop(++pos);		
			if (lyrics.scrollTop >= win.innerHeight) {
				clearInterval(scroller);
			}
		}, scrollSpeed.val()*10);
	}

	lyrics.click(function () {
		if (scroller != false) {
			clearInterval(scroller);
			scroller = false;
		} else {
			startScroll();
		}
		
	});


});	