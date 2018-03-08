var express = require('express');
var http = require('http');
var app = express();
var nodemailer = require('nodemailer');

app.set('port', process.env.PORT || 3000);
app.use(express.bodyParser());
app.use(express.json());

app.get('/sendEmail', function (req, res){
    /*
		{
			"to":"fabianodelimaabreu@gmail.com",
			"subject":"FocusConnect [Focus Textil] - Inscricao confirmada",
			"template":0,
			"obj":{
			    "id": 1113782473,
			    "NOME": "Ailton Paizani",
			    "RG": "11111",
			    "CPF": 22222,
			    "EMAIL": "fabianoabreu@focustextil.com.br",
			    "DDD": "11",
			    "TEL": "34332443",
			    "GESTOR": "Ailton"
		  	}
		}
	*/

	var transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
		  	user: 'SeuEmail@SeuEmail.com.br',
	  		pass: 'SuaSenha'
		}
	});

	var mailOptions = {
		from: 'remetente@gmail.com',
		to: 'destinatario@outlook.com',
		subject: 'Sending Email using Node.js',
		text: 'That was easy!'
	};

	transporter.sendMail(mailOptions, function(error, info){
		if (error) {
		  console.log(error);
		} else {
		  console.log('Email Enviado com sucesso: ' + info.response);
		}
	});
});

var server = http.createServer(app).listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});