const express = require('express');
const { Reaction } = require('../models/Reaction');

const router = express.Router();

router.get('/api/reactions', async (req, res) => {
  try {
    const reactions = await Reaction.find();
    res.json(reactions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get reactions' });
  }
});

router.post('/api/reactions', async (req, res) => {
  try {
    const { reactionText, username, thoughtId } = req.body;
    const reaction = await Reaction.create({ reactionText, username, thoughtId });
    res.json(reaction);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create reaction' });
  }
});

module.exports = router;