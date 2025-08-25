const express = require('express');
const router = express.Router();

const { signup, logout } = require('../controllers/authController');

router.route('/signup').post(signup);
router.route('/logout').get(logout);

module.exports = router;
