const userHome = (req, res) => {
	res.render('user/welcome')
}

const userAbout = (req, res) => {
	res.render('user/about')
}

module.exports = {
	userHome,
	userAbout
}