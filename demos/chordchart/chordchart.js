$(function () {
	
	var lyric = $.ajax({
		url: 'http://api.chartlyrics.com/apiv1.asmx/SearchLyric?artist=thrice',
	});
	console.log(lyric);
});