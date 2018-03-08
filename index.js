var express = require('express');
var http = require('http');
var app = express();
var nodemailer = require('nodemailer');

app.set('port', process.env.PORT || 3000);
app.use(express.bodyParser());
app.use(express.json());


var server = http.createServer(app).listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});