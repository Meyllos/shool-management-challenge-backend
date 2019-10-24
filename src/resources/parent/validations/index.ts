import { Joi } from 'celebrate'

export const register = Joi.object().keys({
    firstname: Joi.string().trim().lowercase().min(2).max(30).required(),
    lastname: Joi.string().trim().lowercase().min(2).max(30).required(),
    student: Joi.string().uuid().required(),
    phone: Joi.number().required(),
    password: Joi.string().alphanum().trim().required(),
    email: Joi.string().email().trim().required()
})

export const login = Joi.object().keys({
    email: Joi.string().email().trim().required(),
    password: Joi.string().alphanum().trim().required()
})
