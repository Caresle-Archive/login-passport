require('dotenv').config()
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 3000
const session = require('express-session')
const passport = require('passport')

require('./db')
//  import routes
const indexRoutes = require('./routes/index.routes')
const userRoutes = require('./routes/user.routes')

app.set('views', path.join(__dirname, 'views'))
app.engine('hbs', exphbs({
	extname: '.hbs',
	defaultLayout: 'main',
	layoutsDir: path.join(app.get('views'), 'layouts'),
	partialsDir: path.join(app.get('views'), 'partials')
}))

app.set('view engine', 'hbs')
app.use(express.urlencoded({extended: false}))
app.use(session({
	secret: 'secret',
	resave: false,
	saveUninitialized: true
}))

require('./config/passport')
app.use(passport.initialize())
app.use(passport.session())
// routes
app.use(indexRoutes)
app.use(userRoutes)

app.use(express.static(path.join(__dirname, 'public')))

app.listen(PORT, () => {
	console.log(`Server on PORT ${PORT}`)
})
