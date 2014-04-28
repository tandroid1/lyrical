$(function () {
	// Cache variables for later
	var list = $("#searchList").find("ul"),
		player = $("#player"),
		searchButton = $("#search"),
		request;

	// Build our search query based on form input
	searchButton.submit(function(e) {
		var search = $("input[name=search").val(),
		 	searchQuery = 'https://ws.spotify.com/search/1/track.json?q=' + search;
		console.log(searchQuery);
		request = $.ajax(searchQuery).done(function () {
			showSearchList();
		});
		e.preventDefault();
	});

	// return the list of matching songs
	function showSearchList() {	
		var jsonResponse = $.parseJSON(request.responseText),
		 	tracks = jsonResponse.tracks;

		$.each( tracks, function (key, value) {				
			list.append("<li><a href='" + value.href + "'>"+ value.name + "</a></li>");
		});

		list.show();

		list.find('a').click(function (e) {
			e.preventDefault();
			// get the uri of the clicked link
			var uri = $(this).attr('href')			
			
			showSong(uri);
		});
	}

	function showSong(uri) {
		var fullURI = "https://embed.spotify.com/?uri=" + uri;	

		// set the src attribute in the iframe to the full song uri
		player.find('iframe').attr('src', fullURI);

		list.hide();			
		player.show();
	}

});