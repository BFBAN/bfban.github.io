const mongoose = require('mongoose');
const config = require('./config');

const {
  uri
} = config.mongo;

mongoose.Promise = global.Promise;

mongoose.connect(`${uri}`, { useNewUrlParser: true, useUnifiedTopology: true });

const playerSchema = new mongoose.Schema({
  _id: Number,
  userId: Number,
  playerName: String,
  platoon: String,
  lastServer: String,
  timeStamp: { type: Date },
  usedNames: [String]
}, { collation: { locale: 'en_US', strength: 1 } });

const player = mongoose.model('playerList', playerSchema, "playerList");

const mongoConnection = mongoose.connection;

module.exports = {
  mongoConnection,
  player
};
