const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please Enter Name'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please Enter Password']
    },
}, {
    timestamps: true,
})

module.exports = mongoose.model('User', userSchema)
