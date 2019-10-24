"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var celebrate_1 = require("celebrate");
exports.register = celebrate_1.Joi.object().keys({
    firstname: celebrate_1.Joi.string().trim().lowercase().min(2).max(30).required(),
    lastname: celebrate_1.Joi.string().trim().lowercase().min(2).max(30).required(),
    yearofstudy: celebrate_1.Joi.number().integer().min(1).max(6).required(),
});
exports.id = celebrate_1.Joi.object().keys({
    id: celebrate_1.Joi.string().uuid().required()
});
exports.update = celebrate_1.Joi.object().keys({
    firstname: celebrate_1.Joi.string().trim().lowercase().min(2).max(30),
    lastname: celebrate_1.Joi.string().trim().lowercase().min(2).max(30),
    yearofstudy: celebrate_1.Joi.number().integer().min(1).max(6),
});
//# sourceMappingURL=index.js.map