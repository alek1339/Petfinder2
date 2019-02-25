const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const config = require('./db')
const cors = require('cors')

const users = require('./routes/users')

mongoose.Promise = global.Promise
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => { console.log('Database is connected') },
  err => { console.log('Can not connect to the database' + err) }
)

const app = express()

app.use(bodyParser.json())
app.use(cors())
app.use('/users', users)

const PORT = 5000

app.listen(PORT, () => console.log(`Server start on port ${PORT}`))
