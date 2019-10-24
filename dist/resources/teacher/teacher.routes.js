"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var celebrate_1 = require("celebrate");
var teacher_controller_1 = __importDefault(require("./teacher.controller"));
var validations_1 = require("./validations");
var teacher = new teacher_controller_1.default();
/** ******************************************* */
var teacher_routers = express_1.default.Router();
/** ******************************************* */
teacher_routers
    .route('/login')
    .all()
    .post(celebrate_1.celebrate({ body: validations_1.login }), teacher.login);
teacher_routers
    .route('/register')
    .all()
    .post(celebrate_1.celebrate({ body: validations_1.register }), teacher.createOne);
exports.default = teacher_routers;
//# sourceMappingURL=teacher.routes.js.map