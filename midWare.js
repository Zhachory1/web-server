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
};

module.exports = midWare;