const express = require('express');
const { registerUser, authUser, forgotPassword, resetPassword, logoutUser, getSession } = require('../controllers/authController');
const { protect } = require("../middleware/authMiddleWare");

const router = express.Router();

router.post('/signup', registerUser);
router.post('/signin', authUser);
router.post('/forgot-password', forgotPassword);
router.put('/reset-password/:resetToken', resetPassword);
router.get('/sessions', protect, getSession);
router.post('/logout', logoutUser);

module.exports = router;
