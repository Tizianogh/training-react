const mongoose = require('mongoose');

const { Schema } = mongoose;

const verbSchema = new Schema({
  verbs: [{
    base: { type: String, required: true },
    pastSimple: { type: String, required: true },
    pastParticiple: { type: String, required: true },
  }]
});

const IrregularVerb = mongoose.model('IrregularVerb', verbSchema);

module.exports = IrregularVerb;
