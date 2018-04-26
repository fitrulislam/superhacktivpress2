const Article = require('../models/article')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const secret = process.env.SECRET

module.exports = {
  create: (req,res) => {
    let decoded = jwt.verify(req.headers.token, secret)
    let obj = {
      title: req.body.title,
      content: req.body.content,
      author: decoded.id,
      category: req.body.category
    }
    const newArticle = new Article(obj)
    newArticle.save()
      .then(article=>{
        res.status(201).json({
          message: 'new article created',
          data: article
        })
      })
      .catch(err=>{
        res.status(500).json({
          message: 'article not created'
        })
      })
  },
  read: (req,res) => {
    Article.find()
      .then(articles=>{
        res.status(200).json({
          message: `all article data`,
          data: articles
        })
      })
      .catch(err=>{
        res.status(404).json({
          message: 'article not found'
        })
      })
  },
  readone: (req,res) => {
    Article.findOne({
      _id: req.params.id
    })
      .then(article => {
        res.status(200).json({
          message: 'read one',
          data: article
        })
      })
      .catch(err => {
        res.status(404).json({
          message: 'article not found'
        })
      })
  },
  readbyauthor: (req,res) => {
    let decoded = jwt.verify(req.headers.token, secret)
    Article.find({
      author: decoded.id
    })
      .then(articles => {
        res.status(200).json({
          message: 'article by author',
          data: articles
        })
      })
      .catch(err => {
        res.status(500).json({
          message: 'internal server error'
        })
      })
  },
  readbycategory: (req,res) => {
    Article.find({
      category: req.body.category
    })
      .then(articles => {
        res.status(200).json({
          message: 'article by category',
          data: articles
        })
      })
      .catch(err => {
        res.status(500).json({
          message: 'internal server error'
        })
      })
  },
  edit: (req,res) => {
    Article.update({
      _id: req.params.id
    },{
      $set: req.body
    })
      .then(question => {
        res.status(200).json({
          message: 'data updated',
          data: question
        })
      })
      .catch(err => {
        res.status(500).json({
          message: 'server error'
        })
      })
  },
  remove: (req,res) => {
    Article.findByIdAndRemove({
      _id: req.params.id
    })
      .then(article=>{
        res.status(200).json({
          message: 'article deleted',
          data: article
        })
      })
      .catch(err=>{
        res.status(500).json({
          message: 'article not deleted'
        })
      })
  }
}
