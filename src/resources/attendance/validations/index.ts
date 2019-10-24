import { Joi } from 'celebrate'

export const record =  Joi.object().keys({
    student: Joi.string().uuid().trim().required(),
    course: Joi.string().alphanum().trim().required(),
    teacher: Joi.string().uuid().trim().required(),
    description: Joi.string().trim().min(5).max(100).required()
})

export const update =  Joi.object().keys({
    student: Joi.string().uuid().trim(),
    course: Joi.string().alphanum().trim(),
    teacher: Joi.string().uuid().trim(),
    description: Joi.string().trim().min(5).max(100).required()
})
