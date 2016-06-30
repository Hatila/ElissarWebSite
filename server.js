var express = require('express');
var moment = require('moment');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');


var app = express();
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var transporter = nodemailer.createTransport('smtps://loick69@gmail.com:mdp@smtp.gmail.com');

app.use(express.static(__dirname + '/assets'));
app.set("view engine", "ejs");


app.get('/', function(req, res) {
    res.render('index.ejs', {moment : moment});
});

app.post('/demo',urlencodedParser, function (req, res) {
    var nom = req.body.nom;
    var prenom = req.body.prenom;
    var societe = req.body.societe;
    var email = req.body.email;
    var telephone = req.body.telephone;
    var message = req.body.message;

    var mailOptions = {
        from: '"Elissar 👥" <info@elissar.fr>', // sender address
        to: email, // list of receivers
        subject: 'Demande de demo', // Subject line
        text: message, // plaintext body
        html: '<p>Nom : </p>'+ nom + '<br/><p>prenom : </p>'+ prenom + '<br/><p>societe : </p>'+ societe + '<br/><p>telephone : </p>'+telephone// html body
    };

    transporter.sendMail(mailOptions, function(error, info){
        if(error) {
            return console.log(error);
        }
    });
    res.render('index.ejs', {moment : moment});
})

app.listen(8080);