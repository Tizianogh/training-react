const { Router } = require('express');

const IrregularVerb = require('../models/Verb');

const router = Router();

router.post('/', async (req, res, next) => {
  try {
    const verbEntry = new IrregularVerb(req.body);
    const createdIrregularVerbEntry = await verbEntry.save();
    res.json(createdIrregularVerbEntry);
  } catch (error) {
    if (error.name === 'ValidationError') res.status(422);
    next(error);
  }
});

router.get('/', async (req, res, next) => {
  try {
    const verbs = await IrregularVerb.find();
    res.json(verbs);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
