$(function () {
	var list = $("#searchList").find("ul"),
		player = $("#player"),
		searchButton = $("#search"),
		request;


	searchButton.submit(function(e) {
		
		var search = $("input[name=search").val();
		var searchQuery = 'https://ws.spotify.com/search/1/track.json?q=' + search;
		console.log(searchQuery);
		request = $.ajax(searchQuery).done(function () {
			showSearchList();
		});
		e.preventDefault();
	});

	
	function showSearchList() {
		
		var jsonResponse = $.parseJSON(request.responseText);
		var tracks = jsonResponse.tracks;

		$.each( tracks, function (key, value) {				
			list.append("<li><a href='" + value.href + "'>"+ value.name + "</a></li>");
		});
		list.show();

		list.find('a').click(function (e) {
			e.preventDefault();
			var uri = $(this).attr('href');
			uriString = "https://embed.spotify.com/?uri=" + uri;	
			player.find('iframe').attr('src', uriString);
			list.hide();			
			player.show();

		});
		
	}
});