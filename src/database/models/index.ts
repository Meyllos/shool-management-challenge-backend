import Sequelize from 'sequelize';
import dotenv from 'dotenv'
import { DBInterface } from '../interface/index';
import { StudentInit } from '../../resources/student/student.model';
import { ParentInit } from '../../resources/parent/parent.model';
import { TeacherInit } from '../../resources/teacher/teacher.model';
import { AttendanceInit } from '../../resources/attendance/attendance.model';

dotenv.config()

const env =  process.env.NODE_ENV || "development"
const configDb = require('../config')[env]
const url = configDb.url || process.env.DATABASE_CONNECTION_URL;

const sequelize = new Sequelize(url as string, configDb);

const db: DBInterface = {
  sequelize,
  Sequelize: Sequelize.Sequelize,
  Student: StudentInit(sequelize, Sequelize),
  Parent: ParentInit(sequelize, Sequelize),
  Teacher: TeacherInit(sequelize, Sequelize),
  Attendance: AttendanceInit(sequelize, Sequelize)
}

Object.keys(db).forEach((ModelName) => {
  if (db[ModelName].associate) {
    db[ModelName].associate(db)
  }
});

export default db;