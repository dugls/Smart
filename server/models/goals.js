const mongoose = require('mongoose');

const Schema = mongoose.Schema

const goalsSchema = new Schema({
	goal: String

},{ versionKey: 'goal' });

module.exports = mongoose.model('goal', goalsSchema, "goals");