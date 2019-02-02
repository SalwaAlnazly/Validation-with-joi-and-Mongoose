const router = require('express').Router()
const usersController = require('../controllers/users')


router.route('/')
.get(usersController.get)
.post()


module.exports = router