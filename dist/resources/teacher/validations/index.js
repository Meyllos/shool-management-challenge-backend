"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var celebrate_1 = require("celebrate");
exports.register = celebrate_1.Joi.object().keys({
    firstname: celebrate_1.Joi.string().trim().lowercase().min(2).max(30).required(),
    lastname: celebrate_1.Joi.string().trim().lowercase().min(2).max(30).required(),
    salary: celebrate_1.Joi.number().required(),
    phone: celebrate_1.Joi.number().required(),
    password: celebrate_1.Joi.string().alphanum().trim().required(),
    email: celebrate_1.Joi.string().email().trim().required(),
    courses: celebrate_1.Joi.array().items(celebrate_1.Joi.string().trim().required()).required()
});
exports.login = celebrate_1.Joi.object().keys({
    email: celebrate_1.Joi.string().email().trim().required(),
    password: celebrate_1.Joi.string().alphanum().trim().required()
});
//# sourceMappingURL=index.js.map