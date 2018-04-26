const mongoose = require('mongoose')
const Schema = mongoose.Schema

const articleSchema = new Schema({
  title: String,
  content: String,
  author: String,
  category: String
},{
  timestamps: true
})

let Article = mongoose.model('Articles', articleSchema)

module.exports = Article
