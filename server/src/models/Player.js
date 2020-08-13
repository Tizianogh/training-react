const mongoose = require('mongoose');

const { Schema } = mongoose;

const topPlayerDefault = {
  default: false,
};

const playerScoringSchema = new Schema({
  pseudo: { type: String, required: true },
  score: { type: Number, required: true },
  date: { type: Date, required: true, default: Date.now() },
  topPlayer: { type: Boolean, default: false },
  image: { type: String },
});

const PlayerScoring = mongoose.model('PlayerScoring', playerScoringSchema);

module.exports = PlayerScoring;