import express from 'express';
import { celebrate } from 'celebrate'
import Parent from './parent.controller';
import {register, login } from './validations'

const parent = new Parent();

/** ******************************************* */

const parent_routers = express.Router();

/** ******************************************* */

parent_routers
.route('/register')
.all()
.post(celebrate({ body: register }), parent.register)

parent_routers
.route('/login')
.all()
.post(celebrate({ body: login }), parent.login)

export default parent_routers;