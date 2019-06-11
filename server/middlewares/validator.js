const Joi = require('joi')
const schemas = require('../schemas/user')

exports.signUp = (req, res, next) => {
    Joi.validate(req.body, schemas.SignUp, (err, result) => {
        if (!err) return next()

        res.json({ status: false, message: err.message })
    })
}
