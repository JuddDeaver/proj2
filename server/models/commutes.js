var mongoose = require('mongoose');

var commuteSchema = new mongoose.Schema({
	homeAddress: String,
	workAddress: String,
	gotoWorkTime: Number,
	leaveWorkTime: Number,
	desiredCommute: Number,
	createdAt: Date
});

mongoose.model('commute', commuteSchema);
