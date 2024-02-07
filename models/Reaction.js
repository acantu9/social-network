const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema({
  reactionText: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  thoughtId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Thought',
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  // ... other reaction fields
});

const Reaction = mongoose.model('Reaction', reactionSchema);

module.exports = Reaction;