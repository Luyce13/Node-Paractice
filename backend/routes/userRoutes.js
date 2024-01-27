const express = require('express')
const router = express.Router()
const { registerUser, getUser } = require('../controllers/userControllers')
const { protect } = require('../middleware/authMiddleware')

router.post('/register', registerUser)
router.get('/', protect, getUser)

module.exports = router