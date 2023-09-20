import Joi = require('joi');

export const createThreadSchema = Joi.object().keys({
    content: Joi.string().allow(null, ""),
    image: Joi.string(),
})

export const updateThreadSchema = Joi.object().keys({
    content: Joi.string(),
    image: Joi.string(),
})

export const createUserSchema = Joi.object().keys({
    full_name: Joi.string().required(),
    usernmae: Joi.string().required(),
    picture: Joi.string().allow(null, ""),
    description: Joi.string().allow(null, ""),
})