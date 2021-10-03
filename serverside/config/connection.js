const mongoose = require('mongoose');

mongoose.connect(
	process.env.MONGODB_URI || 'mongodb://localhost/appointment'
);

module.exports = mongoose.connection;