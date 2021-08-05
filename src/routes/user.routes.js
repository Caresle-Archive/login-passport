const { Router } = require('express')
const router = Router()
const { userHome, userAbout, logout } = require('../controllers/user.controllers')
const isAuthenticated = require('../helpers/auth')
const passport = require('passport')

router.get('/user', isAuthenticated, userHome)
router.get('/user/about', isAuthenticated, userAbout)

router.post('/login', passport.authenticate('local', {
	successRedirect: '/user',
	failureRedirect: '/'
}))

router.get('/logout', logout)

module.exports = router