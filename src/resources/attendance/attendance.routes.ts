import express from 'express';
import { celebrate } from 'celebrate'
import Attendance from './attendance.controller';
import { record, update } from './validations'

const attendance = new Attendance();

/** ******************************************* */

const attendance_routers = express.Router();

/** ******************************************* */


attendance_routers
.route('/')
.all()
.put(celebrate({ body: update }), attendance.update)
.post(celebrate({ body: record }), attendance.createOne)

attendance_routers
.route('/:id')
.all()
.put(celebrate({ body: update }), attendance.update)

attendance_routers
.route('/return')
.all()
.get(attendance.getAttendances)

export default attendance_routers;