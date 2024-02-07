const express = require('express');
const { Thought } = require('../models/Thought');

// Create a router
const router = express.Router();

// Define the routes
router.get('/api/thoughts', async (req, res) => {
  try {
    const thoughts = await Thought.find();
    res.json(thoughts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get thoughts' });
  }
});

router.post('/api/thoughts', async (req, res) => {
  try {
    const { thoughtText, username, userId } = req.body;
    const thought = await Thought.create({ thoughtText, username, userId });
    res.json(thought);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create thought' });
  }
});

// Export the router
module.exports = router;