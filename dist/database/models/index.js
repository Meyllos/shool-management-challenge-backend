"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = __importDefault(require("sequelize"));
var dotenv_1 = __importDefault(require("dotenv"));
var student_model_1 = require("../../resources/student/student.model");
var parent_model_1 = require("../../resources/parent/parent.model");
var teacher_model_1 = require("../../resources/teacher/teacher.model");
var attendance_model_1 = require("../../resources/attendance/attendance.model");
dotenv_1.default.config();
var env = process.env.NODE_ENV || "development";
var configDb = require('../config')[env];
var url = configDb.url || process.env.DATABASE_CONNECTION_URL;
var sequelize = new sequelize_1.default(url, configDb);
var db = {
    sequelize: sequelize,
    Sequelize: sequelize_1.default.Sequelize,
    Student: student_model_1.StudentInit(sequelize, sequelize_1.default),
    Parent: parent_model_1.ParentInit(sequelize, sequelize_1.default),
    Teacher: teacher_model_1.TeacherInit(sequelize, sequelize_1.default),
    Attendance: attendance_model_1.AttendanceInit(sequelize, sequelize_1.default)
};
Object.keys(db).forEach(function (ModelName) {
    if (db[ModelName].associate) {
        db[ModelName].associate(db);
    }
});
exports.default = db;
//# sourceMappingURL=index.js.map