const mongoose = require('mongoose')
const MONGO_URI = process.env.MONGO_URI
mongoose.connect(MONGO_URI)

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error: '))

db.once('open', () => {
	console.log('db connected')
})