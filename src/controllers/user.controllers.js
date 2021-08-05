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

module.exports = {
	userHome,
	userAbout,
	logout
}