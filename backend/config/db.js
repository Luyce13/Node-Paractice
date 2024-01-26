const mongoose = require('mongoose')
const asyncHandler = require('express-async-handler')

const connectDB = asyncHandler(async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
})

module.exports = {connectDB}
