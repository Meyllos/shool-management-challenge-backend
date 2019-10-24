import express from 'express';
import { celebrate } from 'celebrate'
import Teacher from './teacher.controller';
import { register, login } from './validations'

const teacher = new Teacher();

/** ******************************************* */

const teacher_routers = express.Router();

/** ******************************************* */

teacher_routers
.route('/login')
.all()
.post(celebrate({ body: login }), teacher.login)

teacher_routers
.route('/register')
.all()
.post(celebrate({ body: register }), teacher.createOne)

export default teacher_routers;