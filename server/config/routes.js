var commute = require('./../controllers/commutes.js');
  module.exports = function(app) {
	app.post('/commute', function(req, res) {
		console.log("routes app.post",req.body);
	  	commute.create(req, res);
	})
  }; 