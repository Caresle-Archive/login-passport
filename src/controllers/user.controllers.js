const User = require('../models/user')

const userHome = (req, res) => {
	res.render('user/welcome')
}

const userAbout = (req, res) => {
	res.render('user/about')
}

const logout = (req, res) => {
	req.logout()
	res.redirect('/')
}

const renderSignup = (req, res) => {
	res.render('user/signup')
}

const createUser = async (req, res) => {
	const user = await User.findOne({username: req.body.username})
	const errors = []
	if (user) {
		errors.push({message: 'User already exist'})
	}
	if (req.body.password !== req.body.password_2) {
		errors.push({message: 'Password doesn\'t match'})
	}

	if (errors.length > 0) {
		res.render('user/signup', {errors: errors})
	} else {
		await User.create({
			username: req.body.username,
			password: req.body.password
		})
		res.redirect('/')
	}
}

module.exports = {
	userHome,
	userAbout,
	logout,
	renderSignup,
	createUser
}