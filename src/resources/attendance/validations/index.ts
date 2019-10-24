import { Joi } from 'celebrate'

export default Joi.object().keys({
    name: Joi.string().min(3).max(20).required()
})
