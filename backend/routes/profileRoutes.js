const express = require('express')
const router = express.Router()
const { setProfile, getProfile } = require('../controllers/profileControllers')
const { protect } = require('../middleware/authMiddleware')

router.put('/:id', protect, setProfile)
router.get('/:id', protect, getProfile)

module.exports = router