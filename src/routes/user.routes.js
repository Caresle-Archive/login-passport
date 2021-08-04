const { Router } = require('express')
const router = Router()
const { userHome } = require('../controllers/user.controllers')
const passport = require('passport')

router.post('/user', passport.authenticate('local'), userHome)

module.exports = router