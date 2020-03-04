const User = require('../models/User');

// @desc    Create new user
// @route   POST /api/users/signup
// @access   Public
exports.createUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const user = await User.create(req.body);
    
        return res.status(201).json({
            success: true,
            data: user
        });      
    } catch (error) {

        if(error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);

            res.status(400).json({
                success: false,
                error: messages
            })
        } else {
            return res.status(500).json({
                success: false,
                error: 'Server Error'
            });  
        }
    }
}

// @desc    Create new user
// @route   POST /api/users/login
// @access   Public
exports.loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne(req.body.email);

        if(user) {
            return res.status(201).json({
                success: true,
                data: request
            });
        }
        else{
            return res.status(400).json({
                success: false,
                error: 'Login Error'
            });            
        }
    
    } catch (error) {

        if(error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);

            res.status(400).json({
                success: false,
                error: messages
            })
        } else {
            return res.status(500).json({
                success: false,
                error: 'Server Error'
            });  
        }
    }
}