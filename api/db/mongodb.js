const mongoose = require('mongoose');
const config = require('../config/env');

function connect() {
  mongoose.Promise = global.Promise;

  mongoose.connect(`mongodb://${config.mongo.host}/${config.mongo.database}`, config.mongo.options).catch((err) => console.warn('Could not connect to the server'));
  return mongoose.connection;
}

module.exports = {
  connect
}
