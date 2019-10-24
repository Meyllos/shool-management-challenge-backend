"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var celebrate_1 = require("celebrate");
var parent_controller_1 = __importDefault(require("./parent.controller"));
var validations_1 = require("./validations");
var parent = new parent_controller_1.default();
/** ******************************************* */
var parent_routers = express_1.default.Router();
/** ******************************************* */
parent_routers
    .route('/register')
    .all()
    .post(celebrate_1.celebrate({ body: validations_1.register }), parent.register);
parent_routers
    .route('/login')
    .all()
    .post(celebrate_1.celebrate({ body: validations_1.login }), parent.login);
exports.default = parent_routers;
//# sourceMappingURL=parent.routes.js.map