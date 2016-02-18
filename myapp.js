// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');

// Create an Express app object \\
var app = express();

app.use(logger('dev'));

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
	res.sendfile('seville.html', {root : './public'})
})

app.get('/canaryislands', function(req, res){
	res.sendfile('canari-island.html', {root : './public'})
})

app.get('/capeverde', function(req, res){
	res.sendfile('cape-verde.html', {root : './public'})
})

app.get('/straitofmagellan', function(req, res){
	res.sendfile('strait-of-magellan.html', {root : './public'})
})

app.get('/guam', function(req, res){
	res.sendfile('guam.html', {root : './public'})
})

app.get('/philippines', function(req, res){
	res.sendfile('philippines.html', {root : './public'})
})

app.get('/philippines', function(req, res){
	res.sendfile('philippines.html', {root : './public'})
})

app.get('/next', function(req, res){
	console.log(req.query)
	var obj = {
		location : req.query.location,
		nextLocation : req.query.next
	}

	res.send(JSON.stringify(obj) + "<br><a href=http://localhost:4000/"+req.query.next+"><button>Go to Next Location</button></a>")
})
app.use(function(req, res){
       res.send('Magellan did not travel to ' + req.url.slice(1) + '.');
   });



// Creating Server and Listening for Connections \\
var port = 4000
app.listen(port, function(){
 console.log('Server running on port ' + port);
})

