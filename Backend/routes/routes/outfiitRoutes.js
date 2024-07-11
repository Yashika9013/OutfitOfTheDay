const express = require('express');
const { createOutfit, getOutfits } = require('../controllers/outfitController');

const router = express.Router();

router.post('/', createOutfit);
router.get('/', getOutfits);

module.exports = router;
