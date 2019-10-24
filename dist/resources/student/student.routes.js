"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var celebrate_1 = require("celebrate");
var student_controller_1 = __importDefault(require("./student.controller"));
var validations_1 = require("./validations");
var student = new student_controller_1.default();
/** ******************************************* */
var student_routes = express_1.default.Router();
/** ******************************************* */
student_routes
    .route('/add')
    .all()
    .post(celebrate_1.celebrate({ body: validations_1.register }), student.createOne);
student_routes
    .route('/edit/:id')
    .all(celebrate_1.celebrate({ params: validations_1.id }))
    .put(celebrate_1.celebrate({ body: validations_1.update }), student.update)
    .delete(student.delete);
exports.default = student_routes;
//# sourceMappingURL=student.routes.js.map