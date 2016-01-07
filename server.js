var express = require('express');
var app = express();
const PORT = process.env.PORT || 3000;

var midWare = require('./midWare.js')


app.use(midWare.logger);

app.get("/about", midWare.requireAuthentication, function (req, res) {
	res.send('About us');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
	console.log("Server is running on port " + PORT + "...");
});