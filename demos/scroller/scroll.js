$(function () {
	// cache variables
	var win = $(window),
		doc = $(document),
		lyrics = doc.find("#lyrics"),
		scroller,
		scrollSpeed = doc.find("#scrollRate"),		
		speed = scrollSpeed.val(),
		start = doc.find("#start");
		
	lyrics.css({
		height: win.height() + "px",
	});

	scrollSpeed.click(function () {
		startScroll();
	});

	/*
	 * TODO: make the scroll speed dynamic. 
	 */
	function startScroll () {
		scroller = setInterval(function () {		
			var pos = lyrics.scrollTop();
			lyrics.scrollTop(++pos);		
			if (lyrics.scrollTop >= win.innerHeight) {
				clearInterval(scroller);
			}
			console.log(scrollSpeed.val()*10);
		}, scrollSpeed.val()*10);

	}

	start.click(function () {
		if (scroller != false) {
			clearInterval(scroller);
			scroller = false;
			start.text("Start");			
		} else {
			startScroll();
			start.text("Pause");
		}
		
	});


});	