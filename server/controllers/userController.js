const User = require('../models/user')
const {hasher} = require('../helpers/hasher')
const jwt = require('jsonwebtoken')
var bcrypt = require('bcryptjs')
const {forRegistration} = require('../helpers/email.js')
require('dotenv').config()
const secret = process.env.SECRET

module.exports = {
  signup: (req,res)=>{
    let obj = {
      name: req.body.name,
      email: req.body.email,
      username: req.body.username,
      password: hasher(req.body.password)
    }
    const newUser = new User(obj)
    newUser.save()
      .then(user=>{
        forRegistration(user.name, user.username, req.body.password)
        let token = jwt.sign({id: user._id}, secret)
        res.status(201).json({
          message: 'user created',
          token: token
        })
      })
      .catch(err=>{
        res.status(500).json({
          message: 'user not created'
        })
      })
  },
  signin: (req,res)=>{
    User.find({
      username: req.body.username
    })
      .then(user=>{
        if(user.length>0){
          let compare = bcrypt.compareSync(req.body.password, user[0].password)
          if(compare==true){
            let token = jwt.sign({id: user[0]._id}, secret)
            console.log(token)
            res.status(200).json({
              message: 'user successful login',
              token: token
            })
          } else {
            res.status(404).json({
              message: 'wrong username/password'
            })
          }
        } else {
          res.status(404).json({
            message: 'user not found'
          })
        }
      })
      .catch(err=>{
        res.status(500).json({
          message: 'data error'
        })
      })
  }
}
