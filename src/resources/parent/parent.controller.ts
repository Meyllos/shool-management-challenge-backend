import CRUD from '../../helpers/CRUD'
import db from '../../database/models';
import { OK, BAD_REQUEST } from '../../constants/statuscode';
import Encrypt from '../../helpers/Encrypt';
import { NOT_FOUND } from '../../constants/statuscode';
import _ from 'lodash';
import SignedToken from '../../helpers/Token';

class Parent extends CRUD {
    protected model = 'Parent'

     public login = async (req: any, res: any) => {
         try {
              const { email, password } = req.body;
        let parent = await db[this.model].findOne({
            where: {
                email
            }
        })
        if (parent) {
            const token = SignedToken.login(parent.id)
            if (Encrypt.decrypt(password, parent.dataValues.password)) {
                return res.status(OK).json({
                    status: OK,
                    message: 'success login',
                    token
                })
            }
            return res.status(BAD_REQUEST).json({
                    status: BAD_REQUEST,
                    message: 'Incorrect Credentials'
                });
        };
        return res.status(NOT_FOUND).json({
            status: NOT_FOUND,
            message: 'parent doesn\'t exit, create account' 
        })
         } catch (error) {
            return res.status(BAD_REQUEST).json({
            status: BAD_REQUEST,
            error
        }) 
         }
     }

     public register = async (req: any, res: any) => {
       try {
            const data = req.body
        let student = await db['Student'].findOne({
            where: {
                id: data.student
            }
        })
        if (student) {
            let parent = await db[this.model].create({
                ...data
            })
            return res.status(OK).json({
                status: OK,
                message: 'Account created',
                result: parent
            })
        }
        return res.status(NOT_FOUND).json({
            status: NOT_FOUND,
            message: 'student doesn\'t exit in our database' 
        })
       } catch (error) {
            return res.status(BAD_REQUEST).json({
            status: BAD_REQUEST,
            error
        })
       }


     }
}

export default Parent;