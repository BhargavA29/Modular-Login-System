const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authMiddleware');

// @route    GET api/protected
// @desc     Access protected route
// @access   Private
router.get('/', auth, (req, res) => {
  res.json({ msg: 'Welcome to the protected route!', user: req.user });
});

module.exports = router;
