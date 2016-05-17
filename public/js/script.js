$ ( document ) . ready ( function ( ) {
	console.log("DOM is ready")
	$( '.thumb').on ( 'click', function() {
		// console.log("fixed the click bro")
		var clickedbook = $( this ) .attr ( 'title')

		console.log("you clicked: " + clickedbook)
var ajaxdata = {
	title: clickedbook
}
		$.get ('/api', ajaxdata, function ( data ) {
			console.log(data)
			$ ('#title').text (data.title)
			$ ('#author').text (data.author)
			$ ('#description').text (data.desc)
			$ ('#cover').attr ( { "src": data.cover} )
		} )
	} )
} )