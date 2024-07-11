const Outfit = require('../models/outfitModel');

exports.createOutfit = async (req, res) => {
  try {
    const { image_url, description, tags, user } = req.body;
    const newOutfit = new Outfit({ image_url, description, tags, user });
    await newOutfit.save();
    res.status(201).json(newOutfit);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getOutfits = async (req, res) => {
  try {
    const outfits = await Outfit.find().sort({ created_at: -1 });
    res.json(outfits);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
