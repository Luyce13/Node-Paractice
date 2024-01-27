const asyncHandler = require('express-async-handler')
const Profile = require('../models/profileModel')

const setProfile = asyncHandler(async (req, res) => {
    const { name, age, location, hobbies } = req.body
    if (!name || !age || !location || !hobbies) {
        res.status(400)
        throw new Error('Please Enter All Fields')
    }
    if (!req.user) {
        res.status(401);
        throw new Error("User Not Found")
    }
    if (req.params.id !== req.user.id) {
        res.status(401);
        throw new Error("Not Authorized")
    }
    const updatedProfile = await Profile.findByIdAndUpdate(req.params.id, req.body, {
        new: true, upsert: true
    })
    res.status(200).json({ updatedProfile });
})

const getProfile = asyncHandler(async (req, res) => {
    const profile = await Profile.find({ user: req.params._id })
    if (profile) {
        res.status(200).json(profile)
    } else {
        res.status(400)
        throw new Error('Profile Not Found')
    }
})

module.exports = { setProfile, getProfile }