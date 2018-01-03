const Joi = require('joi');

module.exports = {
    body: {
        first_name: Joi.string().required(),
        last_name: Joi.string().required(),
        phone: Joi.number().integer().required(),
        email: Joi.string().email().required(),
        password: Joi.string().regex(/[a-zA-Z0-9]{3,30}/).required()
    }
}