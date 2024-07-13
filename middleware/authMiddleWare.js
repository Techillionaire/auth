const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

const protect = asyncHandler(async (req, res, next) => {
    let token;

    if (req.cookies.jwt) {
        try {
            token = req.cookies.jwt;
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.id).select('-password');
            if (!req.user) {
                res.status(401).json({ message: 'Not authorized, user not found' });
                return;
            }
            next();
        } catch (error) {
            console.error('Token verification error:', error);
            res.status(401).json({ message: 'Not authorized, token failed' });
            return; // Ensure the function returns immediately after sending a response
        }
    } else {
        res.status(401).json({ message: 'Not authorized, no token' });
        return; // Ensure the function returns immediately after sending a response
    }
});

module.exports = { protect };
