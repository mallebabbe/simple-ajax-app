var express = require ('express')
var app = express()
var fs = require('fs')

var bodyParser = require('body-parser');

app.set('views', 'src/views');
app.set('view engine', 'jade');

var jsonREADER = require ( '../my_modules/json-file-reader')

app.use(bodyParser.urlencoded({extended: true}));

// require the resources
app.use(express.static('./public/css'));
app.use(express.static('./public/js'));
app.use(express.static('./public/images'))

// GET -------QUERY DATA
app.get('/', (req, res) => {
	var filename = req.query

	jsonREADER.readJSON('./src/books.json', function (jsonData){

		res.render('index', {
			
		})
	})
})

//POST --------BODY DATA
app.post('/seebook', function(){

})

// LOCALHOST on port 3000
var server = app.listen(3000, function () {
	console.log('Book app listening on port: ' + server.address().port);
});
