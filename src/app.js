var express = require ('express')
var app = express()
var fs = require('fs')

var bodyParser = require('body-parser');

app.set('views', 'src/views');
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({extended: true}));

// require the resources
app.use(express.static('./public/css'));
app.use(express.static('./public/js'));
app.use(express.static('./public/images'))

// GET -------QUERY DATA
app.get('/', (req, res) => {

	fs.readFile('./resources/books.json', (error, data) => {
		if (error) {
			throw error
		} else {
		var parsedBooks = JSON.parse(data)
		console.log(parsedBooks)
		res.render('index', { books: parsedBooks } )
}
})
})

app.get( '/api', (req, res) => {
	var booktitle = req.query.title
	var bookmatch = {}

	fs.readFile('./resources/books.json', (error, data) => {
		if (error) {
			throw error
		} else {
			var parsedBooks = JSON.parse(data)

			for (var i = 0; i < parsedBooks.length; i++) {
				if (parsedBooks[i].title == booktitle) {
					bookmatch = parsedBooks[i]
				}
			}
			res.send ( bookmatch )
		}
	})
})

//POST --------BODY DATA
app.post('/seebook', function(){

})

// LOCALHOST on port 3000
var server = app.listen(3000, function () {
	console.log('Book app listening on port: ' + server.address().port);
});
