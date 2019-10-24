"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var celebrate_1 = require("celebrate");
var attendance_controller_1 = __importDefault(require("./attendance.controller"));
var validations_1 = require("./validations");
var attendance = new attendance_controller_1.default();
/** ******************************************* */
var attendance_routers = express_1.default.Router();
/** ******************************************* */
attendance_routers
    .route('/')
    .all()
    .put(celebrate_1.celebrate({ body: validations_1.update }), attendance.update)
    .post(celebrate_1.celebrate({ body: validations_1.record }), attendance.createOne);
attendance_routers
    .route('/:id')
    .all()
    .put(celebrate_1.celebrate({ body: validations_1.update }), attendance.update);
attendance_routers
    .route('/return')
    .all()
    .get(attendance.getAttendances);
exports.default = attendance_routers;
//# sourceMappingURL=attendance.routes.js.map