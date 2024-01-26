const express = require('express')
const dotenv = require('dotenv').config()
const { connectDB } = require('./config/db')
const port = process.env.PORT
const { errorHandler } = require('./middleware/errorMiddleware')

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api/users', require('./routes/userRoutes'))
app.use(errorHandler)

app.listen(port, console.log(`Server Started At PORT ${port}`))
