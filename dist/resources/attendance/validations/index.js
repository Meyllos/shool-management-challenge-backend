"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var celebrate_1 = require("celebrate");
exports.record = celebrate_1.Joi.object().keys({
    student: celebrate_1.Joi.string().uuid().trim().required(),
    course: celebrate_1.Joi.string().alphanum().trim().required(),
    teacher: celebrate_1.Joi.string().uuid().trim().required(),
    description: celebrate_1.Joi.string().trim().min(5).max(100).required()
});
exports.update = celebrate_1.Joi.object().keys({
    student: celebrate_1.Joi.string().uuid().trim(),
    course: celebrate_1.Joi.string().alphanum().trim(),
    teacher: celebrate_1.Joi.string().uuid().trim(),
    description: celebrate_1.Joi.string().trim().min(5).max(100).required()
});
//# sourceMappingURL=index.js.map