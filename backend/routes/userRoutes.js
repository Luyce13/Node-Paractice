const express = require('express')
const router = express.Router()
const { getProfileFromBody, getProfileFromParams, setProfile } = require('../controllers/userControllers')

router.route('/profile').post(setProfile).get(getProfileFromBody)
router.get('/profile/:id', getProfileFromBody);

module.exports = router
