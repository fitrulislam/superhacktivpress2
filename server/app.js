const express = require('express')
require('dotenv').config()
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()

const port = process.env.PORT || 3000
const url = 'mongodb://localhost:27017/superhacktivpress'
mongoose.connect(url, (err) => {
  if(!err) console.log('connected to database')
  else throw new Error(err)
})

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))
app.use(cors())

app.get('/', (req,res) => {
  res.send('ini home')
})
app.use('/user', require('./routes/user.js'))
app.use('/article', require('./routes/article.js'))

app.listen(port, function(req, res) {
  console.log(`App listen on ${port}`)
})
