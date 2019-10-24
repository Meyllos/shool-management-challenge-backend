"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var teacher_routes_1 = __importDefault(require("../resources/teacher/teacher.routes"));
var student_routes_1 = __importDefault(require("../resources/student/student.routes"));
var parent_routes_1 = __importDefault(require("../resources/parent/parent.routes"));
var attendance_routes_1 = __importDefault(require("../resources/attendance/attendance.routes"));
var app = express_1.default();
// teachers routes
app.use('/teachers', teacher_routes_1.default);
// attendance
app.use('/attendances', attendance_routes_1.default);
// parent
app.use('/parents', parent_routes_1.default);
// student
app.use('/students', student_routes_1.default);
exports.default = app;
//# sourceMappingURL=index.js.map