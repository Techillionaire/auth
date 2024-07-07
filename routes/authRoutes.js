const express = require('express');
const { registerUser, authUser, forgotPassword, resetPassword, logoutUser } = require('../controllers/authController');
const { protect } = require("../middleware/authMiddleWare");

const router = express.Router();

router.post('/signup', registerUser);
router.post('/signin', authUser);
router.post('/forgot-password', forgotPassword);
router.put('/reset-password/:resetToken', resetPassword);
router.post('/logout', logoutUser);

// Example of a protected route
router.get('/profile', protect, (req, res) => {
    res.send('User profile');
});

module.exports = router;
