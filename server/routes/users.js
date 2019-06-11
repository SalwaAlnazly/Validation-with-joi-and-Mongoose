const router = require('express').Router();
const validators = require('../middlewares/validator');
const usersController = require('../controllers/users');

router.route('/')
.post(validators.signUp, usersController.post)

module.exports = router
