const { Router } = require('express');

const PlayerEntry = require('../models/Player');

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    const players = await PlayerEntry.find();
    res.json(players);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const playerEntry = new PlayerEntry(req.body);
    const createdScoringPlayerEntry = await playerEntry.save();
    res.json(createdScoringPlayerEntry);
  } catch (error) {
    if (error.name === 'ValidationError') res.status(422);
    next(error);
  }
});

module.exports = router;
