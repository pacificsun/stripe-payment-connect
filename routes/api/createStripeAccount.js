const express = require('express');
const router = express.Router();

const { createAccount } = require('../../utils/stripe_functions/');

// @route GET api/stripe/createAccount
// @desc Test route
// @access Private
router.get('/', (req, res) => res.send('user profile'));
module.exports = router;
