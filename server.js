var express = require('express');
var app = express();
const PORT = 3000;

var midWare = {
	requireAuthentication: function (req, res, next) {
		console.log("Private route hit!");
		next();
	},
	logger: function (req, res, next) {
		var day = new Date().toString();
		console.log("Request " + day + ": " + req.method + " " + req.originalUrl);
		next();
	}
}

app.use(midWare.logger);

app.get("/about", midWare.requireAuthentication, function (req, res) {
	res.send('About us');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
	console.log("Server is running on port " + PORT + "...");
});