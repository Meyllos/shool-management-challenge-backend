import express from 'express';
import { celebrate } from 'celebrate'
import Attendance from './attendance.controller';
import validation from './validations'

const attendance = new Attendance();

/** ******************************************* */

const teacher_routers = express.Router();

/** ******************************************* */

teacher_routers
.route('/')
.all()
.get(attendance.createOne)

teacher_routers
.route('/register')
.all()
.post(attendance.readOne)

export default teacher_routers;