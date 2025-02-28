const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');

router.get('/protected', auth, (req, res) => {
  res.json({ message: 'Protected content accessed' });
});

module.exports = router;