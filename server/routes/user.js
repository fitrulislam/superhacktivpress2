const router = require('express').Router()
const userController = require('../controllers/userController.js')

router
  .post('/signup', userController.signup)
  .post('/signin', userController.signin)

module.exports = router
