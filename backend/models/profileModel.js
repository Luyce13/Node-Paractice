const mongoose = require('mongoose')

const profileSchema = mongoose.Schema({
    
    name: {
        type: String,
        required: [true, 'Please Enter Name']
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
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
}, {
    timestamps: true,
})

module.exports = mongoose.model('Profile', profileSchema)
