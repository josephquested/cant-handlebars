var express = require('express');
var exphbs = require('express-handlebars');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/robots', function (req, res) {
    res.render('robots', require('./db/data'));
});

console.log("app listening on port 3000 yo")

app.listen(3000);
