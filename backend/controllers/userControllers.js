const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const getProfileFromBody = asyncHandler(async (req, res) => {
    if (!req.body.userId) {
        res.status(400);
        throw new Error('Please Enter User ID')
    }
    const user = await User.findById(req.body.userId).select('-password')
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(400);
        throw new Error('User Not Found')
    }
})

const getProfileFromParams = asyncHandler(async (req, res) => {
    if (!req.params.userId) {
        res.status(400);
        throw new Error('Please Enter User ID')
    }
    const user = await User.findById(req.params.userId).select('-password')
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(400);
        throw new Error('User Not Found')
    }
})

const registerUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        res.status(400)
        throw new Error('Please Enter All Fields')
    }
    const userExists = await User.findOne({ email })
    if (userExists) {
        res.status(400)
        throw new Error('User Already Exists')
    }
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    const user = await User.create({ email, password: hashedPassword })
    if (user) {
        const token = generateToken(user.id);

        // Return both user data and token in the response
        res.status(200).json({
            _id: user.id,
            email: user.email,
            token
        })
    } else {
        res.status(400)
        throw new Error('Invalid Data')
    }

})

const getUser = asyncHandler(async (req, res) => {
    const { id, email } = req.user
    res.status(200).json({ _id: id,  email });
});

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '3d' })
}

module.exports = { registerUser, getUser }
