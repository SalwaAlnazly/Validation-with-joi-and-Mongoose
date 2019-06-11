import Joi from 'joi';

exports.SignUp = Joi.object().keys({
    email: Joi.string().email().required().label('Email'),
    username: Joi.string().alphanum().min(4).max(30).required().label('Username'),
    name: Joi.string().max(254).required().label('Name'),
    password:Joi.string().regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,30}$/).label('Password').options({
        language: {
            string: {
                regex: {
                    base: 'must have at least one lowercase letter, one uppercase letter, one digit, and one special character'
                }
            }
        }
    })
});
 