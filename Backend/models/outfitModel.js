const mongoose = require('mongoose');

const outfitSchema = new mongoose.Schema({
  image_url: String,
  description: String,
  tags: [String],
  user: {
    username: String,
    user_id: String
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

const Outfit = mongoose.model('Outfit', outfitSchema);

module.exports = Outfit;
