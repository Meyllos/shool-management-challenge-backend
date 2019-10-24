import { Joi } from 'celebrate'

export const register = Joi.object().keys({
  firstname: Joi.string().trim().lowercase().min(2).max(30).required(),
  lastname: Joi.string().trim().lowercase().min(2).max(30).required(),
  yearofstudy: Joi.number().integer().min(1).max(6).required(),
})

export const id = Joi.object().keys({
    id: Joi.string().uuid().required()
})

export const update = Joi.object().keys({
  firstname: Joi.string().trim().lowercase().min(2).max(30),
  lastname: Joi.string().trim().lowercase().min(2).max(30),
  yearofstudy: Joi.number().integer().min(1).max(6),
})
