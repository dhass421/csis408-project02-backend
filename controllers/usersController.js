const User = require('../models/User');
const { registerValidation, loginValidation } = require('../config/validation');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// @desc    Create new user
// @route   POST /api/users/signup
// @access   Public
exports.createUser = async (req, res, next) => {
    
    //Validate data
    const { error } = registerValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    //Check if the email already exists
    const emailExist = await User.findOne({email: req.body.email});
    if (emailExist) return res.status(400).send('Email already exists!');

    //Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User ({
        email: req.body.email,
        password: hashedPassword
    });

    try {
        //const { email, password } = req.body;

        //Create new user
        const savedUser = await User.create(user);
    
        return res.status(201).json({
            success: true,
            data: user.id //might need to change for testing purposes
        });      
    } catch (error) {

        if(error.name === 'ValidationError') { //might not be needed
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
        
    //Validate data
    const { error } = loginValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    //Check if the email already exists
    const user = await User.findOne({email: req.body.email});
    if (!user) return res.status(400).send('Email not found!');

    //Check for correct password
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if(!validPassword) return res.status(400).send('Invalid password!');

    //Create and assign token
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
    res.header('auth-token', token).send(token);

    //res.status(200).send('Logged in!');

}