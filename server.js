var express = require('express');
var app = express();

app.use(express.static(__dirname + '/assets'));
app.set("view engine", "ejs");

app.get('/', function(req, res) {
    res.render('test.ejs');
});

app.listen(8080);