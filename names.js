// backend/routes/names.js
const express = require('express');
const router = express.Router();

// Name model
const Name = require('../models/name');

// @route   GET api/names
// @desc    Get all names
// @access  Public
router.get('/', async (req, res) => {
  try {
    const names = await Name.find();
    res.json(names);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
