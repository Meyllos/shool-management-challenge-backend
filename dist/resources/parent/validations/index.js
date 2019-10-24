"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var celebrate_1 = require("celebrate");
exports.register = celebrate_1.Joi.object().keys({
    firstname: celebrate_1.Joi.string().trim().lowercase().min(2).max(30).required(),
    lastname: celebrate_1.Joi.string().trim().lowercase().min(2).max(30).required(),
    student: celebrate_1.Joi.string().uuid().required(),
    phone: celebrate_1.Joi.number().required(),
    password: celebrate_1.Joi.string().alphanum().trim().required(),
    email: celebrate_1.Joi.string().email().trim().required()
});
exports.login = celebrate_1.Joi.object().keys({
    email: celebrate_1.Joi.string().email().trim().required(),
    password: celebrate_1.Joi.string().alphanum().trim().required()
});
//# sourceMappingURL=index.js.map