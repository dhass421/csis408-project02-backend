//Validation
const Joi = require('@hapi/joi');

//Register validation
const registerValidation = (data) => {
    const Schema = Joi.object({
        email: Joi.string()
            .min(6)
            .required()
            .email(),
        password: Joi.string()
            .min(6)
            .required()
    });

    return Schema.validate(data);
};

//Login validation
const loginValidation = (data) => {
    const Schema = Joi.object({
        email: Joi.string()
            .min(6)
            .required()
            .email(),
        password: Joi.string()
            .min(6)
            .required()
    });

    return Schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;


