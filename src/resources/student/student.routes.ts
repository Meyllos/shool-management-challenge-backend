import express from 'express';
import { celebrate } from 'celebrate'
import Student from './student.controller';
import {register } from './validations'
import { id, update } from './validations/index';

const student = new Student();

/** ******************************************* */

const student_routes = express.Router();

/** ******************************************* */

student_routes
.route('/add')
.all()
.post(celebrate({ body: register}), student.createOne)

student_routes
.route('/edit/:id')
.all(celebrate({ params: id}))
.put(celebrate({ body: update}), student.update)
.delete(student.delete)


export default student_routes;