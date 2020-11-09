const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
	_id: {
		type: mongoose.Schema.Types.ObjectId
	},
	name: {
		type: String,
		required: true
	},
	myrate: {
		type: Number,
		required: true
	}
});

module.exports = mongoose.models.movie || mongoose.model("movie", MovieSchema);
