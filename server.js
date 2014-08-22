var express = require('express');
var app = express();

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}


app.use(allowCrossDomain);
app.use(express.static(__dirname + '/public'));

// app.get('/', function(req, res){
//   res.sendFile(__dirname + 'index.html');
//   res.end();
// });

app.get('/', function (req, res){
  res.send('Laplace');
});

app.get('/data_warehouse', function(req, res){
  res.sendFile(__dirname + '/public/data_warehouse.raml');
});

var port = process.env.PORT || 5000;

app.listen(port);

console.log("Listening on port " + port);