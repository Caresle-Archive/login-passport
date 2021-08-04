require('dotenv').config()
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 3000
const passport = require('passport')

require('./db')
//  import routes
const indexRoutes = require('./routes/index.routes')
const userRoutes = require('./routes/user.routes')

app.set('views', path.join(__dirname, 'views'))
app.engine('hbs', exphbs({
	extname: '.hbs',
	defaultLayout: 'main',
	layoutsDir: path.join(path.join(app.get('views'), 'layouts'))
}))

app.set('view engine', 'hbs')
app.use(express.urlencoded({extended: true}))
// app.use(express.json())
app.use(passport.initialize())
require('./config/passport')
// routes
app.use(indexRoutes)
app.use(userRoutes)

app.listen(PORT, () => {
	console.log(`Server on PORT ${PORT}`)
})
