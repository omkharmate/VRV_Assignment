const express = require('express');
const { authenticate } = require('../middlewares/authMiddleware');
const { authorizeRoles } = require('../middlewares/roleMiddleware');
const router = express.Router();

router.get('/admin', authenticate, authorizeRoles('Admin'), (req, res) => {
  res.send('Admin access');
});

router.get('/user', authenticate, authorizeRoles('User', 'Admin'), (req, res) => {
  res.send('User access');
});

module.exports = router;
