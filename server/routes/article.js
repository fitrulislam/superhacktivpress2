const router = require('express').Router()
const articleController = require('../controllers/articleController.js')

router
  .post('/create', articleController.create) // done
  .get('/read', articleController.read) // done
  .get('/readone/:id', articleController.readone) // done
  .post('/readbyauthor', articleController.readbyauthor) // done
  .post('/readbycategory', articleController.readbycategory) // done
  .post('/edit/:id', articleController.edit)
  .post('/remove/:id', articleController.remove) // done

module.exports = router
