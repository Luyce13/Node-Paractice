const mongoose = require('mongoose')

const userProfile = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please Enter Name']
    },
    email: {
        type: String,
        required: [true, 'Please Enter Name'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please Enter Password']
    },
    age: {
        type: String,
        required: [true, 'Please Enter Age']
    },
    location: {
        type: String,
        required: [true, 'Please Enter Location']
    },
    hobbies: {
        type: Array,
        required: [true, 'Please Enter Hobbies']
    },
}, {
    timestamps: true,
})

module.exports = mongoose.model('User', userProfile)
